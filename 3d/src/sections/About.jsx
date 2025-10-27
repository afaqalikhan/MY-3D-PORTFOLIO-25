import React from "react";
import codingImg from "../assets/coding-pov.png";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      {/* bento grid layout */}
      <div className="grid grid-cols-1 gap-4 mt-12 md:grid-cols-6 md:auto-rows-[18rem]">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src={codingImg}
            className="absolute scale-[1.75] -right-20 -top-4 md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Afaq Ali Khan</p>
            <p className="subtext">
              Over the last 8 Years, I developed my frontend and backend dev
              skills to deliver. dynamic and software and web applications
            </p>
          </div>
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2"></div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3"></div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
           <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">Do you want to start a project together ?</p>
            <CopyEmailButton />
           </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext"> Creative Frontend Developer</p>
            <p className="subtext">I specialize in a variety of languages, frameworks, and tools that allow me to build Creative , Robust and Scaleable applications</p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
