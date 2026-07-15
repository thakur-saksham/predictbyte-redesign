import { motion } from "framer-motion";

export function Ecommerce3D() {
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
            src="/ecommerce-cart.jpg"
            alt="E-Commerce Cart"
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
            y: [0, -20, 0], 
            rotateX: [0, 180, 360],
            rotateY: [0, 90, 180]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-4 -left-4 h-8 w-8 rounded-md bg-gradient-to-br from-pink-500 to-purple-600 shadow-[0_0_15px_rgba(236,72,153,0.5)] z-20 border border-white/20 backdrop-blur-sm opacity-80"
          style={{ transformStyle: "preserve-3d" }}
        />

        <motion.div
          animate={{ 
            y: [0, 30, 0], 
            x: [0, 10, 0],
            rotateX: [360, 180, 0],
            rotateZ: [0, 90, 180]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-8 -right-6 h-12 w-12 rounded-lg bg-gradient-to-tr from-orange-400 to-amber-300 shadow-[0_0_20px_rgba(251,146,60,0.4)] z-0 border border-white/20 opacity-90"
          style={{ transformStyle: "preserve-3d" }}
        />

        <motion.div
          animate={{ 
            y: [0, -15, 0], 
            rotateY: [0, 360],
            rotateZ: [0, 360]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute top-8 -right-4 h-6 w-6 rounded-md bg-gradient-to-bl from-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(34,211,238,0.6)] z-20 border border-white/30"
          style={{ transformStyle: "preserve-3d" }}
        />

        <motion.div
          animate={{ 
            y: [0, -25, 0], 
            x: [0, -10, 0],
            rotateX: [0, -180, -360],
            rotateY: [0, -90, -180]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-2 -left-8 h-10 w-10 rounded-lg bg-gradient-to-r from-teal-400 to-emerald-400 shadow-[0_0_15px_rgba(45,212,191,0.4)] z-20 border border-white/20 opacity-70"
          style={{ transformStyle: "preserve-3d" }}
        />

        <motion.div
          animate={{ 
            y: [0, 15, 0], 
            x: [0, 15, 0],
            rotateZ: [0, 180, 360]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 -right-8 h-8 w-8 rounded bg-gradient-to-t from-indigo-500 to-purple-500 shadow-[0_0_15px_rgba(99,102,241,0.5)] z-30 border border-white/20 opacity-90"
          style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
        />

      </motion.div>
    </div>
  );
}
