"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { portfolio } from "@/lib/data";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

// Sections with a dark (bg-ink) background
const DARK_SECTIONS = ["about", "projects"];

const NAVBAR_HEIGHT = 64; // matches h-16

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 40);

      const probeX = window.innerWidth / 2;
      const probeY = Math.min(window.innerHeight - 1, NAVBAR_HEIGHT + 10); // Adjusted probe point
      const element = document.elementFromPoint(probeX, probeY);

      const dark = Boolean(
        element &&
        DARK_SECTIONS.some((id) => element.closest(`#${id}`))
      );

      setIsDark(dark);

      // Determine active section
      const sectionIds = navLinks.map((link) => link.href.slice(1));
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

      let current = "";
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].getBoundingClientRect().top <= NAVBAR_HEIGHT + 16) {
          current = sections[i].id;
          break;
        }
      }
      setActiveSection(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Derived style tokens
  const logoColor = isDark ? "text-paper hover:text-accent" : "text-ink hover:text-accent";
  const linkColor = isDark ? "text-paper/60 hover:text-paper" : "text-muted hover:text-ink";
  const activeLinkColor = "text-accent";
  const resumeBorder = isDark
    ? "border-paper text-paper hover:bg-paper hover:text-ink"
    : "border-ink text-ink hover:bg-ink hover:text-paper";
  const hamburgerBg = isDark ? "bg-paper" : "bg-ink";
  const mobileBg = isDark ? "bg-ink border-paper/10" : "bg-paper border-border";
  const mobileLinkColor = isDark ? "text-paper/60 hover:text-paper" : "text-muted hover:text-ink";

  const headerBg = scrolled
    ? isDark
      ? "bg-ink/90 backdrop-blur-md border-b border-paper/10 shadow-sm"
      : "bg-paper/90 backdrop-blur-md border-b border-border shadow-sm"
    : "bg-transparent";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className={`font-display text-xl tracking-tight transition-colors ${logoColor}`}>
          <span className="font-md">&lt; </span>
          {portfolio.name.split(" ")[0]} V<span className="text-accent">.</span>
          <span className="font-md"> &gt;</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-mono text-sm tracking-wide transition-colors ${activeSection === link.href.slice(1) ? activeLinkColor : linkColor
                  }`}
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
              className={`font-mono text-sm px-4 py-2 border transition-all duration-200 ${resumeBorder}`}
            >
              Resume ↗
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px transition-transform duration-200 ${hamburgerBg} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px transition-opacity duration-200 ${hamburgerBg} ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px transition-transform duration-200 ${hamburgerBg} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={`md:hidden border-b px-6 py-6 ${mobileBg}`}>
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-mono text-sm transition-colors ${activeSection === link.href.slice(1) ? activeLinkColor : mobileLinkColor
                    }`}
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
                className={`font-mono text-sm px-4 py-2 border transition-all duration-200 inline-block ${resumeBorder}`}
              >
                Resume ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}