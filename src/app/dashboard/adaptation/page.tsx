import { Metadata } from "next";
import { AdaptationFullscreen } from "./AdaptationFullscreen";

export const metadata: Metadata = {
  title: "Adaptación - Vínculo Felino",
  description: "Acompaña la adaptación de tu gatito a su nuevo hogar",
};

export default function AdaptationPage() {
  return <AdaptationFullscreen />;
}

