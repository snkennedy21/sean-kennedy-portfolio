import React from "react";
import { useState, useEffect } from "react";
import { FaGithub, FaGitlab, FaRegFileAlt, FaLinkedin } from "react-icons/fa";

function DesktopNavigation() {
  return (
    <React.Fragment>
      <nav
        className={`fixed top-0 left-0 w-full px-10 py-5 flex justify-between items-center bg-darkColor z-10 transition duration-500 opacity-0 md:opacity-100`}
      >
        <ul className="hidden md:static md:flex md:text-white md:justify-between md:static md:w-80 md:mt-0 md:static md:translate-x-0 md:transition-none">
          <li className="text-white hover:text-accentPrimary transition duration-300 cursor-pointer">
            <a
              className="flex flex-col justify-center items-center"
              href="https://github.com/snkennedy21"
              target="_blank"
            >
              <FaGithub className="w-6 h-6"></FaGithub>
              <p className="text-xs">Github</p>
            </a>
          </li>
          <li className="text-white hover:text-accentPrimary transition duration-300 cursor-pointer">
            <a
              className="flex flex-col justify-center items-center"
              href="https://gitlab.com/snkennedy21"
              target="_blank"
            >
              <FaGitlab className="w-6 h-6"></FaGitlab>
              <p className="text-xs">Gitlab</p>
            </a>
          </li>
          <li className="text-white hover:text-accentPrimary transition duration-300 cursor-pointer">
            <a className="flex flex-col justify-center items-center" href="">
              <FaRegFileAlt className="w-6 h-6"></FaRegFileAlt>
              <p className="text-xs">Resume</p>
            </a>
          </li>
          <li className="text-white hover:text-accentPrimary transition duration-300 cursor-pointer">
            <a
              className="flex flex-col justify-center items-center"
              href="https://www.linkedin.com/in/sean-kennedy-208b48232/"
              target="_blank"
            >
              <FaLinkedin className="w-6 h-6"></FaLinkedin>
              <p className="text-xs">LinkedIn</p>
            </a>
          </li>
        </ul>

        <ul className="hidden md:static md:flex md:text-white md:justify-between md:static md:w-80 md:mt-0 md:static md:translate-x-0 md:transition-none">
          <li className="text-white hover:text-accentPrimary transition duration-300 cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="text-white hover:text-accentPrimary transition duration-300 cursor-pointer">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="text-white hover:text-accentPrimary transition duration-300 cursor-pointer">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default DesktopNavigation;
