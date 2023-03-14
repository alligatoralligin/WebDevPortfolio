import React from "react";
import skillIcon from "./assets/skill-icon-static.png";
import projectIcon from "./assets/project-icon-static.png";
import contactIcon from "./assets/contact-icon-static.png";
import futureIcon from "./assets/future-icon-static.png";
export default function Navbar2() {
  return (
    <nav class="relative flex max-w-full flex-wrap items-center justify-between bg-transparent py-3 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600">
      <div class="flex w-screen flex-wrap items-center justify-between px-6">
        <div>
          <a
            class="text-2xl text-neutral-100 dark:text-neutral-200 animate-pop "
            href="#"
          >
            Alex Duong
          </a>
        </div>
        <div>
          <a
            class="text-l text-neutral-100 dark:text-neutral-200 "
            href="#skills-section"
          >
            <img class="animate-pop hover:scale-105" src={skillIcon}></img>
          </a>
        </div>
        <div>
          <a
            class="text-l text-neutral-100 dark:text-neutral-200"
            href="#project-section"
          >
            <img class="animate-pop hover:scale-105" src={projectIcon}></img>
          </a>
        </div>
        <div>
          <a
            class="text-l text-neutral-100 dark:text-neutral-200"
            href="#current-projects"
          >
            <img class="animate-pop hover:scale-105" src={futureIcon} alt="" />
          </a>
        </div>
        <div>
          <a
            class="text-l text-neutral-100 dark:text-neutral-200"
            href="#contact-section"
          >
            <img class="animate-pop hover:scale-105" src={contactIcon} alt="" />
          </a>
        </div>
      </div>
    </nav>
  );
}
