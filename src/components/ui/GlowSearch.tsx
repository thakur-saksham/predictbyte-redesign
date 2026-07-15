import { useMemo, useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { scrollToSection } from "../../lib/lenis";
import styles from "./GlowSearch.module.css";

const INDEX = [
  { label: "Home", id: "home" },
  { label: "About PredictByte", id: "about" },
  { label: "Our Process", id: "process" },
  { label: "Industries", id: "industries" },
  { label: "Featured Projects", id: "projects" },
  { label: "Contact / Book a Call", id: "contact" },
  { label: "Services — all", id: "services" },
  { label: "Services — Web Development", id: "svc-web-development" },
  { label: "Services — Mobile App Development", id: "svc-mobile-app-development" },
  { label: "Services — UI/UX Design", id: "svc-ui-ux-design" },
  { label: "Services — SEO Services", id: "svc-seo-services" },
  { label: "Services — Digital Marketing", id: "svc-digital-marketing" },
  { label: "Services — AI Solutions", id: "svc-ai-solutions" },
  { label: "Services — Cloud Services", id: "svc-cloud-services" },
  { label: "Services — DevOps", id: "svc-devops" },
  { label: "Services — E-Commerce Development", id: "svc-e-commerce-development" },
  { label: "Services — ERP Solutions", id: "svc-erp-solutions" },
  { label: "Services — CRM Solutions", id: "svc-crm-solutions" },
  { label: "Services — Dedicated Developers", id: "svc-dedicated-developers" },
];

export function GlowSearch({ onNavigate }: { onNavigate?: () => void }) {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return INDEX.filter((item) => item.label.toLowerCase().includes(q)).slice(0, 6);
  }, [query]);

  const select = (id: string) => {
    scrollToSection(id);
    setQuery("");
    inputRef.current?.blur();
    setFocused(false);
    onNavigate?.();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && results[0]) {
      select(results[0].id);
    }
    if (e.key === "Escape") {
      inputRef.current?.blur();
    }
  };

  return (
    <div className={styles.poda}>
      <div className={styles.glow} />
      <div className={styles.darkBorderBg} />
      <div className={styles.darkBorderBg} />
      <div className={styles.darkBorderBg} />
      <div className={styles.white} />
      <div className={styles.border} />
      <div className={styles.main}>
        <input
          ref={inputRef}
          placeholder="Search the site..."
          type="text"
          className={styles.input}
          data-cursor="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => window.setTimeout(() => setFocused(false), 120)}
          onKeyDown={handleKeyDown}
        />
        <div className={styles.inputMask} />
        <div className={styles.pinkMask} />
        <div className={styles.filterBorder} />
        <div className={styles.filterIcon}>
          <svg preserveAspectRatio="none" height="18" width="18" viewBox="4.8 4.56 14.832 15.408" fill="none">
            <path
              d="M8.16 6.65002H15.83C16.47 6.65002 16.99 7.17002 16.99 7.81002V9.09002C16.99 9.56002 16.7 10.14 16.41 10.43L13.91 12.64C13.56 12.93 13.33 13.51 13.33 13.98V16.48C13.33 16.83 13.1 17.29 12.81 17.47L12 17.98C11.24 18.45 10.2 17.92 10.2 16.99V13.91C10.2 13.5 9.97 12.98 9.73 12.69L7.52 10.36C7.23 10.08 7 9.55002 7 9.20002V7.87002C7 7.17002 7.52 6.65002 8.16 6.65002Z"
              stroke="#d6d6e6"
              strokeWidth="1"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className={styles.searchIcon}>
          <svg width="16" viewBox="0 0 24 24" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" height="16" fill="none">
            <circle stroke="#b6a9b7" r="8" cy="11" cx="11" />
            <line stroke="#b6a9b7" y2="16.65" y1="22" x2="16.65" x1="22" />
          </svg>
        </div>

        <AnimatePresence>
          {focused && results.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className={`glass ${styles.results}`}
            >
              {results.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  data-cursor="link"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => select(item.id)}
                  className="block w-full px-4 py-2.5 text-left text-[13px] text-secondary transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
