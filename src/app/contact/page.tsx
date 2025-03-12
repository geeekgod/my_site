import Head from "next/head";
import React from "react";
import { motion } from "framer-motion";
import { ContactForm } from "../../../components/main/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Rishabh Singh",
  description: "Contact Rishabh Singh. Get in touch with me!",
};

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact | Rishabh Singh</title>
        <meta
          name="description"
          content="Contact Rishabh Singh. Reach me out with any queries you've!"
        />
      </Head>
      <div>
        <div className="flex items-center flex-col justify-center">
          <h3 className="text-3xl font-semibold mt-7 border-black dark:border-white pb-4 border-b-4">
            Contact Me
          </h3>

          <h3 className="text-xl font-medium mt-6 opacity-60 px-12">
            Got an Idea to work on or Just say hello!
          </h3>
        </div>
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
