import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creación de Rutinas - Vínculo Felino",
  description: "Aprende cómo crear rutinas para tu gato",
};

export default function RoutinesPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-fredoka text-vf-pink mb-4">Creación de Rutinas</h1>
      <p className="text-gray-700 font-sourceSans">Contenido de creación de rutinas...</p>
    </div>
  );
}

