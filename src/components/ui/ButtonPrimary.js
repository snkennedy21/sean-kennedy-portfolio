import React from "react";

function ButtonPrimary(props) {
  return (
    <button className="flex items-center justify-center gap-2 border-accentPrimary border rounded-lg px-4 py-2 text-accentPrimary hover:border-darkColor hover:text-white hover:bg-accentPrimary transition duration-300">
      {props.children}
    </button>
  );
}

export default ButtonPrimary;
