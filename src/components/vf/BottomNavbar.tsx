'use client';

import React from 'react';
import { Heart, PawPrint, Cat } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

interface BottomNavbarProps {
  activeScreen?: string;
}

export const BottomNavbar: React.FC<BottomNavbarProps> = ({ activeScreen }) => {
  const router = useRouter();
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Adaptación', icon: Heart, href: '/dashboard/adaptation' },
    { name: 'Socialización', icon: PawPrint, href: '/dashboard/socialization' },
    { name: 'Mi proceso', icon: Cat, href: '/dashboard/my-process' },
  ];

  const isActive = (href: string) => {
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed bottom-0 left-0 lg:left-64 right-0 w-full lg:w-auto bg-vf-pink flex justify-around items-center py-3 lg:py-4 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] z-20 rounded-t-[30px]">
      {navItems.map((item) => (
        <button
          key={item.name}
          className={`flex flex-col items-center justify-center p-2 transition-all duration-200 ${
            isActive(item.href)
              ? 'text-white scale-105' 
              : 'text-white/70 hover:text-white hover:scale-105'
          }`}
          onClick={() => router.push(item.href)}
        >
          <item.icon className={`w-7 h-7 lg:mb-1 ${
            isActive(item.href) ? 'stroke-[2.5] fill-white/20' : 'stroke-[2]'
          } ${item.icon === PawPrint ? 'rotate-[-30deg]' : ''}`} />
          <span className="hidden lg:block text-xs font-sourceSans font-medium">{item.name}</span>
        </button>
      ))}
    </nav>
  );
};

