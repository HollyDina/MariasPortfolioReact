
import {LazyImage} from '../LazyImage';
import { useLanguage } from "../LanguageContext";
export const TexImageSection2 = ({  tabIndex, headlineSwe, 
    headlineEng, 
    textSwe, 
    textEng, 
    textSwe1, 
    textEng1, 
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
    headlineSwe1,
    headlineEng1,
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
    altEng  }) => {


    const { language } = useLanguage();
    const renderHeadline = (swe, eng) => {
        const text = language === "sv" ? swe : eng;
        return text ? <h1 className="section-title-work">
            {language === "sv" ? headlineSwe : headlineEng}</h1> : null;
    };

    const renderText = (swe, eng) => {
        const text = language === "sv" ? swe : eng;
        return text ? <p className="bodytext">{text}</p> : null;
    };


    return (
        <>
            <div className="case_content">
                <h1 className="section-title-work" tabIndex={tabIndex}>
                    {language === "sv" ? headlineSwe : headlineEng}
                </h1>
                {renderText(textSwe, textEng)}
                {renderHeadline(headlineSwe1, headlineEng1)}
                {renderText(textSwe1, textEng1)}
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
            <div className="case_content">
                   <LazyImage
                    src={img} imageDescriptionSwe={imageDescriptionSwe}
                    imageDescriptionEng={imageDescriptionEng}
                    altSwe={altSwe} altEng={altEng}
                    classname2="container_image_large" classname="ImageLarge" />
            </div>
        </>

    );
};
