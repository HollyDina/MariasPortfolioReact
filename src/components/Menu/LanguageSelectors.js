import {useLanguage} from "../LanguageContext"

export const LanguageSelectors = () => {
    const { language, toggleLanguage } = useLanguage();
  
    return (
      <div style={{display:"flex",flexDirection:"column"}}>
      <label style={{ marginBottom:"4px"}} for="Language">Byt språk</label>
      <select className="hero-button" id="Language" style={{padding:"16px"}} value={language} onChange={(e) => toggleLanguage(e.target.value)}>
        <option style={{backgroundColor:"white"}} value="sv">Svenska</option>
        <option style={{backgroundColor:"white"}}  value="en">English</option>
      </select>
      </div>
    );
  };

