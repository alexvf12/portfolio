import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next"


// Punta Images
import punta1 from "../assets/punta3.jpg";
import punta2 from "../assets/punta7.jpg";
import punta3 from "../assets/punta6.jpg";
import punta4 from "../assets/punta4.jpg";
import punta5 from "../assets/punta2.jpg";

// Vida Images
import vida1 from "../assets/vida1.png";
import vida2 from "../assets/vida2.jpg";
import vida3 from "../assets/vida3.jpg";
import vida4 from "../assets/vida4.png";
import vida5 from "../assets/vida5.jpg";

// FM Images
import fm1 from "../assets/fm7.jpg";
import fm2 from "../assets/fm10.jpg";
import fm3 from "../assets/fm3.jpg";
import fm4 from "../assets/fm4.jpg";
import fm5 from "../assets/fm9.jpg";

// Secret Images
import secret1 from "../assets/secret1.jpg";
import secret2 from "../assets/secret2.jpg";
import secret3 from "../assets/secret3.png";
import secret4 from "../assets/secret4.jpg";
import secret5 from "../assets/secret5.jpg";

// Joan Images
import joan1 from "../assets/joan5.png";
import joan2 from "../assets/joan1.png";
import joan3 from "../assets/joan3.png";
import joan4 from "../assets/joan6.png";
import joan5 from "../assets/joan4.png";

