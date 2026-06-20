import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Currently from "@/components/Currently";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Writing from "@/components/Writing";
import Certifications from "@/components/Certifications";
import BeyondWork from "@/components/BeyondWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Currently />
        <Experience />
        <Education />
        <Projects />
        <Writing />
        <Certifications />
        <BeyondWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
