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

export function getSortedPosts(): PostSummary[] {
    return Object.entries(allPosts)
        .map(([path, post]: [string, any]) => {
            const slug =
                path
                    .split('/')
                    .pop()
                    ?.replace(/\.(md|mdx)$/, '') || '';

            // Extract first line of content as description
            let description = '';

            // Handle both .md and .mdx files
            let content = '';
            if (post.rawContent && typeof post.rawContent === 'function') {
                content = post.rawContent();
            } else if (post.body) {
                content = post.body;
            } else if (
                post.compiledContent &&
                typeof post.compiledContent === 'function'
            ) {
                content = post.compiledContent();
            }

            if (content) {
                const lines = content.split('\n');
                // Find the first non-empty line that's not a heading, frontmatter, or import
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
                        // Strip markdown formatting
                        let cleanDescription = trimmed
                            // Remove markdown links [text](url) -> text
                            .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
                            // Remove markdown emphasis **text** or *text* -> text
                            .replace(/\*\*([^*]+)\*\*/g, '$1')
                            .replace(/\*([^*]+)\*/g, '$1')
                            // Remove markdown code `text` -> text
                            .replace(/`([^`]+)`/g, '$1')
                            // Remove markdown images ![alt](url) -> alt
                            .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1')
                            // Remove HTML tags <tag> -> (empty)
                            .replace(/<[^>]+>/g, '')
                            // Clean up multiple spaces
                            .replace(/\s+/g, ' ')
                            .trim();

                        description = cleanDescription.substring(0, 150); // Limit to 150 characters
                        break;
                    }
                }
            }

            // Fallback description if extraction failed
            if (!description) {
                description = `Read about ${post.frontmatter?.title || 'this post'} on Mat Loughnane's blog.`;
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
