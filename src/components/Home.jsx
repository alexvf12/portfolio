import { Link } from "react-router-dom";
import React, { useRef } from "react";

const Home = () => {
  const boxRef = useRef(null);

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
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About me</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Home;
