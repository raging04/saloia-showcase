import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-restaurant.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Taberna Saloia
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
          Sabores autênticos da tradição portuguesa num ambiente acolhedor e familiar
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => scrollToSection('ementa')}
            size="lg"
            className="bg-warmth text-earth hover:bg-warmth/90 text-lg px-8 py-3"
          >
            Ver Ementa
          </Button>
          <Button 
            onClick={() => scrollToSection('contactos')}
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-earth text-lg px-8 py-3"
          >
            Reservar Mesa
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;