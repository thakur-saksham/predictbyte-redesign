import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { cn } from "../lib/utils";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

function Magnetic({ children, className, strength = 0.35 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function PrimaryButton({
  children = "Start Your Project",
  onClick,
}: {
  children?: ReactNode;
  onClick?: () => void;
}) {
  return (
    <Magnetic>
      <motion.button
        data-cursor="button"
        onClick={onClick}
        whileHover="hover"
        initial="rest"
        animate="rest"
        className={cn(
          "group relative isolate flex items-center gap-3 overflow-hidden rounded-full",
          "glass px-8 py-4 text-sm font-medium text-white",
          "transition-shadow duration-500 ease-power4"
        )}
      >
        <motion.span
          variants={{
            rest: { x: "-120%" },
            hover: { x: "120%" },
          }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent"
        />
        <span className="relative">{children}</span>
        <motion.span
          variants={{ rest: { x: 0 }, hover: { x: 4 } }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <FiArrowRight />
        </motion.span>
      </motion.button>
    </Magnetic>
  );
}

export function SecondaryButton({
  children = "View Case Studies",
  onClick,
}: {
  children?: ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      data-cursor="link"
      onClick={onClick}
      className="group relative text-sm font-medium text-secondary transition-colors duration-300 hover:text-white"
    >
      <span className="relative inline-flex items-center gap-2">
        {children} <span aria-hidden>→</span>
        <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-500 ease-power4 group-hover:w-full" />
      </span>
    </button>
  );
}
