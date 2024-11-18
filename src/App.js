
import './App.css';
import { useEffect, useRef } from "react";

import Footer from './components/Footer';
import Menu from './components/Menu/MainMenu';
import './css/Menu.css';
import "./css/Homeworkcard.css"
import './css/Main.css';
import './css/Footer.css';
import './css/Image.css';
import './css/Case.css';
import './css/Workcard.css';
import './css/Workcard2.css';
import './css/Hero.css';
import './css/Largeworkcard.css';
import './css/CaseLargeworkcard.css';
import './css/Aboutme.css';
import './css/Contact.css';
import './css/PageLayout.css';
import './css/LanguageSelectors.css';
import './css/Body.css';

function App() {

  const focusableElementsRef = useRef([]);

  useEffect(() => {
    // Hämta alla tabb-bara element i rätt ordning
    focusableElementsRef.current = Array.from(
      document.querySelectorAll("button,nav__item,nav__item2,header-case-largeworkcard-container,Homeworkcard-titel,CaseLargeworkcard, select, [tabindex]")
    ).filter((el) => !el.hasAttribute("disabled") && el.getAttribute("tabindex") !== "-1");

    const handleTab = (event) => {
      if (event.key === "Tab") {
        const focusableElements = focusableElementsRef.current;
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          // Shift + Tab - Om vi är på första elementet, hoppa till sista
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab - Om vi är på sista elementet, hoppa till första
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleTab);

    return () => {
      document.removeEventListener("keydown", handleTab);
    };
  }, []);


  return (

    <div className='App'>
      <div className='container-skip-to-content'>
      <a href="#main-content" class="skip-to-content" tabIndex="1">Skip to main content</a>
      </div>
     <Menu></Menu>
  
      <Footer />
    </div>
  );
}

export default App;
