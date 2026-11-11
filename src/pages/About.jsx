import React, { forwardRef } from "react";
import { RevealFromBtm } from "../components/RevealFromBtm";
import { Enlarge } from "../components/Enlarge";
import {
  BiLogoPython,
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoJava,
  BiLogoReact,
  BiLogoFirebase,
  BiLogoGit,
} from "react-icons/bi";
import { PiFigmaLogoThin, PiFileSqlLight } from "react-icons/pi";
import { SiCsharp } from "react-icons/si";

const About = forwardRef((props, ref) => {
  // const { ref: viewRef } = useInView();

  return (
    <section ref={ref} className="min-h-[calc(100vh-110px)] md:px-24 max-w-7xl mx-auto font-main text-primary flex-col">
      <div className="p-10">
        <div>
          <RevealFromBtm delay={0.25} duration={0.5}>
            <div className="flex">
              <h2 className="text-3xl lg:text-4xl pt-30 flex-shrink">about me</h2>
              <div className="flex-grow border-t border-grey mt-5 ml-3 md:ml-4"></div>
            </div>
          </RevealFromBtm>
          <div className="text-sm md:text-base lg:text-lg md:flex">
            <div className="font-code font-light my-4">
              <RevealFromBtm delay={0.5} duration={1}>
                <p className="my-3">
                  I'm a software engineer based in Australia and I'm currently open for roles in Sydney or Melbourne.
                </p>
              </RevealFromBtm>
              <RevealFromBtm delay={0.75} duration={1}>
                <p className="my-3">
                  I've had a passion for visual art since I was a kid, constantly dabbling with new art mediums and spending hours in the stationery aisle. Now, I project this into crafting accessible, pixel-perfect user interfaces and strive to build the best user experience possible. I'm always keen for a challenge and I believe that life's fulfillment comes from constantly learning new things.
                </p>
              </RevealFromBtm>
              <RevealFromBtm delay={1} duration={1}>
                <p className="my-3">
                  In my spare time, you can find me exploring a new part of town, playing a racquet sport, or out for a run (can't be caught slacking on Strava!)
                </p>
              </RevealFromBtm>
            </div>
          </div>
        </div>
        <div>
          <RevealFromBtm delay={1.75} duration={0.5}>
            <div className="flex pt-10 pb-4 md:pb-6">
              <h2 className="flex-shrink text-3xl lg:text-4xl">technologies</h2>
              <div className="flex-grow border-t border-grey mt-5 ml-4"></div>
            </div>
          </RevealFromBtm>
          <RevealFromBtm delay={2} duration={1}>
            <div className="text-6xl md:text-7xl lg:text-8xl flex flex-wrap">
              <Enlarge scale={1.2}>
                <BiLogoJavascript />
              </Enlarge>
              <Enlarge scale={1.2}>
                <BiLogoReact />
              </Enlarge>
              <Enlarge scale={1.2}>
                <BiLogoHtml5 />
              </Enlarge>
              <Enlarge scale={1.2}>
                <BiLogoCss3 />
              </Enlarge>
              <Enlarge scale={1.2}>
                <BiLogoTailwindCss />
              </Enlarge>
              <Enlarge scale={1.2}>
                <BiLogoPython />
              </Enlarge>
              <Enlarge scale={1.2}>
                <BiLogoJava />
              </Enlarge>
              <Enlarge scale={1.2}>
                <SiCsharp />
              </Enlarge>
              <Enlarge scale={1.2}>
                <PiFileSqlLight />
              </Enlarge>
              <Enlarge scale={1.2}>
                <BiLogoFirebase />
              </Enlarge>
              <Enlarge scale={1.2}>
                <BiLogoGit />
              </Enlarge>
              <Enlarge scale={1.2}>
                <PiFigmaLogoThin />
              </Enlarge>
            </div>
          </RevealFromBtm>
        </div>
      </div>
    </section>
  );
});

export default About;