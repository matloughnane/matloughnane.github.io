// Shared post-loading util. Globs the file-based posts in src/pages/posts,
// shapes each into a summary, filters out drafts/WIP, and sorts newest-first.
// Consumed by the homepage (latest-posts.astro) and the paginated /posts route.

export interface PostSummary {
    title: string;
    image: string;
    categories: string[];
    slug: string; // "/posts/<slug>"
    date: string;
    description: string;
    url: string | undefined;
    learnMore: string;
    draft: boolean;
    tags: string[];
}

// import.meta.glob is relative to this file: src/lib -> src/pages/posts
const allPosts = import.meta.glob('../pages/posts/*.{md,mdx}', {
    eager: true,
});

// Astro 7 no longer exposes rawContent()/body on globbed .mdx modules, so
// description scraping silently produced nothing for every .mdx post. Pull the
// source text directly instead — same files, read at build time.
const rawSources = import.meta.glob('../pages/posts/*.{md,mdx}', {
    eager: true,
    query: '?raw',
    import: 'default',
}) as Record<string, string>;

/** Source text with the frontmatter block removed. */
function bodyOf(path: string): string {
    const raw = rawSources[path] || '';
    return raw.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '');
}

/** Raw body of a post, looked up by the absolute path Astro gives layouts. */
export function rawSourceFor(file: string): string {
    const name = file.split('/').pop();
    const path = Object.keys(rawSources).find((p) => p.endsWith(`/${name}`));
    return path ? bodyOf(path) : '';
}

/** Inline markdown down to plain text. */
export function stripMarkdown(text: string): string {
    return (
        text
            // Remove markdown images ![alt](url) -> alt
            .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1')
            // Remove markdown links [text](url) -> text
            .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
            // Remove markdown emphasis **text** or *text* -> text
            .replace(/\*\*([^*]+)\*\*/g, '$1')
            .replace(/\*([^*]+)\*/g, '$1')
            // Remove markdown code `text` -> text
            .replace(/`([^`]+)`/g, '$1')
            // Remove HTML tags <tag> -> (empty)
            .replace(/<[^>]+>/g, '')
            // Clean up multiple spaces
            .replace(/\s+/g, ' ')
            .trim()
    );
}

/** Cut to a word boundary rather than mid-word, and say so with an ellipsis. */
function truncateOnWord(text: string, limit: number): string {
    if (text.length <= limit) return text;
    const clipped = text.slice(0, limit);
    const lastSpace = clipped.lastIndexOf(' ');
    return `${clipped.slice(0, lastSpace > 60 ? lastSpace : limit).replace(/[\s,;:.–-]+$/, '')}…`;
}

export function getSortedPosts(): PostSummary[] {
    return Object.entries(allPosts)
        .map(([path, post]: [string, any]) => {
            const slug =
                path
                    .split('/')
                    .pop()
                    ?.replace(/\.(md|mdx)$/, '') || '';

            // An authored `description:` in frontmatter always wins; only fall
            // back to scraping the first line of content when there isn't one.
            let description = (post.frontmatter?.description || '').trim();

            // Works for both .md and .mdx, unlike the module-level accessors.
            const content = bodyOf(path);

            if (!description && content) {
                const lines = content.split('\n');
                // Take the first couple of prose lines, not just one — a single
                // opening line is often too short to say anything.
                const collected: string[] = [];

                for (const line of lines) {
                    const trimmed = line.trim();
                    if (
                        trimmed &&
                        !trimmed.startsWith('#') &&
                        !trimmed.startsWith('---') &&
                        !trimmed.startsWith('!') &&
                        !trimmed.startsWith('import ') &&
                        !trimmed.startsWith('<')
                    ) {
                        const cleanDescription = stripMarkdown(trimmed);

                        if (cleanDescription) collected.push(cleanDescription);

                        // Two lines, or one that already says enough.
                        const joined = collected.join(' ');
                        if (collected.length >= 2 || joined.length >= 150) break;
                    }
                }

                description = truncateOnWord(collected.join(' '), 200);
            }

            return {
                title: post.frontmatter?.title,
                image: post.frontmatter?.image,
                categories: post.frontmatter?.categories || [],
                slug: `/posts/${slug}`,
                date: post.frontmatter?.date || slug.substring(0, 10),
                description,
                url: post.url,
                learnMore: post.frontmatter?.learn_more || '',
                draft: post.frontmatter?.draft || false,
                tags: post.frontmatter?.tags || [],
            };
        })
        .filter(
            (post) =>
                post.title &&
                !post.draft &&
                !post.tags.includes('wip') &&
                !post.tags.includes('WIP')
        )
        .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
}

// ── Album groupings ────────────────────────────────────────────────────────
// Frontmatter categories are inconsistent across six years of posts (Travel,
// Recipes, Code, plus one-offs like "Ferry, Kiosk, Hardware"). The album shows
// three shelves, so map onto those rather than surfacing raw categories.

export type AlbumGroup = 'journeys' | 'kitchen' | 'builds';

const GROUP_BY_CATEGORY: Record<string, AlbumGroup> = {
    travel: 'journeys',
    recipes: 'kitchen',
    recipe: 'kitchen',
    food: 'kitchen',
    code: 'builds',
    hardware: 'builds',
    kiosk: 'builds',
};

export const GROUP_LABELS: Record<AlbumGroup, string> = {
    journeys: 'Journeys',
    kitchen: 'Kitchen',
    builds: 'Builds',
};

/** The album shelf a post belongs to, or null when nothing matches. */
export function albumGroup(categories: string[] = []): AlbumGroup | null {
    for (const category of categories) {
        const group = GROUP_BY_CATEGORY[category.trim().toLowerCase()];
        if (group) return group;
    }
    return null;
}

export interface GroupCount {
    group: AlbumGroup;
    label: string;
    count: number;
    /** A few real titles from the group, for the contents index. */
    examples: string[];
}

/**
 * Real counts per shelf, derived from the published posts rather than written
 * down — so the album never claims a number the archive cannot back up.
 */
export function getCategoryCounts(): GroupCount[] {
    const posts = getSortedPosts();
    const order: AlbumGroup[] = ['journeys', 'kitchen', 'builds'];

    return order.map((group) => {
        const matching = posts.filter((post) => albumGroup(post.categories) === group);
        return {
            group,
            label: GROUP_LABELS[group],
            count: matching.length,
            examples: matching.slice(0, 5).map((post) => post.title),
        };
    });
}

/** Total published entries — the album's own headline number. */
export function getEntryCount(): number {
    return getSortedPosts().length;
}
