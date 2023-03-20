import React from "react";
import background1 from "./assets/background1.jpg";
import Navbar2 from "./navbar2";
import { useInView } from "react-intersection-observer";

export default function Biography() {
  const { ref: headerRef, inView: headerisVisible } = useInView();
  return (
    <div class="h-screen w-screen background-image:h-14 bg-gradient-to-r from-sky-500 via-purple-500 to-indigo-500 ">
      <Navbar2 class="w-screen"></Navbar2>
      <div class="flex h-screen justify-center items-center">
        <div class="w-2/4 ">
          <h1
            ref={headerRef}
            className={`text-neutral-100 overflow-hidden inline-block xl:whitespace-nowrap ${
              headerisVisible ? "animate-typing" : ""
            }`}
          >
            Hello this is Alex, Frontend Dev
          </h1>
          <br></br>
          <p class="text-neutral-100 animate-typingmulti">
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
