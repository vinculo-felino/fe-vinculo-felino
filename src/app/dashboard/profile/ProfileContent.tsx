'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Trash2, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { AddPetModal } from '@/components/vf/AddPetModal';
import { getCurrentUser, getPets, deletePet, logout, type Pet } from '@/lib/auth';

export const ProfileContent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pets, setPets] = useState<Pet[]>([]);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const router = useRouter();

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

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-white p-6 pb-6 lg:pb-6">
      {/* Header con fondo rosa redondeado - Igual que Adaptación */}
      <div className="bg-gradient-to-b from-vf-pink to-[#ffb4db] rounded-[2.5rem] rounded-t-none p-8 mb-8 shadow-lg -mx-6 -mt-6 pt-12">
        {/* Título */}
        <h1 className="text-4xl font-fredoka text-vf-yellow text-center mb-2">
          Perfil
        </h1>
        <p className="text-lg font-arialRounded text-white text-center">
          Mi información y mis mascotas
        </p>
      </div>

      {/* Contenedor centrado */}
      <div className="max-w-3xl mx-auto px-8">
        {/* Información del Usuario */}
        {user && (
          <div className="mb-8 p-6 bg-gradient-to-br from-vf-pink/10 to-vf-turquoise/10 rounded-[2rem] shadow-md border-2 border-vf-pink/20">
            <h2 className="font-fredoka text-2xl font-medium text-vf-purple mb-4">Mi Información</h2>
            <div className="space-y-2 font-sourceSans">
              <p className="text-gray-700 text-lg">
                <strong className="text-vf-purple">Nombre:</strong> {user.name}
              </p>
              <p className="text-gray-700 text-lg">
                <strong className="text-vf-purple">Email:</strong> {user.email}
              </p>
            </div>
          </div>
        )}

        {/* Sección de Mascotas */}
        <div className="mb-8">
          <h2 className="font-fredoka text-3xl font-medium text-vf-purple mb-6 text-center">
            Mis Mascotas
          </h2>
          
          {pets.length === 0 ? (
            <div className="bg-vf-yellow/30 p-8 rounded-[2rem] text-center">
              <p className="font-sourceSans text-gray-700 text-lg">
                Aún no has agregado ninguna mascota. ¡Añade a tu primer gatito!
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {pets.map((pet) => (
                <div 
                  key={pet.id} 
                  className="p-6 bg-vf-yellow rounded-[2rem] shadow-lg hover:shadow-xl transition-all border-2 border-vf-yellow"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-grow">
                      <h3 className="font-fredoka text-2xl text-vf-purple mb-3">{pet.name}</h3>
                      <div className="space-y-1 font-sourceSans text-gray-700">
                        {pet.age && (
                          <p className="text-base">
                            <strong className="text-vf-purple">Edad:</strong> {pet.age} años
                          </p>
                        )}
                        {pet.sex && (
                          <p className="text-base">
                            <strong className="text-vf-purple">Sexo:</strong> {pet.sex}
                          </p>
                        )}
                        {pet.preferences && (
                          <p className="text-base mt-2">
                            <strong className="text-vf-purple">Preferencias:</strong> {pet.preferences}
                          </p>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeletePet(pet.id)}
                      className="ml-4 p-2 text-red-500 hover:text-white hover:bg-red-500 rounded-full transition-all"
                      aria-label="Eliminar mascota"
                    >
                      <Trash2 className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Botón Añadir Mascota - Desktop */}
        <div className="hidden lg:flex justify-center mb-6">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-vf-pink text-white font-fredoka font-medium text-xl py-4 px-12 rounded-3xl shadow-lg hover:bg-opacity-90 transition-colors flex items-center gap-3"
          >
            <Plus className="w-6 h-6" />
            Añadir Mascota
          </button>
        </div>

        {/* Botón de Cerrar Sesión - Solo Móvil */}
        <div className="lg:hidden mt-8">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-3xl bg-red-500 text-white font-fredoka font-medium text-lg hover:bg-red-600 transition-colors shadow-lg"
          >
            <LogOut className="w-6 h-6" />
            Cerrar sesión
          </button>
        </div>
      </div>

      {/* Botón Flotante Añadir Mascota - Solo Móvil */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="lg:hidden fixed bottom-20 right-6 bg-vf-pink text-white p-5 rounded-full shadow-2xl hover:bg-opacity-90 transition-all z-30 hover:scale-110"
        aria-label="Añadir mascota"
      >
        <Plus className="w-7 h-7" />
      </button>

      {/* Modal */}
      <AddPetModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        onSuccess={loadPets}
      />
    </div>
  );
};

