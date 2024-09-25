import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react"
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aayan Khan",
  description: "I am a Developer, who loves to build things for the web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        <Header />
        {children}
        {/* <div className="background-gradient absolute inset-0 -z-50 max-h-screen" /> */}
        {/* <div className="pointer-events-none absolute mt-0 pt-0 inset-0 -z-40 h-full bg-[url('/noisetexture.jpg')] opacity-10 mix-blend-soft-light top-0"></div> */}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
