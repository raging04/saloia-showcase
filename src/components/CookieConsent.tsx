import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cookie } from "lucide-react";
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
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[100] flex justify-center p-3 pb-24 sm:p-4 sm:pb-24 md:justify-start md:p-6 md:pb-6">
      <div
        role="dialog"
        aria-modal="false"
        aria-label="Aviso de cookies"
        className="pointer-events-auto w-full max-w-md rounded-2xl border border-earth-foreground/15 bg-earth text-earth-foreground shadow-2xl animate-fade-in-up"
      >
        <div className="p-5 sm:p-6">
          <div className="flex items-start gap-3.5">
            <span
              aria-hidden="true"
              className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-earth-foreground/10 text-gold"
            >
              <Cookie className="h-5 w-5" />
            </span>
            <div className="space-y-1.5">
              <h2 className="font-playfair text-lg font-bold leading-tight">
                Este site usa cookies
              </h2>
              <p className="text-sm leading-relaxed text-earth-foreground/80">
                Usamos cookies para analisar o tráfego e melhorar a sua experiência. Pode aceitar
                ou recusar os não essenciais — saiba mais na{" "}
                <Link
                  to="/privacidade"
                  className="font-medium text-gold underline underline-offset-2 transition-colors hover:text-gold/80"
                >
                  Política de Privacidade
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
            <Button
              variant="outline"
              onClick={() => decide(false)}
              className="flex-1 border-earth-foreground/30 bg-transparent text-earth-foreground hover:bg-earth-foreground/10 hover:text-earth-foreground focus-visible:ring-gold focus-visible:ring-offset-earth"
            >
              Recusar
            </Button>
            <Button
              onClick={() => decide(true)}
              className="flex-1 bg-cream font-semibold text-earth shadow-sm hover:bg-cream/90 focus-visible:ring-gold focus-visible:ring-offset-earth"
            >
              Aceitar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
