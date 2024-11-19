

import React from "react";
import { useParams } from "react-router-dom";
import HeroSection from "../HeroSection";
import { TexImageSection } from "../Project/TexImageSection";
import { TexImageSection2 } from "../Project/TexImageSection2";
export const DisplayOneProject = ({ data }) => {

  const { id } = useParams();
  const parsedId = parseInt(id, 10);


  const allContents = data.flatMap(item => Object.values(item));


  const matchingContent2 = allContents.filter(content => content.id === parsedId)



  return (
    <div className="main-content">
      {matchingContent2.map((item, index) => (
        <React.Fragment key={index}>
          {Object.entries(item).map(([key, content1Item], index1) => (
            <React.Fragment key={index1}>
              {key === "intro" && <HeroSection key={index1} content1Item={content1Item} />}
              {content1Item.headlineSwe || content1Item.textSwe ? (
                <>
                  {index1 % 2 === 0 ? (
                    <section className="case_content_main2">
                      <TexImageSection
                        tabIndex={content1Item.tabIndex}
                        headlineSwe={content1Item.headlineSwe}
                        headlineEng={content1Item.headlineEng}
                        textSwe={content1Item.textSwe}
                        textEng={content1Item.textEng1}
                        textSwe2={content1Item.textSwe2}
                        textEng2={content1Item.textEng2}
                        textSwe3={content1Item.textSwe3}
                        textEng3={content1Item.textEng3}
                        textSwe4={content1Item.textSwe4}
                        textEng4={content1Item.textEng4}
                        textSwe5={content1Item.textSwe5}
                        textEng5={content1Item.textEng5}
                        textSwe6={content1Item.textSwe6}
                        textEng6={content1Item.textEng6}
                        textSwe7={content1Item.textSwe7}
                        textEng7={content1Item.textEng7}
                        headlineEng1={content1Item.headlineEng1} headlineSwe2={content1Item.headlineSwe2} headlineEng2={content1Item.headlineEng2}
                        headlineSwe3={content1Item.headlineSwe3} headlineEng3={content1Item.headlineEng3}
                        headlineSwe4={content1Item.headlineSwe4} headlineEng4={content1Item.headlineEng4}
                        headlineSwe5={content1Item.headlineSwe5} headlineEng5={content1Item.headlineEng5}
                        headlineSwe6={content1Item.headlineSwe6} headlineEng6={content1Item.headlineEng6}
                        headlineSwe7={content1Item.headlineSwe7} headlineEng7={content1Item.headlineEng7}
                        img={content1Item.image1}
                        img2={content1Item.image2}
                        imageDescriptionSwe={content1Item.imageDescriptionSwe}
                        imageDescriptionEng={content1Item.imageDescriptionEng}
                        altSwe={content1Item.altSwe}
                        altEng={content1Item.altEng}
                       
                        altSwe2={content1Item.altSwe2}
                        altEng2={content1Item.altEng2}
                        imageDescriptionSwe2={content1Item.imageDescriptionSwe2}
                        imageDescriptionEng2={content1Item.imageDescriptionEng2}/> 
                    </section>
                  ) : (
                    <section className="case_content_main2">
                      <TexImageSection2
                       tabIndex={content1Item.tabIndex}
                        headlineSwe={content1Item.headlineSwe}
                        headlineEng={content1Item.headlineEng}
                        headlineEng1={content1Item.headlineEng1} headlineSwe2={content1Item.headlineSwe2} headlineEng2={content1Item.headlineEng2}
                        headlineSwe3={content1Item.headlineSwe3} headlineEng3={content1Item.headlineEng3}
                        headlineSwe4={content1Item.headlineSwe4} headlineEng4={content1Item.headlineEng4}
                        headlineSwe5={content1Item.headlineSwe5} headlineEng5={content1Item.headlineEng5}
                        headlineSwe6={content1Item.headlineSwe6} headlineEng6={content1Item.headlineEng6}
                        headlineSwe7={content1Item.headlineSwe7} headlineEng7={content1Item.headlineEng7}
                        textSwe={content1Item.textSwe}
                        textEng={content1Item.textEng1}
                        textSwe2={content1Item.textSwe2}
                        textEng2={content1Item.textEng2}
                        textSwe3={content1Item.textSwe3}
                        textEng3={content1Item.textEng3}
                        textSwe4={content1Item.textSwe4}
                        textEng4={content1Item.textEng4}
                        textSwe5={content1Item.textSwe5}
                        textEng5={content1Item.textEng5}
                        textSwe6={content1Item.textSwe6}
                        textEng6={content1Item.textEng6}
                        textSwe7={content1Item.textSwe7}
                        textEng7={content1Item.textEng7}
                        img={content1Item.image1}
                        img2={content1Item.image2}
                        imageDescriptionSwe={content1Item.imageDescriptionSwe}
                        imageDescriptionEng={content1Item.imageDescriptionEng}
                        altSwe={content1Item.altSwe}
                        altEng={content1Item.altEng} 
                        
                        altSwe2={content1Item.altSwe2}
                        altEng2={content1Item.altEng2}
                        imageDescriptionSwe2={content1Item.imageDescriptionSwe2}
                        imageDescriptionEng2={content1Item.imageDescriptionEng2}/>
                    </section>
                  )}
                </>
              ) : null}

            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </div>

  )
}


export default DisplayOneProject;

