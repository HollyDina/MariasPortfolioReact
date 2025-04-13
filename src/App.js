
import './App.css';
import { useEffect, useRef } from "react";

import Menu from './components/Menu/MainMenu';
import Men2 from './components/Menu/MainMenu2';
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
import  useIsMobile from './components/Menu/useIsMobile';

function App() {



  const isMobile = useIsMobile();

const MobileComponent = () => (
  <div className="card-container mobile-only">
<Menu>hej</Menu>
  </div>
);

const DesktopComponent = () => (
  <div className="card-container desktop-only">
       <Men2></Men2>
  </div>
);


const ResponsiveComponent = () => (
  <>

{isMobile ? <MobileComponent /> : <DesktopComponent />}

  </>
);
  return (

    <div className='App'>
      <div className='container-skip-to-content'>
      <a href="#main-content" class="skip-to-content" tabIndex="1">Skip to main content</a>
      </div>
      <Menu>hej</Menu>

    </div>
  );
}

export default App;
