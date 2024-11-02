import React from 'react';


import { useLanguage } from './LanguageContext';
export function ImageLarge({ img,
  altEng, altSwe, imageDescriptionSwe,imageDescriptionEng
}) {



  const { language } = useLanguage();
  return (
    <div className="container_image_large">
      <img src={img&&img ? require(`../img/${img}`) : ''}
        alt={language && language === "sv"
          ? altSwe && altSwe
          : altEng && altEng}
        className="ImageLarge" />

      <p className="imageDescription">
        {language === "sv"
          ? imageDescriptionSwe
          : imageDescriptionEng}
      </p>
    </div>

  );
}

