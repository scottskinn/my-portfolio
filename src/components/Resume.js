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
                <div className="flex flex-wrap -m-4">                    
                    {resume.map((resume) => (
                        <a href={resume.link} key={resume.image} className="sm:w-1/2 w-100 p-4" target="_blank" >
                            <div className="flex relative">
                                <img
                                alt="gallery"
                                className="absolute inset-0 w-auto h-full object-contain object-center place-content-center"
                                src={resume.image}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
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