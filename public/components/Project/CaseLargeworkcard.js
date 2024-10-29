import React from 'react';
import v from '../work5.jpg';
import { Link } from 'react-router-dom';

import { useLanguage } from '../LanguageContext';
export function CaseLargeworkcard({ item }) {
  console.log(item, "vad innehåller")
  const { language } = useLanguage();
  return (


    <Link to={`/case/${item.path}`}>
      <div className='CaseLargeworkcard'>
        <div className='CaseLargeworkcard-img'>
          <img src={v} alt="En Telefon" className="case-image-workcard" />
          </div>
        <div className='CaseLargeworkcard-content'>
          <h3 className='CaseLargeworkcard-titel'>{language && language === "sv"
            ? item.headlineMainSwe && item.headlineMainSwe
            : item.headlineMainEng && item.headlineMainEng}{item.id}</h3>
          <p> {language && language === "sv"
            ? item.descriptionSwe && item.descriptionSwe
            : item.descriptionEng && item.descriptionEng}</p>
        </div>
      </div>
    </Link>
  )
}

