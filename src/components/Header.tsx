import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showStatusTooltip, setShowStatusTooltip] = useState(false);
  const location = useLocation();

  // Função para determinar o status do restaurante
  const getRestaurantStatus = () => {
    // Estado de férias até dia 7 de setembro
    return {
      status: "vacation",
      message: "Estamos de férias",
      nextOpening: "Voltamos dia 7 de Setembro",
      color: "bg-yellow-500",
      pulseColor: "bg-yellow-500"
    };
  };

  const restaurantStatus = getRestaurantStatus();



  const menuItems = [
    { name: "Início", href: "/" },
    { name: "Ementa", href: "/ementa" },
    { name: "Contactos", href: "/contactos" }
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img 
                src="/Logo_TabernaSaloia.svg" 
                alt="Taberna Saloia" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-earth hover:text-earth/80 transition-colors font-medium ${
                  location.pathname === item.href ? 'border-b-2 border-earth' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Status Indicator */}
            <TooltipProvider>
              <Tooltip open={showStatusTooltip} onOpenChange={setShowStatusTooltip}>
                <TooltipTrigger asChild>
                  <div 
                    className={`flex items-center space-x-2 cursor-pointer backdrop-blur-sm border rounded-full px-3 py-2 hover:transition-all duration-300 shadow-lg ${
                      restaurantStatus.status === "open" 
                        ? "bg-green-800/90 border-green-600/30 hover:bg-green-800" 
                        : restaurantStatus.status === "vacation"
                        ? "bg-yellow-700/90 border-yellow-500/30 hover:bg-yellow-700"
                        : "bg-red-800/90 border-red-600/30 hover:bg-red-800"
                    }`}
                    onClick={() => setShowStatusTooltip(!showStatusTooltip)}
                  >
                    <div className={`w-2.5 h-2.5 rounded-full ${
                      restaurantStatus.status === "open" 
                        ? "bg-green-400 animate-pulse" 
                        : restaurantStatus.status === "vacation"
                        ? "bg-yellow-300"
                        : "bg-red-300"
                    }`} />
                    <span className="text-sm font-medium text-white">
                      {restaurantStatus.status === "open" ? "Aberto" : restaurantStatus.status === "vacation" ? "Férias" : "Fechado"}
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent 
                  className="bg-background border border-border p-3 max-w-xs" 
                  side="bottom"
                  align="end"
                  sideOffset={8}
                >
                  <div className="text-center">
                    <p className="font-semibold text-earth mb-1">
                      {restaurantStatus.message}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {restaurantStatus.nextOpening}
                    </p>
                    <div className="mt-2 text-xs text-muted-foreground">
                      <p>Seg-Sáb: 12:00-15:00 | 19:00-23:00</p>
                      <p>Quarta: Sem jantar | Domingo: Encerrado</p>
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>


          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Mobile Status Indicator */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="flex items-center space-x-2 cursor-pointer">
                  <div className={`flex items-center space-x-2 backdrop-blur-sm border rounded-full px-2 py-1 ${
                    restaurantStatus.status === "open" 
                      ? "bg-green-800/90 border-green-600/30" 
                      : restaurantStatus.status === "vacation"
                      ? "bg-yellow-700/90 border-yellow-500/30"
                      : "bg-red-800/90 border-red-600/30"
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${
                      restaurantStatus.status === "open" 
                        ? "bg-green-400 animate-pulse" 
                        : restaurantStatus.status === "vacation"
                        ? "bg-yellow-300"
                        : "bg-red-300"
                    }`} />
                    <span className="text-xs font-medium text-white">
                      {restaurantStatus.status === "open" ? "Aberto" : restaurantStatus.status === "vacation" ? "Férias" : "Fechado"}
                    </span>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="bg-background border border-border p-4 max-w-xs mx-auto">
                <div className="text-center">
                  <h3 className="font-semibold text-earth mb-2">
                    {restaurantStatus.message}
                  </h3>
                  <p className="font-semibold text-earth mb-2">
                    {restaurantStatus.nextOpening}
                  </p>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p>Seg-Sáb: 12:00-15:00 | 19:00-23:00</p>
                    <p>Quarta: Sem jantar | Domingo: Encerrado</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-left text-earth hover:text-earth/80 transition-colors font-medium ${
                    location.pathname === item.href ? 'bg-warmth/20 px-2 py-1 rounded' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;