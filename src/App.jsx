import { useState } from "react";
import Biography from "./bio";
import "./App.css";
import Navbar from "./navbar";
import Skills from "./Skills";
import Navbar2 from "./navbar2";
import Projects from "./projects";
import CurrentProjects from "./currentProjects";
import Contact from "./Contact";
import Projects2 from "./projects2";

// ~Layout
//Ideally the portfolio does not make use of the default navbar, using something similar to a list at different breakpoints of one page
//Bio with a fancy display --> skills --> into a box of all of my finished projects with the technology used in each of them. hovering over these images will create a popout that displays
//more information about what i learned in each propject. --> leading into contact information
//Home page is a small bio

function App() {
  return (
    <div class="absolute inset-0">
      <div class="overflow-x-hidden">
        <Biography></Biography>
        <Skills></Skills>
        <Projects2 />
        <CurrentProjects />
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
