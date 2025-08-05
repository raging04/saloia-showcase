import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contactos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-earth mb-4">
            Contactos & Localização
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Venha visitar-nos no Infantado e descubra os sabores autênticos da nossa cozinha tradicional
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-card shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-earth flex items-center">
                  <Phone className="w-6 h-6 mr-2" />
                  Telefone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">+351 21 983 11 76</p>
                <p className="text-muted-foreground text-sm mt-1">
                  Para reservas e informações
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-earth flex items-center">
                  <Mail className="w-6 h-6 mr-2" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">info@tabernasaloia.pt</p>
                <p className="text-muted-foreground text-sm mt-1">
                  Para reservas e eventos
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-earth flex items-center">
                  <Clock className="w-6 h-6 mr-2" />
                  Horário de Funcionamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Segunda a Sábado:</span>
                    <span>12:00 - 15:00 | 19:00 - 23:00</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Quarta-feira:</span>
                    <span>Encerrado ao jantar</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Domingo e Feriados:</span>
                    <span>Encerrado</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button 
                size="lg"
                className="bg-earth text-earth-foreground hover:bg-earth/90 px-8 py-3"
                onClick={() => window.open('tel:+351219831176', '_self')}
              >
                Fazer Reserva
              </Button>
            </div>
          </div>

          {/* Map Column */}
          <div className="space-y-6">
            <Card className="bg-card shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-earth flex items-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  Localização
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  Av. Descobertas n° 41 Loja esquerda<br />
                  2670-384 Loures<br />
                  Portugal
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  No coração do Infantado, em Loures
                </p>
              </CardContent>
            </Card>

            {/* Map */}
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC6ow3CU3JLF93thhXYyXQ0KzvMWTGFp_0&q=Av.+Descobertas+n%C2%B0+41+Loja+esquerda,+2670-384+Loures,+Portugal"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Taberna Saloia"
                className="w-full h-96"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;