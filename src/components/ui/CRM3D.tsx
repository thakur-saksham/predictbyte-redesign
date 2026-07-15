import { motion } from "framer-motion";

export function CRM3D() {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-visible"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        animate={{ y: [0, -15, 0], rotateY: [-3, 3, -3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="relative h-[280px] w-[340px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        
        <div className="absolute inset-0 overflow-hidden rounded-[20px] shadow-[0_30px_70px_rgba(0,120,255,0.3)] border border-white/10 z-10 bg-bg/90">
            <img
            src="/crm-hologram.jpg"
            alt="CRM Hologram Solutions"
            className="absolute inset-0 h-full w-full object-cover"
            />
            
            <motion.div 
               animate={{ top: ["-10%", "110%"] }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
               className="pointer-events-none absolute left-0 right-0 h-[20px] bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent mix-blend-screen" 
            />
        </div>
      </motion.div>
    </div>
  );
}
