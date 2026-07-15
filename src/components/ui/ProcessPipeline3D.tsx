import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { MouseEvent } from "react";
import { hexToRgba } from "../../lib/utils";

const STAGES = [
  { name: "Discover" },
  { name: "Research" },
  { name: "Design" },
  { name: "Develop" },
  { name: "Test" },
  { name: "Deploy" },
  { name: "Optimize" },
];

export function ProcessPipeline3D({ activeIndex }: { activeIndex: number }) {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [10, -10]);
  const rotateY = useTransform(x, [0, 1], [-15, 15]);

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
      style={{ perspective: "1400px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative h-[400px] w-full max-w-[500px]"
      >
        
        <motion.div
          animate={{ rotateZ: 360, rotateX: [20, -20, 20] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-1/2 -ml-[60px] -mt-[60px] h-[120px] w-[120px] rounded-full border border-accent/30 bg-[#050816]/50 shadow-[0_0_80px_rgba(79,140,255,0.3)] backdrop-blur-md flex items-center justify-center"
          style={{ transformStyle: "preserve-3d", transform: "translateZ(-40px)" }}
        >
            <div className="absolute inset-2 rounded-full border-2 border-dashed border-accent/20 animate-spin-slow" />
            <div className="absolute inset-6 rounded-full border border-white/10 bg-gradient-to-br from-accent/20 to-transparent" />
        </motion.div>

        {STAGES.map((stage, i) => {
          const isActive = i === activeIndex;
          const isPast = i < activeIndex;
          const angle = (i / STAGES.length) * Math.PI * 2 - Math.PI / 2; 
          const radius = 160;
          const px = Math.cos(angle) * radius;
          const py = Math.sin(angle) * radius;
          
          return (
            <motion.div
              key={stage.name}
              initial={false}
              animate={{
                x: px,
                y: py,
                z: isActive ? 60 : isPast ? 20 : 0,
                scale: isActive ? 1.2 : 1,
                opacity: isActive ? 1 : isPast ? 0.7 : 0.4
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute left-1/2 top-1/2 -ml-6 -mt-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-bg shadow-xl"
              style={{ transformStyle: "preserve-3d" }}
            >
              
              <div 
                className="h-4 w-4 rounded-full transition-colors duration-500" 
                style={{ backgroundColor: isActive || isPast ? "#4F8CFF" : "rgba(255,255,255,0.2)" }} 
              />
              
              {isActive && (
                <motion.div
                  layoutId="active-node-glow"
                  className="absolute inset-0 rounded-xl bg-accent/20 shadow-[0_0_40px_rgba(79,140,255,0.8)] blur-md"
                />
              )}

              <svg className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ transform: "translateZ(-10px)" }}>
                  <line 
                    x1="100" y1="100" 
                    x2={100 - px} y2={100 - py} 
                    stroke={isActive ? "#4F8CFF" : "rgba(255,255,255,0.1)"} 
                    strokeWidth={isActive ? "2" : "1"} 
                    strokeDasharray={isActive ? "4,4" : "none"}
                    className={isActive ? "animate-[dash_20s_linear_infinite]" : ""}
                  />
              </svg>
            </motion.div>
          );
        })}

        <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20, z: 80 }}
              animate={{ opacity: 1, y: 0, z: 120 }}
              exit={{ opacity: 0, y: -20, z: 80 }}
              transition={{ duration: 0.3 }}
              className="absolute left-[65%] top-[10%] w-[220px] rounded-2xl border border-white/10 bg-[#050816]/80 p-5 backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.4)] pointer-events-none"
              style={{ transform: "translateZ(120px)" }}
            >
               <span className="font-serif text-accent text-sm">0{activeIndex + 1}</span>
               <h4 className="mt-1 font-serif text-2xl text-white">{STAGES[activeIndex].name}</h4>
               <div className="mt-3 h-1 w-8 rounded-full bg-accent" />
            </motion.div>
        </AnimatePresence>

      </motion.div>
    </div>
  );
}
