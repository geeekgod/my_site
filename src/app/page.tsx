"use client";

import Head from "next/head";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Rishabh Singh</title>
        <meta
          name="description"
          content="Rishabh Singh Full-Stack Developer. Welcome to my website"
        />
      </Head>

      <div className="flex mx-10 flex-col py-10 px-6 rounded-md mt-4 mb-6 bg-gray-800 shadow-sm slg:mx-12 slg:flex-row slg:shadow-none slg:bg-transparent">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="img container flex items-center justify-center slg:w-2/4"
        >
          <Image
            src={"/assets/home.png"}
            alt="Home Bg"
            className="w-full"
            width={1024}
            height={1024}
          />
        </motion.div>
        <div className="flex flex-col justify-center slg:w-2/4">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, type: "spring", duration: 0.6 }}
            className="text-primary font-bold text-3xl my-2"
          >
            {"<Rishabh>"}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, type: "spring", duration: 0.6 }}
            className="font-bold text-3xl my-2 ml-5 text-white"
          >
            {"Software Engineer"}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, type: "spring", duration: 0.6 }}
            className="text-primary font-bold text-3xl my-2"
          >
            {"</Rishabh>"}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.2, duration: 1 } }}
            transition={{ delay: 0.8, type: "spring", duration: 0.6 }}
            className="font-medium text-md my-2 ml-5 text-white"
          >
            {"Developing quality software to"}
            <br />
            {"help businesses leverage their products."}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, type: "spring", duration: 0.6 }}
            className="my-4 mx-5"
          >
            <motion.button
              onClick={() => {
                setTimeout(() => router.push("/about"), 150);
              }}
              whileHover={{ scale: 1.07, backgroundColor: "#2F52EE" }}
              className="primaryBtn"
            >
              Read More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
