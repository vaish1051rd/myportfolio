import "./Heroimagestyle.css";

import React from 'react'
//import Introimg from "../assets/intro-bg.jpg"
import {Link} from "react-router-dom";

const Heroimage = () => {
  return (
    <div className="hero">
      
        {/* <div className="mask">
            <img className="into-img" src={Introimg} alt="introimg" />
        </div> */}
        
        <div className="content">
            <p className="reduce-space">Hi there ! I am</p>
            <p><strong><span className="name">Vaishnavi Gupta</span></strong> </p>
            <h4>I'm thrilled you're here. Please take a moment to explore my site, where you'll find details on my background,
                experience, skills and more. To learn more or connect on an opportunity, don't hesitate to reach out.</h4>
            <h4>PS: This website is not updated regularly.</h4>
            <div>
                <Link to="/project" className="btn">PROJECTS</Link>
                <Link to="/contact" className="btn-light">CONTACT</Link>
            </div>
        </div>
        
    </div>
  )
}

export default Heroimage