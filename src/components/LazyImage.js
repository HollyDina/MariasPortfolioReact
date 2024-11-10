import React, { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";
export const LazyImage = ({ src, altEng, altSwe , classname, imageDescriptionSwe,imageDescriptionEng }) => {

  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px 100px 0px",
        threshold: 0.1,
      }
    );

    const imgElement = document.querySelector(`[data-src='${src}']`);
    if (imgElement) observer.observe(imgElement);

    return () => {
      if (imgElement) observer.unobserve(imgElement);
    };
  }, [src]);

  useEffect(() => {
    if (isVisible) {
      setImageSrc(src);
    }
  }, [isVisible, src]);

  return (
   <div className="container_image_medium">
    <img
      src={imageSrc&&imageSrc? require(`../img/${src}`) : ''}
      alt={language && language === "sv"
        ? altSwe && altSwe
        : altEng && altEng}
      className={classname}
      data-src={src}
      loading="lazy"
     
      
    />
 <p className="imageDescription">
      {language === "sv"
        ? imageDescriptionSwe
        : imageDescriptionEng}
    </p>

  </div>

  );
};


