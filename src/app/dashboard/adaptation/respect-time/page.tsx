import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Respetar sus Tiempos - Vínculo Felino",
  description: "Aprende a respetar los tiempos de tu gato",
};

export default function RespectTimePage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-fredoka text-vf-pink mb-4">Respetar sus Tiempos</h1>
      <p className="text-gray-700 font-sourceSans">Contenido sobre respetar los tiempos...</p>
    </div>
  );
}

