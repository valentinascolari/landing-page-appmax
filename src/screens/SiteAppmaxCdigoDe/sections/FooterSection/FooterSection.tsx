import React from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const footerColumns = [
  {
    title: "Soluções",
    links: [
      "Pagamentos",
      "Recuperação de Vendas",
      "Checkout",
      "Link de Pagamento",
      "PaaS",
      "Seja um Reseller",
      "Rastreio Automático",
    ],
  },
  {
    title: "Empresa",
    links: ["Quem somos", "Por que Appmax", "Trabalhe conosco"],
  },
  {
    title: "Taxas",
    links: ["Nossas taxas"],
  },
  // REORDENADO: Blog movido para antes de Ajuda para casar com o layout de 2 colunas do mobile
  {
    title: "Blog",
    links: ["Acesse nosso blog"],
  },
  {
    title: "Ajuda",
    links: [
      "Central de ajuda",
      "Política de privacidade",
      "Termos de uso",
      "Equidade Salarial",
    ],
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-white py-8 md:py-12">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col items-start gap-8 md:gap-12 w-full">
          {/* Grid configurado para 2 colunas no mobile */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 w-full">
            {footerColumns.map((column, index) => (
              <nav key={index} className="flex flex-col items-start gap-2">
                <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#233046] text-lg md:text-xl tracking-[0] leading-[26px] mb-2">
                  {column.title}
                </h3>
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href="#"
                    className="[font-family:'Inter',Helvetica] font-normal text-[#848484] text-sm md:text-base tracking-[0] leading-[21.0px] hover:text-[#233046] transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            ))}
            
            {/* Logo PCI DSS: Removido 'hidden' para aparecer no mobile como o 6º item do grid (Canto inferior direito) */}
            <div className="w-[147px] h-[58px] bg-[url(/pci-dss-compliant.png)] bg-cover bg-[50%_50%]" />
          </div>

          <div className="flex flex-col items-center gap-4 w-full">
            <img className="w-[150px]" alt="Logo APPMAX" src="/logo-appmax.svg" />

            {/* Redes Sociais com Links */}
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/company/appmaxbrasil/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Linkedin className="w-6 h-6 text-[#233046]" />
              </a>
              <a
                href="https://www.facebook.com/appmaxbrasil/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Facebook className="w-6 h-6 text-[#233046]" />
              </a>
              <a
                href="https://www.instagram.com/appmaxbrasil/?hl=pt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Instagram className="w-6 h-6 text-[#233046]" />
              </a>
              <a
                href="https://www.youtube.com/c/Appmaxbrasil"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Youtube className="w-6 h-6 text-[#233046]" />
              </a>
            </div>

            <div className="flex flex-col items-center gap-2 w-full">
              <p className="[font-family:'Inter',Helvetica] font-normal text-[#233046] text-xs text-center tracking-[0] leading-5 max-w-4xl">
                A Appmax é uma empresa brasileira registrada no CNPJ nº
                27.000.511/0001-60 com sede na Travessa São José, nº 455, sala 74,
                Navegantes, na cidade de Porto Alegre/RS, CEP 90240-200. A
                atividade de subcredenciamento é dispensada de autorização do
                Banco Central do Brasil, conforme termos da Circular nº
                3.885/2018. Demais dispositivos aplicáveis, como o disposto nas
                Circulares nº 3.682/2013, 3.886/2018, 3.952/2019 e Resolução nº
                24/2020 são rigorosamente cumpridos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};