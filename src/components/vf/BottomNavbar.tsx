'use client';

import React from 'react';
import { Heart, User } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface BottomNavbarProps {
  activeScreen?: string;
}

export const BottomNavbar: React.FC<BottomNavbarProps> = ({ activeScreen }) => {
  const router = useRouter();
  
  const navItems = [
    { name: 'Adaptación', icon: Heart, href: '/dashboard/adaptation' },
    { name: 'Perfil', icon: User, href: '/dashboard/profile' },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 w-full bg-white flex justify-around items-center py-3 px-2 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] border-t border-gray-100">
      {navItems.map((item) => (
        <button
          key={item.name}
          className={`flex flex-col items-center justify-center p-3 text-xs font-sourceSans transition-all duration-200 rounded-xl ${
            activeScreen === item.name 
              ? 'text-vf-pink bg-vf-pink/10' 
              : 'text-gray-500 hover:text-vf-pink hover:bg-gray-50'
          }`}
          onClick={() => router.push(item.href)}
        >
          <item.icon className={`w-7 h-7 mb-1 ${
            activeScreen === item.name ? 'stroke-[2.5]' : 'stroke-[2]'
          }`} />
          <span className="font-medium">{item.name}</span>
        </button>
      ))}
    </nav>
  );
};

