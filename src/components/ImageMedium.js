import React from 'react';


import { useLanguage } from './LanguageContext';
export function ImageMedium({ img,
  altEng, altSwe, imageDescriptionSwe,imageDescriptionEng,mh
}) {



  const { language } = useLanguage();
  return (
    <div className="container_image_medium">
      <img src={img&&img ? require(`../img/${img}`) : ''}
        alt={language && language === "sv"
          ? altSwe && altSwe
          : altEng && altEng}
        className="imageMedium" style={{maxHeight:mh}} />

      <p className="imageDescription">
        {language === "sv"
          ? imageDescriptionSwe
          : imageDescriptionEng}
      </p>
    </div>

  );
}

