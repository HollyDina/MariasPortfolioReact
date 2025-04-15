import React from 'react';
import heroImage from "./OmMig.png"
import { Link } from 'react-router-dom';
const ResponsiveImage = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={`case-responsive-img ${className}`} />
);

const CasePageTwo = () => (
  <div className="case-container">
    <div className="case-content">
      <div className="hero-overlay-container">
        <ResponsiveImage src={heroImage} alt="Header" className="case-header-img" />
        <div className="hero-text-case">
          <h1 className='hero-headline'>LOOPEL I WEBBPLATS</h1>
        </div>
      </div>

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
          användarflöde. Appen uppfyller WCAG-kraven...
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Research</h2>
        <p>
          Jag har granskat andra liknande appar och konkurrenter...
        </p>
        <ResponsiveImage src="/research.jpg" alt="Research" className="case-section-img" />
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Flödesschema webben</h2>
        <p>
          Jag samlade bilder från liknande appar och konkurrenter...
        </p>
        <ResponsiveImage src="/schema.jpg" alt="Schema" className="case-section-img" />
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Low-fi</h2>
        <p>
          Fokus ligger på appens struktur och funktion...
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Användare tester</h2>
        <p>
          Syftet är att se om användare förstår att de kan läsa meddelanden...
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Resultat från användartester</h2>
        <p>
          Efter användartester har jag minskat storleken på rubrikerna...
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Problem</h2>
        <p>
          Vilka ikoner bör användas i menyn? Bör man välja en husikon...
        </p>
        <ResponsiveImage src="/problems.jpg" alt="Problems" className="case-section-img" />
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Designen</h2>
        <p>
          Jag har designat så att huvudfunktionerna står i fokus...
        </p>
        <ResponsiveImage src="/finaldesign.jpg" alt="Designen" className="case-section-img" />
      </section>
    </div>
  </div>
);

export default CasePageTwo;