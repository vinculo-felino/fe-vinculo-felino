import { Metadata } from "next";
import { WelcomeContent } from "./WelcomeContent";

export const metadata: Metadata = {
  title: "Vínculo Felino - Bienvenida",
  description: "Vínculo Felino está pensado para ayudarte a entender mejor a tu gato, acompañar su proceso de adaptación y disfrutar juntos de un vínculo más fuerte y feliz.",
};

export default function Home() {
  return <WelcomeContent />;
}
