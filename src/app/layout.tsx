import type { Metadata } from "next";
import "./globals.css";
import { portfolio } from "@/lib/data";

const siteDescription = `${portfolio.name} is an IT professional based in Cebu City, Philippines, with experience building applications, troubleshooting technical issues, and supporting web hosting and domain operations.`;

export const metadata: Metadata = {
  title: `${portfolio.name} | Portfolio`,
  description: siteDescription,
  keywords: [
    portfolio.name,
    "Frontend Developer",
    "Front-end Web Development",
    "Web Developer Philippines",
    "Web Developer Cebu",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Mobile App Development",
    "Kotlin Developer",
    "React Native Developer",
    "Portfolio Website",
    "Software Developer Philippines",
    "Web Application Developer",
    "Domain Support Associate",
    "Domain Management",
    "Domain Registration",
    "DNS Configuration",
    "Web Hosting Support",
    "Domain Compliance",
  ],
  authors: [{ name: portfolio.name, url: portfolio.social.gitHub }],
  creator: portfolio.name,
  publisher: portfolio.name,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/favicon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: `${portfolio.name} | Portfolio`,
    description: siteDescription,
    siteName: `${portfolio.name} Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolio.name} | Portfolio`,
    description: siteDescription,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}