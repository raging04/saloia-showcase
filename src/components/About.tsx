const About = () => {
  return (
    <section id="sobre" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-earth mb-8">
            Sobre a Taberna Saloia
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A Taberna Saloia é um verdadeiro tesouro da gastronomia portuguesa, 
                onde as tradições culinárias se encontram com a hospitalidade genuína 
                que caracteriza o nosso povo.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Desde a nossa abertura, temos-nos dedicado a preservar e partilhar 
                os sabores autênticos da cozinha tradicional portuguesa, utilizando 
                receitas transmitidas de geração em geração e ingredientes frescos 
                cuidadosamente selecionados.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cada prato conta uma história, cada refeição é uma celebração da 
                nossa rica herança gastronómica. Venha descobrir os verdadeiros 
                sabores de Portugal na Taberna Saloia.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-earth mb-6">Os Nossos Valores</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-earth rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-earth">Tradição</h4>
                    <p className="text-muted-foreground text-sm">Receitas autênticas transmitidas de geração em geração</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-earth rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-earth">Qualidade</h4>
                    <p className="text-muted-foreground text-sm">Ingredientes frescos e cuidadosamente selecionados</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-earth rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-earth">Hospitalidade</h4>
                    <p className="text-muted-foreground text-sm">Acolhimento caloroso e serviço de excelência</p>
                  </div>
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