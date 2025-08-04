import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import DynamicGallery from "@/components/DishGallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <DynamicGallery />
      <Footer />
    </div>
  );
};

export default Index;
