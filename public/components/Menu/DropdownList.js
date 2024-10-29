import React from 'react';
import { Routes, Route, Link, useParams } from "react-router-dom";
import { useLanguage } from '../LanguageContext';
function DropdownList(props) {
  console.log(props);
  

  const { language } = useLanguage();
  return (
    <div>
 
    {<ul className='down-menu-link'>
    
          {props.list.map((item, index) => (
            <li className="hej"  style={{listStyleType:"none",padding:"10px"}}key={index}>
              <Link className="menu-link" href to={item.path}> {language && language === "sv"
                    ? item.label &&item.label
                    : item.labelEng && item.labelEng} </Link> 
            </li>
          ))}
        </ul>}
    </div>
  );
}

export default DropdownList;