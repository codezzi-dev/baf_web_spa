// context/LanguageContext.js
"use client";

import { createContext, useState, useContext } from "react";
import en from "../locales/en.json";
import bn from "../locales/bn.json";

const LanguageContext = createContext();

const translations = { en, bn };

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("1");

  const changeLanguage = (lang) => setLanguage(lang);

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
