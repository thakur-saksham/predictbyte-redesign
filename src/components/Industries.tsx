import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiHeart,
  FiBookOpen,
  FiHome,
  FiDollarSign,
  FiSend,
  FiTool,
  FiShoppingBag,
  FiTruck,
  FiArrowUpRight,
  FiShield,
  FiUsers,
  FiTrendingUp,
  FiActivity,
  FiCpu,
  FiGlobe,
  FiBriefcase
} from "react-icons/fi";
import { hexToRgba } from "../lib/utils";
import { IndustryGraphic } from "./IndustryGraphic";

const INDUSTRIES_DATA = [
  {
    title: "Healthcare",
    icon: FiHeart,
    color: "#4F8CFF",
    desc: "Intelligent healthcare systems that improve outcomes and save lives.",
    tags: ["AI Diagnostics", "EMR Systems", "Telemedicine", "Patient Portal"],
    metrics: [
      { label: "System Uptime", value: "99.99%", icon: FiShield },
      { label: "Patients Impacted", value: "2M+", icon: FiUsers },
      { label: "Operational Efficiency", value: "34%", icon: FiTrendingUp },
    ],
    whatWeBuild: [
      "Hospital Management Systems",
      "AI-Powered Diagnosis Tools",
      "Telemedicine & Remote Care",
      "Patient Portals & Engagement",
      "EMR & Health Data Platforms",
    ],
    hotspot: { x: 50, y: 15 }, 
  },
  {
    title: "Finance",
    icon: FiDollarSign,
    color: "#10B981",
    desc: "Resilient financial systems engineered for compliance and high-stakes markets.",
    tags: ["Core Banking", "Fintech API", "Fraud Detection", "Trading"],
    metrics: [
      { label: "Zero Downtime", value: "100%", icon: FiActivity },
      { label: "Transactions", value: "5B+", icon: FiGlobe },
      { label: "Security Rating", value: "A+", icon: FiShield },
    ],
    whatWeBuild: [
      "Core Banking Architecture",
      "Real-time Trading Platforms",
      "Fraud Detection Algorithms",
      "Payment Gateways & APIs",
      "Blockchain & DeFi Solutions",
    ],
    hotspot: { x: 75, y: 25 }, 
  },
  {
    title: "Retail",
    icon: FiShoppingBag,
    color: "#F59E0B",
    desc: "Commerce infrastructure that scales from launch day to Black Friday.",
    tags: ["E-Commerce", "Inventory Sync", "POS Systems", "Supply Chain"],
    metrics: [
      { label: "Peak Traffic Handled", value: "40x", icon: FiTrendingUp },
      { label: "Orders Processed", value: "50k/hr", icon: FiActivity },
      { label: "Conversion Lift", value: "+18%", icon: FiUsers },
    ],
    whatWeBuild: [
      "High-Scale E-Commerce",
      "Omnichannel Retail POS",
      "AI Inventory Forecasting",
      "Personalized Recommendation Engines",
      "Fulfillment & Shipping APIs",
    ],
    hotspot: { x: 85, y: 50 }, 
  },
  {
    title: "Manufacturing",
    icon: FiTool,
    color: "#EC4899",
    desc: "Operational software built for the factory floor, not just the boardroom.",
    tags: ["IoT Integrations", "ERP Systems", "Automation", "Predictive Maint."],
    metrics: [
      { label: "Plants Connected", value: "12", icon: FiGlobe },
      { label: "Downtime Reduced", value: "22%", icon: FiTrendingUp },
      { label: "Data Latency", value: "<10ms", icon: FiActivity },
    ],
    whatWeBuild: [
      "Industrial IoT Dashboards",
      "Real-time ERP Systems",
      "Predictive Maintenance AI",
      "Automated Quality Control",
      "Supply Chain Visibility",
    ],
    hotspot: { x: 75, y: 75 }, 
  },
  {
    title: "Logistics",
    icon: FiTruck,
    color: "#06B6D4",
    desc: "Fleet and delivery platforms modernized for real-time global tracking.",
    tags: ["Route Optimization", "Fleet Tracking", "Warehouse Mgmt", "Customs"],
    metrics: [
      { label: "Shipments Tracked", value: "1M+", icon: FiGlobe },
      { label: "Delivery Speed", value: "+28%", icon: FiTrendingUp },
      { label: "Fuel Saved", value: "15%", icon: FiHeart },
    ],
    whatWeBuild: [
      "AI Route Optimization",
      "Real-time Fleet Tracking",
      "Warehouse Management Systems",
      "Automated Customs Clearing",
      "Last-mile Delivery Apps",
    ],
    hotspot: { x: 50, y: 85 }, 
  },
  {
    title: "Real Estate",
    icon: FiHome,
    color: "#EAB308",
    desc: "Property tech built for speed, trust, and split-second listing accuracy.",
    tags: ["Property MLS", "Virtual Tours", "Smart Contracts", "Tenant Portals"],
    metrics: [
      { label: "Listings Synced", value: "40k/day", icon: FiGlobe },
      { label: "Load Time", value: "<400ms", icon: FiActivity },
      { label: "Lead Conversion", value: "3x", icon: FiTrendingUp },
    ],
    whatWeBuild: [
      "High-speed MLS Integrations",
      "Virtual Tour Streaming Platforms",
      "Smart Contract Leasing",
      "Tenant Management Portals",
      "Real Estate CRM Solutions",
    ],
    hotspot: { x: 25, y: 75 }, 
  },
  {
    title: "Travel",
    icon: FiSend,
    color: "#06B6D4",
    desc: "Booking experiences that convert, from first search to confirmed itinerary.",
    tags: ["Booking Engines", "GDS Integrations", "Pricing AI", "Loyalty"],
    metrics: [
      { label: "Conversion Lift", value: "+28%", icon: FiTrendingUp },
      { label: "Bookings", value: "5M+", icon: FiUsers },
      { label: "Search Latency", value: "<100ms", icon: FiActivity },
    ],
    whatWeBuild: [
      "Dynamic Booking Engines",
      "Global Distribution Systems (GDS)",
      "AI Dynamic Pricing",
      "Loyalty & Rewards Platforms",
      "Interactive Itinerary Builders",
    ],
    hotspot: { x: 15, y: 50 }, 
  },
  {
    title: "Education",
    icon: FiBookOpen,
    color: "#8B5CF6",
    desc: "Learning tools that scale to millions of students without losing the personal feel.",
    tags: ["LMS Platforms", "Adaptive Learning", "Live Video", "Assessments"],
    metrics: [
      { label: "Students Served", value: "2M+", icon: FiUsers },
      { label: "Video Uptime", value: "99.9%", icon: FiActivity },
      { label: "Engagement", value: "+45%", icon: FiTrendingUp },
    ],
    whatWeBuild: [
      "Scalable LMS Platforms",
      "AI Adaptive Learning Paths",
      "Live Video Virtual Classrooms",
      "Automated Grading & Assessments",
      "Student Analytics Dashboards",
    ],
    hotspot: { x: 25, y: 25 }, 
  },
];

