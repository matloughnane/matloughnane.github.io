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
            <div className="text-center py-20 text-gray-500">
                <p className="text-lg">
                    Enter a search term to find posts.
                </p>
            </div>
        );
    }

    if (filtered.length === 0) {
        return (
            <div className="text-center py-20 text-gray-500">
                <p className="text-lg">
                    No posts found for "{query}"
                </p>
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
                {filtered.length} result{filtered.length !== 1 ? 's' : ''} for
                &ldquo;{query}&rdquo;
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((post) => (
                    <a
                        key={post.slug}
                        href={post.slug}
                        className="group bg-white rounded-xl overflow-hidden shadow-md md:aspect-square block"
                    >
                        <div className="relative h-full flex flex-col">
                            <div className="relative overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-48 object-cover rounded-t-xl group-hover:scale-105 transition-all duration-300"
                                />
                            </div>
                            <div className="p-6 flex flex-col justify-between grow">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-gray-700 transition-colors">
                                        {post.title}
                                    </h3>
                                    {post.description && (
                                        <p className="text-sm text-gray-600 mb-3 leading-relaxed line-clamp-2">
                                            {post.description}
                                        </p>
                                    )}
                                </div>
                                <div className="mt-auto flex flex-col gap-3">
                                    <div className="flex flex-row items-center justify-end">
                                        <span className="inline-block px-4 py-2 bg-[#9A0D1B] text-white text-sm font-medium rounded-full group-hover:opacity-90 transition-opacity">
                                            {post.learnMore || 'More'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
