import React from 'react';
import mobilhero from '../../img/ipadcase.svg';
import Fargkod from "../../img/fargforklaring.svg";
import skapakonto from '../../img/skapakontoflödesschema.svg';
import nyaflöde from '../../img/nyaflödesschema.svg';
import nuvarandeflöde from '../../img/Nuvarnadeflödesschema.svg';
import lowGuide from '../../img/lowGuide.svg';
import Mobilicon from '../../img/Mobilicon.svg';
import mobilInput from '../../img/mobilInput.svg';
import Mobilcolor from '../../img/Mobilcolor.svg';
import HigGuide from '../../img/higGuid.svg';
import PersonaOcar from '../../img/PersonaOcar.svg';
import PersonaKarl from '../../img/PersonaKarl.svg';
import PersonaAnna from '../../img/PersonaAnna.svg';
import Text_style from '../../img/Text_style.svg';
import Lowfilmedtext from '../../img/Low-fil-med-text.svg';
import Lowfiinto from '../../img/Lowfi-into.svg';


const ResponsiveImage = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    className={`case-responsive-img ${className}`}
    style={{ maxWidth: '900px', height: 'auto', maxHeight: '600px' }}
  />
);


const ResponsiveImage2 = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    className={`case-responsive-img ${className}`}
    style={{ maxWidth: '400px', height: 'auto', display: "flex", maxHeight: '400px', justifyContent: "center" }}
  />
);
const CasePageOne = () => (
  <div className="case-container">
    <div className="case-content">
      <div className="hero-overlay-container">
        <ResponsiveImage src={mobilhero} alt="Header" className="case-header-img" />

        <div className="hero-text-case">

          <h1 className='hero-headline'>Användarguide:</h1>
          <p className='hero-p'> Så här använder du Loopeli Appen</p>
        </div>
      </div>

      <section className="case-section">
        <h3 className="case-section-title">Roll</h3>
        <ul>
          <li>UX-designer</li>

        </ul>

        <h3 className="case-section-title">Verktyg & Metoder</h3>
        <ul>
          <li>Figma</li>
          <li>ChatGPT</li>
          <li>Videoinspelning</li>
          <li>Flödesschema</li>
          <li>Low-fi</li>
        </ul>

        <h3 className="case-section-title">Team</h3>
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
        <h1 className="case-section-title">Flödesschema av appen</h1>

        <p>Jag började med att filma iPad-skärmen vid installationen av Äldreappen via Anhörigappen, för att kartlägga det nuvarande flödet och skapa ett flödesschema över hur appen idag skapar ett konto på webbplatsen, samt hur kontot verifieras.</p>

        <p>Jag stötte dock på fel under kartläggningen, vilket ledde till att jag skapade ett nytt flödesschema för kontoverifiering. Om flödet skulle anpassas efter mitt förslag skulle det bli enklare för användare att skapa ett konto hos Looepli.</p>

        <p>Därefter skapade jag ett flödesschema för att visualisera hur apparna fungerar och hur de olika vyerna hänger ihop.</p>


        <ResponsiveImage src={Fargkod} alt="Färgkodsförklaring till flödesschema" className="case-header-img" />


        <ResponsiveImage src={skapakonto} alt="Header" className="case-header-img" />


        <ResponsiveImage src={nyaflöde} alt="Header" className="case-header-img" />




      </section>

      <section className="case-section">
        <h2 className="case-section-title">Personas</h2>

        <ResponsiveImage src={PersonaOcar} className="case-header-img" />
        <ResponsiveImage src={PersonaAnna} className="case-header-img" />
        <ResponsiveImage src={PersonaKarl} className="case-header-img" />

      </section>

      <section className="case-section">   <h2 className="case-section-title">Low-fi-design</h2>
 <p>Jag skapade en low-fi-design för att snabbt få en tydlig överblick över de ändringar jag gjort och för att identifiera vilka delar av designen som kunde förtydligas.

</p>

 <div className="two-column-list">
  <ul class="spacious-list">
    <li><span class="bold-number">1 .</span> För att visa appens namn och tydliggöra vilken app som är aktiv har en grafisk ikon lagts till.</li>
      <li><span class="bold-number">2 .</span> Instruktionstexten är inramad för att tydligt visa att det rör sig om två olika texter och för att skilja dem åt.</li>
 <li><span class="bold-number"> 2 .</span> Instruktionerna har numrerats för att göra det tydligare i vilken ordning de ska utföras.</li>
 <li><span class="bold-number">2 .</span> Jag har lagt till rubriker för att tydliggöra vilken typ av information som presenteras.</li>
  <li><span class="bold-number">3 .</span> Jag har lagt till etiketter (labels)och placeholder enligt WCAG för att förtydliga vad varje inmatningsfält gör.</li>
 <li><span class="bold-number"> 4 .</span> Ikoner har lagts till på samtliga knappar för att ge en visuell indikation av deras funktion.</li>
  <li><span class="bold-number">6 .</span> För att förtydliga valmöjligheten har ett streck och ett beskrivande ord lagts till.</li>
 
   
 
</ul>   
</div>

<ResponsiveImage src={Lowfiinto} alt="Header" className="case-header-img" />
      </section>

         <section className="case-section">   <h2 className="case-section-title">Low-fi-design med text</h2>
 <p>Texten har optimerats för att vara kort, lätt att läsa och förstå, samt tillgänglig och visuellt igenkännlig.
</p>





<ResponsiveImage src={Lowfilmedtext} alt="Header" className="case-header-img" />
      </section>

      
      <section className="case-section"> <h2 className="case-section-title">Färgpalett</h2>

        <ResponsiveImage src={Mobilcolor} alt="Header" className="case-header-img" />


      </section>

      <section className="case-section"> <h2 className="case-section-title">TextStil </h2>

        <ResponsiveImage src={Text_style} alt="Header" className="case-header-img" />


      </section>

      <section className="case-section"><h2 className="case-section-title">Inputfält och Knappar</h2>

        <ResponsiveImage2 src={mobilInput} alt="Header" className="case-header-img" />

      </section>
      <section className="case-section"><h2 className="case-section-title"> Ikoner</h2>

        <ResponsiveImage2 src={Mobilicon} alt="Header" className="case-header-img" />


      </section>
      <section className="case-section"><h2 className="case-section-title">Slut rusultat</h2>
      <p>Gör ändringar i knapparna, vänsterpanelen och textjusteringen till höger för att förbättra tillgängligheten. Syftet är att öka läsbarheten och användarvänligheten för alla användare, särskilt för personer med nedsatt syn. Använd färger med hög kontrast – till exempel gult mot svart – och välj andra färgkombinationer som gör innehållet så lättläst som möjligt</p>

        <ResponsiveImage src={HigGuide} alt="Header" className="case-header-img" />

      </section>

    </div>
  </div>
);

export default CasePageOne;
