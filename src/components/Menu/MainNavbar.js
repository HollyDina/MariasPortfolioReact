import React from "react";

import { Routes, Route, } from "react-router-dom";
import CasePageTwo from "./CasePageTwo";
import CasePageOne from "./CasePageOne";
import CasePageThree from "./CasePageThree"
import CasePageFour from "./CasePageFour";
import Navbar from "./Navbar";
import ImageGrid from "./ImageGrid";
import Homepage from '../../Page/Homepage';
 import AboutPages from "./AboutMe"

export default function MainNavbar() {
  return (
   <>
      <Navbar />
      
        <Routes>
          <Route path="/"  element={<Homepage/>} />
          <Route path="/about"  element={<AboutPages />} />
          <Route path="/case"  element={<ImageGrid/>} />
          <Route path="/case1" element={<CasePageOne />} />
          <Route path="/case2" element={<CasePageTwo />} />
          <Route path="/case3" element={<CasePageThree />} />
          <Route path="/case4" element={<CasePageFour />} />

        </Routes>
    </>
  );
}