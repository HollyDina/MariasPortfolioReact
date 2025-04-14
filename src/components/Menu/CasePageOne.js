import React from 'react';

const ResponsiveImage = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={`case-responsive-img ${className}`} />
);

const CasePageOne = () => (
  <div className="case-container">
    <div className="case-content">

      <section className="case-section">
        <h2 className="case-section-title">Uppdrag av Chas academy</h2>
        <p>
          I slutet av programmet fick vi i uppgift att utvärdera studenternas upplevelse
          av kursen genom att kartlägga resan och identifiera möjliga förbättringsområden.
          CHAS academy är en del av IT-konsultbolaget CHAS och erbjuder utbildningar inom
          tech med fokus på Front End. Företaget har starka kopplingar till arbetsmarknaden
          och utlovar praktik som leder till jobb. Tillsammans med en kurskollega gjorde jag
          en omfattande användarundersökning där vi intervjuade studenter för att förstå
          utbildningens svagheter och styrkor samt föreslå konkreta förbättringsåtgärder,
          för att höja kurskvaliteten.
        </p>

        <h3>Roll</h3>
        <ul>
          <li>Service designer</li>
          <li>Research</li>
        </ul>

        <h3>Verktyg & Metoder</h3>
        <ul>
          <li>Figma</li>
          <li>Intervjuer med camera</li>
          <li>Jobs to be done</li>
          <li>Kundresekarta</li>
        </ul>

        <h3>Team</h3>
        <ul>
          <li>Utvecklare</li>
          <li>Produktägare</li>
        </ul>

        <h3>Syftet</h3>
        <p>
          Syftet med denna analys är att identifiera och förbättra kundresan för
          studenterna i utbildningen på CHAS Academy med målet att öka kundupplevelsen
          och effektiviteten i deras studier. Analysen ämnar också ge tydliga riktlinjer
          för hur skolan kan förbättra utbildningen utifrån insikter från elever för att
          bättre matcha arbetsmarknadens och elevernas behov. Genom intervjuer, research
          och identifiering av "Jobs to be done" samt framtagning av en kundresekarta,
          identifieras smärtpunkter, styrkor och kritiska tillfällen ("moments of truth").
          Resultaten används sedan för att skapa konkreta åtgärder och förbättringsförslag
          som direkt bidrar till en bättre utbildningsupplevelse och i längden kan påverka
          skolans erbjudande och konkurrenskraft. Syftet är att skapa en relevant och
          effektiv utbildning i samklang med arbetsmarknadens behov.
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
        <h2 className="case-section-title">Research & analys</h2>
        <p>
          Vi började med att intervjua elever för att förstå behovet. Studenterna delade
          deras erfarenheter kring olika situationer och berättade om deras upplevelse.
          Gradvis blev det tydligare vilka delar av utbildningen som fungerar bra och
          mindre bra, vilket gav oss möjlighet att analysera och kartlägga utbildningens
          styrkor och svagheter. Utifrån dessa insikter började vi identifiera återkommande
          mönster och områden där elever kände sig frustrerade eller otillfredsställda.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Kundresekartan</h2>
        <p>
          Kundresekartan visar alla relevanta touchpoints, som belyser vad som är extra
          positivt och vad som behöver förbättras. Den kartlägger studenternas
          helhetsupplevelse och fångar upp specifika situationer där utbildningen
          inte möter elevernas förväntningar. Genom kartan visualiseras hur elever
          interagerar med kursinnehåll, administration, och hur väl utbildningen
          uppfyller deras behov över tid.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Förbättringsområden</h2>
        <p>
          Det sista skedet i analysen omfattade att skapa konkreta förbättringsåtgärder.
          Vi föreslog förändringar som var realistiska att genomföra och som direkt
          adresserade identifierade problemområden. Detta innefattade allt från
          kommunikation, kursinnehåll och support, till övergripande pedagogiska
          strategier. Målet var att säkerställa en högre kvalitet på utbildningen
          och öka elevernas övergripande nöjdhet.
        </p>
      </section>

    </div>
  </div>
);

export default CasePageOne;
