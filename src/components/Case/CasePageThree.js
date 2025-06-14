import React from 'react';
import heroImage from "../../img/chas-academy-emblem.png"

import Affärsnyttakommunikation1 from "../../img/Affärsnytta och kommunikation.jpg"
import kundresahela2 from "../../img/krh.jpg"
import kundresa3 from "../../img/kundresa2.jpg"
import första4 from "../../img/första.jpg"
import Praktiskutbild from "../../img/Praktisk utbildning.bb5ae9b47f1b0780581a.jpg"
import kravux from "../../img/krav och ux.jpg"
import Branschnara from "../../img/Branschnara.jpg"

const ResponsiveHero = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    className={`case-responsive-img ${className}`}
    style={{ maxWidth: '350px', height: 'auto', maxHeight: '350px' }}
  />
);

const ResponsiveImage = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    className={`case-responsive-img ${className}`}
    style={{ maxWidth: '350', height: 'auto', maxHeight: '350px' }}
  />
);
const CasePageThree = () => (



  <div className="case-container">
    <div className="case-content">
      <div className="hero-overlay-container">
        <div className="hero-image-box">
          <ResponsiveHero src={heroImage} alt="Header" className="case-header-img-three" />
          <ResponsiveHero src={heroImage} alt="Header" className="case-header-img-four" />
        </div>
        <div className="hero-text-case">
          <h1 className='hero-headline'>Uppdrag av</h1>
          <p className='hero-p'>Chas academy</p>
        </div>
      </div>

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

        <h3 className="case-section-title">Roll</h3>
        <ul>
          <li>Service designer</li>
          <li>Research</li>
        </ul>

        <h3 className="case-section-title">Verktyg & Metoder</h3>
        <ul>
          <li>Figma</li>
          <li>Intervjuer med camera</li>
          <li>Jobs to be done</li>
          <li>Kundresekarta</li>
        </ul>

        <h3 className="case-section-title">Team</h3>
        <ul>
          <li>Utvecklare</li>
          <li>Produktägare</li>
        </ul>
      </section>
      <section className="case-section">
        <h2 className="case-section-title">Syftet</h2>

        <p>
          Syftet med denna analys är att identifiera och förbättra kundresan för studenter inom UX-design på CHAS Academy. Målet är att öka studenternas tillfredsställelse och samtidigt stärka akademins affärsutveckling.
        </p>
        <p>Det innebär att identifiera utbildningens nuvarande styrkor och svagheter, för att utforska hur kvaliteten kan förbättras och hur utbildningen kan göras mer attraktiv för potentiella studenter. Samtidigt blir CHAS Academy mer konkurrenskraftig i jämförelse med liknande utbildningar.</p>
        <p>Genom att beakta studenternas behov och förväntningar kan CHAS Academy anpassa sin utbildning så att studenterna blir mer anställningsbara och att det skapas en starkare koppling mellan utbildningens innehåll och arbetsmarknadens krav.</p>
      </section>
      <section className="case-section">
        <h2 className="case-section-title">Mål</h2>
        <p>
          Förbättra de områden som har störst påverkan på kundnöjdhet och affärsmål.
          Öka marknadsandelen inom UX-utbildningar.
          Förbättra kundupplevelsen och affärsmodellen.
          Stärka CHAS Academys varumärke för att attrahera fler studenter.
          Öka antalet sökande till utbildningen.
          Expandera inom UX-området och öka antalet elever med 30 % inom 1–3 år.
          Höja kvaliteten på utbildningen.
          Skapa en mer attraktiv utbildningsupplevelse som effektivt tillgodoser studenternas behov och förväntningar.

        </p>
      </section>

      <section className="case-section">
        
          <ResponsiveImage src={Affärsnyttakommunikation1} alt="Header" className="case-header-img" />
       
        <h2 className="case-section-title">Research & analys</h2>


        <p>
          Efter intervjuerna analyserade jag svaren för att hitta samband. Studenterna uttryckte främst en önskan att lära sig UX-design och att utveckla kompetens inom kravställning.        </p>
        <p>
          Deras bakgrund och kontext vid studiestart varierade, vilket innebär att mer data behövs för att identifiera tydliga samband.
        </p>
        <p>
          Jag har prioriterat och färgkodat resultaten. Målet "Bli antagen" visade sig vara högt prioriterat, och detta har fungerat bra tack vare möjligheten till sen ansökan.
        </p>
        <p>
          Ett mål som CHAS i dagsläget inte lever upp till är "Bli trygg i att bygga prototyper", eftersom studenterna upplever varierande resultat.
        </p>
        <p>
          De grå lapparna markerar mål där ytterligare data krävs för att kunna bedöma CHAS prestation.
        </p>
        <p>
          Jag har även identifierat utmaningar som studenterna möter, samt områden som upplevs som problematiska.

        </p>
      </section>

      <section className="case-section">
        
          <ResponsiveImage src={kundresahela2} alt="Header" className="case-header-img" />

        
        <h2 className="case-section-title">Kundresekartan</h2>

        <p>
          Kundresekartan visar de olika faserna i kundresan, som börjar med att man upptäcker UX och finner det intressant.
          Nästa steg är att undersöka och göra research för att hitta rätt skola, följt av ansökan och antagning innan man påbörjar utbildningen.</p>
        <p>
          Fasen "Går i skolan" delas upp i tre underkategorier: "Innehåll och kurser", "Lärare" samt "Kommunikation och socialt", vilket är viktigt att förstå separat. Dessa faser pågår parallellt, vilket illustreras med en cirkulär pil.

          Nästa fas är praktik, och därefter examination – vilket förhoppningsvis leder till ett jobb.
        </p>
        <p>
          I den vänstra kolumnen finns rubriker som beskriver interaktioner, mål, touchpoints (illustrerade med ikoner) samt positiva och negativa tankar från intervjudeltagare.
          Jag har också skapat en känslokurva som visar vilka faser som upplevts som positiva och vilka som varit mindre bra, och avslutas med insikter och möjligheter.
        </p>
      </section>


      <section className="case-section">
        
          <ResponsiveImage src={kundresa3} alt="Header" className="case-header-img" />
      
        <h2 className="case-section-title">Pain points & Moments of truth</h2>


        <p>Studentupplevelser innefattar olika *“pain points”* och *“moments of truth”* under kundresan. Citat från eleverna visar hur de känner:</p>

        <p>I undersökningsfasen uttryckte många att de gillade blandningen av UX och krav, samt att skolan grundades av Chas Visual Management.</p>

        <p>Eleverna tyckte att CHAS kändes modernt med en personlig touch, och valde YH på grund av den praktiska lärandeformen:
          “Jag vill gå en praktisk utbildning så jag kan lära mig på riktigt.”</p>

        <p>Tidigt i resan hade studenterna högre förväntningar på skolans struktur. Ordet *“rörigt”* nämndes ofta i flera faser, vilket de gula stjärnorna i kartläggningen illustrerar.</p>

        <p>I fasen *"Börja skolan"* upplevde många att personalen inte var helt förberedd.</p>

        <p>Under *"Innehåll och kurser"*-fasen upplevde vissa studenter att förväntningarna inte uppfylldes. Citat som:
          “För mycket fokus på kravhantering” och
          “Jag vill lära mig Figma/UI bättre än skolan erbjuder”
          visar på detta. Andra klagade även på otydliga uppgifter och bristande återkoppling från skolans personal.</p>

        <p>I praktikfasen noterade studenterna att skolan saknade ett branschnära nätverk för praktikplatser:
          “Varför använder inte skolan sitt nätverk för att hjälpa oss?”
          De kände också att det saknades struktur, och upplevde stress över att LIA-kursen startade mitt under en större inlämning.</p>

        <p>Slutligen upplevdes examensfasen som rörig:
          “Det stressar mig att det inte är tydligt vad som ska lämnas in”
          och
          “Jag förstår inte vad som förväntas av mig.”</p>

      </section>

      <section className="case-section">
        
          <ResponsiveImage src={första4} alt="Header" className="case-header-img" />
      
        <h2 className="case-section-title">
          Chas Academy nuvarande
          affärsmodell på UX-området</h2>


        <p>Här är min uppfattning av CHAS Academys nuvarande affärsmodell på UX-området. Den har en tydlig struktur, men den innehåller vissa brister.</p>
        <p>Här presenteras förbättringsmöjligheter samt var i affärsmodellen de kan ha störst inverkan.</p>

      </section>

      <section className="case-section">
        
          <ResponsiveImage src={kravux} alt="Header" className="case-header-img" />
 
        <h2 className="case-section-title">Blandningen av UX-design och krav</h2>

        <p>Det har förekommit missförstånd kring fördelningen mellan UX-design och kravhantering.</p>

        <p>För att minska förväntningsgapet föreslår vi att utbildningens namn förtydligas, till exempel genom att kalla den <em>“UX-designer och Kravhanterare”</em>. Detta kan hjälpa till att påverka studenternas förväntningar och mål (<em>Jobs to be Done</em>).</p>

        <p>Studenterna hade otydliga förväntningar på hur mycket fokus som skulle ligga på respektive del. Ett alternativ är att se över kursplanen och omfördela innehållet för att bättre balansera UX-design och kravhantering, och därigenom justera utbildningens värdeerbjudande.</p>

        <p>Sammanfattningsvis föreslås en tydligare fördelning mellan UX-design och kravhantering – antingen genom justering av utbildningsnamnet eller genom en revidering av kursplanen – för att bättre möta studenternas <em>Jobs to be Done</em>.</p>

      </section>
      <section className="case-section">
        
          <ResponsiveImage src={Branschnara} alt="Header" className="case-header-img" />
     
        <h2 className="case-section-title">Branschnära</h2>

        <p>Trots att CHAS Academy har grundats av ett branschbolag, utnyttjas dess potential inte fullt ut.</p>

        <p>En möjlighet är att bättre använda de kontakter som finns genom CHAS Visual Management och ledningsgruppen. Studenterna kan till exempel arbeta med verkliga case från CHAS Visual Management, vilket stärker deras erfarenhet och portfölj inför framtiden.</p>

        <p>CHAS Visual Management kan även erbjuda praktikplatser och eventuellt anställningar efter avslutad utbildning.</p>

        <p>CHAS Visual Management och deras kunder kan dessutom fungera som en kanal för att marknadsföra skolan via sina hemsidor.</p>

      </section>
      <section className="case-section">
        
          <ResponsiveImage src={Praktiskutbild} alt="Header" className="case-header-img" />
     
        <h2 className="case-section-title">Praktisk utbildning</h2>

        <p>Många studenter förväntade sig en mer praktisk utbildning än vad som faktiskt erbjöds.</p>

        <p>För att bättre uppfylla värdeerbjudandet om praktisk utbildning föreslås att en övningsbank skapas för studenterna.</p>

        <p>Samarbeten med utvecklarna i klassen kan ge värdefull erfarenhet av teamarbete, och regelbundna Figma-lektioner kan bidra till ökad praktisk färdighet.</p>

        <p>Utökat samarbete med externa partners kan dessutom möjliggöra lärorika och verklighetsanknutna övningar och föreläsningar, som hjälper studenterna att förstå hur metoder och teorier tillämpas i praktiken.</p>

      </section>
      <section className="case-section">
        <h2 className="case-section-title">Förbättringsområden</h2>
        <p>Det sista förbättringsområdet rör scenariot där studenterna misslyckas med det arbete de inte har lyckats genomföra. Detta kan bero på att de upplever en ostrukturerad miljö på skolan.</p>

        <p>För att bättre uppfylla studenternas mål att lära sig UX bör lektionerna vara tydligt strukturerade.</p>

        <p>Externa lärare kan genomgå en onboarding-process för att minska missförstånd och tekniska problem.</p>

        <p>Att skapa en portfolio är en viktig del av UX-lärandet, och det föreslås att införa <em>portfolio-dagar</em> efter större inlämningar för att underlätta processen inför LIA och jobbsökande.</p>

        <p>För att förbättra relationen med studenterna bör återkoppling och proaktivt arbete prioriteras.</p>

        <p>En investering i personal och lärare kan säkerställa tydlighet i uppgifter innan de delas ut, samt stärka den pedagogiska kvaliteten i undervisningen.</p>

        <p>Utöver dessa fyra områden kan sociala medier användas för riktad marknadsföring. Möjligheten till en ettårig utbildning eller enstaka kurser kan också övervägas. Tidigare studenter kan uppmuntras att lämna omdömen online.</p>

        <p>Rektorn bör även be om regelbundna personalutvärderingar för att främja ärlig feedback.</p>

        <p>Slutligen kan förväntningar på studenternas beteende under lektioner, såsom att använda kameran och ställa frågor, klargöras i början av utbildningen.</p>

      </section>

    </div>
  </div>
);

export default CasePageThree;