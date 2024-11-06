import React from 'react';
import { Routes, Route, Link, useParams } from "react-router-dom";
import { useLanguage } from '../LanguageContext';
function DropdownList(props) {
  console.log(props);
  

  const { language } = useLanguage();
  return (
    <div>
 
    {<div className='down-menu-link'>
    
          {props.list.map((item, index) => (
            <div className="li-menu-link"
            key={index}>
              <Link className="menu-link" href to={item.path}> {language && language === "sv"
                    ? item.label &&item.label
                    : item.labelEng && item.labelEng} </Link> 
            </div>
          ))}
        </div>}
    </div>
  );
}

export default DropdownList;