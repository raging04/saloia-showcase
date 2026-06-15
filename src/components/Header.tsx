import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const OPENING_HOURS_LABEL = "Seg-Sáb: 12:00-15:00 | 19:00-23:00";
const SCHEDULE_NOTE = "Quarta: Sem jantar | Domingo: Encerrado";
const DAY_NAMES = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];

interface Period {
  open: number; // hour (24h)
  close: number;
}

// Single source of truth for the opening schedule.
// Lunch every day except Sunday; dinner every day except Wednesday and Sunday.
function periodsForDay(day: number): Period[] {
  if (day === 0) return []; // Domingo: encerrado
  const periods: Period[] = [{ open: 12, close: 15 }];
  if (day !== 3) periods.push({ open: 19, close: 23 }); // Quarta: sem jantar
  return periods;
}

function fmt(hour: number) {
  return `${String(hour).padStart(2, "0")}:00`;
}

interface RestaurantStatus {
  isOpen: boolean;
  label: string;
  message: string;
  detail: string;
}

function getRestaurantStatus(now: Date): RestaurantStatus {
  const day = now.getDay();
  const time = now.getHours() + now.getMinutes() / 60;
  const current = periodsForDay(day).find((p) => time >= p.open && time < p.close);

  if (current) {
    return {
      isOpen: true,
      label: "Aberto",
      message: "Estamos abertos agora",
      detail: `Fechamos às ${fmt(current.close)}`,
    };
  }

  // Find the next opening across today (later) and the coming days.
  for (let offset = 0; offset < 8; offset++) {
    const d = (day + offset) % 7;
    for (const p of periodsForDay(d)) {
      if (offset === 0 && time >= p.open) continue; // already past today
      const when =
        offset === 0 ? `às ${fmt(p.open)}` : offset === 1 ? `amanhã às ${fmt(p.open)}` : `${DAY_NAMES[d]} às ${fmt(p.open)}`;
      return { isOpen: false, label: "Fechado", message: "Estamos fechados", detail: `Abrimos ${when}` };
    }
  }
  return { isOpen: false, label: "Fechado", message: "Estamos fechados", detail: "" };
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showStatusTooltip, setShowStatusTooltip] = useState(false);
  const [now, setNow] = useState(() => new Date());
  const location = useLocation();

  // Keep the open/closed badge accurate across opening boundaries.
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(id);
  }, []);

  const restaurantStatus = getRestaurantStatus(now);

  const menuItems = [
    { name: "Início", href: "/" },
    { name: "Ementa", href: "/ementa" },
    { name: "Contactos", href: "/contactos" },
  ];

  const badgeClasses = restaurantStatus.isOpen
    ? "bg-green-800/90 border-green-600/30 hover:bg-green-800"
    : "bg-red-800/90 border-red-600/30 hover:bg-red-800";
  const dotClasses = restaurantStatus.isOpen ? "bg-green-400 animate-pulse" : "bg-red-300";

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img src="/Logo_TabernaSaloia.svg" alt="Taberna Saloia" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-earth hover:text-earth/80 transition-colors font-medium ${
                  location.pathname === item.href ? "border-b-2 border-earth" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Status Indicator */}
            <TooltipProvider>
              <Tooltip open={showStatusTooltip} onOpenChange={setShowStatusTooltip}>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    aria-label="Ver horário de funcionamento"
                    className={`flex items-center space-x-2 cursor-pointer backdrop-blur-sm border rounded-full px-3 py-2 transition-all duration-300 shadow-lg ${badgeClasses}`}
                    onClick={() => setShowStatusTooltip(!showStatusTooltip)}
                  >
                    <span className={`w-2.5 h-2.5 rounded-full ${dotClasses}`} aria-hidden="true" />
                    <span className="text-sm font-medium text-white">{restaurantStatus.label}</span>
                  </button>
                </TooltipTrigger>
                <TooltipContent className="bg-background border border-border p-3 max-w-xs" side="bottom" align="end" sideOffset={8}>
                  <div className="text-center">
                    <p className="font-semibold text-earth mb-1">{restaurantStatus.message}</p>
                    <p className="text-sm text-muted-foreground">{restaurantStatus.detail}</p>
                    <div className="mt-2 text-xs text-muted-foreground">
                      <p>{OPENING_HOURS_LABEL}</p>
                      <p>{SCHEDULE_NOTE}</p>
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Reservation CTA — present on every route */}
            <Button
              size="sm"
              className="umai-reservation-button bg-earth text-earth-foreground hover:bg-earth/90 font-medium"
            >
              Reservar Mesa
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Mobile Status Indicator */}
            <Dialog>
              <DialogTrigger asChild>
                <button
                  type="button"
                  aria-label="Ver horário de funcionamento"
                  className={`flex items-center space-x-2 backdrop-blur-sm border rounded-full px-2 py-1 ${badgeClasses}`}
                >
                  <span className={`w-2 h-2 rounded-full ${dotClasses}`} aria-hidden="true" />
                  <span className="text-xs font-medium text-white">{restaurantStatus.label}</span>
                </button>
              </DialogTrigger>
              <DialogContent className="bg-background border border-border p-4 max-w-xs mx-auto">
                <div className="text-center">
                  <DialogTitle className="font-semibold text-earth mb-2">{restaurantStatus.message}</DialogTitle>
                  <p className="font-semibold text-earth mb-2">{restaurantStatus.detail}</p>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p>{OPENING_HOURS_LABEL}</p>
                    <p>{SCHEDULE_NOTE}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Button
              variant="ghost"
              size="icon"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav id="mobile-nav" className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-left text-earth hover:text-earth/80 transition-colors font-medium ${
                    location.pathname === item.href ? "bg-warmth/20 px-2 py-1 rounded" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                className="umai-reservation-button bg-earth text-earth-foreground hover:bg-earth/90 font-medium w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Reservar Mesa
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
