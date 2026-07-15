import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorState = "default" | "text" | "button" | "image" | "link" | "card" | "industry";

const HOVER_COLORS: Record<CursorState, string> = {
  default: "var(--pb-primary)",
  text: "var(--pb-primary)",
  button: "#a370f0",
  image: "#f59e0b",
  link: "#4f8cff",
  card: "#14b8a6",
  industry: "#ec4899",
};

export function CustomCursor() {
  const [state, setState] = useState<CursorState>("default");
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 28, stiffness: 420, mass: 0.35 });
  const springY = useSpring(y, { damping: 28, stiffness: 420, mass: 0.35 });

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setEnabled(media.matches);
    const move = (event: MouseEvent) => { x.set(event.clientX); y.set(event.clientY); };
    const over = (event: MouseEvent) => setState(((event.target as HTMLElement)?.closest("[data-cursor]")?.getAttribute("data-cursor") as CursorState) ?? "default");
    sync();
    media.addEventListener("change", sync);
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => { media.removeEventListener("change", sync); window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", over); };
  }, [x, y]);

  if (!enabled) return null;
  const hovering = state !== "default";

  return <motion.div className="pointer-events-none fixed left-0 top-0 z-[200]" style={{ x: springX, y: springY, willChange: "transform" }}>
    <motion.div
      className="rounded-full"
      animate={{ width: hovering ? 34 : 22, height: hovering ? 34 : 22, x: hovering ? -17 : -11, y: hovering ? -17 : -11, backgroundColor: HOVER_COLORS[state], boxShadow: `0 0 ${hovering ? 28 : 16}px ${HOVER_COLORS[state]}88` }}
      transition={{ type: "spring", damping: 24, stiffness: 360, mass: 0.3 }}
    />
  </motion.div>;
}
