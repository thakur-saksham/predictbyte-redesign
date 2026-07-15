import { useRef } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { CardBody, CardContainer, CardItem } from "./ui/Card3D";

const PROJECTS = [
  {
    name: "CodeMatrix",
    category: "AI-Powered Skill Assessment",
    tech: ["AI Assessments", "Coding Challenges", "Insights"],
    description: "An AI-powered platform helping developers and students improve coding, interview and problem-solving skills through smart assessments and personalized insights.",
    image: "/projects/codematrix.png",
    link: "https://codematrix.co.in/",
  },
  {
    name: "Geekonik Solutions",
    category: "EdTech Platform",
    tech: ["Software", "AI & Cloud", "Mentorship"],
    description: "An edtech platform for hands-on learning in software development, AI, cloud computing, data science and emerging technologies.",
    image: "/projects/geekonik-solutions.png",
    link: "https://www.geekonik.com/",
  },
  {
    name: "NexFlow CRM",
    category: "Customer Relationship Platform",
    tech: ["Lead Management", "Automations", "Sales Pipelines"],
    description: "A modern CRM that helps businesses manage leads, automate follow-ups, track sales pipelines and improve client communication from one clean dashboard.",
    image: "/projects/nexflow-crm.png",
  },
];

function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <CardContainer containerClassName="py-4">
      <CardBody className="glass group/card relative w-[82vw] max-w-[420px] rounded-3xl p-6 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] sm:w-[420px]">
        
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
          <div className="absolute -inset-x-10 -top-1/2 h-full rotate-12 bg-gradient-to-b from-white/[0.08] to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
        </div>

        <CardItem translateZ={60} className="w-full">
          <div
            className="relative flex aspect-[3/2] w-full items-center justify-center overflow-hidden rounded-xl border border-white/[0.06] bg-[#050816]/40"
          >
            <img src={project.image} alt={`${project.name} product interface`} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-0 shadow-[0_0_60px_20px_rgba(79,140,255,0.12)_inset] opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
          </div>
        </CardItem>

        <CardItem translateZ={40} className="mt-6 w-full">
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            {project.category}
          </span>
        </CardItem>

        <CardItem translateZ={50} className="mt-2 w-full">
          <h3 className="font-serif text-2xl text-white">{project.name}</h3>
        </CardItem>

        <CardItem translateZ={30} className="mt-2 w-full">
          <p className="text-sm leading-relaxed text-secondary">{project.description}</p>
        </CardItem>

        <CardItem translateZ={20} className="mt-4 flex w-full flex-wrap items-center gap-2">
          {project.tech.map((t) => (
            <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-secondary">
              {t}
            </span>
          ))}
        </CardItem>

        {project.link ? (
          <CardItem translateZ={45} translateY={-2} as="span" data-cursor="link" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-white group-hover/card:text-accent">
            View case study <FiArrowUpRight />
          </CardItem>
        ) : (
          <CardItem translateZ={45} translateY={-2} as="span" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-white/40 cursor-default">
            View case study <FiArrowUpRight />
          </CardItem>
        )}
      </CardBody>
    </CardContainer>
  );
}

export function FeaturedProjects() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-project-card]");
    const distance = card ? card.offsetWidth + 32 : 400;
    track.scrollBy({ left: dir * distance, behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-28">
      <div className="mx-auto mb-16 flex max-w-nav items-end justify-between px-6">
        <div>
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-accent">
            Selected Work
          </span>
          <h2 className="mt-4 font-serif text-4xl text-white sm:text-5xl">
            Featured Projects
          </h2>
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <button
            data-cursor="button"
            aria-label="Previous project"
            onClick={() => scrollByCard(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full glass text-white transition-transform hover:scale-105"
          >
            <FiChevronLeft />
          </button>
          <button
            data-cursor="button"
            aria-label="Next project"
            onClick={() => scrollByCard(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full glass text-white transition-transform hover:scale-105"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>

      <motion.div
        ref={trackRef}
        className="mask-fade-x flex snap-x snap-mandatory gap-8 overflow-x-auto px-6 pb-4 [scrollbar-width:none] sm:px-[max(1.5rem,calc((100vw-1400px)/2))] [&::-webkit-scrollbar]:hidden"
      >
        {PROJECTS.map((project) => (
          <div 
            key={project.name} 
            data-project-card 
            className={`snap-center shrink-0 ${project.link ? "cursor-pointer" : ""}`}
            onClick={() => project.link && window.open(project.link, "_blank")}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </motion.div>

      <div className="mt-6 flex items-center justify-center gap-2 sm:hidden">
        <button data-cursor="button" onClick={() => scrollByCard(-1)} className="rounded-full glass p-3 text-white">
          <FiChevronLeft />
        </button>
        <button data-cursor="button" onClick={() => scrollByCard(1)} className="rounded-full glass p-3 text-white">
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}
