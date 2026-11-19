import { useEffect, useRef, useState } from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import SocialMedia from "./components/SocialMedia"

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [activeSection, setActiveSection] = useState("home");
  const programmaticNavigationRef = useRef(false);

  const handleSectionSelect = (section) => {
    programmaticNavigationRef.current = true;
    setActiveSection(section);
  };

  useEffect(() => {
    const sections = [homeRef, aboutRef, experienceRef, projectsRef, contactRef]
      .map((sectionRef) => sectionRef.current)
      .filter(Boolean);

    const updateActiveSection = () => {
      const activationLine = 110;
      const active = sections.find((section) => {
        const { top, bottom } = section.getBoundingClientRect();
        return top <= activationLine && bottom > activationLine;
      });

      if (active) setActiveSection(active.id);
    };

    const observer = new IntersectionObserver(
      () => {
        if (!programmaticNavigationRef.current) updateActiveSection();
      },
      { rootMargin: "-110px 0px -65% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    const handleManualScroll = () => {
      if (programmaticNavigationRef.current) {
        programmaticNavigationRef.current = false;
        updateActiveSection();
      }
    };
    const handleScrollEnd = () => {
      programmaticNavigationRef.current = false;
    };
    const handleKeyDown = (event) => {
      if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(event.key)) {
        handleManualScroll();
      }
    };

    window.addEventListener("wheel", handleManualScroll, { passive: true });
    window.addEventListener("touchstart", handleManualScroll, { passive: true });
    window.addEventListener("pointerdown", handleManualScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scrollend", handleScrollEnd);

    return () => {
      observer.disconnect();
      window.removeEventListener("wheel", handleManualScroll);
      window.removeEventListener("touchstart", handleManualScroll);
      window.removeEventListener("pointerdown", handleManualScroll);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scrollend", handleScrollEnd);
    };
  }, [homeRef, aboutRef, experienceRef, projectsRef, contactRef]);

  return (
    <div className="bg-green selection:bg-lightGreen">
      <Nav homeRef={homeRef} experienceRef={experienceRef} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} activeSection={activeSection} onSectionSelect={handleSectionSelect}/>
      <Home ref={homeRef} aboutRef={aboutRef}/>
      <About ref={aboutRef}/>
      <Experience ref={experienceRef} />
      <Projects ref={projectsRef}/>
      <Contact ref={contactRef}/>
      <SocialMedia />
    </div>
  );
}

export default App;
