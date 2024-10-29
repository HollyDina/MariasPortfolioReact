// src/About.js
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLanguage } from "../components/LanguageContext";
import {Images} from "../components/Images";
import ImageHero from "../components/ImageHero";
import HeroSection from "../components/HeroSection";
import Test from "../components/Test";
export const Cases = ({data}) => { 

  const { id } = useParams();
  const { language } = useLanguage();








  /*const filteredData = data.filter(item => item.id.toString() === id);
 console.log(filteredData, "filer");
 
return (
  <div className="main-content">
    <HeroSection filteredData={filteredData}/>
    {filteredData.map((item, index) => (
          <section className="case_content_main" key={index}>
            {index % 2 === 0 ? (
              <>
                <div className="case_content">
                  <h2 className="section-title-work">
                    {language === "sv" ? item.headlineSwe : item.headlineEng}
                  </h2>
                  <p className="bodytext">
                    {language === "sv" ? item.textSwe : item.textEng}
                  </p>
                </div>
                <div className="case_content">
                  <Images src={item} />
                  <p className="centeredText">Loopeli</p>
                </div>
              </>
            ) : (
              <>
                <div className="case_content">
                  <Images src={item} />
                  <p className="centeredText">Loopeli</p>
                </div>
                <div className="case_content">
                  <h2 className="section-title-work">
                    {language === "sv" ? item.headlineSwe : item.headlineEng}
                  </h2>
                  <p className="bodytext">
                    {language === "sv" ? item.textSwe : item.textEng}
                  </p>
                </div>
              </>
            )}
          </section>
        ))
     
    }
  </div>
);
}
/*
return (
  <div className="main-content">
    <HeroSection />
    {data && data
 // Filter items by id
      .map((item, index) => (
        <section className="case_content_main" key={index}>       
        {console.log(item,"hhe")}
          {index % 2 === 0 ? (
            <>
              <div className="case_content">
                <h2 className="section-title-work">
                  {language && language === "sv"
                    ? item.headlineSwe
                    : item.headlineEng}
                </h2>
                <p className="bodytext">
                  {language && language === "sv"
                    ? item.textSwe
                    : item.textEng}
                </p>
              </div>
              <div className="case_content">
                <Images src={item} />
                <p className="centeredText">Loopeli</p>
              </div>
            </>
          ) : (
            <>
              <div className="case_content">
                <Images src={item} />
                <p className="centeredText">Loopeli</p>
              </div>
              <div className="case_content">
                <h2 className="section-title-work">
                  {language && language === "sv"
                    ? item.headlineSwe
                    : item.headlineEng}
                </h2>
                <p className="bodytext">
                  {language && language === "sv"
                    ? item.textSwe
                    : item.textEng}
                </p>
              </div>
            </>
          )}
        </section>
      ))}
  </div>
);
}*/

/* return (
    <div className="main-content">
    <HeroSection />
      {data&&data.map((item, index) => (
        <section className="case_content_main" key={index}>
          {index % 2 === 0 ? (
            <>
              <div className="case_content">
                <h2 className="section-title-work">
                  {language && language === "sv"
                    ? item.headlineSwe && item.headlineSwe
                    : item.headlineEng && item.headlineEng}
                </h2>
                <p className="bodytext">
                  {language && language === "sv"
                    ? item.textSwe && item.textSwe
                    : item.textEng && item.textEng}
                </p>
              </div>
              <div className="case_content">
                <Images src={item} />
                <p className="centeredText">Loopeli</p>
              </div>
            </>
          ) : (
            <>
              <div className="case_content">
                <Images src={item} />
                <p className="centeredText">Loopeli</p>
              </div>
              <div className="case_content">
                <h2 className="section-title-work">
                  {language && language === "sv"
                    ? item.headlineSwe && item.headlineSwe
                    : item.headlineEng && item.headlineEng}
                </h2>
                <p className="bodytext">
                  {language && language === "sv"
                    ? item.textSwe && item.textSwe
                    : item.textEng && item.textEng}
                </p>
              </div>
            </>
          )}
        </section>
      ))}
    </div>

  );
};*/

return(
  <React.Fragment> 
    <Test data={data}></Test>
  </React.Fragment>
)
}


export default Cases;
// https://codesandbox.io/p/sandbox/react-router-query-parameters-mfh8p?file=%2Fexample.js%3A36%2C11


  /*
  let { id } = useParams();

  const db = firebase.firestore();
  let localBase = new Localbase("db");

  const [DetailCase, setDetailCase] = useState([]);

  useEffect(() => {
    const data = db.collection("Product").doc(id);
    data
      .get()
      .then(function (doc) {
        if (doc.exists) {
          // console.log("Document data:", doc.data());
          setDetailCase({ ...doc.data(), id: doc.id });
        } else {
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }, []);*/


