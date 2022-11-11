import React from "react";
import PortfolioProject from "./PortfolioProject";
import deckreactorImage from "../../images/deckreactor-image.png";
import nerdleWerdleImage from "../../images/nerdle-werdle-image.png";
import gourmetImage from "../../images/gourmet-image.png";

const projects = [
  {
    name: "Deck Reactor",
    tech: "FastAPI | React | MongoDB | Bootstrap",
    image: deckreactorImage,
    code: "gitlab",
  },
  {
    name: "Nerdle Werdle",
    tech: "HTML | CSS | Javascript ",
    image: nerdleWerdleImage,
    code: "github",
  },
  {
    name: "Gourmet",
    tech: "HTML | CSS | Javascript ",
    image: gourmetImage,
    code: "github",
  },
];

function Portfolio() {
  return (
    <section className="mx-40">
      <h1 className="text-white text-4xl underline underline-offset-8 decoration-2 decoration-accentPrimary">
        Portfolio
      </h1>
      <div className="grid grid-cols-3 justify-center gap-5">
        {projects.map((project) => {
          return (
            <PortfolioProject
              key={project.name}
              image={project.image}
              name={project.name}
              tech={project.tech}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
