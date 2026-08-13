import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Web Developer",
          "Full-Stack Developer",
          "MERN Stack Developer",
          "Frontend Developer",
          "JavaScript Developer",
          "Aspiring Software Engineer",
          "Project Builder",
          "Problem Solver",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
