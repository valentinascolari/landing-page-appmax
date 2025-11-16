import { ArrowRightIcon, CheckCircle2Icon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

export const SeoSection = (): JSX.Element => {
  const scrollToPlans = () => {
    const element = document.getElementById("planos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-[linear-gradient(157deg,rgba(171,131,226,1)_0%,rgba(76,52,127,1)_50%,rgba(9,2,39,1)_100%),linear-gradient(171deg,rgba(248,245,255,1)_0%,rgba(236,227,252,1)_50%,rgba(46,34,94,1)_100%)] pt-32 pb-12 md:pt-40 md:pb-20">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Container da esquerda: Centralizado no mobile, esquerda no desktop */}
          <div className="flex flex-col w-full lg:flex-1 items-center lg:items-start gap-7">
            <Badge className="h-auto px-[18px] py-3 bg-[#ddc3fd] rounded-full border border-solid border-[#ffffff33] hover:bg-[#cbb0ea] transition-colors duration-300 cursor-default">
              <span className="[font-family:'DM_Sans',Helvetica] font-semibold text-[#2e225e] text-sm tracking-[0.35px] leading-5 whitespace-nowrap">
                CONFIRA A NOVA FUNCIONALIDADE
              </span>
            </Badge>

            <h1 className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-3xl md:text-5xl lg:text-6xl tracking-[0] leading-tight text-center lg:text-left">
              Mensagens de Rastreio Automatizadas via WhatsApp
            </h1>

            <div className="w-full [font-family:'DM_Sans',Helvetica] font-normal text-lg md:text-xl tracking-[0] leading-7 text-center lg:text-left">
              <span className="text-[#ece3fc]">
                O Rastrelo Automático Appmax antecipa dúvidas, envia atualizações
                automáticas no WhatsApp e mostra ao cliente que sua marca se
                preocupa com cada detalhe da entrega.
                <br />
                <br />
              </span>

              <span className="font-bold text-[#ece3fc]">
                Mais eficiência para o seu time, mais confiança para o seu cliente.
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full">
              <Button
                onClick={scrollToPlans}
                className="h-12 px-6 md:px-8 bg-[#ab6afb] hover:bg-[#9b5aeb] rounded-2xl shadow-[0px_25px_50px_-12px_#00000040] w-full sm:w-auto transition-transform hover:scale-105 duration-300"
              >
                <span className="[font-family:'DM_Sans',Helvetica] font-semibold text-white text-lg text-center tracking-[0] leading-7 whitespace-nowrap">
                  CONHEÇA OS PLANOS
                </span>
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Button>

              <Button
                variant="outline"
                className="h-[52px] px-6 md:px-8 bg-[#f8f5ff] hover:bg-[#ece3fc] rounded-2xl border-2 border-solid border-white w-full sm:w-auto transition-transform hover:scale-105 duration-300"
              >
                <span className="[font-family:'DM_Sans',Helvetica] font-semibold text-[#251e48] text-lg text-center tracking-[0] leading-7 whitespace-nowrap">
                  VER DEMONSTRAÇÃO
                </span>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6">
              <img
                className="w-[136px] h-10 transition-transform duration-300 hover:scale-105 cursor-default"
                alt="Group"
                src="/group-24.png"
              />

              <div className="flex flex-col gap-1 items-center lg:items-start">
                <div className="flex items-center gap-2">
                  <CheckCircle2Icon className="w-5 h-5 text-[#ece3fc]" />
                  <span className="[font-family:'DM_Sans',Helvetica] font-semibold text-[#ece3fc] text-base tracking-[0] leading-6 whitespace-nowrap">
                    Mais de 5.000 empresas
                  </span>
                </div>
                <span className="[font-family:'DM_Sans',Helvetica] font-normal text-[#ece3fc] text-sm tracking-[0] leading-5 whitespace-nowrap">
                  já confiam na Appmax
                </span>
              </div>
            </div>
          </div>

          {/* Imagem do WhatsApp apenas para Mobile, centralizada */}
          <div className="flex items-center justify-center w-full lg:flex-1 mt-12 block lg:hidden">
            <img
              className="w-full max-w-[300px] h-auto object-contain rounded-xl shadow-lg"
              alt="Imagem do whatsapp"
              src="/imagem-do-whatsapp-de-2025-11-03---s--14-59-54-28e7d896-1.png"
            />
          </div>

          {/* Mockup do celular (APENAS PARA DESKTOP) */}
          <div className="flex items-center justify-center w-full lg:flex-1 hidden lg:block">
            <div className="relative w-full max-w-[488px] h-[400px] lg:h-[556px]">
              <div className="absolute top-[29px] left-0 w-full h-[400px] lg:h-[500px]">
                <div className="absolute top-0 left-0 w-full h-full flex rounded-3xl overflow-hidden shadow-[0px_25px_50px_-12px_#00000040] bg-[linear-gradient(134deg,rgba(171,106,251,1)_0%,rgba(117,76,200,1)_100%)]">
                  <div className="flex-1 w-full rounded-3xl bg-[linear-gradient(134deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)]" />
                </div>

                <div className="absolute w-[calc(100%_-_79px)] h-[calc(100%_-_82px)] top-[39px] left-[70px]">
                  <div className="absolute w-[calc(100%_-_60px)] h-[calc(100%_+_180px)] top-[-87px] left-0 rounded-[40.29px] blur-[26.86px] bg-[linear-gradient(90deg,rgba(171,106,251,1)_0%,rgba(190,135,253,1)_100%)] opacity-30" />

                  <div className="absolute w-[calc(100%_-_60px)] top-[-87px] left-0 h-[598px] flex rounded-[40.29px] overflow-hidden border-[3.36px] border-solid border-gray-700 shadow-[0px_20.98px_41.97px_-10.07px_#00000040] bg-[linear-gradient(134deg,rgba(31,41,55,1)_0%,rgba(17,24,39,1)_100%)]">
                    <div className="mt-[15.1px] h-[564.89px] ml-[15.1px] mr-[15.1px] flex-1 flex flex-col bg-white rounded-[33.57px] overflow-hidden">
                      <div className="mr-[0.3px] flex-1 max-h-[36.93px] flex bg-[linear-gradient(180deg,rgba(248,245,255,1)_0%,rgba(255,255,255,1)_100%)]">
                        <div className="flex items-center justify-center mt-[10.9px] w-[30px] h-[15px] ml-[22.0px] [font-family:'DM_Sans',Helvetica] font-semibold text-gray-700 text-[11.1px] tracking-[0] leading-[14.8px] whitespace-nowrap">
                          9:41
                        </div>
                        <div className="mt-[12.9px] w-[14.77px] h-[11.08px] ml-[197.6px] bg-gray-700 rounded-[10.07px]" />
                        <div className="mt-[12.9px] w-[14.77px] h-[11.08px] ml-[3.7px] bg-gray-700 rounded-[10.07px]" />
                        <div className="mt-[12.9px] w-[14.77px] h-[11.08px] ml-[3.7px] bg-gray-700 rounded-[10.07px]" />
                      </div>

                      <div className="ml-[22.2px] mr-[22.5px] flex-1 max-h-[182.59px] mt-[22.2px] rounded-[20.14px] border-[0.84px] border-solid border-[#ddc3fd] shadow-[0px_3.36px_5.04px_-3.36px_#0000001a,0px_8.39px_12.59px_-2.52px_#0000001a] bg-[linear-gradient(164deg,rgba(236,227,252,1)_0%,rgba(248,245,255,1)_100%)] relative overflow-hidden">
                        <img
                          className="absolute top-[calc(50.00%_-_68px)] left-[23px] w-11 h-11"
                          alt="Background"
                          src="/background-9.svg"
                        />
                        <div className="absolute top-6 left-[78px] w-[61px] h-[19px] flex items-center justify-center [font-family:'DM_Sans',Helvetica] font-bold text-gray-900 text-[14.8px] tracking-[0] leading-[22.2px] whitespace-nowrap">
                          Appmax
                        </div>
                        <img
                          className="absolute top-[calc(50.00%_-_65px)] left-[147px] w-[15px] h-[15px]"
                          alt="Svg"
                          src="/svg-23.svg"
                        />
                        <div className="absolute top-[50px] left-[78px] w-[102px] h-[15px] flex items-center justify-center [font-family:'DM_Sans',Helvetica] font-normal text-gray-500 text-[11.1px] tracking-[0] leading-[14.8px] whitespace-nowrap">
                          WhatsApp Business
                        </div>
                        <div className="absolute top-[84px] left-[23px] w-[239px] h-[17px] flex items-center justify-center [font-family:'DM_Sans',Helvetica] font-normal text-gray-700 text-[12.9px] tracking-[0] leading-[21.0px] whitespace-nowrap">
                          <span className="[font-family:'DM_Sans',Helvetica] font-normal text-gray-700 text-[12.9px] tracking-[0] leading-[21.0px]">
                            🎉 Olá! Seu pedido
                          </span>
                          <span className="font-bold"> #1234</span>
                          <span className="[font-family:'DM_Sans',Helvetica] font-normal text-gray-700 text-[12.9px] tracking-[0] leading-[21.0px]">
                            5 foi enviado!
                          </span>
                        </div>
                        <div className="absolute top-[111px] left-[23px] w-[138px] h-[17px] flex items-center justify-center [font-family:'DM_Sans',Helvetica] font-normal text-gray-700 text-[12.9px] tracking-[0] leading-[18.5px] whitespace-nowrap">
                          📦 Código de rastreio:
                        </div>
                        <div className="absolute top-28 left-[161px] w-[78px] h-4 flex items-center justify-center [font-family:'Consolas-Bold',Helvetica] font-bold text-gray-700 text-[12.9px] tracking-[0] leading-[18.5px] whitespace-nowrap">
                          BR123456789
                        </div>
                        <div className="absolute top-[141px] left-[23px] w-52 h-[18px] flex items-center justify-center [font-family:'DM_Sans',Helvetica] font-normal text-gray-500 text-[12.9px] tracking-[0] leading-[18.5px] whitespace-nowrap">
                          Previsão de entrega: 3-5 dias úteis
                        </div>
                      </div>

                      <div className="ml-[22.2px] mr-[22.5px] flex-1 max-h-[110.33px] mt-[14.8px] flex flex-col gap-2.5 rounded-[20.14px] overflow-hidden border-[0.84px] border-solid border-green-200 shadow-[0px_3.36px_5.04px_-3.36px_#0000001a,0px_8.39px_12.59px_-2.52px_#0000001a] bg-[linear-gradient(174deg,rgba(220,252,231,1)_0%,rgba(240,253,244,1)_100%)]">
                        <div className="flex items-center justify-center ml-[22.8px] w-[233px] h-[38px] mt-[24.5px] [font-family:'DM_Sans',Helvetica] font-normal text-gray-700 text-[12.9px] tracking-[0] leading-[21.0px]">
                          ✅ Ótimas notícias! Seu pedido está a caminho e chegará
                          hoje.
                        </div>
                        <div className="flex items-center justify-center ml-[22.8px] w-[109px] h-[15px] [font-family:'DM_Sans',Helvetica] font-normal text-gray-500 text-[11.1px] tracking-[0] leading-[14.8px] whitespace-nowrap">
                          Recebido às 14:32
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-full object-contain"
                alt="Imagem do whatsapp"
                src="/imagem-do-whatsapp-de-2025-11-03---s--14-59-54-28e7d896-1.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};