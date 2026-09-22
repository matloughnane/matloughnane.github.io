// JSON-LD (schema.org) builders. The site-wide WebSite/Person graph is emitted
// by global-layout.astro on every page; post-layout.astro adds a Recipe for
// kitchen entries and a BlogPosting for everything else.
//
// Recipe ingredients and steps are read from the post body rather than the
// Jekyll-era `recipeIngredient` / `recipeInstructions` frontmatter, which is
// missing, commented out or empty on half the recipes and never includes the
// sub-recipes (toppings, frosting, drizzle). The frontmatter is only a fallback.

import { rawSourceFor, stripMarkdown } from './posts';

// The `site` from astro.config.mjs, without a trailing slash.
const SITE = import.meta.env.SITE.replace(/\/$/, '');
const PERSON_ID = `${SITE}/#person`;
const WEBSITE_ID = `${SITE}/#website`;

type Schema = Record<string, unknown>;

export function siteGraph(): Schema[] {
    return [
        {
            '@type': 'Person',
            '@id': PERSON_ID,
            name: 'Mat Loughnane',
            url: `${SITE}/`,
            sameAs: [
                'https://github.com/matloughnane',
                'https://linkedin.com/in/matloughnane',
                'https://hexastudios.co',
            ],
        },
        {
            '@type': 'WebSite',
            '@id': WEBSITE_ID,
            name: 'Mat Loughnane',
            url: `${SITE}/`,
            author: { '@id': PERSON_ID },
            inLanguage: 'en',
        },
    ];
}

/** Serialise for a <script type="application/ld+json">, safe against `</script>`. */
export function toJsonLd(graph: Schema[]): string {
    return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(
        /</g,
        '\\u003c'
    );
}

// ── Recipe body parsing ────────────────────────────────────────────────────

interface Section {
    heading: string;
    items: string[];
}

interface Block {
    heading: string;
    sections: Section[];
}

/**
 * Split markdown into `#` blocks, each holding `##` sections of top-level
 * list items. Nested bullets, prose, images and HTML are dropped — a section
 * with no list (a "Side Note") simply ends up empty.
 */
function parseBlocks(markdown: string): Block[] {
    const blocks: Block[] = [];
    let block: Block | null = null;
    let section: Section | null = null;
    let inFence = false;

    for (const line of markdown.split('\n')) {
        if (line.trim().startsWith('```')) inFence = !inFence;
        if (inFence) continue;

        const h1 = line.match(/^#\s+(.+?)\s*#*\s*$/);
        const h2 = line.match(/^#{2,6}\s+(.+?)\s*#*\s*$/);
        const item = line.match(/^(?:[-*+]|\d+[.)])\s+(.+)$/);

        if (h1) {
            section = { heading: '', items: [] };
            block = { heading: h1[1], sections: [section] };
            blocks.push(block);
        } else if (h2 && block) {
            section = { heading: h2[1].replace(/:$/, ''), items: [] };
            block.sections.push(section);
        } else if (item && section) {
            const text = stripMarkdown(item[1]);
            if (text) section.items.push(text);
        }
    }

    return blocks;
}

function parseRecipeBody(markdown: string) {
    const blocks = parseBlocks(markdown);
    const ingredientsAt = blocks.findIndex((b) => /ingredients/i.test(b.heading));
    if (ingredientsAt === -1) return { ingredients: [], instructions: [] };

    const ingredients = blocks[ingredientsAt].sections.flatMap((s) => s.items);

    // Everything after the ingredients is method, whatever it is headed —
    // "Method", "Steps", or the first stage's own name ("Marinade").
    const stages: Section[] = blocks.slice(ingredientsAt + 1).flatMap((b) =>
        b.sections.map((s, i) => ({
            heading: i === 0 ? b.heading : s.heading,
            items: s.items,
        }))
    );
    const withSteps = stages.filter((s) => s.items.length > 0);

    const steps = (items: string[]) =>
        items.map((text) => ({ '@type': 'HowToStep', text }));

    const instructions =
        withSteps.length === 1
            ? steps(withSteps[0].items)
            : withSteps.map((s) => ({
                  '@type': 'HowToSection',
                  name: s.heading,
                  itemListElement: steps(s.items),
              }));

    return { ingredients, instructions };
}

// ── Durations ──────────────────────────────────────────────────────────────

function minutesOf(duration?: string): number | null {
    const match = duration?.match(/^PT(?:(\d+)H)?(?:(\d+)M)?$/);
    if (!match || (!match[1] && !match[2])) return null;
    return Number(match[1] || 0) * 60 + Number(match[2] || 0);
}

function isoDuration(minutes: number): string {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `PT${h ? `${h}H` : ''}${m || !h ? `${m}M` : ''}`;
}

// ── Page schemas ───────────────────────────────────────────────────────────

export interface PostSchemaInput {
    file: string;
    url: URL;
    title: string;
    description: string;
    image: URL;
    datePublished?: string;
    tags: string[];
    frontmatter: Record<string, any>;
}

export function blogPostingSchema(post: PostSchemaInput): Schema {
    return {
        '@type': 'BlogPosting',
        '@id': `${post.url.href}#article`,
        mainEntityOfPage: post.url.href,
        headline: post.title,
        description: post.description,
        image: post.image.href,
        datePublished: post.datePublished,
        author: { '@id': PERSON_ID },
        publisher: { '@id': PERSON_ID },
        isPartOf: { '@id': WEBSITE_ID },
        keywords: post.tags.length ? post.tags.join(', ') : undefined,
        inLanguage: 'en',
    };
}

export function recipeSchema(post: PostSchemaInput): Schema {
    const fm = post.frontmatter;
    const parsed = parseRecipeBody(rawSourceFor(post.file));

    const fallbackIngredients = (fm.recipeIngredient || []).filter(
        (i: unknown) => typeof i === 'string' && i.trim()
    );
    const ingredients = parsed.ingredients.length
        ? parsed.ingredients
        : fallbackIngredients.map((i: string) => i.trim());
    const instructions = parsed.instructions.length
        ? parsed.instructions
        : fm.recipeInstructions?.trim() || undefined;

    const prep = minutesOf(fm.prepTime);
    const cook = minutesOf(fm.cookTime);
    const total = prep !== null || cook !== null ? (prep ?? 0) + (cook ?? 0) : null;

    return {
        '@type': 'Recipe',
        '@id': `${post.url.href}#recipe`,
        mainEntityOfPage: post.url.href,
        name: post.title,
        description: post.description,
        image: [post.image.href],
        datePublished: post.datePublished,
        author: { '@id': PERSON_ID },
        isPartOf: { '@id': WEBSITE_ID },
        prepTime: prep !== null ? fm.prepTime : undefined,
        cookTime: cook !== null ? fm.cookTime : undefined,
        totalTime: total !== null ? isoDuration(total) : undefined,
        recipeYield: fm.recipeYield,
        recipeCategory: fm.recipeCategory,
        recipeCuisine: fm.recipeCuisine,
        keywords: post.tags.length ? post.tags.join(', ') : undefined,
        recipeIngredient: ingredients.length ? ingredients : undefined,
        recipeInstructions: instructions,
        inLanguage: 'en',
    };
}
