import React from "react";
import SectionHeader from "../ui/SectionHeader";

import tailwindLogo from "../../images/tailwind-logo.png";
import javascriptLogo from "../../images/javascript-logo.png";
import htmlLogo from "../../images/html-logo.png";
import cssLogo from "../../images/css-logo.png";
import bootstrapLogo from "../../images/bootstrap-logo.png";
import reactLogo from "../../images/react-logo.png";
import fastApiLogo from "../../images/fastapi-logo.png";
import djangoLogo from "../../images/django-logo.png";
import pythonLogo from "../../images/python-logo.png";
import postgresLogo from "../../images/postgres-logo.png";
import gitLogo from "../../images/git-logo.png";
import mongoLogo from "../../images/mongo-logo.png";
import aboutImage from "../../images/about-image.png";
import { css } from "@emotion/react";

function About() {
  return (
    <section id="about" className="mx-4 md:mx-16 lg:mx-28">
      <SectionHeader>About</SectionHeader>
      <div>
        <h2 className="text-white text-4xl">Hi, I'm Sean Kennedy</h2>
        <p className="text-white text-2xl">
          I'm a full stack web developer with a passion for learning new
          technologies.
        </p>
      </div>

      <h2 className="text-white text-3xl mt-5 mb-10">
        Check out the tech stack I love
      </h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 justify-center items-center text-white">
        <li className="flex flex-col justify-center items-center">
          <img className="w-1/4" src={javascriptLogo} />
          <p>Javascript</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <img className="w-1/4" src={pythonLogo} />
          <p>Python</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <img className="w-1/4" src={reactLogo} />
          <p>React</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <img className="w-1/4" src={fastApiLogo} />
          <p>Fast API</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <img className="w-1/4" src={djangoLogo} />
          <p>Django</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <img className="w-1/4" src={htmlLogo} />
          <p>HTML</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <img className="w-1/4" src={cssLogo} />
          <p>CSS</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <img className="w-1/4" src={gitLogo} />
          <p>Git</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <img className="w-1/4" src={tailwindLogo} />
          <p>Tailwind</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <img className="w-1/4" src={postgresLogo} />
          <p>PostgreSQL</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <img className="w-1/4" src={bootstrapLogo} />
          <p>Bootstrap</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <img className="w-1/4" src={mongoLogo} />
          <p>MongoDB</p>
        </li>
      </ul>
    </section>
  );
}

export default About;
