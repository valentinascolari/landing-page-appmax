import React from "react";

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
  {
    title: "Ajuda",
    links: [
      "Central de ajuda",
      "Política de privacidade",
      "Termos de uso",
      "Equidade Salarial",
    ],
  },
  {
    title: "Blog",
    links: ["Acesse nosso blog"],
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col items-start gap-2.5 px-[233px] py-[21px] w-full bg-white">
      <div className="flex flex-col items-start gap-[62px] px-0 py-6 w-full">
        <div className="flex items-start justify-between gap-[94px] w-full">
          {footerColumns.map((column, index) => (
            <nav
              key={index}
              className="flex flex-col items-start gap-[9px] px-0 py-px"
            >
              <h3 className="flex items-center justify-center h-6 [font-family:'Inter',Helvetica] font-bold text-[#233046] text-xl tracking-[0] leading-[26px] whitespace-nowrap">
                {column.title}
              </h3>
              {column.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href="#"
                  className="flex items-center justify-center h-5 [font-family:'Inter',Helvetica] font-normal text-[#848484] text-base tracking-[0] leading-[21.0px] whitespace-nowrap hover:text-[#233046] transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          ))}
          <div className="w-[147px] h-[58px] bg-[url(/pci-dss-compliant.png)] bg-cover bg-[50%_50%]" />
        </div>

        <div className="flex flex-col items-center gap-[11px] w-full">
          <img className="w-[150px]" alt="Logo APPMAX" src="/logo-appmax.svg" />

          <img className="" alt="Social MEDIAS" src="/social-medias.svg" />

          <div className="flex flex-col items-start gap-[9px] w-full">
            <p className="flex items-center justify-center w-full h-[33px] [font-family:'Inter',Helvetica] font-normal text-[#233046] text-xs text-center tracking-[0] leading-4">
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
    </footer>
  );
};
