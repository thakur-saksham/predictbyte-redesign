import { motion, useMotionValue, useTransform } from "framer-motion";
import { MouseEvent } from "react";

export function DedicatedDev3D() {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [15, -15]);
  const rotateY = useTransform(x, [0, 1], [-20, 20]);

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
        <div className="absolute inset-0 overflow-hidden rounded-[20px] shadow-[0_25px_60px_rgba(79,140,255,0.3)] border border-white/10 z-10 bg-bg/90">
            <img
            src="/dev-center.jpg"
            alt="Dedicated Developers Command Center"
            className="absolute inset-0 h-full w-full object-cover opacity-90"
            />
            
            <motion.div 
               animate={{ opacity: [0.1, 0.4, 0.1] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10 mix-blend-screen" 
            />
        </div>

        <motion.div
          style={{ 
              x: useTransform(x, [0, 1], [-15, 15]),
              y: useTransform(y, [0, 1], [-10, 10]),
              z: 40 
          }}
          className="absolute -right-4 bottom-[20%] w-[120px] rounded-lg border border-accent/20 bg-[#0c1220]/80 p-2 backdrop-blur-md shadow-[0_10px_20px_rgba(79,140,255,0.2)]"
        >
          <div className="flex gap-1 mb-1">
             <div className="w-2 h-2 rounded-full bg-red-500/80" />
             <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
             <div className="w-2 h-2 rounded-full bg-green-500/80" />
          </div>
          <div className="flex flex-col gap-1 mt-2">
             <div className="h-1.5 w-[80%] rounded-full bg-accent/60" />
             <div className="h-1.5 w-[60%] rounded-full bg-purple-400/60" />
             <div className="h-1.5 w-[40%] rounded-full bg-teal-400/60" />
             <div className="h-1.5 w-[70%] rounded-full bg-accent/60" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
