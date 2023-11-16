import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import {useTranslation} from "react-i18next"

const Home = () => {
  const [t, i18n] = useTranslation("global")
  const boxRef = useRef(null);
  const [showLanguageButtons, setShowLanguageButtons] = useState(true);

  const handleLanguageButtonClick = (language) => {
    i18n.changeLanguage(language);
    setShowLanguageButtons(false);
  };

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

  return (
    <section
      className="box "
      ref={boxRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      
            {showLanguageButtons && (
        <div className="language-buttons">
          <button onClick={() => handleLanguageButtonClick("ca")}>CAT</button>
          <button onClick={() => handleLanguageButtonClick("es")}>ESP</button>
          <button onClick={() => handleLanguageButtonClick("en")}>ENG</button>
        </div>
      )}

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
            <Link to="/projects">{t("index.projects")}</Link>
          </li>
          <li>
            <Link to="/about">{t("index.about")}</Link>
          </li>
          <li>
            <Link to="/contact">{t("index.contact")}</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Home;
