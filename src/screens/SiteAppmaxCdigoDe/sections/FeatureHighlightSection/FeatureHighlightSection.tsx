import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const featureSteps = [
  {
    icon: "/background-3.png",
    title: "Confirmação Imediata",
    description:
      "Assim que o pedido é aprovado, o cliente recebe automaticamente a confirmação da compra e o código de rastreio via WhatsApp.",
  },
  {
    icon: "/background-4.png",
    title: "Código de Rastreio Automático",
    description:
      "O sistema se conecta com a transportadora, puxa o código de rastreio e dispara para o cliente — sem intervenção manual.",
  },
  {
    icon: "/background-5.png",
    title: "Atualizações de Status Proativas",
    description:
      "A cada mudança importante no status da entrega (em trânsito, saiu para entrega, entregue), notificamos o cliente. Zero ansiedade, máxima confiança.",
  },
];

export const FeatureHighlightSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(248,245,255,1)_100%)] py-16 md:py-32">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
      <div className="flex items-center gap-8 md:gap-12 w-full flex-col">
        <div className="flex flex-col items-center gap-2.5 w-full">
          <div className="w-full max-w-3xl">
            <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#2e225e] text-3xl md:text-4xl lg:text-5xl text-center tracking-[0] leading-tight mb-4 md:mb-6">
              Comunicação automática em 3<br />
              etapas-chave.
            </h2>

            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#4c347f] text-lg md:text-xl text-center tracking-[0] leading-7">
              <span className="[font-family:'DM_Sans',Helvetica] font-normal text-[#4c347f] text-xl tracking-[0] leading-7">
                O sistema funciona de forma totalmente automatizada, cuidando da
                jornada pós- compra do seu cliente.{" "}
              </span>
              <span className="font-bold">Simples, eficiente e escalável.</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 md:gap-8 w-full">
          {featureSteps.map((step, index) => (
            <React.Fragment key={index}>
              <Card className="w-full max-w-4xl bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-solid shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a]">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                    <img
                      className="w-16 h-16 flex-shrink-0"
                      alt={step.title}
                      src={step.icon}
                    />
                    <div className="flex flex-col gap-3 flex-1">
                      <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#2e225e] text-xl md:text-2xl tracking-[0] leading-8">
                        {step.title}
                      </h3>
                      <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#4c347f] text-base md:text-lg tracking-[0] leading-[29.2px]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {index < featureSteps.length - 1 && (
                <img className="flex-shrink-0" alt="Seta" src="/seta-1.svg" />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2.5 w-full">
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#4c347f] text-base md:text-lg text-center tracking-[0] leading-7">
            Integração simples. Resultados imediatos.
          </p>
        </div>

        <Badge className="flex items-center gap-2 px-6 py-3 bg-[#ab6afb1a] rounded-full hover:bg-[#ab6afb1a] h-auto">
          <img className="w-5 h-5" alt="Svg" src="/svg-3.png" />
          <span className="[font-family:'DM_Sans',Helvetica] font-semibold text-[#2e225e] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            Ative em menos de 24 horas
          </span>
        </Badge>
      </div>
      </div>
    </section>
  );
};
