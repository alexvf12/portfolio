import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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
          <p>
            This project, commissioned by Ajuntament de Sitges, involved
            creating a two-volume book collection and an elegant storage casing.
            It encompassed various graphic design elements, including designing
            book covers that visually represented each volume's theme. The
            casing was crafted for both presentation and protection. Layout
            design for each volume, each exceeding 500 pages, demanded precision
            and attention to detail. It ensured a reader-friendly layout,
            incorporating text, images, and visual elements.
          </p>
          <p>
            El projecte també va incloure l'edició de fotografies amb Adobe
            Photoshop per millorar la imatge i una integració perfecta en el
            disseny general. Adobe InDesign es va utilitzar per a tot el disseny
            de maquetació.
          </p>
          <p>
            The result is a captivating book collection that not only imparts
            information and knowledge but also entices readers with its
            appealing design and presentation. This project reflects our
            commitment to excellence in graphic design.
          </p>
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
          <p>
            This project, undertaken for Vida Festival, an internationally
            acclaimed music festival held since 2014, involves an extensive
            array of artworks and designs tailored for the festival's branding
            and promotion. The scope of work encompasses various design
            elements, ranging from diverse social media visuals to eye-catching
            public posters for advertising purposes.
          </p>
          <p>
            The overarching design strategy centers on creating a cohesive
            visual identity that not only resonates with the audience but also
            effectively reflects the core values and brand essence of Vida
            Festival.
          </p>
          <p>
            A substantial portion of the design work is executed through Adobe
            InDesign, which serves as the primary tool for layout and
            composition in each design. This meticulous attention to layout
            ensures that every piece, is both aesthetically pleasing and
            effectively communicates the festival's essence. Additionally, Adobe
            Illustrator plays a pivotal role, used for the creation of intricate
            and captivating vector graphics.
          </p>
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
          <p>
            This project, commissioned by the Vilanova i la Geltrú City Council,
            centers on the creation of a comprehensive corporate design for
            their annual festival, La Festa Major. To provide a fresh and unique
            perspective, the design concept was based on the theme of "sounds."
            The brand was ingeniously built around onomatopoeic expressions that
            captured the essence of the festival, presenting them in a comic
            book style.
          </p>
          <p>
            The entire body of work was meticulously crafted using Adobe
            Illustrator, where comic-inspired shapes and vibrant colors were
            employed to vividly represent the lively and joyful atmosphere of
            the celebration.
          </p>
          <p>
            A diverse range of design deliverables has been produced, including
            eye-catching posters, informative programs, and merchandise, each of
            which incorporates the comic-inspired design elements. The result is
            a corporate design that not only encapsulates the essence of La
            Fiesta Mayor but also resonates with the community, fostering a
            strong and memorable visual presence for the event.
          </p>
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
          <p>
            This project, dedicated to Secret Vida, a subsidiary festival of the
            renowned Vida Festival brand, entails an expansive array of artwork
            and design creation aimed at shaping the festival's visual identity.
            Much like its parent festival, the project encompasses a wide range
            of design elements, spanning from diverse social media graphics to
            captivating public posters used for promotional purposes.
            Additionally, it involves the creation of unique logo illustrations
            for each of the invited artists, further enhancing the festival's
            distinctiveness.
          </p>
          <p>
            The overarching design strategy remains consistent with the main
            Vida Festival, focusing on establishing a strong and unified visual
            identity that reflects the core values and brand essence of Secret
            Vida.
          </p>
          <p>
            Adobe InDesign continues to play a pivotal role in this project,
            serving as the primary tool for meticulous layout and composition in
            every design. In addition, Adobe Illustrator is instrumental in the
            creation of intricate and captivating vector graphics.
          </p>
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
          <p>
            This project, undertaken in collaboration with a Sitges neighborhood
            association, encompasses a comprehensive branding initiative and the
            creation of various merchandise designs. Notable among these designs
            are the latest annual poster, expertly crafted through a combination
            of photography and Photoshop, and the recent vintage-style t-shirt
            design, meticulously crafted using Adobe Illustrator.
          </p>
          <p>
            For the poster, a striking visual composition was achieved,
            reflecting the essence and goals of the association. The use of
            photography and Photoshop allowed for the creation of a dynamic and
            eye-catching design, ensuring that the association's message would
            be communicated effectively to its audience.
          </p>
          <p>
            The vintage-style t-shirt design, on the other hand, showcases the
            association's identity with a timeless and appealing aesthetic.
            Adobe Illustrator was employed to create this design, incorporating
            intricate details and a sense of nostalgia to resonate with the
            target demographic.
          </p>
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
      onMouseLeave={handleMouseLeave}
    >
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
          }}
        >
          <img src={selectedImage} alt="Full Size" />
        </div>
      )}
    </section>
  );
};

export default Project;
