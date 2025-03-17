"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { memo, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [menu, setMenu] = useState(false);
  const [themeEnable, setThemeEnable] = useState(false);
  const [audio, setAudio]: any = useState<any>();

  const pathname = usePathname();

  useEffect(() => {
    setMenu(false);
  }, [pathname]);

  useEffect(() => {
    setMenu(false);
    setThemeEnable(true);
    setAudio(new Audio("/assets/click.mp3"));
  }, []);

  // This ensures the body doesn't scroll when menu is open
  useEffect(() => {
    let body: any = document.getElementsByTagName("body");
    body = body[0];
    if (body.style) {
      body.style.overflow = menu ? "hidden" : "auto";
    }
  }, [menu]);

  const menuBtbRenderer = () => {
    if (menu) {
      return (
        <svg
          className="w-10"
          fill="none"
          stroke="#FFFFFF"
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
          stroke="#FFFFFF"
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

  return (
    <>
      <div>
        <nav className="flex justify-around py-6">
          <Link href="/">
            <motion.div
              initial={{ x: -400 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 90 }}
              className="flex items-center cursor-pointer"
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
          </Link>
          <motion.div
            initial={{ y: -400, opacity: 0 }}
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

            <div
              className="menu-item flex items-center z-50 slg:hidden"
              onClick={() => setMenu(!menu)}
            >
              {menuBtbRenderer()}
            </div>
          </motion.div>
        </nav>
      </div>

      <AnimatePresence>
        {menu ? (
          <motion.ul
            initial={{ opacity: 0, x: -800 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -800 }}
            transition={{ duration: 0.5 }}
            className={
              menu
                ? "flex overflow-hidden flex-col py-24 absolute z-40 w-full h-screen  bg-slate-100  dark:bg-gray-900  slg:hidden items-center font-medium dark:text-white"
                : ""
            }
          >
            <Link href="/" passHref>
              <motion.li
                initial={{ y: -300 }}
                animate={{ y: 0, transition: { delay: 0.4 } }}
                transition={{ duration: 0.5 }}
                className="mobileNavItem"
              >
                Home
              </motion.li>
            </Link>
            <Link href="/about" passHref>
              <motion.li
                initial={{ y: -300 }}
                animate={{ y: 0, transition: { delay: 0.6 } }}
                transition={{ duration: 0.5 }}
                className="mobileNavItem"
              >
                About
              </motion.li>
            </Link>
            <Link href="/contact" passHref>
              <motion.li
                initial={{ y: -300 }}
                animate={{ y: 0, transition: { delay: 0.7 } }}
                transition={{ duration: 0.5 }}
                className="mobileNavItem"
              >
                Contact
              </motion.li>
            </Link>
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default memo(Navbar);
