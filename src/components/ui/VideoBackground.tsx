import { useEffect, useRef, useState } from "react";

interface VideoBackgroundProps {
  src: string;
  className?: string;
  overlayClassName?: string;
}

export function VideoBackground({ src, className = "", overlayClassName = "bg-black/[0.07]" }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const markReady = () => setVideoReady(true);
    video.addEventListener("loadeddata", markReady);
    video.addEventListener("canplay", markReady);
    video.addEventListener("playing", markReady);

    const tryPlay = () => {
      video.play().catch(() => {
        const resume = () => {
          video.play().then(markReady).catch(() => {});
        };
        window.addEventListener("pointerdown", resume, { once: true });
        window.addEventListener("keydown", resume, { once: true });
      });
    };
    tryPlay();

    const safety = window.setTimeout(markReady, 2500);

    return () => {
      video.removeEventListener("loadeddata", markReady);
      video.removeEventListener("canplay", markReady);
      video.removeEventListener("playing", markReady);
      window.clearTimeout(safety);
    };
  }, []);

  return (

    <div className={`absolute inset-0 -z-10 overflow-hidden bg-bg ${className}`}>

      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(79,140,255,0.16),transparent_60%),linear-gradient(180deg,#0a1024_0%,#050816_60%,#050816_100%)] transition-opacity duration-700"
        style={{ opacity: videoReady && !videoFailed ? 0 : 1 }}
      />

      {!videoFailed && (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700"
          style={{
            opacity: videoReady ? 1 : 0,
            transform: "translateZ(0)",
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
          }}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onError={() => setVideoFailed(true)}
        />
      )}

      <div className={`absolute inset-0 ${overlayClassName}`} />
    </div>
  );
}
