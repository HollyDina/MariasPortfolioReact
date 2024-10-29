import React, { useState } from 'react';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

import DropdownList from './DropdownList';
import { Link } from "react-router-dom";
import Image from './arrows.svg';
import { useLanguage } from '../LanguageContext';
import ImageW from './arrowsW.svg';
function MenuDropdown(props) {
  const { language } = useLanguage();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };


  return (



    /*menu-dropdown-button'*/

    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
      
          <button className={`nav__item2 ${props.activeLink === props.path ? 'active' : ''}`} onClick={handleClick}>
            <Link href
            className={`nav__link ${props.activeLink === props.path ? 'active' : ''}`} 
              to={props.path}>
          

              {language && language === "sv"
                    ? props.label && props.label
                    : props.labelEng && props.labelEng}
            </Link>


            <div className='icon-arrow-button-container'>
              <img onClick={handleClick} src={open && `${props.activeLink === props.path ? ImageW  : Image}`? ImageW : Image} alt="En Telefon" className={!open ? "icon-arrow-button" : "icon-arrow-button-rote"} />
            </div>
          </button>
     
        {open ? (
          props.path === "/about" ?
            (<DropdownList list={props.aboutList && props.aboutList} />)
            :
            <DropdownList list={props.caseList && props.caseList} />
        ) : (
          null)
        }

     </div>
    </ClickAwayListener>

  );
}
///https://dev.to/collegewap/how-to-detect-click-outside-in-a-react-component-2b6k
export default MenuDropdown;
