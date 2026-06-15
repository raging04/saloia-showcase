import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Utensils } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";
import { useSeo } from "@/hooks/use-seo";

const NotFound = () => {
  const location = useLocation();

  useSeo({ title: "Página não encontrada - Taberna Saloia" });

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-cream">
      <SkipLink />
      <Header />

      <main id="main">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto pt-12">
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
                    asChild
                    className="bg-earth text-earth-foreground hover:bg-earth/90"
                  >
                    <Link to="/">
                      <Home className="w-4 h-4 mr-2" aria-hidden="true" />
                      Voltar ao Início
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-earth text-earth hover:bg-earth hover:text-earth-foreground"
                  >
                    <Link to="/ementa">
                      <Utensils className="w-4 h-4 mr-2" aria-hidden="true" />
                      Ver Ementa
                    </Link>
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
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
