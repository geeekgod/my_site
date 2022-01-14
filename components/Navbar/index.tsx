import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { memo, useEffect, useState } from "react";

interface navBarProps {
  menu: boolean;
  setMenu: Function;
}

const { motion, AnimatePresence } = require("framer-motion");
const Navbar = ({ menu, setMenu }: navBarProps) => {
  const { systemTheme, theme, setTheme } = useTheme();

  const [themeEnable, setThemeEnable] = useState(false);
  const [audio, setAudio]: any = useState<any>();

  const router = useRouter();
  useEffect(() => {
    setMenu(false);
  }, [router]);

  useEffect(() => {
    setMenu(false);
    setThemeEnable(true);
    setAudio(new Audio("/assets/click.mp3"));
  }, []);

  const menuBtbRenderer = () => {
    if (menu) {
      return (
        <svg
          className="w-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      );
    } else {
      return (
        <svg
          className="w-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      );
    }
  };

  const themeSetRenderer = () => {
    if (themeEnable) {
      const currentTheme = theme === "system" ? systemTheme : theme;
      if (currentTheme === "dark") {
        return (
          <button
            className="bg-slate-100 p-1 rounded-lg focus:ring-4"
            onClick={() => {
              setTimeout(() => {
                audio.volume = 0.1;
                audio.play();
                setTheme("light");
              }, 50);
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
                audio.volume = 0.1;
                audio.play();
                setTheme("dark");
              }, 50);
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
    <>
      <div>
        <nav className="flex justify-around py-6">
          <motion.div
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 90 }}
            className="flex items-center"
          >
            <svg
              className="w-9 slg:w-12 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{
                  pathLength: 1,
                  transition: { delay: 1.6, duration: 1.2 },
                }}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></motion.path>
            </svg>
            <h3 className="text-xl slg:text-2xl font-semibold ml-2 dark:text-white">
              Rishabh Singh
            </h3>
          </motion.div>
          <motion.div
            initial={{ y: -1000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 90 }}
            className="flex"
          >
            <ul className="hidden slg:flex items-center font-medium dark:text-white">
              <Link href="/">
                <li className="deskTopNavItem">Home</li>
              </Link>
              <Link href="/about">
                <li className="deskTopNavItem">About</li>
              </Link>
              <Link href="/contact">
                <li className="deskTopNavItem">Contact</li>
              </Link>
            </ul>
            <div className="flex items-center z-50 mx-5 cursor-pointer selection:cursor-not-allowed">
              {themeSetRenderer()}
            </div>

            <div
              className="menu-item flex items-center z-50 slg:hidden"
              onClick={() => setMenu(!menu)}
            >
              {menuBtbRenderer()}
            </div>
          </motion.div>
        </nav>
      </div>
    </>
  );
};

export default memo(Navbar);
