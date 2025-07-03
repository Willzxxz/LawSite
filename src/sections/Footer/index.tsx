import Link from "next/link";
import SocialLinks from "../../components/general/SocialLinks";
import Logo from "../Navbar/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#011223] to-[#013849] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4 block">
              <Logo />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Oferecemos soluções jurídicas inovadoras com tecnologia moderna e
              experiência consolidada. Junte-se a nós na jornada para defender
              seus direitos com excelência.
            </p>
            <SocialLinks />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#EBCB90]">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="/areas-atuacao"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Áreas de Atuação
                </Link>
              </li>
              <li>
                <Link
                  href="/equipe"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Equipe
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#EBCB90]">
              Suporte Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/consulta"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Agendar Consulta
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-privacidade"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/termos-uso"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link
                  href="/perguntas-frequentes"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link
                  href="/oab"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Registro OAB
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 Cargnin Advocacia. Todos os direitos reservados. OAB/SC 12345
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/politica-privacidade"
              className="text-gray-300 hover:text-white text-sm transition-colors"
            >
              Privacidade
            </Link>
            <Link
              href="/termos-uso"
              className="text-gray-300 hover:text-white text-sm transition-colors"
            >
              Termos
            </Link>
            <Link
              href="/cookies"
              className="text-gray-300 hover:text-white text-sm transition-colors"
            >
              Cookies
            </Link>
            <Link
              href="/lgpd"
              className="text-gray-300 hover:text-white text-sm transition-colors"
            >
              LGPD
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
