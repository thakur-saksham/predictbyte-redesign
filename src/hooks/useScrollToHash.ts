import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToSection } from "../lib/lenis";

export function useScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");

    const timer = window.setTimeout(() => scrollToSection(id), 120);
    return () => window.clearTimeout(timer);
  }, [hash]);
}
