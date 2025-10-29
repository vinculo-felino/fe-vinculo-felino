import { Metadata } from "next";
import { GreetingContent } from "./GreetingContent";

export const metadata: Metadata = {
  title: "¡Hola! - Vínculo Felino",
  description: "Bienvenido a Vínculo Felino",
};

export default function GreetingPage() {
  return <GreetingContent />;
}

