import type { Metadata } from "next";
import { ReactLenis } from "lenis/react";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "CapiPousse | Soin capillaire botanique",
  description: "Des soins capillaires botaniques pour une pousse naturellement forte.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <ReactLenis root>
          <Header />
          {children}
          <Footer />
        </ReactLenis>
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
