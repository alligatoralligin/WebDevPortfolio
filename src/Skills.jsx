import React from "react";
import javascriptIconStatic from "./assets/javascript-icon-static.png";
import reactIconStatic from "./assets/react-icon-static.png";
import mongoDBIconStatic from "./assets/mongoDB-icon-static.png";
import bootstrapIconStatic from "./assets/bootstrap-icon-static.png";
import muiIconStatic from "./assets/mui-icon-static.png";
import nodeIconStatic from "./assets/node-icon-static.png";
import tailwindIconStatic from "./assets/tw-icon-static.png";
import htmlIconStatic from "./assets/html-icon-static.png";
import cssIconStatic from "./assets/css-icon-static.png";
import { useInView } from "react-intersection-observer";

//icons from icons8
let displayIcons = [];
const iconArray = [
  javascriptIconStatic,
  reactIconStatic,
  mongoDBIconStatic,
  bootstrapIconStatic,
  muiIconStatic,
  nodeIconStatic,
  tailwindIconStatic,
  htmlIconStatic,
  cssIconStatic,
];
const ArrayNames = [
  "Javascript",
  "React",
  "MongoDB",
  "Bootstrap",
  "MUI",
  "Node",
  "Tailwind",
  "HTML",
  "CSS",
];
for (let i = 0; i < iconArray.length; i++) {
  displayIcons.push(
    <div class="group relative flex justify-center">
      <img
        class={`object-scale-down inline hover:scale-125 animate-fastPop`}
        src={iconArray[i]}
      ></img>

      <span class="absolute top-20 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
        {ArrayNames[i]}
      </span>
    </div>
  );
}
export default function Skills() {
  const { ref: boxRef, inView: boxisVisible } = useInView();
  const { ref: skillRef, inView: skillIsVisible } = useInView();
  return (
    <div
      class="grid grid-cols-2 gap-96 h-screen w-screen items-center background-image:h-14 bg-gradient-to-r from-sky-500 via-purple-500 to-indigo-500 "
      id="skills-section"
    >
      <div
        ref={skillRef}
        className={` mt-5 xl:mt-0 xl:text-left overflow-hidden  ${
          skillIsVisible
            ? "xl:translate-x-2/4 xl:transition xl:duration-[1750ms]"
            : ""
        }`}
      >
        <br></br>
        <br></br>
        <h2 class="text-neutral-100 text-xl underline font-bold">Education</h2>
        <h2 class="text-neutral-100 mb-0">
          <br></br>
          Graduated from University of Toronto BSC Psychology
          <br></br>
          The Web Developer Bootcamp 2023 -Colt Steele
          <br></br>
          The Modern React Bootcamp -Colt Steele
        </h2>
        <br></br>
        <h2 class="text-neutral-100 text-xl underline font-bold">
          Technologies
        </h2>
        <h2 class="text-neutral-100 text-lg underline font-bold">Frontend</h2>
        <p class="text-neutral-100">
          React,Tailwind,HTML,CSS,Bootstrap,MaterialUi
        </p>
        <h2 class="text-neutral-100 text-lg underline font-bold">Backend</h2>
        <p class="text-neutral-100">Node.js,Express.js</p>
        <h2 class="text-neutral-100 text-lg underline font-bold">Database</h2>
        <p class="text-neutral-100">Mongodb</p>
      </div>

      <div
        ref={boxRef}
        className={`box-border h-96 w-96 p-4 border-4 object-contain grid grid-cols-3 gap-5   mt-10 ${
          boxisVisible ? "animate-borderAni" : ""
        }`}
      >
        {displayIcons}
      </div>
    </div>
  );
}
