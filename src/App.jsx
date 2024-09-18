import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Router/Navbar";
import Home from "./Router/Home";
import FetchApiData from "./Router/FetchApiData";
import Figma from "./Router/Figma";
import Project from "./Router/Project";
import About from "./Router/About";
import Error from "./Router/Error";
import Portfolio from "./Router/Portfolio";
import Education from "./Router/Education";
import Contact from "./Router/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="" element={<Home />} />
          <Route path="/fetchApiData" element={<FetchApiData />} />
          <Route path="/Figma" element={<Figma />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
