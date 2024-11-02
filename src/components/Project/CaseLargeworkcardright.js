
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { ImageLarge } from "../ImageLarge"
export function CaseLargeworkcardright({ item }) {

  const { language } = useLanguage();


  return (
    <Link to={`/case/${item.path}`} style={{textDecoration:"none"}}>
      <div className='CaseLargeworkcardright'>
          <div className='CaseLargeworkcard-content'>
            <h3 className='CaseLargeworkcard-titel'>{language && language === "sv"
              ? item.headlineMainSwe && item.headlineMainSwe
              : item.headlineMainEng && item.headlineMainEng}{item.id}</h3>
            <p className='CaseLargeworkcard-description'> {language && language === "sv"
              ? item.descriptionSwe && item.descriptionSwe
              : item.descriptionEng && item.descriptionEng}</p>
          </div>
           <div className='CaseLargeworkcard-img'>
           <ImageLarge img={item.image1}></ImageLarge>
        </div>
      </div>
    </Link>
  )
}


