import React, { forwardRef } from "react";
import { RevealFromBtm } from "../components/RevealFromBtm";
import ProjectCards from "../components/ProjectCards";

const Projects = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="projects" className="min-h-[calc(100vh-100px)] md:px-24 max-w-7xl mx-auto font-main text-primary">
      <div className="p-10">
        <RevealFromBtm delay={0.25} duration={0.5}>
          <div className="flex mb-4">
              <h2 className="flex-shrink text-3xl lg:text-4xl">portfolio projects</h2>
              <div className="flex-grow border-t border-grey mt-5 ml-4"></div>
          </div>
        </RevealFromBtm>
        <ProjectCards />
      </div>
    </section>
  );
});

export default Projects;
