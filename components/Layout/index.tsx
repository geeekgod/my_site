import React, { memo } from "react";
import Navbar from "../Navbar";
import "tailwindcss/tailwind.css";
import Footer from "../Footer";

interface layoutProps {
  children: any;
}

const Layout = (props: layoutProps) => {
  return (
    <div className="flex flex-col body-wrapper">
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default memo(Layout);
