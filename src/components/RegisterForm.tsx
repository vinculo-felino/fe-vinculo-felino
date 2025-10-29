"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { register } from "@/lib/auth";
import { VFCatLogo } from "@/components/vf/VFCatLogo";
import { StyledInput } from "@/components/vf/StyledInput";
import { PrimaryButton } from "@/components/vf/PrimaryButton";
import { User, Mail, Lock, Check } from "lucide-react";

export function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const isPasswordValid = password.length >= 6;

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!isPasswordValid) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    const result = register(email, password, name);
    
    if (result.success) {
      router.push("/greeting");
    } else {
      setError(result.error || "Error al crear la cuenta");
    }
  };

  return (
    <div className="flex flex-col flex-grow bg-white font-nunito">
      {/* Contenido principal centrado */}
      <div className="flex-grow flex flex-col items-center justify-center text-center p-8 w-full max-w-sm mx-auto">
        <VFCatLogo className="w-32 h-32 fill-current text-vf-pink mb-6" />
        
        <h1 className="text-gray-800 text-3xl font-fredoka mb-8">Crea tu cuenta</h1>
        
        <form onSubmit={handleRegister} className="w-full">
          <StyledInput 
            placeholder="Nombre" 
            type="text" 
            icon={User} 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <StyledInput 
            placeholder="Correo electrónico" 
            type="email" 
            icon={Mail} 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          {/* Input de Contraseña con Validación */}
          <div className="relative w-full mb-4">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <Lock className="w-5 h-5" />
            </span>
            <input
              type="password"
              placeholder="Crear contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full py-3 px-12 rounded-xl border border-gray-300 font-nunito focus:outline-none focus:ring-2 focus:ring-vf-pink"
            />
            {isPasswordValid && (
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500">
                <Check className="w-5 h-5" />
              </span>
            )}
          </div>

          {/* Mensaje de Validación */}
          <div className="w-full text-left px-4 mb-4 mt-1">
            <p className={`text-xs font-nunito ${isPasswordValid ? 'text-green-500' : 'text-gray-500'}`}>
              Al menos 6 caracteres
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          <PrimaryButton type="submit" className="w-full">
            Crear cuenta
          </PrimaryButton>
        </form>

        <p className="text-sm font-nunito text-gray-600 mt-8">
          ¿Ya tienes una cuenta?
        </p>
        <Link 
          href="/auth/login" 
          className="font-bold font-nunito text-vf-pink hover:underline"
        >
          Inicia sesión aquí
        </Link>
      </div>
    </div>
  );
}
