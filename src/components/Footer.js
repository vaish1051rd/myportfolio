import "./Footerstyles.css"
import {FaChess, FaGithub, FaInstagram, FaLinkedin, FaMailBulk} from "react-icons/fa" 
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="social">
        <a href="mailto:vaish101navi@gmail.com"><FaMailBulk size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
        <a href="https://www.instagram.com/vaishnavi10.1"><FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
        <a href="https://www.linkedin.com/in/vaishnavi-gupta-802952200/"><FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
        <a href="https://github.com/vaish1051rd"><FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
        <a href="https://www.chess.com/member/vermillionmimosaa"><FaChess size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
        </div>
        <p>Created by <span className="highlight">Vaishnavi</span>|© All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer