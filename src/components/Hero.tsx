import { motion } from "framer-motion";
import heroVideo from "../assets/AI_core_in_glass_cube.mp4";
import { scrollToSection } from "../lib/lenis";
import { HERO_VIDEO_SRC } from "../lib/media";
import { VideoBackground } from "./ui/VideoBackground";
import { BookCallButton } from "./ui/BookCallButton";

const HEADLINE_LINES = ["AI-Powered", "Digital Products", "Crafted to Scale."];

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section id="home" className="relative w-full">
      <div className="absolute inset-x-0 top-0 z-0 h-screen overflow-hidden bg-bg">
        <VideoBackground src={HERO_VIDEO_SRC} overlayClassName="bg-black/[0.07]" />

        <motion.a
          href="#trusted"
          data-cursor="link"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("trusted");
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.9 }}
          className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white/70"
        >
          <span className="animate-bounceSlow">↓</span>
          Scroll to Explore
        </motion.a>
      </div>

      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-6 pb-24 pt-28 text-center sm:justify-start sm:pt-[42vh]">
        <div className="mx-auto flex w-full max-w-hero flex-col items-center">
          <h1 className="font-serif text-[52px] leading-[0.92] tracking-tight text-white sm:text-[clamp(64px,9vh,128px)]">
            {HEADLINE_LINES.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.1, ease: EASE, delay: 0.5 + i * 0.15 }}
                  className="block"
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 1.15 }}
            className="mx-auto mt-6 max-w-copy text-balance text-[15px] leading-relaxed text-white/90 sm:text-base font-medium"
          >
            We engineer AI solutions, enterprise software, cloud platforms and
            digital experiences that help ambitious businesses innovate, scale
            and lead their industries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 1.4 }}
            className="mt-8 flex w-full flex-wrap items-center justify-center gap-4"
          >
            <BookCallButton large />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
