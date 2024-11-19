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
    { path: '/', label: 'Startsida', labelEng: 'Startpage', tabIndex: "2" },
    { path: '/about', label: "Om mig", labelEng: 'About me', tabIndex: "3", component: MenuDropdown },
    { path: '/case', label: 'Projekt', labelEng: "Project", tabIndex: "4", component: MenuDropdown },
    { path: '/contact', label: 'Kontakt', labelEng: "Contact", tabIndex: "5" },
  ];

  const caseList = [
    { path: "/case/7", label: "WCAG-standarder", labelEng: "WCAG-standarder" },
    { path: '/case/1', label: "Loopeli:s företagsida", labelEng: "Loopeli's Business Page" },
    { path: '/case/2', label: "Loopeli:s Privatsida", labelEng: "Loopeli's Private Page" },
    { path: '/case/3', label: "Examensarbete", labelEng: "Thesis" },
    { path: '/case/4', label: "Chas academy", labelEng: "Chas academy" },
    { path: '/case/5', label: "Berghs school of communication", labelEng: "Berghs school of communication" },
    { path: '/case/6', label: "Soppkök Uppsala", labelEng: "Soup Kitchen Uppsala" },
  ];



  const aboutList = [
    { path: "/about", label: "Om mig", labelEng: "About me" },
    { path: "/workeducation", label: "Arbete & Utbildning", labelEng: "work and education" },
  
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
                tabIndex={item.tabIndex}
              />
            ) : (




              <div tabIndex={item.tabIndex} className={`nav__item ${activeLink === item.path ? 'active' : ''}`}>

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
        {window.location.pathname === '/' ? (
          null
        ) : (<div className="Language-main">
          <div className='Language-content'>
            <LanguageSelectors tabIndex={"5"} flexdirection={"row"} margin1={"15px 4px 0px 0px"} />
          </div>
        </div>)}
      </ul>



      {/*mobil */}
      <button tabIndex="2" onClick={!modalIsOpen ? openModal : closeModal} className="hamburger-menu">
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
        <div className='menu_content'>

          {menuList.map((item) => (
            <ul key={item.path} className="menu-li">
              {item.component === MenuDropdown ? (

                <MenuDropdown
                  label={item.label}
                  labelEng={item.labelEng}
                  path={item.path}
                  caseList={caseList}
                  aboutList={aboutList}
                  activeLink={activeLink}
                  tabIndex={item.tabIndex}
                />

              ) : (
                <li tabIndex={item.tabIndex} className={`nav__item ${activeLink === item.path ? 'active' : ''}`}>

                  <Link
                    href
                    className={`nav__link ${activeLink === item.path ? 'active' : ''}`}
                    to={item.path}

                  >

                    {language && language === "sv"
                      ? item.label && item.label
                      : item.labelEng && item.labelEng}
                  </Link>

                </li>
              )}
            </ul>
          ))}

          <div className="menu-li"><LanguageSelectors flexdirection={"column"} tabIndex={"6"} margin1={"0px 0px 0px 4px"} /></div>
        </div>
      </Modal>


    </nav>

  );

};

export default Menu;


/*https://codepen.io/iamtonmoy0/pen/MWVOjMv?editors=1100

https://codepen.io/tutsplus/pen/yLRJXmr*/