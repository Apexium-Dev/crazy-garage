import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crazy Garage - Professional Car Detailing Services in Debar",
  description: "Transform your vehicle with our premium car detailing and headlight restoration services in Debar, North Macedonia. Expert paint correction, interior detailing, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
