import {useLanguage} from "../LanguageContext"

export const LanguageSelectors = () => {
    const { language, toggleLanguage } = useLanguage();
  
    return (
      <select className="hero-button" style={{padding:"16px"}} value={language} onChange={(e) => toggleLanguage(e.target.value)}>
        <option style={{backgroundColor:"white"}} value="sv">Svenska</option>
        <option style={{backgroundColor:"white"}}  value="en">English</option>
      </select>
    );
  };

