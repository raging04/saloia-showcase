import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { menuCategories, downloadMenus } from "@/data/menu";
import { downloadFile } from "@/lib/download";
import { useSeo } from "@/hooks/use-seo";

const MenuPage = () => {
  useSeo({
    title: "Ementa - Taberna Saloia, Loures",
    description:
      "Veja a ementa da Taberna Saloia: petiscos, peixe, carne e sugestões vegetarianas. Cozinha tradicional portuguesa no Infantado, Loures.",
    canonical: "https://tabernasaloia.pt/ementa",
  });

  return (
    <div className="min-h-screen">
      <SkipLink />
      <Header />

      <main id="main">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 pt-12">
              <h1 className="text-4xl md:text-5xl font-bold text-earth mb-4">
                Ementa
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Descubra os sabores autênticos da nossa cozinha tradicional portuguesa
              </p>
            </div>

            {/* Menu Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {menuCategories.map((category) => (
                <Card key={category.title} className="bg-cream shadow-lg">
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
                            <span className="text-earth font-bold text-lg whitespace-nowrap ml-4">{item.price}</span>
                          </div>
                          {item.description && (
                            <p className="text-muted-foreground text-sm">{item.description}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Download Section */}
            <div className="bg-cream rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-earth text-center mb-8">
                Download dos Menus
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {downloadMenus.map((menu) => (
                  <Card key={menu.filename} className="text-center hover:shadow-lg transition-shadow bg-background">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-earth mb-2">
                        {menu.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {menu.description}
                      </p>
                      <Button
                        onClick={() => downloadFile(menu.filename)}
                        className="w-full bg-earth text-earth-foreground hover:bg-earth/90"
                      >
                        <Download className="w-4 h-4 mr-2" aria-hidden="true" />
                        Download PDF
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MenuPage;
