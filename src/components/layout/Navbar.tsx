"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { portfolio } from "@/lib/data";

const navLinks = [
  { href: "about", label: "About" },
  { href: "experience", label: "Experience" },
  { href: "projects", label: "Projects" },
  { href: "contact", label: "Contact" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const isProjectPage = pathname?.includes("/projects") ?? false;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      // Determine active section
      const sections = navLinks.map((l) => document.getElementById(l.href)).filter(Boolean) as HTMLElement[];
      let current = "";
      for (const el of sections) {
        if (el.getBoundingClientRect().top <= 120) current = el.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (isProjectPage) {
      router.push(`/#${href}`);
    } else {
      scrollTo(href);
    }
  };

  const forceDark = isProjectPage;

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      style={{
        padding: scrolled ? "0.75rem 2rem" : "1.25rem 2rem",
        backgroundColor: forceDark || scrolled ? "rgba(17,17,16,0.92)" : "transparent",
        backdropFilter: forceDark || scrolled ? "blur(14px)" : "none",
        borderBottom: forceDark || scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
      }}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => (isProjectPage ? router.push("/") : window.scrollTo({ top: 0, behavior: "smooth" }))}
          className="group flex items-center gap-2.5 cursor-pointer"
        >
          <span
            className="w-2 h-2 rounded-full transition-all duration-500 group-hover:scale-[1.6]"
            style={{ backgroundColor: "#c8f04a" }}
          />
          <span
            className="text-sm uppercase overflow-hidden leading-none"
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "0.12em",
              color: "white",
              height: "1.1em",
            }}
          >
            <span
              className="block transition-transform duration-500"
              style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
            >
              {portfolio.name.split(" ")[0]} V.
            </span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="relative px-4 py-2 text-sm cursor-pointer group overflow-hidden"
                style={{ fontFamily: "var(--font-body)", letterSpacing: "0.02em" }}
              >
                <span
                  className="transition-colors duration-200"
                  style={{
                    color:
                      active === link.href || (isProjectPage && link.href === "projects")
                        ? "#c8f04a"
                        : "rgba(255,255,255,0.55)",
                  }}
                >
                  {(active === link.href || (isProjectPage && link.href === "projects")) && (
                    <span
                      className="inline-block w-1 h-1 rounded-full mr-1.5 mb-0.5"
                      style={{ backgroundColor: "#c8f04a" }}
                    />
                  )}
                  {link.label}
                </span>
              </button>
            </li>
          ))}
          {/* <li className="ml-3">
            <a
              href={portfolio.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 border transition-all duration-300 hover:bg-white hover:text-ink"
              style={{
                color: "rgba(255,255,255,0.6)",
                borderColor: "rgba(255,255,255,0.2)",
                fontFamily: "var(--font-body)",
              }}
            >
              Résumé ↗
            </a>
          </li> */}
        </ul>

        {/* Mobile */}
        {/* <a
          href={portfolio.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden text-xs px-3 py-1.5 border"
          style={{
            color: "rgba(255,255,255,0.6)",
            borderColor: "rgba(255,255,255,0.2)",
            fontFamily: "var(--font-body)",
          }}
        >
          Résumé ↗
        </a> */}
      </div>
    </nav>
  );
}