import { motion } from "framer-motion";
import { FiHeart, FiThumbsUp, FiMessageCircle, FiTrendingUp } from "react-icons/fi";

export function Megaphone3D() {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-visible"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        initial={{ rotateX: 10, rotateY: 15, scale: 0.9 }}
        whileInView={{ rotateX: 5, rotateY: 5, scale: 1.05 }}
        viewport={{ once: false, margin: "-20%" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-[260px] w-[340px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        
        <div
          className="absolute inset-0 rounded-[16px] bg-bg/90 shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/5"
          style={{ transformStyle: "preserve-3d" }}
        >
          
          <div className="absolute inset-[2px] overflow-hidden rounded-[14px]">
             <motion.img
                src="/megaphone-digital.jpg"
                alt="Digital Marketing Campaign"
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 h-full w-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] via-transparent to-transparent opacity-80" />
          </div>

          <motion.div
            initial={{ z: -50, opacity: 0, y: 20 }}
            whileInView={{ z: 40, opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring", bounce: 0.5 }}
            className="absolute -right-[15%] top-[10%] flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 p-2 pr-4 backdrop-blur-md shadow-[0_10px_20px_rgba(236,72,153,0.3)]"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-500 text-white shadow-[0_0_15px_rgba(236,72,153,0.6)]">
              <FiHeart size={16} className="fill-white" />
            </div>
            <span className="text-sm font-bold text-white">45.2K</span>
          </motion.div>

          <motion.div
            initial={{ z: -50, opacity: 0, x: -30 }}
            whileInView={{ z: 60, opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9, delay: 0.7, type: "spring", bounce: 0.4 }}
            className="absolute -left-[10%] top-[40%] rounded-xl border border-accent/30 bg-[#121420]/80 p-3 backdrop-blur-md shadow-[0_15px_30px_rgba(79,140,255,0.2)] w-[140px]"
          >
             <div className="text-[10px] font-medium text-secondary uppercase tracking-wider mb-2 flex items-center gap-1">
               <FiTrendingUp className="text-accent" /> Conversion
             </div>
             <div className="text-xl font-bold text-white mb-2">+128%</div>
             
             <div className="flex items-end gap-[3px] h-[30px] w-full">
                {[0.3, 0.4, 0.5, 0.7, 0.6, 0.9, 1].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h * 100}%` }}
                    transition={{ duration: 0.5, delay: 1 + (i * 0.1) }}
                    className="w-full rounded-t-sm bg-accent/90"
                    style={{ boxShadow: "0 0 5px var(--pb-primary)" }}
                  />
                ))}
             </div>
          </motion.div>

          <motion.div
            initial={{ z: -20, opacity: 0, y: 30 }}
            whileInView={{ z: 50, opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.9, type: "spring", bounce: 0.5 }}
            className="absolute -bottom-[5%] right-[5%] flex items-center gap-3 rounded-lg border border-white/10 bg-[#0c0e14]/90 p-3 backdrop-blur-md shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
          >
            <div className="flex -space-x-2">
              <div className="h-8 w-8 rounded-full border-2 border-[#0c0e14] bg-blue-500 flex items-center justify-center text-white"><FiThumbsUp size={12} className="fill-white"/></div>
              <div className="h-8 w-8 rounded-full border-2 border-[#0c0e14] bg-green-500 flex items-center justify-center text-white"><FiMessageCircle size={12} className="fill-white"/></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-white font-medium">New Engagement</span>
              <span className="text-[10px] text-green-400 font-bold">Trending up</span>
            </div>
          </motion.div>
          
        </div>
      </motion.div>
    </div>
  );
}
