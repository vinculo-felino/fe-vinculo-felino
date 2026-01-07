'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function LitterBoxPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-vf-pink hover:text-vf-pink/80 mb-6 font-sourceSans font-semibold"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver
        </button>

        <h1 className="text-3xl font-fredoka font-semibold text-vf-purple mb-6">
          Caja de arena
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center justify-center bg-gray-100 rounded-xl min-h-[400px]">
            <p className="text-gray-500 font-sourceSans text-center">
              Imagen explicativa aquí
              <br />
              <span className="text-sm">(Pendiente de agregar)</span>
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => router.back()}
            className="bg-gray-200 text-gray-700 font-sourceSans font-semibold py-3 px-8 rounded-full hover:bg-gray-300 transition-all shadow-md"
          >
            Atrás
          </button>
        </div>
      </div>
    </div>
  );
}

