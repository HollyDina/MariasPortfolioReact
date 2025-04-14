import { Link } from 'react-router-dom';
import img1 from "./Frame_1944.png"
import img2 from "./chas-academy-emblem.png"
import img3 from "./Frame 637.png"

import img4 from "./surplatta.png"

export default function ImageGrid() { 
  return (
    <div className="left-section-imge">
      <div className="image-grid-wrapper">
        <h2 className="image-grid-heading">Mina Projekt</h2>
        <div className="image-grid">
          <div className="image-box">
            <h3 className="image-title">Projekt 1</h3>
            <Link to="/Case1">
              <img src={img1} alt="Bild 1" />
            </Link>
          </div>
          <div className="image-box">
            <h3 className="image-title">Projekt 2</h3>
            <Link to="/Case2">
              <img src={img2} alt="Bild 2" />
            </Link>
          </div>
          <div className="image-box">
            <h3 className="image-title">Projekt 3</h3>
            <Link to="/Case3">
              <img src={img3} alt="Bild 3" />
            </Link>
          </div>
          <div className="image-box">
            <h3 className="image-title">Projekt 4</h3>
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