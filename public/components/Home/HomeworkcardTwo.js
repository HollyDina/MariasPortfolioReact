import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Link } from'react-router-dom';
import v from "./work5.jpg"
export function HomeworkcardTwo({ item }) {
  
 
  
  const { language } = useLanguage();
  /*return (
      <Link className='Homeworkcard' to={`/case/${item.id}`}>
      <div className='Homeworkcard-img-container'>
        <img src={v} alt="En Telefon" className="image-homeworkcard" />
      </div>
      <div className='Homeworkcard-content'>
        <h3 className='Homeworkcard-titel'>
        {item.id}
          {language && language === "sv"
            ? item.headlineMainSwe && item.headlineMainSwe
   : item.headlineMainEng && item.headlineMainEng}
        </h3>
       <p>
          {language && language === "sv"
            ? item.textSwe && item.textSwe
            : item.textEng && item.textEng}
        </p>
      </div>
      </Link>

  )*/

}

 
