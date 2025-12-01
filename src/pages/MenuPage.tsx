import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const MenuPage = () => {
  const dishCategories = [
    {
      title: "Couvert",
      items: [
        { name: "Salpicão Porco Preto Misto", description: "", price: "5,50€" },
        { name: "Queijo de Ovelha Amanteigado", description: "", price: "6,00€" },
        { name: "Queijo de Ovelha", description: "", price: "5,00€" },
        { name: "Presunto", description: "", price: "6,00€" },
        { name: "Paté Caseiro", description: "", price: "3,90€" },
        { name: "Queijo Seco", description: "", price: "3,50€" },
        { name: "Requeijão c/ Doce de Abóbora", description: "", price: "6,50€" },
        { name: "Queijo Fresco", description: "", price: "1,50€" },
        { name: "Cesto de Pão", description: "", price: "1,20€" },
        { name: "Azeitonas", description: "", price: "1,00€" },
        { name: "Manteiga", description: "", price: "1,00€" }
      ]
    },
    {
      title: "Petiscos",
      items: [
        { name: "Amêijoa à Bulhão Pato", description: "", price: "13,00€" },
        { name: "Pica-Pau de Novilho", description: "", price: "13,00€" },
        { name: "Gambas à Guilho", description: "", price: "11,00€" },
        { name: "Cogumelos Frescos c/ Mel e Vinho do Porto", description: "", price: "5,50€" },
        { name: "Linguiça c/ Cogumelos", description: "", price: "5,00€" },
        { name: "Morcela com Bacon", description: "", price: "5,00€" },
        { name: "Ovos Mexidos c/ Farinheira", description: "", price: "5,00€" }
      ]
    },
    {
      title: "Peixe",
      items: [
        { name: "Cataplana de Peixe e Marisco (2px)", description: "A nossa seleção de peixes e marisco cozinhados lentamente na tradicional Cataplana", price: "38,00€" },
        { name: "Broa de Bacalhau (2px)", description: "Broa de Milho recheada com Bacalhau confitado em azeite e alho com Grelos e o miolo da Broa", price: "32,00€" },
        { name: "Bacalhau à Lagareiro", description: "Posta de Bacalhau Assada regada com Azeite quente e Alho acompanha Batata a Murro e Legumes", price: "17,50€" },
        { name: "Arroz de Tamboril c/ Gambas", description: "", price: "15,00€ (1Px) | 30,00€ (2Px)" },
        { name: "Garoupa Cozida ou Grelhada", description: "Posta de Garoupa acompanhada de Batata Cozida e Legumes", price: "16,00€" },
        { name: "Polvo à Lagareiro", description: "Acompanhado com Batata a Murro e Legumes", price: "17,50€" },
        { name: "Caril de Gambas", description: "", price: "15,00€" },
        { name: "Risotto de Gambas e Cogumelos Selvagens", description: "", price: "15,00€" },
        { name: "Salmão", description: "", price: "14,00€" }
      ]
    },
    {
      title: "Carne",
      items: [
        { name: "Tornedó do Lombo", description: "A carne mais nobre! Bife frito e mal passado. Com Molho de Mostarda", price: "18,00€" },
        { name: "Costeleta de Novilho", description: "", price: "18,00€" },
        { name: "Espetada de Vitela", description: "Com nacos de Vitela e Ananás, Recomenda-se Médio ou Mal Passada", price: "15,00€" },
        { name: "Bife à Portuguesa", description: "O Clássico! Bife da Vazia com molho tradicional, Presunto e Ovo Estrelado acompanhado de Batata Frita às rodelas", price: "14,50€" },
        { name: "Bife à Taberneiro", description: "Bife da Vazia frito com Molho de Natas e Ketchup e Ovo Estrelado. Acompanhado de Batata Frita", price: "14,50€" },
        { name: "Bife Grelhado", description: "Bife da Vazia Grelhado acompanhado de Batata Frita e Arroz", price: "14,00€" },
        { name: "Bife 3 Pimentas", description: "Bife da Vazia Frito com Molho de 3 Pimentas acompanhado de Batata Frita", price: "14,00€" },
        { name: "Bife Mostarda", description: "Bife da Vazia Frito com Molho de Mostarda acompanhado de Batata Frita", price: "14,00€" },
        { name: "Lombinhos Mel e Alecrim", description: "Lombinhos de Porco c/ Molho de Mel e Alecrim acompanhado de Batata Frita", price: "13,50€" },
        { name: "Lagartos de Porco Ibérico", description: "Tirinhas de Porco Ibérico Grelhadas c/ Batata Frita", price: "13,50€" },
        { name: "Francesinha", description: "", price: "13,50€" },
        { name: "Bitoque de Vitela", description: "Bife Frito, Ovo a Cavalo, Arroz e Batata Frita", price: "10,00€" },
        { name: "Bifinhos de Frango", description: "Grelhados ou Com Natas e Cogumelos", price: "9,50€/10,50€" }
      ]
    },
    {
      title: "Sugestões Vegetarianas",
      items: [
        { name: "Risotto", description: "", price: "12,50€" },
        { name: "Omelete de Legumes", description: "", price: "9,00€" }
      ]
    },
    {
      title: "Guarnições",
      items: [
        { name: "Dose de Legumes", description: "", price: "2,50€" },
        { name: "Salada Mista", description: "", price: "2,50€" },
        { name: "Dose de Arroz", description: "", price: "2,50€" },
        { name: "Dose de Batata Frita", description: "", price: "2,50€" },
        { name: "Sopa do Dia", description: "", price: "1,50€" },
        { name: "Ovo Estrelado", description: "", price: "1,00€" }
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
      filename: "_Carta de Vinhos 2024 Final.pdf"
    },
    {
      title: "Carta de Sobremesas",
      description: "Doces tradicionais e sobremesas da casa",
      filename: "Carta de Sobremesas.pdf"
    }
  ];

  const handleDownload = (filename: string) => {
    try {
      // Download real do PDF
      const link = document.createElement('a');
      link.href = `/${filename}`;
      link.download = filename;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Erro ao fazer download:', error);
      // Fallback: abrir em nova aba
      window.open(`/${filename}`, '_blank');
    }
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