'use client';

import React from 'react';
import Image from 'next/image';

interface ModuleCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  position: 'left' | 'right';
}

const ModuleCard: React.FC<ModuleCardProps> = ({ title, imageSrc, imageAlt, position }) => (
  <div className="relative flex items-center justify-center mb-8 transition-transform hover:scale-105 cursor-pointer">
    {/* Card con título (fondo) - Más ancho y centrado */}
    <div className="bg-vf-yellow rounded-[2.5rem] py-10 px-16 md:px-32 shadow-lg hover:shadow-xl transition-shadow relative">
      <h3 className="text-vf-purple text-2xl md:text-3xl font-bold font-arialRounded text-center">
        {title}
      </h3>
    </div>
    
    {/* Imagen del gato (sobrepuesta en el borde del amarillo) */}
    <div className={`
      absolute z-10 top-1/2 -translate-y-1/2
      ${position === 'left' 
        ? 'left-0 -translate-x-1/2' 
        : 'right-0 translate-x-1/2'
      }
    `}>
      <div className="w-36 h-36 md:w-48 md:h-48 relative">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  </div>
);

export const AdaptationContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-6 pb-6 lg:pb-6">
      {/* Header con fondo rosa redondeado */}
      <div className="bg-gradient-to-b from-vf-pink to-[#ffb4db] rounded-[2.5rem] rounded-t-none p-8 mb-8 shadow-lg -mx-6 -mt-6 pt-12">
        {/* Título */}
        <h1 className="text-4xl font-fredoka text-vf-yellow text-center mb-2">
          Adaptación
        </h1>
        <p className="text-lg font-fredoka text-vf-yellow text-center mb-6">
          de mi gatito a su nuevo hogar
        </p>

        {/* Barra de progreso */}
        <div className="w-full bg-white/40 rounded-full h-3 mb-3 overflow-hidden">
          <div className="bg-vf-turquoise h-full rounded-full" style={{ width: '33%' }}></div>
        </div>
        <p className="text-white text-center font-fredoka text-sm">
          Etapa inicial ¡vamos en camino!
        </p>
      </div>

      {/* Módulos con ilustraciones */}
      <div className="max-w-3xl mx-auto px-8">
        <div className="space-y-12">
          <ModuleCard
            title="Señales de confianza"
            imageSrc="/images/cat-pose-3.png"
            imageAlt="Gato mostrando señales de confianza"
            position="left"
          />
          
          <ModuleCard
            title="Lenguaje corporal"
            imageSrc="/images/cat-pose-2.png"
            imageAlt="Gato mostrando lenguaje corporal"
            position="right"
          />
          
          <ModuleCard
            title="Exploración y rutina"
            imageSrc="/images/cat-pose-1.png"
            imageAlt="Gato explorando"
            position="left"
          />
        </div>
      </div>
    </div>
  );
};

