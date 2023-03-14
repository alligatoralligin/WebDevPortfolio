import React, { useState } from "react";
import useFormState from "./Customhooks/useFormState";

export default function Contact() {
  const [name, handleName, resetName] = useFormState("");
  const [email, handleEmail, resetEmail] = useFormState("");
  const [message, handleMessage, resetMessage] = useFormState("");

  function handleOnChange(e) {
    setName = (e) => {
      setEmail(e.target.value);
    };
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    resetEmail();
    resetMessage();
    resetName();
  };

  return (
    <div
      class="h-screen w-screen flex items-center background-image:h-14 bg-gradient-to-r from-sky-500 via-purple-500 to-indigo-500 justify-center items-center "
      id="contact-section"
    >
      <div class="max-w-lg ">
        <h1 class="text-neutral-100 text-center">Contact Me </h1>
        <br></br>
        <h3 class="text-neutral-100">
          Please feel free to contact me if there is any questions or if you
          would like to work together. Leave a message along with some of your
          details so that I can reach you.
        </h3>
        <form onSubmit={handleSubmit}>
          <label class="text-neutral-100" for="name">
            Name
          </label>
          <br></br>
          <input
            class="w-full"
            type="text"
            id="name"
            value={name}
            onChange={handleName}
          ></input>
          <br></br>
          <label class="text-neutral-100" for="email">
            Email
          </label>
          <br></br>
          <input
            class="w-full"
            type="text"
            id="email"
            value={email}
            onChange={handleEmail}
          ></input>
          <br></br>
          <br></br>
          <label class="text-neutral-100" for="message">
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
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
