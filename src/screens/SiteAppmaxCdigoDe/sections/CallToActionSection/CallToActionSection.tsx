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
    buttonVariant: "dark" as const,
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
    buttonVariant: "dark" as const,
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
    <section id="planos" className="w-full bg-[linear-gradient(180deg,rgba(249,245,255,1)_0%,rgba(237,226,254,1)_100%)] py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-12 md:gap-16">
          <header className="flex flex-col w-full max-w-3xl items-center gap-4">
            <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#2e225e] text-3xl md:text-4xl lg:text-5xl text-center tracking-[0] leading-tight">
              Planos flexíveis que escalam
              <br />
              com o seu negócio.
            </h2>

            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#2e225e] text-lg md:text-xl text-center tracking-[0] leading-7">
              Escolha o plano ideal para o seu volume de vendas. Sem surpresas, sem
              custos
              <br />
              ocultos. Cancele quando quiser.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full items-stretch">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 md:gap-7 w-full h-full"
              >
                {plan.isPopular ? (
                  <Badge className="h-9 px-6 rounded-full shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a] bg-[#ab6afb] hover:bg-[#9b5aeb] border-0">
                    <span className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-sm tracking-[0.35px] leading-5">
                      MAIS POPULAR
                    </span>
                  </Badge>
                ) : (
                  <div className="h-9 w-full" />
                )}

                <Card
                  className={`w-full h-full bg-white rounded-3xl ${plan.borderClass} ${
                    plan.isPopular
                      ? "shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a,0px_0px_0px_4px_#ab6afb33] hover:shadow-[0px_0px_20px_rgba(171,106,251,0.5)]"
                      : "shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a]"
                  } overflow-hidden transition-all duration-300 hover:scale-105 cursor-default flex flex-col`}
                >
                  {/* Mobile: items-center text-center | Desktop: md:items-start md:text-left */}
                  <CardContent className="p-6 md:p-8 flex flex-col flex-1 items-center text-center md:items-start md:text-left">
                    
                    {/* Bloco de Cabeçalho */}
                    <div className="flex flex-col gap-4 md:gap-6 w-full mb-4 md:mb-8 items-center md:items-start">
                      <img
                        className="w-16 h-16"
                        alt={`${plan.title} icon`}
                        src={plan.icon}
                      />

                      <div className="flex flex-col gap-2 w-full">
                        <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#2e225e] text-xl md:text-2xl leading-8">
                          {plan.title}
                        </h3>
                        <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#4c347f] text-sm tracking-[0] leading-[22.8px] min-h-[3.75rem]">
                          {plan.description}
                        </p>
                      </div>
                    </div>

                    {/* Bloco de Preço e Botão */}
                    <div className="flex flex-col gap-6 w-full items-center md:items-start">
                      <div className="flex items-baseline gap-1">
                        <span className="[font-family:'DM_Sans',Helvetica] font-bold text-[#2e225e] text-4xl md:text-5xl tracking-[0] leading-tight">
                          {plan.price}
                        </span>
                        <span className="[font-family:'DM_Sans',Helvetica] font-normal text-[#4c347f] text-sm tracking-[0] leading-6">
                          {plan.period}
                        </span>
                      </div>

                      <Button
                        className={`w-full h-12 rounded-lg ${
                          plan.buttonVariant === "purple"
                            ? "bg-[#ab6afb] hover:bg-[#9b5aeb] shadow-[0px_8px_10px_-6px_#0000001a,0px_20px_25px_-5px_#0000001a]"
                            : "bg-[#111827] hover:bg-[#1f2937]" 
                        }`}
                      >
                        <span className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-sm tracking-[0.5px] leading-5">
                          {plan.buttonText}
                        </span>
                      </Button>
                    </div>

                    {/* Lista de Features */}
                    <div className="flex flex-col gap-3 pt-6 mt-6 border-t border-gray-100 w-full">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3 text-left">
                          <CheckIcon className="w-4 h-4 text-[#ab6afb] flex-shrink-0 mt-1" />
                          <span className="[font-family:'DM_Sans',Helvetica] font-normal text-[#4c347f] text-sm tracking-[0] leading-[20px]">
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

          {/* Card Plano Max */}
          <div className="w-full">
            <Card className="rounded-2xl md:rounded-3xl bg-[linear-gradient(169deg,rgba(171,131,226,1)_0%,rgba(76,52,127,1)_50%,rgba(9,2,39,1)_100%)] border-0">
              <CardContent className="p-6 md:p-8 lg:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  
                  {/* TEXTO PLANO MAX: Centralizado no Mobile, Esquerda no Desktop */}
                  <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left">
                    <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-2xl md:text-3xl lg:text-4xl leading-tight">
                      Plano Max
                    </h3>
                    <div className="flex flex-col gap-1">
                      <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#dcc3fe] text-lg md:text-xl tracking-[0] leading-7">
                        Para operações com volume customizado
                      </p>
                      <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#dcc3fe] text-base tracking-[0] leading-6">
                        Soluções sob medida, integração dedicada, e todo o poder da
                        Appmax para escalar sem limites.
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center md:justify-end">
                    <Button className="h-12 px-6 bg-white hover:bg-gray-100 rounded-xl transition-transform hover:scale-105 duration-300 group text-[#2e225e]">
                      <span className="[font-family:'DM_Sans',Helvetica] font-bold text-sm md:text-base text-center tracking-[0.5px] leading-5">
                        FALAR COM ESPECIALISTA
                      </span>
                      <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};