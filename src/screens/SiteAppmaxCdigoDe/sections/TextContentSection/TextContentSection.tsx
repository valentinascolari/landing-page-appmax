import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const problemCards = [
  // ... seus dados problemCards ...
  {
    image: "/background.png",
    title: "Alto Custo de Suporte",
    description:
      "Sua equipe perde horas respondendo\nàs mesmas perguntas sobre status de\npedidos. Cada mensagem custa tempo\ne dinheiro que poderiam ser investidos\nem crescimento.",
  },
  {
    image: "/background-1.png",
    title: "Perda de Confiança",
    description:
      "Clientes ansiosos viram clientes\ndesconfiados. A falta de comunicação\nproativa gera insegurança e aumenta\ndrasticamente o volume de\nreclamações e pedidos de reembolso.",
  },
  {
    image: "/background-2.png",
    title: "Baixa Fidelização (LTV)",
    description:
      "Sem acompanhamento profissional da\nentrega, você perde a chance de\ntransformar ansiedade em\nencantamento. Resultado? Cliente não\nvolta e lifetime value despenca.",
  },
];

export const TextContentSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[linear-gradient(180deg,rgba(248,245,255,1)_0%,rgba(255,255,255,1)_100%)] py-16 md:py-32">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
      <div className="flex items-center gap-8 md:gap-16 w-full flex-col">
        <div className="flex flex-col items-center gap-4 md:gap-[18px] w-full">
          <div className="flex items-center justify-center gap-2.5 w-full">
            <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#2e225e] text-3xl md:text-4xl lg:text-5xl text-center tracking-[0] leading-tight px-4">
              O seu cliente está ansioso e o seu atendimento sobrecarregado?
            </h2>
          </div>

          <div className="flex items-center justify-center gap-2.5 w-full">
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#4c347f] text-lg md:text-xl text-center tracking-[0] leading-7 max-w-3xl px-4">
              Todo negócio que escala, enfrenta o mesmo gargalo: a ansiedade do
              cliente
              <br />
              sobre &#34;onde está meu pedido?&#34; vira um custo operacional
              crescente e invisível.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
          {problemCards.map((card, index) => (
            <Card
              key={index}
              className="flex flex-col w-full items-start gap-[21px] rounded-3xl overflow-hidden border border-solid border-[#dcc3fe] shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a] bg-[linear-gradient(138deg,rgba(249,245,255,1)_0%,rgba(237,226,254,1)_100%)] hover:scale-105 transition-transform duration-300 cursor-default"
            >
              <CardContent className="flex flex-col items-start gap-[21px] p-6 md:p-[33px] w-full">
                <img className="w-16 h-16" alt={card.title} src={card.image} />

                <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#2e225e] text-xl tracking-[0] leading-7">
                  {card.title}
                </h3>

                <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#4c347f] text-base tracking-[0] leading-[26px]">
                  {card.description.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < card.description.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};