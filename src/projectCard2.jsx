import React from "react";

export default function ProjectCard2(props) {
  return (
    <div className="p-36 bg-gradient-to-r from-sky-500 via-purple-500 to-indigo-500 relative w-auto mr-6 ml-10">
      <a href={props.link}>
        <img
          src={props.picture}
          className="hover:shadow-2xl hover:-translate-y-3 duration-300 shadow-black object-fill w-full max-h-96 "
          alt=""
        />
      </a>
      <p className="text-base absolute bottom-0 left-0 ml-2 text-neutral-100">
        {props.title}
      </p>
    </div>
  );
}
