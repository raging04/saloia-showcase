import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import DynamicGallery from "@/components/DishGallery";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";
import { useSeo } from "@/hooks/use-seo";

const Index = () => {
  useSeo({
    title: "A Taberna Saloia - Restaurante Tradicional em Loures, no Infantado",
    description:
      "Taberna Saloia em Loures - Restaurante tradicional português no Infantado. Especialidades: Bacalhau, Cozido, Feijoada, Caracoletas. Reservas: +351 21 983 11 76",
    canonical: "https://tabernasaloia.com/",
  });

  return (
    <div className="min-h-screen">
      <SkipLink />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <DynamicGallery />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
