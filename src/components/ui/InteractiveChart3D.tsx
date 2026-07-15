import { motion, useMotionValue, useTransform } from "framer-motion";
import { MouseEvent } from "react";

export function InteractiveChart3D() {
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
      style={{ perspective: "1200px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative h-[280px] w-[340px]"
      >
        
        <div
          className="absolute inset-0 rounded-[16px] bg-bg/90 shadow-[0_20px_50px_rgba(0,0,0,0.7)] border border-accent/20"
          style={{ transformStyle: "preserve-3d" }}
        >
          
          <div className="absolute inset-[2px] overflow-hidden rounded-[14px]">
             <img
                src="/seo-chart.jpg"
                alt="SEO Interactive Chart"
                className="absolute inset-0 h-full w-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f1a] via-transparent to-transparent opacity-60" />
          </div>

          <motion.div 
            style={{ 
              x: useTransform(x, [0, 1], [-20, 20]),
              y: useTransform(y, [0, 1], [-10, 10]),
              z: 50 
            }}
            className="absolute -right-[5%] top-[20%] flex items-center justify-center h-12 w-12 rounded-full border border-accent/40 bg-accent/10 backdrop-blur-md shadow-[0_0_15px_rgba(79,140,255,0.4)]"
          >
             <div className="h-6 w-6 rounded-full border-2 border-t-accent border-r-accent border-b-transparent border-l-transparent animate-spin" />
          </motion.div>

          <motion.div 
            style={{ 
              x: useTransform(x, [0, 1], [30, -30]),
              y: useTransform(y, [0, 1], [15, -15]),
              z: 80 
            }}
            className="absolute -left-[5%] bottom-[15%] rounded-lg border border-teal-500/30 bg-teal-500/10 p-2 backdrop-blur-md shadow-[0_10px_20px_rgba(20,184,166,0.3)]"
          >
             <div className="text-xs font-bold text-teal-400">Traffic +42%</div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
