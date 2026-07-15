import { motion } from "framer-motion";

export function Canvas3D() {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-visible"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        initial={{ rotateX: 20, rotateY: -15, rotateZ: 5, y: 20, scale: 0.9 }}
        whileInView={{ rotateX: 10, rotateY: 5, rotateZ: 0, y: 0, scale: 1.05 }}
        viewport={{ once: false, margin: "-20%" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-[240px] w-[360px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        
        <div
          className="absolute inset-0 rounded-[20px] bg-[#1a1c23] shadow-[-20px_30px_60px_rgba(0,0,0,0.7)] border-b-[4px] border-l-[3px] border-[#2a2c35]"
          style={{ transformStyle: "preserve-3d" }}
        >
          
          <div className="absolute inset-[6px] rounded-[14px] bg-[#000] border border-[#222] shadow-[inset_0_0_10px_rgba(0,0,0,1)] overflow-hidden">
            
            <div className="relative h-full w-full">
              <motion.img
                src="/ui-canvas.png"
                alt="UI Canvas Design"
                initial={{ opacity: 0, scale: 1.15 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, margin: "-20%" }}
                transition={{ duration: 3, ease: "easeOut", delay: 0.4 }}
                className="absolute inset-0 h-full w-full object-cover"
              />
              
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-30" />
            </div>
          </div>

          <motion.div 
            initial={{ y: -30, opacity: 0, rotateZ: 15 }}
            whileInView={{ y: -4, opacity: 1, rotateZ: -10 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, delay: 1, type: "spring", bounce: 0.4 }}
            className="absolute -top-1 right-[10%] h-[6px] w-[120px] rounded-full bg-gradient-to-b from-[#e0e0e0] to-[#999] shadow-[0_5px_10px_rgba(0,0,0,0.5)] border-b border-[#666]"
            style={{ transform: "translateZ(10px)" }}
          >
             
             <div className="absolute -left-1.5 top-1/2 h-[4px] w-[8px] -translate-y-1/2 rounded-l-full bg-[#333]" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
