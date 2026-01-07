import { Metadata } from "next";
import { MarketingNavbar } from "@/components/vf/MarketingNavbar";
import { Footer } from "@/components/vf/Footer";
import { Instagram, Briefcase, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Nosotros - Vínculo Felino",
  description: "Conoce más sobre Vínculo Felino, una aplicación web interactiva que busca orientar y educar a tutores de gatos rescatados.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-nunito">
      <MarketingNavbar />
      
      <div className="flex-grow flex flex-col items-center justify-center p-8 py-16">
        {/* Sección ¿Qué es Vínculo Felino? */}
        <div className="max-w-4xl w-full text-center px-4 mb-16">
          <h1 className="text-vf-pink text-4xl md:text-5xl font-fredoka mb-6">
            ¿Qué es Vínculo Felino?
          </h1>
          <p className="text-gray-700 text-base md:text-lg font-sourceSans leading-relaxed">
            Es una aplicación web interactiva que busca orientar y educar a tutores de gatos rescatados para facilitar su proceso de adaptación en su nuevo hogar. Esto es a través de recursos visuales ilustrativos que proyectan los comportamientos y emociones fundamentales de los felinos, y ejercicios de socialización basados en su etología. Vínculo Felino promueve una convivencia respetuosa entre el adoptante y el gato a partir del entendimiento de su conducta natural.
          </p>
        </div>

        {/* Tarjeta de Winny */}
        <div className="bg-white rounded-3xl shadow-lg p-8 max-w-2xl w-full">
          <div className="flex flex-col items-center text-center">
            {/* Avatar con emoji de gato */}
            <div className="bg-vf-pink rounded-full w-24 h-24 flex items-center justify-center mb-4 text-5xl">
              😺
            </div>
            
            {/* Nombre */}
            <h2 className="text-vf-pink text-3xl font-fredoka mb-2">Winny</h2>
            
            {/* Subtítulo */}
            <p className="text-gray-600 font-sourceSans text-sm mb-4">
              Diseño mención Visualidad y Medios
            </p>
            
            {/* Descripción */}
            <p className="text-gray-700 font-sourceSans text-base leading-relaxed mb-6 max-w-xl">
              Fundadora de Vínculo Felino y creadora de los recursos visuales que dan vida al proyecto. Su enfoque es promover el respeto y empatía hacia los gatos.
            </p>
            
            {/* Botones de redes sociales */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="bg-vf-pink rounded-full p-3 hover:shadow-lg transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="bg-vf-turquoise rounded-full p-3 hover:shadow-lg transition-all"
                aria-label="Portafolio"
              >
                <Briefcase className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="bg-vf-purple rounded-full p-3 hover:shadow-lg transition-all"
                aria-label="Contacto"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
            </div>
            
            {/* Etiquetas debajo de los botones */}
            <div className="flex gap-4 mt-2">
              <span className="text-gray-500 text-xs font-sourceSans">Instagram</span>
              <span className="text-gray-500 text-xs font-sourceSans">Portafolio</span>
              <span className="text-gray-500 text-xs font-sourceSans">Contacto</span>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

