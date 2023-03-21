import React, { useState } from "react";
import useFormState from "./Customhooks/useFormState";
import { useInView } from "react-intersection-observer";
import { useForm } from "@formspree/react";

export default function Contact() {
  const [name, handleName, resetName] = useFormState("");
  const [email, handleEmail, resetEmail] = useFormState("");
  const [message, handleMessage, resetMessage] = useFormState("");
  const { ref: contactRef, inView: contactIsVisible } = useInView();
  const [state, handleSubmit] = useForm("xvonbzjb");

  function handleOnChange(e) {
    setName = (e) => {
      setEmail(e.target.value);
    };
  }

  if (state.succeeded) {
    return <div>Thank you for submitting your message!</div>;
  }

  return (
    <div
      class="h-screen w-screen flex items-center background-image:h-14 bg-gradient-to-r from-sky-500 via-purple-500 to-indigo-500 justify-center items-center"
      id="contact-section"
    >
      <div
        ref={contactRef}
        className={`w-5/6 xl:max-w-lg  ${
          contactIsVisible ? "animate-fastPop" : ""
        }`}
      >
        <h1 class="text-neutral-100 text-center xl:text-3xl">Contact Me </h1>
        <br></br>
        <h3 class="text-neutral-100 text-xs xl:text-lg">
          Please feel free to contact me if there is any questions or if you
          would like to work together. Leave a message along with some of your
          details so that I can reach you.
        </h3>
        <form onSubmit={handleSubmit}>
          <label
            class="text-neutral-100 text-neutral-100 text-xs xl:text-lg"
            for="name"
            htmlFor="name"
          >
            Name
          </label>
          <br></br>
          <input
            class="w-full"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleName}
          ></input>
          <br></br>
          <label
            class="text-neutral-100 text-xs xl:text-lg"
            for="email"
            htmlFor="email"
          >
            Email
          </label>
          <br></br>
          <input
            class="w-full"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmail}
          ></input>
          <br></br>
          <br></br>
          <label
            class="text-neutral-100 text-xs xl:text-lg"
            for="message"
            htmlFor="message"
          >
            Message
          </label>
          <br></br>
          <textarea
            class="w-full"
            id="message"
            name="message"
            value={message}
            onChange={handleMessage}
            rows="4"
            col="50"
          ></textarea>
          <br></br>
          <br></br>
          <button
            class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            type="submit"
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
