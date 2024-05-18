import { Link } from "react-router-dom";
import "./Aboutcontentstyle.css"
import React from 'react'
import React1 from "../assets/react1.png"
import React2 from "../assets/react2.png"
import HBTU from "../assets/HBTU.png"
import MVM from "../assets/MVM.jpeg"
import BNSD from "../assets/BNSD.jpg"

export const Aboutcontent = () => {
  return (
    <div data-aos="fade-up">
    <div className="about">
      <div className="left">
        <h1>MY BIO</h1>
        <hr className="custom-hr1"/>
        <p>Hi, I'm Vaishnavi Gupta, soon to graduate from Harcourt Butler Technical University Kanpur with a major in Electrical Engineering (EE). </p>
        <p>I'm passionate about Software development roles and always eager to learn and innovate. My expertise includes frontend development with proficiency in HTML, CSS, and JavaScript frameworks like React.js, as well as backend development with a focus on API design, database management, server-side programming in Node.js, competitive programming in C++, effective communication skills and googling stuff(the much-needed skill for being a good developer)</p>
        <p>Beyond my academic interests, I enjoy sketching, playing badminton, and chess, which help me stay creative and strategic.</p>
        <p>I'm also an avid reader and a movie enthusiast, always on the lookout for a good story, whether it's in a book or on the big screen.</p>
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

    <hr className="custom-hr"/>

<div className="education">
        <h1>EDUCATION</h1>
        <hr className="custom-hr2"/>
        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">
              <li className="making">
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src={MVM} alt="Maharishi Vidya Mandir" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>2013-2017</h4>
                    <h4 className="subheading">Maharishi Vidya Mandir</h4>
                    <h5>Fatehpur</h5>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Primary and Secondary Schooling<br />Grade (Class X): 9.8/10(CBSE)</p>
                  </div>
                </div>
              </li>

              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src={BNSD} alt="BNSD Shiksha Niketan" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>2017-2019</h4>
                    <h4 className="subheading">BNSD Shiksha Niketan</h4>
                    <h5>Kanpur</h5>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Completed Senior Secondary School<br />Grade (Class XII): 83% (UP)</p>
                  </div>
                </div>
              </li>
              
              <li className="making">
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src={HBTU} alt="HBTU" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>2020-2024</h4>
                    <h4 className="subheading">HBTU</h4>
                    <h5>Kanpur</h5>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">B. Tech in Electrical Engineering<br />CPI: 8.0/10.0</p>
                  </div>
                </div>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
   


    </div>
  )
};
export default Aboutcontent;