import { motion } from "framer-motion";

export function Laptop3D() {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-visible"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        initial={{ rotateX: 25, rotateY: 0, rotateZ: -15, scale: 0.9 }}
        whileInView={{ rotateX: 25, rotateY: 0, rotateZ: -15, scale: 1.1 }}
        viewport={{ once: false, margin: "-20%" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-[210px] w-[340px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        
        <div
          className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#8e9095] to-[#606164] shadow-[10px_20px_50px_rgba(0,0,0,0.8)] border-b-4 border-r-[3px] border-[#4a4b4e]"
          style={{ transform: "translateZ(0px)", transformStyle: "preserve-3d" }}
        >
          
          <div className="absolute left-[5%] right-[5%] top-[8%] h-[55%] rounded-md bg-[#545558] shadow-[inset_0_4px_10px_rgba(0,0,0,0.4)] p-[3px] flex flex-col gap-[2px]">
            
            <div className="flex w-full gap-[2px] h-[12%]">
              {Array.from({ length: 14 }).map((_, i) => (
                <div key={`r1-${i}`} className="flex-1 rounded-[1px] bg-[#222325] shadow-[0_1px_1px_rgba(255,255,255,0.1)]" />
              ))}
            </div>
            
            <div className="flex w-full gap-[2px] h-[18%]">
              {Array.from({ length: 14 }).map((_, i) => (
                <div key={`r2-${i}`} className="flex-1 rounded-[1.5px] bg-[#222325] shadow-[0_1px_1px_rgba(255,255,255,0.1)]" />
              ))}
            </div>
            
            <div className="flex w-full gap-[2px] h-[18%]">
              <div className="flex-[1.2] rounded-[1.5px] bg-[#222325] shadow-[0_1px_1px_rgba(255,255,255,0.1)]" />
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={`r3-${i}`} className="flex-1 rounded-[1.5px] bg-[#222325] shadow-[0_1px_1px_rgba(255,255,255,0.1)]" />
              ))}
              <div className="flex-[1.8] rounded-[1.5px] bg-[#222325] shadow-[0_1px_1px_rgba(255,255,255,0.1)]" />
            </div>
            
            <div className="flex w-full gap-[2px] h-[18%]">
              <div className="flex-[1.8] rounded-[1.5px] bg-[#222325] shadow-[0_1px_1px_rgba(255,255,255,0.1)]" />
              {Array.from({ length: 11 }).map((_, i) => (
                <div key={`r4-${i}`} className="flex-1 rounded-[1.5px] bg-[#222325] shadow-[0_1px_1px_rgba(255,255,255,0.1)]" />
              ))}
              <div className="flex-[2.4] rounded-[1.5px] bg-[#222325] shadow-[0_1px_1px_rgba(255,255,255,0.1)]" />
            </div>
            
            <div className="flex w-full gap-[2px] h-[20%]">
              <div className="flex-[1.2] rounded-[1.5px] bg-[#222325]" />
              <div className="flex-[1.2] rounded-[1.5px] bg-[#222325]" />
              <div className="flex-[1.2] rounded-[1.5px] bg-[#222325]" />
              <div className="flex-[6] rounded-[1.5px] bg-[#222325]" />
              <div className="flex-[1.2] rounded-[1.5px] bg-[#222325]" />
              <div className="flex-[1.2] rounded-[1.5px] bg-[#222325]" />
              <div className="flex-[1.2] rounded-[1.5px] bg-[#222325]" />
              <div className="flex-[2.4] rounded-[1.5px] bg-[#222325]" />
            </div>
          </div>
          
          <div className="absolute bottom-[6%] left-1/2 h-[24%] w-[34%] -translate-x-1/2 rounded-md bg-[#7c7d81] shadow-[inset_0_1px_4px_rgba(0,0,0,0.3)]" />
          
          <div className="absolute bottom-0 left-1/2 h-[3px] w-14 -translate-x-1/2 rounded-t-sm bg-[#5c5d60]" />
        </div>

        <motion.div
          initial={{ rotateX: -5 }}
          whileInView={{ rotateX: -50 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="absolute bottom-full left-0 right-0 origin-bottom rounded-t-xl rounded-b-sm bg-gradient-to-tr from-[#7c7d81] to-[#999b9e]"
          style={{ height: "220px", transformStyle: "preserve-3d" }}
        >
          
          <div className="absolute inset-[3px] flex flex-col overflow-hidden rounded-[7px] bg-[#000000] p-[4px] shadow-[inset_0_0_20px_rgba(0,0,0,1)] border border-[#222]">
            
            <div className="absolute left-1/2 top-1.5 h-1 w-1 -translate-x-1/2 rounded-full bg-[#111] shadow-[0_0_2px_rgba(255,255,255,0.2)]" />

            <div className="relative mt-2 h-[200px] w-full overflow-hidden rounded-[3px] bg-[#050816]">
              <motion.img
                src="/macbook-screen.jpg"
                alt="App Interface"
                initial={{ opacity: 0, scale: 1.2, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: -20 }}
                viewport={{ once: false, margin: "-20%" }}
                transition={{ duration: 3, ease: "easeOut", delay: 0.8 }}
                className="absolute inset-0 h-auto w-full object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-30" />
            </div>

            <div className="absolute bottom-0.5 left-0 w-full text-center text-[4px] tracking-widest text-[#666]">
              MacBook Pro
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
