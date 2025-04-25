import React from 'react';
import OmMig from '../../img/OmMig.png';
import CV from '../../img/Maria-Ekman-Cv-SV-2025.pdf';
const ResponsiveImage = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={`case-responsive-img ${className}`} />
);
const HeroSection = () => {
  return (<div className="case-container">
    <div className="case-content">
      <div className="hero-overlay-container">
      <ResponsiveImage src={OmMig} alt="Header" className="case-header-img" />
        <div className="hero-text">
          <h1>Om mig</h1>
          <button className="cv-button" type="button">
            <a className='a-cv-button' download="Maria-Ekman-Cv-SV-2025.pdf"
            href={CV}>
              Ladda ner personligt brev och CV
            </a>
          </button>
        </div>
      </div>
      <section className="case-section">
        <h2 className="case-section-title">Om mig</h2>
        <p>
          Hej! Jag är UX-designer på Loopeli med en passion för att skapa användarvänliga och långsiktiga lösningar som gör skillnad – både för användaren och företaget.
        </p>
        <p>
          Tillgänglighet är något jag värderar högt. Jag har utbildning inom WCAG och har arbetat aktivt med att tillgänglighetsanpassa gränssnitt enligt dessa riktlinjer för att skapa inkluderande upplevelser för alla. Min bakgrund som boendestödjare har också lärt mig mycket om empati, kommunikation och hur man bygger förtroende – något jag ser som en stor styrka i mitt arbete med design.
        </p>
        <p>
          Jag drivs av nyfikenhet och har en god förmåga att förstå människor, vilket hjälper mig att identifiera både svagheter och möjligheter i digitala produkter.
        </p>
        <p>
          Jag arbetar dagligen i verktyg som Figma, Framer, Sketch, Photoshop och Illustrator, och har dessutom erfarenhet av att koda i React, JavaScript, Angular, HTML, CSS, Sass och GraphQL. Jag är också van vid att arbeta med Episerver/Optimizely och Git, vilket gör att jag förstår hela processen – från idé till färdig produkt.
        </p>
        <p>
          Bosatt i Sundbyberg tillsammans med min sambo och våra två katter, leker jag ofta med idéer även utanför jobbet för att få en extra kreativ boost. Jag är en stor kattälskare som gärna tar en mat- eller biokväll, eller en fika. Utanför hemmet umgås jag ofta med vänner och deras barn, spelar fotboll eller kör ett intensivt pass crossfit.
        </p>
      </section>
    </div>
  </div>

  );
};

export default HeroSection;

