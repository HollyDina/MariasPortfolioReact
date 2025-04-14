import React from 'react';
import heroImage from "./OmMig.png"

const ResponsiveImage = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={`case-responsive-img ${className}`} />
);

const CasePageTwo = () => (
  <div className="case-container">
    <div className="case-content">
      <section className="case-header">
        <h1 className="case-title">LOOPEL I WEBBPLATS</h1>
        <p className="case-subtitle">FÖRETAGSSIDA</p>
        <ResponsiveImage src={heroImage} alt="Header" className="case-header-img" />
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Bakgrund</h2>
        <p>Loren</p>

        <h3>Roll</h3>
        <p>UX-designer</p>

        <h3>Verktyg och metoder</h3>
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

        <h3>Mål</h3>
        <p>
          Överflödiga element har minimerats så att appen är funktionell och har ett logiskt
          användarflöde. Appen uppfyller WCAG-kraven. Huvudfunktionerna prioriteras
          med större ikoner, knappar och text samt färger med höga kontraster. Namnen på
          sidorna är enkla och tydliga.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Research</h2>
        <p>
          Jag har granskat andra liknande appar och konkurrenter för att analysera deras design. Jag började med att filma iPad-skärmen medan jag använde Elderapen för att studera dess vyer och struktur. Dessutom har jag tagit bilder av olika vyer i både liggande och stående läge.
        </p>
        <ResponsiveImage src="/research.jpg" alt="Research" className="case-section-img" />
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Flödesschema webben</h2>
        <p>
          Jag samlade bilder från liknande appar och konkurrenter för att hämta designinspiration. För att bättre förstå strukturen började jag med att spela in skärmen på min iPad medan jag använde Elderappen och noterade mig av ett nytt flödesschema för att analysera uppbyggnaden. Dessutom har jag tagit bilder av olika vyer, både i liggande och stående läge.
        </p>
        <ResponsiveImage src="/schema.jpg" alt="Schema" className="case-section-img" />
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Low-fi</h2>
        <p>
          Fokus ligger på appens struktur och funktion, vilket innebär att flera idéer bör testas utan att fastna i detaljer. Användarflödena är i centrum, och genom att undvika färger, typsnitt och grafik i ett tidigt skede minskar risken för att fördröja viktiga beslut.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Användare tester</h2>
        <p>
          Syftet är att se om användare förstår att de kan läsa meddelanden, hur de hanterar ljudet och höjer volymen. Fungerar menyer och rubriker, eller behöver något förtydligas?
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Resultat från användartester</h2>
        <p>
          Efter användartester har jag minskat storleken på rubrikerna, ändrat deras namn, lagt till en bakåtpil med text, samt reducerat och slagit ihop allt text på bilder och meddelanden.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Problem</h2>
        <p>
          Vilka ikoner bör användas i menyn? Bör man välja en husikon eller en hamburgermeny? Ska telefonikonen föreställa en telefon, eller skulle det vara mer passande att använda en adressbok, eftersom den tekniskt sett kan vara mer lämplig och lättare att förstå som en telefon? Dessutom, för att användarna ska förstå att de kan titta på bilderna separat, bör detta tydligare framgå än i den tidigare designen, där det inte var lika klart.
        </p>
        <ResponsiveImage src="/problems.jpg" alt="Problems" className="case-section-img" />
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Designen</h2>
        <p>
          Jag har designat så att huvudfunktionerna står i fokus, med större ikoner och texter. Varje sida har en huvudrubrik, och både texterna och ikonerna har färger som uppfyller WCAG-kraven. Radion visar tydligare vilken låt som spelas och vilken som är igång. Kanalen kan ändras, och en animation visas när den är aktiv.
        </p>
        <ResponsiveImage src="/finaldesign.jpg" alt="Designen" className="case-section-img" />
      </section>
    </div>
  </div>
);

export default CasePageTwo;
