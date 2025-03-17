"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import React, { memo, useEffect, useState } from "react";

const Footer = () => {
  const { theme } = useTheme();
  const [themeEnable, setThemeEnable] = useState(false);

  const date = new Date();

  useEffect(() => {
    setThemeEnable(true);
  }, []);

  const socialDivVariants = {
    initial: { opacity: 0, y: 100 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", delay: 0.6, duration: 1 },
    },
  };

  const socialLinksVariants = {
    hover: { scale: 1.26, transition: { type: "spring", stiffness: 200 } },
  };

  const footerTxtVariants = {
    initial: { opacity: 0, y: 100 },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <footer className="mb-0 mt-auto text-white">
      <div className="py-4">
        <motion.div
          variants={socialDivVariants}
          initial="initial"
          animate="animate"
          className="flex justify-center py-4"
        >
          <motion.a
            variants={socialLinksVariants}
            whileHover="hover"
            target="_blank"
            rel="noreferrer"
            href="mailto: rishabh@geeekgod.in"
          >
            <svg
              className="w-8 mx-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#FFFF"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zm.192 8.159 6.57-4.027L8 9.586l1.239-.757.367.225A4.49 4.49 0 0 0 8 12.5c0 .526.09 1.03.256 1.5H2a2 2 0 0 1-1.808-1.144M16 4.697v4.974A4.5 4.5 0 0 0 12.5 8a4.5 4.5 0 0 0-1.965.45l-.338-.207z" />
              <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354 1.25 1.25a.5.5 0 0 1-.708.708L13 12.207V14a.5.5 0 0 1-1 0v-1.717l-.28.305a.5.5 0 0 1-.737-.676l1.149-1.25a.5.5 0 0 1 .722-.016" />
            </svg>
          </motion.a>

          <motion.a
            variants={socialLinksVariants}
            whileHover="hover"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/geeekgod/"
          >
            <svg
              className="w-8 mx-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#FFFF"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
          </motion.a>

          <motion.a
            variants={socialLinksVariants}
            whileHover="hover"
            target="_blank"
            rel="noreferrer"
            href="https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=rishabhh-singh"
          >
            <svg
              className="w-8 mx-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#FFFF"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </motion.a>
          <motion.a
            variants={socialLinksVariants}
            whileHover="hover"
            target="_blank"
            rel="noreferrer"
            href="https://x.com/thisisgeeekgod"
          >
            <svg
              className="w-8 mx-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#FFFF"
            >
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
            </svg>
          </motion.a>
        </motion.div>
        <div className="flex justify-center py-1 pb-3 dark:text-white cursor-pointer">
          <motion.p
            variants={footerTxtVariants}
            initial="initial"
            animate="animate"
            transition={{ type: "spring", delay: 0.6, duration: 1 }}
            className="mx-1"
          >
            Made with &#x1f49d;
          </motion.p>
          <motion.div
            variants={footerTxtVariants}
            initial="initial"
            animate="animate"
            transition={{ type: "spring", delay: 0.8, duration: 1 }}
            className="mx-1"
          >
            •
          </motion.div>
          {/*  */}
          <motion.p
            variants={footerTxtVariants}
            initial="initial"
            animate="animate"
            transition={{ type: "spring", delay: 0.8, duration: 1 }}
            className="mx-1"
          >{`© ${date.getFullYear()}`}</motion.p>
          <motion.div
            variants={footerTxtVariants}
            initial="initial"
            animate="animate"
            transition={{ type: "spring", delay: 1, duration: 1 }}
            className="mx-1"
          >
            •
          </motion.div>
          <motion.p
            variants={footerTxtVariants}
            initial="initial"
            animate="animate"
            transition={{ type: "spring", delay: 1.2, duration: 1 }}
            className="mx-1 "
          >
            Rishabh Singh
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
