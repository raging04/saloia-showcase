import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-earth">Taberna Saloia</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-earth transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('pratos')}
              className="text-foreground hover:text-earth transition-colors"
            >
              Pratos
            </button>
            <button 
              onClick={() => scrollToSection('ementa')}
              className="text-foreground hover:text-earth transition-colors"
            >
              Ementa
            </button>
            <button 
              onClick={() => scrollToSection('contactos')}
              className="text-foreground hover:text-earth transition-colors"
            >
              Contactos
            </button>
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
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left text-foreground hover:text-earth transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('pratos')}
                className="text-left text-foreground hover:text-earth transition-colors"
              >
                Pratos
              </button>
              <button 
                onClick={() => scrollToSection('ementa')}
                className="text-left text-foreground hover:text-earth transition-colors"
              >
                Ementa
              </button>
              <button 
                onClick={() => scrollToSection('contactos')}
                className="text-left text-foreground hover:text-earth transition-colors"
              >
                Contactos
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;