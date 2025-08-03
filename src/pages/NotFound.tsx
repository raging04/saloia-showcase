import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Utensils } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            {/* 404 Number */}
            <div className="mb-8">
              <h1 className="text-8xl md:text-9xl font-bold text-earth opacity-20 mb-4">
                404
              </h1>
            </div>
            
            {/* Main Content */}
            <div className="bg-background rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-earth mb-4">
                Oops! Página não encontrada
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Parece que se perdeu no caminho para a nossa taberna. 
                A página que procura não existe ou foi movida.
              </p>
              
              {/* Error Details */}
              <div className="bg-muted rounded-lg p-4 mb-8">
                <p className="text-sm text-muted-foreground">
                  <strong>Página tentada:</strong> {location.pathname}
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => window.location.href = "/"}
                  className="bg-earth text-earth-foreground hover:bg-earth/90"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Voltar ao Início
                </Button>
                <Button
                  onClick={() => window.location.href = "/menu"}
                  variant="outline"
                  className="border-earth text-earth hover:bg-earth hover:text-earth-foreground"
                >
                  <Utensils className="w-4 h-4 mr-2" />
                  Ver Ementa
                </Button>
              </div>
            </div>
            
            {/* Fun Message */}
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Enquanto isso, que tal experimentar a nossa ementa? 
                Temos pratos deliciosos à sua espera! 🍽️
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default NotFound;
