import { Link } from 'react-router-dom';
import img4 from "../../img/Game.png"
import img3 from "../../img/Wcage.jpg"
import img1 from "../../img/iconCv.svg"
import img2 from "../../img/ipads.svg"
import CV from '../../img/Maria-Ekman-Cv-SV-2025.pdf';
export default function ImageAboutme() {

  let diplom = "https://true.chasacademy.se/en/diplom-ixnfb-maria-ekman-163266-3910/"
  return (
    <div className="left-section-imge">
      <div className="image-grid-wrapper">
        <h2 className="image-grid-heading">Personligt brev | CV | Kursdiplom</h2>
        <div className="image-grid">
          <div className="image-box">
            <h3 className="image-title-2">Ladda ned cv & personligt brev</h3>
            {/*<p className="image-description">Beskrivning för Projekt 1</p> <img src={img1} alt="Bild 2" />*/}
          <img src={img1} alt="Bild 2" class="cv-image" style={{ paddingBottom:"20px",display:"flex",
  width: "150px",
  height: "auto"
}} />

            <button className="cv-button" type="button">
           
              <a className='a-cv-button' download="Maria-Ekman-Cv-SV-2025.pdf"
                href={CV}>
                Ladda ner personligt brev och CV
              </a>
            </button>
          </div>
          <div className="image-box">
            <h3 className="image-title-2">Diplom från kursen Tillgänglighet
              inom digitala tjänster & produkter
              (WCAG) </h3>
            {/*<p className="image-description">Beskrivning för Projekt 1</p>*/}
            <Link to={diplom}>
              <img src={img3} alt="Bild 2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


