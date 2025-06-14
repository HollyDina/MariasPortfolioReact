import React from 'react';
import heroImage from "../../img/MobileCase.svg"
import Lowifsurffplata from "../../img/Low-if-surffplata.png"
import Lowfiloopeli from "../../img/Low-fi_loopeli_app.svg"
import higSurfplatta from "../../img/higSurfplatta.svg"
import ipadColor from "../../img/ipadColor.svg"
import ipadIcon from "../../img/ipadIcon.svg"
import buttonIpad from "../../img/buttonIpad.svg"
import Användaretester1 from "../../img/Användaretester1.svg";
import Användaretester2 from "../../img/Användaretester2.svg";
import Lowfil2 from "../../img/Lowfil2.svg";
import IngaSvensson from '../../img/inger.svg';
import Empatikarta from '../../img/empatikarta.svg';
import Behovskarta from '../../img/Behovskarta.svg';
import BertilNilsson from '../../img/BertilNilsson.svg';
import LinaKarlsson from '../../img/LinaKarlsson.svg';
import Text_style from '../../img/Text_style.svg';



const ResponsiveImage = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    className={`case-responsive-img ${className}`}
    style={{ maxWidth: '100%', height: 'auto', maxHeight: '700px' }}
  />
);
const ResponsiveImage2 = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    className={`case-responsive-img ${className}`}
    style={{ maxWidth: '100%', height: 'auto', maxHeight: '1218px' }}
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
        <h2 className="case-section-title">Roll</h2>
        <p>UX-designer</p>

        <h4 className="case-section-title">Verktyg och metoder</h4>
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

        <h3 className="case-section-title">Team</h3>
        <ul>
          <li>Utvecklare</li>
          <li>Produktägare</li>
        </ul>
      </section>
      <section className="case-section">
        <h2 className="case-section-title">Mål</h2>

        <p>För att göra appen mer användarvänlig har överflödiga element minimerats, vilket bidrar till en funktionell design med ett logiskt användarflöde.</p>


        <p>Appen uppfyller även WCAG-kraven för tillgänglighet.</p>

        <p>Huvudfunktionerna prioriteras genom större ikoner, knappar och texter, samt färger med hög kontrast.</p>

        <p>Sidornas namn är enkla och tydliga för att underlätta navigering.</p>

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
        <h2 className="case-section-title">Syftet med användartester och intervjuer </h2>
        <p>Syftet med att genomföra användartester och intervjuer är att identifiera brister i design och funktionalitet samt förstå hur användare interagerar med appen.

Testerna visade att vissa funktioner, såsom att ringa samtal eller höja volymen, upplevdes som otydliga. Det fanns också osäkerhet kring hur man läser meddelanden och vad som är klickbart. Dessa insikter pekar på behovet av tydligare texter och ett mer användarvänligt gränssnitt. Genom testerna framkom även att flera användare lärde sig appen genom att prova sig fram, vilket ytterligare understryker vikten av en intuitiv design.
          </p>
      
          <ResponsiveImage src={Behovskarta} alt="Schema" className="case-section-img" />
      
      </section>
  
          <section className="case-section">

            <h2 className="case-section-title">Sammanställning av användartester av den gamla designen </h2>
            <p>Majoriteten klarade uppgiften, men viss tvekan kring hur höjning av ljudet fungerade. Viss förvirring initialt, men inga stora hinder.</p>

            <p>De flesta hittade bilder och texter, men vissa var osäkra på detaljer som hur man läser ett meddelande enskilt. Designproblem med otydlig klickbarhet.</p>

            <p>Detta case visade störst osäkerhet. Ringa och avsluta samtal var svårt för flera, vilket tyder på behov av ett förbättrat användargränssnitt för samtal.</p>

            <p>Flera användare lärde sig appen efter testet. Många klickade på icke-interaktiva delar och testade sig fram.</p>
            <p>Texter behöver förtydligas, likaså designen kring hur man ringer och genomför samtal. Funktionen för att höja volymen på radion bör också göras mer lättförståelig och användarvänlig</p>
           

              <ResponsiveImage src={Användaretester1} alt="Low-fi-versionen av Loopeli-app för surfplattap" className="case-section-img" />
            
          </section>

          

      <section className="case-section">
        <h2 className="case-section-title">Behovskarta</h2>
        <p>Jag valde att genomföra djupintervjuer och användartester för att bättre förstå användarna och deras behov. Därefter sammanställde jag insikterna i en behovskarta.</p>
       
          <ResponsiveImage src={Behovskarta} alt="Schema" className="case-section-img" />
       
      </section>



          <section className="case-section">
            <h2 className="case-section-title">Empatikarta</h2>
            <p>Jag valde att skapa en empatikarta för att få en djupare förståelse för användarens tankar, känslor, behov och utmaningar. Genom att visualisera dessa insikter kunde jag lättare identifiera vad som är viktigt för användaren och anpassa lösningen utifrån det.</p>

           
              <ResponsiveImage src={Empatikarta} alt="Schema" className="case-section-img" />
        
          </section>



          <section className="case-section">
            <h2 className="case-section-title">Personas</h2>
           
            <ResponsiveImage src={BertilNilsson} alt="Schema" className="case-section-img" />
    
           
            <ResponsiveImage src={LinaKarlsson} alt="Schema" className="case-section-img" />
      
           
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

           
              <ResponsiveImage src={Användaretester2} alt="Low-fi-versionen av Loopeli-app för surfplattap" className="case-section-img" />
         
          </section>

          <section className="case-section">
  <h2 className="case-section-title">
    Low-fidelity används för att testa och ändra designen tidigt i processen
  </h2>

  <p>
    Jag använde mig av en low-fidelity prototyp för att snabbt kunna testa och utvärdera idéer med användare, utan att lägga tid på detaljerad design. Det gjorde det möjligt att fokusera på funktion och flöde i ett tidigt skede.
  </p>

  <h3 className="list-title">Förbättringar som gjorts:</h3>

  <div className="two-column-list">
  <ul class="spacious-list">
  <li><span class="bold-number">1 .</span> Menynamn har ändrats till "Meddelanden och namn".</li>
  <li><span class="bold-number">2 .</span> Lägg till en rubrik under ikonen så att användaren förstår vad knappen gör. Använd ett kryss för att stänga menyn, eftersom det är standard i de flesta menyer.</li>
  <li><span class="bold-number">3 .</span> Ring-knappen ska vara större än de andra eftersom det är huvudfunktionen</li>
  <li><span class="bold-number">4 .</span> Har lagt till en animation som visar vilken kanal som är aktiv.</li>
  <li><span class="bold-number">5 .</span> Eftersom användare försökte höja volymen på olika sätt har två alternativ lagts till – med knappar och ikoner – för att göra det enklare att justera musiken</li>
