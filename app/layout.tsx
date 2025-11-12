import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MSA-GNIT Inauguration Ceremony | Microsoft Technologies & Services",
  description: "Join us for the official inauguration of the Microsoft Student Ambassadors GNIT Chapter and learn about GitHub, Open-Source, and Gen-AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-900 text-white antialiased font-sans">
        {children}
      </body>
    </html>
  );
}