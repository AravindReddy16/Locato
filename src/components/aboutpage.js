import React from "react";
import "../styles/aboutpage.css";
import Python from "../assets/python.jpeg";
import ReactJs from "../assets/React.png";
import Django from "../assets/Django.png";
import Postgresql from "../assets/Postgresql.jpeg";
import Js from "../assets/Js.jpeg";
import Image from "../assets/image.png";
import { motion } from "framer-motion";

export default function About() {
    return (
        <div className="aboutDiv" id="about">
            <motion.div className="aboutStyle" initial={{x: -500, opacity: 0}} whileInView={{x: 0, opacity: 1}} viewport={{once:true}} transition={{ duration: 0.8, ease: "linear" }}></motion.div>
            <div className="aboutBox">
                <motion.div className="aboutIntro" initial={{y: 50, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once:true}} transition={{ duration: 0.8, ease: "linear" }}>
                    <p>NICE TO MEET YOU.</p>
                </motion.div>
                <motion.div className="aboutHead" initial={{y: 50, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once:true}} transition={{ duration: 0.8, ease: "linear" }}>
                    <p>Hey, I'm Aravind Reddy, frontend and full-stack developer.</p>
                </motion.div>
                <motion.div className="aboutText" initial={{y: 50, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once:true}} transition={{ duration: 0.8, ease: "linear" }}>
                    <p>Hi, my name is Aravind Reddy and i'm a full-stack developer. Even though i'm a student, I really interested in making new ideas into reality. It makes me realize who i am and what i am capable of doing. As a developer, even at hard times understanding the functionalities of an idea, i pretty sure i am done with everything that comes into reality.</p>
                    <p>I participated in many projects that is related to web development and also web design, That makes me gain much experience at many sections in web development. And i really interested in learning new skills rather than web technologies.</p>
                </motion.div>
                <motion.div className="bioPic" initial={{y: 50, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once:true}} transition={{ duration: 0.8, ease: "linear" }}>
                    <div className="picDiv">
                        <div className="pic">
                            <img src={Image} alt="Pic" />
                        </div>
                    </div>
                    <div className="bioDiv">
                        <div className="upDiv">
                            <p>Aravind Reddy</p>
                        </div>
                        <div className="downDiv">
                            <p>Full-Stack Developer</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="skillsDiv" initial={{y: 50, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once:true}} transition={{ duration: 0.8, ease: "linear" }}>
                    <div className="skillsText">
                        <p>HERE FEW SKILLS THAT I'M GOOD AT.</p>
                    </div>
                    <div className="skillsImg">
                        <div className="skillPic">
                            <motion.img whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }} src={Python} alt="python" />
                        </div>
                        <div className="skillPic">
                            <motion.img whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }} src={ReactJs} alt="ReactJs" />
                        </div>
                        <div className="skillPic">
                            <motion.img whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }} src={Django} alt="Django" />
                        </div>
                        <div className="skillPic">
                            <motion.img whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }} src={Postgresql} alt="Postgresql" />
                        </div>
                        <div className="skillPic">
                            <motion.img whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }} src={Js} alt="Js" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};