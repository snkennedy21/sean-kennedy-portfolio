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
              <FaEye className="w-10 h-10"></FaEye>
              <p>Live</p>
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
                <FaGithub className="w-10 h-10" />
              ) : (
                <FaGitlab className="w-10 h-10" />
              )}
              <p>Code</p>
            </a>
          </li>
          <li
            className={`${
              projectHover
                ? "translate-y-0 opacity-100 transition-[opacity,transform] duration-700 delay-300"
                : "-translate-y-10 opacity-0"
            } flex flex-col justify-center items-center cursor-pointer hover:text-secondaryColor`}
          >
            <FaRegFileAlt className="w-10 h-10"></FaRegFileAlt>
            <p>About</p>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-accentPrimary text-xl sm:text-sm lg:text-lg xl:text-xl">
          {props.tech}
        </p>
      </div>
    </div>
  );
}

export default PortfolioProject;
