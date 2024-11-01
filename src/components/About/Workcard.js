
import { useLanguage } from '../LanguageContext';
import Katt from '../../img/Katt';
export function Workcard({ item }) {

  const { language } = useLanguage();
  return (

    <div className='Workcard'>
      <img className="card-image" src={item.imgIcon ? require(`../../img/${item.imgIcon}`) : ''}
        alt={
          language === "sv"
            ? item.headlineSwe || ''
            : item.headlineEng || ''
        } />
      <h2 className='workcard-Headline'>{item.titleEng}</h2>
      <h3 className='workcard-Headline'>{item.institutionEng}</h3>
      <span className='workcard-Headline-span'>{item.startEng} - {item.endEng}</span>
      <div className='work-card-container-ul'>
        <ul className='work-card-ul'>
          <li className='li-workcard'>{language === "sv"
            ? item.skills1Swe || ''
            : item.skills1Eng || ""}</li>
          <li className='li-workcard'>{language === "sv"
            ? item.skills2Swe || ''
            : item.skills2Eng || ""}</li>
          <li className='li-workcard'>{language === "sv"
            ? item.skills3Swe || ''
            : item.skills3Eng || ""}</li>
          <li className='li-workcard'>{language === "sv"
            ? item.skills4Swe || ''
            : item.skills4Eng || ""}</li>
        </ul>
        <ul  className='work-card-ul'>
          <li className='li-workcard'>{language === "sv"
            ? item.skills5Swe || ''
            : item.skills5Eng || ""}</li>
          <li className='li-workcard'>{language === "sv"
            ? item.skills6Eng || ''
            : item.skills6Eng || ""}</li>
          <li className='li-workcard'>{language === "sv"
            ? item.skills7Eng || ''
            : item.skills7Eng || ""}</li>
        </ul>
      </div>
    </div>

  );

}


