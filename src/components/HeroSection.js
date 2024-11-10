import React from "react";
import ImageHero from "./ImageHero";
import { useLanguage } from "./LanguageContext";
function HeroSection({ content1Item }) {
  const { language } = useLanguage();
  
  const toolFields = Object.keys(content1Item).filter((key) =>
    language === "sv" ? key.startsWith("textToolsSwe") : key.startsWith("textToolsEng")
  );


  const rollFields = Object.keys(content1Item).filter((key) =>
    language === "sv" ? key.startsWith("textRoleSwe") : key.startsWith("textRoleEng")
  );





  return (
    <section className="HeroSection">
      <ImageHero image1={content1Item.image1} altEng={content1Item.imageDescriptionSwe} altSwe={content1Item.imageDescriptionSwe}
        imageDescriptionSwe={content1Item.imageDescriptionSwe} imageDescriptionEng={content1Item.imageDescriptionEng} />
      <div class="case_content_main" style={{ justifyContent: 'flex-start' }}>
        <div className="hero-headline-container">
          <h1 className="section-title-work">{language === "sv" ? content1Item.headlineMainSwe : content1Item.headlineMainEng}</h1>
        </div>
      </div>
      <div class="case_content_main">
        <div className="case_content">
          <h2 className="section-title-work">{language === "sv" ?
           content1Item.headlineRoleSwe : content1Item.headlineRoleEng}

          </h2>
          {rollFields.map((fieldKey, index) => (
            <p key={index} className="text">
              {content1Item[fieldKey]}
            </p>
          ))}
        </div>
        <div className="case_content">
          <h2 className="section-title-work">
            {language === "sv" ? content1Item.headlinetoolsSwe : content1Item.headlineToolsEng}
          </h2>
          {toolFields.map((fieldKey, index) => (
            <p key={index} className="text">
              {content1Item[fieldKey]}
            </p>
          ))}
        </div>
      </div>

    </section>
  );
}

export default HeroSection;
