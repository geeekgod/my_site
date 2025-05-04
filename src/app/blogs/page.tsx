import Head from "next/head";
import React from "react";
import { Metadata } from "next";
import { BlogView } from "../../components/blogs/blog-view";

export const metadata: Metadata = {
  title: "Blogs | Rishabh Singh",
  description: "Blogs by Rishabh Singh. Read my blogs on various topics!",
};

const Blogs = () => {
  return (
    <>
      <Head>
        <title>Blog | Rishabh Singh</title>
        <meta
          name="description"
          content="Blogs by Rishabh Singh. Read my blogs on various topics!"
        />
      </Head>
      <div className="text-white">
        <div className="flex items-center flex-col justify-center">
          <h3 className="text-3xl font-semibold mt-7 border-white pb-4 border-b-4">
            My Blogs
          </h3>

          <h3 className="text-xl font-medium mt-6 text-gray-300 px-12 text-center">
            Read my blogs on various topics, including technology, programming,
            and more!
          </h3>
        </div>
        <BlogView />
      </div>
    </>
  );
};

export default Blogs;
