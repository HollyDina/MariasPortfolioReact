import React from 'react';
import Game from '../../img/Game.png';
const ResponsiveImage = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    className={`case-responsive-img ${className}`}
    style={{ maxWidth: '400px', height: 'auto', maxHeight: '800px' }}
  />
);
const CasePageFour = () => (
  <div className="case-container">
    <div className="case-content">
      <div className="hero-overlay-container">
      <ResponsiveImage src={Game} alt="Header" className="case-header-img" />
      <ResponsiveImage src={Game} alt="Header" className="case-header-img" />
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
        <p>Att förstå hur föräldrar hanterar och undviker bråk med sina barn är en central del av projektet.</p>

        <p>Jag vill utmanas och lära mig mer om <em>Design Thinking-processen</em>, samt skaffa erfarenhet av att intervjua andra och uppnå djupare insikter som UX-designer.</p>

        <p>Det är också viktigt att förstå vad barn faktiskt gör när de använder digitala verktyg, samt deras behov av och relation till skärmtid.</p>

        <h6 className="case-section-title">Mål</h6>
        <p>Målet är att föräldrar ska slippa konflikter kring skärmtid, och att jag ska få en djupare förståelse för <em>Design Thinking-processen</em> för att utvecklas som UX-designer.</p>

        <p>Jag vill lära mig vad jag bör tänka på när jag intervjuar användare, och samla insikter om målgruppens behov, drivkrafter och mål, så att jag bättre kan möta deras behov med en klickbar prototyp.</p>

      </section>

      <section className="case-section">
        <h1 className="case-section-title">Research</h1>
        <p>Kundresekartan visar de olika faserna i kundresan, som börjar med att man upptäcker UX, vilket väcker intresse.</p>

        <p>Nästa steg är att undersöka och göra research för att hitta rätt skola, följt av ansökan och antagning innan man påbörjar utbildningen.</p>

        <p>Fasen "Går i skolan" delas upp i tre underkategorier: ”Innehåll och kurser”, ”Lärare” samt ”Kommunikation och socialt”, vilket gör det viktigt att förstå dem var för sig. Dessa faser pågår parallellt, vilket illustreras med en cirkulär pil i kartan.</p>

        <p>Nästa fas är praktik och därefter examination, vilket förhoppningsvis leder till ett jobb.</p>

        <p>I den vänstra kolumnen finns rubriker som beskriver interaktioner, mål, touchpoints (illustrerade med ikoner) samt både positiva och negativa tankar från intervjudeltagare.</p>

        <p>Jag har också skapat en känslokurva som visar vilka faser som upplevts som positiva och vilka som varit mindre bra, och avslutas med insikter och möjligheter.</p>


      </section>

      <section className="case-section">
        <h2 className="case-section-title">Insamling och analys</h2>
        <p>Efter intervjuerna samlade jag svaren i ett dokument och överförde dem till Miro på post-it-lappar.</p>

        <p>Jag numrerade intervjuerna i dokumentet och använde samma nummer på post-it-lapparna för att underlätta spårning till de ursprungliga intervjuerna.</p>

        <p>Därefter grupperade jag lapparna för att identifiera och ta bort dubbletter, och skapade tre behovskartor: två för barnen (en som visar deras intressen och en som fokuserar på deras behov) samt en behovskarta för föräldrarna.</p>

      </section>
      <section className="case-section">
        <h1 className="case-section-title">Behovskarta</h1>
        <p>I renskrivningsdokumentet överförde jag intervjusvaren till tre behovskartor: två för barnen och en för föräldrarna.</p>

        <p>För barnen skapades en karta som fokuserar på deras intressen och en annan som belyser deras behov.</p>

      </section>
      <section className="case-section">
        <h1 className="case-section-title">
      Här är några av de viktigaste behoven som överfördes till prototypen</h1>


<ul>
  <li>Barnet behöver veta vad som ska göras efter speltiden och behöver förstå varför.</li>
  <li>Barnet behöver förvarnas om att speltiden snart är slut.</li>
  <li>Barnet vill vara med och bestämma aktiviteter efter speltiden.</li>
  <li>Barnet behöver fasta regler i vardagen och kan glömma iPaden när hen är aktiv och stimulerad av andra aktiviteter.</li>
</ul>

      </section>

      <section className="case-section">
        <h2 className="case-section-title">Föräldrars beteendetyper</h2>
        <p><strong>Föräldrars beteendetyper</strong></p>

        <p>Alla föräldrar delar tre gemensamma beteenden: de hittar på fler aktiviteter, avleder med aktiviteter och försöker undvika bråk.</p>

        <p><strong>Freestyle-föräldern</strong><br></br>
          Säger till barnet att avsluta skärmtiden omedelbart och begränsar inte aktivt skärmtiden, vilket ofta leder till konflikter vid avslut. De är mer inställda på att det blir bråk när barnet ska sluta titta.</p>

        <p><strong>Planerar-föräldern</strong><br></br>
          Begränsar skärmtiden aktivt med hjälpmedel som appar eller alarmklockor som förvarnar när tiden snart är slut.</p>

        <p><strong>Rutin-föräldern</strong><br></br>
          Har fasta regler för när barnet får använda iPad, TV eller dator och förklarar varför skärmtiden måste avslutas.
          De begränsar inte aktivt skärmtiden, utan barnet följer rutiner som fungerar som delmål – till exempel att titta tills maten är klar eller borsta tänderna.
          Rutin-föräldern förvarnar när skärmtiden närmar sig sitt slut och låter barnet titta klart beroende på hur mycket som återstår av programmet eller spelet.</p>

        <p><strong>Barnets beteendetyper</strong></p>

        <p>Barnets beteendetyper skiljer sig beroende på deras intresse för iPad, TV eller dator, vilket påverkas av hur många andra aktiviteter de har.
          När barnet sysselsätter sig med annat glömmer de bort iPaden.</p>

        <p>En annan avgörande faktor är hur mycket barnet själv får bestämma.</p>

      </section>


      <section className="case-section">
        <h2 className="case-section-title">Barnets beteendetyper skiljer sig åt</h2>


        <p>Barnets beteendetyper skiljer sig åt beroende på barnets intresse för iPad, TV eller dator. Intresset påverkas i sin tur av hur många andra aktiviteter barnet har tillgång till.</p>

        <p>När barnet gör något annat glömmer det ofta bort iPaden.</p>

        <p>En annan tydlig skillnad är hur mycket barnet får bestämma själv.</p>

      </section>


      <section className="case-section">
        <h2 className="case-section-title">Barnets beteendetyper skiljer sig åt</h2>
        <p>
          Alla föräldrar delar tre gemensamma beteenden: de hittar på aktiviteter, avleder med hjälp av dem och försöker undvika bråk.
          <br /><br />
          <strong>Freestyle-föräldern :</strong>Säger till barnet att avsluta skärmtiden omedelbart utan att aktivt begränsa den, vilket ofta leder till bråk vid avslut.
          <br /><br />
          <strong>Planerar-föräldern:</strong> Begränsar skärmtiden aktivt med hjälp av appar eller alarmklockor som förvarnar när tiden snart är slut.
          <br /><br />
          <strong>Rutin-föräldern:</strong> Har fasta regler för när barnet får använda iPad, TV eller dator, och förklarar varför skärmtiden måste avslutas.
          Förvarnar barnet när skärmtiden snart är slut och låter dem titta klart beroende på hur mycket som återstår av programmet eller spelet.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Flödesdiagram</h2>
        <p>Jag valde att använda flödesdiagram eftersom jag inte visste vilka vyer som skulle ingå i prototypen.</p>

        <p>Genom att skissa och skapa två alternativa strukturer blev det tydligare vilka vyer som behövde finnas med.</p>

        <p>I det slutgiltiga flödet skulle barnet hämta biljetter, välja en aktivitet och därefter starta skärmtiden.</p>

      </section>
      <section className="case-section">
        <h2 className="case-section-title">Programidéer</h2>
        <p>Utifrån datainsamlingen formulerade jag två programidéer.</p>

        <p>Den första idén gick ut på att barnet skulle välja en aktivitet för att starta sin skärmtid.</p>

        <p>Den andra idén innebar att barnet varje vecka skulle få fyra spelbiljetter, värda 30 minuter vardera, som kunde användas under veckans gång. Föräldrarna skulle bestämma när biljetterna fick användas.</p>

        <p>Detta ledde till att jag slog ihop de båda idéerna till ett gemensamt koncept.</p>

      </section>


      <section className="case-section">
        <h2 className="case-section-title">Användartester</h2>

        <p>Jag började med low-fi-skisser och gick sedan vidare till hi-fi-prototyper för att testa barns reaktioner på färger och rörelse.</p>

        <p>Eftersom det är svårt för barn att föreställa sig hur appar fungerar genom pappersskisser under användartester, valde jag att justera prototypen i realtid.</p>

        <p>Under testerna upptäckte jag att flera barn aldrig hade använt en dator tidigare, vilket gjorde dem osäkra och hämmade deras upplevelse.</p>

        <p>På grund av tekniska problem kunde jag inte genomföra fler tester.</p>

        <p>Totalt genomfördes 5 användartester med barn (3–9 år) och 8 med vuxna, eftersom föräldrarna generellt var mer datorvana.</p>

      </section>
      
            <section className="case-section"><div className="image-color">
          
            </div>
              <h2 className="case-section-title">     Color palett</h2>
      
              <p></p>
            </section>
            <section className="case-section"><div className="image-color">
          
          </div>
            <h2 className="case-section-title"> Iconer</h2>
      
            <p></p>
          </section>
          <section className="case-section"><div className="image-color">
          
          </div>
            <h2 className="case-section-title">Typsnitt</h2>
      
            <p></p>
          </section>

      <section className="case-section">
        <h2 className="case-section-title">Slutresultat</h2>
        <p>Jag har genomfört det jag planerade och är nöjd med både resultatet och mitt arbete.</p>

        <p>Jag hann endast skapa hi-fi-prototyper för desktop, inte för mobil, på grund av tidsbrist.</p>

        <p>Eftersom appen saknade ljud, ersatte jag detta med texter och pratbubblor för att ändå förmedla innehållet.</p>

        <p>Jag är inte helt nöjd med menyn, eftersom användarna hade svårt att navigera i den.</p>

        <p>Nästa steg är att förbättra menyn och designa de sista vyerna.</p>

        <p>Projektet har varit tidskrävande, och i efterhand inser jag att ett mindre projekt hade varit lättare att hantera ensam.</p>

      </section>
    </div>
  </div>
);

export default CasePageFour;
