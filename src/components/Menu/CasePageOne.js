import React from 'react';
import heroImage from "./mobilhero.svg"
const ResponsiveImage = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    className={`case-responsive-img ${className}`}
    style={{  maxWidth: '900px', height: 'auto', maxHeight: '600px' }}
  />
);
const CasePageOne = () => (
  <div className="case-container">
    <div className="case-content">
    <div className="hero-overlay-container">
    <ResponsiveImage src={heroImage} alt="Header" className="case-header-img" />
   
  <div className="hero-text-case">
  <h1 className='hero-headline'>Användarguide:</h1>
  <p  className='hero-p'> Så här använder du Loopeli Appen</p>      
  </div>
</div>

      <section className="case-section">
        <h2 className="case-section-title">Bakgrund</h2>
      

        <h3>Roll</h3>
        <ul>
        <li>UX-designer</li>
        
        </ul>

        <h3>Verktyg & Metoder</h3>
        <ul>
        <li>Figma</li>
      <li>ChatGPT</li>
      <li>Videoinspelning</li>
      <li>Flödesschema</li>
      <li>Low-fi</li>
        </ul>

        <h3>Team</h3>
        <ul>
        <li>Utvecklare</li>
        <li>Produktägare</li>
        </ul>

        <h3>Målet</h3>
        <p>
         
        <p>Målet är att förbättra designgränssnittet, göra det mer användarvänligt samt säkerställa att designen följer WCAG-kriterierna.</p>

<p>Det innebär att ta bort överflödig design, förenkla instruktionerna samt göra det enklare för användaren att installera och använda appen.</p>

        </p>

        <h3>Mål</h3>
        <p>
          Fokus är att ta reda på vilka faktorer påverkar studentupplevelsen på Chas
          academy och identifiera moment som leder till frustration eller missnöje med
          utbildningen. Målet är också att få bättre insikt i studenternas behov och
          önskemål för att kunna utveckla och förbättra Chas academys utbildningsupplägg
          och erbjudanden. Resultaten ska hjälpa Chas att skapa en bättre kundupplevelse,
          minska smärtpunkter och höja kvaliteten på utbildningen vilket slutligen
          resulterar i en ökad konkurrenskraft.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Flödesschema av appen</h2>
        <p>
        <p>Jag började med att filma iPad-skärmen vid installation av Äldreappen via Anhörigappen, för att kartlägga det nuvarande flödet.</p>

<p>Därefter skapade jag ett flödesschema för att visualisera hur apparna fungerar och hur de olika vyerna hänger ihop.</p>

        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Low-fi-design</h2>
       
        <p>Jag skapade en low-fi-design för att snabbt få en överblick över vilka ändringar jag hade gjort och identifiera hur designen kunde förtydligas.</p>

       
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Förbättringsområden</h2>
        <p>Det sista skedet i analysen handlade om att ta fram konkreta förbättringsåtgärder.</p>

<p>Vi föreslog realistiska förändringar som direkt adresserade de identifierade problemområdena.</p>

<p>Dessa omfattade allt från kommunikation, kursinnehåll och support till övergripande pedagogiska strategier.</p>

<p>Målet var att säkerställa högre kvalitet i utbildningen och att öka studenternas totala upplevda nöjdhet.</p>

      </section>

    </div>
  </div>
);

export default CasePageOne;
