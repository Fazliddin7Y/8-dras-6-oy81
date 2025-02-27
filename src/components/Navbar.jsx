import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LangContext } from "../context/LangContext";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { lang, toggleLang } = useContext(LangContext);

  return (
    <nav className={`nav ${theme}`}>
      <h1>Street88</h1>
      <div>
        <NavLink to="/">{lang === "uz" ? "Bosh sahifa" : "Главная"}</NavLink>
        <NavLink to="/about">{lang === "uz" ? "Menyu" : "Меню"}</NavLink>
        <NavLink to="/about/todos">{lang === "uz" ? "Vazifalar" : "Задачи"}</NavLink>
        <NavLink to="/about/comments">{lang === "uz" ? "Izohlar" : "Комментарии"}</NavLink>
        <NavLink to="/about/posts">{lang === "uz" ? "Postlar" : "Посты"}</NavLink>
      </div>
      <div className="buttons">
        <button onClick={toggleLang}>
          {lang === "uz" ? "RU" : "UZ"}
        </button>
        <button onClick={toggleTheme}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
