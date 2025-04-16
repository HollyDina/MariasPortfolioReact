// src/About.js
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLanguage } from "../components/LanguageContext";

import Test from "../components/Project/DisplayOneProject";
export const Cases = ({data}) => { 

  const { id } = useParams();
  const { language } = useLanguage();


return(
  <React.Fragment> 
    <Test data={data}></Test>
  </React.Fragment>
)
}

export default Cases;

