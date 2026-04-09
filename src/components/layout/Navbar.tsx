"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { portfolio } from "@/lib/data";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl text-ink tracking-tight hover:text-accent transition-colors"
        >
          {portfolio.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-sm text-muted hover:text-ink transition-colors tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={portfolio.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm px-4 py-2 border border-ink text-ink hover:bg-ink hover:text-paper transition-all duration-200"
            >
              Résumé ↗
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-ink transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-ink transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-ink transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-paper border-b border-border px-6 py-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-mono text-sm text-muted hover:text-ink transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={portfolio.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm px-4 py-2 border border-ink text-ink hover:bg-ink hover:text-paper transition-all duration-200 inline-block"
              >
                Résumé ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
