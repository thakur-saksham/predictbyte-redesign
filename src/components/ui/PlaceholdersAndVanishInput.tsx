import { AnimatePresence, motion } from "framer-motion";
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import { cn } from "../../lib/utils";

export interface PlaceholdersAndVanishInputHandle {
  clear: () => void;
  focus: () => void;
}

interface PixelPoint {
  x: number;
  y: number;
  r: number;
  color: string;
}

interface PlaceholdersAndVanishInputProps {
  placeholders: string[];
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  className?: string;
}

export const PlaceholdersAndVanishInput = forwardRef<
  PlaceholdersAndVanishInputHandle,
  PlaceholdersAndVanishInputProps
>(function PlaceholdersAndVanishInput(
  { placeholders, onChange, onSubmit, onFocus, onBlur, className },
  forwardedRef
) {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAnimation = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
    }, 3000);
  }, [placeholders.length]);

  useEffect(() => {
    startAnimation();
    const handleVisibility = () => {
      if (document.visibilityState !== "visible" && intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      } else if (document.visibilityState === "visible") {
        startAnimation();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [startAnimation]);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pixelsRef = useRef<PixelPoint[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const [animating, setAnimating] = useState(false);

  const draw = useCallback(() => {
    if (!inputRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 800;
    ctx.clearRect(0, 0, 800, 800);
    const computedStyles = getComputedStyle(inputRef.current);
    const fontSize = parseFloat(computedStyles.getPropertyValue("font-size"));
    ctx.font = `${fontSize * 2}px ${computedStyles.fontFamily}`;
    ctx.fillStyle = "#FFF";
    ctx.fillText(value, 16, 40);

    const imageData = ctx.getImageData(0, 0, 800, 800);
    const pixelData = imageData.data;
    const points: PixelPoint[] = [];

    for (let t = 0; t < 800; t++) {
      const i = 4 * t * 800;
      for (let n = 0; n < 800; n++) {
        const e = i + 4 * n;
        if (pixelData[e] !== 0 && pixelData[e + 1] !== 0 && pixelData[e + 2] !== 0) {
          points.push({
            x: n,
            y: t,
            r: 1,
            color: `rgba(${pixelData[e]}, ${pixelData[e + 1]}, ${pixelData[e + 2]}, ${pixelData[e + 3]})`,
          });
        }
      }
    }

    pixelsRef.current = points;
  }, [value]);

  useEffect(() => {
    draw();
  }, [value, draw]);

  const animate = (start: number) => {
    const animateFrame = (pos = 0) => {
      requestAnimationFrame(() => {
        const next: PixelPoint[] = [];
        for (let i = 0; i < pixelsRef.current.length; i++) {
          const current = pixelsRef.current[i];
          if (current.x < pos) {
            next.push(current);
          } else {
            if (current.r <= 0) continue;
            current.x += Math.random() > 0.5 ? 1 : -1;
            current.y += Math.random() > 0.5 ? 1 : -1;
            current.r -= 0.05 * Math.random();
            next.push(current);
          }
        }
        pixelsRef.current = next;
        const ctx = canvasRef.current?.getContext("2d");
        if (ctx) {
          ctx.clearRect(pos, 0, 800, 800);
          pixelsRef.current.forEach((p) => {
            if (p.x > pos) {
              ctx.beginPath();
              ctx.rect(p.x, p.y, p.r, p.r);
              ctx.fillStyle = p.color;
              ctx.strokeStyle = p.color;
              ctx.stroke();
            }
          });
        }
        if (pixelsRef.current.length > 0) {
          animateFrame(pos - 8);
        } else {
          setValue("");
          setAnimating(false);
        }
      });
    };
    animateFrame(start);
  };

  const vanishAndSubmit = () => {
    const currentValue = inputRef.current?.value ?? "";
    if (!currentValue) return;
    setAnimating(true);
    draw();
    const maxX = pixelsRef.current.reduce((prev, p) => (p.x > prev ? p.x : prev), 0);
    animate(maxX);
    onSubmit?.(currentValue);
  };

  useImperativeHandle(forwardedRef, () => ({
    clear: () => {
      setValue("");
      setAnimating(false);
      pixelsRef.current = [];
      canvasRef.current?.getContext("2d")?.clearRect(0, 0, 800, 800);
    },
    focus: () => inputRef.current?.focus(),
  }));

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !animating) {
      vanishAndSubmit();
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!animating) vanishAndSubmit();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "group relative flex h-11 w-full items-center overflow-hidden rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-300",
        "focus-within:border-accent/50 focus-within:shadow-[0_0_0_1px_rgba(79,140,255,0.35),0_0_24px_rgba(79,140,255,0.22)]",
        value && "bg-[#080c1e]",
        className
      )}
    >
      <canvas
        ref={canvasRef}
        className={cn(
          "pointer-events-none absolute left-3 top-1/2 origin-top-left -translate-y-1/2 scale-[0.5] filter",
          !animating ? "opacity-0" : "opacity-100"
        )}
      />

      <svg
        viewBox="0 0 24 24"
        width={15}
        height={15}
        className="pointer-events-none ml-4 shrink-0 text-secondary"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>

      <input
        ref={inputRef}
        value={value}
        type="text"
        onFocus={onFocus}
        onBlur={onBlur}
        data-cursor="text"
        onChange={(e) => {
          if (!animating) {
            setValue(e.target.value);
            onChange?.(e);
          }
        }}
        onKeyDown={handleKeyDown}
        className={cn(
          "relative z-10 h-full w-full flex-1 truncate bg-transparent pl-2.5 pr-9 text-[13px] text-white outline-none",
          animating && "text-transparent"
        )}
      />

      <div className="pointer-events-none absolute inset-0 flex items-center">
        <AnimatePresence mode="wait">
          {!value && (
            <motion.p
              initial={{ y: 6, opacity: 0 }}
              key={`ph-${currentPlaceholder}`}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -14, opacity: 0 }}
              transition={{ duration: 0.3, ease: "linear" }}
              className="w-[calc(100%-72px)] truncate pl-10 text-left text-[13px] font-normal text-secondary"
            >
              {placeholders[currentPlaceholder]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <button
        type="submit"
        disabled={!value}
        data-cursor="button"
        aria-label="Search"
        className="relative z-10 mr-1.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 disabled:opacity-40 enabled:hover:bg-accent"
      >
        <motion.svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path
            d="M5 12l14 0"
            initial={{ strokeDasharray: "50%", strokeDashoffset: "50%" }}
            animate={{ strokeDashoffset: value ? 0 : "50%" }}
            transition={{ duration: 0.3, ease: "linear" }}
          />
          <path d="M13 18l6 -6" />
          <path d="M13 6l6 6" />
        </motion.svg>
      </button>
    </form>
  );
});
