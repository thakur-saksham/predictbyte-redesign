import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";

const FAQS = [
  {
    q: "What kinds of companies do you work with?",
    a: "We partner with ambitious startups and established enterprises who need AI, cloud or platform engineering done right the first time.",
  },
  {
    q: "How long does a typical engagement take?",
    a: "Most projects run 8–16 weeks depending on scope. We share a detailed timeline before any work begins.",
  },
  {
    q: "Do you work with in-house engineering teams?",
    a: "Yes. We regularly embed alongside existing teams, handing off clean, documented code and knowledge as we go.",
  },
  {
    q: "What does the engagement process look like?",
    a: "We move through discovery, research, design, development, testing, deployment and post-launch optimization, with you involved at every stage.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-accent">
            FAQ
          </span>
          <h2 className="mt-4 font-serif text-4xl text-white sm:text-5xl">
            Common questions
          </h2>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  data-cursor="link"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-serif text-lg text-white sm:text-xl">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="shrink-0 text-accent"
                  >
                    <FiPlus size={18} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 max-w-lg text-sm leading-relaxed text-secondary">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
