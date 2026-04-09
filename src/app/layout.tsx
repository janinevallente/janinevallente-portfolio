import type { Metadata } from "next";
import "./globals.css";
import { portfolio } from "@/lib/data";

export const metadata: Metadata = {
  title: `${portfolio.name} | Portfolio`,
  description: `Portfolio of ${portfolio.name}. ${portfolio.tagline}`,
  keywords: ["frontend developer", "react developer", "next.js", "typescript", portfolio.name],
  authors: [{ name: portfolio.name }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}