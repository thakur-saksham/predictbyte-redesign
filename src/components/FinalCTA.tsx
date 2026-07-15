import { motion } from "framer-motion";
import { BookCallButton } from "./ui/BookCallButton";

export function FinalCTA() {
  return (
    <section id="contact" className="px-6 py-36 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-3xl"
      >
        <h2 className="text-balance font-serif text-5xl leading-[1.03] text-white sm:text-7xl">
          Let's Build Something Extraordinary.
        </h2>
        <div className="mt-12 flex flex-col items-center gap-5">
          <BookCallButton large />
        </div>
      </motion.div>
    </section>
  );
}
