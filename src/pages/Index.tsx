import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import DynamicGallery from "@/components/DishGallery";
import Menu from "@/components/Menu";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Menu />
      <DynamicGallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
