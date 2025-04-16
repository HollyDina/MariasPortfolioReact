import React from 'react';
import { Workcard } from './Workcard';
import { useLanguage } from "../LanguageContext"
export function WorkSection({ list, headlineSwe, headlineEng }) {
  const { language } = useLanguage();

  return (
    <div className="work-main">
      <h1 className='work-headline'>{language && language === "sv"
        ?headlineSwe
        : headlineEng}</h1>
      <div className="work-cards-row">
        {list.map((item, index) => (
          <Workcard
            key={index}
           item={item}
          />
        ))}
      </div>
    </div>
  );
}







{/*  <button className="hero-button" type="button">
          <Link className="nav__link" to="/case">
            Gå till flera Case
          </Link>
        </button>} */}
