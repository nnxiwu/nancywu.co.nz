import React from "react";
import { GiPlainSquare } from "react-icons/gi";
import { RevealFromTop } from "../components/RevealFromTop";
import { Reveal } from "../components/Reveal";
import { Enlarge } from "../components/Enlarge";

const navLinkClass =
  "px-2 invisible md:visible relative transition-colors duration-300 hover:text-grey focus-visible:text-grey after:absolute after:left-2 after:right-2 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 focus-visible:after:scale-x-100";

const Nav = ({homeRef, aboutRef, experienceRef, projectsRef, contactRef, activeSection}) => {
  const scrollToRef = (ref) => {
    window.scrollTo(0, ref.current.offsetTop - 110);
  }
  const getNavLinkClass = (section) =>
    `${navLinkClass} ${activeSection === section ? "text-grey after:scale-x-100" : "text-lightGreen"}`;

  return (
    <div className="w-full bg-green px-10 md:px-20 lg:px-30 sticky top-0 overflow-hidden z-10">
      <nav className="py-8 md:py-10 text-primary font-main text-xl flex justify-between">
        <ul className="flex items-center">
          <Reveal delay={0.25} duration={2}>
            <Enlarge scale={1.1}>
              <button
                onClick={() => scrollToRef(homeRef)}
                aria-current={activeSection === "home" ? "location" : undefined}
                className="text-primary transition-colors duration-300 hover:text-primary focus-visible:text-primary"
              >
                <GiPlainSquare className="text-3xl justify-start cursor-pointer" />
              </button>
            </Enlarge>
          </Reveal>
          <Reveal delay={0.25} duration={2}>
            <span className="px-2 select-none font-code text-sm text-lightGreen">nancy.wu</span>
          </Reveal>
        </ul>
        <ul className="flex items-center">
          <RevealFromTop delay={0.5} duration={0.5}>
            <button
              className={getNavLinkClass("about")}
              aria-current={activeSection === "about" ? "location" : undefined}
              onClick={() => scrollToRef(aboutRef)}
            >
              about
            </button>
          </RevealFromTop>
          <RevealFromTop delay={0.65} duration={0.5}>
            <button
              className={getNavLinkClass("experience")}
              aria-current={activeSection === "experience" ? "location" : undefined}
              onClick={() => scrollToRef(experienceRef)}
            >
              experience
            </button>
          </RevealFromTop>
          <RevealFromTop delay={0.8} duration={0.5}>
            <button
              className={getNavLinkClass("projects")}
              aria-current={activeSection === "projects" ? "location" : undefined}
              onClick={() => scrollToRef(projectsRef)}
            >
              projects
            </button>
          </RevealFromTop>
          <RevealFromTop delay={0.95} duration={0.5}>
            <button
              className={getNavLinkClass("contact")}
              aria-current={activeSection === "contact" ? "location" : undefined}
              onClick={() => scrollToRef(contactRef)}
            >
              contact
            </button>
          </RevealFromTop>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
