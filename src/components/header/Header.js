import React from "react";
import { useState, useEffect } from "react";
import { FaGithub, FaGitlab, FaRegFileAlt, FaLinkedin } from "react-icons/fa";

function Header() {
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
    const { innerWidth, innerHeight } = window;
    return innerWidth;
  }

  return (
    <React.Fragment>
      <nav className="relative px-10 py-5 flex justify-between items-center bg-darkColor z-10">
        <ul className="flex gap-7">
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
            <a>About</a>
          </li>
          <li>
            <a>Portfolio</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
        <div onClick={toggleNavHandler} className="md:hidden cursor-pointer">
          <div
            className={`${
              navOpen ? "rotate-45 translate-y-2" : ""
            } transition duration-500 bg-white w-9 h-0.5 m-1.5`}
          ></div>
          <div
            className={`${
              navOpen ? "opacity-0" : "opacity-100"
            } transition duration-300 bg-white w-9 h-0.5 m-1.5`}
          ></div>
          <div
            className={`${
              navOpen ? "-rotate-45 -translate-y-2" : ""
            } transition duration-500 bg-white w-9 h-0.5 m-1.5`}
          ></div>
        </div>
      </nav>
      <ul
        className={`${
          navOpen ? "" : "-translate-y-20"
        } transform duration-500 relative w-full h-20 bg-darkColor text-white flex justify-around items-center z-0 md:-translate-y-20 md:transition-none`}
      >
        <li
          className={`${
            navOpen
              ? "opacity-1 delay-300 duration-1000"
              : "-translate-y-4 opacity-0"
          } transition`}
        >
          <a>About</a>
        </li>
        <li
          className={`${
            navOpen
              ? "opacity-1 delay-500 duration-1000"
              : "-translate-y-4 opacity-0"
          } transition`}
        >
          <a>Portfolio</a>
        </li>
        <li
          className={`${
            navOpen
              ? "opacity-1 delay-700 duration-1000"
              : "-translate-y-4 opacity-0"
          } transition`}
        >
          <a>Contact</a>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Header;