const list = [
  {
    id:1,
    headlineSwe: "Research & analys",
    textSwe: `
          Vid slutet av utbildningen fick vi som skoluppgift att undersöka studenternas kundupplevelse på just den utbildning jag gick på. 
          Jag genomförde uppgiften genom att intervjua nuvarande och tidigare elever.
    
          Efter intervjuerna började jag analysera intervjusvaren för att hitta samband. 
          Det huvudsakliga som studenterna generellt ville åstadkomma var att lära sig UX-design och få kravkompetens.
    
          Jag märkte att kontexten som de studerande befann sig i när de valde att börja studera var väldigt varierande; 
          här behövs mer data för att hitta samband.
    
          Jag har prioriterat och färgkodat resultaten som studenterna vill uppnå och man kan se att exempelvis “Bli antagen” 
          är högt prioriterat. Det har man lyckats bra med tack vare sen ansökan. 
          Ett av målen som Chas inte levererar på är att “Bli trygg i att bygga prototyper.” 
          Studerande upplever att de har haft varierande resultat.
    
          De gråa lapparna är mål där det behövs mer data för att veta hur Chas presterar.,
          Jag har hittat utmaningar som studenterna möter och har hittat några områden som är problematiska.`,

    headlineEng: "Analysis of Interviews",
    textEng: `
          After the interviews, I begin to analyze them to find connections. 
          The main topics that students want to learn are UX-design and to get requirement competence. 
    
          The students all have very different reasons for why they start to study and I feel that I need more connections 
          and similarities in the data. I have prioritized and color coded the results about what students want to achieve. 
    
          The most prioritized is to 'Get accepted'. One of the goals not delivered by Chas is to 'Become confident in building prototypes'. 
          The students feel they have different experiences and results in that area. I feel that we need more data 
          to know how Chas performs. I have found challenges met by students and have found some areas that are problematic.`,
    src: `https://unsplash.com/photos/a-small-bird-perched-on-a-metal-rail-5xS6JwfK1xk`,
    altSwe: `En liten fågel som sitter på ett metallräcke`,
    altEng: `A small bird perched on a metal rail`,
  },
  {
    headlineSwe: "Förbereda inför användartester och intervjuer",
    textSwe: `
          Här ser vi översikten av den kundresa jag sammanställt utefter det jag lärt mig från intervjuerna.
    
          När jag analyserade intervjusvaren hittade jag en hel del likheter och har därför byggt upp resan 
          så den motsvarar åsikterna för den generella studenten.
        `,
    headlineEng: "User Tests and Interviews",
    textEng: `Prepare for user tests and interviews. 
          Here we can see the overview of the customer journey that I compiled according to the interviews I conducted. 
    
          I have analyzed the interviews and found some similarities to build customer journeys on 
          to make it correspond with the general views of a student.
        `,
    src: `https://unsplash.com/photos/a-small-bird-perched-on-a-metal-rail-5xS6JwfK1xk`,
    altSwe: `En liten fågel som sitter på ett metallräcke`,
    altEng: `A small bird perched on a metal rail`,
  },
  {
    headlineSwe: "Kund-resekartan",
    textSwe: `Högst upp i kundrese-kartan är de olika faserna som ingår i kundresan. 
          Det börjar alltså med att man upptäcker att UX finns och tycker det verkar intressant.
    
          Därefter undersöker man och gör research för att hitta rätt skola. 
          Sen skickar man in en ansökan och blir antagen, varefter man börjar skolan.
    
          Nästa fas kallas för “går i skolan”. Denna fas har jag delat upp i tre underkategorier 
          då de är viktiga att förstå separat: “Innehåll och kurser”, “lärare” och “kommunikation och socialt”. 
          Under faserna pågår parallellt och under hela tiden man går i skolan, detta har vi illustrerat med en cirkulär pil.
    
          Nästa fas är praktik, därefter examination. Till sist slutar man och får förhoppningsvis ett jobb.
    
          I den vänstra kolumnen med rubrikerna: Interaktioner - alltså vad personen gör i varje fas, 
          mål - vad den vill uppnå under respektive fas, touchpoints - som jag illustrerar med ikoner, 
          positiva och negativa tankar - här har vi några citat från intervjudeltagare. 
          Sen har jag renskrivit upplevelsen i form av en känslokurva som tydligt visar under vilka faser 
          det varit bra och vilka det varit mindre bra, och till sist insikter och möjligheter.
        `,
    headlineEng: `Customer Journey Map`,
    textEng: `At the top of the customer journey map are the different phases which are part of the customer journey. 
          It all starts with discovering UX and then you find out if it’s interesting to you or not. 
    
          After that you research to find the right school, you send in an application, 
          and finally you begin studying. 
    
          Next phase is 'going to school'. I have split them up in three categories because it’s important to understand 
          them separately: 'Content and courses', 'teachers', and 'communication and social.' 
    
          The sub-phases run parallel and throughout the time you attend school, we have illustrated this with a circular arrow. 
    
          Next phase is internship, and after that there’s an examination which hopefully leads to a job. 
    
          In the left column with the titles: Interaction - meaning what the person is doing in every phase, 
          b - what they want to achieve in every phase. With touchpoints, I illustrate with icons; negative and positive thoughts. 
    
          Here you can see some quotes from interview participants. From the emotional curve, you can see clearly which phases 
          have been positive and which have been more negative. Finally, we have insights and opportunities.
        `,
    src: `https://unsplash.com/photos/a-small-bird-perched-on-a-metal-rail-5xS6JwfK1xk`,
    altSwe: `En liten fågel som sitter på ett metallräcke`,
    altEng: `A small bird perched on a metal rail`,
  },
  {
    headlineSwe: "Pain points & Moments of truth",
    textSwe: `Studerande-upplevelser består av olika “pain points” och “moments of truth” som sker under kundresan. 
          Här är olika citat som visar hur eleverna känner under resans gång. I undersökningsfasen tänkte eleverna:
    
          “Jag gillar att det är en blandning av UX och krav.”
    
          Här visade det sig att många gillade att skolan är grundad av ett företag i branschen, Chas Visual Management.
    
          “Jag tycker att Chas känns modernt, med en personlig touch.”
    
          Många valde YH för att de ville ha en praktisk lärandeform.
    
          “Jag vill gå en praktisk utbildning så jag kan lära mig på riktigt.”
    
          Även tidigt i resan märkte jag att de studerande hade högre förväntningar på skolans struktur och ordning. 
          Detta är inte ett uttalat krav, men något vi upptäckt då det mer eller mindre under varje fas nämnts ordet “rörigt”, 
          vilket de gula stjärnorna visar. Redan i början av skolan-fasen märktes det. 
          “Jag tycker att personalen på skolan inte känns helt förberedd.”
    
          I innehåll-och-kurser-fasen visade det sig att några av förväntningarna inte höll måttet. 
          “Jag tycker det är för mycket fokus på kravhantering.” Det var inte tillräckligt praktiskt - 
          “Jag vill lära mig Figma/UI bättre än skolan erbjuder”, det var rörigt - 
          “Jag tycker att många uppgifter är otydliga.”
    
          Andra saker som tyngde ner gå-i-skolan-fasen var känslorna “dåligt att de tagit in en konsult i sista sekund för han är inte förberedd” 
          och “Skolans personal är dåliga på att återkoppla.”
    
          Under praktik-fasen märkte studenterna att skolan inte alls tycktes ha det branschnära nätverket som studenterna hade förväntat sig. 
          “Varför använder inte skolan sitt nätverk för att hjälpa oss elever att hitta praktikplatser?” 
    
          Även under denna fas kände studenterna av brister i strukturen: 
          “Jag blir stressad av att LIA-kursen startar mitt under en stor inlämning vi har i en annan kurs, 
          hur har de planerat egentligen?”
    
          Slutligen upptäckte jag att studenterna upplevde examensfasen som rörig. 
          “Det stressar mig att det inte är tydligt vad som ska lämnas in.” 
          “Jag förstår inte vad som förväntas av mig.”
        `,
    headlineEng: "Pain Points & Moments of Truth",
    textEng: `Student experiences are different pain points and moments of truth which take place during the customer journey. 
          Here are different quotes that show how the student was feeling during the journey. 
    
          In the exploration phase, you can see what the students were thinking. 
          'I like that it’s a mixture of UX and requirement.' This shows that many appreciated that the school is founded by a 
          company in the industry, Chas Visual Management. 
    
          'I feel Chas is modern, with a personal touch.' 
    
          Many chose YH because they wanted a practical form of education. 
          'I want to do a practical education so I can learn for real.' 
    
          I noticed early on that students had higher expectations for the school's structure and order. 
          This was not an expressed requirement, but something we discovered as the word 'messy' was mentioned 
          more or less in every phase, as the yellow stars indicate. 
    
          Early in the school phase, it was clear. 
          'I think the staff at school are not prepared.' 
    
          In the content-and-courses phase, it turned out that some expectations fell short. 
          'I think there’s too much focus on requirement management.' It was not practical enough - 
          'I want to learn Figma/UI better than the school offers.' It was messy - 
          'I think many assignments are unclear.' 
    
          Other things weighing down the going-to-school phase were feelings like 'It’s bad that they brought in a consultant 
          at the last moment because he is unprepared' and 'The school's staff is poor at giving feedback.' 
    
          During the internship phase, students noticed that the school did not seem to have the industry network they expected. 
          'Why isn’t the school using its network to help us find internships?' 
    
          Even during this phase, students felt the lack of structure: 
          'I get stressed because the LIA course starts in the middle of a major assignment we have in another course, 
          how have they planned this?' 
    
          Finally, I discovered that students felt the examination phase was messy. 
          'It stresses me that it’s not clear what should be submitted.' 
          'I don’t understand what’s expected of me.'
        `,
    src: `https://unsplash.com/photos/a-small-bird-perched-on-a-metal-rail-5xS6JwfK1xk`,
    altSwe: `En liten fågel som sitter på ett metallräcke`,
    altEng: `A small bird perched on a metal rail`,
  },
  {
    headlineSwe: "Insikter och möjligheter",
    textSwe: `Här ser vi några av insikterna som kom fram under intervjuerna och vi ser att det finns många områden att ta tag i. 
          Jag listar dem i ordning, från mest prioriterat till minst prioriterat: 
    
          1. Tydlig kommunikation och riktlinjer: Det är otydligt vad som gäller för att ta sig igenom utbildningen. 
          Studenterna vill veta vad som förväntas av dem och vill ha klar information, så de har verktygen de behöver.
    
          2. Mer strukturerad utbildning: Det saknas tydlighet i kursinnehållet. Eleverna vill ha en klarare struktur. 
          De vill också ha mer fokus på praktiska moment.
    
          3. Förbättra lärarnas återkoppling: Studenterna upplever att lärarna inte ger tillräcklig återkoppling. 
          Om Chas ska arbeta med att förbättra sin utbildning, så skulle de behöva fokusera på att ge studenterna 
          mer feedback och tydligare information.
    
          4. Stärka kontakten med branschen: Studenterna har behov av att komma i kontakt med företag och organisationer 
          där de kan göra sin praktik, och vill att skolan ska hjälpa dem med det.
        `,
    headlineEng: "Insights and Opportunities",
    textEng: `Here we see some insights that emerged from the interviews and we see that there are many areas to address. 
          I list them in order from most prioritized to least prioritized: 
    
          1. Clear communication and guidelines: It is unclear what it takes to get through the education. 
          Students want to know what is expected of them and want clear information so they have the tools they need.
    
          2. More structured education: There is a lack of clarity in the course content. Students want a clearer structure. 
          They also want more focus on practical moments.
    
          3. Improve teacher feedback: Students feel that teachers do not provide sufficient feedback. 
          If Chas is to work on improving their education, they would need to focus on providing students 
          with more feedback and clearer information.
    
          4. Strengthen the connection with the industry: Students need to connect with companies and organizations 
          where they can do their internships, and they want the school to help them with that.
        `,
    src: `https://unsplash.com/photos/a-small-bird-perched-on-a-metal-rail-5xS6JwfK1xk`,
    altSwe: `En liten fågel som sitter på ett metallräcke`,
    altEng: `A small bird perched on a metal rail`,
  },
];

const list2 = [
  {
    headlineSwe: "Research & analys",
    textSwe: `
      Vid slutet av utbildningen fick vi som skoluppgift att undersöka studenternas kundupplevelse på just den utbildning jag gick på.
      Jag genomförde uppgiften genom att intervjua nuvarande och tidigare elever.
    `,
    headlineEng: "Research & Analysis",
    textEng: `
      At the end of the course, we were given a school assignment to investigate students' customer experiences on the education I attended.
      I conducted the task by interviewing current and former students.
    `,
  },
  {
    headlineSwe: "Förbereda inför användartester och intervjuer",
    textSwe: `
      Här ser vi översikten av den kundresa jag sammanställt utefter det jag lärt mig från intervjuerna.
    `,
    headlineEng: "Prepare for User Tests and Interviews",
    textEng: `
      Here we can see the overview of the customer journey I compiled from what I learned from the interviews.
    `,
  },
  {
    headlineSwe: "Kund-resekartan",
    textSwe: `
      Högst upp i kundrese-kartan är de olika faserna som ingår i kundresan.
    `,
    headlineEng: "Customer Journey Map",
    textEng: `
      At the top of the customer journey map are the various phases involved in the customer journey.
    `,
  },
  // Add more objects for different sections.
];