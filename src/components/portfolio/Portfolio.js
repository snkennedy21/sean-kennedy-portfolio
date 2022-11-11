import React from "react";
import PortfolioProject from "./PortfolioProject";
import deckreactorImage from "../../images/deckreactor-image.png";
import nerdleWerdleImage from "../../images/nerdle-werdle-image.png";
import gourmetImage from "../../images/gourmet-image.png";
import SectionHeader from "../ui/SectionHeader";

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
    <section id="portfolio" className="mx-16 lg:mx-28">
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
