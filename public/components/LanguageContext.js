// src/LanguageContext.js
import React, { createContext, useState, useContext } from "react";

// Skapa en språkkontext
const LanguageContext = createContext();

// LanguageProvider som omger applikationen och tillhandahåller språkinställningar
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("sv"); // Standard är svenska

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook för att använda språkkontexten
export const useLanguage = () => useContext(LanguageContext);
