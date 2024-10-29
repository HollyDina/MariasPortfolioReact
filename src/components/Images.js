import React from 'react';


import { useLanguage } from './LanguageContext';
export function Images({ img,
  altEng, altSwe, imageDescriptionSwe,imageDescriptionEng
}) {



  const { language } = useLanguage();
  return (
    <div className="img_container">
      <img src={img&&img ? require(`../img/${img}`) : ''}
        alt={language && language === "sv"
          ? altSwe && altSwe
          : altEng && altEng}
        className="images" style={{maxHeight: "300px"}}/>

      <p className="imageDescription">
        {language === "sv"
          ? imageDescriptionSwe
          : imageDescriptionEng}
      </p>
    </div>

  );
}

