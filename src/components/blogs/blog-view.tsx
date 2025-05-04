"use client";

import React from "react";
import { motion } from "framer-motion";
import { useArticle } from "../../hooks/useArticle";

export const BlogView = () => {
  const { articles, loading, error } = useArticle();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }
  if (articles.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500">No articles found</p>
      </div>
    );
  }

  return (
    <div className="mx-auto p-4 px-0 flex justify-center sm:max-w-xl md:max-w-7xl mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 px-4 md:px-0">
        {articles.map((article, index) => (
          <motion.div
            key={`article-${article.guid}-${index}`}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="w-full bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 relative cursor-pointer"
          >
            <img
              className="h-60 w-full object-cover rounded-t-xl"
              src={article.description.match(/<img[^>]+src="([^">]+)"/)?.[1]}
              alt={article.title}
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {article.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {article.categories.map((category, index) => (
                  <a href={`#${category}`} key={index}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                    {index < article.categories.length - 1 && ", "}
                  </a>
                ))}
              </p>
              <motion.a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="primaryBtn flex flex-row items-center w-fit"
                whileHover={{ scale: 1.07, backgroundColor: "#2F52EE" }}
              >
                <span>Read more</span>
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
