import "../tailwind.css";
// import { Link } from "react-router-dom";
import React, { forwardRef } from "react";
import { RevealFromBtm } from "../components/RevealFromBtm";
import { Reveal } from "../components/Reveal";
import TypeWriter from "typewriter-effect";

const Home = forwardRef(({aboutRef}, ref) => {
  const scrollToRef = (ref) => {
    window.scrollTo(0, ref.current.offsetTop - 110);
  }
  return (
    <section ref={ref} id="home" className="min-h-[calc(100vh-100px)] md:px-24 max-w-7xl mx-auto flex items-center">
      <div className="font-main text-primary p-10">
        <Reveal delay={1.25} duration={0.5}>
          <span className="text-2xl md:text-2xl lg:text-3xl text-primary font-main">
            <TypeWriter
              options={{
                delay: 75
              }}
              onInit={(helloTypewriter) => {
                helloTypewriter
                  .pauseFor(1250)
                  .typeString("Hello! I'm")
                  .start()
                  .pauseFor(300)
                  .callFunction(() => {
                    document.querySelector(".Typewriter__cursor").remove();
                  })
              }}
            />
          </span>
        </Reveal>
        <Reveal delay={2.2} duration={0.5}>
          <span className="text-5xl md:text-6xl lg:text-7xl font-semibold align-middle text-primary font-main">
            <TypeWriter
              onInit={(nameTypewriter) => {
                nameTypewriter
                  .pauseFor(2400)
                  .typeString("Nancy Wu.")
                  .start()
              }}
            />
          </span>
        </Reveal>
        <RevealFromBtm delay={4.5} duration={1}>
          <p className="font-code text-sm md:text-base lg:text-lg pt-8 pb-10 md:pb-14 max-w-xl lg:max-w-3xl text-grey">
            I’m a frontend software developer at Canva passionate about software development and the
            interconnection between business and technology.
          </p>
        </RevealFromBtm>
        <RevealFromBtm delay={5} duration={1}>
          <button onClick={() => scrollToRef(aboutRef)} className="px-8 md:px-10 py-2 md:py-3 text-xl md:text-2xl border-white border-2 rounded-md hover:bg-midGreen" 
                  >
            Find out more!
          </button>
        </RevealFromBtm>
      </div>
    </section>
  );
})

export default Home;
