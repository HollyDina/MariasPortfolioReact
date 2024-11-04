
import { Routes, Route, Link, useParams } from "react-router-dom";
import Contactpage from '../../Page/Contactpage';
import Aboutpage from '../../Page/Aboutpage';
import Homepage from '../../Page/Homepage';
import Casepage from '../../Page/Casepage';
import Projectpage from '../../Page/Projectpage';
import Cases from '../../Page/Cases';
import Menu from './Menu';
import { PageLayout } from '../PageLayout';
import { LanguageProvider } from "../LanguageContext";

function MainMenu() {
 /* textsection7: {
    headlineSwe: "Arbetssättet",
    textSwe:
      "Jag har haft diskussioner med produktägaren angående min önskade arbetsmetod, men av olika anledningar föredrar produktägaren att hålla fast vid deras egna arbetsmetod, som de anser passar bäst för deras behov. Normalt sett skulle jag ha designat olika förslag för webbplatsens utseende och därefter diskuterat med produktägaren, innan vi överlämnade dem till utvecklarna. På det sättet skulle vi spara både tid och pengar, samtidigt som vi skulle ha en effektivare arbetsprocess. Det skulle också minimera behovet av att göra om saker och ting på grund av bristande lösningar. Jag kommer fortfarande att ge olika förslag på hur man kan lösa eventuella problem på webbplatsen när användare börjar använda tjänsten, för att minska antalet supportsamtal.",
    headlineEng: "The way of working",
    textEng:
      " I have discussed with the product owner about how I would like to work, but for various reasons, the product owner prefers to work their way as it suits them best. Normally, I would have designed various proposals for how the website should look and then discussed them with the product owner before handing them over to the developers. This way, we would save time and money and have a more efficient working process. It would also minimize the need to redo things due to insufficient solutions. I will still provide various proposals on how to solve the problems on the website when users start using the service, to reduce the number of support calls. The purpose of user testing is to gain insight into how users interact/navigate through the websites and to truly identify usability issues, understand user needs, and improve the user experience through optimization of the website's structure and design. We also assessed the overall impression of Loopeli as a company among users to strengthen the brand's image and identify areas for improvement.",
    image1: "Frame_1944.png",
    altSwe: "Beskrivning på bilden",
    altEng: "Description of the images",
    imageDescriptionSwe: "Bildbeskrivning",
    imageDescriptionEng: "Bildbeskrivning",
  },*/

  const data = [
    {
      content1: {
        id: 1,
        intro: {
          headlineMainSwe: "Uppdraget på Loopeli:s företagssida",
          headlineRoleSwe: "Roll",
          textRoleSwe: "Ux-designer",
          headlinMainEng: "Assignment on the Loopeli company page",
          headlineRoleEng: "Role",
          textRoleEng: "Ux-designer",
          headlinetoolsSwe: "Verktyg & Metoder",
          textToolsSwe1: "Miro",
          textToolsSwe2: "Personas",
          textToolsSwe3: "Kvalitativ metod",
          textToolsSwe4: "Behovskarta",
          textToolsSwe5: "Affinity Diagramming",
          headlineToolsEng: "Tools & Methods",
          textToolsEng1: "Miro",
          textToolsEng2: "Personas",
          textToolsEng3: "Qualitative method",
          textToolsEng4: "Behovskarta",
          textToolsEng5: "Affinity Diagramming",
          image1: "Frame_1944.png",
          altSwe: "Loopeli företags logotyp",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },

        textsection1: {
          headlineSwe: "Uppdraget på loopeli:s företagssida",
          textSwe:
            "Jag fick i uppdrag av Loopeli att förbättra strukturen på deras webbplats för att göra den mer användarvänlig för företagsanvändare. Målet var att underlätta för dem att snabbt hitta relevant information och fatta beslut om att integrera Loopeli i sin verksamhet. Genom att analysera hur företag söker efter välfärds-hjälpmedel och användarnas feedback på appen identifierade jag förbättringsmöjligheter. Dessa insikter användes för att förbättra användarupplevelsen och göra det lättare för företag att köpa och använda Loopeli.",
          headlineEng: "Assignment on the Loopeli company",
          textEng: "I was assigned by Loopeli to improve the structure of their website in order to make it more user-friendly for business users. The goal was to make it easier for them to quickly find relevant information and make informed decisions about integrating Loopeli into their operations. By analyzing how companies search for welfare aids and gathering user feedback on the app, I identified areas for improvement. These insights were used to enhance the user experience, making it simpler for businesses to purchase and use Loopeli.",
          image1: "microsoft-365-FHhbHW4vFxc-unsplash.jpg",
          altSwe: "Beskrivning på bilden",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },
        textsection2: {
          headlineSwe: "Research",
          textSwe:
            "Jag genomförde en UX-review av webbplatsen för att identifiera gränssnittsproblem och jämföra med konkurrenter. Utvärderingen visade att användare hade svårt att navigera och att det fanns överflödig text som inte effektivt tjänade sitt syfte.",
          headlineEng: "Assignment on the Loopeli company",
          textEng:
            "För att utforska användarnas tankar och beteenden använde jag semistrukturerade intervjuer och användartester. Denna metod gav en djupare förståelse för deras behov och bekräftade mina hypoteser från utvärderingen, samt identifierade ytterligare förbättringsområden för webbplatsen.",
          image1: "ResearchLooplie.png",
          altSwe: "Beskrivning på bilden",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },

        textsection3: {
          headlineSwe: "Användartesterna",
          textSwe1:
            "Jag beslutade mig för att tillämpa `tänka högt`-metoden på menyn för att observera användarnas förväntningar. Det blev tydligt att meny-namnen var vagt formulerade och kunde tolkas på många olika sätt.",
          textSwe2:"Jag formulerade två frågor som riktlinjer för användartester och intervjuer för att säkerställa tydlig inriktning och undvika avvikelser från det centrala ämnet.",
          textSwe3:"Fråga 1: Vad vill jag veta från användartesterna och intervjuerna? Svar 1:** Vilken information behöver användarna för att besluta om att implementera produkten? Finns den tillgänglig, eller saknas viktig information? Vi vill observera hur användarna navigerar på olika sidor för att söka information om Loopeli.",
          textSwe4:"Fråga 2: Vad vill jag uppnå med användar-testerna och intervjuerna? Svar 2:** Hur kan vi förbättra användarnas möjlighet att hitta information på webbplatsen? Kan vi underlätta snabbare beslut om produktens implementering i deras verksamhet?",
          textSwe5:"Innan intervjuerna genomförde jag en testintervju för att se om förändringar behövde göras i frågorna.Deltagaren hade svårt att tänka sig in i case-scenarion, så jag justerade frågorna. Frågan `Vilken typ av information behöver användarna för att besluta om att implementera produkten?`ändrades till` Vilka egenskaper ska produkten ha för att passa er verksamhet och målgrupp?` och `Vad behöver du för information för att köpa in produkten?`" ,
          texSwe6:"Användarna fick sedan leta efter egenskaperna på webbplatsen, men hade svårt att komma ihåg dem, så svaren skrevs ner. Frågorna visade sig vara avgörande för att förstå vad användarna söker och om informationen på webbplatsen var tillräcklig, även om de tog längre tid att genomföra.",
          headlineEng: "User Testing",
          textEng1:"I decided to apply the ´think aloud` method on the menu to observe users' expectations. It quickly became evident that the menu names were vaguely formulated and could be interpreted in several ways.", 
          textEng2:"I developed two questions as guidelines for user tests and interviews to ensure a clear focus and avoid deviations from the central topic.",
          textEng3: "Question 1: What do I want to know from the user tests and interviews? Answer 1:** What information do users need when deciding on implementing the product? Is it available, or is essential information missing? We want to observe how users navigate various pages to seek information about Loopeli." ,
          textEng4: "Question 2: What do I aim to achieve with the user tests and interviews? **Answer 2:** How can we improve users' ability to find information on the website? Can we facilitate quicker decisions regarding product implementation in their operations?",
          textEng5:"Before the interviews, I conducted a test interview to see if any adjustments were needed in the questions. The participants had difficulty imagining themselves in case scenarios, so I modified the questions. The question ´What type of information do users need when deciding on implementing the product?´ was changed to ´What features should the product have to fit your business and target audience?´ and ´What information do you need to consider purchasing the product?´",
         textEng6:"Users were then asked to look for the features on the website but found it challenging to remember them, so their answers were recorded. The questions proved essential to understanding what users are searching for and whether the information on the website was sufficient, even though the process took more time to conduct.",
          image1: "work1.jpg",
          altSwe: "Beskrivning på bilden",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },
        textsection4: {
          headlineSwe: "Insamlingen av insikter",
          textSwe:
            "Alla intervjuer dokumenterades och sammanställdes i en fil, som överfördes till en tabell i Miro. Det tydliggjordes vilka deltagare som lyckades med sina uppgifter och vilka som inte gjorde det. Jag grupperade liknande anteckningar, tog bort dubbletter och sammanställde allt i en behovskarta för att visualisera resultaten samt skapade personas. Därefter presenterades resultaten för produktägaren. ",
          headlineEng: "In the Collection of Insights",
          textEng:
            "All interviews were documented and compiled into a file, which was transferred to a table in Miro. It was clarified which participants succeeded in their tasks and which did not. I grouped similar notes, removed duplicates, and compiled everything into a needs map to visualize the results and created personas. The results were then presented to the product owner.",
          image1: "LoopeliföretagSamlingavInsikter.png",
          altSwe: "Beskrivning på bilden",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },
        textsection5: {
          headlineSwe: "Nya Insikter som framkom från användar-testerna",
          textSwe:
            "Företagsanvändare hade problem med att identifiera vilken sida de var på och vilken de hade besökt tidigare. De stötte på svårigheter med att utföra uppgifterna på grund av överflödig och överväldigande text, samt oväntad information som dök upp på fel sidor. Samtidigt fick webbplatsen positiv feedback för sitt professionella utseende och de inbjudande bilderna på människor",
          headlineEng: "New Insights Gained from User Testing ",
          textEng:
            "Corporate users had difficulty identifying which page they were on and which they had previously visited. They encountered challenges in completing tasks due to excessive and overwhelming text, as well as unexpected information appearing on the wrong pages. At the same time, the website received positive feedback for its professional appearance and the inviting images of people.",
          image1: "Frame_1944.png",
          altSwe: "Beskrivning på bilden",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },
        textsection6: {
          headlineSwe: "Utveckling av Ny Struktur och Designförslag",
          textSwe:
            "Efter användartester och intervjuer utvecklades en ny struktur som fick feedback från projektägaren. En uppdaterad version har nu tagits fram för implementering. Jag skapar designförslag och ett designsystem för att förbättra användarvänligheten. Uppgifterna dokumenteras som user stories i Miro, där både nuvarande och ny design presenteras för att underlätta för utvecklare och produktägare. Därefter genomförs användartester för att säkerställa att strukturen och designen förstås, och justeringar görs vid behov. ",
          headlineEng: "Utveckling av Ny Struktur och Designförslag",
          textEng:
            "After user testing and interviews, a new structure was developed that received feedback from the project owner. An updated version has now been prepared for implementation. I am creating design proposals and a design system to enhance usability. The tasks are documented as user stories in Miro, where both the current and new designs are presented to facilitate the work of developers and the product owner. User testing will then be conducted to ensure that the structure and design are understood, with adjustments made as needed.",
          image1: "struktur.png",
          altSwe: "Nya strukturen på webbplatsen",
          altEng: "Description of the images",
          imageDescriptionSwe: "Nya strukturen på webbplatsen",
          imageDescriptionEng: "Bildbeskrivning",
        },
       
      },
      content2: {
        id: 2,
        intro: {
          headlineMainSwe: "Loopeli:s privatsida",
          headlineRoleSwe: "Roll",
          textRoleSwe: "Ux-designer",
          headlinMainEng: "Loopeli private pag",
          headlineRoleEng: "Role",
          textRoleEng: "Ux-designer",
          headlinetoolsSwe: "Verktyg & Metoder",
          textToolsSwe1: "Miro",
          textToolsSwe2: "Personas",
          textToolsSwe3: "Kvalitativ metod",
          textToolsSwe4: "Behovskarta",
          textToolsSwe5: "Affinity Diagramming",
          headlineToolsEng: "Tools & Methods",
          textToolsEng1: "Miro",
          textToolsEng2: "Personas",
          textToolsEng3: "Qualitative method",
          textToolsEng4: "Behovskarta",
          textToolsEng5: "Affinity Diagramming",
          image1: "Loopeligreen.png",
          altSwe: "Beskrivning på bilden",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },
        textsection1: {
          headlineSwe: "Om Loopeli",
          textSwe:
            " Loopeli är en lättanvänd kommunikationstjänst/app riktad till grupper som har svårt att använda vanliga kommunikationsverktyg, som Facebook, Skype eller Facetime. Idén till Loopeli föddes ur behovet av enkel kommunikation efter att en familjemedlem drabbats av stroke, då det saknades en tjänst som kunde underlätta kontakt utan fysiska besök. Företaget grundades 2019, men med relanseringen i SVT:s Draknästet i september 2021 fick Loopeli möjlighet att växa och anställa personal. ",
          headlineEng: "Assignment",
          textEng:
            " Loopeli is an easy-to-use communication service/app designed for groups who find common communication tools like Facebook, Skype, or Facetime challenging to use. The idea for Loopeli emerged from the need for simple communication after a family member experienced a stroke, as there was no service available to facilitate contact without physical visits. The company was founded in 2019, but with its relaunch on SVT’s(swedish television) Draknästet in September 2021, Loopeli gained the opportunity to expand and hire staff.",
          image1: "Draknästet.png",
          altSwe: "Beskrivning på bilden",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },
        textsection2: {
          headlineSwe: "Syftet",
          textSwe:
            "Syftet med användartester är att få insikt om hur användare interagerar/ navigerar genom webbplatserna och för att verkligen kunna identifiera användbarhetsproblem, förstå användarnas behov och förbättra användarupplevelsen där med optimering av webbplatsens struktur och design. Vi bedömde också det övergripande intrycket av Loopeli som företag bland användare för att stärka varumärkets koppling och identifiera förbättringsområden.",
          headlineEng: "The purpose ",
          textEng:
            ":The purpose of user testing is to gain insights into how users interact with/navigate through the websites and to truly identify usability issues, understand user needs, and enhance the user experience by optimizing the website's structure and design. We also assessed the overall impression of Loopeli as a company among users to strengthen brand connection and identify areas for improvement",
          image1: "Frame_1944.png",
          altSwe: "Beskrivning på bilden",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },
        textsection3: {
          headlineSwe: "Mål",
          textSwe:
            "Minska behovet av supportsamtal genom att ta reda på var användare fastnar i gränssnittet och vilka aspekter de har svårt att förstå.Analysera hur användare navigerar på Loopelis webbplatser för att förstå deras beteenden och hitta specifika områden som kan förbättras i navigeringen. Justera innehållet och designen på webbplatsen för att bättre möta målgruppens behov och skapa en mer relevant plattform.Gör det lättare för användare att skaffa Loopeli-appen på webbplatsen baserat på insikter från användarundersökningar.",
          headlineEng: "Gold",
          textEng:
            "Reduce the need for support calls by identifying where users get stuck in the interface and which aspects they find difficult to understand. Analyze how users navigate Loopeli's websites to understand their behaviors and identify specific areas that can be improved in navigation. Adjust the content and design of the website to better meet the needs of the target audience and create a more relevant platform. Make it easier for users to obtain the Loopeli app on the website based on insights from user research.",
          image1: "sätta-mål-a-till-b-large 1.svg",
          altSwe: "Beskrivning på bilden",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },
        textsection4: {
          headlineSwe: "Granskning av Webbplatsen",
          textSwe:
            "Jag inledde genom att granska webbplatsen med hjälp av Miro för att identifiera potentiella problem och skapa hypoteser om eventuella brister, såsom gränssnitts- och navigation utmaningar. Även få en överblick av webbplatsens dåvarande struktur. Därefter hade jag kontakt med supporten för att diskutera vilka problem användarna har stött på. ",
          headlineEng: "Review of the Website",
          textEng:
            ":I started by reviewing the website using Miro to identify potential issues and create hypotheses about any shortcomings, such as interface and navigation challenges. I also aimed to gain an overview of the website's current structure. After that, I contacted support to discuss the problems users have encountered",
          image1: "loopeliwebbplats.jpg",
          altSwe: "Beskrivning på bilden",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },
        textsection5: {
          headlineSwe: "Användar-testerna",
          textSwe:
            "Uppgift 1: Du överväger att använda Loopeli och ska samla information för att underlätta ditt första användande av appen. Detta visar vilken typ av information användare söker när de först börjar använda Loopeli-appen. Resultaten visade att användarna hade problem med gränssnittet och behövde hjälp för att komma vidare. Efter en testintervju ändrade jag uppgiftsordningen och gjorde “tänka högt”-metoden för menyn som första uppgiften, då användarna försökte koppla till tidigare webbplatsupplevelser. På grund av svårigheter att rekrytera användare under sommaren, använde jag familjemedlemmar och kollegor i samma ålder som målgruppen.",
          headlineEng: "User Tests",
          textEng:
            "Task 1: You are considering using Loopeli and need to gather information to facilitate your first use of the app. This shows what type of information users seek when they first start using the Loopeli app. The results indicated that users encountered problems with the interface and needed help to move forward. After a test interview, I changed the task order and made the “think-aloud”  method for the menu the first task, as users were trying to relate to their previous website experiences. Due to difficulties in recruiting users during the summer, I used family members and colleagues of the same age as the target group.",
          image1: "work1.jpg",
          altSwe: "Beskrivning på bilden",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },
        textsection6: {
          headlineSwe: "Insamling av insikter och lösningsförslag",
          textSwe:
            "Efter intervjun sammanställdes resultaten i ett dokument och på en Miro-tavla för att visualisera behovskartan samt skapa två personas: en för äldre användare och en för yngre. De äldre användarna scrollade inte för att leta efter information, medan de yngre var mer aktiva i sitt sökande. Många användare kände sig osäkra på vilken sida de befann sig på, och texterna upplevdes som för långa, vilket ledde till att de missade viktiga instruktioner. När de väl hade skapat ett konto visste de inte hur de skulle gå vidare",
          headlineEng: " Collection of Insights and Proposed Solutions",
          textEng:
            "After the interview, the results were compiled into a document and on a Miro board to visualize the need map and create two personas: one for older users and one for younger users. Older users did not scroll to find information, while younger users were more active in their search. Many users felt unsure about which page they were on, and the texts were perceived as too long, leading them to miss important instructions. Once they had created an account, they did not know how to proceed",
          image1: "Skärmbild 2023-08-25 191050.png",
          altSwe: "Beskrivning på bilden",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },
      },

      content3: {
        id: 3,
        intro: {
          headlineMainSwe: "Examensarbete",
          headlineRoleSwe: "Roll",
          textRoleSwe: "Ux-designer",
          headlinMainEng: "Thesis",
          headlineRoleEng: "Role",
          textRoleEng: "Ux-designer",
          headlinetoolsSwe: "Verktyg & Metoder",
          textToolsSwe1: "Miro",
          textToolsSwe2: "Personas",
          textToolsSwe3: "Kvalitativ metod",
          textToolsSwe4: "Behovskarta",
          textToolsSwe5: "Affinity Diagramming",
          textToolsSwe6: "Trello",
          headlineToolsEng: "Tools & Methods",
          textToolsEng1: "Miro",
          textToolsEng2: "Personas",
          textToolsEng3: "Qualitative method",
          textToolsEng4: "Behovskarta",
          textToolsEng5: "Affinity Diagramming",
          textToolsEng6: "Trello",
          image1: "spel2.png",
          altSwe: "I spelets huvudvy är de centrala karaktärerna en bäver och en röd spelautomat.",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },
        textsection1: {
          headlineSwe: "Bakgrund",
          textSwe:
            "Flertalet läkare och hälsoinstitut rekommenderar att barn under sju år bör använda digitala enheter högst en timme per dag. Det är ofta svårt att få barnen att slita sig från skärmen, vilket kan leda till konflikter, eftersom de vill ha mer av det roliga. Samtidigt finns mycket lärorikt på surfplattan och telefonen, och barn kan hamna utanför sociala sammanhang om de inte får skärmtid. Det pågår en ständig debatt om hur mycket skärmtid barn bör ha. Jag ville starta ett projekt för att bli mer säker på design thinking-processen, inspirerad av en väns problem med att få sina barn att slita sig från skärmen.",
          headlineEng: "Background",
          textEng:
            "Several doctors and health institutions recommend that children under seven years old should use digital devices for no more than one hour per day. It can often be difficult to get children to disengage from the screen, leading to conflicts, as they want more of the fun. At the same time, there is a lot of educational content available on tablets and phones, and children may miss out on social interactions if they do not get screen time. There is an ongoing debate about how much screen time children should have. I wanted to start a project to become more confident in the design thinking process, inspired by a friend's struggle to get their children to disconnect from the screen.",
          image1: "Barnkollarpåskärm.jpg",
          altSwe: "Beskrivning på bilden",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },
        textsection2: {
          headlineSwe: "Syfte",
          textSwe:
            "Att förstå hur föräldrar hanterar och undviker bråk med sina barn är centralt för projektet. Jag vill utmanas och lära mig mer om ´Design Thinking Process` samt få erfarenhet av att intervjua andra och få djupare insikter som UX-designer. Det är också viktigt att förstå vad barn gör när de sitter framför digitala verktyg och deras behov av skärmtid. ",
          headlineEng: "Purpose",
          textEng:
            " Understanding how parents manage and avoid conflicts with their children is central to the project. I want to challenge myself and learn more about the  ´DDesign Thinking Process´ , as well as gain experience in interviewing others and acquiring deeper insights as a UX designer. It is also important to understand what children do when they are in front of digital devices and their needs for screen time.",
          image1: "Helping-children-calm-down-narrow.jpg",
          altSwe: "Beskrivning på bilden",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },

        textsection3: {
          headlineSwe: "Målet",
          textSwe:
            "Målet är att föräldrar ska slippa bråka om skärmtiden och att jag ska få en djupare förståelse för `Design Thinking Process` för att bli en bättre UX-designer. Jag vill lära mig vad jag bör tänka på när jag intervjuar användare för att samla nya insikter om målgruppens behov och mål, vilket ska leda till att jag kan möta deras behov med en klickbar prototyp.",
          headlineEng: "Goal",
          textEng:
            "The goal is for parents to avoid arguments about screen time and for me to gain a deeper understanding of the `Design Thinking Process` to become a better UX designer. I want to learn what to consider when interviewing users to gather new insights about the target groups' needs and goals, which will enable me to meet their needs with a clickable prototype.",
          image1: "designthinkingprocess.png",
          altSwe: "Beskrivning på bilden",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },
        textsection4: {
          headlineSwe: "Research",
          textSwe:
            "Jag fick tips från en UX-designer som arbetat med Bolibompa-appen om att arbeta med barn. Jag läste artiklar om skärmtid och forskning om att barn kommunicerar bättre med bilder. Sedan skrev jag syftet med intervjuerna och vad jag ville uppnå. Jag valde semi-strukturerade kvalitativa intervjuer för att kunna ställa följdfrågor och få djupare insikter. Jag intervjuade föräldrar och barn i en lekpark och en fotbollscup, där jag bad om föräldrarnas tillåtelse att intervjua barnen. Jag informerade om deras rättigheter och att de skulle vara anonyma, så inga personuppgifter behövdes. Jag använde bilder under intervjuerna, men i lekparken blev det stökigt, så jag visade bilderna medan vi pratade. Under intervjuprocessen justerade jag frågorna vid behov och renskrev intervjuerna i dokument för att ha allt färskt i minnet.",
          headlineEng: "Research",
          textEng:
            "I received advice from a UX designer who had worked on the Bolibompa app about engaging with children. I read articles about screen time and research indicating that children communicate better with images. Then, I wrote the purpose of the interviews and what I wanted to achieve. I chose semi-structured qualitative interviews to allow for follow-up questions and to gain deeper insights. I interviewed parents and children in a playground and at a soccer tournament, asking for the parents' permission to interview the children. I informed them about their rights and ensured that they would remain anonymous, so no personal information was required. I used images during the interviews, but it became chaotic in the playground, so I showed the images while we talked. During the interview process, I adjusted the questions as needed and transcribed the interviews into documents to keep everything fresh in my memory.",
          image1: "Frame_1944.png",
          altSwe: "Beskrivning på bilden",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",

        },
        textsection5: {
          headlineSwe: "Insamling av intervjuerna",
          textSwe:
            " Efter intervjuerna samlade jag svaren i ett dokument och överförde dem till Miro på post-it-lappar. Jag numrerade intervjuerna i dokumentet och grupperade dem med samma siffra på post-it-lapparna för att underlätta spårning till de ursprungliga intervjuerna. Jag grupperade sedan lapparna för att ta bort dubbletter och skapade tre behovskartor: två för barnen (en om deras intressen och en om deras behov) och en för föräldrarna.",
          headlineEng: "Purpose",
          textEng: "After the interviews, I compiled the responses in a document and transferred them to Miro on post-it notes. I numbered the interviews in the document and used the same numbers on the post-it notes to facilitate tracking back to the original interviews.I then grouped the notes to remove duplicates and created three needs maps: two for the children (one focused on their interests and one on their needs) and one for the parents.",
          image1: "Skärmbild 2023-08-22 161713.jpg",
          altSwe: "Beskrivning på bilden",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },
        textsection6: {
          headlineSwe: "Behovskarta",
          textSwe:
            "I renskrivnings-dokumentet överförde jag intervjusvaren till tre behovskartor: två för barnen och en för föräldrarna. Barnen fick en karta om deras intressen och en annan om deras behov.",
          headlineEng: "Purpose",
          textEng: "In the final document, I transferred the interview responses to three needs maps: two for the children and one for the parents. The children’s maps focused on their interests and their needs. ",
          image1: "behovkartaEx.jpg",
          altSwe: "Beskrivning på bilden",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },
        textsection7: {
          headlineSwe:
            "Här är några av de viktigaste behoven som överfördes till prototypen",
          textSwe:
            "- Barnet behöver veta vad som ska göras efter speltiden och vill höra orsaken.- Barnet behöver förvarnas om att speltiden snart är slut.- Barnet vill vara med och bestämma aktiviteter efter speltiden.- Barnet behöver fasta regler i vardagen och kan glömma iPad-enheten när hen är aktiv och stimulerad med andra aktiviteter.",
          headlineEng: "Here are some of the key needs that were integrated into the prototype",
          textEng: "The child needs to know what to do after playtime and wants to understand the reason.The child needs a warning that playtime is nearly over.The child wants to participate in choosing activities after playtime.The child needs consistent rules in daily life and can forget about the iPad when engaged and stimulated by other activities.",
          image1: "Frame 53.png",
          altSwe: "Beskrivning på bilden",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },
        textsection8: {
          headlineSwe: "Föräldars beteendertype",
          textSwe:
            "Alla föräldrar delar tre gemensamma beteenden: de hittar på fler aktiviteter, avleder med aktiviteter och försöker undvika bråk.",
            headlineSwe2: "Freestyle-föräldern",
            textSwe2: "säger till barnet att avsluta skärmtiden omedelbart och begränsar inte aktivt skärmtiden, vilket ofta leder till bråk vid avslut. De är mer inställda på att det blir bråk när barnet ska avsluta skärmtiden.",
            headlineSwe3:"Planerar-föräldern",
            textSwe3: "begränsar skärmtiden aktivt med hjälpmedel som appar eller alarmklockor som förvarnar när tiden snart är slut.",
            headlineSwe3:"Rutin-föräldern ",
            textSwe3: " har fasta regler för när barnet får använda iPad, TV eller dator och förklarar varför skärmtiden måste avslutas. De begränsar inte aktivt skärmtiden, utan barnet har rutiner som fungerar som delmål, som att titta på skärmen tills maten är klar eller borsta tänderna. Rutin-föräldern förvarnar barnet när skärmtiden snart är slut och låter dem titta klart beroende på hur långt det är kvar av programmet eller spelet",
            headlineSwe3:"Skiljer barnets beteendetyper",
            textSwe3: "Barnets beteendetyper skiljer sig åt beroende på deras intresse för iPad, TV eller dator, vilket påverkas av hur många andra aktiviteter de har. När barnet gör andra aktiviteter glömmer de bort iPaden. En annan skillnad är hur mycket barnet får bestämma själva.",
        
        headlineEng:"Parent Behavior Types",
          textEng: "All parents share three common behaviors: they come up with additional activities, distract with activities, and try to avoid conflict.",
          headlineEng1:"Freestyle Parent*",
          textEng1: "This parent tells the child to end screen time immediately and does not actively limit screen time, which often leads to conflict at the end. They are more resigned to the fact that there will be conflict when the child has to stop screen time",
          headlineEng2:"Planner Parent",
          textEng2: "This parent actively limits screen time using tools like apps or alarms that warn the child when time is nearly up.",
          headlineEng3:"Routine Parent*",
          textEng3: "This parent has set rules for when the child can use an iPad, TV, or computer and explains why screen time must end. They do not actively limit screen time, but the child follows routines that act as benchmarks, such as watching until dinner is ready or brushing teeth. The Routine Parent warns the child when screen time is nearly over and allows them to finish depending on how much time is left in the show or game.",
          headlineEng4:"Differences in Child Behavior Types",
          textEng4: "Children’s behavior types vary based on their interest in iPads, TV, or computers, which is influenced by the number of other activities they have. When the child engages in other activities, they tend to forget about the iPad. Another difference is how much freedom the child has to decide for themselves.",
         
          image1: "Frame 50.png",
          altSwe: "Tre typer av föräldrabeteenden",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },
        textsection9: {
          headlineSwe: "Flödesdiagram",
          textSwe:
            "Jag valde att använda flödesdiagram eftersom jag var osäker på vilka vyer som behövdes i prototypen. Genom att skissa och skapa två olika förslag på flödesdiagram blev det tydligare för mig vilka vyer som krävdes. Slutflödet innebar att barnet skulle hämta biljetter, välja en aktivitet och sedan starta skärmtiden.",
          headlineEng: "Flowchart",
          textEng:
            " I chose to use flowcharts because I was uncertain about which views were needed in the prototype. By sketching and creating two different flowchart proposals, it became clearer to me which views were required. The final flow involved the child retrieving tickets, selecting an activity, and then starting the screen time.",
          image1: "Flöde.jpg",
          altSwe: "Använde flödesdiagram för att klargöra vyer.",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },
        textsection10: {
          headlineSwe: "Program-research",
          textSwe:
            "Jag använde rött i gränssnittet eftersom färgen drar till sig uppmärksamhet och ökar klickfrekvensen. Efter att ha läst om hur färger påverkar beteende, valde jag även könsneutrala färger för hi-fi-prototypen för att tilltala alla.",
          headlineEng: "Program-research",
          textEng:
            " I used red in the interface because the color draws attention and increases click rates. After reading about how colors influence behavior, I also chose gender-neutral colors for the hi-fi prototype to appeal to everyone.",
          image1: "skiss1.png",
         
          altSwe: "Beskrivning på bilden",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },
        textsection11: {
          headlineSwe: "Programideér",
          textSwe:
            "Från datainsamlingen kom jag fram till två programidéer. Den första var att barnet skulle välja en aktivitet för att starta skärmtiden. Den andra innebar att barnet varje vecka fick hämta ut fyra spelbiljetter på 30 minuter vardera, som kunde användas under veckan. Föräldrarna fick bestämma när biljetterna skulle användas, och jag beslutade att slå ihop de båda idéerna.",
          headlineEng: "Program Ideas",
          textEng:
            " From the data collection, I came up with two program ideas. The first was for the child to choose an activity to start screen time. The second involved the child receiving four game tickets each week, each worth 30 minutes, which could be used throughout the week. The parents would decide when the tickets could be used, and I decided to combine both ideas.",
         
          image1: "skiss2.png",
          altSwe: "Beskrivning på bilden",
          altEng: "Description of the images",
          images2: "skiss2.jpg",
          altSwe: "Beskrivning på bilden",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },
        textsection12: {
          headlineSwe: "Användar-testerna",
          textSwe:
            "Jag började med low-fi-skisser och övergick till hi-fi-prototyper för att testa barns reaktioner på färger och rörelse. Det är svårt för barn att föreställa sig appar på papper under användartester, så jag justerade prototypen i realtid. Under testerna upptäckte jag att flera barn aldrig använt en dator, vilket gjorde testerna svåra och skrämmande för dem. På grund av tekniska problem kunde jag inte genomföra fler tester. Totalt gjordes 5 användartester på barn (3-9 år) och 8 på vuxna, då föräldrar var mer datorvana.",
          headlineEng: "The user tests",
          textEng:
            "I started with low-fi sketches and moved on to hi-fi prototypes to test children's reactions to colors and movement. It’s hard for children to imagine apps on paper during user tests, so I made real-time adjustments to the prototype. During the tests, I discovered that several children had never used a computer before, which made the tests difficult and intimidating for them. Due to technical issues, I couldn’t conduct more tests. In total, 5 user tests were conducted with children (ages 3-9) and 8 with adults, as parents were more familiar with using computers.",
          image1: "Frame_1944.png",
          altSwe: "Beskrivning på bilden",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },
        textsection13: {
          headlineSwe: "Slutresultat",
          textSwe:
            "Jag har genomfört det jag planerat och är nöjd med resultatet och mitt arbete. Det finns bara hi-fi-prototyper för desktop, inte mobil, på grund av tidsbrist. Ljud saknades i appen, så jag ersatte det med texter och pratbubblor. Jag är inte helt nöjd med menyn, då användarna hade svårt att navigera. Nästa steg är att förbättra menyn och designa de sista vyerna. Projektet har tagit tid, och i efterhand hade ett mindre projekt varit lättare att hantera ensam.",
          headlineEng: "Final result",
          textEng:
            "I have completed what I planned and am satisfied with the result and my work. There are only hi-fi prototypes for desktop, not mobile, due to time constraints. The app lacked sound, so I replaced it with text and speech bubbles. I'm not completely satisfied with the menu, as users found it difficult to navigate. The next step is to improve the menu and design the final views. The project has taken time, and in hindsight, a smaller project would have been easier to manage on my own.",
          image1: "Frame_1944.png",
          altSwe: "Beskrivning på bilden",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },
      },
   

      content4: {
        id: 4,
        intro: {
          headlineMainSwe: "Chas academy",
          headlineRoleSwe: "Roll",
          textRoleSwe: "Service designer\nUser Research",
          headlinMainEng: "Chas academy",
          headlineRoleEng: "Role",
          textRoleEng: "Service designer\nUser Research",
          headlinetoolsSwe: "Verktyg & Metoder",
          textToolsSwe1: "Business model canvas",
          textToolsSwe2: "Job to be done",
          textToolsSwe3: "Behovsanalys",
          textToolsSwe4: "Kundresekarta",
          HealineToolsEng: "Tools & Methods",
          textToolsEng1: "Business model canva",
          textToolsEng2: "Job to be done",
          textToolsEng3: "Needs analysis",
          textToolsEng4: "Customer journey map",
          image1: "chas-academy-emblem.png",
          altSwe: "Beskrivning på bilden",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },
        textsection1: {
          headlineSwe: "Uppdrag av Chas academy",
          textSwe:
            "I slutet av programmet fick vi i uppgift att undersöka studenternas upplevelse av kursen jag deltog i. Jag intervjuade både nuvarande och tidigare studenter. CHAS Academy planerar att expandera inom UX-området och öka antalet studenter med 30% inom 1-3 år. Deras fokus är att förbättra kundupplevelsen, affärsmodellen och studenternas utvärderingar av programmet. Genom att göra utbildningen mer konkurrenskraftig jämfört med andra liknande skolor kan CHAS Academy sticka ut och stärka sitt varumärke inom utbildningssektorn, för att locka fler studenter.",
          headlineEng: "Mission of Chas Academy",
          textEng:
            "At the end of the program, we were assigned to investigate the students' experience of the course I was attending. I interviewed both current and former students. CHAS Academy plans to expand in the UX field and increase the number of students by 30% within 1-3 years. Their focus is on improving the customer experience, business model, and student evaluations of the program. By making the education more competitive compared to other similar schools, CHAS Academy can stand out and strengthen its brand within the education sector, attracting more students.",
          image1: "chas.jpg",
          altSwe: "Beskrivning på bilden",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },
        textsection2: {
          headlineSwe: "Syfte",
          textSwe:
            "Syftet med denna analys är att identifiera och förbättra kundresan för studenter inom UX-design på CHAS Academy, med målet att öka studenternas tillfredsställelse och samtidigt stärka akademins affärsutveckling. Detta innebär att identifiera utbildningens nuvarande styrkor och svagheter för att utforska hur vi kan förbättra kvaliteten på utbildningen och göra den mer attraktiv för potentiella studenter, samt stå starkare i konkurrensen med liknande utbildningar.Genom att beakta studenternas behov och förväntningar kan CHAS Academy anpassa sin utbildning för att hjälpa studenter att bli aktiva på arbetsmarknaden och skapa en stark koppling mellan utbildningens innehåll och arbetsmarknadens behov.",
          headlineEng: "The purpose",
          textEng:
            "The purpose of this analysis is to identify and improve the customer journey for students in UX design at CHAS Academy, with the aim of increasing student satisfaction while also strengthening the academy’s business development. This involves identifying the current strengths and weaknesses of the program to explore how we can enhance the quality of the education, making it more attractive to potential students, and standing stronger against competition from similar programs.By considering students’ needs and expectations, CHAS Academy can adapt its curriculum to help students become active in the job market and create a strong connection between the program content and the demands of the workforce.",
          image1: "styrkor-svagheter.jpg",
          altSwe: "Beskrivning på bilden",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },
        textsection3: {
          headlineSwe: "Mål",
          textSwe:
            "Förbättra de områden som har störst påverkan på kundnöjdhet och affärsmål. Öka marknadsandelen inom UX-utbildningar.Förbättra kundupplevelsen och affärsmodellen.Stärka CHAS Academys varumärke för att attrahera fler studenter. Öka antalet sökande till utbildningen.Expandera inom UX-området och öka antalet elever med 30% inom 1-3 år.Höja kvaliteten på utbildningen. Skapa en mer attraktiv utbildningsupplevelse som effektivt tillgodoser studenternas behov och förväntningar.",
          headlineEng: "The Goal",
          textEng:
            "Improve the areas that have the greatest impact on customer satisfaction and business goals. Increase market share within UX education.Improve the customer experience and business model. Strengthen CHAS Academy's brand to attract more students. Increase the number of applicants for the program. Expand in the UX field and increase the number of students by 30% within 1-3 years. Enhance the quality of education. Create a more attractive educational experience that effectively meets students' needs and expectations.",
          image1: "Mål2.jpg",
          altSwe: "Beskrivning på bilden",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },

        textsection4: {
          headlineSwe: "Research & analys",
          textSwe:
            "Efter intervjuerna analyserade jag svaren för att hitta samband. Studenterna önskade främst att lära sig UX-design och få kravkompetens. Deras kontext när de började studera varierade, vilket kräver mer data för att identifiera samband.Jag har prioriterat och färgkodat resultaten, där 'Bli antagen' visade sig vara högt prioriterat, vilket har fungerat bra tack vare sen ansökan. Ett mål som CHAS inte levererar på är 'Bli trygg i att bygga prototyper,' då studenterna upplever varierande resultat.De gråa lapparna indikerar mål som behöver mer data för att bedöma CHAS:s prestation. Jag har identifierat utmaningar som studenterna möter samt problematiska områden.",
          headlineEng: "Research & analysis",
          textEng:
            "After the interviews, I analyzed the responses to find correlations. The students primarily wanted to learn UX design and gain competency in requirements analysis. Their context when starting their studies varied, which requires more data to identify patterns.I prioritized and color-coded the results, where 'Being admitted' turned out to be a high priority, which has worked well due to late application options. One goal that CHAS is not delivering on is 'Becoming confident in building prototypes', as students report mixed results.The gray notes indicate goals that need more data to assess CHAS's performance. I have identified challenges that the students face, as well as problematic areas.",
          image1: "Affärsnytta och kommunikation.jpg",
          altSwe: "Analyserade svar för att identifiera samband.",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },
        textsection5: {
          headlineSwe: "Kund-resekartan",
          textSwe:
            "Kundrese-kartan visar de olika faserna i kundresan, som börjar med att man upptäcker UX och finner det intressant. Nästa steg är att undersöka och forska för att hitta rätt skola, följt av ansökan och antagning, innan man påbörjar utbildningen.Fasen ' går i skolan'  delas upp i tre underkategorier: “Innehåll och kurser”, “lärare” samt “kommunikation och socialt”, vilket är viktigt att förstå separat. Dessa faser pågår parallellt, vilket illustreras med en cirkulär pil. Nästa fas praktiken och därefter examinationen, vilket förhoppningsvis leder till ett jobb.I den vänstra kolumnen finns rubriker som beskriver interaktioner, mål, touchpoints (illustrerade med ikoner) samt positiva och negativa tankar från intervjudeltagare. Jag har också skapat en känslokurva som visar vilka faser som varit positiva och vilka som varit mindre bra, avslutat med insikter och möjligheter.",
          headlineEng: "Customer journey map",
          textEng:
            " The customer journey map illustrates the different phases of the customer journey, starting with discovering UX and finding it interesting. The next step is researching and investigating to find the right school, followed by the application and admission process, before starting the program.The phase 'attending school' is divided into three subcategories: 'Content and courses', 'Teachers', and 'Communication and social aspects', which are important to understand separately. These phases run concurrently, represented by a circular arrow. The next phase is the internship, followed by graduation, which will hopefully lead to a job.In the left column, there are headings that describe interactions, goals, touchpoints (illustrated with icons), as well as positive and negative thoughts from the interview participants. I have also created an emotional curve showing which phases were positive and which were less so, concluding with insights and opportunities.",
          image1: "kundresa hela.jpg",
          altSwe: "Kundresan inkluderar faser, mål och insikter.",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },
        textsection6: {
          headlineSwe: "Pain points & Moments of truth",
          textSwe:
            "Studerande-upplevelser innefattar olika “pain points” och “moments of truth” under kundresan. Citat från eleverna visar hur de känner:I undersökningsfasen uttryckte många att de gillade blandningen av UX och krav, samt att skolan grundades av Chas Visual Management.Eleverna tyckte att Chas kändes modernt med en personlig touch och valde YH för den praktiska lärandeformen: “Jag vill gå en praktisk utbildning så jag kan lära mig på riktigt”.Tidigt i resan hade studenterna högre förväntningar på skolans struktur, vilket framgick av att ordet “rörigt”  ofta nämndes i varje fas, vilket de gula stjärnorna visar. . I “börja skolan-fasen” av skolan kände de att personalen inte var helt förberedd.Under “innehåll-och-kurser”-fasen upplevde vissa att förväntningarna inte höll måttet: “För mycket fokus på kravhantering” och “Jag vill lära mig Figma/UI bättre än skolan erbjuder”. Andra klagade på otydliga uppgifter och bristande återkoppling från skolans personal.I praktikfasen noterade studenterna att skolan saknade ett branschnära nätverk för praktikplatser: “Varför använder inte skolan sitt nätverk för att hjälpa oss?”. De kände också av brister i strukturen, med stress över att LIA-kursen startade mitt under en stor inlämning.Slutligen upplevdes examensfasen som rörig: “Det stressar mig att det inte är tydligt vad som ska lämnas in” och “Jag förstår inte vad som förväntas av mig”",
          headlineEng: "Pain points & Moments of truth",
          textEng:
            "Student experiences encompass various “pain points”  and “moments of truth”  throughout the customer journey. Quotes from students illustrate how they feel: In the research phase, many expressed that they appreciated the blend of UX and requirements, as well as the fact that the school was founded by Chas Visual Management. Students felt that Chas had a modern vibe with a personal touch and chose YH for its practical learning format: “I want to take a practical program so I can learn for real.” Early in the journey, students had higher expectations for the school's structure, as evidenced by the frequent mention of the word “chaotic“ in each phase, as shown by the yellow stars. During the “starting school”  phase, they felt that the staff was not fully prepared. In the “content and courses”  phase, some felt that their expectations were not met: “Too much focus on requirements management” and “I want to learn Figma/UI better than what the school offers.” Others complained about unclear assignments and a lack of feedback from the school staff. In the internship phase, students noted that the school lacked an industry-connected network for internships: “Why doesn’t the school use its network to help us?” They also sensed shortcomings in the structure, feeling stressed that the LIA course started right in the middle of a major submission period. Finally, the graduation phase was perceived as chaotic: “It stresses me out that it’s not clear what needs to be submitted” and “I don’t understand what is expected of me.”",
          image1: "kundresa2.jpg",
          altSwe: "Studerande-upplevelser: pain points och förväntningar.",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },
        textsection7: {
          headlineSwe: "Chas Academy nuvarande affärsmodell på UX-området",
          textSwe:
            "Här är min uppfattning av Chas Academys nuvarande affärsmodell på UX-området, det innehåller en del brister. Här är förbättringsmöjligheter och var i affärsmodellen de har en inverkan.",
          headlineEng: "Chas Academy’s current business model in the UX-field",
          textEng:
            "My perception of Chas Academy's current business model in the UX-field contains some flaws. Here are some opportunities for improvement and where in the business model they have an impact.",
          image1: "första.jpg",
          altSwe: "Beskrivning på bilden",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },
        textsection8: {
          headlineSwe: "",
          headlineEng: "",
          textSwe: " “” ",
          textEng: "",
          image1: "Frame_1944.png",
          altSwe: "Beskrivning på bilden",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },
        textsection9: {
          headlineSwe: "Blandningen av UX-design och krav",
          textSwe:
            "Det fanns missförstånd kring fördelningen av UX-design och krav. Jag föreslår att vi klargör utbildningens namn, som “UX-designer och Kravhanterare” , för att ändra studenternas “Jobs to be done”. ",
          headlineEng: "The mix of UX design and requirements",
          textEng:
            "There were misunderstandings regarding the distribution of UX design and requirements. I suggest clarifying the program's name as “UX Designer and Requirements Manager” to change the students “Jobs to be done.”",
          image1: "krav och ux.jpg",
          altSwe: "Beskrivning på bilden",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },
        textsection10: {
          headlineSwe: "Branschnära",
          textSwe:
            "Trots att Chas Academy är skapad av ett branschbolag utnyttjas dess potential inte fullt ut.En möjlighet är att använda kontakter från Chas Visual Management och ledningsgruppen. Eleverna kan till exempel lösa verkliga case från Chas Visual Management, vilket är viktigt för deras erfarenhet och framtida portfolio.Chas Visual Management kan även erbjuda praktikplatser och eventuellt anställningar efter utbildningen. De och deras kunder kan också fungera som en kanal för att promota skolan på sina hemsidor.",
          headlineEng: "Industry-related",
          textEng:
            " Despite being created by an industry company, Chas Academy's potential is not fully utilized. One opportunity is to leverage contacts from Chas Visual Management and the management team. Students could, for example, work on real cases from Chas Visual Management, which is important for their experience and future portfolios.Chas Visual Management can also offer internships and potentially employment after graduation. They and their clients could serve as a channel to promote the school on their websites.",
          image1: "Branschnara.jpg",
          altSwe: "Diagram visar hur Chas Visual kan maximera Chas Academy's potential.",
          altEng: "Description of the images",
        },
        textsection11: {
          headlineSwe: "Praktisk utbildning",
          textSwe:
            "Många studenter förväntade sig en mer praktisk utbildning än vad som erbjöds. För att uppfylla värdeerbjudandet om praktisk utbildning kan ni skapa en övningsbank för studenterna. Samarbeten med utvecklarna i klassen kan ge erfarenhet av teamarbete, och frekventa Figma-lektioner kan vara fördelaktiga. Utökat samarbete med partners kan också bidra till lärorika och verklighetsanknutna övningar och föreläsningar för att förstå hur metoder och teorier tillämpas i praktiken.",
          headlineEng: "Practical training",
          textEng:
            "Many students expected a more practical education than what was offered. To fulfill the value proposition of practical training, you can create a bank of exercises for the students. Collaborations with developers in the class can provide experience in teamwork, and frequent Figma lessons could be beneficial. Increased collaboration with partners can also contribute to educational and real-world relevant exercises and lectures to understand how methods and theories are applied in practice.",
          image1: "Praktisk utbildning.jpg",
          altSwe: "Beskrivning på bilden",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },
        textsection12: { 
          headlineSwe: "Förbättringsområden",
          textSwe:
            "Det sista förbättrings området rör scenariot där studenterna misslyckas med jobbet  inte har utfört, vilket kan bero på att de upplever en ostrukturerad miljö på skolan. För att uppfylla studenternas mål att lära sig UX bör lektionerna vara tydliga. Externa lärare kan genomgå en onboarding-process för att minska missförstånd och tekniska problem. Att skapa en portfolio är en viktig del av UX-lärandet, och det skulle vara bra att införa “portfolio-dagar”  efter större inlämningar för att underlätta processen inför LIA och jobbsökande. För att förbättra relationen med studenterna bör återkoppling och proaktivt arbete prioriteras. Att investera mer i personal och lärare kan säkerställa att uppgifter är tydliga innan de delas ut och öka pedagogiken i undervisningen. Utöver dessa fyra områden kan sociala medier användas för riktad marknadsföring, möjligheten till en ettårig utbildning eller enstaka kurser kan övervägas, och tidigare studenter kan uppmanas att lämna omdömen online. Rektorn bör även be om regelbundna personalutvärderingar för att uppmuntra ärlig feedback. Slutligen kan förväntningar på studenternas beteende under lektioner, som att använda kamera och ställa frågor, klargöras i början av utbildningen.",
          headlineEng: "Improvement area",
          textEng:
            "The final area for improvement concerns the scenario where students fail to complete their work, which may be due to experiencing an unstructured environment at the school. To meet students' goals of learning UX, lessons should be clear. External teachers can undergo an onboarding process to reduce misunderstandings and technical issues. Creating a portfolio is an important part of UX learning, and it would be beneficial to implement “portfolio days” after major submissions to facilitate the process leading up to internships and job searching. To improve the relationship with students, feedback and proactive engagement should be prioritized. Investing more in staff and teachers can ensure that assignments are clear before they are distributed and enhance the pedagogy in teaching.In addition to these four areas, social media can be utilized for targeted marketing, the possibility of a one-year program or individual courses can be considered, and former students can be encouraged to leave reviews online. The principal should also request regular staff evaluations to encourage honest feedback. Finally, expectations regarding students' behavior during lessons, such as using cameras and asking questions, should be clarified at the beginning of the program.",
          image1: "Frame_1944.png",
          altSwe: "Beskrivning på bilden",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",

        },
      },
      content5: {
        id: 5,

        intro: {
          headlineMainSwe: "Berghs School of Communication",
          headlineRoleSwe: "Roll",
          textRoleSwe: "Ux-designer",
          headlinMainEng: "Berghs School of Communication",
          headlineRoleEng: "Role",
          textRoleEng: "Ux-designer",
          headlinetoolsSwe: "Verktyg & Metoder",
          textToolsSwe1: "Miro",
          textToolsSwe2: "Personas",
          textToolsSwe3: "Kvalitativ metod",
          textToolsSwe4: "Behovskarta",
          textToolsSwe5: "Affinity Diagramming",
          textToolsSwe6: "Använadare tester",
          headlineToolsEng: "Tools & Methods",
          textToolsEng1: "Miro",
          textToolsEng2: "Personas",
          textToolsEng3: "Qualitative method",
          textToolsEng4: "Behovskarta",
          textToolsEng5: "Affinity Diagramming",
          textToolsEng6: "User Testing",
          image1: "berghs_logo.svg",
          altSwe: "Svart backgrund med texten Berghs School of Communication",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning", 
          imageDescriptionSwe: "Bildbeskrivning",
        },
        textsection1: {
          headlineSwe: "Uppdraget",
          textSwe:
            "Jag genomförde projektet som en del av en antagningsprocess för att komma in på Berghs, med fokus på att förbättra användarupplevelsen på en webbplats. Under arbetet identifierades flera problem i användargränssnittet, vilket ledde till nödvändiga designförbättringar. Genom noggrann analys och användartester avslöjades svagheter i designen, vilket resulterade i förslag på en redesign för att göra vissa funktioner mer tydliga och användarvänliga.",
          headlineEng: "Assignment",
          textEng:
            "I conducted the project as part of an admissions process for entry into Berghs, focusing on improving the user experience of a website. During the work, several user interface issues were identified, leading to necessary design improvements. Through careful analysis and user testing, design weaknesses were revealed, resulting in proposals for a redesign to make certain features clearer and more user-friendly.",
          image1: "Frame_1944.png",
          altSwe: "Rosa bakgund bild med namnet Artportable",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning", imageDescriptionSwe: "Bildbeskrivning",
        },
        textsection2: {
          headlineSwe: "Hypotes",
          textSwe:
            "Jag antog att användarna hade svårt att förstå rumknappens funktion. För att Artportable ska kunna öka försäljningen på sin webbplats bör de överväga en redesign som uppmuntrar till fler köp.",
          headlineEng: "Hypotes",
          textEng:
            "I assumed that users had difficulty understanding the function of the room button. To help Artportable increase sales on its website, they should consider a redesign that encourages more purchases.",
          image1: "Frame_1944.png",
          altSwe: "Beskrivning på bilden",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
           imageDescriptionSwe: "Bildbeskrivning",
        },
        textsection3: {
          headlineSwe: "Research",
          textSwe:
            "Jag genomförde en UX-granskning för att identifiera svagheter på webbplatsen, förbereda intervjuer och användartester. Jag studerade färgers påverkan och designprinciper, analyserade konkurrerande webbplatser och samlade insikter i Miro. Jag förberedde kvalitativa intervjufrågor och användartester, där deltagarna använde 'tänka högt'-metoden. Resultaten sammanställdes i Miro för att identifiera förbättringsområden och föreslå designändringar.",
          headlineEng: "Research",
          textEng:
            "I conducted a UX review to identify weaknesses on the website, prepare interviews, and user tests. I studied the impact of colors and design principles, analyzed competing websites, and gathered insights in Miro. I prepared qualitative interview questions and user tests, where participants used the 'think-aloud' method. The results were compiled in Miro to identify areas for improvement and suggest design changes.",
          image1: "Skärmbild 2023-04-04 234051 1.png",
          altSwe: "samling av olika bilder på andra liknande lösningar",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning", 
          imageDescriptionSwe: "Bildbeskrivning",
        },
        textsection4: {
          headlineSwe: "Några av de mest betydelsefulla användartestare",
          textSwe:
            "Tester visade att många användare missförstod ikonen för ´köpförfrågan´ och ofta missade den helt. Jag gjorde därför knappen lika stor som konstverket och ändrade texten till ´lägg i varukorgen ´. För att öka köpen på webbplatsen lade jag till en röd kundvagnsikon på köpknappen, vilket uppmuntrade fler att klicka, medan svart användes för att ge kontrast utan att ändra det övergripande färgschemat.",
          headlineEng: "Some of the most significant user tests",
          textEng:
            "Tests showed that many users misunderstood the ´purchase inquiry´ icon and often missed it entirely. To address this, I made the button the same size as the artwork and changed the label to ´add to cart´. To further boost purchases on the site, I added a red shopping cart icon to the button, encouraging clicks, while using black for contrast without altering the overall color scheme.",
          image1: "Frame_1944.png",
          altSwe: "Beskrivning på bilden",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning", 
          imageDescriptionSwe: "Bildbeskrivning",
        },
        textsection5: {
          headlineSwe: "Rumfunktionen lösning",
          textSwe:
            " Rosa rums-knappen med textbeskrivning ledde till en sida där man kunde testa tavlan i olika rumsmiljöer, men användarna förstod inte knappens syfte eller vad som skulle hända när de klickade på den. Knappen visade ett bildspel med tavlan i olika rum. Lösningen blev att göra funktionen mer synlig och tydlig från början, vilket gjorde den lättare att förstå.",
          headlineEng: "Room Function Solution",
          textEng:
            "The pink room button with a text description led to a page where users could test the painting in different room settings, but they didn’t understand the purpose of the button or what would happen when they clicked on it. The button displayed a slideshow of the painting in various rooms. The solution was to make the function visible and clear from the start, which made it easier to understand.",
          image1: "Frame 834.png",
          altSwe: "Nuvarnde lösningen",
          altEng: "Description of the images",
          image1: "Frame 872 (1).png",
          altSwe: "Första förslaget på rumfunktion",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning", imageDescriptionSwe: "Bildbeskrivning",

        },
        textsection6: {
          headlineSwe: " Inskiter om Lägg i varukorgen samt lösningen",
          textSwe: "Tester visade att många användare missförstod ikonen för `köpförfrågan` och ofta missade den helt. Jag gjorde därför knappen lika stor som konstverket och ändrade texten till `lägg i varukorgen`. För att öka köpen på webbplatsen lade jag till en röd kundvagnsikon på köpknappen, vilket uppmuntrade fler att klicka, medan svart användes för att ge kontrast utan att ändra det övergripande färgschemat.",
          headlineEng: "Add to Cart Solution",
          textEng: "Tests showed that many users misunderstood the `purchase inquiry´ icon and often missed it entirely. To address this, I made the button the same size as the artwork and changed the label to `add to cart´. To further boost purchases on the site, I added a red shopping cart icon to the button, encouraging clicks, while using black for contrast without altering the overall color scheme.",
          image1: "Frame 850.png",
          altSwe: "Nuvarnde lösningen",
          altEng: "Description of the images",
          image1: "Frame 850.png",
          altSwe: "Första förslaget på rumfunktion",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning", imageDescriptionSwe: "Bildbeskrivning",
        },
        textsection7: {
          headlineSwe: "Om användartester",
          textSwe:
            "Jag skapade prototypen och använde “tänka högt”-metoden. Testresultaten dokumenterades i Miro, vilket visade var ändringar behövdes. Produktlistan behövde endast testas två gånger, och nästan all info togs bort, förutom designändringen för “lägg i varukorgen”.Rumsknappen ändrades från en länk med texten “visa rum med din miljö” till ett bildspel med rumsmiljöer. För att förtydliga kan en guide läggas till som förklarar hur bildspelet fungerar.",
          headlineEng: "About user testing",
          textEng:
            " I created the prototype and used the 'think-aloud' method. The test results were documented in Miro, showing where changes were needed. The product list only needed to be tested twice, and almost all information was removed, except for the design change for 'Add to cart.' The room button was changed from a link with the text 'show rooms with your environment' to a slideshow of room environments. To clarify, a guide could be added to explain how the slideshow works.",
          image1: "Frame_1944.png",
          altSwe: "Beskrivning på bilden",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning", imageDescriptionSwe: "Bildbeskrivning",
        },
      },
      content6: {
        id: 6,
        intro: {
          headlineMainSwe: "Soppkök Uppsala",
          headlineRoleSwe: "Roll",     
          textRoleSwe: "Projektledare",
          headlinMainEng: "Uppsala soup kitchen",
          headlineRoleEng: "Role",
          textRoleEng: "Project manager",
          headlinetoolsSwe: "Verktyg & Metoder",
          textToolsSwe1: "Planering",
          textToolsSwe2: "Logistik",
          textToolsSwe3: "Värva företag",
          textToolsSwe4: "Transport ",
          textToolsSwe5: "Hantering av utrustning",
          headlineToolsEng: "Tools & Methods",
          textToolsEng1: "Planning",
          textToolsEng2: "Logistics",
          textToolsEng3: "Recruit companies",
          textToolsEng4: "Transport",
          textToolsEng5: "Equipment management",
          image1: "SoppkökUppsala.png",
          altSwe: "En artikel om soppkök uppsala",
          altEng: "Description of the images",
          imageDescriptionSwe: "Bildbeskrivning",
          imageDescriptionEng: "Bildbeskrivning",
        },
        textsection1: {
          headlineSwe: "Om Soppkök Uppsala",
          textSwe:
            "Soppkökets mål var att det skulle vara en mötesplats för människor som annars inte skulle träffas och ta bort sina eventuella fördomar. Soppköken är en politisk aktion för att lyfta frågan om hemlösas situation, en fråga som annars inte ges särskilt mycket utrymme i samhällsdebatten. Därför var Soppköken endast till för att organisera enstaka möten med målet att belysa problematiken kring hemlösheten och skulle inte vara ett permanent soppkök, då det finns andra institutioner som gör detta med mer resurser och oftare.",
          headlineEng: "About Uppsala Soup Kitchen",
          textEng:
            "The goal of the soup kitchens was to create a passing place for people who would’ve never met otherwise and to remove prejudices. The soup kitchens were a place to discuss the situation for the homeless of Uppsala. The goal of the soup kitchens was to highlight the problem of homelessness.",
          image1: "Skärmbild 2023-04-14 134616.png",
          altSwe: "Två glada personer står bakom ett bord fullt av smörgåsar och tallrikar.",
          altEng: "Description of the images",
          imageDescriptionSwe: "Två glada personer står bakom ett bord fullt av smörgåsar och tallrikar",
          imageDescriptionEng: "Bildbeskrivning",
        },
        textsection2: {
          headlineSwe: "Erfarenheter från Soppkök Uppsala",
          textSwe:
            "Vi var sex personer som startade Soppkök Uppsala och inför soppköken var det mycket som behövde planeras, som att ha möten med volontärer och söka tillstånd, hålla i klädinsamlingar och klädförvaring, transportera bort saker samt ha kontakt med media. Jag hade ansvar för matbutiker, uthyrningsfirmor och privatpersoner som lånade ut utrustning. Jag designade även Soppkökets nya logga och flera affischer, jag höll i klädinsamlingar och ordnade transport med bil och flak. Via sociala medier och engagemang skapades uppmärksamhet vilket ledde till att många kom och gjorde allt från att lämna kläder, hygienprodukter och frukt, till att laga mat och klippa hår. Under soppköken delades det ut kläder, smörgåsar, kaffe och soppa till behövande. Många stannade kvar länge för att samtala och för den goda stämningen. Det jag minns mest från vårt första soppkök var att vi kände mycket glädje från alla människor som besökte soppköket och att det blev väldigt lyckat. Vi fick fler personer att bli intresserade av att planera soppköket. Efter att ha varit aktiv i Soppkök Uppsala under ett år kände jag att det var dags för andra att ta över. Soppkök i alla städer är nu tyvärr nedlagda och Soppkök Uppsala varade mellan åren 2013-2015.",
          headlineEng: "Experiences from Uppsala Soup Kitchen",
          textEng:
            "In the beginning, we were six people planning everything together and we had clothing collections and clothing storage, transporting things away and also had contact with the media. My responsibilities were to have contact with supermarkets, tent rental, and private individuals who lent us equipment. I designed the soup kitchen's logotype, several posters and clothing collections, and organized transport by car and flatbed. During the soup kitchen, clothes and food were distributed to people who needed it. Many of the people were staying and talking. Thanks to social media, we got some big attention and commitment was created and many private individuals came to leave clothes, fruit, food, and some people even got haircuts. What I remember most from my first soup kitchens was that we felt so much joy from all the people who came and the soup kitchens were very successful. After the first soup kitchen, we got more volunteers which made everything more interesting to plan. The soup kitchens have taught me a lot about planning events and convincing companies to sponsor us. After having been active in soup kitchen Uppsala for a year, I felt it was time for others to take over. Soup kitchens in all the cities it was active in are now discontinued, and soup kitchen Uppsala lasted between the years 2013-2015.",
          image1: "Skärmbild 2023-04-14 134413.png",
          altSwe: "En artikel från uppsala tidning om soppkök.",
          altEng: "Description of the images",
          imageDescriptionSwe: "En artikel från uppsala tidning om soppkök.",
          imageDescriptionEng: "Bildbeskrivning",
        },
      },
    },
  ];

  const dataHome = [
    {
      path: 1,
      headlineMainSwe: "Loopelis företagssida",
      descriptionSwe:
        "Jag fick i uppdrag av Loopeli att förbättra strukturen på deras företagssida för att göra den mer användarvänlig för företagsanvändare och underlätta deras beslut att integrera Loopeli. Genom en UX-review identifierade jag gränssnittsproblem och användarnas behov genom intervjuer och test.",
      headlineMainEng: "Loopeli's Company Page",
      descriptionEng:
        "I was tasked by Loopeli to improve the structure of their company page to make it more user-friendly for corporate users and facilitate their decision to integrate Loopeli. Through a UX review, I identified interface issues and user needs through interviews and testing.",
      headlineIntroSwe: "Verktyg & Metoder",
      image1: "Frame_1944.png",
      altSwe: "Beskrivning på bilden",
      altEng: "Description of the images",
      imageDescriptionSwe: "Bildbeskrivning",
      imageDescriptionEng: "Bildbeskrivning",
    },
    {
      path: 2,
      headlineMainSwe: "Loopelis privatsida",
      descriptionSwe:
        "Projektet syftar till att minska behovet av supportsamtal genom att identifiera hinder i Loopelis privatsida och analysera användarnas navigering. Genom att justera innehåll och design ska man bättre möta målgruppens behov och underlätta för dem att skaffa Loopeli-appen. Användartester har genomförts för att samla insikter om användarbeteenden och skapa personas, vilket hjälper till att anpassa webbplatsens struktur för att förbättra användarupplevelsen.",
      headlineMainEng: "Loopeli's Private Page",
      descriptionEng:
        "The project aims to reduce the need for support calls by identifying obstacles on Loopeli's private page and analyzing user navigation. By adjusting content and design, it seeks to better meet the needs of the target audience and facilitate their acquisition of the Loopeli app. User tests have been conducted to gather insights into user behaviors and create personas, which helps tailor the website's structure to improve the user experience.",
      headlineIntroSwe: "Verktyg & Metoder",
      image1: "Loopeligreen.png",
      altSwe: "Beskrivning på bilden",
      altEng: "Description of the images",
      imageDescriptionSwe: "Bildbeskrivning",
      imageDescriptionEng: "Bildbeskrivning",
    },
    {
      path: 3,
      headlineMainSwe: "Examensarbete som handlar om skärmtid för barn",
      descriptionSwe:
        "Projektet fokuserade på att analysera barns skärmtid och hur föräldrar kan undvika konflikter kring detta. Genom intervjuer med föräldrar och barn identifierades olika behov, som att barn vill ha tydliga regler och vara med och bestämma aktiviteter efter skärmtiden. Två programidéer togs fram: ett där barnet får välja en aktivitet för att starta skärmtiden, och ett där barnet får spel biljetter som kan användas under veckan. Prototypen testades på både barn och vuxna, med justeringar baserade på deras feedback. ",
      headlineMainEng: "Thesis focusing on screen time for children",
      descriptionEng:
        "The project focused on analyzing children's screen time and how parents can avoid conflicts related to it. Through interviews with parents and children, various needs were identified, such as children wanting clear rules and to be involved in choosing activities after screen time. Two program ideas were developed: one where the child selects an activity to start their screen time, and another where the child receives game tickets that can be used throughout the week. The prototype was tested on both children and adults, with adjustments made based on their feedback.",
      headlineIntroSwe: "Verktyg & Metoder",
      image1: "spel4.png",
      altSwe: "Beskrivning på bilden",
      altEng: "Description of the images",
      imageDescriptionSwe: "Bildbeskrivning",
      imageDescriptionEng: "Bildbeskrivning",
    },
    {
      path: 4,
      headlineMainSwe: "Uppdraget på CHAS Academy",
      descriptionSwe:
        "Uppdraget på CHAS Academy genomför en analys för att förbättra studentupplevelsen och affärsmodellen inom UX-utbildningen. De planerar att öka antalet studenter med 30% inom 1-3 år genom att göra utbildningen mer konkurrenskraftig och förbättra kundresan. Studien baseras på intervjuer med nuvarande och tidigare studenter, och har identifierat både styrkor och områden som behöver förbättras, som tydligare struktur, bättre återkoppling och mer praktisk träning. Målet är att öka studenternas nöjdhet, skapa en starkare koppling till arbetsmarknaden och stärka CHAS",
      headlineMainEng: "Assignment at CHAS Academy",
      descriptionEng:
        "The project at CHAS Academy is conducting an analysis to improve the student experience and business model within the UX program. They plan to increase the number of students by 30% within 1-3 years by making the program more competitive and enhancing the customer journey. The study is based on interviews with current and former students, identifying both strengths and areas for improvement, such as a clearer structure, better feedback, and more practical training. The goal is to increase student satisfaction, create a stronger connection to the job market, and strengthen CHAS Academy's brand.",
      headlineIntroSwe: "Verktyg & Metoder",
      image1: "chas-academy-emblem.png",
      altSwe: "Beskrivning på bilden",
      altEng: "Description of the images",
      imageDescriptionSwe: "Bildbeskrivning",
      imageDescriptionEng: "Bildbeskrivning",
    },
    {
      path: 5,
      headlineMainSwe: "Berghs School of Communication",
      /*kolla den här texten*/
      descriptionSwe:
        "Projektet utforskade en antagningsprocess med fokus på en webbplats där användarupplevelsen kunde förbättras. Under arbetets gång identifierades flera användargränssnittproblem, vilket ledde till nödvändiga designförbättringar. Genom en noggrann granskning och användartester avslöjades svagheter i designen, vilket resulterade i förslag på en redesign för att göra vissa funktioner mer tydliga och användarvänliga.",
      headlineMainEng: "Berghs School of Communication",
      descriptionEng:
        "The project explored an admissions process focused on a website where the user experience could be improved. Throughout the work, several user interface issues were identified, leading to necessary design enhancements. Through a thorough review and user testing, weaknesses in the design were revealed, resulting in suggestions for a redesign to make certain features clearer and more user-friendly.",
      headlineIntroSwe: "Verktyg & Metoder",
      image1: "berghs_logo.svg",
      altSwe: "Beskrivning på bilden",
      altEng: "Description of the images",
      imageDescriptionSwe: "Bildbeskrivning",
      imageDescriptionEng: "Bildbeskrivning",
    },
    {
      path: 6,
      headlineMainSwe: "Soppkök Uppsala",
      descriptionSwe:
        "Jag hjälpte till att anordna Soppkök Uppsala, som syftade till att skapa en mötesplats för människor som annars inte skulle ha träffats och att motverka fördomar. Här diskuterades hemlöshetens utmaningar i Uppsala. Tillsammans med ett team av sex personer planerade vi klädkampanjer och transporter, och jag ansvarade för kontakt med livsmedelsbutiker samt design av logotyp och affischer. Under soppkökets verksamhet delades kläder och mat ut, vilket skapade engagemang och glädje bland besökarna. Soppkök Uppsala var aktivt mellan 2013 och 2015.",
      headlineMainEng: "Soup Kitchen Uppsala",
      descriptionEng:
        "I helped organize Soppkök Uppsala, which aimed to create a meeting place for people who otherwise would not have met and to counteract prejudices. Here, the challenges of homelessness in Uppsala were discussed. Together with a team of six people, we planned clothing drives and transportation, and I was responsible for contact with supermarkets as well as designing the logo and posters. During the soup kitchen's operation, clothes and food were distributed, creating engagement and joy among the visitors. Soppkök Uppsala was active between 2013 and 2015.",
      headlineIntroSwe: "Verktyg & Metoder",
      image1: "Frame_1944.png",
      altSwe: "Beskrivning på bilden",
      altEng: "Description of the images",
      imageDescriptionSwe: "Bildbeskrivning",
      imageDescriptionEng: "Bildbeskrivning",
    },
  ];


  return (

    <div className='Nav-bar'>
      <LanguageProvider>
        <Menu />
        <Routes>
          <Route path="/" element={<PageLayout><Homepage dataHome={dataHome} /></PageLayout>} />
          <Route path="/about" element={<PageLayout><Aboutpage data={data} /></PageLayout>} />
          <Route path="/case" element={<PageLayout><Casepage dataHome={dataHome} /></PageLayout>} />
          <Route path="/workeducation" element={<PageLayout><Projectpage /></PageLayout>} />
          <Route path="/contact" element={<PageLayout><Contactpage /></PageLayout>} />
          <Route
            path="/case/:id" element={<PageLayout><Cases data={data} /></PageLayout>} />
        </Routes>
      </LanguageProvider>
    </div>
  );

}
export default MainMenu;

//* https://codesandbox.io/p/sandbox/hamburger-menu-css-animation-react-u9vit?file=%2Fsrc%2FMenuButton.js%3A18%2C3*/
/*export const ProductDetails = () => {
      <Link to={`/case/${id}`}>View Details</Link>
  }
      
  https://stackademic.com/blog/practical-steps-on-how-to-apply-the-useparams-hook-of-react-router-5cd43a2106b2
  https://dev.to/stanlisberg/react-router-a-beginners-guide-to-useparams-hook-38pj
  */