
import "./work5.jpg"
import { useLanguage } from '../LanguageContext';


function Contact() {
  const { language } = useLanguage();

  return (

    <section className="case_content_main">
      <div className="case_content_contact">
        <div className="contact__container-content">
          <h1 className="contact_title" id="contact2">{language && language === "sv"
            ? "Kontakta mig"
            : "Contact me"}</h1>
          <div className="contact_content_detail"><b>{language && language === "sv"
            ? "Hemadress:"
            : "Home address:"}</b> &nbsp; Hallonbergsplan 18, 174 52 Sundbyberg
          </div>
          <div className="contact_content_detail"><b>{language && language === "sv"
            ? "Mobilnummer:"
            : "Mobile number:"}</b> &nbsp; 0762-440-246 </div>
          <div className="contact_content_detail"><b>{language && language === "sv"
            ? "Epost:"
            : "Email address:"}</b> &nbsp; Mariaekmaan91@gmail.com </div>
          <div className="contact_content_detail"><b>{language && language === "sv"
            ? "Körkort"
            : "Driver's license:"}</b>&nbsp; B</div>
        </div>
        </div>
      <div className="case_content">
        <img src={"./work5.jpg"} alt="En Telefon" className="skills__img" />

      </div>

    </section>

  );
}

export default Contact;