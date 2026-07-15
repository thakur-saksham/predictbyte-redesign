import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const STATS = [
  { label: "Projects Delivered", value: 95 },
  { label: "Client Satisfaction", value: 99 },
  { label: "On-Time Delivery", value: 100 },
  { label: "AI Adoption", value: 92 },
];

export function WhyChooseUs() {
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-nav">
        <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-accent">
          Why PredictByte
        </span>
        <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-[1.05] text-white sm:text-5xl">
          Software built by engineers who've shipped it before.
        </h2>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-secondary sm:text-base">
          PredictByte is a senior engineering team that builds AI-first
          products, enterprise software and cloud platforms for businesses
          that can't afford to get it wrong. We're client-centric by
          default — every engagement starts with your constraints, not our
          template — and we treat AI as a core capability to build with,
          not a feature to bolt on. The result is software that holds up
          under real usage, not just a demo.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          onViewportEnter={() => setHasAnimated(true)}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2"
        >
          {STATS.map((stat, i) => (
            <div key={stat.label}>
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-medium text-white">{stat.label}</span>
                <span className="font-serif text-2xl text-white">
                  {hasAnimated ? (
                    <Counter target={stat.value} delay={0.2 + i * 0.1} />
                  ) : (
                    "0"
                  )}
                  %
                </span>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                <motion.div
                  className="h-full rounded-full bg-accent"
                  initial={{ width: "0%" }}
                  animate={{ width: hasAnimated ? `${stat.value}%` : "0%" }}
                  transition={{ duration: 1.1, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Counter({ target, delay }: { target: number; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay }}
    >
      <AnimatedNumber target={target} delay={delay} />
    </motion.span>
  );
}

function AnimatedNumber({ target, delay }: { target: number; delay: number }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const start = performance.now();
      const duration = 1100;
      const tick = (now: number) => {
        const progress = Math.min(1, (now - start) / duration);
        setValue(Math.round(progress * target));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay * 1000);
    return () => window.clearTimeout(timeout);
  }, [target, delay]);

  return <>{value}</>;
}
