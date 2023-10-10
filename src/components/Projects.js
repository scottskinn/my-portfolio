import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="flex flex-row text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-12">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
        </div>

        <div className="flex flex-col items-center">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.title}
              className="w-full md:w-2/3 lg:w-full p-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col lg:flex-row h-full bg-gray-800 p-8 rounded-lg items-center">
                <img
                  alt="project"
                  className="mb-4 object-cover object-center lg:mr-8 rounded-md"
                  src={project.image}
                  style={{ height: "350px", width: "500px" }}
                />
                <div className="flex-auto flex-col items-center text-left lg:text-center">
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
