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
        <div className="flex items-center justify-center">
          <h3 className="text-3xl font-semibold mt-7 border-black dark:border-white pb-4 border-b-4">
            About Me
          </h3>
        </div>
        <div className="flex mx-10 flex-col  py-10 px-6  mt-4 mb-6  slg:mx-12 slg:flex-row">
          <div className="flex items-center justify-center slg:w-2/4 p-6">
            <img src={"/assets/myimage.png"} className="w-56 slg:w-72" />
          </div>
          <div className="flex flex-col justify-center slg:w-2/4">
            <h3 className="text-3xl my-2 font-semibold">Rishabh Singh</h3>
            <h3 className="text-xl my-1">Full-Stack Developer</h3>
            <h3 className="text-lg my-1 opacity-80">
              Based out in Mumbai, India
            </h3>
            <p className="text-md my-3 text-gray-600 dark:text-slate-400">
              I started programming back when I was at 14 , trying to use html
              and develop basic games & flex among my friends, but eventually,
              this passion evolved into today what i'm.
            </p>
            <p className="text-md my-3 text-gray-600 dark:text-slate-400">
              Currently working as a Web Developer at{" "}
              <motion.a
                whileHover={{ scale: 1.06 }}
                className="dark:text-[#7C92F4] text-[#4262F0] font-semibold border-b-2 dark:border-[#7C92F4] border-[#4262F0] "
                href="https://ssingularity.co.in/"
                target="_blank"
                rel="noreferrer"
              >
                Ssingularity Tech
              </motion.a>
              .{"\n"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
