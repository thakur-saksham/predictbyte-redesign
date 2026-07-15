import { motion } from "framer-motion";
import { 
  FiUsers, 
  FiShield, 
  FiTarget, 
  FiCompass, 
  FiSearch, 
  FiPenTool, 
  FiCode, 
  FiActivity, 
  FiSend 
} from "react-icons/fi";
import { hexToRgba } from "../lib/utils";

const FEATURES = [
  {
    icon: FiUsers,
    title: "Collaborative",
    desc: "We work closely with you at every step.",
  },
  {
    icon: FiShield,
    title: "Transparent",
    desc: "Clear communication and visible progress.",
  },
  {
    icon: FiTarget,
    title: "Results-Driven",
    desc: "Focused on measurable outcomes that matter.",
  },
];

const STEPS = [
  { num: "01", name: "Discover", desc: "Align on goals and challenges.", color: "#3B82F6", icon: FiCompass },
  { num: "02", name: "Research", desc: "Uncover insights and opportunities.", color: "#8B5CF6", icon: FiSearch },
  { num: "03", name: "Design", desc: "Create user-centric designs that convert.", color: "#EC4899", icon: FiPenTool },
  { num: "04", name: "Develop", desc: "Engineer robust and scalable solutions.", color: "#F97316", icon: FiCode },
  { num: "05", name: "Test", desc: "Ensure quality, usability, and performance.", color: "#EAB308", icon: FiActivity },
  { num: "06", name: "Deploy", desc: "Launch, monitor, and continuously improve.", color: "#06B6D4", icon: FiSend },
];

