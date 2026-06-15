import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";
import { useSeo } from "@/hooks/use-seo";

const LAST_UPDATED = "15 de junho de 2026";

const linkClass = "text-earth underline underline-offset-2 hover:text-earth/80";

const PrivacyPage = () => {
  useSeo({
    title: "Política de Privacidade - Taberna Saloia",
    description:
      "Política de privacidade e de cookies da Taberna Saloia, restaurante tradicional em Loures, em conformidade com o RGPD.",
    canonical: "https://tabernasaloia.pt/privacidade",
  });

  return (
    <div className="min-h-screen">
      <SkipLink />
      <Header />
      <main id="main" className="pt-24">
        <section className="py-16 bg-background">
          <div className="container mx-auto max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-earth mb-2">
              Política de Privacidade
            </h1>
            <p className="text-sm text-muted-foreground mb-10">
              Última atualização: {LAST_UPDATED}
            </p>

            <div className="space-y-10 text-muted-foreground leading-relaxed">
              <section className="space-y-3">
                <p>
                  A presente Política de Privacidade descreve como a{" "}
                  <span className="text-earth font-medium">Taberna Saloia</span> recolhe, utiliza e
                  protege os dados pessoais dos visitantes do site{" "}
                  <span className="text-earth font-medium">tabernasaloia.pt</span>, em conformidade
                  com o Regulamento (UE) 2016/679 (Regulamento Geral sobre a Proteção de Dados —
                  «RGPD») e com a legislação portuguesa aplicável em matéria de proteção de dados e
                  privacidade nas comunicações eletrónicas.
                </p>
                <p>
                  Ao utilizar este site, recomendamos a leitura atenta deste documento. A recolha de
                  dados não essenciais (análise e marketing) só ocorre após o seu consentimento
                  explícito.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-earth">1. Responsável pelo tratamento</h2>
                <p>O responsável pelo tratamento dos seus dados pessoais é:</p>
                <ul className="list-none space-y-1 pl-0">
                  <li>
                    <span className="text-earth font-medium">A Taberna Saloia da Avenida</span>
                  </li>
                  <li>Av. das Descobertas n.º 41, Loja Esquerda, 2670-384 Loures, Portugal</li>
                  <li>
                    Telefone:{" "}
                    <a href="tel:+351219831176" className={linkClass}>
                      +351 21 983 11 76
                    </a>
                  </li>
                  <li>
                    Email:{" "}
                    <a href="mailto:info@tabernasaloia.pt" className={linkClass}>
                      info@tabernasaloia.pt
                    </a>
                  </li>
                </ul>
                <p>
                  Para qualquer questão relacionada com a proteção dos seus dados pessoais, pode
                  contactar-nos através dos contactos acima indicados.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-earth">2. Dados que recolhemos</h2>
                <p>Consoante a forma como interage connosco, podemos tratar as seguintes categorias de dados:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <span className="text-earth font-medium">Dados de navegação e dispositivo</span>{" "}
                    — endereço IP, tipo de navegador e dispositivo, páginas visitadas, data e hora de
                    acesso e dados recolhidos por cookies e tecnologias semelhantes (apenas com o seu
                    consentimento, exceto os estritamente necessários).
                  </li>
                  <li>
                    <span className="text-earth font-medium">Dados de reserva</span> — quando efetua
                    uma reserva através do widget de reservas, são tratados os dados que fornecer
                    (por exemplo, nome, contacto telefónico, email, número de pessoas, data e hora e
                    eventuais observações).
                  </li>
                  <li>
                    <span className="text-earth font-medium">Dados de contacto</span> — se nos
                    contactar por telefone ou email, tratamos os dados que nos disponibilizar e o
                    conteúdo da comunicação.
                  </li>
                </ul>
                <p>
                  Não recolhemos intencionalmente dados de menores nem categorias especiais de dados
                  (dados sensíveis).
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-earth">
                  3. Finalidades e fundamentos jurídicos
                </h2>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <span className="text-earth font-medium">Gerir reservas e pedidos de contacto</span>{" "}
                    — execução de medidas pré-contratuais e do contrato, a seu pedido (artigo 6.º,
                    n.º 1, alínea b) do RGPD).
                  </li>
                  <li>
                    <span className="text-earth font-medium">Análise de utilização do site</span>{" "}
                    (estatísticas de tráfego e desempenho) — com base no seu consentimento (artigo
                    6.º, n.º 1, alínea a) do RGPD).
                  </li>
                  <li>
                    <span className="text-earth font-medium">Marketing e medição de campanhas</span>{" "}
                    (por exemplo, Meta Pixel) — com base no seu consentimento (artigo 6.º, n.º 1,
                    alínea a) do RGPD).
                  </li>
                  <li>
                    <span className="text-earth font-medium">Segurança e funcionamento do site</span>{" "}
                    — com base no interesse legítimo em assegurar a disponibilidade e a segurança do
                    serviço (artigo 6.º, n.º 1, alínea f) do RGPD).
                  </li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-earth">
                  4. Cookies e tecnologias de rastreio
                </h2>
                <p>Utilizamos três tipos de cookies e tecnologias semelhantes:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <span className="text-earth font-medium">Essenciais</span> — necessários ao
                    funcionamento do site e à memorização das suas preferências de cookies. Não
                    exigem consentimento.
                  </li>
                  <li>
                    <span className="text-earth font-medium">Análise</span> — Google Analytics e
                    Google Tag Manager, que nos ajudam a perceber como o site é utilizado.
                  </li>
                  <li>
                    <span className="text-earth font-medium">Marketing</span> — Meta Pixel
                    (Facebook/Instagram), utilizado para medir e otimizar campanhas.
                  </li>
                </ul>
                <p>
                  Os cookies de análise e de marketing só são ativados depois de os aceitar no banner
                  de consentimento. Pode <span className="text-earth font-medium">aceitar ou recusar</span>{" "}
                  os cookies não essenciais e alterar a sua escolha a qualquer momento, eliminando os
                  cookies do site no seu navegador ou ajustando as definições do mesmo. Recusar os
                  cookies não essenciais não afeta o acesso a qualquer conteúdo do site.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-earth">
                  5. Partilha de dados e subcontratantes
                </h2>
                <p>
                  Não vendemos os seus dados pessoais. Para prestar os nossos serviços, recorremos a
                  prestadores que atuam como subcontratantes ou responsáveis, designadamente:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <span className="text-earth font-medium">Google Ireland Ltd. / Google LLC</span>{" "}
                    — análise de tráfego (Google Analytics e Google Tag Manager).
                  </li>
                  <li>
                    <span className="text-earth font-medium">Meta Platforms Ireland Ltd.</span> —
                    medição de marketing (Meta Pixel).
                  </li>
                  <li>
                    <span className="text-earth font-medium">Umai</span> — gestão do sistema de
                    reservas online.
                  </li>
                  <li>
                    <span className="text-earth font-medium">Amazon Web Services (AWS)</span> —
                    alojamento do site.
                  </li>
                  <li>
                    <span className="text-earth font-medium">OpenStreetMap Foundation</span> —
                    apresentação do mapa de localização.
                  </li>
                </ul>
                <p>
                  Podemos ainda divulgar dados a autoridades públicas quando tal for exigido por lei.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-earth">
                  6. Transferências internacionais
                </h2>
                <p>
                  Alguns dos prestadores acima poderão tratar dados fora do Espaço Económico Europeu
                  (por exemplo, nos Estados Unidos). Nesses casos, as transferências são efetuadas ao
                  abrigo de mecanismos de salvaguarda previstos no RGPD, como as Cláusulas
                  Contratuais-Tipo da Comissão Europeia ou decisões de adequação aplicáveis.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-earth">7. Prazos de conservação</h2>
                <p>
                  Conservamos os dados apenas durante o período necessário às finalidades para que
                  foram recolhidos: os dados de reserva e de contacto são conservados pelo tempo
                  necessário ao seu tratamento e ao cumprimento de obrigações legais; os dados de
                  análise são conservados de acordo com os prazos definidos nas ferramentas
                  utilizadas. Findos esses prazos, os dados são eliminados ou anonimizados.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-earth">8. Segurança dos dados</h2>
                <p>
                  Adotamos medidas técnicas e organizativas adequadas para proteger os seus dados
                  contra acesso, alteração, divulgação ou destruição não autorizados, incluindo a
                  utilização de ligações encriptadas (HTTPS).
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-earth">9. Os seus direitos</h2>
                <p>Nos termos do RGPD, assistem-lhe os seguintes direitos:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Direito de acesso aos seus dados pessoais;</li>
                  <li>Direito de retificação de dados inexatos ou incompletos;</li>
                  <li>Direito ao apagamento («direito a ser esquecido»);</li>
                  <li>Direito à limitação do tratamento;</li>
                  <li>Direito de oposição ao tratamento;</li>
                  <li>Direito à portabilidade dos dados;</li>
                  <li>
                    Direito de retirar o consentimento a qualquer momento, sem comprometer a licitude
                    do tratamento efetuado com base no consentimento previamente dado.
                  </li>
                </ul>
                <p>
                  Para exercer estes direitos, contacte-nos através do email{" "}
                  <a href="mailto:info@tabernasaloia.pt" className={linkClass}>
                    info@tabernasaloia.pt
                  </a>{" "}
                  ou do telefone{" "}
                  <a href="tel:+351219831176" className={linkClass}>
                    +351 21 983 11 76
                  </a>
                  .
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-earth">10. Reclamações</h2>
                <p>
                  Sem prejuízo de qualquer outra via de recurso, tem o direito de apresentar
                  reclamação junto da autoridade de controlo competente, a Comissão Nacional de
                  Proteção de Dados (CNPD —{" "}
                  <a
                    href="https://www.cnpd.pt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    www.cnpd.pt
                  </a>
                  ).
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-earth">11. Ligações para outros sites</h2>
                <p>
                  Este site pode conter ligações para sites de terceiros (por exemplo, redes sociais
                  ou o sistema de reservas). Não somos responsáveis pelas práticas de privacidade
                  desses sites, pelo que recomendamos a leitura das respetivas políticas.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-earth">12. Alterações a esta política</h2>
                <p>
                  Podemos atualizar esta Política de Privacidade sempre que necessário. A versão em
                  vigor é a publicada nesta página, com a data de «Última atualização» indicada no
                  topo.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
