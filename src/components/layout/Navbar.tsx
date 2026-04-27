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
  const isDark = forceDark || scrolled;

  return (
    <nav
      className={[
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-3 px-8" : "py-5 px-8",
        isDark
          ? "bg-ink/90 backdrop-blur-[14px]"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() =>
            isProjectPage
              ? router.push("/")
              : window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="group flex items-center gap-2.5 cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-accent transition-all duration-500 group-hover:scale-[1.6]" />
          <span className="font-display text-sm uppercase tracking-widest-2 text-white leading-none overflow-hidden h-[1.1em]">
            <span className="block transition-transform duration-500 ease-expo-out">
              {portfolio.name.split(" ")[0]} V.
            </span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = active === link.href || (isProjectPage && link.href === "projects");
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="relative px-4 py-2 text-sm cursor-pointer group overflow-hidden font-body tracking-[0.02em]"
                >
                  <span className={`transition-colors duration-200 ${isActive ? "text-accent" : "text-white-55"}`}>
                    {isActive && (
                      <span className="inline-block w-1 h-1 rounded-full mr-1.5 mb-0.5 bg-accent" />
                    )}
                    {link.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}