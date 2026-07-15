export const CALENDLY_URL = "";

let scriptPromise: Promise<void> | null = null;

function loadCalendlyScript(): Promise<void> {
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve, reject) => {
    if (typeof window !== "undefined" && window.Calendly) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Calendly widget"));
    document.body.appendChild(script);
  });

  return scriptPromise;
}

export async function openCalendlyPopup(): Promise<boolean> {
  if (!CALENDLY_URL) return false;

  try {
    await loadCalendlyScript();
    window.Calendly?.initPopupWidget({ url: CALENDLY_URL });
    return true;
  } catch {
    return false;
  }
}

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}
