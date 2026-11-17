import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { RevealFromBtm } from "../components/RevealFromBtm";
import { BiLogoLinkedinSquare } from "react-icons/bi";

const Contact = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="contact" className="min-h-[calc(100vh-100px)] md:px-24 max-w-7xl mx-auto font-main text-primary flex-col">
      <div className="p-10">
        <RevealFromBtm delay={0.75} duration={0.5}>
          <div className="flex">
              <h2 className="flex-shrink text-3xl lg:text-4xl">contact</h2>
              <div className="flex-grow border-t border-grey mt-5 ml-4"></div>
          </div>
        </RevealFromBtm>
        <div className="flex-col text-center pt-36">
          <RevealFromBtm delay={1} duration={0.5}>
            <h2 className="text-3xl lg:text-4xl">get in touch!</h2>
          </RevealFromBtm>
          <RevealFromBtm delay={1.25} duration={1}>
            <div className="font-code font-light text-sm md:text-base lg:text-lg pt-3 lg:px-28">
              <p>
                My inbox is open if you’d like to have a chat or feel free to reach out on my Github and LinkedIn profiles.
              </p>
              <div className="text-primary md:invisible pt-2 md:pt-0 pb-10 md:pb-0 text-4xl justify-center flex">
                <Link to="https://github.com/nancywu45" target="_blank">
                  <AiFillGithub className="mx-2"/>
                </Link>
                <Link to="https://www.linkedin.com/in/nancywu45/" target="_blank">
                  <BiLogoLinkedinSquare className="mx-2"/>
                </Link>
              </div>
            </div>
          </RevealFromBtm>
          <RevealFromBtm delay={1.5} duration={1}>
            <button className="px-8 md:px-10 py-2 md:py-3 text-xl md:text-2xl border-white border-2 rounded-md hover:bg-midGreen">
              <Link to="mailto:nancywu45@gmail.com">Say Hello</Link>
            </button>
          </RevealFromBtm>
        </div>
      </div>
    </section>
  );
});

export default Contact;
