import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  { label: "Soluções", hasDropdown: true },
  { label: "Empresa", hasDropdown: true },
  { label: "Taxas", hasDropdown: false },
  { label: "Ajuda", hasDropdown: false },
  { label: "Blog", hasDropdown: false },
];

export const NavigationBarSection = (): JSX.Element => {
  return (
    <nav className="flex flex-col items-start gap-2.5 px-[263px] py-[23px] w-full bg-white shadow-[0px_2px_8px_#00000014]">
      <div className="flex items-center justify-between w-full">
        <img className="w-[150px]" alt="Logo" src="/logo.png" />

        <div className="inline-flex items-center">
          {navigationItems.map((item, index) => (
            <button
              key={index}
              className="inline-flex items-center gap-[5px] px-5 py-2 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <span className="[font-family:'Inter',Helvetica] font-normal text-[#333333] text-lg tracking-[0] leading-[27px] whitespace-nowrap">
                {item.label}
              </span>
              {item.hasDropdown && (
                <ChevronDownIcon className="w-[9px] h-[9px] text-[#333333]" />
              )}
            </button>
          ))}

          <button className="inline-flex items-center justify-center gap-2.5 px-[19px] py-2 cursor-pointer hover:opacity-80 transition-opacity">
            <span className="[font-family:'Inter',Helvetica] font-normal text-[#333333] text-lg tracking-[0] leading-[27px] whitespace-nowrap">
              Entrar
            </span>
          </button>

          <div className="flex flex-col w-[224.16px] items-start gap-2.5 px-5 py-[5px]">
            <Button className="w-full h-11 bg-[#9b6afa] hover:bg-[#8a59e9] rounded-[10px] [font-family:'Inter',Helvetica] font-normal text-white text-[17px] tracking-[0] leading-[26.0px]">
              CRIE SUA CONTA
            </Button>
          </div>

          <img
            className="flex-[0_0_auto]"
            alt="Boto brasil"
            src="/bot-o-brasil.png"
          />
        </div>
      </div>
    </nav>
  );
};
