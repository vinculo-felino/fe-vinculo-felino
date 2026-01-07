'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Trash2, KeyRound } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { AddPetModal } from '@/components/vf/AddPetModal';
import { getCurrentUser, getPets, deletePet, type Pet } from '@/lib/auth';
import { useHeaderContext } from '../layout';

export default function UserDataPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pets, setPets] = useState<Pet[]>([]);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const router = useRouter();
  const { setHeaderInfo } = useHeaderContext();

  // Establecer el título del header
  useEffect(() => {
    setHeaderInfo('Datos de usuario', '');
    return () => {
      setHeaderInfo(undefined, undefined);
    };
  }, [setHeaderInfo]);

  const loadPets = () => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      router.push('/auth/login');
      return;
    }
    
    setUser(currentUser);
    const userPets = getPets(currentUser.id);
    setPets(userPets);
  };

  useEffect(() => {
    loadPets();
  }, []);

  const handleDeletePet = (petId: string) => {
    if (confirm('¿Estás seguro de que quieres eliminar esta mascota?')) {
      deletePet(petId);
      loadPets();
    }
  };

  return (
    <div className="min-h-screen bg-white p-6 pb-24 lg:pb-6">
      {/* Contenedor centrado */}
      <div className="max-w-3xl mx-auto">
        {/* Información del Usuario */}
        {user && (
          <div className="mb-8 p-6 bg-vf-yellow/30 rounded-3xl shadow-md">
            <h2 className="font-fredoka text-xl font-medium text-vf-purple mb-4">Mi Información</h2>
            <div className="space-y-2 font-sourceSans">
              <p className="text-vf-purple text-base">
                <span className="font-bold">Nombre:</span> {user.name}
              </p>
              <p className="text-vf-purple text-base">
                <span className="font-bold">Email:</span> {user.email}
              </p>
              <button
                className="flex items-center gap-2 text-vf-pink text-sm font-medium mt-3 hover:text-vf-pink/80 transition-colors"
                onClick={() => alert('Funcionalidad de cambio de contraseña en desarrollo')}
              >
                <KeyRound className="w-4 h-4" />
                Cambiar contraseña
              </button>
            </div>
          </div>
        )}

        {/* Sección de Mascotas */}
        <div className="mb-8">
          <h2 className="font-fredoka text-2xl font-medium text-vf-purple mb-6 text-center">
            Mis Mascotas
          </h2>
          
          {pets.length === 0 ? (
            <div className="bg-vf-yellow/30 p-6 rounded-3xl text-center">
              <p className="font-sourceSans text-gray-700 text-base">
                Aún no has agregado ninguna mascota. ¡Añade a tu primer gatito!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {pets.map((pet) => (
                <div 
                  key={pet.id} 
                  className="p-5 bg-vf-yellow/30 rounded-3xl shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-grow">
                      <h3 className="font-fredoka text-xl text-vf-purple mb-2 font-bold">{pet.name}</h3>
                      <div className="space-y-1 font-sourceSans text-vf-purple text-sm">
                        {pet.age && (
                          <p>
                            <span className="font-bold">Edad:</span> {pet.age} años
                          </p>
                        )}
                        {pet.sex && (
                          <p>
                            <span className="font-bold">Sexo:</span> {pet.sex}
                          </p>
                        )}
                        {pet.preferences && (
                          <p className="mt-1">
                            <span className="font-bold">Preferencias:</span> {pet.preferences}
                          </p>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeletePet(pet.id)}
                      className="ml-4 p-2 text-red-400 hover:text-red-600 transition-colors"
                      aria-label="Eliminar mascota"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Botón Añadir Mascota */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-vf-pink text-white font-fredoka font-medium text-lg py-3 px-10 rounded-full shadow-md hover:bg-vf-pink/90 transition-colors flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Añadir Mascota
          </button>
        </div>
      </div>

      {/* Modal */}
      <AddPetModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        onSuccess={loadPets}
      />
    </div>
  );
}

