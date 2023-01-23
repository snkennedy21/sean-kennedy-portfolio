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

function About() {
  return (
    <section id="about" className="mx-3.5 mx-12 md:mx-16 lg:mx-28">
      <SectionHeader>About</SectionHeader>

      <div className="flex justify-center">
        <div className="w-[1300px]">
          <p className="text-sm leading-loose text-white sm:text-lg sm:leading-loose md:text-xl md:leading-loose lg:text-2xl lg:leading-loose xl:text-3xl xl:leading-loose 2xl:text-4xl 2xl:leading-loose">
            As a software developer, I have a passion for creating innovative
            and effective solutions to complex technical challenges. My
            expertise lies in developing high-quality, scalable, and
            maintainable code using a range of modern tools and technologies,
            including React, Redux, Django, and FastAPI. I am a strong
            collaborator, with experience working in cross-functional teams to
            deliver successful projects on time. I am always looking for new
            ways to improve my skills and stay up to date with the latest
            developments in the field. I am excited to connect with other
            professionals and explore opportunities for growth and
            collaboration.
          </p>
        </div>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 justify-center items-center text-white mt-20">
        <li className="flex flex-col justify-center items-center">
          <img
            className="w-1/3 sm:w-1/4 2xl:w-1/4"
            src={javascriptLogo}
            alt="javascript logo"
          />
          <p>Javascript</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <img className="w-1/3 sm:w-1/4" src={pythonLogo} alt="Python logo" />
          <p>Python</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <img className="w-1/3 sm:w-1/4" src={reactLogo} alt="React logo" />
          <p>React</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <img
            className="w-1/3 sm:w-1/4"
            src={fastApiLogo}
            alt="Fast API logo"
          />
          <p>Fast API</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <img className="w-1/3 sm:w-1/4" src={djangoLogo} alt="Django logo" />
          <p>Django</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <img className="w-1/3 sm:w-1/4" src={htmlLogo} alt="HTML logo" />
          <p>HTML</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <img className="w-1/3 sm:w-1/4" src={cssLogo} alt="CSS logo" />
          <p>CSS</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <img className="w-1/3 sm:w-1/4" src={gitLogo} alt="Git logo" />
          <p>Git</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <img
            className="w-1/3 sm:w-1/4"
            src={tailwindLogo}
            alt="Tailwind CSS logo"
          />
          <p>Tailwind CSS</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <img
            className="w-1/3 sm:w-1/4"
            src={postgresLogo}
            alt="PostgreSQL logo"
          />
          <p>PostgreSQL</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <img
            className="w-1/3 sm:w-1/4"
            src={bootstrapLogo}
            alt="Bootstrap logo"
          />
          <p>Bootstrap</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <img className="w-1/3 sm:w-1/4" src={mongoLogo} alt="MongoDB logo" />
          <p>MongoDB</p>
        </li>
      </ul>
    </section>
  );
}

export default About;
