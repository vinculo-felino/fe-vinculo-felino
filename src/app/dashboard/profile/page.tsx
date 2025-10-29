import { Metadata } from "next";
import { ProfileContent } from "./ProfileContent";

export const metadata: Metadata = {
  title: "Perfil - Vínculo Felino",
  description: "Gestiona tu perfil y el de tu mascota",
};

export default function ProfilePage() {
  return <ProfileContent />;
}

