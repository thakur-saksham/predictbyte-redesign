import { motion } from "framer-motion";

export function Ipad3D() {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-visible"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        initial={{ rotateX: 15, rotateY: 25, rotateZ: -5, y: 10, scale: 0.9 }}
        whileInView={{ rotateX: 10, rotateY: 15, rotateZ: -2, y: 0, scale: 1.05 }}
        viewport={{ once: false, margin: "-20%" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-[220px] w-[320px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        
        <div
          className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-[#d4d5d9] via-[#8c8c91] to-[#515256] shadow-[20px_20px_50px_rgba(0,0,0,0.6)] border-b-[3px] border-r-[3px] border-[#5a5b5e]"
          style={{ transformStyle: "preserve-3d" }}
        >
          
          <div className="absolute top-[10%] -left-[2px] h-[10%] w-[2px] rounded-l-md bg-gradient-to-b from-[#8c8c91] to-[#515256]" style={{ transform: "translateZ(-1px)" }} />
          <div className="absolute top-[22%] -left-[2px] h-[10%] w-[2px] rounded-l-md bg-gradient-to-b from-[#8c8c91] to-[#515256]" style={{ transform: "translateZ(-1px)" }} />

          <div className="absolute inset-[3px] flex flex-col overflow-hidden rounded-[17px] bg-[#000000] shadow-[inset_0_0_15px_rgba(0,0,0,1)] border-[2px] border-[#111]">

            <div className="absolute left-1/2 top-1.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#111] shadow-[0_0_2px_rgba(255,255,255,0.2)] z-20">
               <div className="absolute left-1/2 top-1/2 h-[2px] w-[2px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#050505] shadow-[0_0_1px_rgba(255,255,255,0.1)]" />
            </div>

            <div className="relative h-full w-full overflow-hidden bg-[#050816]">
              <motion.img
                src="/ipad-screen.jpg"
                alt="iPad UI"
                initial={{ opacity: 0, scale: 1.15, x: 20 }}
                whileInView={{ opacity: 1, scale: 1, x: -10 }}
                viewport={{ once: false, margin: "-20%" }}
                transition={{ duration: 4, ease: "easeOut", delay: 0.5 }}
                className="absolute inset-0 h-full w-auto object-cover"
              />
              
              <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-30" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
