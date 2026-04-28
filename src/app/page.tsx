"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Preloader from "@/components/ui/Preloader";
import ScrollToProject from "@/components/animations/ScrollToProject";

const SESSION_KEY = "portfolio_loaded";

export default function Home() {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem(SESSION_KEY) === "1";
    setLoaded(hasLoaded);
    setReady(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [loaded]);

  const handleDone = () => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setLoaded(true);
  };

  if (!ready) {
    return <div className="fixed inset-0 bg-ink z-[100]" />;
  }

  return (
    <>
      <Suspense fallback={null}>
        <ScrollToProject />
      </Suspense>

      <AnimatePresence mode="wait">
        {!loaded && <Preloader key="preloader" onDone={handleDone} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}