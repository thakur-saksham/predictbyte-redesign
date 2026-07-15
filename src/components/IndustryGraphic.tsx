import { motion } from "framer-motion";
import { FiHeart, FiDollarSign, FiShoppingBag, FiTool, FiTruck, FiHome, FiSend, FiBookOpen } from "react-icons/fi";

const HealthcareGraphic = () => (
  <div className="relative flex h-full w-full items-center justify-center">
    <motion.div
      animate={{ scale: [1, 1.1, 1, 1.1, 1] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      className="relative z-10 text-[#4F8CFF] drop-shadow-[0_0_20px_rgba(79,140,255,0.8)]"
    >
      <FiHeart size={80} fill="currentColor" />
    </motion.div>

    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <svg className="w-[120%] h-[100px] text-[#4F8CFF] opacity-60" viewBox="0 0 200 100" preserveAspectRatio="none">
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          d="M 0 50 L 50 50 L 60 20 L 75 80 L 90 50 L 200 50"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-[0_0_8px_currentColor]"
        />
      </svg>
    </div>
  </div>
);

const FinanceGraphic = () => (
  <div className="relative flex h-[100px] w-full items-end justify-center gap-3">
    {[40, 70, 100, 60, 85].map((height, i) => (
      <motion.div
        key={i}
        initial={{ height: 10 }}
        animate={{ height: [10, height, 10] }}
        transition={{ duration: 2, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
        className="w-4 rounded-t-sm bg-[#10B981] shadow-[0_0_15px_rgba(16,185,129,0.6)]"
      />
    ))}
    
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="absolute -top-10 right-10 h-16 w-16 rounded-full border border-dashed border-[#10B981]/50"
    />
  </div>
);

const RetailGraphic = () => (
  <div className="relative flex h-full w-full items-center justify-center">
    <div className="relative text-[#F59E0B]">
      <FiShoppingBag size={80} />

      <motion.div
        animate={{ y: [-10, 80, -10] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute -left-[20%] top-0 h-[2px] w-[140%] bg-[#F59E0B] shadow-[0_0_15px_#F59E0B]"
      />
    </div>
  </div>
);

const ManufacturingGraphic = () => (
  <div className="relative flex h-full w-full items-center justify-center">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      className="text-[#EC4899] drop-shadow-[0_0_15px_rgba(236,72,153,0.6)]"
    >
      <FiTool size={80} />
    </motion.div>
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      className="absolute ml-20 mt-20 text-[#EC4899]/60 drop-shadow-[0_0_10px_rgba(236,72,153,0.4)]"
    >
      <FiTool size={50} />
    </motion.div>
  </div>
);

const LogisticsGraphic = () => (
  <div className="relative flex h-full w-full flex-col items-center justify-center">
    <motion.div
      animate={{ y: [-10, 10, -10] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="text-[#06B6D4] drop-shadow-[0_0_20px_rgba(6,182,212,0.6)]"
    >
      <FiTruck size={80} />
    </motion.div>

    <div className="mt-4 flex w-32 justify-between">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ x: [-20, 20] }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="h-1 w-4 rounded-full bg-[#06B6D4]/30"
        />
      ))}
    </div>
  </div>
);

const RealEstateGraphic = () => (
  <div className="relative flex h-full w-full items-center justify-center">
    <div className="relative text-[#EAB308]">
      <FiHome size={80} className="drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]" />

      <svg className="absolute inset-0 h-full w-full" viewBox="-20 -20 120 120">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          d="M 10 90 L 10 10 L 40 10 L 40 40 L 70 40 L 70 90 Z"
          fill="none"
          stroke="#EAB308"
          strokeWidth="2"
          className="opacity-40 shadow-[0_0_10px_#EAB308]"
        />
      </svg>
    </div>
  </div>
);

const TravelGraphic = () => (
  <div className="relative flex h-full w-full items-center justify-center">
    
    <div className="absolute h-32 w-32 rounded-full border border-dashed border-[#06B6D4]/40" />
    <div className="absolute h-32 w-32 rotate-45 rounded-full border border-[#06B6D4]/20" />

    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      className="absolute h-40 w-40"
    >
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-[#06B6D4] drop-shadow-[0_0_10px_#06B6D4]">
        <FiSend size={24} className="rotate-45" />
      </div>
    </motion.div>
  </div>
);

const EducationGraphic = () => (
  <div className="relative flex h-full w-full items-center justify-center">
    <motion.div
      animate={{ y: [-5, 5, -5] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="text-[#8B5CF6] drop-shadow-[0_0_20px_rgba(139,92,246,0.6)]"
    >
      <FiBookOpen size={80} />
    </motion.div>

    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        animate={{ y: [0, -40], opacity: [0, 1, 0] }}
        transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, ease: "easeOut" }}
        className="absolute h-2 w-2 rounded-full bg-[#8B5CF6]"
        style={{ left: `${30 + i * 10}%`, top: "40%" }}
      />
    ))}
  </div>
);

export function IndustryGraphic({ industry }: { industry: string }) {
  return (
    <div className="industry-graphic-bg flex h-[140px] w-full items-center justify-center overflow-hidden rounded-xl bg-black/40 border border-white/5 relative">
      
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent blur-2xl pointer-events-none mix-blend-overlay" />
      
      {industry === "Healthcare" && <HealthcareGraphic />}
      {industry === "Finance" && <FinanceGraphic />}
      {industry === "Retail" && <RetailGraphic />}
      {industry === "Manufacturing" && <ManufacturingGraphic />}
      {industry === "Logistics" && <LogisticsGraphic />}
      {industry === "Real Estate" && <RealEstateGraphic />}
      {industry === "Travel" && <TravelGraphic />}
      {industry === "Education" && <EducationGraphic />}
    </div>
  );
}
