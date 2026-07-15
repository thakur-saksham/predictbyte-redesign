import type { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "../../lib/utils";

export function LampContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const lampRef = useRef<HTMLDivElement>(null);
  const isLit = useInView(lampRef, { amount: 0.35 });

  return (
    <div
      ref={lampRef}
      className={cn(
        "relative flex h-[62vh] min-h-[420px] w-full flex-col items-center justify-center overflow-hidden rounded-md",
        className
      )}
    >
      <div className="isolate z-0 flex w-full flex-1 scale-y-125 items-center justify-center">
        <motion.div
          initial={false}
          animate={{ opacity: isLit ? 1 : 0.18, width: isLit ? "30rem" : "12rem" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          style={{
            backgroundImage:
              "conic-gradient(from 70deg at center top, rgba(79,140,255,0.9), transparent, transparent)",
          }}
          className="absolute inset-auto right-1/2 h-56 w-[30rem] overflow-visible text-white"
        >
          <div className="absolute bottom-0 left-0 h-40 w-full bg-bg [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute bottom-0 left-0 h-full w-40 bg-bg [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        <motion.div
          initial={false}
          animate={{ opacity: isLit ? 1 : 0.18, width: isLit ? "30rem" : "12rem" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          style={{
            backgroundImage:
              "conic-gradient(from 290deg at center top, transparent, transparent, rgba(79,140,255,0.9))",
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] text-white"
        >
          <div className="absolute bottom-0 right-0 h-full w-40 bg-bg [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute bottom-0 right-0 h-40 w-full bg-bg [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-bg blur-2xl" />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-accent opacity-50 blur-3xl" />

        <motion.div
          initial={false}
          animate={{ width: isLit ? "16rem" : "5rem", opacity: isLit ? 1 : 0.15 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-accent blur-2xl"
        />
        <motion.div
          initial={false}
          animate={{ width: isLit ? "30rem" : "10rem", opacity: isLit ? 1 : 0.15 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-accent"
        />

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-bg" />
      </div>

      <div className="relative z-50 flex -translate-y-24 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
}
