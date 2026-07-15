import { useRef, useState, type ReactNode } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { cn } from "../../lib/utils";

export interface DockItem {
  title: string;
  icon: ReactNode;
  id: string;
  active?: boolean;
  onClick: () => void;
}

export function FloatingDock({
  items,
  className,
}: {
  items: DockItem[];
  className?: string;
}) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "glass mx-auto flex h-16 items-end gap-3 rounded-2xl px-4 pb-3 shadow-[0_16px_50px_rgba(0,0,0,0.45)]",
        className
      )}
    >
      {items.map((item) => (
        <DockIcon mouseX={mouseX} key={item.id} {...item} />
      ))}
    </motion.div>
  );
}

function DockIcon({ mouseX, title, icon, active, onClick }: DockItem & { mouseX: MotionValue }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-140, 0, 140], [40, 64, 40]);
  const iconTransform = useTransform(distance, [-140, 0, 140], [18, 28, 18]);

  const width = useSpring(widthTransform, { mass: 0.1, stiffness: 160, damping: 14 });
  const iconSize = useSpring(iconTransform, { mass: 0.1, stiffness: 160, damping: 14 });

  return (
    <button type="button" data-cursor="button" onClick={onClick} aria-label={title}>
      <motion.div
        ref={ref}
        style={{ width, height: width }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "relative flex aspect-square items-center justify-center rounded-full transition-colors duration-300",
          active ? "bg-accent/20 text-accent" : "bg-white/5 text-secondary hover:text-white"
        )}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 8, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 4, x: "-50%" }}
              transition={{ duration: 0.2 }}
              className="glass absolute -top-9 left-1/2 w-fit whitespace-nowrap rounded-md px-2.5 py-1 text-xs text-white"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div style={{ width: iconSize, height: iconSize }} className="flex items-center justify-center">
          {icon}
        </motion.div>
        {active && (
          <span className="absolute -bottom-1.5 h-1 w-1 rounded-full bg-accent" />
        )}
      </motion.div>
    </button>
  );
}
