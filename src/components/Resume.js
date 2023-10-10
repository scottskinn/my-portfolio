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
        <div className="gap-4 flex flex-col items-center justify-center">
          {resume.map((resumeItem) => (
            <a
              href={resumeItem.link}
              key={resumeItem.image}
              className="relative p-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-40 h-40 rounded overflow-hidden">
                <img
                  alt="gallery"
                  className="object-cover object-center w-full h-full"
                  src={resumeItem.image}
                />
              </div>
              <div className="absolute inset-0 w-56 flex flex-col place-self-center items-center justify-center opacity-0 hover:opacity-100 bg-gray-900 transition-opacity duration-700 ease-in-out">
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  {resumeItem.title}
                </h1>
                <p className="leading-relaxed text-center">{resumeItem.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
