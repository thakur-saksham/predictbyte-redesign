import { motion } from "framer-motion";

export function AICore3D() {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-visible"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        initial={{ rotateX: 20, rotateY: 25, scale: 0.9 }}
        whileInView={{ rotateX: 10, rotateY: 15, scale: 1.05 }}
        viewport={{ once: false, margin: "-20%" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-[260px] w-[260px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        
        <div
          className="absolute inset-0 rounded-[20px] bg-bg/90 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-b-[4px] border-r-[4px] border-[#101b2f]"
          style={{ transformStyle: "preserve-3d" }}
        >
          
          <div className="absolute inset-[4px] overflow-hidden rounded-[16px]">
             <motion.img
                src="/ai-chip.jpg"
                alt="AI Core Chip"
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 h-full w-full object-cover"
             />
             <div className="absolute inset-0 bg-[#050b14]/20" /> 

             <motion.div 
               initial={{ x: "-100%", opacity: 0 }}
               whileInView={{ x: ["-100%", "50%"], opacity: [0, 1, 0] }}
               viewport={{ once: false }}
               transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0 }}
               className="absolute top-1/2 left-0 h-[2px] w-[40%] -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-white shadow-[0_0_10px_rgba(34,211,238,1)]"
             />

             <motion.div 
               initial={{ x: "100%", opacity: 0 }}
               whileInView={{ x: ["100%", "-50%"], opacity: [0, 1, 0] }}
               viewport={{ once: false }}
               transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
               className="absolute top-1/2 right-0 h-[2px] w-[40%] -translate-y-1/2 bg-gradient-to-l from-transparent via-cyan-400 to-white shadow-[0_0_10px_rgba(34,211,238,1)]"
             />

             <motion.div 
               initial={{ y: "-100%", opacity: 0 }}
               whileInView={{ y: ["-100%", "50%"], opacity: [0, 1, 0] }}
               viewport={{ once: false }}
               transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.2 }}
               className="absolute left-1/2 top-0 w-[2px] h-[40%] -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-500 to-white shadow-[0_0_10px_rgba(59,130,246,1)]"
             />

             <motion.div 
               initial={{ y: "100%", opacity: 0 }}
               whileInView={{ y: ["100%", "-50%"], opacity: [0, 1, 0] }}
               viewport={{ once: false }}
               transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.7 }}
               className="absolute left-1/2 bottom-0 w-[2px] h-[40%] -translate-x-1/2 bg-gradient-to-t from-transparent via-blue-500 to-white shadow-[0_0_10px_rgba(59,130,246,1)]"
             />

             <motion.div
               animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
               className="absolute left-1/2 top-1/2 h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-xl mix-blend-screen"
             />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
