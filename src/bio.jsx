import React from "react";
import background1 from "./assets/background1.jpg";
import Navbar2 from "./navbar2";
import { useInView } from "react-intersection-observer";

export default function Biography() {
  const { ref: headerRef, inView: headerisVisible } = useInView();
  return (
    <div className="h-screen w-screen background-image:h-14 bg-gradient-to-r from-sky-500 via-purple-500 to-indigo-500 ">
      <Navbar2 className="w-screen"></Navbar2>
      <div className="flex h-screen justify-center items-center">
        <div className="w-2/4 ">
          <h1
            ref={headerRef}
            className={`text-neutral-100 overflow-hidden inline-block xl:whitespace-nowrap xl:xl:text-5xl ${
              headerisVisible ? "animate-typing" : ""
            }`}
          >
            Hello this is Alex, Frontend Dev
          </h1>
          <br></br>
          <p className="text-neutral-100 animate-typingmulti xl:text-xl">
            I am a Frontend Developer that is seeking a role where I can build
            practical websites and to provide solutions to increasingly complex
            problems. I mainly work with the MERN stack however I am willing to
            learn other frameworks and databases that are more suitable for the
            project. I enjoy learning and implementing new features into my
            projects.
          </p>
        </div>
      </div>
    </div>
  );
}
