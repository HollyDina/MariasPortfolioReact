import React from "react";
import { Routes, Route, } from "react-router-dom";
import CasePageTwo from '../Case/CasePageTwo';
import CasePageOne from '../Case/CasePageOne';
import CasePageThree from '../Case/CasePageThree';
import CasePageFour from '../Case/CasePageFour';
import ImageGrid from '../ImagGird/ImageGrid';
import AboutMe from '../AboutMe/AboutMe';
import Navbar  from "./Navbar"
import Homepage from '../../Page/Homepage';

export default function MainNavbar() {
  return (
   <>
      <Navbar />
      
        <Routes>
          <Route path="/"  element={<Homepage/>} />
          <Route path="/about"  element={<AboutMe />} />
          <Route path="/case"  element={<ImageGrid/>} />
          <Route path="/case1" element={<CasePageOne />} />
          <Route path="/case2" element={<CasePageTwo />} />
          <Route path="/case3" element={<CasePageThree />} />
          <Route path="/case4" element={<CasePageFour />} />
        </Routes>
    </>
  );
}