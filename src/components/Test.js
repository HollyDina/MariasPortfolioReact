
// src/About.js
import React from "react";
import { useParams } from "react-router-dom";
import { useLanguage } from "./LanguageContext";
import ImageHero from "./ImageHero";
import HeroSection from "./HeroSection";
import { Images } from "./ImageMedium";
/*import berghsLogo from '../img/berghs_logo 1.svg';*/
import {TexImageSection} from "./TexImageSection";
import { TexImageSection2 } from "./TexImageSection2";
export const Test = ({ data }) => {
  console.log(data, "data");


  const { id } = useParams();
  const { language } = useLanguage();
  const parsedId = parseInt(id, 10);


  const allContents = data.flatMap(item => Object.values(item));

  console.log(allContents, "parsedId  <HeroSection content1Item={content1Item} />");


  const matchingContent2 = allContents.filter(content => content.id === parsedId)
  console.log(matchingContent2, "svar");


  return (
    <div className="main-content">
      {matchingContent2.map((item, index) => (
        <React.Fragment key={index}>
          {console.log(item, index, "hund1")}
          {Object.entries(item).map(([key, content1Item], index1) => (
            <React.Fragment key={index1}>
              {key === "intro" && <HeroSection key={index1} content1Item={content1Item} />}
              {console.log(content1Item.image1, "hund4")}
           
                {content1Item.headlineSwe || content1Item.textSwe ? (
                    <>
                  {index1 % 2 === 0 ? (
                     <section className="case_content_main2">
                    <TexImageSection 
                    headlineSwe={content1Item.headlineSwe} 
                    headlineEng={content1Item.headlineEng}
                    textSwe={content1Item.textSwe}
                    textEng={content1Item.textEng}
                    
                   img={content1Item.image1} 
                    imageDescriptionSwe={content1Item.imageDescriptionSwe}
                     imageDescriptionEng={content1Item.imageDescriptionEn} 
                     altSwe={content1Item.altSwe} 
                     altEng={content1Item.altEng} ></TexImageSection>
                     </section>
                  ) : (
                    <section className="case_content_main2">
                    <TexImageSection2 
                    headlineSwe={content1Item.headlineSwe} 
                    headlineEng={content1Item.headlineEng}
                    textSwe={content1Item.textSwe}
                    textEng={content1Item.textEng}
                    
                   img={content1Item.image1} 
                    imageDescriptionSwe={content1Item.imageDescriptionSwe}
                     imageDescriptionEng={content1Item.imageDescriptionEn} 
                     altSwe={content1Item.altSwe} 
                     altEng={content1Item.altEng} />
                       </section>
                  )}
                  </>
                ) : null}
          
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </div>

  )
}


export default Test;





/*
  return (
    <div className="main-content">
      {matchingContent2.map((item, index) => (
        <React.Fragment key={index}>
          {console.log(item, index, "hund1")}
          {Object.values(item).map(([key,content1Item], index1) => (
            <React.Fragment key={index1} >
                {key === "intro" && <HeroSection content={content1Item} />}
              <section className="case_content_main" >
                {index1 % 2 === 0 ? (
                  <>
                    <div className="case_content">
                      <h2 className="section-title-work">
                        {language === "sv" ? content1Item.headlineSwe : content1Item.headlineEng}
                      </h2>
                      <p className="bodytext">
                        {language === "sv" ? content1Item.textSwe : item.textEng}
                      </p>
                    </div>
                    <div className="case_content">
                      <img src={content1Item.image1 && content1Item.image1} alt={language && language === "sv"
                        ? content1Item.altSwe && content1Item.altSwe
                        : content1Item.altEng && content1Item.altEng} className="images" />

                      <p className="centeredText"> {language === "sv" ? content1Item.imageDescriptionSwe : content1Item.imageDescriptionEng}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="case_content">
                      <img src={content1Item.image1 && content1Item.image1} alt={language && language === "sv"
                        ? content1Item.altSwe && content1Item.altSwe
                        : content1Item.altEng && content1Item.altEng} className="images" />

                      <p className="centeredText"> {language === "sv" ? content1Item.imageDescriptionSwe : content1Item.imageDescriptionEng}</p>
                    </div>
                    <div className="case_content">
                      <h2 className="section-title-work">
                        {language === "sv" ? content1Item.headlineSwe : content1Item.headlineEng}
                      </h2>
                      <p className="bodytext">
                        {language === "sv" ? content1Item.textSwe : content1Item.textEng}
                      </p>
                    </div>

                  </>
                )}
              </section>
            </React.Fragment>
          ))}
        </React.Fragment>
      ))

      }
    </div>
  );
} */

/*
// src/About.js
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLanguage } from "../components/LanguageContext";
import { Images } from "../components/Images";
import ImageHero from "../components/ImageHero";
import HeroSection from "../components/HeroSection";
export const Cases = ({ data }) => {



  const contentData = [{
    content2: {
      id: 1,
      intro: {
        headlineSwe: "Företagssidan",
        textSwe: "Tjänster designer\nAnvändartester",
        headlineEng: "The company page",
        textEng: "Service designer\nUser Research",
        headlineIntroSwe: "Verktyg & Metoder",
        textIntroSwe: "Trello",
        headlineIntroEng: "TOOL",
        textIntroEng: "Trello",
        img: "",
        altSwe: "Beskrivning på bilden",
        altEng: "Description of the image",
      },
      textsection1: {
        headlineSwe: "Uppdraget på Loopeli:s företagssida",
        textSwe:
          "Jag fick i uppdrag av Loopeli att förbättra strukturen på deras webbplats för att göra den mer användarvänlig för företagsanvändare. Målet var att underlätta för dem att snabbt hitta relevant information och fatta beslut om att integrera Loopeli i sin verksamhet. Genom att analysera hur företag söker efter välfärds-hjälpmedel och användarnas feedback på appen identifierade jag förbättringsmöjligheter. Dessa insikter användes för att förbättra användarupplevelsen och göra det lättare för företag att köpa och använda Loopeli.",
        headlineEng: "Assignment on the Loopeli company page",
        textEng:
          "I was tasked by Loopeli to improve the structure of their website to make it more user-friendly for business users. The goal was to facilitate quick access to relevant information and decision-making regarding the integration of Loopeli into their operations. By analyzing how companies search for welfare aids and users' feedback on the app, I identified areas for improvement. These insights were used to enhance the user experience and make it easier for businesses to purchase and use Loopeli.",
        img: "",
        altSwe: "Beskrivning på bilden",
        altEng: "Description of the image",
      },
      textsection2: {
        headlineSwe: "Research",
        textSwe:
          "Jag genomförde en UX-review av webbplatsen för att identifiera gränssnittsproblem och jämföra med konkurrenter. Utvärderingen visade att användare hade svårt att navigera och att det fanns överflödig text som inte effektivt tjänade sitt syfte. För att utforska användarnas tankar och beteenden använde jag semistrukturerade intervjuer och användartester. Denna metod gav en djupare förståelse för deras behov och bekräftade mina hypoteser från utvärderingen, samt identifierade ytterligare förbättringsområden för webbplatsen.",
        headlineEng: "Research",
        textEng:
          "I conducted a UX review of the website to identify interface issues and compare with competitors. The evaluation showed that users had difficulty navigating and that there was excess text that did not effectively serve its purpose. To explore user thoughts and behaviors, I used semi-structured interviews and user tests. This method provided deeper insights into their needs and confirmed my hypotheses from the evaluation, as well as identifying additional areas for improvement for the website.",
        img: "",
        altSwe: "Beskrivning på bilden",
        altEng: "Description of the image",
      },
      textsection3: {
        headlineSwe: "Användartesterna",
        textSwe:
          "Jag beslutade mig för att tillämpa 'tänka högt'-metoden på menyn för att observera användarnas förväntningar. Det blev tydligt att meny-namnen var vagt formulerade och kunde tolkas på många olika sätt. Jag formulerade två frågor som riktlinjer för användartester och intervjuer för att säkerställa tydlig inriktning och undvika avvikelser från det centrala ämnet. Fråga 1: Vad vill jag veta från användartesterna och intervjuerna? Fråga 2: Vad vill jag uppnå med användartesterna och intervjuerna? Svar 1: Vilken information behöver användarna för att besluta om att implementera produkten? Finns den tillgänglig, eller saknas viktig information? Vi vill observera hur användarna navigerar på olika sidor för att söka information om Loopeli. Svar 2: Hur kan vi förbättra användarnas möjlighet att hitta information på webbplatsen? Kan vi underlätta snabbare beslut om produktens implementering i deras verksamhet?",
        headlineEng: "User Tests",
        textEng:
          "I decided to apply the 'think-aloud' method to the menu to observe user expectations. It became clear that the menu names were vaguely formulated and could be interpreted in many different ways. I formulated two questions as guidelines for user tests and interviews to ensure clear focus and avoid deviations from the central topic. Question 1: What do I want to know from the user tests and interviews? Question 2: What do I want to achieve with the user tests and interviews? Answer 1: What information do users need to decide on implementing the product? Is it available, or is important information missing? We want to observe how users navigate different pages to search for information about Loopeli. Answer 2: How can we improve users' ability to find information on the website? Can we facilitate quicker decisions regarding the implementation of the product in their business?",
        img: "",
        altSwe: "Beskrivning på bilden",
        altEng: "Description of the image",
      },
      textsection4: {
        headlineSwe: "Insamlingen av insikter",
        textSwe:
          "Alla intervjuer dokumenterades och sammanställdes i en fil, som överfördes till en tabell i Miro. Det tydliggjordes vilka deltagare som lyckades med sina uppgifter och vilka som inte gjorde det. Jag grupperade liknande anteckningar, tog bort dubbletter och sammanställde allt i en behovskarta för att visualisera resultaten samt skapade personas. Därefter presenterades resultaten för produktägaren.",
        headlineEng: "Collection of Insights",
        textEng:
          "All interviews were documented and compiled into a file, which was transferred to a table in Miro. It was clarified which participants succeeded in their tasks and which did not. I grouped similar notes, removed duplicates, and compiled everything into a needs map to visualize the results and created personas. The results were then presented to the product owner.",
        img: "",
        altSwe: "Beskrivning på bilden",
        altEng: "Description of the image",
      },
      textsection5: {
        headlineSwe: "Nya Insikter som framkom från användartesterna",
        textSwe:
          "Företagsanvändare hade problem med att identifiera vilken sida de var på och vilken de hade besökt tidigare. De stötte på svårigheter med att utföra uppgifterna på grund av överflödig och överväldigande text, samt oväntad information som dök upp på fel sidor. Samtidigt fick webbplatsen positiv feedback för sitt professionella utseende och de inbjudande bilderna på människor.",
        headlineEng: "New Insights Gained from User Testing",
        textEng:
          "Corporate users had difficulty identifying which page they were on and which they had previously visited. They encountered challenges in completing tasks due to excessive and overwhelming text, as well as unexpected information appearing on the wrong pages. At the same time, the website received positive feedback for its professional appearance and the inviting images of people.",
        img: "",
        altSwe: "Beskrivning på bilden",
        altEng: "Description of the image",
      },
      textsection6: {
        headlineSwe: "Utveckling av Ny Struktur och Designförslag",
        textSwe:
          "Efter användartester och intervjuer utvecklades en ny struktur som fick feedback från projektägaren. En uppdaterad version har nu tagits fram för implementering. Jag skapar designförslag och ett designsystem för att förbättra användarvänligheten. Uppgifterna dokumenteras som user stories i Trello, där både nuvarande och ny design presenteras för att underlätta för utvecklare och produktägare. Därefter genomförs användartester för att säkerställa att strukturen och designen förstås, och justeringar görs vid behov.",
        headlineEng: "Development of New Structure and Design Proposals",
        textEng:
          "After user testing and interviews, a new structure was developed that received feedback from the project owner. An updated version has now been prepared for implementation. I am creating design proposals and a design system to enhance usability. The tasks are documented as user stories in Trello, where both the current and new designs are presented to facilitate the work of developers and the product owner. User testing will then be conducted to ensure that the structure and design are understood, with adjustments made as needed.",
        img: "",
        altSwe: "Beskrivning på bilden",
        altEng: "Description of the image",
      },
    },

    content: {
      id: 2,
      textsection: {
        headlineSwe: "",
        textSwe: "Minska behovet av supportsamtal genom att ta reda på var användare fastnar i gränssnittet och vilka aspekter de har svårt att förstå. Analysera hur användare navigerar på Loopelis webbplatser för att förstå deras beteenden och hitta specifika områden som kan förbättras i navigeringen. Justera innehållet och designen på webbplatsen för att bättre möta målgruppens behov och skapa en mer relevant plattform.Gör det lättare för användare att skaffa Loopeli- appen på webbplatsen baserat på insikter från användarundersökningar.",
        headlineEng: "",
        textEng: "Reduce the need for support calls by identifying where users get stuck in the interface and which aspects they find difficult to understand. Analyze how users navigate Loopeli's websites to understand their behaviors and identify specific areas that can be improved in navigation. Adjust the content and design of the website to better meet the needs of the target audience and create a more relevant platform. Make it easier for users to obtain the Loopeli app on the website based on insights from user research."

      },
      textsection: {
        headlineSwe: "Uppdrag",
        textSwe: "Jag blev anlitad av Loopeli för att optimera webbplatsens struktur och anpassa den efter deras målgrupp. Mitt fokus var att få en djupare förståelse för hur användarna interagerar med webbplatsen, hur de navigerar för att hitta information, samt att samla in deras tankar och åsikter. Genom att utforska användarupplevelsen när de inleder sin resa med Loopeli strävade jag efter att identifiera förbättringsområden."
        ,
        headlineEng: "",
        textEng: "",

      },

    },

    content4: {
      id: 4,
      textsection1: {
        headlineSwe: "Soppkök Uppsala",
        textSwe: "Soppkökets mål var att det skulle vara en mötesplats för människor som annars inte skulle träffas och ta bort sina eventuella fördomar. Soppköken är en politisk aktion för att lyfta frågan om hemlösas situation, en fråga som annars inte ges särskilt mycket utrymme i samhällsdebatten. Därför var Soppköken endast till för att organisera enstaka möten med målet att belysa problematiken kring hemlösheten och skulle inte vara ett permanent soppkök, då det finns andra institutioner som gör detta med mer resurser och oftare.",
        headlineEng: "Uppsala Soup Kitchen",
        textEng: "The goal of the soup kitchens was to create a passing place for people who would’ve never met otherwise and to remove prejudices. The soup kitchens were a place to discuss the situation for the homeless of Uppsala. The goal of the soup kitchens was to highlight the problem of homelessness.",

      },
      textsection2: {
        headlineSwe: "Erfarenheter från Soppkök Uppsala",
        textSwe: "Vi var sex personer som startade Soppkök Uppsala och inför soppköken var det mycket som behövde planeras, som att ha möten med volontärer och söka tillstånd, hålla i klädinsamlingar och klädförvaring, transportera bort saker samt ha kontakt med media. Jag hade ansvar för matbutiker, uthyrningsfirmor och privatpersoner som lånade ut utrustning. Jag designade även Soppkökets nya logga och flera affischer, jag höll i klädinsamlingar och ordnade transport med bil och flak. Via sociala medier och engagemang skapades uppmärksamhet vilket ledde till att många kom och gjorde allt från att lämna kläder, hygienprodukter och frukt, till att laga mat och klippa hår. Under soppköken delades det ut kläder, smörgåsar, kaffe och soppa till behövande. Många stannade kvar länge för att samtala och för den goda stämningen. Det jag minns mest från vårt första soppkök var att vi kände mycket glädje från alla människor som besökte soppköket och att det blev väldigt lyckat. Vi fick fler personer att bli intresserade av att planera soppköket. Efter att ha varit aktiv i Soppkök Uppsala under ett år kände jag att det var dags för andra att ta över. Soppkök i alla städer är nu tyvärr nedlagda och Soppkök Uppsala varade mellan åren 2013-2015.",
        headlineEng: "Experiences from Uppsala Soup Kitchen",
        textEng: "In the beginning, we were six people planning everything together and we had clothing collections and clothing storage, transporting things away and also had contact with the media. My responsibilities were to have contact with supermarkets, tent rental, and private individuals who lent us equipment. I designed the soup kitchen's logotype, several posters and clothing collections, and organized transport by car and flatbed. During the soup kitchen, clothes and food were distributed to people who needed it. Many of the people were staying and talking. Thanks to social media, we got some big attention and commitment was created and many private individuals came to leave clothes, fruit, food, and some people even got haircuts. What I remember most from my first soup kitchens was that we felt so much joy from all the people who came and the soup kitchens were very successful. After the first soup kitchen, we got more volunteers which made everything more interesting to plan. The soup kitchens have taught me a lot about planning events and convincing companies to sponsor us. After having been active in soup kitchen Uppsala for a year, I felt it was time for others to take over. Soup kitchens in all the cities it was active in are now discontinued, and soup kitchen Uppsala lasted between the years 2013-2015.",

      },
    },
  }]




  const { id } = useParams();
  const { language } = useLanguage();
const parsedId = parseInt(id, 10);


const allContents = contentData.flatMap(item => Object.values(item));

console.log(allContents ,"parsedId " );

/*const matchingContent = allContents&&allContents.filter( content => { console.log(content.id,content.id === parsedId)})
*/
/*
const matchingContent2 = allContents.filter(content => content.id === parsedId)
console.log(matchingContent2, "svar");

/*data2.map((item, index) => (
  <React.Fragment key={index}>
    {Object.values(item).map((content1Item, index1) => (
      // Directly map over content1Item without additional divs
      <React.Fragment key={index1}>
        {Object.values(content1Item).map((content1Item, index2) => (
          <React.Fragment key={index2}>

          </React.Fragment>
        ))}
      </React.Fragment>
    ))}
  </React.Fragment>
))*//*
console.log(matchingContent2.content, "2svar");

return (
  <div className="main-content">
    <HeroSection />



      <section className="case_content_main" key={index}>
        {console.log(item, index, "hund1")}
        {Object.values(item).map((content1Item, index1) => (

          <React.Fragment key={index1}>
            {console.log(content1Item, index, "maj2")}
            {index % 2 === 0 ? (
              <>
                <div className="case_content">
                  <h2 className="section-title-work">
                    {language === "sv" ? content1Item : content1Item}
                  </h2>
                  <p className="bodytext">
                    {language === "sv" ? content1Item.textSwe : item.textEng}
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
                    {language === "sv" ? content1Item.headlineSwe : content1Item.headlineEng}
                  </h2>
                  <p className="bodytext">
                    {language === "sv" ? content1Item.textSwe : content1Item.textEng}
                  </p>
                </div>
              </>
            )}
          </React.Fragment>
        ))}


      </section>
    ))

    }
  </div>
);
}

export default Cases;

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

