import { motion } from "framer-motion";

export function CloudTower3D() {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-visible"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        animate={{ y: [0, -15, 0], rotateX: [-2, 2, -2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative h-[280px] w-[280px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        
        <div className="absolute inset-0 overflow-hidden rounded-[20px] shadow-[0_20px_50px_rgba(255,255,255,0.1)] border border-white/5 bg-transparent">
            <img
            src="/cloud-tower.jpg"
            alt="Cloud Infrastructure"
            className="absolute inset-0 h-full w-full object-cover"
            />

            <motion.div 
               animate={{ opacity: [0.1, 0.4, 0.1], x: ["-100%", "100%"] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent mix-blend-screen" 
            />
        </div>
      </motion.div>
    </div>
  );
}
