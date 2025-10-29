'use client';

import React from 'react';
import { Heart, User, LogOut } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { logout } from '@/lib/auth';

interface SidebarProps {
  activeScreen?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeScreen }) => {
  const router = useRouter();
  
  const navItems = [
    { name: 'Adaptación', icon: Heart, href: '/dashboard/adaptation' },
    { name: 'Perfil', icon: User, href: '/dashboard/profile' },
  ];

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <aside className="hidden lg:block w-64 bg-vf-pink min-h-screen p-6 fixed flex flex-col">
      {/* Contenido principal del sidebar */}
      <div>
        <div className="flex items-center gap-3 mb-10">
          <div className="bg-white p-2 rounded-full shadow-md">
            <Image 
              src="/images/logo-login.png" 
              alt="Logo Vínculo Felino" 
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
          <h1 className="text-xl text-white font-fredoka font-medium">Vínculo Felino</h1>
        </div>
        <nav>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => router.push(item.href)}
                  className={`flex items-center gap-3 w-full p-3 rounded-lg text-lg font-arialRounded transition-colors ${
                    activeScreen === item.name
                      ? 'bg-white text-vf-purple'
                      : 'text-white hover:bg-white/30'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      {/* Botón de Cerrar Sesión (empujado al fondo) */}
      <div className="mt-auto">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full p-3 rounded-lg text-lg font-arialRounded text-white hover:bg-white/30 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
};

