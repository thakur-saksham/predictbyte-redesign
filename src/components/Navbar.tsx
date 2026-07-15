import { useEffect, useState, type MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiSearch, FiSun, FiMoon } from "react-icons/fi";
import { scrollToSection } from "../lib/lenis";
import { useActiveSection } from "../hooks/useActiveSection";
import { SiteSearch } from "./ui/SiteSearch";

const LINKS = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services", route: "/services" },
  { label: "Industries", id: "industries", route: "/industries" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const HOMEPAGE_SECTION_IDS = LINKS.filter((l) => !l.route).map((l) => l.id);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const onHome = location.pathname === "/";
  const scrollActive = useActiveSection(HOMEPAGE_SECTION_IDS);
  const active = onHome
    ? scrollActive
    : LINKS.find((link) => link.route === location.pathname)?.id ?? "home";

  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const stored = localStorage.getItem('pb-theme');
      return stored === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('pb-theme', theme);
    } catch {}
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || mobileSearchOpen ? "hidden" : "";
  }, [menuOpen, mobileSearchOpen]);

  const go = (link: (typeof LINKS)[number]) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMenuOpen(false);
    if (link.route) {
      navigate(link.route);
      return;
    }
    if (onHome) {
      scrollToSection(link.id);
    } else {
      navigate(`/#${link.id}`);
    }
  };

  const hrefFor = (link: (typeof LINKS)[number]) => link.route ?? `#${link.id}`;

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed inset-x-0 top-6 z-50 flex justify-center px-4"
      >
        <motion.nav
          animate={{
            paddingTop: scrolled ? 8 : 14,
            paddingBottom: scrolled ? 8 : 14,
            backdropFilter: scrolled ? "blur(28px)" : "blur(16px)",
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="glass flex w-full max-w-nav items-center justify-between gap-4 rounded-full px-6 shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
          style={{
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 40px rgba(0,0,0,0.35)",
          }}
        >
          
          <a
            href="/"
            onClick={go({ label: "Home", id: "home" })}
            data-cursor="link"
            className="brand-logo shrink-0 text-[0px]"
          >
            <span className="sr-only">PredictByte</span>
          </a>

          <ul
            className="hidden items-center gap-3 lg:flex"
            onMouseLeave={() => setHovered(null)}
          >
            {LINKS.map((link) => {
              const isActive = active === link.id;
              const isHighlighted = hovered ? hovered === link.id : isActive;
              return (
                <li key={link.label} className="relative">
                  <a
                    href={hrefFor(link)}
                    onClick={go(link)}
                    onMouseEnter={() => setHovered(link.id)}
                    onFocus={() => setHovered(link.id)}
                    onBlur={() => setHovered(null)}
                    data-cursor="link"
                    aria-current={isActive ? "true" : undefined}
                    className={`relative z-10 block rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-300 ${
                      isHighlighted ? "text-white" : "text-secondary hover:text-white"
                    }`}
                  >
                    {isHighlighted && (
                      <motion.span
                        layoutId="nav-glass-pill"
                        className="glass absolute inset-0 -z-10 rounded-full"
                        style={{
                          boxShadow:
                            "inset 0 1px 0 rgba(255,255,255,0.08), 0 4px 18px rgba(0,0,0,0.25)",
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex shrink-0 items-center gap-3">
            <div className="hidden w-[230px] lg:block">
              <SiteSearch />
            </div>

            <button
              aria-label="Toggle theme"
              data-cursor="button"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="flex h-9 w-9 items-center justify-center rounded-full text-white/90 bg-black/10 dark:bg-white/5"
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            <button
              aria-label="Search"
              data-cursor="button"
              onClick={() => setMobileSearchOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-white lg:hidden"
            >
              <FiSearch size={18} />
            </button>

            <button
              aria-label="Open menu"
              data-cursor="button"
              onClick={() => setMenuOpen(true)}
              className="text-white lg:hidden"
            >
              <FiMenu size={22} />
            </button>

            <div className="hidden lg:block">
            </div>
          </div>
        </motion.nav>
      </motion.header>

      <AnimatePresence>
        {mobileSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] flex flex-col items-center bg-bg/95 px-6 pt-28 backdrop-blur-xl lg:hidden"
          >
            <button
              aria-label="Close search"
              onClick={() => setMobileSearchOpen(false)}
              className="absolute right-6 top-8 text-white"
            >
              <FiX size={24} />
            </button>
            <SiteSearch
              onNavigate={() => setMobileSearchOpen(false)}
              className="max-w-sm"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] flex flex-col bg-bg"
          >
            <div className="flex items-center justify-between px-6 py-6">
              <span className="font-serif text-lg text-white">PredictByte®</span>
              <button
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="text-white"
              >
                <FiX size={26} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col items-start justify-center gap-2 px-8">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={hrefFor(link)}
                  onClick={go(link)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`font-serif text-4xl transition-colors ${
                    active === link.id ? "text-accent" : "text-white/90 hover:text-accent"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + LINKS.length * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="px-8 pb-10"
            >
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
