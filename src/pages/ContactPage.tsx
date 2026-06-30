import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import SkipLink from "@/components/SkipLink";
import { useSeo } from "@/hooks/use-seo";

const ContactPage = () => {
  useSeo({
    title: "Contactos - Taberna Saloia, Loures",
    description:
      "Contactos, horário e localização da Taberna Saloia no Infantado, Loures. Telefone: +351 21 983 11 76.",
    canonical: "https://tabernasaloia.com/contactos",
  });

  return (
    <div className="min-h-screen">
      <SkipLink />
      <Header />
      <main id="main" className="pt-20">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
