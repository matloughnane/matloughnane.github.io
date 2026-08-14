import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';

export default function SearchToggle() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (open && inputRef.current) {
            inputRef.current.focus();
        }
    }, [open]);

    const handleSubmit = () => {
        const trimmed = query.trim();
        if (trimmed) {
            window.location.href = `/search?query=${encodeURIComponent(trimmed)}`;
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSubmit();
        } else if (e.key === 'Escape') {
            setOpen(false);
            setQuery('');
        }
    };

    const close = () => {
        setOpen(false);
        setQuery('');
    };

    if (!open) {
        return (
            <button
                onClick={() => setOpen(true)}
                className="cursor-pointer text-ink-2 transition-colors hover:text-ink"
                aria-label="Open search"
            >
                <Search size={18} />
            </button>
        );
    }

    return (
        // The field is a leaf laid on the ground, ruled with the same hairline
        // as the nav. Focus takes the cloth outline the rest of the site uses —
        // in the dark the cloth is too near the ground to read, so it swaps to
        // on-cloth, exactly as the global :focus-visible rule does.
        <div
            role="search"
            className="search-field flex items-center gap-2 rounded-full border border-edge bg-leaf px-3.5 py-1.5 outline-offset-3 outline-cloth animate-[searchExpand_0.3s_ease-out] has-[input:focus-visible]:outline-2 dark:outline-on-cloth"
        >
            <Search size={18} className="shrink-0 text-ink-2" />
            <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search posts…"
                aria-label="Search posts"
                className="w-full bg-transparent text-sm text-ink caret-cloth outline-none placeholder:text-ink-2 md:w-48 dark:caret-ink"
            />
            <button
                onClick={close}
                className="cursor-pointer text-ink-2 transition-colors hover:text-ink"
                aria-label="Close search"
            >
                <X size={16} />
            </button>
            <style>{`
                @keyframes searchExpand {
                    from { opacity: 0; transform: scaleX(0.6); }
                    to { opacity: 1; transform: scaleX(1); }
                }
                @media (prefers-reduced-motion: reduce) {
                    .search-field { animation: none; }
                }
            `}</style>
        </div>
    );
}
