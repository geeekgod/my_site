import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";

const CustomNotFound = () => {
  return (
    <>
      <Head>
        <title>Page Not Found | Rishabh Singh</title>
        <meta name="description" content="404 Error Page not found!" />
      </Head>
      <div>
        <div className="flex text-center justify-center mt-6 items-center py-4 px-7 h-full flex-col">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { delay: 0.7, duration: 0.5 },
            }}
            src="/assets/404.png"
            className="w-full md:w-3/12"
            alt="Page not found 404 error"
          />
          <motion.h1
            initial={{ opacity: 0, y: 200 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.9, duration: 0.8 },
            }}
            className=" text-xl md:text-2xl font-semibold mt-7 pb-4 "
          >
            The page you&apos;re looking for can&apos;t be found!
          </motion.h1>
        </div>
      </div>
    </>
  );
};

export default CustomNotFound;
