import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Link } from 'react-router-dom';
import { ImageMedium } from '../ImageMedium';
import { LazyImage } from '../LazyImage';
export function Homeworkcard({ item }) {
  const { language } = useLanguage();
  return (

    <Link className='Homeworkcard' to={`/case/${item.path}`}>
      <div className='Homeworkcard-img-container'>
       <LazyImage  classname="imageMediumHomeworkcard" src={item.image1} altSwe={item.altSwe
       } altEng={item.altEng}/>
      </div>
      <div className='Homeworkcard-content'>
        <h2 className='Homeworkcard-titel'>
       
          {language && language === "sv"
            ? item.headlineMainSwe && item.headlineMainSwe
            : item.headlineMainEng && item.headlineMainEng}
        </h2>
       {/* <p>
          {language && language === "sv"
            ? item.descriptionSwe && item.descriptionSwe
            : item.descriptionEng && item.descriptionEng}
        </p>*/}
      </div>
    </Link>

  )

}


