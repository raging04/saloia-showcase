import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FaPlay, FaEye } from "react-icons/fa";

const DynamicGallery = () => {
  const galleryItems = [
    {
      id: 1,
      name: "Bacalhau em Crosta de Broa",
      description: "Bacalhau fresco coberto com crosta crocante de broa tradicional, acompanhado de batatas e legumes da época",
      image: "/0072B4EB-242A-4709-94EF-3F23D8B7CC62.JPG",
      type: "image"
    },
    {
      id: 2,
      name: "A nossa casa",
      description: "O ambiente acolhedor da Taberna Saloia, onde cada refeição é um momento de partilha e tradição",
      image: "/IMG_1528.png",
      type: "image"
    },
    {
      id: 3,
      name: "A nossa Sala",
      description: "A sala principal da Taberna Saloia, decorada com elementos tradicionais portugueses e ambiente familiar",
      image: "/14572A16-3B9D-4074-BFEF-F9D28B74FD78.JPG",
      type: "image"
    },
    {
      id: 4,
      name: "Um pijama de sobremesas",
      description: "Seleção de sobremesas tradicionais portuguesas, preparadas com carinho e ingredientes frescos",
      image: "/A27B192A-2E5A-41A4-879F-35E72BB0114E.JPG",
      type: "image"
    },
    {
      id: 5,
      name: "Cozido à Portuguesa",
      description: "O tradicional cozido português com carnes, enchidos e legumes, preparado com receita de família",
      image: "/9B7A8E8F-6562-45A4-A668-25DEB75548EC.JPG",
      type: "image"
    },
    {
      id: 6,
      name: "Pica-Pau",
      description: "Pica-pau tradicional português, prato de carne picada com batatas fritas e molho caseiro",
      image: "/EA096665-7906-4935-8417-15E8E54F134D.JPG",
      type: "image"
    },
    {
      id: 7,
      name: "Bife 3 Pimentas",
      description: "Bife suculento temperado com três tipos de pimenta, acompanhado de batata frita",
      image: "/D597D731-6651-4F75-AD18-2C200020C075.JPG",
      type: "image"
    },
    {
      id: 8,
      name: "Dia dos Namorados 2023",
      description: "Celebração especial do Dia dos Namorados na Taberna Saloia, com ambiente romântico e menu especial",
      image: "/B8E1B1AE-6AFE-4976-9B2B-16506EB813B4.JPG",
      type: "image"
    },
    {
      id: 9,
      name: "Caracoletas",
      description: "Caracoletas frescas do mar, servidas com molho caseiro e acompanhamentos tradicionais",
      image: "/6BEE5118-A2D5-4EA7-B0EF-AB840FDD1140.JPG",
      type: "image"
    },
    {
      id: 10,
      name: "Tornedó do Lombo",
      description: "Tornedó de lombo suculento, grelhado no ponto e servido com molho caseiro e batata frita",
      image: "/DE9D01DD-3038-4F12-A9B1-C3F40B01AB79.JPG",
      type: "image"
    },
    {
      id: 11,
      name: "Feijoada à Transmontana",
      description: "Feijoada tradicional transmontana com feijão, carnes de porco e enchidos regionais, servida com arroz e couve",
      image: "/09229FB3-4103-4DDF-BC52-B80F09D65950.JPG",
      type: "image"
    },
    {
      id: 12,
      name: "Feijoada de Choco",
      description: "Feijoada de choco, preparada com choco fresco, feijão branco e temperos regionais",
      image: "/D9879CBE-7B70-410B-86D7-6F7C905292B6.JPG",
      type: "image"
    },
    {
      id: 13,
      name: "Pernil Assado no Forno",
      description: "Pernil assado no forno, especialidade da casa, cozinhado lentamente com temperos caseiros até ficar tenro e suculento, servido com batatas assadas e legumes",
      image: "/448fb5f8-1c51-40d9-9327-0f43c46aa094.MP4",
      type: "video"
    },
    {
      id: 14,
      name: "Francesinha, Empada de Perdiz e Bifinho Grelhado",
      description: "Três pratos da nossa cozinha: Francesinha tradicional com molho caseiro, Empada de Perdiz recheada com carne de caça, e Bifinho Grelhado no ponto com acompanhamentos",
      image: "/WhatsApp Image 2025-05-04 at 18.22.43.jpeg",
      type: "image"
    },
    {
      id: 15,
      name: "Arroz de Marisco",
      description: "Arroz de marisco, preparado com arroz carolino.",
      image: "/0260A2E3-D647-4DB5-834F-2C4CEE01A1CD_4_5005_c.jpeg",
      type: "image"
    },
    {
      id: 16,
      name: "Risotto de Gambas e Cogumelos Selvagens",
      description: "Risotto cremoso italiano preparado com gambas frescas, cogumelos selvagens da época e arroz arborio, finalizado com queijo parmesão e ervas aromáticas",
      image: "/d6f07f81-ab22-4cf0-83ae-aa985cdae672.JPG",
      type: "image"
    },
    {
      id: 17,
      name: "Polvo à Lagareiro",
      description: "Polvo à Lagareiro tradicional português, cozinhado lentamente até ficar tenro, servido com batatas a murro, legumes e regado com azeite quente e alho",
      image: "/0db4598d-2744-4d6c-a0fb-c96a46aad08e.JPG",
      type: "image"
    },
    {
      id: 18,
      name: "CR&F Reserva Extra",
      description: "Vinho CR&F Reserva Extra, uma seleção especial.",
      image: "/25cb02fe-e907-4af7-9d13-37aac952ff01.JPG",
      type: "image"
    },
    {
      id: 19,
      name: "O nosso espaço",
      description: "O ambiente acolhedor e familiar da Taberna Saloia",
      image: "/9479cd12-05ea-4abe-85cd-d663b3277583.JPG",
      type: "image"
    },
    {
      id: 20,
      name: "Ensopado de Borrego",
      description: "Ensopado de borrego tradicional, carne tenra servido com batatas e pão tostado",
      image: "/64a3fc78-b7ec-42e0-92b0-e7488a177a4b.JPG",
      type: "image"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth mb-4 drop-shadow-sm">
            Galeria
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore os nossos pratos, espaços e momentos especiais
          </p>
        </div>

        {/* Grid da Galeria */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card 
                  className="group overflow-hidden bg-card hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Ícone de vídeo */}
                    {item.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/50 rounded-full p-4">
                          <FaPlay className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    )}

                    {/* Overlay dinâmico no hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                      <div className="p-6 w-full">
                        <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-lg">
                          {item.name}
                        </h3>
                        <p className="text-white/90 text-sm drop-shadow-lg">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/50 rounded-full p-6">
                        <FaPlay className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-6">
                  <h3 className="text-2xl font-semibold text-earth mb-2">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {item.description}
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicGallery;