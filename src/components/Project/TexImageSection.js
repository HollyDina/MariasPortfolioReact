
import { ImageLarge } from "../ImageLarge";
import { useLanguage } from "../LanguageContext";
export const TexImageSection = ({ headlineSwe,
    headlineEng,
    textSwe,
    textEng,
    textSwe2,
    textEng2,
    textSwe3,
    textEng3,
    textSwe4,
    textEng4,
    textSwe5,
    textEng5,
    textSwe6,
    textEng6,
    textSwe7,
    textEng7,

    headlineSwe2,
    headlineEng2,
    headlineSwe3,
    headlineEng3,
    headlineSwe4,
    headlineEng4,
    headlineSwe5,
    headlineEng5,
    headlineSwe6,
    headlineEng6,
    headlineSwe7,
    headlineEng7,
    img,
    imageDescriptionSwe,
    imageDescriptionEng,
    altSwe,
    altEng }) => {


    const { language } = useLanguage();
    const renderText = (swe, eng) => {
        const text = language === "sv" ? swe : eng;
        return text ? <p className="bodytext">{text}</p> : null;
    };

    const renderHeadline = (swe, eng) => {
        const text = language === "sv" ? swe : eng;
        return text ? <h1 className="section-title-work">
            {language === "sv" ? headlineSwe : headlineEng}</h1> : null;
    };
    return (
        <>
            <div className="case_content">
                <ImageLarge img={img} imageDescriptionSwe={imageDescriptionSwe} imageDescriptionEng={imageDescriptionEng} altSwe={altSwe} altEng={altEng} />

            </div>
            <div className="case_content">
                <h1 className="section-title-work">
                    {language === "sv" ? headlineSwe : headlineEng}
                </h1>
                {renderText(textSwe, textEng)}
                {renderHeadline(headlineSwe2, headlineEng2)}
                {renderText(textSwe2, textEng2)}
                {renderHeadline(headlineSwe3, headlineEng3)}
                {renderText(textSwe3, textEng3)}
                {renderHeadline(headlineSwe4, headlineEng4)}
                {renderText(textSwe4, textEng4)}
                {renderHeadline(headlineSwe5, headlineEng5)}
                {renderText(textSwe5, textEng5)}
                {renderHeadline(headlineSwe6, headlineEng6)}
                {renderText(textSwe6, textEng6)}
                {renderHeadline(headlineSwe7, headlineEng7)}
                {renderText(textSwe7, textEng7)}

            </div>
        </>

    );
};
/* <Images img={content1Item.image1} imageDescriptionSwe={content1Item.imageDescriptionSwe} imageDescriptionEng={content1Item.imageDescriptionEn} altSwe={content1Item.altSwe} altEng={content1Item.altEng} />
 */

/*  <h1 className="section-title-work">
                    {language === "sv" ? content1Item.headlineSwe : content1Item.headlineEng}
                </h1>
                <p className="bodytext">
                    {language === "sv" ? content1Item.textSwe : content1Item.textEng}
                </p> */