import React from 'react';
import heroImage from "./mobilhero.svg"
import Färgkodsförklaring from "./Färgkodsförklaring.svg"
import skapakontoflödesschema from "./skapakontoflödesschema.svg"
import nyaflödesschema from "./nyaflödesschema.svg"
import Nuvarnadeflödesschema from "./Nuvarnadeflödesschema.svg"
import gudietoapp from "./gudietoapp.svg"
import HigGuide from "./HigGuide.svg"


const ResponsiveImage = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    className={`case-responsive-img ${className}`}
    style={{ maxWidth: '900px', height: 'auto', maxHeight: '600px' }}
  />
);
const CasePageOne = () => (
  <div className="case-container">
    <div className="case-content">
      <div className="hero-overlay-container">
        <ResponsiveImage src={heroImage} alt="Header" className="case-header-img" />

        <div className="hero-text-case">
          <h1 className='hero-headline'>Användarguide:</h1>
          <p className='hero-p'> Så här använder du Loopeli Appen</p>
        </div>
      </div>

      <section className="case-section">
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
      </section>
      <section className="case-section">
        <h1 className="case-section-title">Målet</h1>
        <p>Målet är att förbättra designgränssnittet, göra det mer användarvänligt samt säkerställa att designen följer WCAG-kriterierna.</p>

        <p>Det innebär att ta bort överflödiga designelement, förenkla instruktionerna och göra det enklare för användaren att installera och använda appen – utan att behöva kontakta Loopelis support.</p>

      </section>

      <section className="case-section">
        <div className="image-color">
          <h1 className="case-section-title" style={{ color: "white" }}>Färgkodsförklaring till flödesschema</h1>
          <ResponsiveImage src={Färgkodsförklaring} alt="Färgkodsförklaring till flödesschema" className="case-header-img" />
          <ResponsiveImage src={skapakontoflödesschema} alt="Header" className="case-header-img" />

          <ResponsiveImage src={nyaflödesschema} alt="Header" className="case-header-img" />

          
          <ResponsiveImage src={Nuvarnadeflödesschema} alt="Header" className="case-header-img" />
        </div>
        <h1 className="case-section-title">Flödesschema av appen</h1>
        <p>Jag började med att filma iPad-skärmen vid installationen av Äldreappen via Anhörigappen, för att kartlägga det nuvarande flödet och skapa ett flödesschema över hur appen idag skapar ett konto på webbplatsen, samt hur kontot verifieras.</p>

<p>Jag stötte dock på fel under kartläggningen, vilket ledde till att jag skapade ett nytt flödesschema för kontoverifiering. Om flödet skulle anpassas efter mitt förslag skulle det bli enklare för användare att skapa ett konto hos Looepli.</p>

<p>Därefter skapade jag ett flödesschema för att visualisera hur apparna fungerar och hur de olika vyerna hänger ihop.</p>

      </section>

      <section className="case-section"><div className="image-color">
        <ResponsiveImage src={gudietoapp} alt="Header" className="case-header-img" />
      </div>
        <h2 className="case-section-title">Low-fi-design</h2>

        <p>Jag skapade en low-fi-design för att snabbt få en överblick över vilka ändringar jag hade gjort och identifiera hur designen kunde förtydligas.</p>
      </section>

      <section className="case-section">
      <ResponsiveImage src={HigGuide} alt="Header" className="case-header-img" />

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
