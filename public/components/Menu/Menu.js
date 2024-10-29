import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import MenuDropdown from './MenuDropdown';
import { LanguageSelectors } from './LanguageSelectors';
import { LanguageProvider, useLanguage } from "../LanguageContext";
const Menu = () => {
  const { language } = useLanguage();

  const [activeLink, setActiveLink] = useState(window.location.pathname && window.location.pathname);

  useEffect(() => {
    const handleClick = (link) => {
      setActiveLink(link);
    };

    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => handleClick(link.getAttribute('href')));
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);

 


  const menuList = [
    { path: '/', label: 'Startsida', labelEng: 'Startpage' },
    { path: '/about', label: "Om mig", labelEng: 'About me',  component: MenuDropdown },
    { path: '/case', label: 'Projekt',labelEng:"Project", component: MenuDropdown },
    { path: '/contact', label: 'Kontakt', labelEng:"Contact"},
  ];

  const caseList = [
    { path: '/case/1', label: "Loopeli:s företagsida",labelEng:"Project" },
    { path: '/case/2', label: "Loopeli:s Privatsida",labelEng:"Project" },
    { path: '/case/3', label: "Examensarbete",labelEng:"Project" },
    { path: '/case/4', label: "Chas academy",labelEng:"Chas academy" },
    { path: '/case/5', label: "Berghs",labelEng:"Berghs" },
    { path: '/case/6', label: "Soppkök Uppsala",labelEng:"Project" },
  ];



  const aboutList = [
    { path: "/about", label: "Om mig" ,labelEng:"About me"},
    { path: "/about", label: "Arbete" ,labelEng:"work"},
    { path: "/about", label: "Utbildning",labelEng:"education" },

  ];


  const customStyles = {
    content: {
      top: '100px',
      left: "0px",
      right: '40px',
      bottom: 'auto',
      position: "absolute",
      boxshadow: "0 3px 10px rgb(0 0 0 / 0.2)",
      backgroundcolor: "rgba(255, 255, 255, 0.75)"

    },

  };


  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }



  return (
    <nav id="menu">
      <ul className="menu-content-desktop"> {/*Desktop */}

        {menuList.map((item) => (
          <li key={item.path} className="menu-li">
            {item.component === MenuDropdown ? (

              <MenuDropdown
                label={item.label}
                labelEng={item.labelEng}
                path={item.path}
                caseList={caseList}
                aboutList={aboutList}
                activeLink={activeLink}
              />
            ) : (


              <div className={`nav__item ${activeLink === item.path ? 'active' : ''}`}>

                <Link
                  href
                  className={`nav__link ${activeLink === item.path ? 'active' : ''}`}
                  to={item.path}
                >
                  {/*{item.label}*/}

                  {language && language === "sv"
                    ? item.label && item.label
                    : item.labelEng && item.labelEng}
                </Link>

              </div>

            )}
          </li>
        ))}
        <li className="textMaria">
          <div className='textMaria-content'>
            <LanguageSelectors />
            <span className='maria'>Maria Ekman</span>
          </div>
        </li>
      </ul>



      {/*mobil */}
      <button onClick={!modalIsOpen ? openModal : closeModal} className="hamburger-menu">
        <div className="hamburger-menu">
          <span className={!modalIsOpen ? "menu-close" : "menu-open1"}></span>
          <span className={!modalIsOpen ? "menu-close" : "menu-open2"}></span>
          <span className={!modalIsOpen ? "menu-close" : "menu-open3"}></span>
          <h1 className='menu-header'>Menu</h1>
        </div>
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <ul className='menu_content'>

          {menuList.map((item) => (
            <li key={item.path} className="menu-li">
              {item.component === MenuDropdown ? (

                <MenuDropdown
                  label={item.label}
                  labelEng={item.labelEng}
                  path={item.path}
                  caseList={caseList}
                  aboutList={aboutList}
                  activeLink={activeLink}
                />

              ) : (
                <div className={`nav__item ${activeLink === item.path ? 'active' : ''}`}>

                  <Link
                    href
                    className={`nav__link ${activeLink === item.path ? 'active' : ''}`}
                    to={item.path}

                  >
                  
                    {language && language === "sv"
                    ? item.label && item.label
                    : item.labelEng && item.labelEng}
                  </Link>

                </div>
              )}
            </li>
          ))}

          <li className="menu-li"><LanguageSelectors /></li>
        </ul>
      </Modal>


    </nav>

  );

};

export default Menu;


/*https://codepen.io/iamtonmoy0/pen/MWVOjMv?editors=1100

https://codepen.io/tutsplus/pen/yLRJXmr*/