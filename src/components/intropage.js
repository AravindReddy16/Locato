import React from "react";
import "../styles/intropage.css";
import Navbar from "./navbarpage.js";
import { motion } from "framer-motion";
import Image from "../assets/image.png";

export default function Intro() {
  return (
    <div className="introDiv" id="home">
      <div className="introStyle"></div>
      <Navbar />
      <div className="homeIntro">
        <motion.div className="homeContent" initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{once:true}} transition={{ duration: 0.8, ease: "linear" }}>
          <div className="introText">
            <p>Hey, I'm a <span id="text">Full-Stack</span> Developer.</p>
          </div>
          <div className="helpingText">
            <p>Hi, I'm Aravind Reddy a full-stack developer. I like to make ideas into reality with the power of web technologies.</p>
          </div>
          <div className="resumeDiv">
            <div className="resume">
              <div className="resumeText">
                <p>Find My Resume, Here</p>
              </div>
              <div className="resumeLink">
                <a href="https://drive.google.com/file/d/1lfFq6wowOsnF8j9FFWg3mvGmMv8cf_YC/view?usp=sharing" target="_blank">MyResume</a>
              </div>
            </div>
          </div>
          <div className="encourageText">
            <p>🎉 Join me to explore into web development.</p>
          </div>
          <div className="exploreDiv">
            <div className="mouse">
              <div className="outer">
                <motion.p initial={{ scale: 1, y: 0 }} animate={{ scale: 0, y: 10 }} transition={{ duration: 1.3, ease: "easeInOut", repeat: Infinity }}>'</motion.p>
              </div>
            </div>
            <div className="explore">
              <p>Explore</p>
            </div>
          </div>
        </motion.div>
        <motion.div className="homeImg" initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{once: true}} transition={{ duration: 0.8, ease: "linear" }}>
          <img src="https://uploads-ssl.webflow.com/5f067b661807eb95a36fe56a/5f067b661807eb5bf16fe5cc_Dots%20Purple.svg" alt="Style"/>
          <div className="imgStyle">
            <img src={Image} alt="Image" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
