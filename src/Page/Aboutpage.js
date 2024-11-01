import React from 'react';
import Homeworkcardsection from '../components/Home/Homeworkcardsection';
import About from '../components/About/Aboutme';
import { Images } from '../components/Images';
import { WorkSection } from '../components/About/WorkSection';


function AboutPage({ data }) {




  const education = [
    {
      titleEng: "UX designer and requirement competence program",
      StartEng: " 2020 - 2021 ",
      EndEng: "2022, end: 2023",
      institutionEng: "Chas Academy",
      skills1Eng: "User research",
      skills2Eng: "Interaction design",
      skills3Eng: "Customer experience",
      skills4Eng: "Design thinking",
      skills5Eng: "Accessibility & WCAG",
      skills6Eng: "Web analysis",
      skills7Eng: "Requirements & analysis",


      titleSwe: "UX designer och kravkompetensprogram",
      startSwe: "2020 - 2021",
      endSwe: "2023",
      institutionSwe: "Chas Academy",
      skills1Swe: "Användarundersökning",
      skills2Swe: "Interaktionsdesign",
      skills3Swe: "Kundupplevelse",
      skills4Swe: "Design thinking",
      skills5Swe: "Tillgänglighet & WCAG",
      skills6Swe: "Webbanalys",
      skills7Swe: "Krav & analys",
      imgIcon: "V.svg"
    },
    {
      titleEng: "Accessibility in Digital Services and Products",
      startEng: "26 September 2023",
      endEng: "21 January 2024",
      institutionEng: "Chas Academy",
      skills1Eng: "WCAG Basics",
      skills2Eng: "Keyboard Navigation & Input",
      skills3Eng: "Page & Site Structure",
      skills4Eng: "Law & Policies",
      skills5Eng: "Audio & Video",
      skills6Eng: "User Testing",
      skills7Eng: "Forms & Interaction",
      skills8Eng: "Strategies for Long-Term Success",
      skills9Eng: "Gaming & Accessibility",
      titleSwe: "Frontendutvecklare",
      startSwe: "1 september 2019",
      endSwe: "30 juni 2021",
      institutionSwe: "Medieinstitutet",
      skills1Swe: "HTML & CSS2",
      skills2Swe: "Agilt projektarbete",
      skills3Swe: "API-utveckling",
      skills4Swe: "Databaser Node",
      skills5Swe: "JavaScript - Grundkurs & Fördjupning",
      skills6Swe: "UX/Användbarhet",
      skills7Swe: "LIA (Lärande i arbete)",
      skills8Swe: "Examensarbete",
      skills9Swe: "Testning",
      imgIcon: "L.svg"
    }, {
      titleEng: "Production Manager & Photographer",
      startEng: "2014",
      endEng: "2016",
      institutionEng: "Kalix Folk High School",
      skills1Eng: "Project Management",
      skills2Eng: "Production Management",
      skills3Eng: "Budgeting",
      skills4Eng: "Planning",


      titleSwe: "Produktionsledare & Fotograf",
      startSwe: "2014",
      endSwe: "2016",
      institutionSwe: "Kalix Folkhögskola",
      skills1Swe: "Projektledning",
      skills2Swe: "Produktionshantering",
      skills3Swe: "Budgetering",
      skills4Swe: "Planering",
      imgIcon: "Vectormovie.svg"
    }, {
      titleEng: "Front End Developer",
      startEng: "1 September 2019",
      endEng: "31 June 2021",
      institutionEng: "Medieinstitutet",
      skills1Eng: "HTML & CSS2",
      skills2Eng: "Agilt projektarbete",
      skills3Eng: "API-utveckling",
      skills4Eng: "Databases Node",
      skills5Eng: "JavaScript - Grundkurs & Fördjupning",
      skills6Eng: "UX/Usability",
      skills7Eng: "LIA",
      skills8Eng: "Examensarbete",
      titleSwe: "Frontendutvecklare",
      startSwe: "1 september 2019",
      endSwe: "30 juni 2021",
      institutionSwe: "Medieinstitutet",
      skills1Swe: "HTML & CSS2",
      skills2Swe: "Agilt projektarbete",
      skills3Swe: "API-utveckling",
      skills4Swe: "Databaser Node",
      skills5Swe: "JavaScript - Grundkurs & Fördjupning",
      skills6Swe: "UX/Användbarhet",
      skills7Swe: "LIA (Lärande i arbete)",
      skills8Swe: "Examensarbete",
      imgIcon: "V.svg"
    }

  ]

  const jobList = [
    {
      titleEng: "Front End Developer",
      startEng: "1 September 2021",
      endEng: "31 October 2022",
      institutionEng: "Valtech",
      skills1Eng: "React",
      skills2Eng: "JavaScript",
      skills3Eng: "GraphQL",
      skills4Eng: "Episerver/Optimizely",



      titleSwe: "Frontendutvecklare",
      startSwe: "1 september 2019",
      endSwe: "30 juni 2021",
      institutionSwe: "Medieinstitutet",
      skills1Swe: "HTML & CSS2",
      skills2Swe: "Agilt projektarbete",
      skills3Swe: "API-utveckling",
      skills4Swe: "Databaser Node",
      skills5Swe: "JavaScript - Grundkurs & Fördjupning",
      skills6Swe: "UX/Användbarhet",
      skills7Swe: "LIA (Lärande i arbete)",
      skills8Swe: "Examensarbete",
      skills9Swe: "Testning",
      imgIcon: "V.svg"

    },
    {
      titleEng: "UX Designer",
      startEng: "16 February 2023",
      endEng: "Current",
      institutionEng: "Loopeli",
      skills1Eng: "User stories",
      skills2Eng: "Prototype",
      skills3Eng: "Usability review",
      skills4Eng: "User/usability testing",
      skills5Eng: "Affinity Diagram",
      skills6Eng: "Qualitative research",
      skills7Eng: "Contextual interview",


      titleSwe: "UX Designer",
      startSwe: "16 februari 2023",
      endSwe: "Nuvarande",
      institutionSwe: "Loopeli",
      skills1Swe: "Användarberättelser",
      skills2Swe: "Prototyp",
      skills3Swe: "Användbarhetsgranskning",
      skills4Swe: "Användar-/användbarhetstestning",
      skills5Swe: "Affinitetsdiagram",
      skills6Swe: "Kvalitativ forskning",
      skills7Swe: "Kontextuell intervju",
      imgIcon: "L.svg"

    }
  ];


  return (

    <div className="main-content">
      <About />
      <Homeworkcardsection data={data}></Homeworkcardsection>
      <WorkSection list={jobList} headlineSwe={"Relevant arbete"} headlineEng={"Relevant work"} />
      <WorkSection list={education} headlineSwe={"Utbildning"} headlineEng={"Education"} />
    </div>
  )
}

export default AboutPage;

