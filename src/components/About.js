import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Scott.
            <br className="hidden lg:inline-block" /> I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
          Welcome to my profile page! I am currently enrolled at Carlton University in one of their coding boot camps. I have been learning to code and all the other aspects that come with it for a couple months now. So far I am really enjoying it! Previously, I was working as a machinist for approximately ten years. I have always loved making things but wanted a different career for myself. Thus far, web development seems like it could be a good fit for me. Here is a showcase of my work so far.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-md lg:w-1/2 md:w-1/2 w-5/6 rounded">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./head-shot.jpg"
          />
        </div>
      </div>
    </section>
  );
}