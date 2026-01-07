'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronRight, Menu } from 'lucide-react';
import { useHeaderContext } from '../layout';

export default function AboutPage() {
  const router = useRouter();
  const { setHeaderInfo, openSidebar } = useHeaderContext();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Ocultar el header normal
  useEffect(() => {
    setHeaderInfo(undefined, undefined);
    return () => {
      setHeaderInfo(undefined, undefined);
    };
  }, [setHeaderInfo]);

  const slides = [
    {
      id: 0,
      bgColor: 'bg-vf-pink',
      textColor: 'text-white',
      buttonColor: 'text-vf-pink',
      content: (
        <div className="max-w-sm text-left text-white px-2">
          <h1 className="text-4xl font-fredoka font-bold mb-8 leading-tight">
            ¿Qué es<br />Vínculo felino?
          </h1>
          <p className="text-white/90 font-sourceSans text-lg leading-relaxed">
            Es la aplicación web que te acompañará en el proceso de adaptación de tu compañero gatuno a su nuevo hogar.
          </p>
        </div>
      ),
    },
    {
      id: 1,
      bgColor: 'bg-vf-yellow',
      textColor: 'text-vf-pink',
      buttonColor: 'text-vf-yellow',
      content: (
        <div className="max-w-sm text-left px-2">
          <h1 className="text-4xl font-fredoka font-bold mb-8 leading-tight text-vf-pink">
            Te<br />ayudará a ...
          </h1>
          <div className="space-y-6 text-vf-pink/80 font-sourceSans text-lg">
            <p className="leading-relaxed">
              comprender sus<br />necesidades emocionales y<br />fisiológicas
            </p>
            <p className="leading-relaxed">
              interpretar su<br />comportamiento natural
            </p>
            <p className="leading-relaxed">
              crearle un ambiente seguro y<br />cómodo
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      bgColor: 'bg-vf-turquoise',
      textColor: 'text-white',
      buttonColor: 'text-vf-turquoise',
      content: (
        <div className="max-w-sm text-left px-2">
          <h1 className="text-3xl font-fredoka font-bold mb-6 leading-tight text-vf-yellow italic">
            ¿Por qué es<br />importante<br />conocer a
          </h1>
          <h2 className="text-4xl font-fredoka font-bold mb-6 text-vf-yellow">
            tu gato?
          </h2>
          <p className="text-white font-sourceSans text-lg leading-relaxed">
            Todos los animales requieren adaptaciones distintas según su especie y personalidad.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      bgColor: 'bg-vf-turquoise',
      textColor: 'text-white',
      buttonColor: 'text-vf-turquoise',
      content: (
        <div className="max-w-sm text-left px-2">
          <p className="text-white font-sourceSans text-lg leading-relaxed mb-8">
            Los gatos aún conservan conductas heredadas de sus antepasados felinos, lo que lo que influye en cómo exploran, se relacionan y responden a su entorno. Entender su naturaleza te ayudará a:
          </p>
          <div className="space-y-6 text-white font-sourceSans text-lg">
            <p className="leading-relaxed font-medium">
              Brindar sus necesidades<br />correctamente
            </p>
            <p className="leading-relaxed font-medium">
              Fortelecer su vínculo<br />entre ambos
            </p>
            <p className="leading-relaxed font-medium">
              Garantizar su bienestar
            </p>
          </div>
        </div>
      ),
    },
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      // Última slide, ir a adaptación
      router.push('/dashboard/adaptation');
    }
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className={`fixed inset-0 lg:left-64 ${currentSlideData.bgColor} flex flex-col z-30`}>
      {/* Header con menú hamburguesa - solo uno */}
      <header className="lg:hidden px-4 py-3">
        <button
          onClick={openSidebar}
          className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Abrir menú"
        >
          <Menu className="w-6 h-6 text-white" />
        </button>
      </header>

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col justify-center px-8">
        {currentSlideData.content}
      </div>

      {/* Indicadores y botón - más arriba del footer */}
      <div className="flex flex-col items-center gap-4 pb-8">
        {/* Indicadores de slide */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Botón - flecha o "Ir al módulo 1" en última slide */}
        {currentSlide === slides.length - 1 ? (
          <button
            onClick={handleNext}
            className="bg-white text-vf-turquoise font-fredoka font-medium text-lg py-3 px-10 rounded-full shadow-lg hover:scale-105 transition-all duration-200 active:scale-95"
          >
            Ir al módulo 1
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="bg-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-200 active:scale-95"
            aria-label="Continuar"
          >
            <ChevronRight className={`w-8 h-8 ${currentSlideData.buttonColor}`} />
          </button>
        )}
      </div>
    </div>
  );
}
