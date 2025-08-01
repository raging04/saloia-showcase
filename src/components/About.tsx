import heroImage from "@/assets/hero-restaurant.jpg";
import { FaBookOpen, FaLeaf, FaHeart } from "react-icons/fa";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-x-16 items-start mb-12">
            {/* Texto */}
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth mb-8 drop-shadow-sm">
                Sobre nós
              </h2>
              <div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Na Taberna Saloia, acreditamos que a melhor comida é aquela que nos faz sentir em casa. Desde 2016, no coração do Infantado, em Loures, trazemos à mesa os sabores autênticos da gastronomia portuguesa, com pratos caseiros, petiscos tradicionais e um atendimento que vem com um sorriso.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Inspirados nas raízes saloias da região, criámos um espaço acolhedor onde cada refeição é um momento de partilha. Do cozido à portuguesa ao caril de gambas, passando pelos bifes suculentos e sugestões diárias, tudo é preparado com ingredientes frescos, respeito pela tradição e um toque de carinho.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Mais do que um restaurante, somos uma taberna de amigos — feita para almoços em família, jantares descontraídos e conversas que se prolongam.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Se ainda não nos conhece, venha descobrir o sabor da tradição.
                  Se já conhece, sabe que aqui há sempre lugar à mesa para mais um.
                </p>
              </div>
            </div>
            {/* Imagem ilustrativa */}
            <div className="hidden md:block animate-fade-in-left">
              <img
                src={heroImage}
                alt="Interior da Taberna Saloia"
                className="rounded-2xl shadow-2xl object-cover w-full h-96 border-4 border-earth/10"
              />
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
          
          {/* Card de valores atravessando as duas colunas */}
          <div className="animate-fade-in-up">
            <div className="bg-background/80 p-8 rounded-xl shadow-lg w-full">
              <h3 className="text-2xl font-bold text-earth mb-6 font-serif text-center">Os Nossos Valores</h3>
              <div className="grid grid-cols-3 gap-8 w-full">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 group hover:bg-cream/60 rounded-lg p-2 transition">
                      <FaBookOpen className="w-7 h-7 text-earth mt-1 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-semibold text-earth">Tradição Saloia</h4>
                        <p className="text-muted-foreground text-sm">Inspirados nas raízes da região, preservamos os sabores autênticos</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 group hover:bg-cream/60 rounded-lg p-2 transition">
                      <FaLeaf className="w-7 h-7 text-earth mt-1 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-semibold text-earth">Casa & Família</h4>
                        <p className="text-muted-foreground text-sm">Um espaço acolhedor onde cada refeição é um momento de partilha</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 group hover:bg-cream/60 rounded-lg p-2 transition">
                      <FaHeart className="w-7 h-7 text-earth mt-1 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-semibold text-earth">Amizade</h4>
                        <p className="text-muted-foreground text-sm">Mais do que um restaurante, somos uma taberna de amigos</p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;