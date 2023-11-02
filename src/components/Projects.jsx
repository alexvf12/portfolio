import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";

const Projects = () => {
  const boxRef = useRef(null);
  const [isGraphicDesign, setIsGraphicDesign] = useState(false); // Estado para rastrear el tipo de proyectos

  const handleMouseMove = (e) => {
    const box = boxRef.current;

    if (box) {
      const boxRect = box.getBoundingClientRect();
      const mouseX = e.clientX - boxRect.left;
      const mouseY = e.clientY - boxRect.top;

      const cursorSize = "5px";

      const percentX = (mouseX / boxRect.width) * 1000;
      const percentY = (mouseY / boxRect.height) * 1000;

      box.style.background = `radial-gradient(at ${percentX}% ${percentY}%, white ${cursorSize}, transparent)`;
    }
  };

  const handleMouseLeave = () => {
    const box = boxRef.current;

    if (box) {
      box.style.background = "black";
    }
  };

  const toggleProjects = () => {
    setIsGraphicDesign((prevValue) => !prevValue); // Alternar entre Graphic Design y Developer projects
  };

  // Graphic design projects
  const developerProjects = (
    <>
      <li className="display-li">
        <div>
          <Link to={`/projects/1`} className="info">
            2022 / Adobe InDesign & Adobe Photoshop
          </Link>
        </div>
        <div>
          <Link to={`/projects/1`} className="title">
            Layout Design for Books
          </Link>
        </div>
      </li>
      <li className="display-li">
        <div>
          <Link to={`/projects/2`} className="info">
            2019 / Adobe Illustrator & Adobe Indesign
          </Link>
        </div>
        <div>
          <Link to={`/projects/2`} className="title">
            ArtWorks Vida Festival
          </Link>
        </div>
      </li>
      <li className="display-li">
        <div>
          <Link to={`/projects/3`} className="info">
            2020 / Adobe Illustrator
          </Link>
        </div>
        <div>
          <Link to={`/projects/3`} className="title">
            Corporate Design FM
          </Link>
        </div>
      </li>
      <li className="display-li">
        <div>
          <Link to={`/projects/4`} className="info">
            2019 / Adobe Illustrator & Adobe Indesign
          </Link>
        </div>
        <div>
          <Link to={`/projects/4`} className="title">
            ArtWorks Secret Vida
          </Link>
        </div>
      </li>
      <li className="display-li">
        <div>
          <Link to={`/projects/5`} className="info">
            2023 / Adobe Illustrator & Adobe Photoshop
          </Link>
        </div>
        <div>
          <Link className="title" to={`/projects/5`}>
            Designs Poble Sec
          </Link>
        </div>
      </li>
    </>
  );

  // Developer projects
  const graphicDesignProjects = (
    <>
      <li className="display-li">
        <div>
          <a
            className="info"
            href="https://historic-football-pantheon.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            2023 / Vanila JS / api-football
          </a>
        </div>
        <div>
          <a
            className="title"
            href="https://historic-football-pantheon.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Historic Football Pantheon
          </a>
        </div>
      </li>
      <li className="display-li">
        <div>
          <a
            className="info"
            href="https://tool-task-management-alexvf12.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            2022 / Vue.js / Tailwind
          </a>
        </div>
        <div>
          <a
            className="title"
            href="https://tool-task-management-alexvf12.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tool Task Management
          </a>
        </div>
      </li>
      <li className="display-li">
        <div>
          <a
            className="info"
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            2023 / React / ??????
          </a>
        </div>
        <div>
          <a
            className="title"
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfoli Page
          </a>
        </div>
      </li>
      <li className="display-li">
        <div>
          <a
            className="info"
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            2023 / Angular / ??????
          </a>
        </div>
        <div>
          <a
            className="title"
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Another Development project
          </a>
        </div>
      </li>
    </>
  );

  return (
    <section
      className="box display"
      ref={boxRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <div className="border-box">
          <h1>Àlex Virgili</h1>
          <h3>Graphic Designer & Developer</h3>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link className="project" to="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/about">About me</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="btn">
          <button onClick={toggleProjects}>
            {isGraphicDesign ? "Developer projects" : "Graphic Design projects"}
          </button>
        </div>
        <div className="projects-container">
          <ul className="projects">
            {isGraphicDesign ? graphicDesignProjects : developerProjects}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
