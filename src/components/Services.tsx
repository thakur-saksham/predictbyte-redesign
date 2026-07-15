import { useNavigate } from "react-router-dom";
import { scrollToSection } from "../lib/lenis";
import { useActiveSection } from "../hooks/useActiveSection";
import { hexToRgba } from "../lib/utils";
import { SERVICES } from "../lib/servicesData";
import { motion } from "framer-motion";
import { ServiceAnimation } from "./ServiceAnimation";

export function ServicesList() {
  const active = useActiveSection(SERVICES.map((s) => s.id));
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/#contact");

    window.setTimeout(() => scrollToSection("contact"), 150);
  };

  return (
    <div className="mx-auto grid max-w-nav grid-cols-1 gap-12 px-6 lg:grid-cols-[240px_1fr]">
      
      <nav className="hidden lg:block">
        <ul className="sticky top-32 space-y-1">
          {SERVICES.map((service) => {
            const isActive = active === service.id;
            return (
              <li key={service.id}>
                <button
                  type="button"
                  data-cursor="link"
                  onClick={() => scrollToSection(service.id)}
                  className={`relative block w-full py-2 pl-4 text-left text-sm transition-colors duration-300 ${
                    isActive ? "font-semibold text-white" : "text-secondary hover:text-white"
                  }`}
                >
                  <span
                    className="absolute left-0 top-1/2 h-4 w-[2px] -translate-y-1/2 rounded-full transition-opacity duration-300"
                    style={{ opacity: isActive ? 1 : 0, backgroundColor: service.color }}
                  />
                  {service.title}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="divide-y divide-border">
        {SERVICES.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div 
              key={service.id} 
              id={service.id} 
              className="scroll-mt-32 py-16 first:pt-0"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="grid grid-cols-1 gap-12 xl:grid-cols-[1.2fr_1fr] xl:items-center">
                
                <div>
                  <div className="flex items-center gap-4">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor: hexToRgba(service.color, 0.12), color: service.color }}
                    >
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl text-white sm:text-3xl">{service.title}</h3>
                      <p className="mt-0.5 text-sm text-secondary">{service.tagline}</p>
                    </div>
                  </div>

                  <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-secondary">
                    {service.copy}
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-2 sm:grid-cols-2">
                    {service.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-2 text-sm text-secondary">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: service.color }}
                        />
                        {bullet}
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    data-cursor="link"
                    onClick={goToContact}
                    className="mt-6 inline-flex items-center gap-1 text-sm font-medium hover:text-white"
                    style={{ color: service.color }}
                  >
                    Talk to us about {service.title.toLowerCase()} ↗
                  </button>
                </div>

                <div className="hidden xl:flex relative h-[320px] w-full items-center justify-center">
                  <ServiceAnimation type={service.id} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
