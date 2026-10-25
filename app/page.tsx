import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Bridge from "@/components/Bridge";
import Journey from "@/components/Journey";
import AIWork from "@/components/AIWork";
import Projects from "@/components/Projects";
import Speaking from "@/components/Speaking";
import Writing from "@/components/Writing";
import Currently from "@/components/Currently";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import BeyondWork from "@/components/BeyondWork";
import Principles from "@/components/Principles";
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
        <Bridge />
        <Journey />
        <AIWork />
        <Projects />
        <Speaking />
        <Writing drafts={writingDrafts} />
        <Currently drafts={nowDrafts} />
        <Education />
        <Certifications />
        <BeyondWork drafts={beyondDrafts} />
        <Principles />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
