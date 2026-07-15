import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import { usePanel } from "../context/PanelContext";
import { ServicesList } from "./Services";
import { WhyChooseUs } from "./WhyChooseUs";

export function OverlayPanel() {
  const { panel, close } = usePanel();

  useEffect(() => {
    if (!panel) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [panel, close]);

  return (
    <AnimatePresence>
      {panel && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[80] overflow-y-auto bg-bg/98 backdrop-blur-xl"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-h-screen"
          >
            <button
              type="button"
              aria-label="Close"
              data-cursor="button"
              onClick={close}
              className="glass fixed right-6 top-6 z-10 flex h-11 w-11 items-center justify-center rounded-full text-white sm:right-10 sm:top-10"
            >
              <FiX size={20} />
            </button>

            <div className="pt-28">{panel === "services" ? <ServicesList /> : <WhyChooseUs />}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
