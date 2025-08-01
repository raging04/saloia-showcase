import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-earth text-earth-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Restaurant Info */}
          <div>
            <div className="mb-4">
              <img 
                src="/Logo_TabernaSaloia.svg" 
                alt="Taberna Saloia" 
                className="h-16 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-earth-foreground/80 mb-4">
              Tradição e sabor autêntico da culinária portuguesa num ambiente familiar e acolhedor.
            </p>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto Rápido</h4>
            <div className="space-y-2 text-earth-foreground/80">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+351 262 123 456</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>geral@tabernasaloia.pt</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Caldas da Rainha</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Horário</h4>
            <div className="space-y-1 text-earth-foreground/80 text-sm">
              <p>Seg-Qui: 12:00-15:00 | 19:00-23:00</p>
              <p>Sex-Sáb: 12:00-15:00 | 19:00-24:00</p>
              <p>Domingo: 12:00-16:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-earth-foreground/20 mt-8 pt-8 text-center text-earth-foreground/60">
          <p>&copy; 2024 Taberna Saloia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;