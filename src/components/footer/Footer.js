import React from "react";
import reactLogo from "../../images/react-logo.png";
import tailwindLogo from "../../images/tailwind-logo.png";

function Footer() {
  return (
    <section className="flex flex-col justify-center items-center p-1 border-t-2 border-darkColorTint">
      <p className="text-lightGrey">
        Built using <img className="w-5 inline" src={reactLogo} /> and{" "}
        <img className="w-5 inline" src={tailwindLogo} />
      </p>
      <p className="text-lightGrey text-xs">seankennedy.com © 2022</p>
    </section>
  );
}

export default Footer;
