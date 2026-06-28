import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import BeforeAfter from "../components/BeforeAfter";
import Playground from "../components/Playground";
import WhyMe from "../components/WhyMe";
import Contact from "../components/Contact";

export default function Portfolio() {
  return (
    <div className="relative" data-testid="portfolio-root">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Playground />
        <WhyMe />
        <Contact />
      </main>
    </div>
  );
}
