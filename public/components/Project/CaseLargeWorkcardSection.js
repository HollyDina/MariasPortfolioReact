import React from 'react';
import { CaseLargeworkcard } from './CaseLargeworkcard';
import { CaseLargeworkcardright } from './CaseLargeworkcardright';
export function CaseLargeWorkcardSection({ dataHome }) {
 
  return (

    <div className='case-largeworkcard-container'> 
   <h1>Här kan du se någa projekt</h1>
      {dataHome && dataHome.map((item, index) => (
        <section className="case_content_main" key={index}>
          {index % 2 === 0 ? (
            <>
              <div className='case-card-container-row'><CaseLargeworkcard item={item} /></div>
            </>
          ) : (
            <>
              <div className='case-card-container-row'><CaseLargeworkcardright item={item} /></div>
            </>
          )}
        </section>
      ))}
    </div>
  )
}


/*
<div className='case-largeworkcard-container'>


      
      <h2>Case</h2>
      <div className='case-card-container-row'><CaseLargeworkcardright/></div>  
      <div className='case-card-container-row'><CaseLargeworkcard/></div>  
      <div className='case-card-container-row'><CaseLargeworkcardright/></div> 
      <div className='case-card-container-row'><CaseLargeworkcard/></div>  
    </div>
  )*/