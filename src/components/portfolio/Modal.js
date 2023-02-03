import React, { useEffect } from "react";

const Modal = ({ project, setIsModalOpen, isModalOpen }) => {
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else if (!isModalOpen) {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);
  return (
    <React.Fragment>
      (
      <div
        className={`${
          isModalOpen ? "" : "opacity-0 pointer-events-none"
        } fixed flex justify-center top-0 left-0 flex h-screen w-screen bg-mobileNavColor bg-opacity-50 z-10 text-softPrimary transition duration-500`}
      >
        <div
          className={`${
            isModalOpen ? "opacity-1" : "opacity-0 -translate-y-20"
          } m-auto p-8 bg-darkColor rounded-md w-[800px] transition duration-500 mx-10`}
        >
          <h1 className="text-4xl text-center font-bold mb-4">
            {project.name}
          </h1>
          <p className="text-base mb-4">{project.about}</p>
          <h1 className="text-xl">Tech Stack</h1>
          <p className="text-base mb-4">{project.tech}</p>
          <div className="flex items-start gap-2">
            <a
              target="_blank"
              href={project.codeLink}
              className="bg-accentPrimary py-2 px-4 rounded-md hover:bg-accentPrimaryTint transition"
            >
              View Code
            </a>
            <a
              target="_blank"
              href={project.liveLink}
              className="bg-accentPrimary py-2 px-4 rounded-md hover:bg-accentPrimaryTint transition"
            >
              Live Version
            </a>
          </div>
          <button
            className="float-right bg-secondaryColor text-white py-2 px-4 rounded hover:bg-secondaryColorTint transition"
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
      )
    </React.Fragment>
  );
};

export default Modal;
