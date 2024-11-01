
import { Images } from "./Images";
import { useLanguage } from "./LanguageContext";
export const TexImageSection2 = ({ headlineSwe, headlineEng, textSwe, textEng,
    img, imageDescriptionSwe, imageDescriptionEng,
    altSwe, altEng }) => {


    const { language } = useLanguage();
    return (
        <>
            <div className="case_content">
                <h2 className="section-title-work">
                    {language === "sv" ? headlineSwe : headlineEng}
                </h2>
                <p className="bodytext">
                    {language === "sv" ? textSwe : textEng}
                </p>
            </div>
            <div className="case_content">
                <Images img={img} imageDescriptionSwe={imageDescriptionSwe} 
                imageDescriptionEng={imageDescriptionEng} 
                altSwe={altSwe} altEng={altEng} />
            </div>
        </>

    );
};
/* <Images img={content1Item.image1} imageDescriptionSwe={content1Item.imageDescriptionSwe} imageDescriptionEng={content1Item.imageDescriptionEn} altSwe={content1Item.altSwe} altEng={content1Item.altEng} />
 */

/*  <h2 className="section-title-work">
                    {language === "sv" ? content1Item.headlineSwe : content1Item.headlineEng}
                </h2>
                <p className="bodytext">
                    {language === "sv" ? content1Item.textSwe : content1Item.textEng}
                </p> */