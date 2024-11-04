// Navbar.js
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';

const Navbar = ({ sectionsRef }) => {
  const navMenuRef = useRef(null);

  const linkAction = () => {
    if (navMenuRef.current) {
      navMenuRef.current.classList.remove('show');
    }
  };

  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach((link) => link.addEventListener('click', linkAction));

    return () => {
      navLinks.forEach((link) => link.removeEventListener('click', linkAction));
    };
  }, []);

  useEffect(() => {
    const scrollActive = () => {
      const scrollY = window.pageYOffset;
      sectionsRef.current.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id');

        const link = document.querySelector(`.nav__menu a[href*='${sectionId}']`);
        if (link) {
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        }
      });
    };

    window.addEventListener('scroll', scrollActive);
    return () => {
      window.removeEventListener('scroll', scrollActive);
    };
  }, [sectionsRef]);

  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      origin: 'top',
      distance: '60px',
      duration: 2000,
      delay: 200,
    });
  }, []);

  return (
    <nav ref={navMenuRef} className="nav__menu">
      <Link to="#home" className="nav__link">Home</Link>
      <Link to="#about" className="nav__link">About</Link>
      <Link to="#services" className="nav__link">Services</Link>
      <Link to="#contact" className="nav__link">Contact</Link>
    </nav>
  );
};

export default Navbar;
