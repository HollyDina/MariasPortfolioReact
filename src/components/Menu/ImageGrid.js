import { Link } from 'react-router-dom';
import img1 from "./Frame_1944.png"
import img2 from "./chas-academy-emblem.png"
import img3 from "./Frame 637.png"

import img4 from "./surplatta.png"


export default function ImageGrid() {
  return (
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
  
  );
}
