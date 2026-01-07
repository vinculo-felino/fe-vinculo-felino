import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Distribución de Espacios - Vínculo Felino",
  description: "Aprende cómo distribuir los espacios para tu gato",
};

export default function SpaceDistributionPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-fredoka text-vf-pink mb-4">Distribución de Espacios</h1>
      <p className="text-gray-700 font-sourceSans">Contenido de distribución de espacios...</p>
    </div>
  );
}

