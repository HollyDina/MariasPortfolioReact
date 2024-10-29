import React from 'react';
import Homeworkcardsection from '../components/Home/Homeworkcardsection';
import About from '../components/About/Aboutme';
import {Images} from '../components/Images';
function AboutPage({data}) {


  return (

    <div className="main-content">
        <About />
        <section className="case_content_main">
          <div className="case_content">
            <h2 className="section-title-work">Fördelarna att arbeta med UX och Frontend</h2>
            <p className="bodytext">
              Mina viktigaste egenskaper är beslutsamhet, målinriktadhet och en ständig nyfikenhet. Dessa drag gör att jag verkligen kan kombinera användarcentrerad design med en djup teknisk förståelse för frontendutveckling i den här rollen. Jag brinner för att skapa estetiskt tilltalande och intuitiva gränssnitt, och jag tycker om att gräva djupare för att förstå hur vi kan implementera dessa lösningar på ett effektivt sätt i webbapplikationer. Genom mina erfarenheter inom både UX-design och frontendutveckling har jag fått en helhetsbild av hur designbeslut påverkar användarupplevelsen och de tekniska lösningarna. Jag trivs verkligen med att arbeta i tvärfunktionella team, där jag kan kommunicera och dela mina designidéer med både tekniska och icke-tekniska kollegor på ett tydligt och engagerande sätt.
            </p>
          </div>
          <div className="case_content">
            <Images />
            <p className="centeredText">Loopeli</p>
          </div>
        </section>
       <Homeworkcardsection data={data}></Homeworkcardsection>
       </div>
  )
}

export default AboutPage;

