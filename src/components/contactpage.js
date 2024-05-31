import React from "react";
import "../styles/contactpage.css";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Contact() {
  return (
    <div className="contactDiv" id="contact">
      <motion.div className="contactBox" initial={{y: 50, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once:true}} transition={{ duration: 0.8, ease: "linear" }}>
        <div className="contactInfo">
          <div className="contactOne">
            <p>CONTACT ME</p>
          </div>
          <div className="contactTwo">
            <p>Wanna Contact? Let's Talk!</p>
          </div>
          <div className="contactThree">
            <div className="mailBox">
              <div className="mailImg">
                <img
                  src="https://uploads-ssl.webflow.com/5f067b661807eb95a36fe56a/5f067b661807ebbbf06fe5e2_Mail.svg"
                  alt="mail"
                />
              </div>
              <div className="mail">
                <p>aravindreddygudi1603@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contactFour">
            <div className="logoImg">
              <div className="logoBox">
                <img
                  src="https://uploads-ssl.webflow.com/5f067b661807eb95a36fe56a/5f067b661807eb9e446fe63d_Logo%20Mark.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="listBox">
              <a>
                <Link to="home" smooth={true} offset={0} duration={800}>
                  Home
                </Link>
              </a>
              <a>
                <Link to="about" smooth={true} offset={0} duration={800}>
                  About
                </Link>
              </a>
              <a>
                <Link to="projects" smooth={true} offset={0} duration={800}>
                  Projects
                </Link>
              </a>
              <a>
                <Link to="contact" smooth={true} offset={0} duration={800}>
                  Contact
                </Link>
              </a>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="leftPart">
            <p>
              ©️ 2024 Reserved. Powered by <span id="foot">Locato</span>
            </p>
          </div>
          <div className="rightPart">
            <p>Style Guide</p>
            <p>Licensing</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
