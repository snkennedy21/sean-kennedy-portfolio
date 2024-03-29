import React from "react";
import { useState, useEffect } from "react";
import { FaGithub, FaGitlab, FaRegFileAlt, FaLinkedin } from "react-icons/fa";
import Resume from "../../files/Kennedy_Sean_Resume.pdf";

function MobileNavigation() {
  const [navOpen, setNavOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
      if (windowSize > 1024) {
        setNavOpen(false);
      }
    }
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else if (!navOpen) {
      document.body.style.overflow = "unset";
    }
  }, [navOpen]);

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
        className="fixed top-4 right-5 lg:hidden cursor-pointer z-50 py-4 px-2 rounded-full bg-darkColor"
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
      <nav>
        <div
          className={`${
            navOpen ? "translate-x-0" : "translate-x-full"
          } transition duration-500 fixed top-0 flex justify-center items-center h-2/4 w-full z-10 bg-mobileNavColor`}
        >
          <ul className="flex flex-col justify-around items-center h-full text-3xl">
            <li
              onClick={toggleNavHandler}
              className={`${
                navOpen
                  ? "opacity-1 delay-300 transition-[transform,opacity] duration-1000"
                  : "translate-x-6 opacity-0"
              } text-white hover:text-accentPrimary`}
            >
              <a href="#about">About</a>
            </li>
            <li
              onClick={toggleNavHandler}
              className={`${
                navOpen
                  ? "opacity-1 delay-500 transition-[transform,opacity] duration-1000"
                  : "translate-x-6 opacity-0"
              } text-white hover:text-accentPrimary`}
            >
              <a href="#portfolio">Portfolio</a>
            </li>
            <li
              onClick={toggleNavHandler}
              className={`${
                navOpen
                  ? "opacity-1 delay-700 transition-[transform,opacity] duration-1000"
                  : "translate-x-6 opacity-0"
              } text-white hover:text-accentPrimary`}
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
              onClick={toggleNavHandler}
              className={`${
                navOpen
                  ? "opacity-1 delay-700 transition-[transform,opacity] duration-1000"
                  : "-translate-x-6 opacity-0"
              } text-white hover:text-accentPrimary`}
            >
              <a
                className="flex flex-col items-center justify-center"
                href="https://github.com/snkennedy21"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="w-10 h-10"></FaGithub>
                <p className="text-xl">Github</p>
              </a>
            </li>
            <li
              onClick={toggleNavHandler}
              className={`${
                navOpen
                  ? "opacity-1 delay-500 transition-[transform,opacity] duration-1000"
                  : "-translate-x-6 opacity-0"
              } text-white hover:text-accentPrimary`}
            >
              <a
                className="flex flex-col items-center justify-center"
                href="https://gitlab.com/snkennedy21"
                target="_blank"
                rel="noreferrer"
              >
                <FaGitlab className="w-10 h-10"></FaGitlab>
                <p className="text-xl">Gitlab</p>
              </a>
            </li>
            <li
              onClick={toggleNavHandler}
              className={`${
                navOpen
                  ? "opacity-1 delay-300 transition-[transform,opacity] duration-1000"
                  : "-translate-x-6 opacity-0"
              } text-white hover:text-accentPrimary`}
            >
              <a
                className="flex flex-col items-center justify-center"
                href={Resume}
                target="_blank"
                rel="noreferrer"
              >
                <FaRegFileAlt className="w-10 h-10"></FaRegFileAlt>
                <p className="text-xl">Resume</p>
              </a>
            </li>
            <li
              onClick={toggleNavHandler}
              className={`${
                navOpen
                  ? "opacity-1 delay-100 transition-[transform,opacity] duration-1000"
                  : "-translate-x-6 opacity-0"
              } text-white hover:text-accentPrimary`}
            >
              <a
                className="flex flex-col items-center justify-center"
                href="https://www.linkedin.com/in/sean-kennedy-208b48232/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="w-10 h-10"></FaLinkedin>
                <p className="text-xl">LinkedIn</p>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default MobileNavigation;
