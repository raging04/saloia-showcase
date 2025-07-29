import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const MenuPage = () => {
  const dishCategories = [
    {
      title: "Entradas",
      items: [
        { name: "Azeitonas marinadas", description: "Azeitonas temperadas com ervas aromáticas", price: "4,50€" },
        { name: "Queijo da Serra com doce", description: "Queijo curado com doce de abóbora", price: "8,50€" },
        { name: "Chouriço assado", description: "Chouriço tradicional grelhado na brasa", price: "7,00€" },
        { name: "Alheira grelhada", description: "Alheira de Mirandela com broa de milho", price: "6,50€" }
      ]
    },
    {
      title: "Sopas",
      items: [
        { name: "Canja de galinha", description: "Sopa tradicional com frango e arroz", price: "5,50€" },
        { name: "Sopa da pedra", description: "Rica sopa com feijão e enchidos", price: "6,00€" },
        { name: "Gaspacho", description: "Sopa fria de tomate e vegetais", price: "5,00€" }
      ]
    },
    {
      title: "Pratos de Carne",
      items: [
        { name: "Leitão à Bairrada", description: "Leitão assado no forno a lenha com batatas coradas", price: "18,00€" },
        { name: "Cozido à portuguesa", description: "Tradicional cozido com carnes, enchidos e legumes", price: "17,00€" },
        { name: "Bifana no prato", description: "Bife de porco grelhado com batata frita e salada", price: "12,00€" },
        { name: "Costeletas de borrego", description: "Costeletas grelhadas com batata assada", price: "19,50€" }
      ]
    },
    {
      title: "Pratos de Peixe",
      items: [
        { name: "Bacalhau à Brás", description: "Tradicional prato de bacalhau com batata palha e ovos", price: "16,50€" },
        { name: "Caldeirada de peixe", description: "Rica caldeirada com peixe fresco do dia", price: "19,50€" },
        { name: "Linguado grelhado", description: "Linguado fresco grelhado com legumes", price: "22,00€" },
        { name: "Polvo à lagareiro", description: "Polvo assado com batatas e azeite", price: "18,50€" }
      ]
    },
    {
      title: "Mariscos",
      items: [
        { name: "Mariscada da Casa", description: "Seleção fresca do mar com lagosta, camarão e ameijoas", price: "35,00€" },
        { name: "Cataplana de marisco", description: "Cataplana tradicional com marisco fresco", price: "28,00€" },
        { name: "Arroz de marisco", description: "Arroz cremoso com marisco variado", price: "24,00€" },
        { name: "Ameijoas à Bulhão Pato", description: "Ameijoas com coentros e alho", price: "14,50€" }
      ]
    },
    {
      title: "Arrozes",
      items: [
        { name: "Arroz de polvo", description: "Arroz cremoso com polvo tenro e coentros", price: "15,50€" },
        { name: "Arroz de pato", description: "Arroz de pato no forno com chouriço", price: "16,00€" },
        { name: "Arroz de cabidela", description: "Arroz tradicional com frango e sangue", price: "14,00€" },
        { name: "Arroz de tamboril", description: "Arroz com tamboril e camarão", price: "18,00€" }
      ]
    },
    {
      title: "Sobremesas",
      items: [
        { name: "Pastéis de nata", description: "Tradicionais pastéis de Belém", price: "3,50€" },
        { name: "Pudim flan", description: "Pudim caseiro com caramelo", price: "4,00€" },
        { name: "Arroz doce", description: "Arroz doce polvilhado com canela", price: "4,50€" },
        { name: "Leite creme", description: "Leite creme queimado com açúcar", price: "4,00€" }
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
    console.log(`Downloading ${filename}`);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-earth mb-4">
              Ementa
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubra os sabores autênticos da nossa cozinha tradicional portuguesa
            </p>
          </div>

          {/* Menu Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {dishCategories.map((category, index) => (
              <Card key={index} className="bg-cream shadow-lg">
                <CardHeader className="bg-earth text-earth-foreground">
                  <CardTitle className="text-2xl text-center">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border-b border-border pb-4 last:border-b-0">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-semibold text-earth text-lg">{item.name}</h4>
                          <span className="text-earth font-bold text-lg">{item.price}</span>
                        </div>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Download Section */}
          <div className="bg-cream rounded-lg p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-earth text-center mb-8">
              Download dos Menus
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {downloadMenus.map((menu, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-background">
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

      <Footer />
    </div>
  );
};

export default MenuPage;