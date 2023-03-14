import React from "react";
import ProjectCard from "./projectCard";
import bootstrapIcon48 from "./assets/Icons 48px/bootstrap-icon-static-48.png";
import mongoDBIcon48 from "./assets/Icons 48px/mongodb-icon-static-48.png";
import nodeIcon48 from "./assets/Icons 48px/node-icon-static-48.png";
import expressIcon48 from "./assets/Icons 48px/express-icon-static-48.png";
import jsIcon48 from "./assets/Icons 48px/js-icon-static-48.png";
import reactIcon48 from "./assets/Icons 48px/react-icon-static-48.png";
import muiIconStatic from "./assets/Icons 48px/mui-icon-static-48.png";
import MMpic from "./assets/Project screenshots/MaximumMunchpic1.png";
import weatherAppPic from "./assets/Project screenshots/weather-app-torontosc.png";
import todoAppPic from "./assets/Project screenshots/todo-app-screenshot.png";
import Modal from "./modal";

let TechIcon1 = [
  bootstrapIcon48,
  mongoDBIcon48,
  nodeIcon48,
  expressIcon48,
  jsIcon48,
];

let TechIcon2 = [nodeIcon48, jsIcon48, reactIcon48];

let TechIcon3 = [reactIcon48, jsIcon48, muiIconStatic];

export default function Projects() {
  return (
    <div
      class="h-screen w-screen flex items-center background-image:h-14 bg-gradient-to-r from-sky-500 via-purple-500 to-indigo-500 justify-center items-center "
      id="project-section"
    >
      <div class="box-border h-4/5 w-4/5 p-4 border-4 object-contain flex gap-5 justify-between">
        <ProjectCard
          Picture={MMpic}
          title="Maximum Munch"
          content="Maximum Munch is a food website that implements features from UberEats and Skip the Dishes for both customers and owners ."
          icons={TechIcon1}
          arrayLength={TechIcon1.length}
          repoLink={"https://github.com/alligatoralligin/cuddly-spoon"}
          toggleTarget={"#MaxMunchModal"}
        ></ProjectCard>
        <Modal
          ModalTitle={"Maximum Munch"}
          ModalID={"MaxMunchModal"}
          ModalFeatures={[
            "full CRUD functionality",
            "Login and Authentication using PassportJS",
            "Separate functionalities for owners and user accounts",
            "food and restaurant information saved on database with MongoDB with data relations to the Users and Restaurant Owner",
            "Restaurant owners are allowed to add different types of food to their menu",
            "Users are able to add and remove foods to their cart for checkout from different restaurants",
          ]}
        ></Modal>
        <ProjectCard
          Picture={todoAppPic}
          title="TodoApp"
          content="TodoApp is a app to organize different tasks that need to be done throughout the day. It is styled as a drawing board"
          icons={TechIcon2}
          arrayLength={TechIcon2.length}
          repoLink={"https://github.com/alligatoralligin/todo-list"}
          toggleTarget={"#TodoAppModal"}
        ></ProjectCard>
        <Modal
          ModalTitle={"TodoApp"}
          ModalID={"TodoAppModal"}
          ModalFeatures={[
            "Draggable Sticky Notes",
            "Editable Todo Items",
            "Add, Remove and Check off Todo Items as nescessary",
          ]}
        ></Modal>
        <ProjectCard
          Picture={weatherAppPic}
          title="WeatherApp"
          content="WeatherApp is an app that displays the weather in different cities that is updated hourly using MeteoAPI"
          icons={TechIcon3}
          arrayLength={TechIcon3.length}
          repoLink={"https://github.com/alligatoralligin/weather-app"}
          toggleTarget={"#WeatherAppModal"}
        ></ProjectCard>
        <Modal
          ModalTitle={"WeatherApp"}
          ModalID={"WeatherAppModal"}
          ModalFeatures={[
            "Check the weather, wind speed and temperature in different cities",
            "Weather is updated hourly",
            "Contains Style breakpoints for mobile devices",
          ]}
        ></Modal>
      </div>
    </div>
  );
}
