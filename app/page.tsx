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
import { getPublishedDrafts } from "@/lib/content";

export default function Home() {
  const writingDrafts = getPublishedDrafts("writing");
  const nowDrafts = getPublishedDrafts("now");
  const beyondDrafts = getPublishedDrafts("beyond");

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Currently drafts={nowDrafts} />
        <Experience />
        <Education />
        <Projects />
        <Writing drafts={writingDrafts} />
        <Certifications />
        <BeyondWork drafts={beyondDrafts} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
