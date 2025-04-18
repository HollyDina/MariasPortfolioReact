import React from "react";
import { BrowserRouter as NavLink } from "react-router-dom";

export default function Navbar() {
  return (
   <>
    <nav className="nav nav__split-wrapper">
      <div className="nav__container">
          <div className="nav__menu">
            <NavLink to="/" end className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"}>
              Startsida
              <span className="nav__underline"></span>
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"}>
              About Me
              <span className="nav__underline"></span>
            </NavLink>
            <NavLink to="/case" className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"}>
              Case
              <span className="nav__underline"></span>
            </NavLink>
          </div>
        </div>
      
    </nav>
    </>)
   
}
