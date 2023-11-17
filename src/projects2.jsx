import React from "react";
import ProjectCard2 from "./projectCard2";
import MMpic from "./assets/Project screenshots/MaximumMunchpic1.png";
import MMpic2 from "./assets/Project screenshots/MaximumMunchpic2.png";
import weatherAppPic from "./assets/Project screenshots/weather-app-torontosc.png";
import weatherAppPic2 from "./assets/Project screenshots/WeatherAppsc2.png";
import todoAppPic from "./assets/Project screenshots/todo-app-screenshot.png";
import CRMMERNPic from "./assets/Project screenshots/CRMsc1.png";
export default function Projects2() {
  return (
    <div
      class="h-screen w-screen flex items-center background-image:h-14 bg-gradient-to-r from-sky-500 via-purple-500 to-indigo-500 justify-evenly items-center"
      id="project-section"
    >
      <ProjectCard2
        picture={MMpic}
        title="Maximum Munch"
        link={"https://maximummunch.onrender.com"}
      ></ProjectCard2>
      <ProjectCard2
        picture={weatherAppPic2}
        title="Weather App"
        link={"https://alligatoralligin.github.io/weather-app/"}
      ></ProjectCard2>
      <ProjectCard2
        picture={CRMMERNPic}
        title="CRM-MERN"
        link={"#"}
      ></ProjectCard2>
    </div>
  );
}
