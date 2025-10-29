'use client';

import React from 'react';
import { MarketingNavbar } from "@/components/vf/MarketingNavbar";
import { Footer } from "@/components/vf/Footer";
import { PrimaryButton } from "@/components/vf/PrimaryButton";
import { VFCatLogo } from "@/components/vf/VFCatLogo";
import Link from "next/link";

export const WelcomeContent: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-nunito">
      <MarketingNavbar />
      
      {/* Contenido principal centrado */}
      <div className="flex-grow flex flex-col items-center justify-center text-center p-8">
        {/* Logo de bienvenida */}
        <div className="mb-6">
          <VFCatLogo size={160} />
        </div>
        
        <h1 className="text-vf-pink text-4xl font-fredoka mb-4">¡Bienvenid@!</h1>
        <p className="text-vf-turquoise text-lg mb-12 max-w-sm">
          Vínculo Felino está pensado para ayudarte a entender mejor a tu gato, acompañar su proceso de adaptación y disfrutar juntos de un vínculo más fuerte y feliz.
        </p>
      </div>
      
      <div className="pb-12 flex justify-center px-8">
        <Link href="/auth/login">
          <PrimaryButton>
            Iniciar sesión
          </PrimaryButton>
        </Link>
      </div>
      
      <Footer />
    </div>
  );
};

