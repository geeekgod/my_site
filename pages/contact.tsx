import { motion } from "framer-motion";
import Head from "next/head";
import React, { memo, useEffect, useRef, useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");
  const inputRef = useRef<any>();
  const [width, setWidth] = useState(0);

  const [size, setSize] = useState([0, 0]);

  const _submit = (e: any) => {
    e.preventDefault();
    if (
      name.trim().length > 4 &&
      email.trim().length > 7 &&
      subject.trim().length > 8 &&
      msg.trim().length > 10
    ) {
      console.log({ name: name, email: email, subject: subject, message: msg });
    }
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setSize([window.innerWidth, window.innerHeight]);
    });
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      setWidth(inputRef.current.offsetWidth);
    }
  }, [inputRef, size]);

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
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center justify-center"
        >
          <h3 className="text-3xl font-semibold mt-7 border-black dark:border-white pb-4 border-b-4">
            Contact Me
          </h3>
        </motion.div>
        <form
          onSubmit={_submit}
          className="flex mx-10 flex-col items-center justify-center py-10 px-6  mt-4 mb-6  slg:mx-12"
        >
          <div className="contactInpCont">
            <label className="contactLabel">Name</label>
            <input
              className="contactInput"
              type="text"
              name="name"
              placeholder="Your Name.."
              ref={inputRef}
            />
          </div>
          <div className="contactInpCont">
            <label className="contactLabel">Email</label>
            <input
              className="contactInput"
              type="email"
              name="email"
              placeholder="Your Email.."
            />
          </div>
          <div className="contactInpCont">
            <label className="contactLabel">Subject</label>
            <input
              className="contactInput"
              type="subject"
              name="subject"
              placeholder={`Subject \tFor e.g. Topic or any Idea`}
            />
          </div>
          <div className="contactInpCont">
            <label className="contactLabel">Message</label>
            <textarea
              className="contactInput rounded-3xl"
              rows={5}
              name="message"
              style={{ width: width !== 0 ? width : "inherit" }}
              placeholder={`Message \tFor e.g. Short elaboration of your Subject`}
            />
          </div>
          <button
            type="submit"
            className="bg-[#5672F0] text-white w-72 my-4 py-3 px-5 rounded-full focus:ring-4 focus:ring-[#C7D0FA] selection:cursor-not-allowed"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default memo(Contact);
