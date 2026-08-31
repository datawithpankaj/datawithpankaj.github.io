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
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Contact />
        <section className="flex justify-center border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] py-12">
          <ToptalBadge />
        </section>
      </main>
      <Footer />
    </div>
  );
}
