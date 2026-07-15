import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import { ServicesList } from "../components/Services";
import { useScrollToHash } from "../hooks/useScrollToHash";

const EASE = [0.16, 1, 0.3, 1] as const;

export function ServicesPage() {
  useScrollToHash();

  return (
    <div className="pb-28 pt-40">
      <div className="mx-auto mb-16 max-w-nav px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <Link
            to="/"
            data-cursor="link"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-secondary transition-colors hover:text-white"
          >
            <FiArrowLeft size={14} /> Back home
          </Link>

          <span className="mt-8 block text-[11px] font-medium uppercase tracking-[0.25em] text-accent">
            What We Do
          </span>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-[1.05] text-white sm:text-5xl">
            Services engineered for scale.
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-secondary sm:text-base">
            Twelve disciplines, one senior team. Whatever the entry point —
            a new product, a stalled platform, or a team that just needs more
            hands — this is the full range of what we build and run.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
      >
        <ServicesList />
      </motion.div>
    </div>
  );
}
