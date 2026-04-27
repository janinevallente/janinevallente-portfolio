import type { Metadata } from "next";
import "./globals.css";
import { portfolio } from "@/lib/data";

export const metadata: Metadata = {
  title: `${portfolio.name} | Portfolio`,
  description: `${portfolio.tagline} ${portfolio.location}.`,
  authors: [{ name: portfolio.name }],
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
