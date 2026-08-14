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
            <div className="border-2 border-legend px-6 py-16 text-center">
                <p className="font-legend text-[20px] uppercase tracking-[0.14em] text-legend-soft">
                    Enter a term to search the roll.
                </p>
            </div>
        );
    }

    if (filtered.length === 0) {
        return (
            <div className="stalled border-2 border-legend">
                <div className="overflow-hidden px-6 pt-10 text-center">
                    <p className="font-legend text-[28px] uppercase leading-none tracking-[0.08em] text-legend">
                        No course bound for
                    </p>
                </div>
                <div className="border-t-2 border-dashed border-legend overflow-hidden px-6 pb-10 text-center">
                    <p className="-mt-3 font-legend text-[28px] uppercase leading-none tracking-[0.08em] text-legend-soft">
                        &ldquo;{query}&rdquo;
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h1 className="mb-6 font-legend text-[34px] uppercase leading-none tracking-[0.02em] text-legend">
                {filtered.length} result{filtered.length !== 1 ? 's' : ''} for
                &ldquo;{query}&rdquo;
            </h1>
            <div className="border-t-2 border-legend">
                {filtered.map((post) => (
                    <a
                        key={post.slug}
                        href={post.slug}
                        className="group grid grid-cols-[1fr_84px] items-center gap-4 border-b border-seam py-4"
                    >
                        <>
                            <div className="order-2">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="h-[56px] w-[84px] bg-cloth-deep object-cover p-[4px]"
                                />
                            </div>
                            <div className="order-1 flex flex-col gap-1.5">
                                <div>
                                    <h3 className="font-legend text-[22px] uppercase leading-[1.06] tracking-[0.02em] text-legend group-hover:underline">
                                        {post.title}
                                    </h3>
                                    {post.description && (
                                        <p className="line-clamp-2 text-[15px] leading-6 text-legend-soft">
                                            {post.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </>
                    </a>
                ))}
            </div>
        </div>
    );
}
