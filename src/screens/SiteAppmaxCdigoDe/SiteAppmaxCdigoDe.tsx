import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection";
import { FeatureHighlightSection } from "./sections/FeatureHighlightSection";
import { FooterSection } from "./sections/FooterSection";
import { InfoCardSection } from "./sections/InfoCardSection";
import { MainContentSection } from "./sections/MainContentSection";
import { MetaDataSection } from "./sections/MetaDataSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";
import { SeoSection } from "./sections/SeoSection";
import { TextContentSection } from "./sections/TextContentSection";

export const SiteAppmaxCdigoDe = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-[#f8f5ff]">
      <NavigationBarSection />
      <SeoSection />
      <TextContentSection />
      <MetaDataSection />
      <InfoCardSection />
      <FeatureHighlightSection />
      <CallToActionSection />
      <MainContentSection />
      <FooterSection />
    </div>
  );
};