<li><span class="bold-number">6 .</span> Lägg till en hamburgarikonen, eftersom det är standard och något användare känner igen.</li>
  <li><span class="bold-number">7 .</span> En tillbaka-knapp med text har lagts till i menyn för att underlätta navigationen, eftersom användare tidigare instinktivt blickade upp mot det övre hörnet för att hitta en tillbaka-knapp.</li>
 
</ul>

<ul class="spacious-list">
   <li><span class="bold-number">8 .</span> Den första kontaktens bild och namn visas tillsammans med texten. En 'Ring'-knapp har lagts till under varje kontaktbild i vyn 'Kontakter'.</li>
  <li><span class="bold-number">9 .</span> Knappen har ändrats för att bättre matcha resten av appens design. En visuell stil som liknar andra vyer har lagts till för att öka igenkänningen, och text har lagts till bredvid ikonen för tydlighet.</li>
  <li><span class="bold-number">10 .</span> Knappen har ändrats för att bättre matcha resten av appens design. En visuell stil som liknar andra vyer har lagts till för att öka igenkänningen, och text har lagts till bredvid ikonen för tydlighet.</li>
  <li><span class="bold-number">11 .</span> Varje sida har nu en rubrik för att göra det lättare för användare att se var de är.</li>
  <li><span class="bold-number">12 .</span> I vyn 'Meddelanden och bilder' har alla meddelandebilder försetts med texten 'Läs meddelande' för att tydliggöra att de är klickbara. Detta har lagts till eftersom det tidigare inte framgick att man kunde läsa meddelandena, vilket skapade förvirring för användare.</li>
  <li><span class="bold-number">12 .</span> I meddelandevyn har en liten pil lagts till vid alla meddelanden för att tydliggöra att objekten är klickbara.</li>
<li><span class="bold-number">13 .</span> Texten i meddelandet har förstorats, och det är nu tydligt vem meddelandet kommer från</li>
  
</ul> </div>

  <ResponsiveImage2
    src={Lowfil2}
    alt="Low-fi-versionen av Loopeli-app för surfplatta"
    className="case-section-img2"
  />
</section>


      


          <section className="case-section">
            <h2 className="case-section-title">Färgpalett</h2>
           
              <ResponsiveImage src={ipadColor} alt="Low-fi-versionen av Loopeli-app för surfplattap" className="case-section-img" />
        
          </section>
                <section className="case-section">
            <h2 className="case-section-title">Textstil</h2>
           
              <ResponsiveImage src={Text_style} alt="Low-fi-versionen av Loopeli-app för surfplattap" className="case-section-img" />
        
          </section>
          <section className="case-section">
            <h2 className="case-section-title">Knappar</h2>
           
              <ResponsiveImage src={buttonIpad} alt="Low-fi-versionen av Loopeli-app för surfplattap" className="case-section-img" />
        
          </section>

          <section className="case-section">
            <h2 className="case-section-title"> Ikoner</h2>
           
              <ResponsiveImage src={ipadIcon} alt="Low-fi-versionen av Loopeli-app för surfplattap" className="case-section-img" />
         
          </section>
          <section className="case-section">
            <h2 className="case-section-title">Design som stöttar användaren</h2>
            <p>Kontakter visas nu som rektanglar med namn och för tydligare läsbarhet. Vit bakgrund är en del av den nya design</p>

  <p>Färgerna på både text och ikoner har valts för att uppfylla WCAG:s riktlinjer.</p>

          
            <ResponsiveImage src={higSurfplatta} alt="Designen" className="case-section-img" />
          
          </section>
        </div>
    </div>
    );

    export default CasePageTwo;