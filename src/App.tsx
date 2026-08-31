import GradientMesh from "./components/GradientMesh";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import ToptalBadge from "./components/ToptalBadge";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <GradientMesh />
      <div className="relative z-10 min-h-screen">
        <Nav />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Services />
          <Contact />
          <section className="flex justify-center border-t border-[var(--color-glass-border)] py-12">
            <ToptalBadge />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
