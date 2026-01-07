'use client';

import { Sidebar } from "@/components/vf/Sidebar";
import { BottomNavbar } from "@/components/vf/BottomNavbar";
import { DashboardHeader } from "@/components/vf/DashboardHeader";
import React, { useState, createContext, useContext } from "react";

// Context para el título del header y control del sidebar
interface HeaderContextType {
  setHeaderInfo: (title?: string, subtitle?: string) => void;
  openSidebar: () => void;
}

const HeaderContext = createContext<HeaderContextType>({
  setHeaderInfo: () => {},
  openSidebar: () => {},
});

export const useHeaderContext = () => useContext(HeaderContext);

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [headerTitle, setHeaderTitle] = useState<string | undefined>();
  const [headerSubtitle, setHeaderSubtitle] = useState<string | undefined>();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const setHeaderInfo = (title?: string, subtitle?: string) => {
    setHeaderTitle(title);
    setHeaderSubtitle(subtitle);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  return (
    <HeaderContext.Provider value={{ setHeaderInfo, openSidebar }}>
      <div className="flex h-screen overflow-hidden bg-gray-100 font-sourceSans">
        {/* Sidebar para desktop y drawer para móvil */}
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        
        {/* Main Content Area - Scroll habilitado */}
        <div className="flex-grow lg:ml-64 h-screen overflow-y-auto">
          {/* Header con los tabs de navegación y botón hamburguesa */}
          <DashboardHeader 
            onMenuClick={toggleSidebar}
            mobileTitle={headerTitle}
            mobileSubtitle={headerSubtitle}
          />
          
          <div className="relative w-full h-full lg:min-h-full pb-24 lg:pb-28">
            {children}
          </div>
        </div>
        
        {/* Barra de Navegación Inferior para móvil - FIJA (no se mueve) */}
        <BottomNavbar />
      </div>
    </HeaderContext.Provider>
  );
}

