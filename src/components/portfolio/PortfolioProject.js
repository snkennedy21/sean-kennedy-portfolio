import React from "react";
import { useState } from "react";
import { FaEye, FaGithub, FaGitlab, FaRegFileAlt } from "react-icons/fa";

function PortfolioProject(props) {
  const [projectHover, setProjectHover] = useState(false);

  function projectHoverHandler() {
    setProjectHover(true);
  }

  function projectHoverRemoveHandler() {
    setProjectHover(false);
  }

  return (
    <div className="flex flex-col justify-start items-center">
      <div
        onMouseEnter={projectHoverHandler}
        onMouseLeave={projectHoverRemoveHandler}
        className="relative w-full bg-white rounded-lg overflow-hidden"
      >
        <img src={props.image} />
        <div
          className={`${
            projectHover ? "opacity-80" : ""
          } transition duration-700 absolute top-0 left-0 w-full h-full bg-accentPrimary opacity-0`}
        ></div>

        <ul className="absolute top-1/2 left-1/2 text-white flex w-3/4 justify-between -translate-x-1/2 -translate-y-1/2">
          <li
            className={`${
              projectHover
                ? "translate-y-0 opacity-100 transition-[opacity,transform] duration-700"
                : "-translate-y-10 opacity-0"
            } flex flex-col justify-center items-center cursor-pointer hover:text-secondaryColor`}
          >
            <a
              className="flex flex-col justify-center items-center"
              href={props.liveLink}
              target="_blank"
            >
              <FaEye className="w-8 h-8 sm:w-7 sm:h-7 lg:w-8 lg:h-8 2xl:w-10 2xl:h-10"></FaEye>
              <p className="text-sm">Live</p>
            </a>
          </li>
          <li
            className={`${
              projectHover
                ? "translate-y-0 opacity-100 transition-[opacity,transform] duration-700 delay-150"
                : "-translate-y-10 opacity-0"
            } flex flex-col justify-center items-center cursor-pointer hover:text-secondaryColor`}
          >
            <a
              className="flex flex-col justify-center items-center"
              href={props.codeLink}
              target="_blank"
            >
              {props.code === "github" ? (
                <FaGithub className="w-8 h-8 sm:w-7 sm:h-7 lg:w-8 lg:h-8 2xl:w-10 2xl:h-10" />
              ) : (
                <FaGitlab className="w-8 h-8 sm:w-7 sm:h-7 lg:w-8 lg:h-8 2xl:w-10 2xl:h-10" />
              )}
              <p className="text-sm">Code</p>
            </a>
          </li>
          <li
            className={`${
              projectHover
                ? "translate-y-0 opacity-100 transition-[opacity,transform] duration-700 delay-300"
                : "-translate-y-10 opacity-0"
            } flex flex-col justify-center items-center cursor-pointer hover:text-secondaryColor`}
          >
            <FaRegFileAlt className="w-8 h-8 sm:w-7 sm:h-7 lg:w-8 lg:h-8 2xl:w-10 2xl:h-10"></FaRegFileAlt>
            <p className="text-sm">About</p>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-accentPrimary text-md sm:text-xs md:text-md lg:text-lg xl:text-sm 2xl:text-lg">
          {props.tech}
        </p>
      </div>
    </div>
  );
}

export default PortfolioProject;
