import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { Reveal } from "../components/Reveal";
import { Enlarge } from "../components/Enlarge";
import { BiLogoLinkedinSquare } from "react-icons/bi";

const SocialMedia = () => {
  return (
    <div className="text-primary fixed bottom-0 invisible md:visible md:pl-20 lg:pl-30 text-4xl flex-col">
      <Reveal delay={6} duration={1}>
        <div className="relative flex flex-col">
          <Link className="flex shrink" to="https://github.com/nnxiwu" target="_blank">
            <Enlarge scale={1.1}>
              <AiFillGithub className="my-2"/>
            </Enlarge>
          </Link>
          <Link className="flex shrink" to="https://www.linkedin.com/in/nancywu45/" target="_blank">
            <Enlarge scale={1.1}>
              <BiLogoLinkedinSquare/>
            </Enlarge>
          </Link>
          <div className="flex-grow border-l border-grey mt-2 ml-4 h-40"></div>
        </div>
      </Reveal>
    </div>
  );
};

export default SocialMedia;
