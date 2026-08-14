import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';

interface SearchToggleProps {
    variant?: 'hero' | 'subnav';
}

export default function SearchToggle({ variant = 'hero' }: SearchToggleProps) {
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

    const iconSize = variant === 'hero' ? 20 : 18;

    if (!open) {
        return (
            <button
                onClick={() => setOpen(true)}
                className="text-legend-soft hover:text-legend transition-colors cursor-pointer"
                aria-label="Open search"
            >
                <Search size={iconSize} />
            </button>
        );
    }

    return (
        <div className="flex items-center gap-2 border border-seam bg-cloth px-3 py-1.5 animate-[searchExpand_0.3s_ease-out] has-[input:focus-visible]:outline has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-legend">
            <Search size={iconSize} className="text-legend-soft shrink-0" />
            <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search posts..."
                className="w-full bg-transparent font-legend uppercase tracking-[0.1em] text-legend caret-legend outline-none placeholder:text-legend-soft md:w-44"
            />
            <button
                onClick={close}
                className="text-legend-soft hover:text-legend transition-colors cursor-pointer"
                aria-label="Close search"
            >
                <X size={iconSize - 2} />
            </button>
            <style>{`
                @keyframes searchExpand {
                    from { opacity: 0; transform: scaleX(0.6); }
                    to { opacity: 1; transform: scaleX(1); }
                }
            `}</style>
        </div>
    );
}
