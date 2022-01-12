import React, { memo } from "react";
import Navbar from "../Navbar";
import "tailwindcss/tailwind.css";
import Footer from "../Footer";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

interface layoutProps {
  children: any;
}

const Layout = (props: layoutProps) => {
  return (
    <ThemeProvider enableSystem={true} attribute={"class"}>
      <Head>
        <link rel="icon" href="/assets/myimage.png" />
        <link rel="apple-touch-icon" href="/assets/myimage.png" />
      </Head>
      <div className="flex flex-col body-wrapper">
        <Navbar />
        {props.children}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default memo(Layout);
