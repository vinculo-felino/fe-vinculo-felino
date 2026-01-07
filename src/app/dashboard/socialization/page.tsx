'use client';

import { useRouter } from 'next/navigation';
import { Heart, Smile, BookOpen } from 'lucide-react';

export default function SocializationPage() {
  const router = useRouter();

  const contentItems = [
    {
      id: 1,
      title: '¿Cómo interactuar conmigo?',
      description: 'Aprende a interpretar posturas, cola, orejas y vocalizaciones para responder mejor a sus necesidades.',
      icon: Heart,
      href: '/dashboard/socialization/interact',
    },
    {
      id: 2,
      title: 'Mi lenguaje corporal',
      description: 'Rutinas y enriquecimiento ambiental para reducir estrés y potenciar su seguridad.',
      icon: Smile,
      href: '/dashboard/socialization/body-language',
    },
    {
      id: 3,
      title: '¿Cómo hacerme cariño?',
      description: 'Guías cortas para adopción, presentación a otros animales y resolución de hábitos.',
      icon: BookOpen,
      href: '/dashboard/socialization/affection',
    },
    {
      id: 4,
      title: 'Refuerzo positivo',
      description: 'Técnicas efectivas para reforzar comportamientos positivos en tu gato.',
      icon: Heart,
      href: '/dashboard/socialization/positive-reinforcement',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Lista de tarjetas a lo largo */}
        <div className="max-w-3xl mx-auto space-y-6">
          {contentItems.map((item) => {
            const IconComponent = item.icon;
            
            return (
              <div key={item.id} className="rounded-2xl shadow-md p-6 transition-all duration-300 hover:shadow-xl" style={{ backgroundColor: '#fff7b3' }}>
                <div className="flex items-start gap-4">
                  {/* Icono */}
                  <div className="rounded-full p-4 flex-shrink-0" style={{ backgroundColor: '#ff99ca' }}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  {/* Contenido */}
                  <div className="flex-grow flex flex-col">
                    <h3 className="font-fredoka font-medium text-xl mb-2" style={{ color: '#b15a81' }}>
                      {item.title}
                    </h3>
                    <p className="font-sourceSans text-sm leading-relaxed mb-4" style={{ color: '#b15a81' }}>
                      {item.description}
                    </p>
                    
                    {/* Botón Ver alineado a la derecha */}
                    <div className="flex justify-end mt-auto">
                      <button
                        onClick={() => router.push(item.href)}
                        className="text-white font-sourceSans font-semibold py-2 px-6 rounded-full hover:opacity-90 transition-all shadow-sm"
                        style={{ backgroundColor: '#ff99ca' }}
                      >
                        Ver
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

