import React from "react";
import gitHubIcon from "./assets/github50-icon-static.png";
import { useInView } from "react-intersection-observer";

export default function ProjectCard(props) {
  let iconsArray = [];
  for (let i = 0; i < props.arrayLength; i++) {
    iconsArray.push(
      <img
        class="hover:scale-125 h-10 w-10 xl:w-full h-full max-w-lg xl:object-scale-down"
        src={props.icons[i]}
        alt="techIcon"
      ></img>
    );
  }
  return (
    <div class="w-11/12 xl:max-h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 xl:m-7 mr-7 ml-5 hover:scale-95">
      <a className="xl:max-w-256 h-4/5">
        <img
          class="object-scale-down w-full max-h-35 h-5/6 m-0 w-256 h-125 cursor-pointer"
          src={props.Picture}
        ></img>
      </a>
      <div class="xl:p-5 xl:ml-12 xl:mt-5">
        <a href="#">
          <h5
            class="mb-2 text-sm xl:text-2xl font-bold tracking-tight text-gray-900 dark:text-white
            "
          >
            {props.title}
          </h5>
        </a>
        <p class="mb-3 text-sm xl:text-lg font-normal w-56 text-gray-700 dark:text-gray-400">
          {props.content}
        </p>
        <a
          data-te-toggle="modal"
          data-te-target={props.toggleTarget}
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-6 cursor-pointer text-sm"
        >
          Read more
          <svg
            aria-hidden="true"
            class="w-1 h-1 xl:w-4 xl:h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
        </a>
        <a href={props.repoLink}>
          <img
            class="inline hover:scale-105"
            src={gitHubIcon}
            alt="githubIcon"
          />
        </a>
        <div class="mt-2 flex object-scale-down h-full w-full">
          {iconsArray}
        </div>
      </div>
    </div>
  );
}
