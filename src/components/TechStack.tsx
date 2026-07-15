import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";
import GlassIcons from "./GlassIcons";

const STACK = [
  { label: "React", icon: <SiReact />, color: "cyan" },
  { label: "Next.js", icon: <SiNextdotjs />, color: "indigo" },
  { label: "TypeScript", icon: <SiTypescript />, color: "blue" },
  { label: "Node.js", icon: <SiNodedotjs />, color: "green" },
  { label: "Python", icon: <SiPython />, color: "orange" },
  { label: "AWS", icon: <FaAws />, color: "orange" },
  { label: "Docker", icon: <SiDocker />, color: "blue" },
  { label: "MongoDB", icon: <SiMongodb />, color: "green" },
  { label: "PostgreSQL", icon: <SiPostgresql />, color: "indigo" },
  { label: "Azure", icon: <VscAzure />, color: "cyan" },
  { label: "Tailwind", icon: <SiTailwindcss />, color: "cyan" },
  { label: "Express", icon: <SiExpress />, color: "purple" },
];

export function TechStack() {
  return (
    <section id="technology" className="px-6 py-28">
      <div className="mx-auto mb-4 max-w-nav">
        <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-accent">
          Technology
        </span>
        <h2 className="mt-4 font-serif text-4xl text-white sm:text-5xl">
          A stack built for longevity.
        </h2>
      </div>

      <div className="mx-auto max-w-nav">
        <GlassIcons items={STACK.map((s) => ({ icon: s.icon, color: s.color, label: s.label }))} />
      </div>
    </section>
  );
}
