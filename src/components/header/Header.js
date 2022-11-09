import React from "react";
import { useState, useEffect } from "react";

function Header() {
  const [navOpen, setNavOpen] = useState(true);
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
        <div className="text-white text-4xl">Sean Kennedy</div>

        <ul className="hidden md:static md:text-white md:flex md:justify-between md:static md:w-96 md:mt-0 md:static md:translate-x-0 md:transition-none">
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
    </React.Fragment>
  );
}

export default Header;
