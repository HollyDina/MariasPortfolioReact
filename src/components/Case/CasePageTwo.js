import React from 'react';
import heroImage from "../../img/MobileCase.svg"
import Lowifsurffplata from "../../img/Low-if-surffplata.png"
import Lowfiloopeli from "../../img/Low-fi_loopeli_app.svg"
import higSurfplatta from "../../img/higSurfplatta.svg"
import ipadColor from "../../img/ipadColor.svg"
import ipadIcon from "../../img/ipadIcon.svg"
import buttonIpad from "../../img/buttonIpad.svg"
import Användaretester1 from "../../img/Användaretester1.svg"
import Användaretester2 from "../../img/Användaretester2.svg"
import Lowfi2 from "../../img/Low-fi2.svg"
import IngaSvensson from '../../img/inger.svg';

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
          <h1 className='hero-headline'>Loopelis tablet app</h1>
        </div>
      </div>

      <section className="case-section">
        <h2>Roll</h2>
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

        <h3>Team</h3>
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
        <h2 className="case-section-title">Syftet med användartesterna av den gamla designen</h2>

        <div className="image-color">

        </div>
        <p>Syftet med användartesterna är att undersöka om användarna förstår designen och kan navigera i appens gränssnitt utan problem. Vi vill säkerställa att användarna klarar av Loopelis huvudfunktioner, som att ringa samtal, läsa meddelanden, justera volymen, välja en radiokanal samt kontakta en anhörig.</p>
        <p>Vi undersöker också om menyer är tydliga och fungerar som tänkt, eller om det finns något som behöver förtydligas ytterligare.</p>
        <p>Dessutom vill vi utvärdera vilka ikoner som fungerar bäst i menyn – exempelvis om en husikon eller hamburgermeny är tydligast, samt om en telefon- eller adressboksikon mest effektivt signalerar samtalsfunktionen.</p>
      </section>

      <section className="case-section">

        <h2 className="case-section-title">Sammanställning av användartester av den gamla designen </h2>
        <p>Majoriteten klarade uppgiften, men viss tvekan kring hur höjning av ljudet fungerade. Viss förvirring initialt, men inga stora hinder.</p>

        <p>De flesta hittade bilder och texter, men vissa var osäkra på detaljer som hur man läser ett meddelande enskilt. Designproblem med otydlig klickbarhet.</p>

        <p>Detta case visade störst osäkerhet. Ringa och avsluta samtal var svårt för flera, vilket tyder på behov av ett förbättrat användargränssnitt för samtal.</p>

        <p>Flera användare lärde sig appen efter testet. Många klickade på icke-interaktiva delar och testade sig fram.</p>
        <p>Texter behöver förtydligas, likaså designen kring hur man ringer och genomför samtal. Funktionen för att höja volymen på radion bör också göras mer lättförståelig och användarvänlig</p>
        <div className="image-color">

          <ResponsiveImage src={Användaretester1} alt="Low-fi-versionen av Loopeli-app för surfplattap" className="case-section-img" />
        </div>

      </section>




      <section className="case-section">
        <h2 className="case-section-title">Personas</h2>
        <ResponsiveImage src={IngaSvensson} alt="Schema" className="case-section-img" />
      </section>







      <section className="case-section">

        <h2 className="case-section-title">Syftet med användartesta av den nya designen</h2>
        <p>Syftet med användartesterna är att ta reda på om användarna förstår den nya designen och kan navigera i appen.</p>

        <p>Vi vill se om de uppfattar hur man läser meddelanden, justerar ljudet, höjer volymen, väljer en radiokanal samt ringer ett samtal till en anhörig.</p>

        <p>Vi undersöker också om menyer och rubriker är tydliga och fungerar som tänkt, eller om något behöver förtydligas.</p>

        <p>Dessutom vill vi utvärdera vilka ikoner som fungerar bäst i menyn – exempelvis en husikon eller en hamburgermeny – samt om en telefon- eller adressboksikon tydligast signalerar samtalsfunktionen.</p>

      </section>

      <section className="case-section">

        <h2 className="case-section-title">Resultat från användartester – andra testomgången </h2>
        <p>Fler användare klarade uppgifterna jämfört med tidigare tester, även om viss förvirring kvarstod kring vilka knappar som skulle tryckas, särskilt i början.</p>
        <p>
          Alla användare hittade enkelt bilder och meddelanden, och uppgiften upplevdes som lätt.</p>
        <p>
          Alla kunde ringa och avsluta samtal utan större problem, men användare 4 visade viss osäkerhet och gick först till meddelanden och bilder istället för till samtalsfunktionen. Personen hittade rätt sen.</p>

        <div className="image-color">
          <ResponsiveImage src={Användaretester2} alt="Low-fi-versionen av Loopeli-app för surfplattap" className="case-section-img" />
        </div>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Design är ändringar</h2>
        <p>En "Ringa"-knapp har lagts till under varje kontaktbild i "Kontakter" för att tydliggöra att man kan ringa dessa personer.</p>

        <p>En tillbaka-knapp med text har också lagts till i menyn.</p>

        <p>På sidan "Meddelanden och bilder" har alla bilder nu fått texten "Läs meddelande" samt information om vem meddelandet är ifrån.</p>

        <p>En liten pil har lagts till för att göra det tydligare att objekten är klickbara.</p>

        <p>Två olika alternativ för att höja ljudvolymen har lagts till, tillsammans med knappar och ikoner för att på ett tydligt sätt visa hur volymen kan justeras.</p>

        <p>Varje sida har nu en rubrik för att göra det lättare för användaren att förstå var i appen de befinner sig.</p>

        <p>Menynamnen har ändrats till "Meddelanden och namn" för att spegla att innehållet består av både bilder och text.</p>
      </section>
      <section className="case-section">

        <h2 className="case-section-title">Low-fidelity</h2>
        <p>Jag använde mig av en low-fidelity prototyp för att snabbt kunna testa och utvärdera idéer med användare, utan att lägga tid på detaljerad design. Det gjorde det möjligt att fokusera på funktion och flöde i ett tidigt skede.</p>

        <div className="image-color">
          <ResponsiveImage src={Lowfi2} alt="Low-fi-versionen av Loopeli-app för surfplattap" className="case-section-img" />
        </div>
      </section>


      <section className="case-section">
        <h2 className="case-section-title">Färgpalett</h2>
        <div className="image-color">
          <ResponsiveImage src={ipadColor} alt="Low-fi-versionen av Loopeli-app för surfplattap" className="case-section-img" />
        </div>


        <p></p>
      </section>
      <section className="case-section"><h2 className="case-section-title">Knappar</h2>
        <div className="image-color">

          <ResponsiveImage src={buttonIpad} alt="Low-fi-versionen av Loopeli-app för surfplattap" className="case-section-img" />
        </div>


      </section>
      <section className="case-section"> <h2 className="case-section-title"> Ikoner</h2>
        <div className="image-color">

          <ResponsiveImage src={ipadIcon} alt="Low-fi-versionen av Loopeli-app för surfplattap" className="case-section-img" />
        </div>


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