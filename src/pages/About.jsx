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

const technologies = [
  { name: "JavaScript", Icon: BiLogoJavascript },
  { name: "React", Icon: BiLogoReact },
  { name: "HTML5", Icon: BiLogoHtml5 },
  { name: "CSS3", Icon: BiLogoCss3 },
  { name: "Tailwind CSS", Icon: BiLogoTailwindCss },
  { name: "Python", Icon: BiLogoPython },
  { name: "Java", Icon: BiLogoJava },
  { name: "C#", Icon: SiCsharp },
  { name: "SQL", Icon: PiFileSqlLight },
  { name: "Firebase", Icon: BiLogoFirebase },
  { name: "Git", Icon: BiLogoGit },
  { name: "Figma", Icon: PiFigmaLogoThin },
];

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
                  I'm a software engineer based in Australia and I'm actively looking for roles in Sydney or Melbourne.
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
              {technologies.map(({ name, Icon }) => {
                const tooltipId = `technology-tooltip-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

                return (
                  <span
                    key={name}
                    tabIndex={0}
                    role="img"
                    aria-label={name}
                    className="group relative inline-flex cursor-pointer rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lightGreen"
                  >
                    <Enlarge scale={1.2}>
                      <Icon />
                    </Enlarge>
                    <span
                      id={tooltipId}
                      role="tooltip"
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-midGreen px-3 py-1 font-code text-sm text-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
                    >
                      {name}
                    </span>
                  </span>
                );
              })}
            </div>
          </RevealFromBtm>
        </div>
      </div>
    </section>
  );
});

export default About;
