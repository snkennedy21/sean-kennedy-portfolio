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
    codeLink: "https://gitlab.com/mtgt/module3-project-gamma",
    liveLink: "https://mtgt.gitlab.io/module3-project-gamma/",
  },
  {
    name: "Nerdle Werdle",
    tech: "HTML | CSS | Javascript ",
    image: nerdleWerdleImage,
    code: "github",
    codeLink: "https://github.com/snkennedy21/Werdle-Nerdles",
    liveLink: "https://nerdlewerdle.netlify.app/",
  },
  {
    name: "Gourmet",
    tech: "HTML | CSS | Javascript ",
    image: gourmetImage,
    code: "github",
    codeLink: "https://github.com/snkennedy21/Gourmet-App",
    liveLink: "https://comfy-meringue-3629d2.netlify.app/#close",
  },
];

function Portfolio() {
  return (
    <section className="mx-40">
      <h1 className="text-white text-4xl underline underline-offset-8 decoration-2 decoration-accentPrimary">
        Portfolio
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center gap-10">
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
    </section>
  );
}

export default Portfolio;
