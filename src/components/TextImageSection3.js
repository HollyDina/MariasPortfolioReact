
import { ImageLarge} from "./ImageLarge";
import { useLanguage } from "./LanguageContext";
export const TexImageSection3 = ({  headlineSwe, 
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
    img, 
    imageDescriptionSwe, 
    imageDescriptionEng, 
    altSwe, 
    altEng  }) => {



        const { language } = useLanguage();

        const renderText = (swe, eng) => {
            const text = language === "sv" ? swe : eng;
            return text ? <p className="bodytext">{text}</p> : null;
        };
    
    return (
        <>
            <div className="case_content">
                <h2 className="section-title-work">
                    {language === "sv" ? headlineSwe : headlineEng}
                </h2>
                {renderText(textSwe, textEng)}
                {renderText(textSwe2, textEng2)}
                {renderText(textSwe3, textEng3)}
                {renderText(textSwe4, textEng4)}
                {renderText(textSwe5, textEng5)}
                {renderText(textSwe6, textEng6)}
                {renderText(textSwe7, textEng7)}

            </div>
            <div className="case_content">
                <ImageLarge img={img} imageDescriptionSwe={imageDescriptionSwe} 
                imageDescriptionEng={imageDescriptionEng} 
                altSwe={altSwe} altEng={altEng} />
            </div>
        </>

    );
};
