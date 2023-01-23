import React from "react";
import ButtonPrimary from "../ui/ButtonPrimary";
import { FaArrowDown } from "react-icons/fa";

function Hero() {
  return (
    <React.Fragment>
      {/* <Header></Header> */}
      <section className="h-screen flex flex-col gap-4 justify-center items-center">
        <h1 className="text-white text-5xl sm:text-7xl 2xl:text-8xl">
          Sean Kennedy
        </h1>
        <h2 className="text-white text-xl sm:text-3xl 2xl:text-4xl">
          Full Stack Web Developer
        </h2>
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
