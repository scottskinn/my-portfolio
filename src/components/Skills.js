import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          As a skilled Web Developer, I possess a strong foundation in JavaScript, React, Node.js, Bootstrap, MySQL, and MongoDB. With proficiency in JavaScript, I am able to create dynamic and interactive web applications, leveraging the power of React for building modern and responsive user interfaces. Furthermore, my expertise in Node.js allows me to develop server-side applications and RESTful APIs, ensuring seamless communication between the front-end and back-end. I am also well-versed in utilizing Bootstrap to design visually appealing and mobile-friendly websites. In addition, my knowledge of MySQL and MongoDB enables me to effectively manage and query databases, ensuring efficient data storage and retrieval for web applications. With these robust skills and technologies, I am equipped to deliver innovative and high-quality solutions for diverse web development projects
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}