import React, { memo } from "react";
import Navbar from "../Navbar";
import "tailwindcss/tailwind.css";
import Footer from "../Footer";
import { ThemeProvider } from "next-themes";

interface layoutProps {
  children: any;
}

const Layout = (props: layoutProps) => {
  return (
    <ThemeProvider enableSystem={true} attribute={"class"}>
      <div className="flex flex-col body-wrapper">
        <Navbar />
        {props.children}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default memo(Layout);
