import { useMemo } from 'react';

interface Post {
    title: string;
    slug: string;
    image: string;
    categories: string[];
    description: string;
    learnMore?: string;
}

interface SearchResultsProps {
    posts: Post[];
}

export default function SearchResults({ posts }: SearchResultsProps) {
    const query = useMemo(() => {
        const params = new URLSearchParams(window.location.search);
        return params.get('query')?.trim() || '';
    }, []);

    const filtered = useMemo(() => {
        if (!query) return [];
        const lower = query.toLowerCase();
        return posts.filter(
            (p) =>
                p.title.toLowerCase().includes(lower) ||
                p.description.toLowerCase().includes(lower),
        );
    }, [query, posts]);

    if (!query) {
        return (
            <div className="py-16 text-fg-muted">
                <p className="text-[15px]">
                    Enter a search term to find posts.
                </p>
            </div>
        );
    }

    if (filtered.length === 0) {
        return (
            <div className="py-16 text-fg-muted">
                <p className="text-[15px]">
                    No posts found for "{query}"
                </p>
            </div>
        );
    }

    return (
        <div>
            <h1 className="mb-6 text-[19px] font-medium tracking-[-0.01em] text-fg">
                {filtered.length} result{filtered.length !== 1 ? 's' : ''} for
                &ldquo;{query}&rdquo;
            </h1>
            <div className="flex flex-col">
                {filtered.map((post) => (
                    <a
                        key={post.slug}
                        href={post.slug}
                        className="group -mx-3 flex items-baseline justify-between gap-4 rounded-md px-3 py-2.5 transition-colors hover:bg-bg-subtle"
                    >
                        <span className="text-[15px] leading-6 text-fg group-hover:text-accent">
                            {post.title}
                        </span>
                        <span
                            className="hidden h-px flex-1 self-center border-b border-dashed border-line sm:block"
                            aria-hidden="true"
                        />
                    </a>
                ))}
            </div>
        </div>
    );
}
