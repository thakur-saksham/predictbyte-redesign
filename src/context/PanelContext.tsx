import { createContext, useContext, useState, type ReactNode } from "react";

export type PanelKey = "services" | "about" | null;

interface PanelContextValue {
  panel: PanelKey;
  open: (key: Exclude<PanelKey, null>) => void;
  close: () => void;
}

const PanelContext = createContext<PanelContextValue | undefined>(undefined);

export function PanelProvider({ children }: { children: ReactNode }) {
  const [panel, setPanel] = useState<PanelKey>(null);

  return (
    <PanelContext.Provider
      value={{
        panel,
        open: (key) => setPanel(key),
        close: () => setPanel(null),
      }}
    >
      {children}
    </PanelContext.Provider>
  );
}

export function usePanel() {
  const ctx = useContext(PanelContext);
  if (!ctx) throw new Error("usePanel must be used within a PanelProvider");
  return ctx;
}
