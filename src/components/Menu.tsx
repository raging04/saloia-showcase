import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Menu = () => {
  const menuCategories = [
    {
      title: "Entradas",
      items: [
        { name: "Azeitonas marinadas", price: "4,50€" },
        { name: "Queijo da Serra com doce", price: "8,50€" },
        { name: "Chouriço assado", price: "7,00€" },
        { name: "Alheira grelhada", price: "6,50€" }
      ]
    },
    {
      title: "Sopas",
      items: [
        { name: "Canja de galinha", price: "5,50€" },
        { name: "Sopa da pedra", price: "6,00€" },
        { name: "Gaspacho", price: "5,00€" }
      ]
    },
    {
      title: "Pratos Principais",
      items: [
        { name: "Bacalhau à Brás", price: "16,50€" },
        { name: "Leitão à Bairrada", price: "18,00€" },
        { name: "Caldeirada de peixe", price: "19,50€" },
        { name: "Cozido à portuguesa", price: "17,00€" },
        { name: "Arroz de polvo", price: "15,50€" },
        { name: "Bifana no prato", price: "12,00€" }
      ]
    },
    {
      title: "Sobremesas",
      items: [
        { name: "Pastéis de nata", price: "3,50€" },
        { name: "Pudim flan", price: "4,00€" },
        { name: "Arroz doce", price: "4,50€" },
        { name: "Leite creme", price: "4,00€" }
      ]
    }
  ];

  const downloadMenus = [
    {
      title: "Menu Normal",
      description: "Carta completa com todos os pratos disponíveis",
      filename: "menu-normal.pdf"
    },
    {
      title: "Menu de Grupo",
      description: "Opções especiais para grupos e eventos",
      filename: "menu-grupo.pdf"
    },
    {
      title: "Carta de Vinhos",
      description: "Seleção especial de vinhos portugueses",
      filename: "carta-vinhos.pdf"
    },
    {
      title: "Carta de Sobremesas",
      description: "Doces tradicionais e sobremesas da casa",
      filename: "carta-sobremesas.pdf"
    }
  ];

  const handleDownload = (filename: string) => {
    // Simulated download - in a real app, this would download the actual PDF
    console.log(`Downloading ${filename}`);
  };

  return (
    <section id="ementa" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-earth mb-4">
            Ementa
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra os sabores autênticos da nossa cozinha tradicional portuguesa
          </p>
        </div>

        {/* Menu Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {menuCategories.map((category, index) => (
            <Card key={index} className="bg-background shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-earth text-center">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-center border-b border-border pb-2">
                      <span className="text-foreground font-medium">{item.name}</span>
                      <span className="text-earth font-semibold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Download Section */}
        <div className="bg-background rounded-lg p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-earth text-center mb-8">
            Download dos Menus
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {downloadMenus.map((menu, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-earth mb-2">
                    {menu.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {menu.description}
                  </p>
                  <Button
                    onClick={() => handleDownload(menu.filename)}
                    className="w-full bg-earth text-earth-foreground hover:bg-earth/90"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;