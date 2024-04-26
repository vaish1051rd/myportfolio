import "./Heroimagestyle.css";

import React from 'react'
import Introimg from "../assets/intro-bg.jpg"
import {Link} from "react-router-dom";

const Heroimage = () => {
  return (
    <div className="hero">
      
        <div className="mask">
            <img className="into-img" src={Introimg} alt="introimg" />
        </div>
        
        <div className="content">
            <p>Hi,I'M A FREELANCER</p>
            <h1>WEB DEVELOPER</h1>
            <div>
                <Link to="/project" className="btn">PROJECTS</Link>
                <Link to="/contact" className="btn-light">CONTACT</Link>
            </div>
        </div>
        
    </div>
  )
}

export default Heroimage