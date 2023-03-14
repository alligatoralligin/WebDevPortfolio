import React from "react";
import background1 from "./assets/background1.jpg";
import Navbar2 from "./navbar2";

export default function Biography() {
  return (
    <div class="h-screen w-screen background-image:h-14 bg-gradient-to-r from-sky-500 via-purple-500 to-indigo-500 ">
      <Navbar2 class="w-screen"></Navbar2>
      <div class="flex h-screen justify-center items-center">
        <div class="w-2/4 ">
          <h1 class="text-neutral-100 overflow-hidden inline-block whitespace-nowrap animate-typing">
            Hello this is Alex, Frontend Dev
          </h1>
          <br></br>
          <p class="text-neutral-100 animate-typingmulti">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            mollitia velit omnis unde sapiente similique placeat sit dolore
            sint, voluptatibus hic quis consequatur tenetur necessitatibus,
            asperiores, maiores aliquid architecto laudantium.
          </p>
        </div>
      </div>
    </div>
  );
}
