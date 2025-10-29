"use client";

import SEO from "@/utils/seo";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { login } from "@/lib/auth";
import Image from "next/image";
import { Mail, Lock } from "lucide-react";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    const result = login(email, password);
    
    if (result.success) {
      router.push("/greeting");
    } else {
      setError(result.error || "Error al iniciar sesión");
    }
  };

  return (
    <>
      <SEO
        title="Iniciar Sesión - Vínculo Felino"
        description="Inicia sesión en Vínculo Felino para continuar acompañando a tu gato en su proceso de adaptación."
        canonicalUrl="https://vinculofelino.com/auth/login"
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
          <h1 className="text-vf-pink text-3xl font-fredoka font-medium mb-8">Inicia sesión</h1>
          
          {/* Formulario */}
          <form onSubmit={handleLogin} className="w-full space-y-4">
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
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full py-4 px-12 rounded-3xl border-0 bg-vf-yellow font-sourceSans text-gray-600 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-vf-pink"
              />
            </div>

            {/* ¿Olvidaste tu contraseña? */}
            <button 
              type="button"
              className="text-sm font-sourceSans text-vf-pink hover:underline w-full text-center"
            >
              ¿Olvidaste tu contraseña?
            </button>

            {/* Mensaje de error */}
            {error && (
              <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-2xl text-sm font-sourceSans">
                {error}
              </div>
            )}

            {/* Botón Inicia sesión */}
            <button
              type="submit"
              className="w-full bg-vf-pink text-white font-fredoka font-medium text-lg py-4 rounded-3xl shadow-md transition duration-200 hover:bg-opacity-90"
            >
              Inicia sesión
            </button>
          </form>

          {/* Enlace a Registro */}
          <div className="mt-8">
            <p className="text-sm font-sourceSans text-gray-600">
              ¿Todavía no tienes una cuenta?
            </p>
            <Link 
              href="/auth/register" 
              className="font-sourceSans font-semibold text-vf-pink hover:underline"
            >
              Regístrate aquí
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
