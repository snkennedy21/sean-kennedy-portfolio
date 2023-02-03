import React from "react";
import { useState, useEffect, useRef } from "react";
import PortfolioProject from "./PortfolioProject";
import deckreactorImage from "../../images/deckreactor-image.png";
import nerdleWerdleImage from "../../images/nerdle-werdle-image.png";
import gourmetImage from "../../images/gourmet-image.png";
import fullStackOverflowImage from "../../images/fullstackoverflow.png";
import SectionHeader from "../ui/SectionHeader";

const projects = [
  {
    name: "Full Stack Overflow",
    tech: "FastAPI  |  React  |  PostgreSQL  |  Tailwind  |  Docker",
    image: fullStackOverflowImage,
    code: "github",
    codeLink: "https://gitlab.com/mtgt/module3-project-gamma",
    liveLink: "https://full-stack-overflow.netlify.app/",
  },

  {
    name: "Nerdle Werdle",
    tech: "Javascript  |  HTML  |  CSS ",
    image: nerdleWerdleImage,
    code: "github",
    codeLink: "https://github.com/snkennedy21/Werdle-Nerdles",
    liveLink: "https://nerdlewerdle.netlify.app/",
  },

  {
    name: "Gourmet",
    tech: "Javascript  |  HTML  |  CSS ",
    image: gourmetImage,
    code: "github",
    codeLink: "https://github.com/snkennedy21/Gourmet-App",
    liveLink: "https://comfy-meringue-3629d2.netlify.app/#close",
  },

  {
    name: "Deck Reactor",
    tech: "FastAPI  |  React  |  MongoDB  |  Bootstrap  |  Docker",
    image: deckreactorImage,
    code: "gitlab",
    codeLink: "https://gitlab.com/mtgt/module3-project-gamma",
    liveLink: "https://mtgt.gitlab.io/module3-project-gamma/",
  },
];

function Portfolio() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.2 }
    );
    observer.observe(section);

    return () => {
      observer.unobserve(section);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="mx-3.5 mx-12 md:mx-16 lg:mx-28"
    >
      <div
        className={`${
          isVisible ? "translate-y-0 opacity-1" : "translate-y-20 opacity-0"
        } transition duration-700`}
      >
        <SectionHeader>Portfolio</SectionHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-center gap-10">
          {projects.map((project) => {
            return (
              <PortfolioProject
                key={project.name}
                image={project.image}
                name={project.name}
                tech={project.tech}
                code={project.code}
                codeLink={project.codeLink}
                liveLink={project.liveLink}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
