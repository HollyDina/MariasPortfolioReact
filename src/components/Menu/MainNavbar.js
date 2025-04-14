import React from "react";

import { Routes, Route, } from "react-router-dom";
import CasePageTwo from "./CasePageTwo";
import CasePageOne from "./CasePageOne";
import Navbar from "./Navbar";import ImageGrid from "./ImageGrid";

 import AboutPages from "./Aboutpages"
 import HomePage from "./HomePage"
export default function MainNavbar() {
  return (
   <>
      <Navbar />
      <div className=".content">
        <Routes>
          <Route path="/"  element={<HomePage/>} />
          <Route path="/about"  element={<AboutPages />} />
          <Route path="/case"  element={<ImageGrid/>} />
          <Route path="/case2" element={<CasePageTwo />} />
          <Route path="/case1" element={<CasePageOne />} />

        </Routes>
      </div>
   </>
  );
}