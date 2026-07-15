import { motion } from "framer-motion";

export function ERP3D() {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-visible"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        animate={{ y: [0, -10, 0], rotateY: [-2, 2, -2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative h-[280px] w-[340px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        
        <div className="absolute inset-0 overflow-hidden rounded-[20px] shadow-[0_25px_60px_rgba(0,180,255,0.2)] border border-white/5 z-10 bg-bg/90">
            <img
            src="/erp-blocks.jpg"
            alt="ERP Systems"
            className="absolute inset-0 h-full w-full object-cover opacity-90"
            />
            <motion.div 
               animate={{ opacity: [0.2, 0.5, 0.2] }}
               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
               className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent mix-blend-screen" 
            />
        </div>

        <motion.div
          animate={{ 
            y: [-100, 300], 
            opacity: [0, 1, 0],
            rotateX: [0, 360],
            rotateZ: [0, 180]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 0.5 }}
          className="absolute left-[10%] -top-10 h-6 w-6 rounded-sm bg-gradient-to-br from-blue-400 to-cyan-500 shadow-[0_0_15px_rgba(56,189,248,0.6)] z-20 border border-white/30 backdrop-blur-sm"
          style={{ transformStyle: "preserve-3d" }}
        />

        <motion.div
          animate={{ 
            y: [-150, 250], 
            opacity: [0, 1, 0],
            rotateY: [0, -360],
            rotateX: [0, 180]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1.2 }}
          className="absolute left-[30%] -top-20 h-8 w-8 rounded-sm bg-gradient-to-tr from-indigo-500 to-purple-500 shadow-[0_0_20px_rgba(99,102,241,0.5)] z-0 border border-white/20"
          style={{ transformStyle: "preserve-3d" }}
        />

        <motion.div
          animate={{ 
            y: [-50, 350], 
            opacity: [0, 0.9, 0],
            rotateY: [0, 360],
            rotateZ: [0, 360]
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: 2.1 }}
          className="absolute right-[25%] -top-10 h-10 w-10 rounded-sm bg-gradient-to-bl from-cyan-300 to-blue-600 shadow-[0_0_25px_rgba(34,211,238,0.7)] z-30 border border-white/40"
          style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}
        />

        <motion.div
          animate={{ 
            y: [-200, 280], 
            opacity: [0, 0.8, 0],
            rotateX: [0, 180],
            rotateY: [0, -180]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 0.8 }}
          className="absolute right-[5%] -top-30 h-5 w-5 rounded-sm bg-gradient-to-r from-teal-400 to-emerald-400 shadow-[0_0_15px_rgba(45,212,191,0.5)] z-20 border border-white/20"
          style={{ transformStyle: "preserve-3d" }}
        />
      </motion.div>
    </div>
  );
}
