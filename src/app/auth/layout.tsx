import { MarketingNavbar } from "@/components/vf/MarketingNavbar";
import { Footer } from "@/components/vf/Footer";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <MarketingNavbar />
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  );
}
