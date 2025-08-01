import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-restaurant.jpg";
import { FaUtensils, FaRegCalendarAlt } from "react-icons/fa";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay com gradiente e blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent backdrop-blur-sm z-0" />
      <div className="container mx-auto px-4 text-center text-white relative z-10 flex flex-col items-center justify-center py-24 animate-fade-in-up">
        <h1
          className="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-lg animate-fade-in-up"
          style={{ textShadow: "0 4px 24px rgba(0,0,0,0.7)" }}
        >
          Taberna Saloia
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in-up delay-100">
          Uma taberna de amigos no coração do Infantado, em Loures, onde a melhor comida é aquela que nos faz sentir em casa
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
          <Button
            onClick={() => scrollToSection("ementa")}
            size="lg"
            className="bg-warmth text-earth hover:bg-warmth/90 text-lg px-8 py-3 shadow-lg transition-transform hover:-translate-y-1 flex items-center gap-2"
          >
            <FaUtensils className="inline-block mb-0.5" /> Ver Ementa
          </Button>
          <Button
            onClick={() => scrollToSection("contactos")}
            variant="outline"
            size="lg"
            className="border-warmth text-earth bg-white/90 hover:bg-earth hover:text-white hover:border-earth text-lg px-8 py-3 shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
          >
            <FaRegCalendarAlt className="inline-block mb-0.5" /> Reservar Mesa
          </Button>
        </div>
      </div>
      {/* Scroll indicator estilizado */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center text-white z-10 animate-bounce w-full">
        <span className="text-xs mb-1 opacity-80 tracking-wide text-center block">Deslize para saber mais</span>
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 5v14m0 0l-7-7m7 7l7-7"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;