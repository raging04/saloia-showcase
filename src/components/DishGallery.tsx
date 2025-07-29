import { Card, CardContent } from "@/components/ui/card";
import portugueseDishes from "@/assets/portuguese-dishes.jpg";
import seafoodPlatter from "@/assets/seafood-platter.jpg";
import meatDishes from "@/assets/meat-dishes.jpg";

const DishGallery = () => {
  const dishes = [
    {
      id: 1,
      name: "Bacalhau à Brás",
      description: "Tradicional prato de bacalhau com batata palha e ovos",
      image: portugueseDishes,
      category: "Tradicional"
    },
    {
      id: 2,
      name: "Mariscada da Casa",
      description: "Seleção fresca do mar com lagosta, camarão e ameijoas",
      image: seafoodPlatter,
      category: "Marisco"
    },
    {
      id: 3,
      name: "Leitão à Bairrada",
      description: "Leitão assado no forno a lenha com batatas coradas",
      image: meatDishes,
      category: "Carnes"
    },
    {
      id: 4,
      name: "Caldeirada de Peixe",
      description: "Rica caldeirada com peixe fresco do dia",
      image: seafoodPlatter,
      category: "Peixe"
    },
    {
      id: 5,
      name: "Cozido à Portuguesa",
      description: "Tradicional cozido com carnes, enchidos e legumes",
      image: meatDishes,
      category: "Tradicional"
    },
    {
      id: 6,
      name: "Arroz de Polvo",
      description: "Arroz cremoso com polvo tenro e coentros",
      image: portugueseDishes,
      category: "Arrozes"
    }
  ];

  return (
    <section id="pratos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-earth mb-4">
            Os Nossos Pratos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma seleção cuidada dos melhores sabores da culinária portuguesa,
            preparados com ingredientes frescos e receitas tradicionais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <Card 
              key={dish.id} 
              className="group overflow-hidden bg-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-warmth text-earth px-3 py-1 rounded-full text-sm font-medium">
                    {dish.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-earth mb-2">
                  {dish.name}
                </h3>
                <p className="text-muted-foreground">
                  {dish.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DishGallery;