const LOGOS = [
  "MEDANTA",
  "HDFC BANK",
  "RELIANCE",
  "APOLLO",
  "MAKE MY TRIP",
  "TATA MOTORS",
  "DHL",
  "EMAAR"
];

export function Industries() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndustry = INDUSTRIES_DATA[activeIndex];

  return (
    <section id="industries" className="relative w-full overflow-hidden bg-[#050816] py-16 xl:py-24">
      
      <div className="industry-glow absolute left-0 top-0 h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#050816] to-[#050816] pointer-events-none" />

      <div className="relative mx-auto flex w-full max-w-[1800px] flex-col gap-10 px-6 lg:flex-row lg:items-center lg:justify-between h-auto lg:h-[900px]">

        <div className="w-full lg:w-[25%] z-10 flex flex-col gap-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4F8CFF]"
          >
            INDUSTRIES WE EMPOWER
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl leading-[1.1] text-white sm:text-6xl"
          >
            One core.<br />
            Infinite <span className="bg-gradient-to-r from-[#4F8CFF] to-[#8B5CF6] bg-clip-text text-transparent">impact.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[15px] leading-relaxed text-white/70 max-w-sm"
          >
            PredictByte builds intelligent software that powers businesses across industries using AI, cloud engineering, and scalable digital products.
          </motion.p>
        </div>

        <div className="relative w-full lg:w-[45%] flex items-center justify-center z-10 min-h-[500px] lg:min-h-[800px]">
          <div className="relative w-full max-w-[850px] aspect-square flex items-center justify-center">

            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              src="/industry-core.jpg" 
              alt="PredictByte AI Industry Core"
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />

            <div className="absolute inset-0 z-20">
              {INDUSTRIES_DATA.map((ind, i) => {
                const isActive = activeIndex === i;
                return (
                  <button
                    key={ind.title}
                    onMouseEnter={() => setActiveIndex(i)}
                    onClick={() => setActiveIndex(i)}
                    className="absolute flex items-center justify-center h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer group focus:outline-none z-30"
                    style={{ left: `${ind.hotspot.x}%`, top: `${ind.hotspot.y}%` }}
                    aria-label={`View ${ind.title} details`}
                  >
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[28%] z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndustry.title}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full rounded-[24px] border border-white/10 bg-[#0a0f1d]/80 p-8 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.5)] flex flex-col gap-6"
            >
              
              <div>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest" style={{ color: activeIndustry.color }}>
                  <div className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: activeIndustry.color }} />
                  ACTIVE INDUSTRY
                </div>
                
                <div className="mt-3 flex items-start justify-between gap-4">
                  <h3 className="font-serif text-4xl text-white">
                    {activeIndustry.title}
                  </h3>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10" style={{ color: activeIndustry.color }}>
                    <activeIndustry.icon size={24} />
                  </div>
                </div>
                
                <p className="mt-3 text-[14px] text-white/70 leading-relaxed">
                  {activeIndustry.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {activeIndustry.tags.map(tag => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/80">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="my-2">
                <IndustryGraphic industry={activeIndustry.title} />
              </div>

              <hr className="border-white/5" />

              <div className="grid grid-cols-3 gap-4">
                {activeIndustry.metrics.map(metric => (
                  <div key={metric.label} className="flex flex-col items-center text-center gap-1">
                    <metric.icon size={14} className="text-white/40 mb-1" />
                    <span className="text-[18px] font-semibold text-white">{metric.value}</span>
                    <span className="text-[10px] text-white/50 uppercase tracking-wide">{metric.label}</span>
                  </div>
                ))}
              </div>

              <hr className="border-white/5" />

              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#4F8CFF] mb-3">
                  WHAT WE BUILD
                </h4>
                <ul className="flex flex-col gap-2">
                  {activeIndustry.whatWeBuild.map(item => (
                    <li key={item} className="flex items-start gap-2 text-[13px] text-white/70">
                      <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: activeIndustry.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                className="mt-2 flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
              >
                View case studies
                <FiArrowUpRight style={{ color: activeIndustry.color }} />
              </button>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      <div className="relative z-10 mx-auto mt-16 w-full max-w-[1800px] px-6 border-t border-white/10 pt-10">
        
        <div className="flex w-full overflow-x-auto lg:overflow-visible lg:flex-wrap lg:justify-center gap-8 sm:gap-10 opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 pb-4 lg:pb-0 [&::-webkit-scrollbar]:hidden">
          {LOGOS.map((logo) => (
            <div key={logo} className="flex shrink-0 items-center gap-2 text-sm font-bold text-white tracking-widest">
              <FiBriefcase className="opacity-50" size={20} />
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
