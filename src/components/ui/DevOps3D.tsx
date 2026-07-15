import { motion, useMotionValue, useTransform } from "framer-motion";
import { MouseEvent } from "react";

export function DevOps3D() {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [25, -25]);
  const rotateY = useTransform(x, [0, 1], [-30, 30]);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    x.set(mouseX / rect.width);
    y.set(mouseY / rect.height);
  }

  function handleMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-visible"
      style={{ perspective: "1200px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative h-[280px] w-[340px]"
      >
        
        <div className="absolute inset-0 overflow-hidden rounded-[20px] shadow-[0_20px_50px_rgba(255,0,255,0.2)]">
            <img
            src="/devops-symbol.jpg"
            alt="DevOps Symbol"
            className="absolute inset-0 h-full w-full object-cover"
            />
            
            <div className="pointer-events-none absolute inset-0 rounded-[20px] shadow-[inset_0_0_30px_rgba(255,0,255,0.3)]" />
        </div>
      </motion.div>
    </div>
  );
}
