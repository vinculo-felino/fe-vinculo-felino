import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";
import type React from "react";
import { cn } from "@/lib/utils";

const fredoka = Fredoka({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fredoka",
  weight: ["400", "500", "600"],
});

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vínculo Felino",
  description:
    "Vínculo Felino está pensado para ayudarte a entender mejor a tu gato, acompañar su proceso de adaptación y disfrutar juntos de un vínculo más fuerte y feliz.",
  keywords: [
    "gatos",
    "felinos",
    "adaptación",
    "rescatados",
    "etología felina",
    "comportamiento felino",
    "tenencia responsable",
    "vínculo felino",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={cn(nunito.variable, fredoka.variable, nunito.className, "antialiased")}>
        {children}
      </body>
    </html>
  );
}
