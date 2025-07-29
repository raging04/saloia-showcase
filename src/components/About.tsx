import heroImage from "@/assets/hero-restaurant.jpg";
import { FaBookOpen, FaLeaf, FaHeart } from "react-icons/fa";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-x-16 items-center">
            {/* Imagem ilustrativa */}
            <div className="hidden md:block animate-fade-in-left">
              <img
                src={heroImage}
                alt="Interior da Taberna Saloia"
                className="rounded-2xl shadow-2xl object-cover w-full h-96 border-4 border-earth/10"
              />
            </div>
            {/* Texto e valores */}
            <div className="flex flex-col justify-center h-full animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth mb-8 drop-shadow-sm">
                Sobre a Taberna Saloia
              </h2>
              <div className="max-w-md">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  A Taberna Saloia é um verdadeiro <span className="text-earth font-semibold">tesouro</span> da gastronomia portuguesa, onde as <span className="text-earth font-semibold">tradições culinárias</span> se encontram com a <span className="text-earth font-semibold">hospitalidade genuína</span> que caracteriza o nosso povo.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Desde a nossa abertura, temos-nos dedicado a <span className="text-earth font-semibold">preservar</span> e <span className="text-earth font-semibold">partilhar</span> os sabores autênticos da cozinha tradicional portuguesa, utilizando receitas transmitidas de geração em geração e ingredientes frescos cuidadosamente selecionados.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Cada prato conta uma história, cada refeição é uma celebração da nossa rica herança gastronómica. Venha descobrir os verdadeiros sabores de Portugal na Taberna Saloia.
                </p>
                <div className="bg-background/80 p-8 rounded-xl shadow-lg mt-0 max-w-md">
                  <h3 className="text-2xl font-bold text-earth mb-6 font-serif">Os Nossos Valores</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 group hover:bg-cream/60 rounded-lg p-2 transition">
                      <FaBookOpen className="w-7 h-7 text-earth mt-1 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-semibold text-earth">Tradição</h4>
                        <p className="text-muted-foreground text-sm">Receitas autênticas transmitidas de geração em geração</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 group hover:bg-cream/60 rounded-lg p-2 transition">
                      <FaLeaf className="w-7 h-7 text-earth mt-1 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-semibold text-earth">Qualidade</h4>
                        <p className="text-muted-foreground text-sm">Ingredientes frescos e cuidadosamente selecionados</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 group hover:bg-cream/60 rounded-lg p-2 transition">
                      <FaHeart className="w-7 h-7 text-earth mt-1 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-semibold text-earth">Hospitalidade</h4>
                        <p className="text-muted-foreground text-sm">Acolhimento caloroso e serviço de excelência</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Imagem mobile */}
            <div className="md:hidden mb-8 animate-fade-in-up">
              <img
                src={heroImage}
                alt="Interior da Taberna Saloia"
                className="rounded-2xl shadow-2xl object-cover w-full h-64 border-4 border-earth/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;