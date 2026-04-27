"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isProjectPage = pathname?.includes("/projects") ?? false;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = navLinks
        .map((l) => document.getElementById(l.href))
        .filter(Boolean) as HTMLElement[];
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

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      if (isProjectPage) {
        router.push(`/#${href}`);
      } else {
        scrollTo(href);
      }
    }, menuOpen ? 400 : 0);
  };

  const forceDark = isProjectPage;
  const isDark = forceDark || scrolled;

  return (
    <>
      <nav
        className={[
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled ? "py-3 px-8" : "py-5 px-8",
          isDark || menuOpen
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
            className="group flex items-center gap-0.5 cursor-pointer"
          >
            <span className="font-display text-sm uppercase tracking-widest-2 text-white leading-none overflow-hidden h-[1.1em]">
              <span className="block transition-transform duration-500 ease-expo-out">
                <span className="text-accent">&lt;</span>
                {" "}{portfolio.name.split(" ")[0]} V.{" "}
                <span className="text-accent">/&gt;</span>
              </span>
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                active === link.href ||
                (isProjectPage && link.href === "projects");
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="relative px-4 py-2 text-sm cursor-pointer group overflow-hidden font-body tracking-[0.02em]"
                  >
                    <span
                      className={`transition-colors duration-200 ${
                        isActive ? "text-accent" : "text-white/55"
                      }`}
                    >
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

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden relative w-6 h-5 flex flex-col justify-between cursor-pointer z-[60]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <motion.span
              className="block h-px w-full bg-white origin-center"
              animate={menuOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.span
              className="block h-px w-full bg-white"
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-px w-full bg-white origin-center"
              animate={menuOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-ink flex flex-col px-8 pt-28 pb-12 md:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="flex flex-col gap-1 flex-1 justify-center">
              {navLinks.map((link, i) => {
                const isActive =
                  active === link.href ||
                  (isProjectPage && link.href === "projects");
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.1 + i * 0.07,
                    }}
                  >
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="group w-full text-left py-5 border-b border-white/8 flex items-center justify-between"
                    >
                      <span
                        className={`font-display font-bold text-[clamp(2rem,8vw,3.5rem)] tracking-tight leading-none transition-colors duration-200 ${
                          isActive ? "text-accent" : "text-white/70 group-hover:text-white"
                        }`}
                      >
                        {link.label}
                      </span>
                      <span className={`text-lg transition-colors duration-200 ${isActive ? "text-accent" : "text-white/25 group-hover:text-white/60"}`}>
                        ↗
                      </span>
                    </button>
                  </motion.li>
                );
              })}
            </ul>

            {/* Footer info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="flex items-center justify-between"
            >
              <p className="font-body text-xs tracking-widest text-white/25 uppercase">
                {portfolio.name}
              </p>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/25 bg-accent/5">
                <span className="relative flex h-1.5 w-1.5">
                  <motion.span
                    className="absolute inline-flex h-full w-full rounded-full bg-accent"
                    animate={{ scale: [1, 1.9, 1], opacity: [0.7, 0, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
                </span>
                <span className="font-body text-[0.65rem] tracking-widest uppercase text-accent">
                  Available
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}