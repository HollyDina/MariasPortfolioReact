import React from 'react';
import { CaseLargeworkcard } from './CaseLargeworkcard';
import { CaseLargeworkcardright } from './CaseLargeworkcardright';
import { useLanguage } from '../LanguageContext';
export function CaseLargeWorkcardSection({ dataHome }) {
  const { language } = useLanguage();
  return (
    <div className='case-largeworkcard-container'>
      <h1 style={{ fontSize: "2.5rem" }}>
        {language && language === "sv"
          ? "Här kan du se några projekt"
          : "Here you can see some projects"}</h1>
      {dataHome && dataHome.map((item, index) => (
        <section className="case_content_main" key={index}>
          {index % 2 === 0 ? (
            <>
              <div className='case-card-container-row'><CaseLargeworkcard item={item} /></div>
            </>
          ) : (
            <>
              <div className='case-card-container-row'><CaseLargeworkcardright item={item} /></div>
            </>
          )}
        </section>
      ))}
    </div>
  )
}

