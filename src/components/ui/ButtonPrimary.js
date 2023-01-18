import React from "react";

function ButtonPrimary(props) {
  return (
    <a
      href="#portfolio"
      className="flex items-center justify-center gap-2 border-accentPrimary border rounded-lg px-4 py-2 2xl:px-6 2xl:py-3 2xl:text-3xl text-accentPrimary hover:border-darkColor hover:text-white hover:bg-accentPrimary transition duration-300 cursor-pointer"
    >
      {props.children}
    </a>
  );
}

export default ButtonPrimary;
