import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const [t, i18n] = useTranslation("global");
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
            {t("projects.graphic.1")}
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
            {t("projects.graphic.2")}
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
            {t("projects.graphic.3")}
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
            {t("projects.graphic.4")}
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
            {t("projects.graphic.5")}
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
            rel="noopener noreferrer">
            2023 / Vanila JS / api-football
          </a>
        </div>
        <div>
          <a
            className="title"
            href="https://historic-football-pantheon.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            {t("projects.developer.1")}
          </a>
        </div>
      </li>
      <li className="display-li">
        <div>
          <a
            className="info"
            href="https://tool-task-management-alexvf12.vercel.app/"
            target="_blank"
            rel="noopener noreferrer">
            2022 / Vue.js / supaBase
          </a>
        </div>
        <div>
          <a
            className="title"
            href="https://tool-task-management-alexvf12.vercel.app/"
            target="_blank"
            rel="noopener noreferrer">
            {t("projects.developer.2")}
          </a>
        </div>
      </li>
      <li className="display-li">
        <div>
          <a
            className="info"
            href="https://portfolio-alexvf12.vercel.app/"
            target="_blank"
            rel="noopener noreferrer">
            2023 / React
          </a>
        </div>
        <div>
          <a
            className="title"
            href="https://portfolio-alexvf12.vercel.app/"
            target="_blank"
            rel="noopener noreferrer">
            {t("projects.developer.3")}
          </a>
        </div>
      </li>
      <li className="display-li">
        <div>
          <a
            className="info"
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer">
            2023 / React / OpenTrivia Api
          </a>
        </div>
        <div>
          <a
            className="title"
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer">
            {t("projects.developer.4")}
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
      onMouseLeave={handleMouseLeave}>
      <div>
        <div className="border-box">
          <h1>Àlex Virgili</h1>
          <h3>{t("index.title")}</h3>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/">{t("index.home")}</Link>
            </li>
            <li>
              <Link className="project" to="/projects">
                {t("index.projects")}
              </Link>
            </li>
            <li>
              <Link to="/about"> {t("index.about")}</Link>
            </li>
            <li>
              <Link to="/contact"> {t("index.contact")}</Link>
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
