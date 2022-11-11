import React from "react";
import { useState } from "react";
import { FaEye, FaGithub, FaGitlab } from "react-icons/fa";

function PortfolioProject(props) {
  const [projectHover, setProjectHover] = useState(false);

  function projectHoverHandler() {
    setProjectHover(!projectHover);
  }

  return (
    <React.Fragment>
      <div
        onMouseEnter={projectHoverHandler}
        onMouseLeave={projectHoverHandler}
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
            } flex flex-col justify-center items-center cursor-pointer hover:text-red-500`}
          >
            <a href={props.liveLink}>
              <FaEye className="w-10 h-10"></FaEye>
              <p>Live</p>
            </a>
          </li>
          <li
            className={`${
              projectHover
                ? "translate-y-0 opacity-100 transition-[opacity,transform] duration-700 delay-150"
                : "-translate-y-10 opacity-0"
            } flex flex-col justify-center items-center cursor-pointer hover:text-red-500`}
          >
            <a href={props.codeLink}>
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
            } flex flex-col justify-center items-center cursor-pointer hover:text-red-500`}
          >
            <FaEye className="w-10 h-10"></FaEye>
            <p>Live</p>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default PortfolioProject;
