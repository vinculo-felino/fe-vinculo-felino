import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => (
  <footer className="bg-white border-t border-gray-100 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] w-full">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Sección Superior: Redes Sociales */}
      <div className="flex flex-col items-center md:items-start mb-6">
        <h4 className="font-arialRounded text-gray-800 font-bold mb-2">Mantente conectado</h4>
        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-vf-pink transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-vf-pink transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Sección Inferior: Copyright y Enlaces */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm font-nunito text-gray-600">
        <p className="mb-2 md:mb-0 text-center md:text-left">
          © 2025 Vínculo Felino. Todos los derechos reservados.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline hover:text-vf-pink transition-colors">Términos y Condiciones</a>
          <a href="#" className="hover:underline hover:text-vf-pink transition-colors">Política de Privacidad</a>
        </div>
      </div>
    </div>
  </footer>
);

