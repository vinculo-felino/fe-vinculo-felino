import { Sidebar } from "@/components/vf/Sidebar";
import { BottomNavbar } from "@/components/vf/BottomNavbar";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 font-sourceSans">
      {/* Sidebar para desktop */}
      <Sidebar />
      
      {/* Main Content Area - Solo esta área tiene scroll */}
      <div className="flex-grow lg:ml-64 h-screen overflow-y-auto">
        <div className="relative w-full min-h-full pb-24 lg:pb-0">
          {children}
        </div>
      </div>
      
      {/* Barra de Navegación Inferior para móvil - FIJA (no se mueve) */}
      <BottomNavbar />
    </div>
  );
}

