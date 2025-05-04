"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { memo, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [audio, setAudio]: any = useState<any>();

  const pathname = usePathname();

  useEffect(() => {
    setMenu(false);
  }, [pathname]);

  useEffect(() => {
    setMenu(false);
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
          className="w-10 text-white"
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
          className="w-10 text-white"
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

  return (
    <>
      <div className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm">
        <nav className="flex justify-around py-6">
          <Link href="/">
            <motion.div
              initial={{ x: -400 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 90 }}
              className="flex items-center cursor-pointer"
            >
              <svg
                className="w-9 slg:w-12 text-white"
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
              <h3 className="text-xl slg:text-2xl font-semibold ml-2 text-white">
                Rishabh Singh
              </h3>
            </motion.div>
          </Link>
          <motion.div
            initial={{ y: -400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 90 }}
            className="flex items-center"
          >
            <ul className="hidden slg:flex items-center font-medium text-white">
              <Link href="/">
                <li className="mx-4 hover:text-primary transition-colors">
                  Home
                </li>
              </Link>
              <Link href="/about">
                <li className="mx-4 hover:text-primary transition-colors">
                  About
                </li>
              </Link>
              <Link href="/contact">
                <li className="mx-4 hover:text-primary transition-colors">
                  Contact
                </li>
              </Link>
              <Link href="/blogs">
                <li className="mx-4 hover:text-primary transition-colors">
                  Blogs
                </li>
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
          <motion.div
            initial={{ opacity: 0, x: -800 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -800 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-gray-900"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <Link href="/" passHref>
                <motion.div
                  initial={{ y: -300 }}
                  animate={{ y: 0, transition: { delay: 0.4 } }}
                  transition={{ duration: 0.5 }}
                  className="my-4 text-xl font-medium text-white hover:text-primary transition-colors"
                  onClick={() => setMenu(false)}
                >
                  Home
                </motion.div>
              </Link>
              <Link href="/about" passHref>
                <motion.div
                  initial={{ y: -300 }}
                  animate={{ y: 0, transition: { delay: 0.6 } }}
                  transition={{ duration: 0.5 }}
                  className="my-4 text-xl font-medium text-white hover:text-primary transition-colors"
                  onClick={() => setMenu(false)}
                >
                  About
                </motion.div>
              </Link>
              <Link href="/contact" passHref>
                <motion.div
                  initial={{ y: -300 }}
                  animate={{ y: 0, transition: { delay: 0.7 } }}
                  transition={{ duration: 0.5 }}
                  className="my-4 text-xl font-medium text-white hover:text-primary transition-colors"
                  onClick={() => setMenu(false)}
                >
                  Contact
                </motion.div>
              </Link>
              <Link href="/blogs" passHref>
                <motion.div
                  initial={{ y: -300 }}
                  animate={{ y: 0, transition: { delay: 0.7 } }}
                  transition={{ duration: 0.5 }}
                  className="my-4 text-xl font-medium text-white hover:text-primary transition-colors"
                  onClick={() => setMenu(false)}
                >
                  Blogs
                </motion.div>
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default memo(Navbar);
