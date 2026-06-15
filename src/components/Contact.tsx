import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const MAPS_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined;
const MAPS_QUERY = "Taberna Saloia,Av. Descobertas n° 41 Loja esquerda, 2670-384 Loures";
const LAT = 38.8385829;
const LON = -9.1612347;
// OpenStreetMap embed needs no API key and is always frameable.
const OSM_BBOX = `${LON - 0.004},${LAT - 0.003},${LON + 0.004},${LAT + 0.003}`;
const OSM_SRC = `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(OSM_BBOX)}&layer=mapnik&marker=${LAT},${LON}`;
const DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`;

const Contact = () => {
  return (
    <section id="contactos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-earth mb-4">
            Contactos & Localização
          </h1>
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
                  <Phone className="w-6 h-6 mr-2" aria-hidden="true" />
                  Telefone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+351219831176" className="text-foreground hover:text-earth transition-colors text-lg font-medium">
                  +351 21 983 11 76
                </a>
                <p className="text-muted-foreground text-sm mt-1">
                  Para reservas e informações
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-earth flex items-center">
                  <Mail className="w-6 h-6 mr-2" aria-hidden="true" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:info@tabernasaloia.pt" className="text-foreground hover:text-earth transition-colors">
                  info@tabernasaloia.pt
                </a>
                <p className="text-muted-foreground text-sm mt-1">
                  Para reservas e eventos
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-earth flex items-center">
                  <Clock className="w-6 h-6 mr-2" aria-hidden="true" />
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
                className="umai-reservation-button bg-earth text-earth-foreground hover:bg-earth/90 px-8 py-3"
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
                  <MapPin className="w-6 h-6 mr-2" aria-hidden="true" />
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

            {/* Map: OpenStreetMap embed (no API key, always renders). If a
                referrer-restricted Google Maps key is provided, the official
                Embed API is used instead. A directions link is shown either way. */}
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={
                  MAPS_KEY
                    ? `https://www.google.com/maps/embed/v1/place?key=${MAPS_KEY}&q=${encodeURIComponent(MAPS_QUERY)}`
                    : OSM_SRC
                }
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
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-earth font-medium hover:underline"
            >
              <MapPin className="w-4 h-4" aria-hidden="true" />
              Como chegar (Google Maps)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
