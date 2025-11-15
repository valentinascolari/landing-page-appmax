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
    <section className="flex items-center justify-between px-[268px] py-[123px] bg-white w-full">
      <div className="flex w-[654px] items-start gap-[82px] flex-col">
        <div className="inline-flex items-start gap-[35px] flex-col">
          <Badge className="inline-flex items-center gap-2 px-4 py-2 bg-[#ab6afb1a] rounded-full hover:bg-[#ab6afb1a]">
            <img className="w-5 h-5" alt="Svg" src="/svg-19.svg" />
            <span className="[font-family:'DM_Sans',Helvetica] font-semibold text-[#2e225e] text-sm tracking-[0.35px] leading-5 whitespace-nowrap">
              A SOLUÇÃO
            </span>
          </Badge>

          <div className="inline-flex items-center justify-center gap-2.5">
            <h2 className="w-[653px] [font-family:'DM_Sans',Helvetica] font-bold text-[#251e48] text-5xl tracking-[0] leading-[48px]">
              A inteligência que
              <br />
              aprova a sua venda,
              <br />
              agora garante a entrega.
            </h2>
          </div>

          <div className="inline-flex items-center justify-center gap-2.5">
            <p className="w-[648px] [font-family:'DM_Sans',Helvetica] font-normal text-[#4c347f] text-lg tracking-[0] leading-[29.2px]">
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

        <div className="flex w-[654px] justify-between items-center">
          {featureCards.map((card, index) => (
            <Card
              key={index}
              className="w-[312px] rounded-2xl border-2 border-[#dcc3fe] bg-[linear-gradient(153deg,rgba(249,245,255,1)_0%,rgba(237,226,254,1)_100%)]"
            >
              <CardContent className="p-6 h-[290px] flex flex-col gap-2.5">
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

      <div className="flex flex-col w-[604px] items-start gap-2.5">
        <img
          className="w-full h-[417px] object-cover"
          alt="Imagem"
          src="/imagem.png"
        />
      </div>
    </section>
  );
};
