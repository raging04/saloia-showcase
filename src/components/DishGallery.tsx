import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FaPlay, FaEye } from "react-icons/fa";
import portugueseDishes from "@/assets/portuguese-dishes.jpg";
import seafoodPlatter from "@/assets/seafood-platter.jpg";
import meatDishes from "@/assets/meat-dishes.jpg";
import heroImage from "@/assets/hero-restaurant.jpg";

const DynamicGallery = () => {
  const galleryItems = [
    {
      id: 1,
      name: "Bacalhau à Brás",
      description: "Tradicional prato de bacalhau com batata palha e ovos",
      image: portugueseDishes,
      type: "image"
    },
    {
      id: 2,
      name: "Mariscada da Casa",
      description: "Seleção fresca do mar com lagosta, camarão e ameijoas",
      image: seafoodPlatter,
      type: "image"
    },
    {
      id: 3,
      name: "Leitão à Bairrada",
      description: "Leitão assado no forno a lenha com batatas coradas",
      image: meatDishes,
      type: "image"
    },
    {
      id: 4,
      name: "Sala Principal",
      description: "Ambiente acolhedor com decoração tradicional portuguesa",
      image: heroImage,
      type: "image"
    },
    {
      id: 5,
      name: "Cozido à Portuguesa",
      description: "Tradicional cozido com carnes, enchidos e legumes",
      image: meatDishes,
      type: "image"
    },
    {
      id: 6,
      name: "Terraço Exterior",
      description: "Área ao ar livre para refeições em dias de sol",
      image: heroImage,
      type: "image"
    },
    {
      id: 7,
      name: "Eventos Privados",
      description: "Espaço ideal para celebrações e eventos especiais",
      image: portugueseDishes,
      type: "video"
    },
    {
      id: 8,
      name: "Arroz de Polvo",
      description: "Arroz cremoso com polvo tenro e coentros",
      image: portugueseDishes,
      type: "image"
    },
    {
      id: 9,
      name: "Bar Tradicional",
      description: "Bar com ambiente rústico e bebidas regionais",
      image: seafoodPlatter,
      type: "video"
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
                        <div className="mt-4">
                          <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-black transition-all duration-300">
                            <FaEye className="w-4 h-4 mr-2" />
                            Ver mais
                          </Button>
                        </div>
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