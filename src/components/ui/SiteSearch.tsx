import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { scrollToSection } from "../../lib/lenis";
import { SEARCH_INDEX } from "../../lib/searchIndex";
import { cn } from "../../lib/utils";

const PLACEHOLDERS = [
  "Search services...",
  "Search industries...",
  "Search case studies...",
  "Search about PredictByte...",
  "Find Contact / Book a Call...",
];

export function SiteSearch({
  onNavigate,
  className,
}: {
  onNavigate?: () => void;
  className?: string;
}) {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = window.setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % PLACEHOLDERS.length);
    }, 3000);
    return () => window.clearInterval(interval);
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return SEARCH_INDEX.filter((item) => item.label.toLowerCase().includes(q)).slice(0, 6);
  }, [query]);

  const isServiceId = (id: string) => id === "services" || id.startsWith("svc-");

  const go = (id: string) => {
    if (isServiceId(id)) {
      navigate(id === "services" ? "/services" : `/services#${id}`);
    } else if (location.pathname === "/") {
      scrollToSection(id);
    } else {
      navigate(`/#${id}`);
    }
    setQuery("");
    inputRef.current?.blur();
    setFocused(false);
    onNavigate?.();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (results[0]) go(results[0].id);
  };

  return (
    <div className={cn("relative w-full", className)}>
      <form onSubmit={handleSubmit} className="glass relative flex h-11 w-full items-center rounded-full px-4">
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0 text-secondary"
        >
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>

        <div className="relative ml-2.5 flex-1">
          <input
            ref={inputRef}
            type="text"
            value={query}
            data-cursor="text"
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => window.setTimeout(() => setFocused(false), 150)}
            className="w-full bg-transparent text-sm text-white placeholder:text-transparent focus:outline-none"
          />
          {!query && (
            <div className="pointer-events-none absolute inset-0 flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={placeholderIndex}
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="block truncate text-sm text-secondary"
                >
                  {PLACEHOLDERS[placeholderIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          )}
        </div>
      </form>

      <AnimatePresence>
        {focused && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="glass absolute left-0 top-[calc(100%+10px)] z-30 w-full min-w-[240px] overflow-hidden rounded-2xl py-1"
          >
            {results.map((item) => (
              <button
                key={item.id}
                type="button"
                data-cursor="link"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => go(item.id)}
                className="block w-full px-4 py-2.5 text-left text-[13px] text-secondary transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
