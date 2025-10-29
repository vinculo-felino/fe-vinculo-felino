'use client';

// Sistema de autenticación simple usando localStorage
// Para MVP - No usar en producción

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}

export interface Pet {
  id: string;
  name: string;
  age?: number;
  sex?: 'macho' | 'hembra';
  preferences?: string;
  userId: string;
}

const USERS_KEY = 'vf_users';
const CURRENT_USER_KEY = 'vf_current_user';
const PETS_KEY = 'vf_pets';

// ============================================
// FUNCIONES DE USUARIOS
// ============================================

export const getUsers = (): User[] => {
  if (typeof window === 'undefined') return [];
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
};

const saveUsers = (users: User[]) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const getCurrentUser = (): User | null => {
  if (typeof window === 'undefined') return null;
  const user = sessionStorage.getItem(CURRENT_USER_KEY);
  return user ? JSON.parse(user) : null;
};

const setCurrentUser = (user: User | null) => {
  if (typeof window === 'undefined') return;
  if (user) {
    sessionStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  } else {
    sessionStorage.removeItem(CURRENT_USER_KEY);
  }
};

export const register = (email: string, password: string, name: string): { success: boolean; error?: string; user?: User } => {
  const users = getUsers();
  
  // Verificar si el email ya existe
  if (users.find(u => u.email === email)) {
    return { success: false, error: 'El correo electrónico ya está registrado' };
  }

  // Crear nuevo usuario
  const newUser: User = {
    id: crypto.randomUUID(),
    email,
    name,
    createdAt: new Date().toISOString(),
  };

  // Guardar contraseña de forma simple (solo para MVP)
  localStorage.setItem(`vf_pwd_${email}`, password);

  users.push(newUser);
  saveUsers(users);
  setCurrentUser(newUser);

  return { success: true, user: newUser };
};

export const login = (email: string, password: string): { success: boolean; error?: string; user?: User } => {
  const users = getUsers();
  const user = users.find(u => u.email === email);

  if (!user) {
    return { success: false, error: 'Usuario no encontrado' };
  }

  const storedPassword = localStorage.getItem(`vf_pwd_${email}`);
  
  if (storedPassword !== password) {
    return { success: false, error: 'Contraseña incorrecta' };
  }

  setCurrentUser(user);
  return { success: true, user };
};

export const logout = () => {
  setCurrentUser(null);
};

export const isAuthenticated = (): boolean => {
  return getCurrentUser() !== null;
};

// ============================================
// FUNCIONES DE MASCOTAS
// ============================================

export const getPets = (userId?: string): Pet[] => {
  if (typeof window === 'undefined') return [];
  const pets = localStorage.getItem(PETS_KEY);
  const allPets: Pet[] = pets ? JSON.parse(pets) : [];
  
  if (userId) {
    return allPets.filter(pet => pet.userId === userId);
  }
  
  return allPets;
};

const savePets = (pets: Pet[]) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(PETS_KEY, JSON.stringify(pets));
};

export const addPet = (pet: Omit<Pet, 'id' | 'userId'>): { success: boolean; pet?: Pet } => {
  const currentUser = getCurrentUser();
  
  if (!currentUser) {
    return { success: false };
  }

  const pets = getPets();
  const newPet: Pet = {
    ...pet,
    id: crypto.randomUUID(),
    userId: currentUser.id,
  };

  pets.push(newPet);
  savePets(pets);

  return { success: true, pet: newPet };
};

export const updatePet = (petId: string, updates: Partial<Omit<Pet, 'id' | 'userId'>>): { success: boolean } => {
  const pets = getPets();
  const petIndex = pets.findIndex(p => p.id === petId);

  if (petIndex === -1) {
    return { success: false };
  }

  pets[petIndex] = { ...pets[petIndex], ...updates };
  savePets(pets);

  return { success: true };
};

export const deletePet = (petId: string): { success: boolean } => {
  const pets = getPets();
  const filteredPets = pets.filter(p => p.id !== petId);
  savePets(filteredPets);

  return { success: true };
};

// Obtener la primera mascota del usuario (para el saludo)
export const getUserFirstPet = (): Pet | null => {
  const currentUser = getCurrentUser();
  if (!currentUser) return null;
  
  const userPets = getPets(currentUser.id);
  return userPets.length > 0 ? userPets[0] : null;
};

