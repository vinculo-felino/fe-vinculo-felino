'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { PrimaryButton } from './PrimaryButton';
import { addPet } from '@/lib/auth';

interface AddPetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export const AddPetModal: React.FC<AddPetModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState<'macho' | 'hembra' | ''>('');
  const [preferences, setPreferences] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('El nombre es requerido');
      return;
    }

    const result = addPet({
      name: name.trim(),
      age: age ? parseInt(age) : undefined,
      sex: sex || undefined,
      preferences: preferences.trim() || undefined,
    });

    if (result.success) {
      // Limpiar formulario
      setName('');
      setAge('');
      setSex('');
      setPreferences('');
      onSuccess?.();
      onClose();
    } else {
      setError('Error al agregar la mascota');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl p-6 shadow-2xl w-full max-w-md relative" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-fredoka text-gray-800 mb-6">Añadir Nueva Mascota</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium font-nunito text-gray-700 mb-1">Nombre *</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg font-nunito focus:outline-none focus:ring-2 focus:ring-vf-pink" 
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium font-nunito text-gray-700 mb-1">Edad (años)</label>
            <input 
              type="number" 
              value={age}
              onChange={(e) => setAge(e.target.value)}
              min="0"
              className="w-full p-2 border border-gray-300 rounded-lg font-nunito focus:outline-none focus:ring-2 focus:ring-vf-pink" 
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium font-nunito text-gray-700 mb-1">Sexo</label>
            <div className="flex gap-4 font-nunito">
              <label className="flex items-center">
                <input 
                  type="radio" 
                  name="sexo" 
                  value="macho"
                  checked={sex === 'macho'}
                  onChange={(e) => setSex(e.target.value as 'macho')}
                  className="mr-2 text-vf-pink focus:ring-vf-pink" 
                /> Macho
              </label>
              <label className="flex items-center">
                <input 
                  type="radio" 
                  name="sexo" 
                  value="hembra"
                  checked={sex === 'hembra'}
                  onChange={(e) => setSex(e.target.value as 'hembra')}
                  className="mr-2 text-vf-pink focus:ring-vf-pink" 
                /> Hembra
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium font-nunito text-gray-700 mb-1">Preferencias</label>
            <textarea 
              value={preferences}
              onChange={(e) => setPreferences(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg font-nunito focus:outline-none focus:ring-2 focus:ring-vf-pink" 
              rows={3}
              placeholder="Ej: le gusta el pollo, duerme en..."
            />
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}
          
          <div className="flex justify-end gap-3 mt-6">
            <button 
              type="button" 
              onClick={onClose} 
              className="py-2 px-6 rounded-lg font-arialRounded text-gray-600 hover:bg-gray-100 transition-colors"
            >
              Cancelar
            </button>
            <PrimaryButton type="submit" className="py-2 px-6 text-base">
              Guardar
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
};

