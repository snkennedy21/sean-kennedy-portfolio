import React from "react";
import Header from "../header/DesktopNavigation";
import MobileNavigation from "../header/MobileNavigation";
import ButtonPrimary from "../ui/ButtonPrimary";
import { FaArrowDown } from "react-icons/fa";

function Hero() {
  return (
    <React.Fragment>
      {/* <Header></Header> */}
      <section className="h-screen flex flex-col gap-4 justify-center items-center">
        <h1 className="text-white text-6xl">Sean Kennedy</h1>
        <h2 className="text-white text-2xl">Full Stack Web Developer</h2>
        <ButtonPrimary>
          {
            <React.Fragment>
              <span>Portfolio</span>
              <FaArrowDown />
            </React.Fragment>
          }
        </ButtonPrimary>
      </section>
    </React.Fragment>
  );
}

export default Hero;
