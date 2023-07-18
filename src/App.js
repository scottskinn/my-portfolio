import React, { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";

// Lazy-loaded components
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Resume = lazy(() => import("./components/Resume"));

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-600 body-font">
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </Suspense>
    </main>
  );
}
