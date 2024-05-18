import "./Workcardstyle.css";
import Workcard from "./Workcard";
import Workcardata from "./Workcardata";

import React from 'react'


const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">PROJECTS</h1>
        <hr className="custom-hr2"/>
        <div className="project-container">
            {Workcardata.map((val,ind) =>{
                return(
                    <Workcard 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    code={val.code}
                    />
                );
            })}
        </div>
    </div>
  );
};

export default Work