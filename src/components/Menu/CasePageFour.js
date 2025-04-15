import React from 'react';
import heroImage from "./Game.png"
const ResponsiveImage = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    className={`case-responsive-img ${className}`}
    style={{  maxWidth: '400px', height: 'auto', maxHeight: '800px' }}
  />
);
const CasePageFour = () => (
  <div className="case-container">
    <div className="case-content">
      <div className="hero-overlay-container">
        <ResponsiveImage src={heroImage} alt="Header" className="case-header-img" />
        <ResponsiveImage src={heroImage} alt="Header" className="case-header-img" />
        <div className="hero-text-case">
          <h1 className='hero-headline'>Examensarbete</h1>
          <p className='hero-p'>Chas Academy</p>
        </div>
      </div>

      <section className="case-section">
        <h1 className="case-section-title">Bakgrund</h1>
        <p>
          Många läkare och hälsoinstitut rekommenderar att barn under sju år använder digitala enheter högst en timme per dag.
          Det är ofta svårt att få barnen att slita sig från skärmen, vilket kan leda till konflikter eftersom de vill ha mer av det roliga.
          Samtidigt finns mycket lärorikt innehåll på surfplattan och telefonen, och barn kan hamna utanför sociala sammanhang om de inte får skärmtid.
          Det pågår en ständig debatt om hur mycket skärmtid barn bör ha. Jag ville starta ett projekt för att bli mer säker på Design Thinking-processen,
          inspirerad av en väns svårigheter att få sina barn att slita sig från skärmen.
        </p>

        <h2>Roll</h2>
        <ul>
          <li>UX-designer</li>
        </ul>

        <h3>Verktyg & Metoder</h3>
        <ul>
          <li>Miro</li>
          <li>Kvalitativa intervjuer</li>
          <li>Behovskarta</li>
          <li>Affinity Diagramming</li>
        </ul>

        <h4>Team</h4>
        <ul>
          <li>Utvecklare</li>
          <li>Produktägare</li>
        </ul>

       <h5 className="case-section-title">Syfte</h5>
        <p>
          Att förstå hur föräldrar hanterar och undviker bråk med sina barn är centralt för projektet.
          Jag ville utmanas och lära mig mer om Design Thinking-processen samt få erfarenhet av att intervjua andra
          och få djupare insikter som UX-designer. Det är också viktigt att förstå vad barn gör när de sitter framför digitala verktyg
          och deras behov av skärmtid.
        </p> 
        <h6 className="case-section-title">Mål</h6>
        <p>
          Målet är att föräldrar ska slippa bråka om skärmtiden och att jag ska få en djupare förståelse för Design Thinking-processen
          för att bli en bättre UX-designer. Jag vill lära mig vad jag bör tänka på när jag intervjuar användare
          för att samla nya insikter om målgruppens behov och mål, vilket ska leda till att jag kan möta deras behov med en klickbar prototyp.
        </p>
      </section>

      <section className="case-section">
        <h1 className="case-section-title">Research</h1>
        <p>
          Jag fick tips från en UX-designer som arbetat med Bolibompa-appen om att arbeta med barn.
          Jag läste artiklar om skärmtid och forskning om att barn kommunicerar bättre med bilder.
          Sedan skrev jag syftet med intervjuerna och vad jag ville uppnå. Jag valde semi-strukturerade kvalitativa intervjuer
          för att kunna ställa följdfrågor och få djupare insikter. Jag intervjuade föräldrar och barn i en lekpark och på en fotbollscup,
          där jag bad om föräldrarnas tillåtelse att intervjua barnen. Jag informerade om deras rättigheter och att de skulle vara anonyma,
          så inga personuppgifter behövdes. Jag använde bilder under intervjuerna, men i lekparken blev det stökigt,
          så jag visade bilderna medan vi pratade. Under intervjuprocessen justerade jag frågorna vid behov och renskrev intervjuerna i dokument
          för att ha allt färskt i minnet.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Insamling och analys</h2>
        <p>
          Efter intervjuerna samlade jag svaren i ett dokument och överförde dem till Miro på post-it-lappar.
          Jag numrerade intervjuerna i dokumentet och grupperade dem med samma siffra på post-it-lapparna för att underlätta spårning till de ursprungliga intervjuerna.
          Jag grupperade sedan lapparna för att ta bort dubbletter och skapade tre behovskartor: två för barnen (en om deras intressen och en om deras behov)
          och en för föräldrarna.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Föräldrars beteendetyper</h2>
        <p>
        Alla föräldrar delar tre gemensamma beteenden: de hittar på aktiviteter, avleder med hjälp av dem och försöker undvika bråk.
          <br/><br/>
          <strong>Freestyle-föräldern :</strong>Säger till barnet att avsluta skärmtiden omedelbart utan att aktivt begränsa den, vilket ofta leder till bråk vid avslut.
          <br/><br/>
          <strong>Planerar-föräldern:</strong> Begränsar skärmtiden aktivt med hjälp av appar eller alarmklockor som förvarnar när tiden snart är slut.
          <br/><br/>
          <strong>Rutin-föräldern:</strong> Har fasta regler för när barnet får använda iPad, TV eller dator, och förklarar varför skärmtiden måste avslutas.
          Förvarnar barnet när skärmtiden snart är slut och låter dem titta klart beroende på hur mycket som återstår av programmet eller spelet.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Barnets beteendetyper skiljer sig åt</h2>
        <p>
        Alla föräldrar delar tre gemensamma beteenden: de hittar på aktiviteter, avleder med hjälp av dem och försöker undvika bråk.
          <br/><br/>
          <strong>Freestyle-föräldern :</strong>Säger till barnet att avsluta skärmtiden omedelbart utan att aktivt begränsa den, vilket ofta leder till bråk vid avslut.
          <br/><br/>
          <strong>Planerar-föräldern:</strong> Begränsar skärmtiden aktivt med hjälp av appar eller alarmklockor som förvarnar när tiden snart är slut.
          <br/><br/>
          <strong>Rutin-föräldern:</strong> Har fasta regler för när barnet får använda iPad, TV eller dator, och förklarar varför skärmtiden måste avslutas.
          Förvarnar barnet när skärmtiden snart är slut och låter dem titta klart beroende på hur mycket som återstår av programmet eller spelet.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Flödesdiagram & Programidéer</h2>
        <p>
          Jag valde att använda flödesdiagram för att få klarhet i vilka vyer som krävdes i prototypen.
          Genom att skissa olika förslag blev det tydligare. Slutflödet innebar att barnet skulle hämta biljetter,
          välja en aktivitet och sedan starta skärmtiden. 
        </p>
        <p>
          Från datainsamlingen kom jag fram till två programidéer:
          <ol>
            <li>Barnet väljer en aktivitet för att starta skärmtiden.</li>
            <li>Varje vecka får barnet fyra spelbiljetter på 30 minuter. Föräldrarna bestämmer när dessa används.</li>
          </ol>
          Jag valde att kombinera dessa två idéer.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Användartester</h2>
        <p>
          Jag började med low-fi-skisser och gick vidare till hi-fi-prototyper för att testa barns reaktioner på färger och rörelser.
          Det var svårt för barn att föreställa sig appar på papper under användartester, så jag justerade prototypen i realtid.
          Under testerna upptäckte jag att flera barn aldrig använt en dator, vilket gjorde testerna utmanande för dem.
          På grund av tekniska problem kunde jag inte genomföra fler tester. Totalt genomfördes fem tester med barn (3–9 år) och åtta med vuxna.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Slutresultat</h2>
        <p>
          Jag har genomfört det jag planerat och är nöjd med resultatet. Det finns endast hi-fi-prototyper för desktop,
          eftersom tiden inte räckte till att skapa en mobilversion. Ljud saknades, så jag ersatte det med texter och pratbubblor.
          Jag är inte helt nöjd med menyn då användarna hade svårt att navigera. Nästa steg blir att förbättra menyn och designa de sista vyerna.
          Projektet har tagit tid, och i efterhand hade ett mindre projekt varit lättare att hantera på egen hand.
        </p>
      </section>
    </div>
  </div>
);

export default CasePageFour;
