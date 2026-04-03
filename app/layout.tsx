import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GlowBlobs } from "@/components/GlowBlobs";

export const metadata: Metadata = {
  title: "360 Tutoring Montreal",
  description:
    "Personalized tutoring services across Montreal with dedicated support for elementary through university students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-screen flex flex-col relative">
        <GlowBlobs />
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
