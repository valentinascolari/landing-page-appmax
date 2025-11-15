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
    <section className="flex flex-col items-start gap-2.5 px-[253px] py-32 bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(248,245,255,1)_100%)] w-full">
      <div className="flex items-center gap-[51px] px-[188px] py-0 w-full flex-col">
        <div className="inline-flex flex-col items-start gap-2.5">
          <div className="w-[767px]">
            <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#2e225e] text-5xl text-center tracking-[0] leading-[48px] mb-6">
              Comunicação automática em 3<br />
              etapas-chave.
            </h2>

            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#4c347f] text-xl text-center tracking-[0] leading-7">
              <span className="[font-family:'DM_Sans',Helvetica] font-normal text-[#4c347f] text-xl tracking-[0] leading-7">
                O sistema funciona de forma totalmente automatizada, cuidando da
                jornada pós- compra do seu cliente.{" "}
              </span>
              <span className="font-bold">Simples, eficiente e escalável.</span>
            </p>
          </div>
        </div>

        <div className="inline-flex flex-col items-center gap-8 px-[87px] py-0">
          {featureSteps.map((step, index) => (
            <React.Fragment key={index}>
              <Card className="w-[848.34px] bg-white rounded-3xl overflow-hidden border border-solid shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a]">
                <CardContent className="p-[33px]">
                  <div className="flex items-start gap-6">
                    <img
                      className="w-16 h-16 flex-shrink-0"
                      alt={step.title}
                      src={step.icon}
                    />
                    <div className="flex flex-col gap-3 flex-1">
                      <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#2e225e] text-2xl tracking-[0] leading-8">
                        {step.title}
                      </h3>
                      <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#4c347f] text-lg tracking-[0] leading-[29.2px]">
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

        <div className="inline-flex items-center justify-center gap-2.5">
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#4c347f] text-lg text-center tracking-[0] leading-7 whitespace-nowrap">
            Integração simples. Resultados imediatos.
          </p>
        </div>

        <Badge className="inline-flex items-center gap-2 px-6 py-3 bg-[#ab6afb1a] rounded-full hover:bg-[#ab6afb1a] h-auto">
          <img className="w-5 h-5" alt="Svg" src="/svg-3.png" />
          <span className="[font-family:'DM_Sans',Helvetica] font-semibold text-[#2e225e] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            Ative em menos de 24 horas
          </span>
        </Badge>
      </div>
    </section>
  );
};
