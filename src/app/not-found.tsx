"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex justify-center flex-col py-16 items-center dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, type: "spring" }}
        className="flex items-center"
      >
        <h3 className="text-2xl font-semibold slg:text-5xl animate-bounce">
          404{" "}
        </h3>
        <div className="w-[2px] mx-5 h-10 bg-gray-400"></div>
        <h3 className="text-xl font-medium slg:text-4xl">Not Found</h3>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, type: "spring" }}
        className="flex items-center mt-4"
      >
        <Link href="/" passHref>
          <p className="text-primary text-lg slg:text-xl font-medium">
            Go to Home Page
          </p>
        </Link>
      </motion.div>
    </div>
  );
}
