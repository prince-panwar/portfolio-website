import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import FloatingParticles from "@/components/ui/FloatingParticles";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CursorSpotlight from "@/components/ui/CursorSpotlight";

export default function Home() {
  return (
    <>
      <FloatingParticles />
      <CursorSpotlight />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Stats />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
