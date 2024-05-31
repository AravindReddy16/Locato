import React from "react";
import Intro from "./components/intropage.js";
import About from "./components/aboutpage.js";
import Project from "./components/projectspage.js";
import Contact from "./components/contactpage.js";
import "./App.css";
import { Link } from "react-scroll";

function App() {

  return (
    <div className="containerDiv">
      <Intro />
      <About />
      <Project />
      <Contact />
      <Link to="home" smooth={true} offset={0} duration={800}>
        <div className="arrow">
          <img src="https://uploads-ssl.webflow.com/5f067b661807eb95a36fe56a/5f067b661807eb5ed56fe626_Arrow%20Top.svg" alt="arrowlogo" />
        </div>
      </Link>
    </div>
  );
}

export default App;
