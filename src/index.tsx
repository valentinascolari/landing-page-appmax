import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SiteAppmaxCdigoDe } from "./screens/SiteAppmaxCdigoDe";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <SiteAppmaxCdigoDe />
  </StrictMode>,
);
