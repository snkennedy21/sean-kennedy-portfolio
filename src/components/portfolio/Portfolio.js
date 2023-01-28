import React from "react";
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
  return (
    <section id="portfolio" className="mx-12 md:mx-16 lg:mx-28">
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
    </section>
  );
}

export default Portfolio;
