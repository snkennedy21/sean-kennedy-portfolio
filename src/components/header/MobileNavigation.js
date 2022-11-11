import React from "react";
import { useState, useEffect } from "react";
import { FaGithub, FaGitlab, FaRegFileAlt, FaLinkedin } from "react-icons/fa";

function MobileNavigation() {
  const [navOpen, setNavOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
      if (windowSize > 768) {
        console.log("hello");
        setNavOpen(false);
      }
    }
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

  function toggleNavHandler() {
    setNavOpen(!navOpen);
  }

  function getWindowSize() {
    const { innerWidth } = window;
    return innerWidth;
  }

  return (
    <React.Fragment>
      {/* Navigation Hamburger */}
      <div
        onClick={toggleNavHandler}
        className="fixed top-7 right-5 md:hidden cursor-pointer z-50"
      >
        <div
          className={`${
            navOpen ? "rotate-45 translate-y-2" : ""
          } transition duration-500 bg-white w-9 h-0.5 m-1.5 z-50`}
        ></div>
        <div
          className={`${
            navOpen ? "opacity-0" : "opacity-100"
          } transition duration-300 bg-white w-9 h-0.5 m-1.5 z-50`}
        ></div>
        <div
          className={`${
            navOpen ? "-rotate-45 -translate-y-2" : ""
          } transition duration-500 bg-white w-9 h-0.5 m-1.5 z-50`}
        ></div>
      </div>

      {/* Mobile Navigation Pieces */}
      <div>
        <div
          className={`${
            navOpen ? "translate-x-0" : "translate-x-full"
          } transition duration-500 fixed top-0 flex justify-center items-center h-2/4 w-full z-10 bg-mobileNavColor`}
        >
          <ul className="flex flex-col justify-around items-center h-full">
            <li
              className={`${
                navOpen
                  ? "opacity-1 delay-300 duration-1000"
                  : "translate-x-6 opacity-0"
              } text-white`}
            >
              <a href="#about">About</a>
            </li>
            <li
              className={`${
                navOpen
                  ? "opacity-1 delay-500 duration-1000"
                  : "translate-x-6 opacity-0"
              } text-white`}
            >
              <a href="#portfolio">Portfolio</a>
            </li>
            <li
              className={`${
                navOpen
                  ? "opacity-1 delay-700 duration-1000"
                  : "translate-x-6 opacity-0"
              } text-white`}
            >
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div
          className={`${
            navOpen ? "translate-x-0" : "-translate-x-full"
          } transition duration-500 fixed top-1/2 flex justify-center items-center h-2/4 w-full z-10 bg-mobileNavColor`}
        >
          <ul className="flex flex-col justify-around items-center h-full">
            <li
              className={`${
                navOpen
                  ? "opacity-1 delay-700 duration-1000"
                  : "-translate-x-6 opacity-0"
              } text-white flex flex-col items-center justify-center`}
            >
              <FaGithub className="text-white w-6 h-6"></FaGithub>
              <p className="text-white text-xs">Github</p>
            </li>
            <li
              className={`${
                navOpen
                  ? "opacity-1 delay-500 duration-1000"
                  : "-translate-x-6 opacity-0"
              } text-white flex flex-col items-center justify-center`}
            >
              <FaGitlab className="text-white w-6 h-6"></FaGitlab>
              <p className="text-white text-xs">Github</p>
            </li>
            <li
              className={`${
                navOpen
                  ? "opacity-1 delay-300 duration-1000"
                  : "-translate-x-6 opacity-0"
              } text-white flex flex-col items-center justify-center`}
            >
              <FaRegFileAlt className="text-white w-6 h-6"></FaRegFileAlt>
              <p className="text-white text-xs">Resume</p>
            </li>
            <li
              className={`${
                navOpen
                  ? "opacity-1 delay-100 duration-1000"
                  : "-translate-x-6 opacity-0"
              } text-white flex flex-col items-center justify-center`}
            >
              <FaLinkedin className="text-white w-6 h-6"></FaLinkedin>
              <p className="text-white text-xs">LinkedIn</p>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MobileNavigation;
