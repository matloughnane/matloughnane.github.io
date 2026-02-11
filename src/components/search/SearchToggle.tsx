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
                className="text-white/70 hover:text-white transition-colors cursor-pointer"
                aria-label="Open search"
            >
                <Search size={iconSize} />
            </button>
        );
    }

    return (
        <div className="flex items-center gap-2">
            <Search size={iconSize} className="text-white/70 shrink-0" />
            <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search posts..."
                className="bg-transparent border-b border-white/50 text-white placeholder-white/40 outline-none text-sm py-1 w-32 sm:w-48"
            />
            <button
                onClick={close}
                className="text-white/70 hover:text-white transition-colors cursor-pointer"
                aria-label="Close search"
            >
                <X size={iconSize - 2} />
            </button>
        </div>
    );
}
