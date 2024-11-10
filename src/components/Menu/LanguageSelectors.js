import {useLanguage} from "../LanguageContext"

export const LanguageSelectors = ({ flexdirection,margin1}) => {
    const { language, toggleLanguage } = useLanguage();
  
    return (
      <div style={{display:"flex", minWidth:"200px",flexDirection:flexdirection}}>
      <label  className="label-LanguageSelectors" style={{margin:margin1}} htmlFor="Language">
      {language && language === "sv"
              ? "Byt språk"
              : "Change language"}
      </label>
      <select className="hero-button" id="Language" style={{maxWidth:"100px",padding:"16px"}} value={language} onChange={(e) => toggleLanguage(e.target.value)}>
        <option style={{backgroundColor:"white",color:"black"}} value="sv">Svenska</option>
        <option style={{backgroundColor:"white",color:"black"}}  value="en">English</option>
      </select>
      </div>
    );
  };

