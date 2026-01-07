'use client';

import React, { useState } from 'react';
import { Heart, User, LogOut, UserCircle, Info, Settings, HelpCircle, X } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { logout } from '@/lib/auth';

interface SidebarProps {
  activeScreen?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeScreen, isOpen = false, onClose }) => {
  const router = useRouter();
  
  const navItems = [
    { name: 'Datos de usuario', icon: UserCircle, href: '/dashboard/user-data' },
    { name: 'Sobre Vínculo Felino', icon: Info, href: '/dashboard/about' },
    { name: 'Configuración', icon: Settings, href: '/dashboard/settings' },
    { name: 'F&Q', icon: HelpCircle, href: '/dashboard/faq' },
  ];

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const handleNavigation = (href: string) => {
    router.push(href);
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {/* Overlay para móvil - solo visible cuando el menú está abierto */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar Desktop (siempre visible en desktop) */}
      <aside className="hidden lg:flex lg:flex-col w-64 bg-white min-h-screen p-6 fixed border-r border-gray-200 shadow-sm z-30">
        {/* Logo y título */}
        <div className="flex items-center gap-3 mb-10 pb-6 border-b border-gray-200">
          <Image 
            src="/images/logo-login.png" 
            alt="Logo Vínculo Felino" 
            width={50}
            height={50}
            className="object-contain"
          />
          <h1 className="text-lg text-vf-pink font-fredoka font-medium">Vínculo Felino</h1>
        </div>
        
        {/* Navegación principal */}
        <nav className="flex-grow">
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => router.push(item.href)}
                  className={`flex items-center gap-3 w-full p-3 rounded-lg text-base font-sourceSans font-semibold transition-colors ${
                    activeScreen === item.name
                      ? 'bg-vf-pink/10 text-vf-pink'
                      : 'text-vf-pink hover:bg-vf-pink/5'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Botón de Cerrar Sesión (empujado al fondo) */}
        <div className="mt-auto pt-6 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full p-3 rounded-lg text-base font-sourceSans font-semibold text-vf-pink hover:bg-vf-pink/5 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Cerrar sesión
          </button>
        </div>
      </aside>

      {/* Sidebar Mobile (drawer deslizable desde la izquierda) */}
      <aside 
        className={`lg:hidden fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
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
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Cerrar menú"
          >
            <X className="w-6 h-6 text-vf-pink" />
          </button>
        </div>
        
        {/* Navegación principal móvil */}
        <nav className="flex-grow p-6 pt-8">
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleNavigation(item.href)}
                  className={`flex items-center gap-3 w-full p-3 rounded-lg text-base font-sourceSans font-semibold transition-colors ${
                    activeScreen === item.name
                      ? 'bg-vf-pink/10 text-vf-pink'
                      : 'text-vf-pink hover:bg-vf-pink/5'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Botón de Cerrar Sesión (móvil) */}
        <div className="absolute bottom-0 left-0 right-0 p-6 pt-4 border-t border-gray-200 bg-white">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full p-3 rounded-lg text-base font-sourceSans font-semibold text-vf-pink hover:bg-vf-pink/5 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Cerrar sesión
          </button>
        </div>
      </aside>
    </>
  );
};

