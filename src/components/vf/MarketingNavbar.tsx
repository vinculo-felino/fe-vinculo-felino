'use client';

import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { VFCatLogo } from './VFCatLogo';
import { useRouter } from 'next/navigation';

export const MarketingNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  
  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Sobre nosotros', href: '/about' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button onClick={() => router.push('/')} className="flex items-center gap-2 flex-shrink-0">
            <VFCatLogo size={32} />
            <span className="font-fredoka text-xl text-gray-800">Vínculo Felino</span>
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map(link => (
              <button 
                key={link.name} 
                onClick={() => router.push(link.href)} 
                className="font-arialRounded text-gray-600 hover:text-vf-pink transition-colors"
              >
                {link.name}
              </button>
            ))}
            {/* Botón de Registro (estilo de botón) */}
            <button 
              onClick={() => router.push('/auth/register')} 
              className="font-arialRounded font-bold bg-vf-yellow text-vf-purple py-2 px-4 rounded-lg hover:bg-opacity-90 hover:text-vf-pink transition-colors"
            >
              Registro
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-white shadow-lg py-2 z-50`}>
        <div className="flex flex-col px-4">
          {navLinks.map(link => (
            <button 
              key={link.name} 
              onClick={() => { router.push(link.href); setIsMenuOpen(false); }} 
              className="py-2 font-arialRounded text-gray-600 hover:text-vf-pink text-left"
            >
              {link.name}
            </button>
          ))}
          {/* Botón de Registro (Móvil) */}
          <button 
            onClick={() => { router.push('/auth/register'); setIsMenuOpen(false); }} 
            className="my-2 py-2 px-4 rounded-lg font-arialRounded font-bold bg-vf-yellow text-vf-purple text-center w-full hover:bg-opacity-90 hover:text-vf-pink transition-colors"
          >
            Registro
          </button>
        </div>
      </div>
    </nav>
  );
};

