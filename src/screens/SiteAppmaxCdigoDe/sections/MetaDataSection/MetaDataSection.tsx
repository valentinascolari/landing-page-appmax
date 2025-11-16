import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const featureCards = [
  {
    icon: "/icon.png",
    title: "Comunicação proativa em cada etapa",
    description:
      "Notificações automáticas via WhatsApp nos momentos-chave: confirmação do pedido, envio do código de rastreio e atualizações de status até a entrega final.",
  },
  {
    icon: "/icon-1.png",
    title: "Aumente a confiança da sua empresa",
    description:
      "Comunicação transparente que fideliza e transforma o pós-venda em diferencial competitivo.",
  },
];

export const MetaDataSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-16 md:py-24 lg:py-32">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Container Principal: Centralizado no mobile, Esquerda no Desktop */}
          <div className="flex w-full lg:flex-1 items-center lg:items-start gap-12 md:gap-16 lg:gap-20 flex-col">
            <div className="flex items-center lg:items-start gap-6 md:gap-8 flex-col w-full">
              <Badge className="inline-flex items-center gap-2 px-4 py-2 bg-[#ab6afb1a] rounded-full hover:bg-[#ab6afb33] transition-colors duration-300 cursor-default">
                <img className="w-5 h-5" alt="Svg" src="/svg-19.svg" />
                <span className="[font-family:'DM_Sans',Helvetica] font-semibold text-[#2e225e] text-sm tracking-[0.35px] leading-5 whitespace-nowrap">
                  A SOLUÇÃO
                </span>
              </Badge>

              <div className="flex items-center justify-center lg:justify-start gap-2.5 w-full">
                <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#251e48] text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-tight text-center lg:text-left">
                  A inteligência que
                  <br />
                  aprova a sua venda,
                  <br />
                  agora garante a entrega.
                </h2>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-2.5 w-full">
                <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#4c347f] text-base md:text-lg tracking-[0] leading-[29.2px] text-center lg:text-left">
                  <span className="font-bold">
                    Assim que a transportadora atualiza o status, a Appmax envia
                    automaticamente uma mensagem no Whatsapp do cliente.
                    <br />
                  </span>
                  <span className="[font-family:'DM_Sans',Helvetica] font-normal text-[#4c347f] text-lg tracking-[0] leading-[29.2px]">
                    <br />
                    Sem esforço. Sem dúvidas.
                  </span>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              {featureCards.map((card, index) => (
                <Card
                  key={index}
                  className="w-full rounded-2xl border-2 border-[#dcc3fe] bg-[linear-gradient(153deg,rgba(249,245,255,1)_0%,rgba(237,226,254,1)_100%)] hover:scale-105 transition-transform duration-300 cursor-default"
                >
                  <CardContent className="p-6 min-h-[250px] flex flex-col gap-2.5">
                    <img className="w-6 h-7" alt="Icon" src={card.icon} />
                    <h3 className="w-full [font-family:'DM_Sans',Helvetica] font-semibold text-[#8463ca] text-xl tracking-[0] leading-7 mt-[15px]">
                      {card.title}
                    </h3>
                    <p className="w-full [font-family:'DM_Sans',Helvetica] font-normal text-[#4c347f] text-base tracking-[0] leading-6 mt-2.5">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex flex-col w-full lg:flex-1 items-center lg:items-end gap-2.5">
            <img
              className="w-full max-w-md lg:max-w-full h-auto object-cover rounded-lg lg:translate-x-24"
              alt="Imagem"
              src="/imagem.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};