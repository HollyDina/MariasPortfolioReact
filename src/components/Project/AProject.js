

import { useLanguage } from "../LanguageContext";
import Images from "../Images";
import HeroSection from "../HeroSection";
const AProject = ({data}) => {
  
  const { language } = useLanguage();
  
  return (
    <div className="main-content">
    <HeroSection />
      {data&&data.map((item, index) => (
        <section className="case_content_main" key={index}>
          {index % 2 === 0 ? (
            <>
              <div className="case_content">
                <h1 className="section-title-work">
                  {language && language === "sv"
                    ? item.headlineSwe && item.headlineSwe
                    : item.headlineEng && item.headlineEng}
                </h1>
                <p className="bodytext">
                  {language && language === "sv"
                    ? item.textSwe && item.textSwe
                    : item.textEng && item.textEng}
                </p>
              </div>
              <div className="case_content">
                <LazyImage src={"Wcage.jpg"}  classname2="container_image_medium" classname="about-img" />
               
              </div>
            </>
          ) : (
            <>
              <div className="case_content">
              <LazyImage src={"Wcage.jpg"}  classname2="container_image_medium" classname="about-img" />
                <p className="centeredText">Loopeli</p>
              </div>
              <div className="case_content">
                <h1 className="section-title-work">
                  {language && language === "sv"
                    ? item.headlineSwe && item.headlineSwe
                    : item.headlineEng && item.headlineEng}
                </h1>
                <p className="bodytext">
                  {language && language === "sv"
                    ? item.textSwe && item.textSwe
                    : item.textEng && item.textEng}
                </p>
              </div>
            </>
          )}
        </section>
      ))}
    </div>

  );
};
export default AProject;
// https://codesandbox.io/p/sandbox/react-router-query-parameters-mfh8p?file=%2Fexample.js%3A36%2C11
