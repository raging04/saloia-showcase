import { useState } from "react";
import { Menu, X, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Função para determinar o status do restaurante
  const getRestaurantStatus = () => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentDay = now.getDay(); // 0 = Domingo, 1 = Segunda, etc.
    
    // Verificar se é domingo ou feriado (encerrado)
    if (currentDay === 0) {
      return {
        status: "closed",
        message: "Encerrado aos domingos",
        nextOpening: "Amanhã às 12:00",
        color: "bg-red-500",
        pulseColor: "bg-red-500"
      };
    }
    
    // Verificar se é quarta-feira (sem jantar)
    if (currentDay === 3 && currentHour >= 19) {
      return {
        status: "closed",
        message: "Encerrado ao jantar às quartas-feiras",
        nextOpening: "Amanhã às 12:00",
        color: "bg-red-500",
        pulseColor: "bg-red-500"
      };
    }
    
    // Verificar horário de funcionamento
    if (currentHour >= 12 && currentHour < 15) {
      return {
        status: "open",
        message: "Estamos abertos agora",
        nextOpening: "Fechamos às 15:00",
        color: "bg-green-500",
        pulseColor: "bg-green-500"
      };
    } else if (currentHour >= 19 && currentHour < 23) {
      return {
        status: "open",
        message: "Estamos abertos agora",
        nextOpening: "Fechamos às 23:00",
        color: "bg-green-500",
        pulseColor: "bg-green-500"
      };
    } else if (currentHour >= 15 && currentHour < 19) {
      return {
        status: "closed",
        message: "Fechado para almoço",
        nextOpening: "Abrimos às 19:00",
        color: "bg-red-500",
        pulseColor: "bg-red-500"
      };
    } else {
      return {
        status: "closed",
        message: "Fechado",
        nextOpening: "Abrimos às 12:00",
        color: "bg-red-500",
        pulseColor: "bg-red-500"
      };
    }
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
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className={`flex items-center space-x-2 cursor-pointer backdrop-blur-sm border rounded-full px-3 py-2 hover:transition-all duration-300 shadow-lg ${
                    restaurantStatus.status === "open" 
                      ? "bg-green-800/90 border-green-600/30 hover:bg-green-800" 
                      : "bg-red-800/90 border-red-600/30 hover:bg-red-800"
                  }`}>
                    <div className={`w-2.5 h-2.5 rounded-full ${
                      restaurantStatus.status === "open" 
                        ? "bg-green-400 animate-pulse" 
                        : "bg-red-300"
                    }`} />
                    <span className="text-sm font-medium text-white">
                      {restaurantStatus.status === "open" ? "Aberto" : "Fechado"}
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-background border border-border p-3 max-w-xs">
                  <div className="text-center">
                    <p className="font-semibold text-earth mb-1">
                      {restaurantStatus.message}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Próxima abertura: {restaurantStatus.nextOpening}
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
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
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
              
              {/* Mobile Status Indicator */}
              <div className="flex items-center space-x-2 pt-2 border-t border-border">
                <div className={`flex items-center space-x-2 backdrop-blur-sm border rounded-full px-3 py-2 ${
                  restaurantStatus.status === "open" 
                    ? "bg-green-800/90 border-green-600/30" 
                    : "bg-red-800/90 border-red-600/30"
                }`}>
                  <div className={`w-2.5 h-2.5 rounded-full ${
                    restaurantStatus.status === "open" 
                      ? "bg-green-400 animate-pulse" 
                      : "bg-red-300"
                  }`} />
                  <span className="text-sm font-medium text-white">
                    {restaurantStatus.status === "open" ? "Aberto" : "Fechado"}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground ml-2">
                  {restaurantStatus.message}
                </span>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;