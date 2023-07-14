import React from "react";
import { resume } from "../data";

export default function Resume() {
  return (
    <section id="resume">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Resume
          </h1>
        </div>
        <div className="gap-4">
          {resume.map((resume) => (
            <a href={resume.link} key={resume.image} className="p-4" target="_blank">
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 rounded overflow-hidden">
                  <img
                    alt="gallery"
                    className="object-cover object-center w-full h-full"
                    src={resume.image}
                  />
                </div>
                <div className="px-8 py-10 absolute w-50 h-50 bg-gray-900 opacity-0 hover:opacity-90 transition-opacity duration-300 ease-in-out">
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {resume.title}
                  </h1>
                  <p className="leading-relaxed">{resume.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
