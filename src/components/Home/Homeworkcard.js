import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Link } from 'react-router-dom';
import { Images } from '../Images';
export function Homeworkcard({ item }) {

  console.log(item.path, "finaholll", item.image1, "bild");


  const { language } = useLanguage();
  return (

    <Link className='Homeworkcard' to={`/case/${item.path}`}>
      <div className='Homeworkcard-img-container'>
        <Images altEng={item.altEng} altSwe={item.altSwe}
          img={item.image1} />

      </div>
      <div className='Homeworkcard-content'>
        <h3 className='Homeworkcard-titel'>
       
          {language && language === "sv"
            ? item.headlineMainSwe && item.headlineMainSwe
            : item.headlineMainEng && item.headlineMainEng}
        </h3>
       {/* <p>
          {language && language === "sv"
            ? item.descriptionSwe && item.descriptionSwe
            : item.descriptionEng && item.descriptionEng}
        </p>*/}
      </div>
    </Link>

  )

}


