import type { ReactNode, MouseEvent } from "react";
import { motion, useAnimate, type HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils";

interface StatefulButtonProps extends HTMLMotionProps<"button"> {
  className?: string;
  children: ReactNode;
}

export function StatefulButton({ className, children, ...props }: StatefulButtonProps) {
  const [scope, animate] = useAnimate();

  const animateLoading = async () => {
    await animate(
      ".loader",
      { width: "20px", scale: 1, display: "block" },
      { duration: 0.2 }
    );
  };

  const animateSuccess = async () => {
    await animate(
      ".loader",
      { width: "0px", scale: 0, display: "none" },
      { duration: 0.2 }
    );
    await animate(
      ".check",
      { width: "20px", scale: 1, display: "block" },
      { duration: 0.2 }
    );
    await animate(
      ".check",
      { width: "0px", scale: 0, display: "none" },
      { delay: 2, duration: 0.2 }
    );
  };

  const handleClick = async (event: MouseEvent<HTMLButtonElement>) => {
    await animateLoading();
    await props.onClick?.(event);
    await animateSuccess();
  };

  return (
    <motion.button
      layout
      data-cursor="button"
      ref={scope}
      className={cn(
        "group relative isolate flex min-w-[160px] cursor-none items-center justify-center gap-2",
        "rounded-full glass px-8 py-4 text-sm font-medium text-white",
        "transition-shadow duration-500 ease-power4 hover:shadow-[0_0_30px_rgba(79,140,255,.25)]",
        className
      )}
      {...props}
      onClick={handleClick}
    >
      <motion.div layout className="flex items-center gap-2">
        <Loader />
        <CheckIcon />
        <motion.span layout>{children}</motion.span>
      </motion.div>
    </motion.button>
  );
}

function Loader() {
  return (
    <motion.svg
      animate={{ rotate: [0, 360] }}
      initial={{ scale: 0, width: 0, display: "none" }}
      style={{ scale: 0.5, display: "none" }}
      transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="loader text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 3a9 9 0 1 0 9 9" />
    </motion.svg>
  );
}

function CheckIcon() {
  return (
    <motion.svg
      initial={{ scale: 0, width: 0, display: "none" }}
      style={{ scale: 0.5, display: "none" }}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="check text-accent"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M9 12l2 2l4 -4" />
    </motion.svg>
  );
}
