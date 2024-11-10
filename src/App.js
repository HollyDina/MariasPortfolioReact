
import './App.css';
import Casepage from './Page/Casepage';
import Aboutpage from './Page/Aboutpage';
import { useEffect } from 'react';
import Contactpage from './Page/Contactpage';
import Homepage from './Page/Homepage';
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
  useEffect(() => {
    // Skapa och lägg till <link> för att förladda bilden
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = "https://cdn.example.com/hero-image.jpg";
    link.type = "image/jpeg";
    
    document.head.appendChild(link);

    // Rensa upp <link> när komponenten avmonteras
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  

  return (

    <div className='App'>
     <Menu></Menu>
      
      <Footer />
    </div>
  );
}

export default App;
