import { motion } from "framer-motion";
import { Laptop3D } from "./ui/Laptop3D";
import { Mobile3D } from "./ui/Mobile3D";
import { Canvas3D } from "./ui/Canvas3D";
import { Megaphone3D } from "./ui/Megaphone3D";
import { InteractiveChart3D } from "./ui/InteractiveChart3D";
import { AICore3D } from "./ui/AICore3D";
import { CloudTower3D } from "./ui/CloudTower3D";
import { DevOps3D } from "./ui/DevOps3D";
import { Ecommerce3D } from "./ui/Ecommerce3D";
import { ERP3D } from "./ui/ERP3D";
import { CRM3D } from "./ui/CRM3D";
import { DedicatedDev3D } from "./ui/DedicatedDev3D";

function Generic3D() {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-visible"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        initial={{ rotateX: 20, rotateY: 30, rotateZ: 0, scale: 0.8 }}
        whileInView={{ rotateX: 60, rotateY: 60, rotateZ: 360, scale: 1 }}
        viewport={{ once: false, margin: "-20%" }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        className="relative h-[160px] w-[160px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0 rounded-3xl border border-white/20 bg-accent/10 shadow-[0_0_60px_rgba(79,140,255,0.2)] backdrop-blur-3xl" />
        <div 
          className="absolute inset-0 rounded-3xl border border-white/20 bg-accent/10 backdrop-blur-3xl"
          style={{ transform: "rotateX(90deg)" }} 
        />
        <div 
          className="absolute inset-0 rounded-3xl border border-white/20 bg-accent/10 backdrop-blur-3xl"
          style={{ transform: "rotateY(90deg)" }} 
        />
      </motion.div>
    </div>
  );
}

export function ServiceAnimation({ type }: { type: string }) {
  switch (type) {
    case "svc-web-development":
      return <Laptop3D />;
    case "svc-mobile-app-development":
      return <Mobile3D />;
    case "svc-ui-ux-design":
      return <Canvas3D />;
    case "svc-digital-marketing":
      return <Megaphone3D />;
    case "svc-seo-services":
      return <InteractiveChart3D />;
    case "svc-ai-solutions":
      return <AICore3D />;
    case "svc-cloud-services":
      return <CloudTower3D />;
    case "svc-devops":
      return <DevOps3D />;
    case "svc-e-commerce-development":
      return <Ecommerce3D />;
    case "svc-erp-solutions":
      return <ERP3D />;
    case "svc-crm-solutions":
      return <CRM3D />;
    case "svc-dedicated-developers":
      return <DedicatedDev3D />;
    default:
      return <Generic3D />;
  }
}
