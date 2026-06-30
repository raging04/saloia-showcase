import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import facebookLogo from "@/assets/facebook-svgrepo-com.svg";
import instagramLogo from "@/assets/instagram-svgrepo-com.svg";
import linktreeLogo from "@/assets/Linktree Logo.svg";

const Footer = () => {
  return (
    <footer className="bg-earth text-earth-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Restaurant Info */}
          <div>
            <div className="mb-6">
              <img
                src="/Logo_TabernaSaloia.svg"
                alt="Taberna Saloia"
                className="h-16 w-auto filter brightness-0 invert"
              />
            </div>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/tabernasaloia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook (abre em nova janela)"
                className="text-white hover:opacity-80 transition-opacity"
              >
                <img src={facebookLogo} alt="" aria-hidden="true" className="w-8 h-8 filter brightness-0 invert" />
              </a>
              <a
                href="https://instagram.com/tabernasaloia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram (abre em nova janela)"
                className="text-white hover:opacity-80 transition-opacity"
              >
                <img src={instagramLogo} alt="" aria-hidden="true" className="w-8 h-8 filter brightness-0 invert" />
              </a>
              <a
                href="https://linktr.ee/tabernasaloia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linktree (abre em nova janela)"
                className="text-white hover:opacity-80 transition-opacity"
              >
                <img src={linktreeLogo} alt="" aria-hidden="true" className="w-8 h-8 filter brightness-0 invert" />
              </a>
            </div>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contactos</h4>
            <div className="space-y-2 text-earth-foreground/80">
              <a href="tel:+351219831176" className="flex items-center hover:text-white transition-colors">
                <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                <span>+351 21 983 11 76</span>
              </a>
              <a href="mailto:info@tabernasaloia.com" className="flex items-center hover:text-white transition-colors">
                <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
                <span>info@tabernasaloia.com</span>
              </a>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1" aria-hidden="true" />
                <div className="flex flex-col">
                  <span>Avenida das Descobertas 41 - Loja Esquerda</span>
                  <span>Infantado - Loures</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Horário</h4>
            <div className="space-y-1 text-earth-foreground/80 text-sm">
              <p>Seg-Sáb (Exceto quarta-feira ao jantar): 12:00-15:00 | 19:00-23:00</p>
              <p>Estamos encerrados aos domingos.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-earth-foreground/20 mt-8 pt-8 text-center text-earth-foreground/60">
          <p>
            &copy; 2026 A Taberna Saloia da Avenida. Todos os direitos reservados.{" "}
            <Link to="/privacidade" className="underline underline-offset-2 hover:text-white">
              Política de Privacidade
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
