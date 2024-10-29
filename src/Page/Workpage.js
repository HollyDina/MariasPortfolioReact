import React from 'react';
import { Workcard } from '../components/About/Workcard';


function Workpage() {
  return (
  
    <div className="main-content">
       
        <div className="card-main">     
          <h1>Work</h1>
          <div className="cards-row">
            <Workcard></Workcard>
            <Workcard></Workcard>
          </div>
          <div className="cards-row">
          <Workcard></Workcard> 
          <Workcard></Workcard>
            
          </div>
        </div>
    </div>
  );
}


export default Workpage;

