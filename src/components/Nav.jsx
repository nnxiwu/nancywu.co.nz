import React from "react";
import { GiPlainSquare } from "react-icons/gi";
import { RevealFromTop } from "../components/RevealFromTop";
import { Reveal } from "../components/Reveal";
import { Enlarge } from "../components/Enlarge";

const Nav = ({homeRef, aboutRef, experienceRef, projectsRef, contactRef}) => {
  const scrollToRef = (ref) => {
    window.scrollTo(0, ref.current.offsetTop - 110);
  }
  return (
    <div className="w-full bg-green px-10 md:px-20 lg:px-30 sticky top-0 overflow-hidden z-10">
      <nav className="py-8 md:py-10 text-primary font-main text-xl flex justify-between">
        <ul className="flex items-center">
          <Reveal delay={0.25} duration={2}>
            <Enlarge scale={1.1}>
              <button onClick={() => scrollToRef(homeRef)}>
                <GiPlainSquare className="text-3xl justify-start cursor-pointer" />
              </button>
            </Enlarge>
          </Reveal>
          <Reveal delay={0.25} duration={2}>
            <span className="px-2 select-none">nancy.wu</span>
          </Reveal>
        </ul>
        <ul className="flex items-center">
          <RevealFromTop delay={0.5} duration={0.5}>
            <button
              className="px-2 hover:underline underline-offset-4 invisible md:visible focus:underline"
              onClick={() => scrollToRef(aboutRef)}
            >
              about
            </button>
          </RevealFromTop>
          <RevealFromTop delay={0.65} duration={0.5}>
            <button
              className="px-2 hover:underline underline-offset-4 invisible md:visible focus:underline"
              onClick={() => scrollToRef(experienceRef)}
            >
              experience
            </button>
          </RevealFromTop>
          <RevealFromTop delay={0.8} duration={0.5}>
            <button
              className="px-2 hover:underline underline-offset-4 invisible md:visible focus:underline"
              onClick={() => scrollToRef(projectsRef)}
            >
              projects
            </button>
          </RevealFromTop>
          <RevealFromTop delay={0.95} duration={0.5}>
            <button
              className="px-2 hover:underline underline-offset-4 invisible md:visible focus:underline"
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
