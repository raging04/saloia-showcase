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
                  <MapPin className="w-6 h-6 mr-2" />
                  Localização
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  Avenida das Descobertas 41 - Loja Esquerda<br />
                  Infantado - Loures<br />
                  Portugal
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  No coração do Infantado, em Loures
                </p>
              </CardContent>
            </Card>

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
                    <span>Sem jantar</span>
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

          {/* Map */}
          <div className="bg-card rounded-lg overflow-hidden shadow-lg">
            <div className="h-96 bg-muted flex items-center justify-center">
              <div className="text-center p-6">
                <MapPin className="w-12 h-12 text-earth mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-earth mb-2">
                  Localização
                </h3>
                <p className="text-muted-foreground mb-4">
                  Avenida das Descobertas 41 - Loja Esquerda<br />
                  Infantado - Loures
                </p>
                <Button
                  onClick={() => window.open('https://maps.google.com/?q=Avenida+das+Descobertas+41,+Infantado,+Loures,+Portugal', '_blank')}
                  className="bg-earth text-earth-foreground hover:bg-earth/90"
                >
                  Ver no Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;