const Project = () => {
  const boxRef = useRef(null);
  const { projectId } = useParams(); // Obtén la ID del proyecto desde la URL
  const [t, i18n] = useTranslation("global")

  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    console.log("closeOverlay executed");
    setShowOverlay(false);
  };

  const handleMouseLeave = () => {
    // Restaura el fondo original cuando el cursor se va
    const box = boxRef.current;
    if (box) {
      box.style.background = "black";
    }
  };

  // Lógica para determinar qué contenido mostrar según la ID del proyecto
  let projectContent;

  if (projectId === "1") {
    projectContent = (
      <div className="border-box parent ">
        <div className="div2 ">
          <img
            src={punta2}
            alt={"punta4"}
            onClick={() => handleImageClick(punta2)}
          />
        </div>
        <div className="div1">
          <img
            src={punta3}
            alt={"punta2"}
            onClick={() => handleImageClick(punta3)}
          />
        </div>
        <div className="div3">
          <img
            src={punta1}
            alt={"punta3"}
            onClick={() => handleImageClick(punta1)}
          />
        </div>
        <div className="div4">
          <img
            src={punta5}
            alt={"punta5"}
            onClick={() => handleImageClick(punta5)}
          />
        </div>
        <div className="div5">
          <img
            src={punta4}
            alt={"punta5"}
            onClick={() => handleImageClick(punta4)}
          />
        </div>
        <div className="div6">
          <h1> Layout Design for Books</h1>
          <h2> 2022 / Adobe InDesign & Adobe Photoshop</h2>
          <p>{t("project.books.p1")}</p>
          <p>{t("project.books.p2")}</p>
          <p>{t("project.books.p3")}</p>
        </div>
      </div>
    );
  } else if (projectId === "2") {
    // Coloca aquí el contenido específico del proyecto con ID 2
    projectContent = (
      <div className="border-box parent">
        <div className="div2">
          <img
            src={vida1}
            alt={"vida1"}
            onClick={() => handleImageClick(vida1)}
          />
        </div>
        <div className="div1">
          <img
            src={vida2}
            alt={"vida2"}
            onClick={() => handleImageClick(vida2)}
          />
        </div>
        <div className="div3">
          <img
            src={vida3}
            alt={"vida3"}
            onClick={() => handleImageClick(vida3)}
          />
        </div>
        <div className="div4">
          <img
            src={vida4}
            alt={"vida4"}
            onClick={() => handleImageClick(vida4)}
          />
        </div>
        <div className="div5">
          <img
            src={vida5}
            alt={"vida5"}
            onClick={() => handleImageClick(vida5)}
          />
        </div>
        <div className="div6">
          <h1> ArtWorks Vida Festival</h1>
          <h2> 2019 / Adobe Illustrator & Adobe Indesign</h2>
          <p>{t("project.vida.p1")}</p>

          <p>{t("project.vida.p2")}</p>

          <p>{t("project.vida.p3")}</p>
        </div>
      </div>
    );
  } else if (projectId === "3") {
    // Coloca aquí el contenido específico del proyecto con ID 2
    projectContent = (
      <div className="border-box parent">
        <div className="div2">
          <img src={fm1} alt={"fm1"} onClick={() => handleImageClick(fm1)} />
        </div>
        <div className="div1">
          <img src={fm2} alt={"fm2"} onClick={() => handleImageClick(fm2)} />
        </div>
        <div className="div3">
          <img src={fm3} alt={"fm3"} onClick={() => handleImageClick(fm3)} />
        </div>
        <div className="div4">
          <img src={fm5} alt={"fm4"} onClick={() => handleImageClick(fm5)} />
        </div>
        <div className="div5">
          <img src={fm4} alt={"fm5"} onClick={() => handleImageClick(fm4)} />
        </div>
        <div className="div6">
          <h1> Corporate Design FM</h1>
          <h2> 2020 / Adobe Illustrator</h2>
          <p>{t("project.fm.p1")}</p>

          <p>{t("project.fm.p2")}</p>

          <p>{t("project.fm.p3")}</p>
        </div>
      </div>
    );
  } else if (projectId === "4") {
    // Coloca aquí el contenido específico del proyecto con ID 2
    projectContent = (
      <div className="border-box parent">
        <div className="div2">
          <img
            src={secret1}
            alt={"secret1"}
            onClick={() => handleImageClick(secret1)}
          />
        </div>
        <div className="div1">
          <img
            src={secret2}
            alt={"fmsecret22"}
            onClick={() => handleImageClick(secret2)}
          />
        </div>
        <div className="div3">
          <img
            src={secret4}
            alt={"secret3"}
            onClick={() => handleImageClick(secret4)}
          />
        </div>
        <div className="div4">
          <img
            src={secret3}
            alt={"secret4"}
            onClick={() => handleImageClick(secret3)}
          />
        </div>
        <div className="div5">
          <img
            src={secret5}
            alt={"secret5"}
            onClick={() => handleImageClick(secret5)}
          />
        </div>
        <div className="div6">
          <h1> ArtWorks Secret Vida</h1>
          <h2> 2019 / Adobe Illustrator & Adobe Indesign</h2>
          <p>{t("project.secret.p1")}</p>

          <p>{t("project.secret.p2")}</p>

          <p>{t("project.secret.p3")}</p>
        </div>
      </div>
    );
  } else if (projectId === "5") {
    // Coloca aquí el contenido específico del proyecto con ID 2
    projectContent = (
      <div className="border-box parent">
        <div className="div2">
          <img
            src={joan1}
            alt={"joan1"}
            onClick={() => handleImageClick(joan1)}
          />
        </div>
        <div className="div1">
          <img
            src={joan2}
            alt={"joan2"}
            onClick={() => handleImageClick(joan2)}
          />
        </div>
        <div className="div3">
          <img
            src={joan3}
            alt={"joan3"}
            onClick={() => handleImageClick(joan3)}
          />
        </div>
        <div className="div4">
          <img
            src={joan4}
            alt={"joan4"}
            onClick={() => handleImageClick(joan4)}
          />
        </div>
        <div className="div5">
          <img
            src={joan5}
            alt={"joan5"}
            onClick={() => handleImageClick(joan5)}
          />
        </div>
        <div className="div6">
          <h1> Designs Poble Sec</h1>
          <h2> 2023 / Adobe Illustrator & Adobe Photoshop</h2>
          <p>{t("project.poble.p1")}</p>

          <p>{t("project.poble.p2")}</p>

          <p>{t("project.poble.p3")}</p>
        </div>
      </div>
    );
  } else {
    projectContent = <div className="border-box parent">Not found</div>;
  }

  return (
    <section
      className="box display"
      ref={boxRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}>
      <Link className="project" to="/projects">
        <button className="button2">⇦</button>
      </Link>

      {projectContent}
      {showOverlay && (
        <div
          className="overlay"
          onClick={() => {
            console.log("Overlay clicked");
            closeOverlay();
          }}>
          <img src={selectedImage} alt="Full Size" />
        </div>
      )}
    </section>
  );
};

export default Project;
