import React from "react";
import { useState, useEffect, useRef } from "react";
import PortfolioProject from "./PortfolioProject";
import deckreactorImage from "../../images/deckreactor-image.png";
import nerdleWerdleImage from "../../images/nerdle-werdle-image.png";
import gourmetImage from "../../images/gourmet-image.png";
import fullStackOverflowImage from "../../images/fullstackoverflow.png";
import SectionHeader from "../ui/SectionHeader";
import Modal from "./Modal";

const projects = [
  {
    id: 0,
    name: "Full Stack Overflow",
    tech: "FastAPI  |  React  |  PostgreSQL  |  Tailwind  |  Docker",
    image: fullStackOverflowImage,
    code: "github",
    codeLink: "https://github.com/snkennedy21/fastapi-postgres-posting-site",
    liveLink: "https://full-stack-overflow.netlify.app/",
    about:
      "Fullstack Overflow is a social media platform that allows users to create posts, comment on other users' posts, and vote on their favorite content. The application features a clean and intuitive user interface that makes it easy for users to create and share content. The application also includes a voting system, allowing users to upvote or downvote posts, with the most popular posts appearing at the top of the feed. Through the use of modern web development technologies, I was able to deliver a highly functional and engaging platform that promotes user interaction and engagement.",
  },

  {
    id: 1,
    name: "Nerdle Werdle",
    tech: "Javascript  |  HTML  |  CSS ",
    image: nerdleWerdleImage,
    code: "github",
    codeLink: "https://github.com/snkennedy21/Werdle-Nerdles",
    liveLink: "https://nerdlewerdle.netlify.app/",
    about:
      "Nerdle Werdle is a fully funtional clone of the popular New York Times game Wordle. Users have six attempts to guess a word which changes every 24 hours. The software takes advantage of the the browers local storage in order to keep track of the users statistics. It utilizes Javascripts datetime objects in order update a countdown that tells the game when it is time to update the word of the day. The project allowed me gain a deep understanding of the complex interactions between Javascript and CSS that are necessary to create dynamic and engagin web pages.",
  },

  {
    id: 2,
    name: "Gourmet",
    tech: "Javascript  |  HTML  |  CSS ",
    image: gourmetImage,
    code: "github",
    codeLink: "https://github.com/snkennedy21/Gourmet-App",
    liveLink: "https://comfy-meringue-3629d2.netlify.app/#close",
    about:
      "Gourmet is a front end web applicatio that allows users to keep track of the restaurants they've visited. The application uses the browsers local storage to keep up to date records of the users data based on what device they are currently using. The project required a deep understanding of Javascript fundamentals, specifically event propogation and bubbling. This project was my first foray into designing a complex web application that keeps track of a users data, and it was a great first learning experience.",
  },

  {
    id: 3,
    name: "Deck Reactor",
    tech: "FastAPI  |  React  |  MongoDB  |  Bootstrap  |  Docker",
    image: deckreactorImage,
    code: "gitlab",
    codeLink: "https://gitlab.com/mtgt/module3-project-gamma",
    liveLink: "https://mtgt.gitlab.io/module3-project-gamma/",
    about:
      "Deck Reactor is a full stack web application that allows users to create, build, and manage their collection of Magic The Gathering Cards. The application is integrated with a 3rd party API that supplies data on the various Magic The Gathering cards. Users are able to create an account, search for relevant Magic The Gathering Cards, and store these cards on their personal account. These cards can either be stored in the account owners collection or decks.",
  },
];

function Portfolio() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  function updateSelectedProjectHandler(project) {
    console.log(project);
    setSelectedProject(project);
    setIsModalOpen(true);
  }

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="mx-3.5 mx-12 md:mx-16 lg:mx-28"
    >
      <Modal
        project={selectedProject}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      />

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
                project={project}
                updateSelectedProject={updateSelectedProjectHandler}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
