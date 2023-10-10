import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 md:px-5 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
            Hi, I'm Scott.
            <br className="hidden lg:inline-block" /> Front-end Web Developer.
          </h1>
          <p className="mb-8 leading-relaxed text-gray-100 sm:text-left">
            Graduated from Carleton University with a certificate in Full-Stack Web Development. A highly motivated and skilled individual seeking to transition a career in web development. Proficient in React and JavaScript, with a strong understanding of front-end web design principles. Proven learner with excellent problem-solving skills and a passion for creating dynamic and engaging websites. Creative Developer with proficiency in monitoring software performance tests and revising programs for corrections. First-rate critical thinking and organizational skills. Excellent understanding of basic development principles and programming for diverse operating systems.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-gray-800 bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:flex-grow lg:pr-24 md:pr-8 flex justify-center items-center md:items-start">
          <img
            className="object-cover object-center rounded h-auto max-w-full"
            alt="hero"
            src="./images/head-shot.jpg"
          />
        </div>
      </div>
    </section>
  );
}
