"use client";

import SEO from "@/utils/seo";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { register } from "@/lib/auth";
import Image from "next/image";
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
    <>
      <SEO
        title="Crear Cuenta - Vínculo Felino"
        description="Crea tu cuenta en Vínculo Felino para comenzar a acompañar a tu gato en su proceso de adaptación."
        canonicalUrl="https://vinculofelino.com/auth/register"
        ogImageUrl="https://vinculofelino.com/og-image.png"
        twitterHandle=""
      />
      <div className="flex flex-col flex-grow bg-white font-sourceSans">
        {/* Contenido principal centrado */}
        <div className="flex-grow flex flex-col items-center justify-center text-center p-8 w-full max-w-md mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <Image 
              src="/images/logo-vinculo-felino.png" 
              alt="Logo Vínculo Felino" 
              width={160}
              height={160}
              className="object-contain"
              priority
            />
          </div>
          
          {/* Título */}
          <h1 className="text-vf-pink text-3xl font-fredoka font-medium mb-8">Crea tu cuenta</h1>
          
          {/* Formulario */}
          <form onSubmit={handleRegister} className="w-full space-y-4">
            {/* Input de Nombre con fondo amarillo */}
            <div className="relative w-full">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <User className="w-5 h-5" />
              </span>
              <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full py-4 px-12 rounded-3xl border-0 bg-vf-yellow font-sourceSans text-gray-600 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-vf-pink"
              />
            </div>

            {/* Input de Email con fondo amarillo */}
            <div className="relative w-full">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Mail className="w-5 h-5" />
              </span>
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full py-4 px-12 rounded-3xl border-0 bg-vf-yellow font-sourceSans text-gray-600 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-vf-pink"
              />
            </div>

            {/* Input de Contraseña con fondo amarillo */}
            <div className="relative w-full">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Lock className="w-5 h-5" />
              </span>
              <input
                type="password"
                placeholder="Crear contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full py-4 px-12 rounded-3xl border-0 bg-vf-yellow font-sourceSans text-gray-600 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-vf-pink"
              />
              {isPasswordValid && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500">
                  <Check className="w-5 h-5" />
                </span>
              )}
            </div>

            {/* Mensaje de Validación */}
            <div className="w-full text-left px-2">
              <p className={`text-xs font-sourceSans ${isPasswordValid ? 'text-green-500' : 'text-gray-500'}`}>
                Al menos 6 caracteres
              </p>
            </div>

            {/* Mensaje de error */}
            {error && (
              <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-2xl text-sm font-sourceSans">
                {error}
              </div>
            )}

            {/* Botón Crear cuenta */}
            <button
              type="submit"
              className="w-full bg-vf-pink text-white font-fredoka font-medium text-lg py-4 rounded-3xl shadow-md transition duration-200 hover:bg-opacity-90"
            >
              Crear cuenta
            </button>
          </form>

          {/* Enlace a Login */}
          <div className="mt-8">
            <p className="text-sm font-sourceSans text-gray-600">
              ¿Ya tienes una cuenta?
            </p>
            <Link 
              href="/auth/login" 
              className="font-sourceSans font-semibold text-vf-pink hover:underline"
            >
              Inicia sesión aquí
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
