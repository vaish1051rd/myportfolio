import React from 'react';
import { NavLink } from 'react-router-dom';
import './Workcardstyle.css';

const Workcard = (props) => {
  return (
    <div className="project-card" data-aos="fade-up">
      <img src={props.imgsrc} alt="project" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={props.view} className="btn">View</NavLink>
          <NavLink to={props.code} className="btn">Code</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Workcard;
