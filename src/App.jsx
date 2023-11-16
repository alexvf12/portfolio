import "./App.css";
import "./style.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Project from "./components/Project";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/project" element={<Project />} />
      <Route path="/projects/:projectId" element={<Project />} /> {/* Ruta dinámica */}
      <Route path="/about" element={<About />} />
      {/*         <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contcact />} />
        <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
