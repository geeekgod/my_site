"use client";

import { motion } from "framer-motion";
import React from "react";

export default function About() {
  return (
    <div className="text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center justify-center"
      >
        <h3 className="text-3xl font-semibold mt-7 border-black dark:border-white pb-4 border-b-4">
          About Me
        </h3>
      </motion.div>
      <div className="flex mx-10 flex-col py-10 px-6 mt-4 mb-6 slg:mx-12 slg:flex-row">
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.7 } }}
          className="flex items-center justify-center slg:w-2/4 p-6"
        >
          <motion.img
            whileHover={{ scale: 1.07, transition: { type: "spring" } }}
            src="/assets/my_pic.png"
            alt="Rishabh Singh"
            className="w-56 slg:w-72 cursor-pointer border-[6px] rounded-full bg-[#4262F0] border-[#4262F0] dark:bg-[#7C92F4] dark:border-[#7C92F4]"
          />
        </motion.div>
        <div className="flex flex-col justify-center slg:w-2/4">
          <motion.h3
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", delay: 0.6 }}
            className="text-3xl my-2 font-semibold"
          >
            Rishabh Singh
          </motion.h3>
          <motion.h3
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", delay: 0.8 }}
            className="text-xl my-1"
          >
            Software Engineer
          </motion.h3>
          <motion.h3
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", delay: 1 }}
            className="text-lg my-1 opacity-80"
          >
            Based out in Mumbai, India
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.6, delay: 0.9 }}
            className="text-md my-3 text-gray-600 dark:text-slate-400"
          >
            I started programming when I was just 14, tinkering with basic
            languages and creating simple games for fun. That initial spark grew
            into a full-blown passion that drives me today.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.6, delay: 1.3 }}
            className="text-md my-3 text-gray-600 dark:text-slate-400"
          >
            Currently, working as a SDE 2 at{" "}
            <a
              className="text-[#7C92F4] font-semibold border-b-2 border-[#7C92F4] "
              href="https://inkasure.com/"
              target="_blank"
              rel="noreferrer"
            >
              Inka
            </a>
            .<br />I thrive on crafting digital experiences, whether it&apos;s
            apps, websites, or systems - anything that runs on a computer. With
            three years of experience under my belt, I make sure everything I
            work on is polished to perfection.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
