"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Preloader from "@/components/ui/Preloader";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {!loaded && <Preloader key="preloader" onDone={() => setLoaded(true)} />}
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
