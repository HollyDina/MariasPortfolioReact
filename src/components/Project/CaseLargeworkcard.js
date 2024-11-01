import React from 'react';
import v from '../work5.jpg';
import { Link } from 'react-router-dom';

import { useLanguage } from '../LanguageContext';
import { Images } from '../Images';
export function CaseLargeworkcard({ item }) {

  const { language } = useLanguage();
  return (


    <Link to={`/case/${item.path}`} style={{textDecoration:"none"}}>
      <div className='CaseLargeworkcard'>
        <div className='CaseLargeworkcard-img'>
          <Images img={item.image1}></Images>
        
          </div>
        <div className='CaseLargeworkcard-content'>
          <h3 className='CaseLargeworkcard-titel'>{language && language === "sv"
            ? item.headlineMainSwe && item.headlineMainSwe
            : item.headlineMainEng && item.headlineMainEng}{item.id}</h3>
          <p className='CaseLargeworkcard-description'> {language && language === "sv"
            ? item.descriptionSwe && item.descriptionSwe
            : item.descriptionEng && item.descriptionEng}</p>
        </div>
      </div>
    </Link>
  )
}

