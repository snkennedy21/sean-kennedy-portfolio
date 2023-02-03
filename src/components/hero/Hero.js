import React from "react";
import ButtonPrimary from "../ui/ButtonPrimary";
import { FaArrowDown } from "react-icons/fa";
import { useEffect, useState } from "react";

function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  });

  return (
    <React.Fragment>
      {/* <Header></Header> */}
      <section
        className={`${
          visible ? "opacity-1" : "translate-y-20 opacity-0"
        } h-screen flex flex-col gap-4 justify-center items-center transition delay-1000 duration-1000`}
      >
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
