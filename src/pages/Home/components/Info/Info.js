import React from "react";
import './Info.css';
import img1 from "./images/layer_1.png"
import vector from "./images/vector.png"

const Info = () => {
  
  return (
    <div className="clearfix infobox">
        <section className="left-info">
          <h1>Everyday life made easier</h1>
          <p>When life gets busy, you don't have to tackle it alone.</p>
          <p>Get time back for what you love without breaking the bank.</p>
          <ul className="list">
            <li className="item">
              <div className="circle"><img src={vector} /></div>
              <span>Choose your Tasker by reviews, skills, and price</span>
            </li>
            <li className="item">
            <div className="circle"><img src={vector} /></div>
              <span>Schedule when it works for you - as early as today</span>
            </li>
            <li className="item">
            <div className="circle"><img src={vector} /></div>
              <span>Chat,pay,tip,and review all through one platform</span>
            </li>
          </ul>

        </section>
        <section className="right-info">
          <img src={img1}/>
        </section>
    </div>
  );
};

export default Info;
