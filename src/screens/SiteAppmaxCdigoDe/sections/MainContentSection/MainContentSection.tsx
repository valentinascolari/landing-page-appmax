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
  return (
    <section className="flex flex-col items-start gap-2.5 pt-[152px] pb-[182px] px-[504px] bg-[linear-gradient(167deg,rgba(46,34,94,1)_0%,rgba(46,34,94,1)_50%,rgba(21,16,46,1)_100%)] w-full">
      <div className="flex flex-col items-center gap-[62px] w-full">
        <Badge className="inline-flex items-center gap-2 px-6 py-3 bg-[#ffffff1a] rounded-full backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] border-0 hover:bg-[#ffffff1a]">
          <img className="w-5 h-5" alt="Svg" src="/svg-4.png" />
          <span className="[font-family:'DM_Sans',Helvetica] font-semibold text-white text-sm tracking-[0.35px] leading-5 whitespace-nowrap">
            TRANSFORME SEU PÓS-VENDA HOJE
          </span>
        </Badge>

        <h1 className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-6xl text-center tracking-[0] leading-[60px]">
          Feito para quem foca em
          <br />
          performance.
        </h1>

        <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#ece3fc] text-2xl text-center tracking-[0] leading-8 max-w-full">
          Rastreio Automático não é uma feature. É uma vantagem competitiva que
          libera recursos e melhora seus números onde importa.
        </p>

        <div className="flex items-center justify-between gap-4 w-full max-w-[835.89px]">
          <Button className="h-auto flex-1 max-w-[461.27px] rounded-2xl shadow-[0px_25px_50px_-12px_#00000040] bg-[linear-gradient(134deg,rgba(171,106,251,1)_0%,rgba(117,76,200,1)_100%)] hover:bg-[linear-gradient(134deg,rgba(171,106,251,0.9)_0%,rgba(117,76,200,0.9)_100%)] px-6 py-[19px]">
            <span className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-xl tracking-[0] leading-7 whitespace-nowrap">
              QUERO AUTOMATIZAR MEU RASTREIO
            </span>
            <img
              className="w-[22px] h-[22px] ml-3"
              alt="Svg"
              src="/svg-5.svg"
            />
          </Button>

          <Button className="h-auto bg-[#f8f5ff] hover:bg-[#f8f5ff]/90 rounded-2xl px-12 py-[19px]">
            <span className="[font-family:'DM_Sans',Helvetica] font-bold text-[#4c347f] text-xl tracking-[0] leading-7 whitespace-nowrap">
              FALAR COM ESPECIALISTA
            </span>
          </Button>
        </div>

        <div className="inline-flex items-center gap-8">
          {features.map((feature, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center gap-[15px]">
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
              {index < features.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="h-12 w-px bg-[#ffffff33]"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
