import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import portugueseDishes from "@/assets/portuguese-dishes.jpg";
import seafoodPlatter from "@/assets/seafood-platter.jpg";
import meatDishes from "@/assets/meat-dishes.jpg";
import heroImage from "@/assets/hero-restaurant.jpg";
import { useState } from "react";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("todos");

  const galleryItems = [
    {
      id: 1,
      name: "Bacalhau à Brás",
      description: "Tradicional prato de bacalhau com batata palha e ovos",
      image: portugueseDishes,
      category: "pratos",
      categoryLabel: "Pratos"
    },
    {
      id: 2,
      name: "Mariscada da Casa",
      description: "Seleção fresca do mar com lagosta, camarão e ameijoas",
      image: seafoodPlatter,
      category: "pratos",
      categoryLabel: "Pratos"
    },
    {
      id: 3,
      name: "Leitão à Bairrada",
      description: "Leitão assado no forno a lenha com batatas coradas",
      image: meatDishes,
      category: "pratos",
      categoryLabel: "Pratos"
    },
    {
      id: 4,
      name: "Sala Principal",
      description: "Ambiente acolhedor com decoração tradicional portuguesa",
      image: heroImage,
      category: "espacos",
      categoryLabel: "Espaços"
    },
    {
      id: 5,
      name: "Cozido à Portuguesa",
      description: "Tradicional cozido com carnes, enchidos e legumes",
      image: meatDishes,
      category: "pratos",
      categoryLabel: "Pratos"
    },
    {
      id: 6,
      name: "Terraço Exterior",
      description: "Área ao ar livre para refeições em dias de sol",
      image: heroImage,
      category: "espacos",
      categoryLabel: "Espaços"
    },
    {
      id: 7,
      name: "Eventos Privados",
      description: "Espaço ideal para celebrações e eventos especiais",
      image: portugueseDishes,
      category: "eventos",
      categoryLabel: "Eventos"
    },
    {
      id: 8,
      name: "Arroz de Polvo",
      description: "Arroz cremoso com polvo tenro e coentros",
      image: portugueseDishes,
      category: "pratos",
      categoryLabel: "Pratos"
    },
    {
      id: 9,
      name: "Bar Tradicional",
      description: "Bar com ambiente rústico e bebidas regionais",
      image: seafoodPlatter,
      category: "espacos",
      categoryLabel: "Espaços"
    }
  ];

  const categories = [
    { id: "todos", label: "Todos" },
    { id: "pratos", label: "Pratos" },
    { id: "espacos", label: "Espaços" },
    { id: "eventos", label: "Eventos" }
  ];

  const filteredItems = activeFilter === "todos" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-earth mb-4">
            Galeria
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra os nossos pratos, espaços e momentos especiais
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              variant={activeFilter === category.id ? "default" : "outline"}
              className={`transition-all duration-300 ${
                activeFilter === category.id 
                  ? "bg-warmth text-earth hover:bg-warmth/90" 
                  : "border-earth text-earth hover:bg-earth hover:text-white"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden bg-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay no hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-warmth text-earth px-3 py-1 rounded-full text-sm font-medium">
                    {item.categoryLabel}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-earth mb-2">
                  {item.name}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;