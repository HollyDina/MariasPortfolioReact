import React from 'react';
import heroImage from "./surffplattahero.svg"
import Lowifsurffplata from "./Low-if-surffplata.png"
import Lowfiloopeli from "./Low-fi_loopeli_app.svg"
import higSurfplatta from "./higSurfplatta.svg"

import { Link } from 'react-router-dom';
const ResponsiveImage = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    className={`case-responsive-img ${className}`}
    style={{ maxWidth: '100%', height: 'auto', maxHeight: '700px' }}
  />
);
const CasePageTwo = () => (
  <div className="case-container">
    <div className="case-content">
      <div className="hero-overlay-container">
        <ResponsiveImage src={heroImage} alt="Header" className="case-header-img" />
        <div className="hero-text-case">
          <h1 className='hero-headline'>Loopelis tabelet app</h1>
        </div>
      </div>

      <section className="case-section">
        <h3>Roll</h3>
        <p>UX-designer</p>

        <h4>Verktyg och metoder</h4>
        <ul>
          <li>Figma</li>
          <li>ChatGPT</li>
          <li>Videoinspelning</li>
          <li>Flödesschema</li>
          <li>Low-fi</li>     <li>Miro</li>
          <li>Kvalitativ metod</li>
          <li>Behovskarta</li>
          <li>Affinity Diagramming</li>
        </ul>

        <h5>Team</h5>
        <ul>
          <li>Utvecklare</li>
          <li>Produktägare</li>
        </ul>
        </section>
        <section className="case-section">
        <h2 className="case-section-title">Mål</h2>
    
      
          <p>Överflödiga element har minimerats för att appen ska vara funktionell och ha ett logiskt användarflöde.</p>
          <p>Appen uppfyller WCAG-kraven.</p>
          <p>Huvudfunktionerna prioriteras med större ikoner, knappar och texter samt färger med hög kontrast.</p>
          <p>Namnen på sidorna är enkla och tydliga.</p>

    
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Research</h2>
        <p>Jag har granskat liknande appar och konkurrenter för att analysera deras design.</p>
        <p>Jag började med att spela in iPad-skärmen medan jag använde Elderappen för att studera dess vyer och struktur.</p>
        <p>Jag har även tagit bilder av olika vyer i både liggande och stående läge.</p>

        {/*<ResponsiveImage src="/research.jpg" alt="Research" className="case-section-img" />*/}
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Flödesschema över appen</h2>
        <p>För att få en bättre förståelse för appens struktur började jag med att spela in skärmen på min iPad medan jag använde Elderappen.</p>

        <p>Jag tog även bilder av olika vyer i både liggande och stående läge, och använde ett flödesschema för att analysera appens uppbyggnad.</p>



        <ResponsiveImage src={Lowfiloopeli} alt="Schema" className="case-section-img" />
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Low-fi-design i Loopelis surfplatteapp</h2>
        <p>Fokus ligger på appens struktur och funktion, vilket innebär att flera idéer kan testas utan att fastna i detaljer.</p>
        <p>Användarflödena är i centrum, och genom att undvika färger, typsnitt och grafik i ett tidigt skede minskar risken att viktiga beslut fördröjs.</p>
        <ResponsiveImage src={Lowifsurffplata} alt="Low-fi-versionen av Loopeli-app för surfplattap" className="case-section-img" />
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Syftet med användartester</h2>
        <p>Syftet med användartesterna är att ta reda på om användarna förstår den nya designen och kan navigera i appen.</p>

        <p>Vi vill se om de uppfattar hur man läser meddelanden, justerar ljudet, höjer volymen, väljer en radiokanal samt ringer ett samtal till en anhörig.</p>

        <p>Vi undersöker också om menyer och rubriker är tydliga och fungerar som tänkt, eller om något behöver förtydligas.</p>

        <p>Dessutom vill vi utvärdera vilka ikoner som fungerar bäst i menyn – exempelvis en husikon eller en hamburgermeny – samt om en telefon- eller adressboksikon tydligast signalerar samtalsfunktionen.</p>

      </section>

      <section className="case-section">
        <h2 className="case-section-title">Resultat från användartester</h2>
        <p>Efter användartester har jag minskat storleken på rubrikerna, ändrat deras namn, lagt till en bakåtpil med tillhörande text samt förenklat och slagit ihop designen för texter i bilder och meddelanden sidan.</p>

<p>Användarna verkar förstå att de kan läsa meddelanden från sina anhöriga. De verkar också förstå hur menyn fungerar när de väl har lärt sig hur appen fungerar.</p>

      </section>

      <section className="case-section">
        <h2 className="case-section-title">Design som stöttar användaren</h2>
        <p>Jag har designat gränssnittet så att huvudfunktionerna står i fokus, med större ikoner och texter.</p>
        <p>Varje sida har en huvudrubrik, och både texter och ikoner har färger som uppfyller WCAG-kraven.</p>
        <p>Radion visar tydligare vilken låt som spelas och vilken som är aktiv. Kanalen kan ändras, och en animation visas när den byts.</p>

        <ResponsiveImage src={higSurfplatta} alt="Designen" className="case-section-img" />
      </section>
    </div>
  </div>
);

export default CasePageTwo;