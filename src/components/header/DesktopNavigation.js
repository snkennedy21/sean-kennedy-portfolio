import React from "react";
import { useState, useEffect } from "react";
import { FaGithub, FaGitlab, FaRegFileAlt, FaLinkedin } from "react-icons/fa";

function DesktopNavigation() {
  const [navOpen, setNavOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  function getWindowSize() {
    const { innerWidth } = window;
    return innerWidth;
  }

  return (
    <React.Fragment>
      <nav className="absolute top-0 left-0 w-full px-10 py-5 flex justify-between items-center bg-darkColor z-10">
        <ul className="hidden md:static md:flex md:text-white md:justify-between md:static md:w-80 md:mt-0 md:static md:translate-x-0 md:transition-none">
          <li className="flex flex-col justify-center items-center">
            <FaGithub className="text-white w-6 h-6"></FaGithub>
            <p className="text-white text-xs">Github</p>
          </li>
          <li className="flex flex-col justify-center items-center">
            <FaGitlab className="text-white w-6 h-6"></FaGitlab>
            <p className="text-white text-xs">Github</p>
          </li>
          <li className="flex flex-col justify-center items-center">
            <FaRegFileAlt className="text-white w-6 h-6"></FaRegFileAlt>
            <p className="text-white text-xs">Resume</p>
          </li>
          <li className="flex flex-col justify-center items-center">
            <FaLinkedin className="text-white w-6 h-6"></FaLinkedin>
            <p className="text-white text-xs">LinkedIn</p>
          </li>
        </ul>

        <ul className="hidden md:static md:flex md:text-white md:justify-between md:static md:w-80 md:mt-0 md:static md:translate-x-0 md:transition-none">
          <li>
            <a href="https://www.wikipedia.org/">About</a>
          </li>
          <li>
            <a href="https://www.wikipedia.org/">Portfolio</a>
          </li>
          <li>
            <a href="https://www.wikipedia.org/">Contact</a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default DesktopNavigation;
