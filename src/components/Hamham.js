import React from 'react';
import Modal from 'react-modal';
import { Routes, Route, Link, useParams } from "react-router-dom";
import MenuDropdown from './Menu/MenuDropdown';
import Casepage from '../Page/Casepage';

function Hamham(props) {

  console.log(props,"hej hmhm");
  
  const customStyles = {
    content: {
      top: '110px',
      left: "0px",
      right: '40px',
      bottom: 'auto',
      position: "absolute"
    },

  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={!modalIsOpen ? openModal : closeModal} className="hamburger-menu">
        <div className="hamburger-menu">
          <span className={!modalIsOpen ? "menu-close" : "menu-open1"}></span>
          <span className={!modalIsOpen ? "menu-close" : "menu-open2"}></span>
          <span className={!modalIsOpen ? "menu-close" : "menu-open3"}></span>
          <h1 className='menu-header'>Menu</h1>
        </div>
      </button>
      {/* <button onClick={closeModal}> 
        <div className="hamburger-menu-open">
        <span className={ "menu-open1" }></span> 
        <span className={ "menu-open2" }></span> 
        <span className={ "menu-open3" }></span>
        <h1 className='menu-header'>Menu</h1>
       </div></button>*/}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>

        <ul className="menu_ul">
          <li className='menu-li'>
            <Link className="menu-link" to="/">Startsida</Link>
          </li>
          <li className='menu-li'>
            <MenuDropdown list={props.aboutList} label={"About me"} path={"/about"} />
          </li>
          <li className='menu-li'>
            <MenuDropdown  list={props.caseList} label={"Case"} path={"/case"} />
          </li>
          <li className='menu-li'>
            <Link className="menu-link" to="/contact">Kontact</Link>
          </li>
          <li className='menu-li'>
            <Link className="menu-link" to="/work">Work</Link>
          </li>
        </ul>
      </Modal>
    </div>
  );
}

export default Hamham;

