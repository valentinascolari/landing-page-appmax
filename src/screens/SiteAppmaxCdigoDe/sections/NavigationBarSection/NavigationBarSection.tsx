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
    <nav className="w-full bg-white shadow-[0px_2px_8px_#00000014] py-4">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
        <img className="w-[120px] md:w-[150px]" alt="Logo" src="/logo.png" />

        <div className="flex flex-wrap items-center justify-center gap-2">
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

          <div className="w-full md:w-auto px-2">
            <Button className="w-full md:w-auto h-11 px-6 bg-[#9b6afa] hover:bg-[#8a59e9] rounded-[10px] [font-family:'Inter',Helvetica] font-normal text-white text-[17px] tracking-[0] leading-[26.0px]">
              CRIE SUA CONTA
            </Button>
          </div>

          <img
            className="hidden md:block flex-shrink-0"
            alt="Boto brasil"
            src="/bot-o-brasil.png"
          />
        </div>
      </div>
      </div>
    </nav>
  );
};
