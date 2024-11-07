import React from 'react';
import {Link} from "react-router-dom";
import {  ImageMedium } from '../ImageMedium';
import profileImages from "../../img/ProflibildMaria.jpg";
import { useLanguage } from '../LanguageContext';
import imageSwe from '../../img/Maria-Ekman-Cv-SV-2024.pdf';
import imageEng from '../../img/Maria-Ekman-CV-personligt-brev-Ux-designer-2024-eng.pdf';
function Aboutme() {


  const  aboutMeList = {
    headlineSwe: "Erfarenheter från Soppkök Uppsala",
    headlineEng: "Experiences from Uppsala Soup Kitchen",
    image1: "Skärmbild 2023-04-14 134413.png",
    altSwe: "En artikel från uppsala tidning om soppkök.",
    altEng: "Description of the images",
    imageDescriptionSwe: "En artikel från uppsala tidning om soppkök.",
    imageDescriptionEng: "Bildbeskrivning",
    projectDescriptionSwe: "Jag har utvecklat en webbplats med React och CSS som är tillgänglig för alla genom att följa WCAG-standarder. Dessa riktlinjer förbättrar inte bara tillgängligheten för personer med funktionsnedsättningar, utan bidrar även till en intuitiv och lättnavigerad upplevelse för alla användare, samt en snabbare laddningstid. Om en webbplats är svår att använda och inte lättnavigerad, ökar risken att användare vänder sig till konkurrenter. Genom att säkerställa en inkluderande webbmiljö blir webbplatsen mer anpassad för personer med nedsatt syn, hörsel, rörlighet eller kognitiva utmaningar.",
    projectDescriptionEng: "I have developed a website with React and CSS that is accessible to everyone by following WCAG standards. These guidelines not only improve accessibility for people with disabilities but also contribute to an intuitive and easy-to-navigate experience for all users, as well as faster loading times. If a website is difficult to use and not easy to navigate, users are more likely to turn to competitors. By ensuring an inclusive web environment, the website becomes better suited for people with visual, auditory, mobility, or cognitive challenges.",
    keyQualitiesSwe: "Mina viktigaste egenskaper är min beslutsamhet, att jag är målinriktad och ständigt nyfiken. Jag tycker att dessa drag gör att jag verkligen kan förena användarcentrerad design med en gedigen teknisk förståelse för frontendutveckling i min roll. Jag brinner för att skapa gränssnitt som inte bara är estetiskt tilltalande, utan också intuitiva. Det är en utmaning jag älskar – att gräva djupare och verkligen förstå hur vi kan implementera lösningar på ett effektivt sätt i webbapplikationer. Genom mina erfarenheter inom både UX-design och frontendutveckling har jag fått en helhetsbild av hur designbeslut påverkar både användarupplevelsen och de tekniska lösningarna. Jag trivs verkligen i tvärfunktionella team, där jag kan kommunicera och dela mina designidéer på ett tydligt och engagerande sätt med både tekniska och icke-tekniska kollegor. Att samarbeta och skapa tillsammans är något jag verkligen värdesätter!",
    keyQualitiesEng: "My key qualities are determination, goal-orientedness, and a constant curiosity. I believe these traits allow me to truly combine user-centered design with a solid technical understanding of frontend development in my role. I'm passionate about creating interfaces that are not only aesthetically pleasing but also intuitive. I love the challenge of digging deeper to understand how we can implement solutions effectively in web applications. Through my experiences in both UX design and frontend development, I have gained a comprehensive view of how design decisions impact both user experience and technical solutions. I genuinely thrive in cross-functional teams, where I can communicate and share my design ideas clearly and engagingly with both technical and non-technical colleagues. Collaborating and creating together is something I truly value!",
    aboutMeSwe: "Och jag är en UX-designer som för närvarande arbetar för ett företag som heter Loopeli. När jag utvecklar och designar för en webbplats fokuserar jag på om sidan gynnar både användaren och företaget på lång sikt. Min erfarenhet som boendestödjare har gett mig en djupare förståelse för människor och hur jag bäst kan möta deras behov, vilket är något jag verkligen kommer att dra nytta av i min roll som UX-designer. Jag har också lärt mig att skapa förtroende hos individer som kanske inte alltid mår bra. Mina styrkor som UX-designer är min nyfikenhet och min förmåga att sätta mig in i andras tankar och känslor. Det gör det lättare för mig att se webbplatsers svagheter och styrkor. Jag är van vid att hantera program som Figma, Framer, Sketch, Photoshop och Illustrator. Jag har en förståelse för programmering, vilket har gett mig insikt i hur utvecklare tänker och hur man bygger en komponent. På min fritid tillbringar jag tid med mina vänner, spelar fotboll och tränar crossfit.",
    aboutMeEng: "And I am a UX designer currently working for a company called Loopeli. When I develop and design for a website, I focus on whether the page benefits both the user and the company in the long run. My experience as a support worker has given me a deeper understanding of people and how to best meet their needs, which is something I will truly benefit from in my role as a UX designer. I have also learned to build trust with individuals who may not always be feeling well. My strengths as a UX designer are my curiosity and my ability to empathize with others' thoughts and feelings. This makes it easier for me to identify weaknesses and strengths in websites. I am familiar with tools like Figma, Framer, Sketch, Photoshop, and Illustrator. I have a basic understanding of programming, which has provided me with insight into how developers think and how to build a component. In my free time, I spend time with my friends, play football, and train CrossFit."
  };
  



  const { language } = useLanguage();


  return (
    <section className="case-section-main" id="work2">
      <section className="case_content_main">
        <div className="case_content">
          <div className="about-img-container">
            <img className="" style={{ maxWidth: "450px", width: "100%" }} src={profileImages} alt={language && language === "sv"
              ? "En profil bild på Maria"
              : "A profile picture of Maria"} />
          </div>
        </div>
        <div className="case_content">
          <h1 className="section-title-work">  {language === "sv" ? "Mitt namn är Maria Ekman":"My name is Maria Ekman"}</h1>
          <p className="bodytext">
          {language === "sv" ? aboutMeList.aboutMeSwe:aboutMeList.aboutMeEng}

           
          </p>
          <div className="hero-button-content">
          <div className="hero-button">
            <a  className='a-hero-button' href={language && language === "sv"
              ? imageSwe 
              :  imageEng} download="Maria-Ekman-Cv-2024.pdf">    
              
              {language && language === "sv"
              ? "Ladda ner personligt brev och CV"
              : "Download personal letter & CV"} </a></div> 
            <button className="hero-button" type="button">
              <Link to="/contact" className="a-hero-button">
              {language && language === "sv"
                ? "Kontakta mig"
                : "Contact me"} 
            </Link>
            </button>
          </div>
        </div>
      </section>
      <section className="case_content_main2">

        <div className="case_content">
          <ImageMedium img={"Wcage.jpg"} />
          <p className="centeredText">Wcage</p>
        </div>
        <div className="case_content">
          <h1 className="section-title-work">
          {language === "sv" ? "Jag utvecklat min Portfolio med Fokusering på WCAG":"I have developed my portfolio with a focus on WCAG"}</h1>
          <p className="bodytext">
          {language === "sv" ? aboutMeList.projectDescriptionSwe :aboutMeList.projectDescriptionEng}
          </p>
        </div>
      </section>

      <section className="case_content_main">
        <div className="case_content">
          <ImageMedium
            img={"chris-ried-ieic5Tq8YMk-unsplash.jpg"} /*imageDescriptionSwe={} imageDescriptionEng={} altSwe={} altEng={}*/ />
          <p className="centeredText">       {language === "sv" ? "Programering"   :"Programming"}</p>
        </div>
        <div className="case_content">
          <h1 className="section-title-work"> {language === "sv" ? "Fördelarna att arbeta med UX och Frontend":"The advantages of working with UX and frontend"}</h1>
          <p className="bodytext">
        
          {language === "sv" ? aboutMeList.keyQualitiesSwe :aboutMeList.  keyQualitiesEng}
          </p>
        </div>

      </section>


    </section>

  );
}



export default Aboutme;


