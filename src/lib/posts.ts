// Shared post-loading util. Globs the file-based posts in src/pages/posts,
// shapes each into a summary, filters out drafts/WIP, and sorts newest-first.

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

/** Cut to a word boundary rather than mid-word, and say so with an ellipsis. */
function truncateOnWord(text: string, limit: number): string {
    if (text.length <= limit) return text;
    const clipped = text.slice(0, limit);
    const lastSpace = clipped.lastIndexOf(' ');
    return `${clipped
        .slice(0, lastSpace > 60 ? lastSpace : limit)
        .replace(/[\s,;:.–-]+$/, '')}…`;
}

export function getSortedPosts(): PostSummary[] {
    return Object.entries(allPosts)
        .map(([path, post]: [string, any]) => {
            const slug =
                path
                    .split('/')
                    .pop()
                    ?.replace(/\.(md|mdx)$/, '') || '';

            // An authored `description:` always wins; only fall back to reading
            // the opening prose when there isn't one.
            let description = (post.frontmatter?.description || '').trim();
            const content = bodyOf(path);

            if (!description && content) {
                const collected: string[] = [];

                for (const line of content.split('\n')) {
                    const trimmed = line.trim();
                    if (
                        trimmed &&
                        !trimmed.startsWith('#') &&
                        !trimmed.startsWith('---') &&
                        !trimmed.startsWith('!') &&
                        !trimmed.startsWith('import ') &&
                        !trimmed.startsWith('<')
                    ) {
                        const clean = trimmed
                            .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
                            .replace(/\*\*([^*]+)\*\*/g, '$1')
                            .replace(/\*([^*]+)\*/g, '$1')
                            .replace(/`([^`]+)`/g, '$1')
                            .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1')
                            .replace(/<[^>]+>/g, '')
                            .replace(/\s+/g, ' ')
                            .trim();

                        if (clean) collected.push(clean);
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

// ── Destinations ───────────────────────────────────────────────────────────
// A blind lists destinations. Categories are inconsistent across six years
// (Travel, Recipes, Code, plus one-offs like "Ferry, Kiosk, Hardware"), so map
// them onto the three the board actually shows. The legend is the data.

export type Destination = 'travel' | 'recipes' | 'code';

const DESTINATION_BY_CATEGORY: Record<string, Destination> = {
    travel: 'travel',
    recipes: 'recipes',
    recipe: 'recipes',
    food: 'recipes',
    code: 'code',
    hardware: 'code',
    kiosk: 'code',
};

export const DESTINATION_LABELS: Record<Destination, string> = {
    travel: 'TRAVEL',
    recipes: 'RECIPES',
    code: 'CODE',
};

/** The destination a post is bound for, or null when nothing matches. */
export function destinationOf(categories: string[] = []): Destination | null {
    for (const category of categories) {
        const found = DESTINATION_BY_CATEGORY[category.trim().toLowerCase()];
        if (found) return found;
    }
    return null;
}

export interface DestinationCount {
    destination: Destination;
    label: string;
    count: number;
}

/** Counts per destination, derived rather than written down. */
export function getDestinationCounts(): DestinationCount[] {
    const posts = getSortedPosts();
    const order: Destination[] = ['travel', 'recipes', 'code'];

    return order.map((destination) => ({
        destination,
        label: DESTINATION_LABELS[destination],
        count: posts.filter((p) => destinationOf(p.categories) === destination)
            .length,
    }));
}

export function getEntryCount(): number {
    return getSortedPosts().length;
}
