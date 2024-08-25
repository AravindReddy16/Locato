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
                <motion.div className="project" onClick={() => route("https://github.com/AravindReddy16/Freshmenta-ECommerce--ReactJs")} initial={{y: 50, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once:true}} transition={{ duration: 0.8, ease: "linear" }}>
                    <div className="projectTitle">
                        <div className="projectLogo">
                            <img src="https://uploads-ssl.webflow.com/5f067b661807eb95a36fe56a/5f067b661807eb9b426fe5ac_Development.svg" alt="logo" />
                        </div>
                        <div className="projectName">
                            <p>Online Grocery Store</p>
                        </div>
                    </div>
                    <div className="projectInfo">
                        <p>Online Grocery Store using React with all the features like add and delete from cart and favourite functionalities with responsive to different screen sizes.</p>
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
                <motion.div className="project" onClick={() => route("https://github.com/AravindReddy16/MinimumLivingCost")} initial={{y: 50, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once:true}} transition={{ duration: 0.8, ease: "linear" }}>
                    <div className="projectTitle">
                        <div className="projectLogo">
                            <img src="https://uploads-ssl.webflow.com/5f067b661807eb95a36fe56a/5f067b661807eb9b426fe5ac_Development.svg" alt="logo" />
                        </div>
                        <div className="projectName">
                            <p>Housing Rental Site</p>
                        </div>
                    </div>
                    <div className="projectInfo">
                        <p>Housing Rental Site using React by focusing on frontend part with responsive to different screen sizes.It shows the proficiency in React and styling the pages.</p>
                    </div>
                </motion.div>
                <motion.div className="project" onClick={() => route("https://github.com/AravindReddy16/Library--Store-Files-")} initial={{y: 50, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once:true}} transition={{ duration: 0.8, ease: "linear" }}>
                    <div className="projectTitle">
                        <div className="projectLogo">
                            <img src="https://uploads-ssl.webflow.com/5f067b661807eb95a36fe56a/5f067b661807eb9b426fe5ac_Development.svg" alt="logo" />
                        </div>
                        <div className="projectName">
                            <p>Online File Store</p>
                        </div>
                    </div>
                    <div className="projectInfo">
                        <p>It's an Online File Storage with Dajngo and Some Styling.Which is mainly focusing on Backend functionalites.It helps the users to store the files online with user authentiaction.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};