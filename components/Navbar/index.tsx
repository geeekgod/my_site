import { useTheme } from "next-themes";
import React, { memo, useContext, useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const [themeEnable, setThemeEnable] = useState(false);

  useEffect(() => {
    setThemeEnable(true);
  }, []);

  const themeSetRenderer = () => {
    if (themeEnable) {
      const currentTheme = theme === "system" ? systemTheme : theme;
      if (currentTheme === "dark") {
        return (
          <button
            className="bg-slate-100 p-1 rounded-lg focus:ring-4"
            onClick={() => {
              setTimeout(() => {
                setTheme("light");
              }, 100);
            }}
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
          </button>
        );
      } else {
        return (
          <button
            className="bg-slate-200 p-1 rounded-lg focus:ring-4"
            onClick={() => {
              setTimeout(() => {
                setTheme("dark");
              }, 100);
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              ></path>
            </svg>
          </button>
        );
      }
    }
  };

  return (
    <div>
      <nav className="flex justify-around py-6">
        <div className="flex items-center">
          <svg
            className="w-12 dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
          <h3 className="text-2xl font-semibold ml-2 dark:text-white">
            Rishabh Singh
          </h3>
        </div>
        <div className="flex">
          <ul className="hidden slg:flex items-center font-medium dark:text-white">
            <li className="mx-2">Home</li>
            <li className="mx-2">Projects</li>
            <li className="mx-2">About</li>
            <li className="mx-2">Contact</li>
          </ul>
          <div className="flex items-center mx-5 cursor-pointer selection:cursor-not-allowed">
            {themeSetRenderer()}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default memo(Navbar);
