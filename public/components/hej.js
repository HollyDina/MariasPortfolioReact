
return (
  <div className="main-content">
    {matchingContent2.map((item, index) => (
      <React.Fragment key={index}>
        {console.log(item, index, "hund1")}
        {Object.entries(item).map(([key, content1Item], index1) => (
          <React.Fragment key={index1}>
            {key === "intro" && <HeroSection key={index1} content={content1Item} />}

            <section className="case_content_main">
              {content1Item.headlineSwe || content1Item.textSwe ? (
                index % 2 === 0 ? (
                  <>
                    <div className="case_content">
                      <h2 className="section-title-work">
                        {language === "sv" ? content1Item.headlineSwe : content1Item.headlineEng}
                      </h2>
                      <p className="bodytext">
                        {language === "sv" ? content1Item.textSwe : content1Item.textEng}
                      </p>
                    </div>
                    <div className="case_content">
                      <img
                        src={content1Item.image1 || ''}
                        alt={
                          language === "sv"
                            ? content1Item.altSwe || ''
                            : content1Item.altEng || ''
                        }
                        className="images"
                      />
                      <p className="centeredText">
                        {language === "sv"
                          ? content1Item.imageDescriptionSwe
                          : content1Item.imageDescriptionEng}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="case_content">
                      <img
                        src={content1Item.image1 || ''}
                        alt={
                          language === "sv"
                            ? content1Item.altSwe || ''
                            : content1Item.altEng || ''
                        }
                        className="images"
                      />
                      <p className="centeredText">
                        {language === "sv"
                          ? content1Item.imageDescriptionSwe
                          : content1Item.imageDescriptionEng}
                      </p>
                    </div>
                    <div className="case_content">
                      <h2 className="section-title-work">
                        {language === "sv" ? content1Item.headlineSwe : content1Item.headlineEng}
                      </h2>
                      <p className="bodytext">
                        {language === "sv" ? content1Item.textSwe : content1Item.textEng}
                      </p>
                    </div>
                  </>
                )
              ) : null}
            </section>
          </React.Fragment>
        ))}
      </React.Fragment>
    ))}
  </div>
);
