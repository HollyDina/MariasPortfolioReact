import React from "react";
import { Routes, Route,useLocation  } from "react-router-dom";
import CasePageTwo from '../Case/CasePageTwo';
import CasePageOne from '../Case/CasePageOne';
import CasePageThree from '../Case/CasePageThree';
import CasePageFour from '../Case/CasePageFour';
import ImageGrid from '../ImagGird/ImageGrid';
import AboutMe from '../AboutMe/AboutMe';
import Navbar  from "./Navbar"
import Homepage from '../../Page/Homepage';

const BackgroundWrapper = ({ children }) => {
  const location = useLocation();
  const commonPages = ['/case1', '/case2', '/case3', '/case4', '/'];
  const isCommon = commonPages.includes(location.pathname);

  return (
    <div className={isCommon ? 'common-background' : 'home-background'}>
      {children}
    </div>
  );
};

export default function MainNavbar() {


  return (
   <><BackgroundWrapper>
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
        </BackgroundWrapper>
    </>
  );
}