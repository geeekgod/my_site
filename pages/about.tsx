import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";

const About = () => {
  return (
    <>
      <Head>
        <title>About | Rishabh Singh</title>
        <meta
          name="description"
          content="About Rishabh Singh. Get more information about me!"
        />
      </Head>
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center justify-center"
        >
          <h3 className="text-3xl font-semibold mt-7 border-black dark:border-white pb-4 border-b-4">
            About Me
          </h3>
        </motion.div>
        <div className="flex mx-10 flex-col  py-10 px-6  mt-4 mb-6  slg:mx-12 slg:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.7 } }}
            className="flex items-center justify-center slg:w-2/4 p-6"
          >
            <motion.img
              whileHover={{ scale: 1.07, transition: { type: "spring" } }}
              src={"/assets/my_pic.png"}
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
              languages and creating simple games. That initial spark grew into
              a full-blown passion that drives me today.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 0.6, delay: 1.3 }}
              className="text-md my-3 text-gray-600 dark:text-slate-400"
            >
              I&apos;m currently pursuing a Bachelor&apos;s in Computer
              Engineering while also serving as a Founding Engineer at{" "}
              <a
                className="dark:text-[#7C92F4] text-[#4262F0] font-semibold border-b-2 dark:border-[#7C92F4] border-[#4262F0] "
                href="https://ssingularity.co.in/"
                target="_blank"
                rel="noreferrer"
              >
                SSingularity Tech
              </a>
              .<br />
              My passion lies in sculpting digital experiences, spanning from
              crafting innovative apps and immersive websites to engineering
              robust systems. With three years of experience and collaborating with
              esteemed clients including MNCs, Big Four firms, and startups, I
              ensure that every project I undertake is honed to perfection,
              reflecting my unwavering dedication to excellence.
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
