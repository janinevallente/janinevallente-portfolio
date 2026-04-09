import type { Metadata } from "next";
import "./globals.css";
import { portfolio } from "@/lib/data";

export const metadata: Metadata = {
  title: `${portfolio.name} — ${portfolio.role}`,
  description: `Portfolio of ${portfolio.name}. ${portfolio.tagline}`,
  keywords: ["frontend developer", "react developer", "next.js", "typescript", portfolio.name],
  authors: [{ name: portfolio.name }],
  openGraph: {
    title: `${portfolio.name} — ${portfolio.role}`,
    description: portfolio.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
