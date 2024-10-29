import React from 'react';
import { Workcard } from './Workcard';
export function Worksection() {
  return (

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



  );
}



