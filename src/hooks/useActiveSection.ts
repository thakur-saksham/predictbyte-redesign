import { useEffect, useState, useRef } from "react";

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");
  const ratios = useRef<Record<string, number>>({});

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let hasChanges = false;
        entries.forEach((entry) => {
          const id = entry.target.id;
          const newRatio = entry.isIntersecting ? entry.intersectionRatio : 0;
          if (ratios.current[id] !== newRatio) {
            ratios.current[id] = newRatio;
            hasChanges = true;
          }
        });

        if (hasChanges) {
          
          let bestId = active;
          let maxRatio = -1;
          for (const id of ids) {
            const ratio = ratios.current[id] || 0;
            if (ratio > maxRatio) {
              maxRatio = ratio;
              bestId = id;
            }
          }

          if (maxRatio > 0) {
            setActive(bestId);
          } else if (window.scrollY < 100) {
            setActive(ids[0] ?? "");
          }
        }
      },
      {

        rootMargin: "-35% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids, active]);

  return active;
}
