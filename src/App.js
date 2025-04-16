
import './App.css';
import './css/Menu.css';
import './css/Presentation.css';
import './css/Footer.css';
import './css/Image.css';
import './css/Case.css';
import './css/NyaNavbar.css';
import './css/ImageGrid.css';
import './css/Body.css'



import MainNavbar from './components/Menu/MainNavbar.js';



function App() {




  return (

    <div className='App'>
      <div className='container-skip-to-content'>
      <a href="#main-content" class="skip-to-content" tabIndex="1">Skip to main content</a>
      </div>
      <MainNavbar></MainNavbar>
      
      
     

    </div>
  );
}

export default App;
