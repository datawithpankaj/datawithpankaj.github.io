import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
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
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Services />
        <Contact />
        <section className="rule flex justify-center border-t py-14">
          <ToptalBadge />
        </section>
      </main>
      <Footer />
    </div>
  );
}
