import { useState } from "react";
import Biography from "./bio";
import "./App.css";
import Navbar from "./navbar";
import Skills from "./Skills";
import Navbar2 from "./navbar2";
import Projects from "./projects";
import CurrentProjects from "./currentProjects";
import Contact from "./Contact";

// ~Layout
//Ideally the portfolio does not make use of the default navbar, using something similar to a list at different breakpoints of one page
//Bio with a fancy display --> skills --> into a box of all of my finished projects with the technology used in each of them. hovering over these images will create a popout that displays
//more information about what i learned in each propject. --> leading into contact information
//Home page is a small bio

function App() {
  return (
    <div>
      <Biography></Biography>
      <Skills></Skills>
      <Projects />
      <CurrentProjects />
      <Contact></Contact>
    </div>
  );
}

export default App;
