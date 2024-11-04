
import { useLanguage } from '../LanguageContext';
import { ImageLarge } from "../ImageLarge";


function Contact() {
  const { language } = useLanguage();

  return (

    <section className="case_content_main">
      <div className="case_content_contact">
        <div className="contact__container-content">
          <h1 className="contact_title" id="contact2">{language && language === "sv"
            ? "Kontakta mig"
            : "Contact me"}</h1>
        <div className="contact__container">
          <div className="contact_content_headline">{language && language === "sv"
            ? "Hemadress:"
            : "Home address:"}</div>
             <div className="contact_content_detail"> &nbsp;Hallonbergsplan 18, 174 52 Sundbyberg</div> 
          </div>

          </div>
          <div className="contact__container">
          <div className="contact_content_headline">{language && language === "sv"
            ? "Mobilnummer:"
            : "Mobile number:"}</div>
             <div className="contact_content_detail"> &nbsp; 0762-440-246 </div>

             </div>
             <div className="contact__container">
          <div className="contact_content_headline">{language && language === "sv"
            ? "Epost:"
            : "Email address:"}</div> 
            <div className="contact_content_detail"> &nbsp; Mariaekmaan91@gmail.com </div>
            </div>
            <div className="contact__container">
          <div className="contact_content_headline">{language && language === "sv"
            ? "Körkort"
            : "Driver's license:"} </div>
            <div className="contact_content_detail">&nbsp; B</div>

            </div>
        </div>
      {/*<div className="case_content">
       /* <ImageLarge  />
       
      </div>*/}

    </section>

  );
}

export default Contact;