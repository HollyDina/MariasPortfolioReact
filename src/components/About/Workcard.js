import React from 'react';
import v from '../work5.jpg';
export function Workcard() {

  return (

    <div className='card-container'>
      <div className='card'>
        <img class="card-image" src={v} alt=""></img>
        <h1>Loopeli</h1>
        <div className='card-ul'> 
          <ul>
          <li>User stories</li>
          <li>Prototyp</li>
          <li>Usability review</li>
          <li>User/ usability testing</li>
          </ul>
          <ul> <li>Affinity Diagram</li>
          <li>Qualitative research</li>
          <li>Contextual interviews</li>
        </ul>
        </div>
      </div>
    </div>
  )

}



