import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Home: NextPage = () => {
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

      <div className="flex mx-10 flex-col  py-10 px-6 rounded-md mt-4 mb-6 bg-slate-100 shadow-sm dark:bg-gray-800 slg:mx-12 slg:flex-row  slg:shadow-none slg:dark:bg-transparent slg:bg-transparent">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="imgcontainer flex items-center justify-center slg:w-2/4"
        >
          <img src={"/assets/Development-cuate.png"} className="w-full" />
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
            className="font-bold text-3xl my-2 ml-5 dark:text-white"
          >
            {"Full-Stack Developer"}
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
            className="font-medium text-md my-2 ml-5 dark:text-white"
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
              whileHover={{ scale: 1.07 }}
              className="bg-[#5672F0] text-white py-2 px-5 rounded-full focus:ring-4 focus:ring-[#C7D0FA] selection:cursor-not-allowed "
            >
              Read More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
