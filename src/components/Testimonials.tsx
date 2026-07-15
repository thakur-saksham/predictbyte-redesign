import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LampContainer } from "./ui/Lamp";

const TESTIMONIALS = [
  {
    quote:
      "PredictByte rebuilt our platform from the ground up and it finally feels like software our customers deserve. The team thinks like founders, not vendors.",
    name: "Elena Marsh",
    role: "COO, Fjord Capital",
  },
  {
    quote:
      "They shipped an AI layer into our product that our own engineers had been circling for a year. Fast, senior and genuinely collaborative.",
    name: "Daniel Osei",
    role: "CTO, Corelane",
  },
  {
    quote:
      "Every deliverable felt considered. No filler, no over-engineering, just the right architecture for where we actually are.",
    name: "Priya Nair",
    role: "Founder, Nimbus",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 5500);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section className="overflow-hidden">
      <LampContainer>
        <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-accent">
          Client Voices
        </span>
        <motion.h2
          initial={{ opacity: 0.5, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.8, ease: "easeInOut" }}
          className="mt-4 py-1 text-center font-serif text-4xl text-white sm:text-6xl"
        >
          What partners say
        </motion.h2>
      </LampContainer>

      <div className="px-6 pb-28">
        <div
          className="mx-auto max-w-2xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-3xl p-10 text-center sm:p-14"
            >
              <p className="text-balance font-serif text-2xl leading-snug text-white sm:text-3xl">
                “{TESTIMONIALS[index].quote}”
              </p>
              <div className="mt-8">
                <p className="text-sm font-medium text-white">
                  {TESTIMONIALS[index].name}
                </p>
                <p className="text-xs text-secondary">{TESTIMONIALS[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-2">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                aria-label={`Show testimonial from ${t.name}`}
                onClick={() => setIndex(i)}
                className="h-1.5 rounded-full transition-all duration-500"
                style={{
                  width: i === index ? 24 : 8,
                  backgroundColor: i === index ? "#4F8CFF" : "rgba(255,255,255,0.15)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
