import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useScrollToHash } from "../hooks/useScrollToHash";
import { Industries } from "../components/Industries";

export default function IndustriesPage() {
  useScrollToHash();

  return (
    <div className="bg-[#050816] min-h-screen pt-32">
      <div className="mx-auto max-w-[1800px] px-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            to="/"
            data-cursor="link"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white/50 transition-colors hover:text-white"
          >
            <FiArrowLeft size={14} /> Back home
          </Link>
        </motion.div>
      </div>

      <Industries />
    </div>
  );
}
