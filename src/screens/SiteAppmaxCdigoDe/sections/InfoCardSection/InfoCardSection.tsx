import { CheckCircle2Icon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const featureCards = [
  {
    icon: "/svg-1.png",
    title: "Canal Verificado",
    description: "Selo verde oficial",
  },
  {
    icon: "/svg-2.png",
    title: "Máxima Confiança",
    description: "Marca Appmax",
  },
];

const metricCards = [
  {
    value: "-85%",
    label: "Tickets de suporte",
  },
  {
    value: "+92%",
    label: "Satisfação NPS",
  },
];

export const InfoCardSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[linear-gradient(171deg,rgba(46,34,94,1)_0%,rgba(46,34,94,1)_50%,rgba(21,16,46,1)_100%)] py-32 px-4">
      <div className="container mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-7">
            <Badge className="inline-flex items-center gap-2 px-4 py-2 w-fit bg-[#ffffff1a] rounded-full backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] border-0 hover:bg-[#ffffff1a]">
              <img className="w-5 h-5" alt="Svg" src="/svg.png" />
              <span className="[font-family:'DM_Sans',Helvetica] font-semibold text-white text-sm tracking-[0.35px] leading-5">
                DIFERENCIAL APPMAX
              </span>
            </Badge>

            <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-5xl tracking-[0] leading-[48px]">
              A credibilidade da
              <br />
              Appmax validando a<br />
              sua entrega.
            </h2>

            <div className="[font-family:'DM_Sans',Helvetica] font-normal text-[#ece3fc] text-xl tracking-[0] leading-7">
              <span className="[font-family:'DM_Sans',Helvetica] font-normal text-[#ece3fc] text-xl tracking-[0] leading-7">
                Não é apenas uma notificação. É uma mensagem
                <br />
                vinda de um{" "}
              </span>
              <span className="font-bold">
                canal oficial e verificado da Appmax
                <br />
              </span>
              <span className="[font-family:'DM_Sans',Helvetica] font-normal text-[#ece3fc] text-xl tracking-[0] leading-7">
                no WhatsApp. Isso transmite profissionalismo e<br />
                aumenta drasticamente a confiança do seu cliente.
              </span>
            </div>

            <div className="flex gap-4">
              {featureCards.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-[#ffffff1a] border-0 rounded-2xl backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)]"
                >
                  <CardContent className="p-4 flex items-center gap-4">
                    <img
                      className="w-8 h-8 flex-shrink-0"
                      alt="Feature icon"
                      src={feature.icon}
                    />
                    <div className="flex flex-col gap-0">
                      <div className="[font-family:'DM_Sans',Helvetica] font-semibold text-white text-base tracking-[0] leading-6">
                        {feature.title}
                      </div>
                      <div className="[font-family:'DM_Sans',Helvetica] font-normal text-[#ddc3fd] text-sm tracking-[0] leading-5">
                        {feature.description}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-[488px] rounded-3xl overflow-hidden shadow-[0px_25px_50px_-12px_#00000040] bg-[linear-gradient(134deg,rgba(171,106,251,1)_0%,rgba(117,76,200,1)_100%)] border-0">
              <CardContent className="p-12 flex flex-col gap-8">
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <img
                      className="absolute top-0 left-0 w-[120px] h-[120px] -translate-x-5 -translate-y-5"
                      alt="Circulo VERDE"
                      src="/circulo-verde.png"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-2xl tracking-[0] leading-8">
                        Appmax
                      </span>
                      <CheckCircle2Icon className="w-4 h-4 text-white" />
                      <span className="[font-family:'DM_Sans',Helvetica] font-normal text-[#ece3fc] text-base tracking-[0] leading-6">
                        Verificado
                      </span>
                    </div>
                  </div>
                </div>

                <Card className="bg-[#ffffff1a] border-0 rounded-2xl backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)]">
                  <CardContent className="p-6">
                    <p className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-lg tracking-[0] leading-[29.2px] mb-4">
                      "Desde que ativamos o Rastreio
                      <br />
                      Automático, as reclamações de 'onde
                      <br />
                      está meu pedido' caíram 85%."
                    </p>
                    <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#ddc3fd] text-sm tracking-[0] leading-5">
                      — Loja de eletrônicos, 10k pedidos/mês
                    </p>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-2 gap-4">
                  {metricCards.map((metric, index) => (
                    <Card
                      key={index}
                      className="bg-[#ffffff1a] border-0 rounded-xl backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)]"
                    >
                      <CardContent className="p-4 flex flex-col items-center gap-1">
                        <div className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-3xl text-center tracking-[0] leading-9">
                          {metric.value}
                        </div>
                        <div className="[font-family:'DM_Sans',Helvetica] font-normal text-[#ddc3fd] text-sm text-center tracking-[0] leading-5">
                          {metric.label}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
