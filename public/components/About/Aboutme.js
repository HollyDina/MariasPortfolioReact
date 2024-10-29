import React from 'react';
import { Images } from '../Images';
function Aboutme() {


  return (
    <section className="case-section-main" id="work2">
      <section className="case_content_main">
        <div className="case_content">
          <div className="about-img-container">
            <img className="about-img" src="" alt="En Telefon" />
          </div>
        </div>
        <div className="case_content">
          <h2 className="section-title-work">My name is Maria Ekman</h2>
          <p className="bodytext">
            and I’m a Ux-designer currently working for a company called Loopeli. When I develop and design for a webpage what I’m looking for is whether the page benefits both user and company in the long run.

            My strong sides as a UX-designer is my curiosity and my ability to put myself into others mindset and feelings. That makes it easier for me to see weaknesses and strengths in webpages. I am used to handling programs

            such as Figma, Framer, Sketch, Photoshop and Illustrator. I have an understanding for programming and it has given me an understanding of how developers think and how to build a component. My free time I spend with my friends, or playing football and training crossfit
          </p>
          <div className="hero-button-content">
            <button className="hero-button" type="button"><a> Download
              personal letter &
              CV </a></button>
            <button className="hero-button" type="button"><a> Contact me
            </a></button>
          </div>
        </div>
      </section>
      <section className="case_content_main">
        <div className="case_content">
          <h2 className="section-title-work">Jag utvecklat min Portfolio med Fokusering på WCAG</h2>
          <p className="bodytext">
            Jag har utvecklat denna webbplats med React och CSS, och det har varit viktigt för mig att arbeta enligt WCAG-standarder. Genom att följa WCAG-riktlinjer säkerställer jag att webbplatsen är tillgänglig för alla användare. Tillgänglighet handlar inte bara om att stödja personer med funktionsnedsättningar, utan det förbättrar också den övergripande designen och användarupplevelsen. Genom att implementera WCAG blir webbplatsen mer intuitiv, lätt att navigera och snabbare att ladda. Detta skapar en mer inkluderande webb där personer med olika funktionsnedsättningar, som nedsatt syn, hörsel, rörlighet eller kognitiva svårigheter, kan använda innehållet.
          </p>
        </div>
        <div className="case_content">
          <Images />
          <p className="centeredText">Loopeli</p>
        </div>
      </section>
    </section>

  );
}



export default Aboutme;


