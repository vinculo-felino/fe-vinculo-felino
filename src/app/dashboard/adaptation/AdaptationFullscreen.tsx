'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { Sidebar } from '@/components/vf/Sidebar';
import { Heart, PawPrint, Cat } from 'lucide-react';

export const AdaptationFullscreen = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Función para avanzar al siguiente slide
  const handleContinue = () => {
    if (currentSlide < 2) { // Tenemos 3 slides (0, 1 y 2)
      setCurrentSlide(currentSlide + 1);
    } else {
      // Después del último slide, mostrar el menú
      setShowMenu(true);
    }
  };

  const slides = [
    {
      id: 0,
      title: 'Módulo 1',
      subtitle: 'Ambientación',
      description: '"¡Llegando a casa!"',
      content: () => (
        <div className="w-full h-full flex flex-col justify-center items-center">
          {/* Contenedor principal con todo centrado */}
          <div className="flex flex-col items-center justify-center max-w-md w-full px-6">
            {/* Título "Módulo 1" */}
            <p className="text-vf-yellow/80 font-sourceSans text-lg mb-2 text-center">
              Módulo 1
            </p>

            {/* Título principal "Ambientación" en amarillo */}
            <h2 className="text-vf-yellow font-fredoka font-bold text-5xl lg:text-6xl mb-3 text-center">
              Ambientación
            </h2>

            {/* Subtítulo "¡Llegando a casa!" */}
            <p className="text-white font-sourceSans text-lg mb-12 text-center">
              "¡Llegando a casa!"
            </p>

            {/* Imagen del gato - presentación adaptación */}
            <div className="flex justify-center items-center mb-12">
              <Image 
                src="/images/adaptacion presentacion.png"
                alt="Gato descansando"
                width={320}
                height={320}
                className="object-contain max-w-full"
                priority
              />
            </div>

            {/* Indicadores de puntos */}
            <div className="flex gap-2 mb-6">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-white'
                      : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      title: 'Módulo 1',
      subtitle: 'Ambientación',
      description: 'Proceso de adaptación',
      content: () => (
        <div className="w-full h-full flex flex-col justify-center items-center px-6">
          {/* Contenedor principal */}
          <div className="flex flex-col items-center justify-center max-w-md w-full">
            {/* Texto en burbuja amarilla */}
            <div className="relative bg-vf-yellow rounded-[40px] px-8 py-6 mb-8 shadow-lg">
              <p className="text-vf-purple font-sourceSans text-center text-base leading-relaxed">
                El proceso de adaptación de todo gato requiere paciencia, amor y comprensión.
              </p>
              {/* Pequeña punta de la burbuja */}
              <div className="absolute -bottom-3 right-20 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-vf-yellow"></div>
            </div>

            {/* Imagen del gato descansando */}
            <div className="flex justify-center items-center mb-12">
              <Image 
                src="/images/adaptacion -2.png"
                alt="Gato descansando"
                width={280}
                height={280}
                className="object-contain max-w-full"
              />
            </div>

            {/* Indicadores de puntos */}
            <div className="flex gap-2 mb-6">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-vf-pink'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: 'Módulo 1',
      subtitle: 'Ambientación',
      description: 'Crear un entorno seguro',
      content: () => (
        <div className="w-full h-full flex flex-col justify-center items-center px-6">
          {/* Contenedor principal */}
          <div className="flex flex-col items-center justify-center max-w-md w-full">
            {/* Imagen del gato rosa con corazón */}
            <div className="flex justify-center items-center mb-8">
              <Image 
                src="/images/adaptacion - 3.png"
                alt="Gato feliz"
                width={300}
                height={300}
                className="object-contain max-w-full"
              />
            </div>

            {/* Texto en burbuja amarilla */}
            <div className="relative bg-vf-yellow rounded-[40px] px-8 py-6 mb-8 shadow-lg max-w-sm">
              <p className="text-vf-purple font-sourceSans text-center text-base leading-relaxed">
                Aquí aprenderás cómo crear un entorno seguro para tu nuevo compañero.
              </p>
            </div>

            {/* Indicadores de puntos */}
            <div className="flex gap-2 mb-6">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-vf-pink'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      ),
    },
  ];

  const currentSlideData = slides[currentSlide];

  // Secciones del menú de adaptación
  const menuSections = [
    {
      id: 'distribution',
      title: 'Distribución de espacios',
      image: '/images/plato.png',
      href: '/dashboard/adaptation/space-distribution',
    },
    {
      id: 'routines',
      title: 'Creación de rutinas',
      image: '/images/reloj.png',
      href: '/dashboard/adaptation/routines',
    },
    {
      id: 'respect',
      title: 'Respetar sus tiempos',
      image: '/images/corazon.png',
      href: '/dashboard/adaptation/respect-time',
    },
  ];

  // Si se debe mostrar el menú
  if (showMenu) {
    const navItems = [
      { name: 'Adaptación', icon: Heart, href: '/dashboard/adaptation' },
      { name: 'Socialización', icon: PawPrint, href: '/dashboard/socialization' },
      { name: 'Mi proceso', icon: Cat, href: '/dashboard/my-process' },
    ];

    return (
      <div className="relative">
        <div className="fixed inset-0 bg-vf-yellow overflow-auto z-30">
          {/* Botón de menú hamburguesa */}
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="absolute top-6 left-6 z-50 text-vf-pink hover:text-vf-pink/80 transition-colors bg-white rounded-full p-2 shadow-lg hover:shadow-xl active:scale-95"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

        {/* Contenido del menú */}
        <div className="flex flex-col items-center justify-center min-h-screen px-6 py-20">
          <div className="w-full max-w-md space-y-6">
            {menuSections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => router.push(section.href)}
                className="w-full h-32 bg-white rounded-[30px] hover:scale-[1.02] transition-all duration-300 p-6 flex items-center justify-between relative overflow-hidden"
                style={{
                  boxShadow: '0 8px 0 0 #b15a81'
                }}
              >
                <div className="flex-1">
                  <h3 className="text-vf-purple font-fredoka font-semibold text-xl text-left leading-tight">
                    {section.title}
                  </h3>
                </div>
                {section.image && (
                  <div className="ml-4 flex-shrink-0">
                    <Image
                      src={section.image}
                      alt={section.title}
                      width={110}
                      height={110}
                      className="object-contain"
                    />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

          {/* Barra inferior con diseño original */}
          <nav className="fixed bottom-0 left-0 right-0 bg-vf-pink flex justify-around items-center py-3 lg:py-4 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] z-20 rounded-t-[30px]">
            {navItems.map((item) => (
              <button
                key={item.name}
                className={`flex flex-col items-center justify-center p-2 transition-all duration-200 ${
                  item.href === '/dashboard/adaptation'
                    ? 'text-white scale-105' 
                    : 'text-white/70 hover:text-white hover:scale-105'
                }`}
                onClick={() => router.push(item.href)}
              >
                <item.icon className={`w-7 h-7 lg:mb-1 ${
                  item.href === '/dashboard/adaptation' ? 'stroke-[2.5] fill-white/20' : 'stroke-[2]'
                } ${item.icon === PawPrint ? 'rotate-[-30deg]' : ''}`} />
                <span className="hidden lg:block text-xs font-sourceSans font-medium">{item.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Sidebar con diseño original - renderizado al final para tener z-index correcto */}
        {/* Wrapper para ocultar la versión desktop del sidebar */}
        <div className="lg:hidden">
          <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        </div>
        
        {/* Versión móvil del sidebar que también se muestra en desktop */}
        {isSidebarOpen && (
          <>
            {/* Overlay oscuro */}
            <div 
              className="hidden lg:block fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsSidebarOpen(false)}
            />
            
            {/* Sidebar para desktop (cuando está abierto) */}
            <aside className="hidden lg:block fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-50">
              {/* Header con botón de cerrar */}
              <div className="flex items-center justify-between p-6 pb-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <Image 
                    src="/images/logo-login.png" 
                    alt="Logo Vínculo Felino" 
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                  <h1 className="text-lg text-vf-pink font-fredoka font-medium">Vínculo Felino</h1>
                </div>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Cerrar menú"
                >
                  <svg className="w-6 h-6 text-vf-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Navegación principal */}
              <nav className="flex-grow p-6 pt-8">
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => {
                        setIsSidebarOpen(false);
                        router.push('/dashboard/user-data');
                      }}
                      className="flex items-center gap-3 w-full p-3 rounded-lg text-base font-sourceSans font-semibold text-vf-pink hover:bg-vf-pink/5 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Datos de usuario
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setIsSidebarOpen(false);
                        router.push('/dashboard/about');
                      }}
                      className="flex items-center gap-3 w-full p-3 rounded-lg text-base font-sourceSans font-semibold text-vf-pink hover:bg-vf-pink/5 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Sobre Vínculo Felino
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setIsSidebarOpen(false);
                        router.push('/dashboard/settings');
                      }}
                      className="flex items-center gap-3 w-full p-3 rounded-lg text-base font-sourceSans font-semibold text-vf-pink hover:bg-vf-pink/5 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Configuración
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setIsSidebarOpen(false);
                        router.push('/dashboard/faq');
                      }}
                      className="flex items-center gap-3 w-full p-3 rounded-lg text-base font-sourceSans font-semibold text-vf-pink hover:bg-vf-pink/5 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      F&Q
                    </button>
                  </li>
                </ul>
              </nav>
              
              {/* Botón de Cerrar Sesión */}
              <div className="absolute bottom-0 left-0 right-0 p-6 pt-4 border-t border-gray-200 bg-white">
                <button
                  onClick={() => {
                    // Aquí deberías llamar a tu función de logout
                    router.push('/');
                  }}
                  className="flex items-center gap-3 w-full p-3 rounded-lg text-base font-sourceSans font-semibold text-vf-pink hover:bg-vf-pink/5 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Cerrar sesión
                </button>
              </div>
            </aside>
          </>
        )}
      </div>
    );
  }

  // Mostrar slides
  return (
    <div className={`fixed inset-0 flex flex-col items-center justify-center overflow-hidden z-50 ${
      currentSlide === 0 
        ? 'bg-gradient-to-b from-vf-pink via-vf-pink to-vf-pink/90' 
        : 'bg-white'
    }`}>
      {/* Contenido del slide actual */}
      {currentSlideData.content()}

      {/* Botón Continuar en la parte inferior */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <button
          onClick={handleContinue}
          className={`font-fredoka font-semibold text-lg py-3 px-16 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all active:scale-95 ${
            currentSlide === 0
              ? 'bg-white text-vf-pink'
              : currentSlide === 2
              ? 'bg-vf-turquoise text-white'
              : 'bg-vf-pink text-white'
          }`}
        >
          {currentSlide === 2 ? 'Comenzar' : 'Continuar'}
        </button>
      </div>
    </div>
  );
};

