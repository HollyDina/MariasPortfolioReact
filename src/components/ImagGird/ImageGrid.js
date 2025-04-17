import { Link } from 'react-router-dom';
import img4 from "../../img/Game.png"
import img3 from "../../img/chas-academy-emblem.png"
import img1 from "../../img/mobiler.png"
import img2 from "../../img/ipads.svg"

export default function ImageGrid() { 
  return (
    <div className="left-section-imge">
      <div className="image-grid-wrapper">
        <h2 className="image-grid-heading">Projekt jag arbetat med – uppdrag och egna initiativ</h2>
        <div className="image-grid">
          <div className="image-box">
           <h3 className="image-title">Användarguide: Så här använder du Loopeli Appen</h3>
            {/*<p className="image-description">Beskrivning för Projekt 1</p>*/}
            <Link to="/Case1">
              <img src={img1} alt="Bild 1" />
            </Link>
          </div>
          <div className="image-box">
            <h3 className="image-title">Gör Loopeli enklare att använda för alla</h3>
            {/*<p className="image-description">Beskrivning för Projekt 1</p>*/}
            <Link to="/Case2">
              <img src={img2} alt="Bild 2" />
            </Link>
          </div>
          <div className="image-box">
            <h3 className="image-title">Chas academy</h3>
            {/*<p className="image-description">Beskrivning för Projekt 1</p>*/}
            <Link to="/Case3">
              <img src={img3} alt="Bild 3" />
            </Link>
          </div>
          <div className="image-box">
            <h3 className="image-title">Examensarbete</h3>
            {/*<p className="image-description">Beskrivning för Projekt 1</p>*/}
            <Link to="/Case4">
              <img src={img4} alt="Bild 4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


/*
export default function ImageGrid() {
  return (
    <div className="left-section-imge">
      <div className="image-grid-wrapper">
    <h2 className="image-grid-heading">Mina Projekt</h2>
    <div className="left-section-imge">
    <div className="image-grid">
      <Link to="/Case1">
        <img src={img1} alt="Bild 1" />
      </Link>
      <Link to="/Case2">
        <img src={img2} alt="Bild 2" />
      </Link>
      <Link to="/Case3">
        <img src={img3} alt="Bild 2" />
      </Link>
      <Link to="/Case4">
        <img src={img4} alt="Bild 2" />
      </Link>
    </div>
  </div>
  </div>
  </div>
  
  );
}
*/