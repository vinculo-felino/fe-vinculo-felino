import { Metadata } from "next";
import { MarketingNavbar } from "@/components/vf/MarketingNavbar";
import { Footer } from "@/components/vf/Footer";

export const metadata: Metadata = {
  title: "Sobre Nosotros - Vínculo Felino",
  description: "Conoce más sobre Vínculo Felino, una aplicación web interactiva que busca orientar y educar a tutores de gatos rescatados.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-nunito">
      <MarketingNavbar />
      
      <div className="flex-grow flex flex-col items-center justify-center text-center p-8 max-w-3xl mx-auto">
        <h1 className="text-vf-pink text-4xl font-fredoka mb-6">¿Qué es Vínculo Felino?</h1>
        <p className="text-gray-700 text-lg font-nunito mb-12 leading-relaxed">
          Es una aplicación web interactiva que busca orientar y educar a tutores de gatos rescatados para facilitar su proceso de adaptación en su nuevo hogar. Esto es a través de recursos visuales ilustrativos que proyectan los comportamientos y emociones fundamentales de los felinos, y ejercicios de socialización basados en su etología. Vínculo Felino promueve una convivencia respetuosa entre el adoptante y el gato a partir del entendimiento de su conducta natural.
        </p>
      </div>
      
      <Footer />
    </div>
  );
}

