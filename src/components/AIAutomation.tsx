import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeUp } from "./ui/FadeUp";

const HEADLINE = "We Build End-to-End AI Automation Systems.";

const FEATURES = ["Workflow Automation", "Data Pipelines", "AI Integrations", "Real-Time Analytics"];

const EASE = [0.22, 1, 0.36, 1] as const;

export function AIAutomation() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const blobAY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const blobBY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 0.4]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-bg px-6 py-24 min-[901px]:px-8 min-[901px]:py-36"
    >
      <motion.div
        style={{ y: blobAY, opacity: glowOpacity }}
        className="pointer-events-none absolute -right-32 top-0 -z-10 h-[480px] w-[480px] rounded-full bg-accent/10 blur-[120px] will-change-transform"
      />
      <motion.div
        style={{ y: blobBY, opacity: glowOpacity }}
        className="pointer-events-none absolute -left-24 bottom-0 -z-10 h-[380px] w-[380px] rounded-full bg-[#cf30aa]/10 blur-[120px] will-change-transform"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto flex max-w-[760px] flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, x: -72 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="m-0 text-balance font-serif text-[clamp(28px,7vw,54px)] font-medium uppercase leading-[1.18] tracking-[0.01em] text-white sm:text-[clamp(34px,4.4vw,54px)] sm:leading-[1.1]"
        >
          {HEADLINE}
        </motion.h2>

        <FadeUp as="p" delay={0.7} className="mt-6 max-w-[420px] text-sm leading-[1.65] text-white/85">
          We provide all-in-one AI automation services in one place.
        </FadeUp>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.08, delayChildren: 0.9 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {FEATURES.map((feature) => (
            <motion.li
              key={feature}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: EASE }}
              whileHover={{ y: -2 }}
              className="glass cursor-none rounded-full px-4 py-2 text-[12px] font-medium normal-case tracking-normal text-white/80 transition-colors duration-300 hover:text-white"
            >
              {feature}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
