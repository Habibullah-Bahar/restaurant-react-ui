import React, { useEffect, useState } from "react";
import darkPng from "../../assets/website/dark-mode-button.png";
import lightPng from "../../assets/website/light-mode-button.png";

const Darkmode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="relative w-12 h-12">
      <img
        src={darkPng}
        onClick={changeTheme}
        alt="Dark Mode"
        className={`absolute z-10 mt-4
        cursor-pointer
        drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
        transition-all duration-300
        ${theme === "dark" ? "opacity-1000" : "opacity-0"}`}
      />
      <img
        src={lightPng}
        onClick={changeTheme}
        alt="Light Mode"
        className={`absolute  mt-4
        cursor-pointer
        drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
        transition-all duration-300
        ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
      />
    </div>
  );0
};

export default Darkmode;
