
import img2 from "./Frame_1944.png"
import CasePageOne from "./CasePageOne"
export default function ImageGrid() {
  return (
    <>
    <div className="left-section-imge">
      <div className="image-grid">
        <img  src={img2} alt="Bild 1" />
        <img src={img2}  alt="Bild 2" />
        <img src={img2}  alt="Bild 3" />
        <img src={img2}  alt="Bild 4" />
      </div>
    </div>
    <CasePageOne></CasePageOne></>
  );
}