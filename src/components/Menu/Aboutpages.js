import React from 'react';
import heroImage from "./OmMig.png"

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src={ heroImage } alt="Hero" />
        <button className="cv-button">Ladda ned mitt Cv & personliga brev</button>
      </div>
      <div className="hero-text">
        <h2>Om mig</h2>
        <p>
          Hej! Jag är UX-designer på Loopeli med en passion för att skapa användarvänliga och
          långsiktiga lösningar som gör skillnad – både för användaren och företaget.
        </p>
        <p>
          Tillgänglighet är något jag värderar högt. Jag har utbildning inom WCAG och har arbetat
          aktivt med att tillgänglighetsanpassa gränssnitt enligt dessa riktlinjer för att skapa
          inkluderande upplevelser för alla. Min bakgrund som boendestödjare har också lärt mig
          mycket om empati, kommunikation och hur man bygger förtroende – något jag ser som en stor
          styrka i mitt arbete med design.
        </p>
        <p>
          Jag drivs av nyfikenhet och har en förmåga att förstå människor, vilket hjälper mig att
          identifiera både svagheter och möjligheter i digitala produkter.
        </p>
        <p>
          Jag jobbar dagligen i verktyg som Figma, Framer, Sketch, Photoshop och Illustrator, och
          har dessutom erfarenhet av att koda i React, JavaScript, Angular, HTML, CSS, Sass och
          GraphQL. Jag är också van vid att arbeta med Episerver/Optimizely och Git, vilket gör att
          jag förstår hela processen – från idé till fungerande produkt.
        </p>
        <p>
          Bosatt i Sundbyberg tillsammans med min sambo och våra två katter, leker jag ofta med idéer
          även utanför arbetet för att få en extra boost. En stor kattälskare som gärna tar en
          mat- eller bi-träff eller en fika på kvällarna. Utanför hemmet besöker jag ofta vänner med
          barnen, fotbollsspel eller ett intensivt pass crossfit.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;