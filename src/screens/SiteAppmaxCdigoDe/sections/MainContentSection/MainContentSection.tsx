import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

const features = [
  {
    icon: "/overlay-overlayblur-1.svg",
    title: "Ativação em 24h",
    description: "Setup rápido e simples",
  },
  {
    icon: "/overlay-overlayblur-2.svg",
    title: "Sem contrato de fidelidade",
    description: "Cancele quando quiser",
  },
  {
    icon: "/overlay-overlayblur.svg",
    title: "Suporte especializado",
    description: "Time Appmax com você",
  },
];

export const MainContentSection = (): JSX.Element => {
  const scrollToPlans = () => {
    const element = document.getElementById("planos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-[linear-gradient(167deg,rgba(46,34,94,1)_0%,rgba(46,34,94,1)_50%,rgba(21,16,46,1)_100%)] py-16 md:py-24 lg:py-32">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-8 md:gap-12 w-full">
          <Badge className="inline-flex items-center gap-2 px-6 py-3 bg-[#ffffff1a] rounded-full backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] border-0 hover:bg-[#ffffff33] transition-colors duration-300 cursor-default">
            <img className="w-5 h-5" alt="Svg" src="/svg-4.png" />
            <span className="[font-family:'DM_Sans',Helvetica] font-semibold text-white text-sm tracking-[0.35px] leading-5 whitespace-nowrap">
              TRANSFORME SEU PÓS-VENDA HOJE
            </span>
          </Badge>

          <h1 className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-3xl md:text-5xl lg:text-6xl text-center tracking-[0] leading-tight">
            Feito para quem foca em
            <br />
            performance.
          </h1>

          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#ece3fc] text-lg md:text-xl lg:text-2xl text-center tracking-[0] leading-8 max-w-4xl px-4">
            Rastreio Automático não é uma feature. É uma vantagem competitiva que
            libera recursos e melhora seus números onde importa.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full max-w-4xl">
            <Button
              onClick={scrollToPlans}
              className="h-auto w-full sm:flex-1 rounded-2xl shadow-[0px_25px_50px_-12px_#00000040] bg-[linear-gradient(134deg,rgba(171,106,251,1)_0%,rgba(117,76,200,1)_100%)] hover:bg-[linear-gradient(134deg,rgba(171,106,251,0.9)_0%,rgba(117,76,200,0.9)_100%)] px-4 md:px-6 py-4 hover:scale-105 transition-transform duration-300"
            >
              <span className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-base md:text-lg lg:text-xl tracking-[0] leading-7">
                QUERO AUTOMATIZAR MEU RASTREIO
              </span>
              <img
                className="w-[22px] h-[22px] ml-3"
                alt="Svg"
                src="/svg-5.svg"
              />
            </Button>

            <Button className="h-auto w-full sm:w-auto bg-[#f8f5ff] hover:bg-[#f8f5ff]/90 rounded-2xl px-6 md:px-12 py-4 hover:scale-105 transition-transform duration-300">
              <span className="[font-family:'DM_Sans',Helvetica] font-bold text-[#4c347f] text-base md:text-lg lg:text-xl tracking-[0] leading-7">
                FALAR COM ESPECIALISTA
              </span>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-4xl">
            {features.map((feature, index) => (
              <React.Fragment key={index}>
                {/* AJUSTE MOBILE: 
                  w-full max-w-[300px] mx-auto -> Garante que o bloco tenha largura fixa e fique centralizado no mobile.
                  sm:w-auto sm:max-w-none sm:mx-0 -> Reseta para o padrão flexível no desktop.
                  sm:justify-start -> Mantém alinhamento à esquerda no desktop.
                */}
                <div className="flex items-center gap-4 w-full max-w-[300px] mx-auto sm:w-auto sm:max-w-none sm:mx-0 sm:justify-start">
                  <img
                    className="w-12 h-12 flex-shrink-0"
                    alt="Feature icon"
                    src={feature.icon}
                  />
                  <div className="flex flex-col gap-0.5">
                    <div className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                      {feature.title}
                    </div>
                    <div className="[font-family:'DM_Sans',Helvetica] font-normal text-[#ddc3fd] text-sm tracking-[0] leading-5 whitespace-nowrap">
                      {feature.description}
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};