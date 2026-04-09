import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
// import Marquee from "@/components/ui/Marquee";
// import Work from "@/components/sections/Work";
// import About from "@/components/sections/About";
// import Experience from "@/components/sections/Experience";
// import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      {/* <About /> */}
      {/* <Marquee /> */}
      {/* <Experience /> */}
      {/* <Work /> */}
      {/* <Contact /> */}
      <Footer />
    </main>
  );
}
