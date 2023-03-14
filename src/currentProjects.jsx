import React from "react";
import Carousel from "./carousel";

export default function CurrentProjects() {
  return (
    <div
      class="h-screen w-screen flex items-center background-image:h-14 bg-gradient-to-r from-sky-500 via-purple-500 to-indigo-500 justify-center items-center "
      id="current-projects"
    >
      <Carousel class="max-w-md"></Carousel>
    </div>
  );
}
