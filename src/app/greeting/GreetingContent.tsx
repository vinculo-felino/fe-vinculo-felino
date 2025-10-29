'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { getCurrentUser, getUserFirstPet } from '@/lib/auth';

export const GreetingContent: React.FC = () => {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [petName, setPetName] = useState('');
  
  useEffect(() => {
    const user = getCurrentUser();
    if (!user) {
      router.push('/auth/login');
      return;
    }
    
    setUserName(user.name);
    
    const pet = getUserFirstPet();
    if (pet) {
      setPetName(pet.name);
    }
  }, [router]);
  
  return (
    <div className="flex flex-col min-h-screen bg-vf-pink font-sourceSans items-center justify-center text-center p-8">
      {/* Logo con borde blanco grande */}
      <div className="mb-12 bg-white p-8 rounded-full shadow-lg">
        <Image 
          src="/images/logo-login.png" 
          alt="Logo Vínculo Felino" 
          width={200}
          height={200}
          className="object-contain"
          priority
        />
      </div>
      
      {/* Título con nombre de usuario */}
      <h1 className="text-5xl text-white font-fredoka font-medium mb-6">
        ¡Hola{userName && `, ${userName.split(' ')[0]}`}!
      </h1>
      
      {/* Subtítulo con nombre de la mascota */}
      <p className="text-2xl text-white font-fredoka font-medium mb-16">
        {petName 
          ? `¿Cómo está hoy ${petName}?` 
          : '¿Listo para comenzar?'}
      </p>
      
      {/* Botón "Comenzar" */}
      <button
        onClick={() => router.push('/dashboard/adaptation')} 
        className="bg-vf-yellow text-vf-purple font-fredoka font-medium text-xl py-4 px-16 rounded-3xl shadow-lg hover:bg-opacity-90 transition-colors"
      >
        Comenzar
      </button>
    </div>
  );
};

