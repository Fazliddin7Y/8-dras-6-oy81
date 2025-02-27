import React, { createContext, useState } from "react";

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("uz");

  const toggleLang = () => {
    setLang((prevLang) => (prevLang === "uz" ? "ru" : "uz"));
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
};
