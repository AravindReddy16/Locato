import React from "react";
import "../styles/projectspage.css";
import { motion } from "framer-motion";

export default function Project() {
    const route = (link) => {
        window.location.href = link;
    };

    return (
        <div className="projectDiv" id="projects">
            <motion.div className="projectText" initial={{y: 50, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once:true}} transition={{ duration: 0.8, ease: "linear" }}>
                <div className="projectTop">
                    <p>MY PROJECTS</p>
                </div>
                <div className="projectHead">
                    <p>My Expertise</p>
                </div>
            </motion.div>
            <div className="projectBox">
                <motion.div className="project" onClick={() => route("https://github.com/AravindReddy16/E-Commerce-Website")} initial={{y: 50, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once:true}} transition={{ duration: 0.8, ease: "linear" }}>
                    <div className="projectTitle">
                        <div className="projectLogo">
                            <img src="https://uploads-ssl.webflow.com/5f067b661807eb95a36fe56a/5f067b661807eb9b426fe5ac_Development.svg" alt="logo" />
                        </div>
                        <div className="projectName">
                            <p>E-Commerce Website</p>
                        </div>
                    </div>
                    <div className="projectInfo">
                        <p>E-Commerce Website using html, css, js. Mainly focusing on the cart functionalities where you can add, delete and update items price.</p>
                    </div>
                </motion.div>
                <motion.div className="project" onClick={() => route("https://github.com/AravindReddy16/ChatSystem")} initial={{y: 50, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once:true}} transition={{ duration: 0.8, ease: "linear" }}>
                    <div className="projectTitle">
                        <div className="projectLogo">
                            <img src="https://uploads-ssl.webflow.com/5f067b661807eb95a36fe56a/5f067b661807eb9b426fe5ac_Development.svg" alt="logo" />
                        </div>
                        <div className="projectName">
                            <p>Chat System</p>
                        </div>
                    </div>
                    <div className="projectInfo">
                        <p>A Chat System using django and other web technologies like html, css, js. It comes with user authentication, group and individual chat rooms and also allows users to follow and unfollow others for privacy chat.</p>
                    </div>
                </motion.div>
                <motion.div className="project" onClick={() => route("https://github.com/AravindReddy16/Tic-Tac-Toe-JS")} initial={{y: 50, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once:true}} transition={{ duration: 0.8, ease: "linear" }}>
                    <div className="projectTitle">
                        <div className="projectLogo">
                            <img src="https://uploads-ssl.webflow.com/5f067b661807eb95a36fe56a/5f067b661807eb9b426fe5ac_Development.svg" alt="logo" />
                        </div>
                        <div className="projectName">
                            <p>Tic-Tac-Toe</p>
                        </div>
                    </div>
                    <div className="projectInfo">
                        <p>A simple game using html, css, js. It helps me in learning the logic behind the game rules to get the winner and allows users to know the their chance to play.</p>
                    </div>
                </motion.div>
                <motion.div className="project" onClick={() => route("https://github.com/AravindReddy16/Expense-Tracker-ReactJS")} initial={{y: 50, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once:true}} transition={{ duration: 0.8, ease: "linear" }}>
                    <div className="projectTitle">
                        <div className="projectLogo">
                            <img src="https://uploads-ssl.webflow.com/5f067b661807eb95a36fe56a/5f067b661807eb9b426fe5ac_Development.svg" alt="logo" />
                        </div>
                        <div className="projectName">
                            <p>Expense Tracker</p>
                        </div>
                    </div>
                    <div className="projectInfo">
                        <p>Expense Tracker is a type of calculator that helps the people to know, how their income and expenses are handled. It build with the help of React.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};