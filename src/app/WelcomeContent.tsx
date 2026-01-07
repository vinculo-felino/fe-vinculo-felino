'use client';

import React from 'react';
import { MarketingNavbar } from "@/components/vf/MarketingNavbar";
import { Footer } from "@/components/vf/Footer";
import { PrimaryButton } from "@/components/vf/PrimaryButton";
import { VFCatLogo } from "@/components/vf/VFCatLogo";
import { Heart, Smile, BookOpen } from "lucide-react";
import Link from "next/link";

export const WelcomeContent: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-nunito">
      <MarketingNavbar />
      
      {/* Contenido principal centrado */}
      <div className="flex-grow flex flex-col items-center justify-center text-center p-8">
        {/* Logo de bienvenida */}
        <div className="mb-8">
          <VFCatLogo size={160} />
        </div>
        
        <h1 className="text-vf-pink text-4xl md:text-5xl font-fredoka mb-6">¡Bienvenid@!</h1>
        <p className="text-vf-turquoise text-lg md:text-xl mb-12 max-w-2xl px-4 leading-relaxed">
          Vínculo Felino está pensado para ayudarte a entender mejor a tu gato, acompañar su proceso de adaptación y disfrutar juntos de un vínculo más fuerte y feliz.
        </p>
        
        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16">
          <Link href="/auth/login">
            <button className="bg-vf-pink text-white font-sourceSans font-semibold py-3 px-12 rounded-full hover:bg-vf-pink/90 hover:shadow-lg transition-all duration-300 min-w-[200px]">
              Iniciar sesión
            </button>
          </Link>
          <Link href="/auth/register">
            <button className="bg-vf-turquoise text-white font-sourceSans font-semibold py-3 px-12 rounded-full hover:bg-vf-turquoise/90 hover:shadow-lg transition-all duration-300 min-w-[200px]">
              Registrarme
            </button>
          </Link>
        </div>

        {/* Tarjetas de información */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full px-4">
          {/* Tarjeta 1: Lenguaje corporal */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="bg-vf-pink rounded-full p-4 flex-shrink-0">
                <Heart className="w-6 h-6 text-white" fill="white" />
              </div>
              <div className="text-left">
                <h3 className="font-fredoka text-xl text-gray-800 mb-2">Lenguaje corporal</h3>
                <p className="font-sourceSans text-gray-600 text-sm leading-relaxed">
                  Aprende a interpretar posturas, cola, orejas y vocalizaciones para responder mejor a sus necesidades.
                </p>
              </div>
            </div>
          </div>

          {/* Tarjeta 2: Confianza y bienestar */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="bg-vf-turquoise rounded-full p-4 flex-shrink-0">
                <Smile className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="font-fredoka text-xl text-gray-800 mb-2">Confianza y bienestar</h3>
                <p className="font-sourceSans text-gray-600 text-sm leading-relaxed">
                  Rutinas y enriquecimiento ambiental para reducir estrés y potenciar su seguridad.
                </p>
              </div>
            </div>
          </div>

          {/* Tarjeta 3: Recursos prácticos */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="bg-vf-purple rounded-full p-4 flex-shrink-0">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="font-fredoka text-xl text-gray-800 mb-2">Recursos prácticos</h3>
                <p className="font-sourceSans text-gray-600 text-sm leading-relaxed">
                  Guías cortas para adopción, presentación a otros animales y resolución de hábitos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

