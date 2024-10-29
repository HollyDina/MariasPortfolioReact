import React from "react";
import images from "../img/spel6.png";
import { useLanguage } from "./LanguageContext";

function ImageHero({ image1, altEng, altSwe, imageDescriptionSwe, imageDescriptionEng }) {
  const { language } = useLanguage();


  return (
    <div>
      <section className="hero-introduction-container-section" style={{ backgroundColor: "black" }}>
        <div className="hero-image-container">
          <img className="hero-images" alt={language && language === "sv"
            ? altSwe && altSwe
            : altEng && altEng} src={image1 ? require(`../img/${image1}`) : ''} />
        </div>
      </section>
      <p className="heroimageDescription">{language && language === "sv"
        ? imageDescriptionSwe && imageDescriptionSwe
        : imageDescriptionEng && imageDescriptionEng} </p>
    </div>
  );
}

export default ImageHero;
