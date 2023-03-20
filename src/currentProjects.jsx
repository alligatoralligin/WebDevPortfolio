import React from "react";
import Carousel from "./carousel";

export default function CurrentProjects() {
  return (
    <div
      class="h-screen w-screen flex items-center background-image:h-14 bg-gradient-to-r from-sky-500 via-purple-500 to-indigo-500 justify-center items-center flex-wrap "
      id="current-projects"
    >
      <h1 class="w-screen inline-block text-center text-neutral-100 xl:translate-y-36 xl:text-5xl text-3xl translate-y-64 hover:text-fuchsia-800 ">
        Future Projects
      </h1>
      <Carousel class="max-w-md"></Carousel>
    </div>
  );
}
