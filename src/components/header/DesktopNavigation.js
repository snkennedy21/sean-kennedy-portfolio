import React from "react";
import { FaGithub, FaGitlab, FaRegFileAlt, FaLinkedin } from "react-icons/fa";
import Resume from "../../files/Kennedy_Sean_Resume.pdf";
import { useState, useEffect } from "react";

function DesktopNavigation() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  });

  return (
    <React.Fragment>
      <nav
        className={`fixed top-0 left-0 w-full px-10 py-5 flex justify-between items-center bg-darkColor z-10  opacity-0 lg:opacity-100`}
      >
        <ul className="hidden lg:static lg:flex lg:text-white lg:justify-between lg:static w-80 2xl:w-96 lg:mt-0 lg:static lg:translate-x-0 lg:transition-none">
          <li
            className={`${
              visible
                ? "translate-y-0 opacity-100 transition-[opacity,transform] duration-500 delay-100"
                : "-translate-y-5 opacity-0"
            } text-white hover:text-accentPrimary cursor-pointer`}
          >
            <a
              className="flex flex-col justify-center items-center"
              href="https://github.com/snkennedy21"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="w-7 h-7 2xl:w-8 2xl:h-8"></FaGithub>
              <p className="text-xs 2xl:text-sm">Github</p>
            </a>
          </li>
          <li
            className={`${
              visible
                ? "translate-y-0 opacity-100 transition-[opacity,transform] duration-500 delay-300"
                : "-translate-y-5 opacity-0"
            } text-white hover:text-accentPrimary cursor-pointer`}
          >
            <a
              className="flex flex-col justify-center items-center"
              href="https://gitlab.com/snkennedy21"
              target="_blank"
              rel="noreferrer"
            >
              <FaGitlab className="w-7 h-7 2xl:w-8 2xl:h-8"></FaGitlab>
              <p className="text-xs 2xl:text-sm">Gitlab</p>
            </a>
          </li>
          <li
            className={`${
              visible
                ? "translate-y-0 opacity-100 transition-[opacity,transform] duration-500 delay-500"
                : "-translate-y-5 opacity-0"
            } text-white hover:text-accentPrimary cursor-pointer`}
          >
            <a
              className="flex flex-col justify-center items-center"
              href={Resume}
              target="_blank"
              rel="noreferrer"
            >
              <FaRegFileAlt className="w-7 h-7 2xl:w-8 2xl:h-8"></FaRegFileAlt>
              <p className="text-xs 2xl:text-sm">Resume</p>
            </a>
          </li>
          <li
            className={`${
              visible
                ? "translate-y-0 opacity-100 transition-[opacity,transform] duration-500 delay-700"
                : "-translate-y-5 opacity-0"
            } text-white hover:text-accentPrimary cursor-pointer`}
          >
            <a
              className="flex flex-col justify-center items-center"
              href="https://www.linkedin.com/in/sean-kennedy-208b48232/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="w-7 h-7 2xl:w-8 2xl:h-8"></FaLinkedin>
              <p className="text-xs 2xl:text-sm">LinkedIn</p>
            </a>
          </li>
        </ul>

        <ul className="hidden lg:static lg:flex lg:text-white lg:justify-between lg:static lg:mt-0 lg:static lg:translate-x-0 lg:transition-none w-80 2xl:w-96">
          <li
            className={`${
              visible
                ? "translate-y-0 opacity-100 transition-[opacity,transform] duration-500 delay-700"
                : "-translate-y-5 opacity-0"
            } text-white hover:text-accentPrimary transition cursor-pointer text-xl 2xl:text-3xl`}
          >
            <a href="#about">About</a>
          </li>
          <li
            className={`${
              visible
                ? "translate-y-0 opacity-100 transition-[opacity,transform] duration-500 delay-[400ms]"
                : "-translate-y-5 opacity-0"
            } text-white hover:text-accentPrimary transition cursor-pointer text-xl 2xl:text-3xl`}
          >
            <a href="#portfolio">Portfolio</a>
          </li>
          <li
            className={`${
              visible
                ? "translate-y-0 opacity-100 transition-[opacity,transform] duration-500 delay-100"
                : "-translate-y-5 opacity-0"
            } text-white hover:text-accentPrimary transition cursor-pointer text-xl 2xl:text-3xl`}
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default DesktopNavigation;
