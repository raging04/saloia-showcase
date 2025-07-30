import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import portugueseDishes from "@/assets/portuguese-dishes.jpg";
import seafoodPlatter from "@/assets/seafood-platter.jpg";
import meatDishes from "@/assets/meat-dishes.jpg";

const FeaturedDishes = () => {
  const featuredDishes = [
    {
      id: 1,
      name: "Bacalhau à Brás",
      description: "O nosso prato mais tradicional",
      image: portugueseDishes,
      category: "Especialidade"
    },
    {
      id: 2,
      name: "Mariscada da Casa",
      description: "Fresco do mar todos os dias",
      image: seafoodPlatter,
      category: "Marisco"
    },
    {
      id: 3,
      name: "Leitão à Bairrada",
      description: "Assado no forno a lenha",
      image: meatDishes,
      category: "Carnes"
    }
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth mb-4 drop-shadow-sm">
            Pratos em Destaque
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma amostra dos sabores que o esperam na Taberna Saloia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredDishes.map((dish) => (
            <Card 
              key={dish.id} 
              className="group overflow-hidden bg-background hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
            >
              <div className="relative overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay no hover */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                    <p className="text-sm opacity-90">{dish.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-warmth text-earth px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    {dish.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-earth mb-2">
                  {dish.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {dish.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/ementa">
            <Button className="bg-warmth text-earth hover:bg-warmth/90 px-8 py-3 text-lg shadow-lg transition-all duration-300 hover:scale-105">
              Ver Ementa Completa
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;