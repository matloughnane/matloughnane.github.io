import { useMemo } from 'react';

interface Post {
    title: string;
    slug: string;
    image: string;
    description: string;
    /** Pre-formatted caption line, e.g. "JOURNEYS · MAR 2024". */
    caption: string;
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

    if (!query || filtered.length === 0) {
        return (
            <div className="py-20 text-center text-ink-2">
                <p className="text-lg">
                    {query
                        ? `No entries found for “${query}”`
                        : 'Enter a search term to find entries.'}
                </p>
            </div>
        );
    }

    return (
        <div>
            {/* Stated the way the album states its counts: the caption line
                carries the number, the heading carries the term. */}
            <p className="font-caption text-[13px] tracking-[0.16em] text-ink-2">
                {filtered.length} ENTR{filtered.length === 1 ? 'Y' : 'IES'}
            </p>
            <h1 className="mt-2 mb-10 text-[32px] leading-tight font-semibold tracking-[-0.015em] text-ink">
                &ldquo;{query}&rdquo;
            </h1>

            <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((post) => (
                    <article key={post.slug}>
                        <a href={post.slug} className="group flex flex-col gap-3.5">
                            {post.image && (
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    loading="lazy"
                                    className="h-[212px] w-full border border-edge object-cover sm:h-[236px]"
                                />
                            )}
                            {/* The reserve red marks the current entry and
                                nothing else, so hover is carried by the rule
                                under the title rather than by colour. */}
                            <h2 className="line-clamp-2 text-[21px] leading-7 font-semibold tracking-[-0.015em] text-ink underline decoration-transparent decoration-1 underline-offset-4 transition-[text-decoration-color] group-hover:decoration-ink">
                                {post.title}
                            </h2>
                            {post.caption && (
                                <span className="font-caption text-[12px] tracking-[0.14em] text-ink-2">
                                    {post.caption}
                                </span>
                            )}
                            {post.description && (
                                <p className="line-clamp-3 text-[15px] leading-6 text-ink-2">
                                    {post.description}
                                </p>
                            )}
                        </a>
                    </article>
                ))}
            </div>
        </div>
    );
}
