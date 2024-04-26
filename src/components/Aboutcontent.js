import { Link } from "react-router-dom";
import "./Aboutcontentstyle.css"
import React from 'react'
import React1 from "../assets/react1.png"
import React2 from "../assets/react2.jpg"


export const Aboutcontent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
        I'm a versatile enthusiast, fluent in the languages of coding, sketching, and chess. When I'm not crafting digital wonders with lines of code or plotting my next chess move, you'll find me lost in the enchanting worlds of literature. Ready to join me on a whirlwind adventure of creativity and intellect? ✨🖌️♟️📚
        </p>
        <Link to='/contact'>
        <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
       <div className="img-container">
        <div className="img-stack top">
           <img src={React2} className="img" alt="true"/>
        </div>
       <div className="img-stack bottom">
       <img src={React1} className="img" alt="true"/>
       </div>
      </div>
      </div>
    </div>
  )
};
export default Aboutcontent;