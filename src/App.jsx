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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const currentSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => Math.abs(a.boundingClientRect.top - 110) - Math.abs(b.boundingClientRect.top - 110))[0];

        if (currentSection) setActiveSection(currentSection.target.id);
      },
      { rootMargin: "-110px 0px -65% 0px", threshold: 0 }
    );

    [homeRef, aboutRef, experienceRef, projectsRef, contactRef].forEach((sectionRef) => {
      if (sectionRef.current) observer.observe(sectionRef.current);
    });

    return () => observer.disconnect();
  }, [homeRef, aboutRef, experienceRef, projectsRef, contactRef]);

  return (
    <div className="bg-green selection:bg-lightGreen">
      <Nav homeRef={homeRef} experienceRef={experienceRef} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} activeSection={activeSection}/>
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
