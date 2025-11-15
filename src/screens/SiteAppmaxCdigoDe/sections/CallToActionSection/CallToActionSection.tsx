import { ArrowRightIcon, CheckIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const pricingPlans = [
  {
    icon: "/background-6.png",
    title: "Essencial",
    description: "Ideal para operações em início de escala.",
    price: "R$ 297",
    period: "/mês",
    buttonVariant: "default" as const,
    buttonText: "CONTRATAR AGORA",
    features: [
      "Até 2.000 notificações/mês",
      "Rastreio automático via WhatsApp",
      "WhatsApp oficial Appmax",
      "Suporte por e-mail",
    ],
    isPopular: false,
    borderClass: "border-2",
  },
  {
    icon: "/background-7.png",
    title: "Performance",
    description: "Para negócios que buscam máxima eficiência.",
    price: "R$ 497",
    period: "/mês",
    buttonVariant: "purple" as const,
    buttonText: "CONTRATAR AGORA",
    features: [
      "Até 5.000 notificações/mês",
      "Rastreio automático via WhatsApp",
      "WhatsApp oficial Appmax",
      "Suporte prioritário (chat + e-mail)",
      "Personalização de mensagens",
      "Relatórios de engajamento",
    ],
    isPopular: true,
    borderClass: "border-4 border-[#ab6afb]",
  },
  {
    icon: "/background-8.png",
    title: "Pro",
    description: "Para operações de alto volume focadas em LTV.",
    price: "R$ 997",
    period: "/mês",
    buttonVariant: "default" as const,
    buttonText: "CONTRATAR AGORA",
    features: [
      "Até 15.000 notificações/mês",
      "Todas as etapas + atualizações extras",
      "WhatsApp oficial Appmax",
      "Analytics completo + BI",
      "Suporte VIP (24/7)",
      "Personalização total",
      "Gerente de conta dedicado",
      "Gerente de sucesso",
    ],
    isPopular: false,
    borderClass: "border-2",
  },
];

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-[78px] px-4 md:px-8 lg:px-[376px] py-[94px] bg-[linear-gradient(180deg,rgba(249,245,255,1)_0%,rgba(237,226,254,1)_100%)] w-full">
      <header className="flex flex-col w-full max-w-[731.9px] items-center gap-[17px]">
        <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#2e225e] text-5xl text-center tracking-[0] leading-[48px]">
          Planos flexíveis que escalam
          <br />
          com o seu negócio.
        </h2>

        <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#2e225e] text-xl text-center tracking-[0] leading-7">
          Escolha o plano ideal para o seu volume de vendas. Sem surpresas, sem
          custos
          <br />
          ocultos. Cancele quando quiser.
        </p>
      </header>

      <div className="flex flex-wrap items-end justify-center gap-8 w-full">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-7 w-full max-w-[362.67px]"
          >
            {plan.isPopular && (
              <Badge className="h-9 px-6 rounded-full shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a] bg-[linear-gradient(90deg,rgba(171,106,251,1)_0%,rgba(117,76,200,1)_100%)] border-0">
                <span className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-sm tracking-[0.35px] leading-5">
                  MAIS POPULAR
                </span>
              </Badge>
            )}

            <Card
              className={`w-full bg-white rounded-3xl ${plan.borderClass} ${
                plan.isPopular
                  ? "shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a,0px_0px_0px_4px_#ab6afb33]"
                  : "shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a]"
              } overflow-hidden`}
            >
              <CardContent className="p-[34px] flex flex-col gap-6">
                <img
                  className="w-16 h-16"
                  alt={`${plan.title} icon`}
                  src={plan.icon}
                />

                <div className="flex flex-col gap-2">
                  <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#2e225e] text-2xl leading-8">
                    {plan.title}
                  </h3>
                  <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#4c347f] text-sm tracking-[0] leading-[22.8px]">
                    {plan.description}
                  </p>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="[font-family:'DM_Sans',Helvetica] font-bold text-[#2e225e] text-5xl tracking-[0] leading-[48px]">
                    {plan.price}
                  </span>
                  <span className="[font-family:'DM_Sans',Helvetica] font-normal text-[#4c347f] text-base tracking-[0] leading-6">
                    {plan.period}
                  </span>
                </div>

                <Button
                  className={`w-full h-12 rounded-2xl ${
                    plan.buttonVariant === "purple"
                      ? "bg-[#ab6afb] hover:bg-[#9b5aeb] shadow-[0px_8px_10px_-6px_#0000001a,0px_20px_25px_-5px_#0000001a]"
                      : "bg-gray-900 hover:bg-gray-800"
                  }`}
                >
                  <span className="[font-family:'DM_Sans',Helvetica] font-semibold text-white text-lg text-center tracking-[0] leading-7">
                    {plan.buttonText}
                  </span>
                </Button>

                <div className="flex flex-col gap-5 pt-6 border-t border-border">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-[#4c347f] flex-shrink-0 mt-0.5" />
                      <span className="[font-family:'DM_Sans',Helvetica] font-normal text-[#4c347f] text-sm tracking-[0] leading-[22.8px]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <div className="w-full max-w-[1153px]">
        <Card className="rounded-3xl bg-[linear-gradient(169deg,rgba(171,131,226,1)_0%,rgba(76,52,127,1)_50%,rgba(9,2,39,1)_100%)] border-0">
          <CardContent className="p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col gap-4">
                <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-4xl leading-9">
                  Plano Max
                </h3>
                <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#dcc3fe] text-xl tracking-[0] leading-7">
                  Para operações com volume customizado
                </p>
                <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#dcc3fe] text-base tracking-[0] leading-6">
                  Soluções sob medida, integração dedicada, e todo o poder da
                  Appmax para escalar sem limites.
                </p>
              </div>

              <div className="flex justify-center md:justify-end">
                <Button className="h-12 px-6 bg-white hover:bg-gray-100 rounded-xl">
                  <span className="[font-family:'DM_Sans',Helvetica] font-medium text-[#2e225e] text-lg text-center tracking-[0] leading-7">
                    FALAR COM ESPECIALISTA
                  </span>
                  <ArrowRightIcon className="w-4 h-4 ml-3" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