export function EngineeringCycle() {
  return (
    <section
      id="process"
      className="relative w-full overflow-hidden bg-[#040710] py-28"
    >
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-12 px-6 xl:grid xl:grid-cols-[1fr_2fr] xl:gap-8 xl:items-center">

        <div className="z-10 xl:pl-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#4F8CFF]"
          >
            OUR PROCESS
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 font-sans text-4xl font-semibold leading-[1.2] text-white sm:text-5xl"
          >
            We follow a proven<br />
            process for <span className="bg-gradient-to-r from-[#8B5CF6] to-[#4F8CFF] bg-clip-text text-transparent">real results.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-sm text-[15px] text-white/70 leading-relaxed"
          >
            From discovery to deployment, every step is designed to deliver clarity, quality, and impact.
          </motion.p>

          <div className="mt-12 flex flex-col gap-4 max-w-sm">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="group relative flex items-center gap-5 rounded-2xl bg-[#090d18] p-4 transition-colors duration-300 hover:bg-[#0c1222]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-b from-[#1a2235] to-[#0a0f1c] shadow-[0_0_15px_rgba(79,140,255,0.1)] text-[#4F8CFF] transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(79,140,255,0.3)]">
                  <feature.icon size={20} />
                </div>
                <div>
                  <h4 className="text-[15px] font-semibold text-white">
                    {feature.title}
                  </h4>
                  <p className="mt-1 text-[13px] text-white/50 leading-snug">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative mt-20 h-[600px] w-full xl:mt-0 hidden xl:block">

          <div className="absolute inset-0 z-0 flex items-center justify-center overflow-visible pointer-events-none">
            <svg 
              className="absolute left-[5%] top-[50%] h-[300px] w-[90%] overflow-visible" 
              viewBox="0 0 1000 300"
              preserveAspectRatio="none"
            >
              
              <path 
                d="M 50 250 C 250 250, 300 200, 400 150 C 500 100, 600 180, 700 100 C 800 20, 900 50, 950 20"
                fill="none" 
                stroke="url(#glowGradient)" 
                strokeWidth="20" 
                className="opacity-20 blur-xl"
              />

              <path 
                d="M 50 250 C 250 250, 300 200, 400 150 C 500 100, 600 180, 700 100 C 800 20, 900 50, 950 20"
                fill="none" 
                stroke="url(#pathGradient)" 
                strokeWidth="2" 
                strokeDasharray="6,6"
                className="animate-[dash_30s_linear_infinite] opacity-60"
              />
              
              <defs>
                <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="20%" stopColor="#8B5CF6" />
                  <stop offset="40%" stopColor="#EC4899" />
                  <stop offset="60%" stopColor="#F97316" />
                  <stop offset="80%" stopColor="#EAB308" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="20%" stopColor="#8B5CF6" />
                  <stop offset="40%" stopColor="#EC4899" />
                  <stop offset="60%" stopColor="#F97316" />
                  <stop offset="80%" stopColor="#EAB308" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="absolute inset-0 z-10 mx-auto flex h-full w-full max-w-[1000px] items-center justify-between px-4 sm:px-10">
            {STEPS.map((step, i) => {
              
              const yOffsets = [100, 20, -30, 20, -50, -100];
              const yOffset = yOffsets[i];
              
              return (
                <div 
                  key={step.num} 
                  className="group relative flex flex-col items-center justify-center w-[120px]"
                  style={{ transform: `translateY(${yOffset}px)` }}
                >

                  <div className="relative flex h-[140px] w-[80px] flex-col items-center justify-end perspective-[1000px] cursor-pointer">

                    <div 
                      className="absolute bottom-[35px] z-20 flex h-[70px] w-[70px] items-center justify-center rounded-2xl border border-white/20 backdrop-blur-md transition-all duration-500 group-hover:-translate-y-4 group-hover:scale-110"
                      style={{ 
                        background: `linear-gradient(135deg, ${hexToRgba(step.color, 0.2)}, ${hexToRgba(step.color, 0.05)})`,
                        boxShadow: `inset 0 0 20px ${hexToRgba(step.color, 0.2)}, 0 10px 30px ${hexToRgba(step.color, 0.3)}`
                      }}
                    >
                      
                      <div 
                        className="absolute inset-0 rounded-2xl blur-md opacity-50 transition-opacity duration-500 group-hover:opacity-100" 
                        style={{ backgroundColor: hexToRgba(step.color, 0.4) }} 
                      />
                      <step.icon size={30} color={step.color} className="relative z-10" style={{ filter: `drop-shadow(0 0 8px ${step.color})` }} />

                      <div className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-b border-r border-white/20" 
                           style={{ background: `linear-gradient(135deg, transparent, ${hexToRgba(step.color, 0.2)})` }} />
                    </div>

                    <div 
                      className="relative z-10 h-[60px] w-[60px] rounded-xl border border-white/10 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                      style={{ 
                        transform: "rotateX(60deg) rotateZ(45deg)",
                        background: `linear-gradient(135deg, ${hexToRgba(step.color, 0.3)}, ${hexToRgba(step.color, 0.1)})`,
                        boxShadow: `0 20px 30px ${hexToRgba(step.color, 0.2)}, inset 0 0 15px ${hexToRgba(step.color, 0.4)}`
                      }}
                    >
                      
                      <div className="absolute inset-[2px] rounded-lg border border-white/30" />
                    </div>

                    <div 
                      className="absolute -bottom-8 h-[30px] w-[60px] rounded-full blur-xl transition-all duration-500 group-hover:opacity-100 group-hover:scale-125 opacity-60"
                      style={{ backgroundColor: step.color }}
                    />
                  </div>

                  <div 
                    className="h-[60px] w-px border-l-2 border-dashed transition-colors duration-300 opacity-30 group-hover:opacity-100 my-2" 
                    style={{ borderColor: step.color }}
                  />

                  <div className="text-center w-[140px] transition-all duration-300 group-hover:-translate-y-1">
                    <span className="text-[17px] font-bold" style={{ color: step.color }}>{step.num}</span>
                    <h4 className="mt-1 text-[17px] font-semibold text-white" style={{ color: step.color }}>{step.name}</h4>
                    <p className="mt-2 text-[12px] leading-relaxed text-white/60 group-hover:text-white/90 transition-colors duration-300">
                      {step.desc}
                    </p>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative mt-16 flex w-full flex-col gap-8 xl:hidden">
          
          <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-white/5 via-white/20 to-white/5" />
          
          {STEPS.map((step, i) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="relative flex items-start gap-6 pl-2"
            >
              
              <div 
                className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0a0f1c] border border-white/10 shadow-lg"
                style={{ boxShadow: `0 0 15px ${hexToRgba(step.color, 0.2)}` }}
              >
                <step.icon size={16} color={step.color} />
              </div>

              <div className="pt-1">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold" style={{ color: step.color }}>{step.num}</span>
                  <h4 className="text-lg font-semibold text-white">{step.name}</h4>
                </div>
                <p className="mt-1 text-sm text-white/60 leading-relaxed max-w-[280px]">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
