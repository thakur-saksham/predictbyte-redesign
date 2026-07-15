import { motion } from "framer-motion";

export function Mobile3D() {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-visible"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        initial={{ rotateX: 30, rotateY: -35, rotateZ: 15, y: 30, scale: 0.95 }}
        whileInView={{ rotateX: 15, rotateY: -20, rotateZ: 5, y: 0, scale: 1.05 }}
        viewport={{ once: false, margin: "-20%" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-[280px] w-[140px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        
        <div
          className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-[#d4d5d9] via-[#8c8c91] to-[#515256] shadow-[-15px_20px_40px_rgba(0,0,0,0.6)]"
          style={{ transformStyle: "preserve-3d" }}
        >
          
          <div className="absolute inset-0 rounded-[28px] border-b-[4px] border-l-[3px] border-[#5a5b5e]" />

          <div className="absolute -left-[3px] top-[15%] h-[8%] w-1 rounded-l-md bg-gradient-to-b from-[#8c8c91] to-[#515256] shadow-[-1px_0_2px_rgba(0,0,0,0.3)]" style={{ transform: "translateZ(-1px)" }} />
          <div className="absolute -left-[3px] top-[26%] h-[12%] w-1 rounded-l-md bg-gradient-to-b from-[#8c8c91] to-[#515256] shadow-[-1px_0_2px_rgba(0,0,0,0.3)]" style={{ transform: "translateZ(-1px)" }} />
          <div className="absolute -right-[3px] top-[22%] h-[16%] w-1 rounded-r-md bg-gradient-to-b from-[#d4d5d9] to-[#8c8c91] shadow-[1px_0_2px_rgba(0,0,0,0.2)]" style={{ transform: "translateZ(-1px)" }} />

          <div className="absolute inset-[3px] flex flex-col overflow-hidden rounded-[25px] bg-[#000000] shadow-[inset_0_0_10px_rgba(0,0,0,1)] border-[3px] border-[#111]">

            <motion.div 
              initial={{ width: 40 }}
              whileInView={{ width: [40, 70, 40] }}
              transition={{ duration: 2, delay: 1, times: [0, 0.5, 1], ease: "easeInOut" }}
              className="absolute left-1/2 top-1.5 z-20 h-[10px] -translate-x-1/2 overflow-hidden rounded-full bg-[#111] shadow-[0_0_4px_rgba(0,0,0,0.8)]"
            >
              <div className="absolute right-1 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-[#050505] shadow-[0_0_1px_rgba(255,255,255,0.1)]" />
            </motion.div>

            <div className="relative h-full w-full overflow-hidden bg-[#050816]">
              <motion.img
                src="/mobile-screen.png"
                alt="Mobile UI"
                initial={{ opacity: 0, scale: 1.1, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: -30 }}
                viewport={{ once: false, margin: "-20%" }}
                transition={{ duration: 4, ease: "easeOut", delay: 0.5 }}
                className="absolute inset-0 h-auto w-full object-cover"
              />
              
              <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-30" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
