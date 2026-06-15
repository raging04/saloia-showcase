import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "ts-cookie-consent";

declare global {
  interface Window {
    // Defined in index.html; wires Google Consent Mode v2 + the Meta Pixel.
    updateConsent?: (granted: boolean) => void;
  }
}

/**
 * RGPD/ePrivacy consent banner. No analytics/marketing tags fire until the
 * visitor opts in (Google Consent Mode defaults to "denied" in index.html and
 * the Meta Pixel only loads on acceptance). The choice is remembered locally.
 */
const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      /* localStorage unavailable (e.g. private mode) — show the banner */
    }
    if (!stored) setVisible(true);
  }, []);

  const decide = (granted: boolean) => {
    try {
      localStorage.setItem(STORAGE_KEY, granted ? "granted" : "denied");
    } catch {
      /* ignore */
    }
    window.updateConsent?.(granted);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-border bg-background/98 backdrop-blur-sm shadow-2xl"
    >
      <div className="container mx-auto flex flex-col gap-4 px-4 py-5 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground md:max-w-2xl">
          Utilizamos cookies para analisar o tráfego e melhorar a sua experiência. Pode aceitar
          ou recusar os cookies não essenciais. Saiba mais na nossa{" "}
          <Link to="/privacidade" className="font-medium text-earth underline underline-offset-2">
            Política de Privacidade
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <Button
            variant="outline"
            onClick={() => decide(false)}
            className="border-earth text-earth hover:bg-earth hover:text-earth-foreground"
          >
            Recusar
          </Button>
          <Button
            onClick={() => decide(true)}
            className="bg-earth text-earth-foreground hover:bg-earth/90"
          >
            Aceitar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
