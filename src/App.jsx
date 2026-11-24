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
      const viewportTop = 110;
      const viewportBottom = window.innerHeight;
      const active = sections.reduce((mostVisible, section) => {
        const { top, bottom } = section.getBoundingClientRect();
        const visibleHeight = Math.max(
          0,
          Math.min(bottom, viewportBottom) - Math.max(top, viewportTop)
        );

        return visibleHeight > mostVisible.visibleHeight
          ? { section, visibleHeight }
          : mostVisible;
      }, { section: null, visibleHeight: 0 });

      if (active.section) setActiveSection(active.section.id);
    };

    const observer = new IntersectionObserver(
      () => {
        if (!programmaticNavigationRef.current) updateActiveSection();
      },
      { rootMargin: "-110px 0px -65% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    let scrollFrame = null;
    const handleScroll = () => {
      if (programmaticNavigationRef.current || scrollFrame !== null) return;

      scrollFrame = window.requestAnimationFrame(() => {
        scrollFrame = null;
        updateActiveSection();
      });
    };
    const handleManualScroll = () => {
      programmaticNavigationRef.current = false;
    };
    const handleScrollEnd = () => {
      programmaticNavigationRef.current = false;
      updateActiveSection();
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
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      if (scrollFrame !== null) window.cancelAnimationFrame(scrollFrame);
      window.removeEventListener("wheel", handleManualScroll);
      window.removeEventListener("touchstart", handleManualScroll);
      window.removeEventListener("pointerdown", handleManualScroll);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scrollend", handleScrollEnd);
      window.removeEventListener("scroll", handleScroll);
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
