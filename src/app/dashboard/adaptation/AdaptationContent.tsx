'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Home, Shield, Utensils, BedDouble, Package, Calendar, Clock, MapPin, MessageCircle, AlertCircle, Moon, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useHeaderContext } from '../layout';

export const AdaptationContent = () => {
  const router = useRouter();
  const [showIntro, setShowIntro] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const { setHeaderInfo } = useHeaderContext();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Actualizar el título del header cuando cambie el slide
  useEffect(() => {
    if (showIntro) {
      const currentSlideData = slides[currentSlide];
      setHeaderInfo(currentSlideData.title, currentSlideData.subtitle);
    } else {
      setHeaderInfo(undefined, undefined);
    }
  }, [currentSlide, showIntro, setHeaderInfo]);

  // Función para avanzar al siguiente slide - DEFINIDA ANTES DE LOS SLIDES
  const handleContinue = () => {
    if (currentSlide < 1) { // Tenemos 2 slides (0 y 1)
      setCurrentSlide(currentSlide + 1);
    } else {
      // Después del último slide, redirigir al dashboard principal
      router.push('/dashboard');
    }
  };

  // Función para ir al slide anterior
  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Función para ir al slide siguiente
  const handleNext = () => {
    handleContinue();
  };

  const slides = [
    {
      id: 0,
      title: 'Adaptación',
      subtitle: 'Introducción',
      content: (handleContinue: () => void, currentSlide: number, totalSlides: number) => (
        <div className="w-full h-full flex flex-col justify-center items-center py-4">
          {/* Contenedor con borde que incluye imagen y texto (solo en desktop) */}
          <div className="lg:border lg:border-gray-200 lg:rounded-3xl lg:p-6 lg:bg-white lg:shadow-md max-w-md lg:max-w-xl w-full mx-4">
            {/* Imagen del gato descansando - centrada */}
            <div className="flex justify-center items-center mb-6">
              <Image 
                src="/images/adaptacion -2.png"
                alt="Gato descansando"
                width={300}
                height={300}
                className="object-contain max-w-full lg:w-[350px] lg:h-[350px]"
                priority
              />
            </div>

            {/* Texto explicativo */}
            <div className="bg-vf-yellow/30 border-2 border-vf-yellow rounded-3xl p-4 mx-2">
              <p className="text-vf-purple font-sourceSans text-center text-base lg:text-lg leading-relaxed">
                El proceso de adaptación de todo gatito a su nuevo hogar requiere paciencia, amor y comprensión.
              </p>
            </div>
          </div>

          {/* Indicadores y botón */}
          <div className="w-full flex flex-col items-center gap-2.5 mt-8">
            {/* Indicadores de puntos */}
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <div
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? index === 0 ? 'bg-vf-turquoise' : index === 1 ? 'bg-vf-pink' : 'bg-vf-purple'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Botón Continuar */}
            <button
              onClick={handleContinue}
              className="bg-vf-pink text-white font-fredoka font-medium text-base py-2.5 px-14 rounded-full shadow-lg hover:bg-vf-pink/90 transition-all active:scale-95"
            >
              Continuar
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      title: 'Adaptación',
      subtitle: 'Distribución de espacio',
      content: (handleContinue: () => void, currentSlide: number, totalSlides: number) => (
        <div className="w-full h-full flex flex-col justify-center items-center py-4">
          {/* Contenedor con borde que incluye texto y diagrama (solo en desktop) */}
          <div className="lg:border lg:border-gray-200 lg:rounded-3xl lg:p-6 lg:bg-white lg:shadow-md max-w-md lg:max-w-xl w-full mx-4">
            {/* Texto explicativo en la parte superior */}
            <div className="bg-vf-yellow/30 border-2 border-vf-yellow rounded-3xl p-4 mb-6 mx-2">
              <p className="text-vf-purple font-sourceSans text-center text-base lg:text-lg leading-relaxed">
                Necesitamos un entorno que podamos comprender. Platos de comida, fuente de agua, caja de arena, deben tener lugares determinados
              </p>
            </div>

            {/* Contenedor con gato y diagrama */}
            <div className="relative w-full flex flex-col lg:flex-row items-center justify-center lg:gap-4">
              {/* Imagen del gato saludando - absoluto en móvil, normal en desktop */}
              <div className="absolute -left-8 -top-6 z-10 lg:relative lg:left-0 lg:top-0 lg:flex-shrink-0">
                <Image 
                  src="/images/gatito1.png"
                  alt="Gato saludando"
                  width={100}
                  height={100}
                  className="object-contain lg:w-[120px] lg:h-[120px]"
                />
              </div>

              {/* Diagrama de distribución de espacio - Imagen real */}
              <div className="flex justify-center items-center">
                <Image 
                  src="/images/distribucion.png"
                  alt="Distribución de espacio"
                  width={280}
                  height={260}
                  className="object-contain lg:w-[320px] lg:h-[300px]"
                />
              </div>
            </div>
          </div>

          {/* Indicadores y botón */}
          <div className="w-full flex flex-col items-center gap-3 mt-4">
            {/* Indicadores de puntos */}
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <div
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? index === 0 ? 'bg-vf-turquoise' : index === 1 ? 'bg-vf-pink' : 'bg-vf-purple'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Botón Continuar */}
            <button
              onClick={handleContinue}
              className="bg-vf-pink text-white font-fredoka font-medium text-base py-2.5 px-14 rounded-full shadow-lg hover:bg-vf-pink/90 transition-all active:scale-95"
            >
              Continuar
            </button>
          </div>
        </div>
      ),
    },
  ];

  const adaptationSections = [
    {
      id: 'space-distribution',
      title: '¿Cómo distribuir mi espacio?',
      icon: Home,
      bgColor: '#b15a81', // Morado
      items: [
        { title: 'Lugar seguro', href: '/dashboard/adaptation/safe-place' },
        { title: 'Zona de alimentación', href: '/dashboard/adaptation/feeding-zone' },
        { title: 'Zona de descanso', href: '/dashboard/adaptation/rest-zone' },
        { title: 'Caja de arena', href: '/dashboard/adaptation/litter-box' },
      ],
    },
    {
      id: 'create-routines',
      title: 'Crea rutinas para mí',
      icon: Calendar,
      bgColor: '#ff99ca', // Rosa
      items: [
        { title: 'Mis horarios de comida', href: '/dashboard/adaptation/feeding-schedule' },
        { title: 'No cambies mis espacios', href: '/dashboard/adaptation/keep-spaces' },
        { title: 'Háblame suave', href: '/dashboard/adaptation/speak-softly' },
      ],
    },
    {
      id: 'dont-force',
      title: 'No me fuerces',
      icon: AlertCircle,
      bgColor: '#67bdcb', // Turquesa
      items: [
        { title: 'Deja que explore mi nuevo hogar a mi ritmo', href: '/dashboard/adaptation/explore-pace' },
      ],
    },
  ];

  // Pantalla de introducción con slides para móvil y desktop
  if (showIntro) {
    const currentSlideData = slides[currentSlide];
    
    return (
      <div className="min-h-screen bg-white flex flex-col pb-24 lg:pb-32 overflow-y-auto">
        {/* Header para Desktop - con fondo rosa y bordes redondeados */}
        <div className="hidden lg:block">
          <div className="bg-vf-pink rounded-b-[40px] px-6 py-6 text-center shadow-md mb-6">
            <h1 className="text-3xl font-fredoka font-semibold text-white mb-2">
              {currentSlideData.title}
            </h1>
            <p className="text-white/90 font-sourceSans text-base">
              {currentSlideData.subtitle}
            </p>
          </div>
        </div>

        {/* Contenido del slide actual con flechas de navegación */}
        <div className="relative flex flex-col items-center justify-center w-full overflow-hidden">
          {/* Contenedor con flechas y contenido */}
          <div className="w-full flex justify-center items-center gap-2 lg:gap-4 px-4">
            {/* Flecha izquierda - Slide anterior (placeholder invisible cuando no hay) */}
            <div className="w-9 lg:w-10 flex-shrink-0">
              {currentSlide > 0 && (
                <button
                  onClick={handlePrevious}
                  className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all hover:scale-110"
                  aria-label="Slide anterior"
                >
                  <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-vf-pink" />
                </button>
              )}
            </div>

            {/* Contenido del slide */}
            <div className="flex-1 flex justify-center">
              {currentSlideData.content(handleContinue, currentSlide, slides.length)}
            </div>

            {/* Flecha derecha - Siguiente slide (placeholder invisible cuando no hay) */}
            <div className="w-9 lg:w-10 flex-shrink-0">
              {currentSlide < slides.length - 1 && (
                <button
                  onClick={handleNext}
                  className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all hover:scale-110"
                  aria-label="Siguiente slide"
                >
                  <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-vf-pink" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Vista principal con las secciones (desktop y móvil después de intro)
  return (
    <div className="min-h-screen bg-gray-50 p-6 pb-28 lg:pb-32">
      <div className="max-w-3xl mx-auto">
        {/* Secciones principales */}
        <div className="space-y-8">
          {adaptationSections.map((section) => {
            const IconComponent = section.icon;
            
            return (
              <div key={section.id} className="space-y-4">
                {/* Título de la sección con icono */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-full p-3" style={{ backgroundColor: section.bgColor }}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-fredoka font-semibold text-gray-800">
                    {section.title}
                  </h2>
                </div>

                {/* Items de la sección */}
                <div className="space-y-3 ml-14">
                  {section.items.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-md p-4 transition-all duration-300 hover:shadow-xl flex items-center justify-between"
                    >
                      <h3 className="font-sourceSans font-semibold text-gray-800 text-base">
                        {item.title}
                      </h3>
                      <button
                        onClick={() => router.push(item.href)}
                        className="text-white font-sourceSans font-semibold py-2 px-6 rounded-full hover:opacity-90 transition-all shadow-sm flex-shrink-0"
                        style={{ backgroundColor: section.bgColor }}
                      >
                        Ver
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
