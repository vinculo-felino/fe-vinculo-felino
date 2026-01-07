'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

interface DashboardHeaderProps {
  onMenuClick?: () => void;
  mobileTitle?: string;
  mobileSubtitle?: string;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onMenuClick, mobileTitle, mobileSubtitle }) => {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    { name: 'Adaptación', href: '/dashboard/adaptation' },
    { name: 'Socialización', href: '/dashboard/socialization' },
    { name: 'Mi proceso', href: '/dashboard/my-process' },
  ];

  const isActiveTab = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  // Obtener el título de la sección actual
  const getCurrentSection = () => {
    const currentTab = tabs.find(tab => pathname.startsWith(tab.href));
    return currentTab?.name || 'Dashboard';
  };

  // Obtener subtítulo si existe (para páginas específicas)
  const getSubtitle = () => {
    // Aquí puedes agregar lógica para obtener subtítulos específicos
    // Por ejemplo, si estás en /dashboard/adaptation/safe-place
    const pathParts = pathname.split('/');
    if (pathParts.length > 3) {
      const subSection = pathParts[3];
      // Puedes crear un mapeo de nombres aquí si lo necesitas
      return null; // Por ahora retornamos null
    }
    return null;
  };

  return (
    <>
      {/* Header para Desktop - sin tabs (las tabs ahora están en el footer) */}

      {/* Header para Mobile - botón hamburguesa con título */}
      <header className="lg:hidden bg-vf-pink sticky top-0 z-10 rounded-b-[40px] shadow-md">
        <div className="px-4 py-3">
          {/* Botón Hamburguesa */}
          <div className="flex items-start">
            <button
              onClick={onMenuClick}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Abrir menú"
            >
              <Menu className="w-6 h-6 text-white" />
            </button>
          </div>
          
          {/* Título y subtítulo (si se proporcionan) */}
          {mobileTitle && (
            <div className="text-center pb-4">
              <h1 className="text-3xl font-fredoka font-semibold text-white mb-2">
                {mobileTitle}
              </h1>
              {mobileSubtitle && (
                <p className="text-white/90 font-sourceSans text-lg">
                  {mobileSubtitle}
                </p>
              )}
            </div>
          )}
        </div>
      </header>
    </>
  );
};

