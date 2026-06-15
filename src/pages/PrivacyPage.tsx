import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSeo } from "@/hooks/use-seo";

const PrivacyPage = () => {
  useSeo({
    title: "Política de Privacidade - Taberna Saloia",
    description:
      "Política de privacidade e utilização de cookies da Taberna Saloia, restaurante tradicional em Loures.",
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main id="main" className="pt-24">
        <section className="py-16 bg-background">
          <div className="container mx-auto max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-earth mb-8">
              Política de Privacidade
            </h1>

            <div className="prose prose-stone max-w-none space-y-6 text-muted-foreground">
              <p>
                A Taberna Saloia respeita a sua privacidade. Esta página explica que dados
                recolhemos e como são utilizados, em conformidade com o Regulamento Geral sobre a
                Proteção de Dados (RGPD).
              </p>

              <div>
                <h2 className="text-2xl font-semibold text-earth mb-2">Cookies e análise</h2>
                <p>
                  Utilizamos ferramentas de análise (Google Analytics / Google Tag Manager) e de
                  marketing (Meta Pixel) para compreender como o site é utilizado. Estas
                  ferramentas só são ativadas após o seu consentimento explícito, dado através do
                  banner de cookies. Pode recusar os cookies não essenciais sem perder acesso a
                  qualquer conteúdo do site.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-earth mb-2">Reservas</h2>
                <p>
                  As reservas são processadas através de um fornecedor externo (Umai). Os dados que
                  fornecer para efetuar uma reserva são tratados de acordo com a política desse
                  fornecedor e utilizados exclusivamente para gerir a sua reserva.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-earth mb-2">Os seus direitos</h2>
                <p>
                  Pode solicitar o acesso, a correção ou a eliminação dos seus dados pessoais, bem
                  como retirar o consentimento a qualquer momento, contactando-nos por telefone ou
                  email.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-earth mb-2">Contacto</h2>
                <p>
                  Telefone:{" "}
                  <a href="tel:+351219831176" className="text-earth underline underline-offset-2">
                    +351 21 983 11 76
                  </a>
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:info@tabernasaloia.pt"
                    className="text-earth underline underline-offset-2"
                  >
                    info@tabernasaloia.pt
                  </a>
                </p>
              </div>

              <p className="text-sm italic">
                Este texto é um modelo informativo e deve ser revisto por um profissional jurídico
                antes da publicação definitiva.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
