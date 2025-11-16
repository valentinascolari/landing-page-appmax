import { ChevronDownIcon, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  { label: "Soluções", hasDropdown: true },
  { label: "Empresa", hasDropdown: true },
  { label: "Taxas", hasDropdown: false },
  { label: "Ajuda", hasDropdown: false },
  { label: "Blog", hasDropdown: false },
];

export const NavigationBarSection = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-white shadow-[0px_2px_8px_#00000014] py-4 fixed top-0 left-0 z-50">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between w-full">
          {/* LOGO */}
          <img className="w-[120px] md:w-[150px]" alt="Logo" src="/logo.png" />

          {/* DESKTOP NAVIGATION (Hidden on Mobile) */}
          <div className="hidden md:flex flex-wrap items-center justify-center gap-2">
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

            <div className="w-auto px-2">
              <Button className="h-11 px-6 bg-[#9b6afa] hover:bg-[#8a59e9] rounded-[10px] [font-family:'Inter',Helvetica] font-normal text-white text-[17px] tracking-[0] leading-[26.0px] hover:scale-105 transition-transform duration-300">
                CRIE SUA CONTA
              </Button>
            </div>

            <img
              className="flex-shrink-0 ml-2"
              alt="Boto brasil"
              src="/bot-o-brasil.png"
            />
          </div>

          {/* MOBILE CONTROLS (Visible only on Mobile) */}
          <div className="flex md:hidden items-center gap-4">
            <img
              className="flex-shrink-0"
              alt="Boto brasil"
              src="/bot-o-brasil.png"
            />
            <button onClick={toggleMenu} className="text-[#333333]">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-white z-40 overflow-y-auto shadow-inner border-t border-gray-100">
          <div className="flex flex-col p-6 gap-6">
            {/* Links de Navegação */}
            <div className="flex flex-col gap-4">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  className="flex items-center justify-between w-full text-left py-2"
                >
                  <span className="[font-family:'Inter',Helvetica] font-medium text-[#333333] text-lg">
                    {item.label}
                  </span>
                  {item.hasDropdown && (
                    <ChevronDownIcon className="w-4 h-4 text-[#333333]" />
                  )}
                </button>
              ))}
              
              <button className="flex items-center justify-between w-full text-left py-2 mt-2">
                  <span className="[font-family:'Inter',Helvetica] font-medium text-[#333333] text-lg">
                    Entrar
                  </span>
              </button>
            </div>

            {/* Divisor */}
            <div className="w-full h-[1px] bg-gray-200 my-2"></div>

            {/* Chamada para Ação */}
            <div className="flex flex-col gap-3 pb-8">
              <span className="[font-family:'Inter',Helvetica] font-semibold text-[#333333] text-lg">
                Crie sua conta agora
              </span>
              <Button className="w-full h-12 bg-[#9b6afa] hover:bg-[#8a59e9] rounded-[10px] [font-family:'Inter',Helvetica] font-bold text-white text-lg tracking-[0]">
                CRIE SUA CONTA
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};