import React from 'react';
import heroImage from "./surffplattahero.svg"
import { Link } from 'react-router-dom';
const ResponsiveImage = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    className={`case-responsive-img ${className}`}
    style={{ maxWidth: '100%', height: 'auto', maxHeight: '500px' }}
  />
);
const CasePageTwo = () => (
  <div className="case-container">
    <div className="case-content">
      <div className="hero-overlay-container">
        <ResponsiveImage src={heroImage} alt="Header" className="case-header-img" />
        <div className="hero-text-case">
          <h1 className='hero-headline'>Loopeli tabelet app</h1>
        </div>
      </div>

      <section className="case-section">
        <h2 className="case-section-title">Bakgrund</h2>
        <p>Loren</p>

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

        <h6>Mål</h6>
        <p>
          <p>Överflödiga element har minimerats för att appen ska vara funktionell och ha ett logiskt användarflöde.</p>
          <p>Appen uppfyller WCAG-kraven.</p>
          <p>Huvudfunktionerna prioriteras med större ikoner, knappar och texter samt färger med hög kontrast.</p>
          <p>Namnen på sidorna är enkla och tydliga.</p>

        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Research</h2>
        <p>Jag har granskat liknande appar och konkurrenter för att analysera deras design.</p>
        <p>Jag började med att spela in iPad-skärmen medan jag använde Elderappen för att studera dess vyer och struktur.</p>
        <p>Jag har även tagit bilder av olika vyer i både liggande och stående läge.</p>

        <ResponsiveImage src="/research.jpg" alt="Research" className="case-section-img" />
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Flödesschema över appen</h2>
        <p>Jag samlade bilder från liknande appar och konkurrenter för att få designinspiration.</p>
        <p>För att bättre förstå strukturen började jag med att spela in min iPad-skärm medan jag använde Elderappen, samt använde ett flödesschema för att analysera appens uppbyggnad.</p>
        <p>Jag tog även bilder av olika vyer i både liggande och stående läge.</p>


        <ResponsiveImage src="/schema.jpg" alt="Schema" className="case-section-img" />
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Low-fi</h2>
        <p>Fokus ligger på appens struktur och funktion, vilket innebär att flera idéer kan testas utan att fastna i detaljer.</p>
        <p>Användarflödena är i centrum, och genom att undvika färger, typsnitt och grafik i ett tidigt skede minskar risken att viktiga beslut fördröjs.</p>

      </section>

      <section className="case-section">
        <h2 className="case-section-title">Användare tester</h2>
        <p>Syftet är att ta reda på om användare förstår att de kan läsa meddelanden, hur de hanterar ljudet och höjer volymen.</p>
        <p>Fungerar menyerna och rubrikerna, eller behöver något förtydligas?</p>

      </section>

      <section className="case-section">
        <h2 className="case-section-title">Resultat från användartester</h2>
        <p>Efter användartester har jag minskat storleken på rubrikerna, ändrat rubrikernas namn, lagt till en bakåtpil med tillhörande text samt reducerat och slagit ihop texter på bilder och meddelanden.</p>

      </section>

      <section className="case-section">
        <h2 className="case-section-title">Problem</h2>
        <p>Vilka ikoner bör användas i menyn? Ska man välja en husikon eller en hamburgermeny?</p>
        <p>Ska telefonikonen föreställa en telefon, eller vore det mer passande att använda en adressbok, eftersom den tekniskt sett kan vara mer lämplig och tydligare signalera en telefonfunktion?</p>
        <p>Dessutom bör det tydligare framgå att användarna kan titta på bilderna separat, eftersom det i den tidigare designen inte var lika tydligt.</p>

        <ResponsiveImage src="/problems.jpg" alt="Problems" className="case-section-img" />
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Design som stöttar användaren</h2>
        <p>Jag har designat gränssnittet så att huvudfunktionerna står i fokus, med större ikoner och texter.</p>
        <p>Varje sida har en huvudrubrik, och både texter och ikoner har färger som uppfyller WCAG-kraven.</p>
        <p>Radion visar tydligare vilken låt som spelas och vilken som är aktiv. Kanalen kan ändras, och en animation visas när den byts.</p>

        <ResponsiveImage src="/finaldesign.jpg" alt="Designen" className="case-section-img" />
      </section>
    </div>
  </div>
);

export default CasePageTwo;