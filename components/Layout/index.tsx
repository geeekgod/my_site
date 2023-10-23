import React, { memo, useEffect, useState } from "react";
import Navbar from "../Navbar";
import "tailwindcss/tailwind.css";
import Footer from "../Footer";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

interface layoutProps {
  children: any;
}

const Layout = (props: layoutProps) => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    let body: any = document.getElementsByTagName("body");
    body = body[0];
    if (body.style) {
      body.style.overflow = menu ? "hidden" : "auto";
    }
  }, [menu]);

  return (
    <ThemeProvider enableSystem={true} attribute={"class"}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Rishabh Singh</title>
        <link rel="icon" href="/assets/my_pic.png" />
        <link rel="apple-touch-icon" href="/assets/my_pic.png" />
        <meta
          name="description"
          content="Im a passionate Software Engineer. I develop quality software to help businesses to leverage their products."
        />
        <meta
          name="keywords"
          content="Rishabh, Singh, Rishabh Singh Software Engineer, Software Engineer, Rishabh Singh Fullstack developer, Rishabh Singh Software Engineer Mumbai, Rishabh Singh Fullstack developer Mumbai, Software Engineer in Mumbai, Fullstack,Full-Stack,Full-Stack Developer, Frontend, Developer, Frontend Developer, Web, website, Website Developer, Web Developer, thefrontendrish, geeekgod, thisisgeeekgod, Rishabh Singh geeekgod, geeekgod Software Engineer, geeekgod.in, wwww.geeekgod.in"
        />
        <meta name="”robots”" content="index, follow" />

        <link rel="canonical" href="https://geeekgod.in/" />

        <meta property="og:type" content="game web app" />
        <meta
          property="og:title"
          content="Rishabh Singh, Software Engineer personal website."
        />
        <meta
          property="og:description"
          content="Im a passionate Software Engineer. I develop quality software to help businesses to leverage their products."
        />
        <meta property="og:url" content="https://geeekgod.in/" />
        <meta property="og:site_name" content="Rishabh Singh" />
        <meta property="og:image" content="https://www.geeekgod.in/assets/my_pic.png" />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
      </Head>
      <div
        className={
          menu
            ? "flex flex-col body-wrapper overflow-hidden"
            : "flex flex-col body-wrapper"
        }
      >
        <Navbar menu={menu} setMenu={setMenu} />
        <AnimatePresence>
          {menu ? (
            <motion.ul
              initial={{ opacity: 0, x: -800 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -800 }}
              transition={{ duration: 0.5 }}
              className={
                menu
                  ? "flex overflow-hidden flex-col py-24 absolute z-40 w-full h-screen  bg-slate-100  dark:bg-gray-900  slg:hidden items-center font-medium dark:text-white"
                  : ""
              }
            >
              <Link href="/" passHref>
                <motion.li
                  initial={{ y: -300 }}
                  animate={{ y: 0, transition: { delay: 0.4 } }}
                  transition={{ duration: 0.5 }}
                  className="mobileNavItem"
                >
                  Home
                </motion.li>
              </Link>
              <Link href="/about" passHref>
                <motion.li
                  initial={{ y: -300 }}
                  animate={{ y: 0, transition: { delay: 0.6 } }}
                  transition={{ duration: 0.5 }}
                  className="mobileNavItem"
                >
                  About
                </motion.li>
              </Link>
              <Link href="/contact" passHref>
                <motion.li
                  initial={{ y: -300 }}
                  animate={{ y: 0, transition: { delay: 0.7 } }}
                  transition={{ duration: 0.5 }}
                  className="mobileNavItem"
                >
                  Contact
                </motion.li>
              </Link>
            </motion.ul>
          ) : null}
        </AnimatePresence>
        {props.children}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default memo(Layout);
