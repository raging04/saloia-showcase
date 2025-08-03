import heroImage from "@/assets/IMG_1528.png";
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
                  Na Taberna Saloia, acreditamos que a <span className="text-earth font-semibold">melhor comida é aquela que nos faz sentir em casa</span>. Desde 2016, no coração do <span className="text-earth font-semibold">Infantado, em Loures</span>, trazemos à mesa os sabores autênticos da gastronomia portuguesa, com pratos caseiros, petiscos tradicionais e um atendimento que vem com um sorriso.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Inspirados nas <span className="text-earth font-semibold">raízes saloias da região</span>, criámos um espaço acolhedor onde cada refeição é um momento de partilha. Tudo é preparado com ingredientes frescos, respeito pela tradição e um toque de carinho.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Mais do que um restaurante, somos uma <span className="text-earth font-semibold">taberna de amigos</span> — feita para almoços em família, jantares descontraídos e conversas que se prolongam.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Se ainda não nos conhece, venha descobrir o <span className="text-earth font-semibold">sabor da tradição</span>.
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
                <div className="text-center group hover:bg-cream/60 rounded-lg p-4 transition">
                  <FaBookOpen className="w-8 h-8 text-earth mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-earth text-sm mb-2">Tradição Saloia</h4>
                  <p className="text-muted-foreground text-xs">Inspirados nas raízes da região, preservamos os sabores autênticos</p>
                </div>
                <div className="text-center group hover:bg-cream/60 rounded-lg p-4 transition">
                  <FaLeaf className="w-8 h-8 text-earth mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-earth text-sm mb-2">Casa & Família</h4>
                  <p className="text-muted-foreground text-xs">Um espaço acolhedor onde cada refeição é um momento de partilha</p>
                </div>
                <div className="text-center group hover:bg-cream/60 rounded-lg p-4 transition">
                  <FaHeart className="w-8 h-8 text-earth mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-earth text-sm mb-2">Amizade</h4>
                  <p className="text-muted-foreground text-xs">Mais do que um restaurante, somos uma taberna de amigos</p>
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