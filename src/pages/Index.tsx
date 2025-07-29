import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DishGallery from "@/components/DishGallery";
import Menu from "@/components/Menu";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <DishGallery />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
