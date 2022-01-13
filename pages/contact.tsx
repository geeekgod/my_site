import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import React, { memo, useEffect, useRef, useState } from "react";
import * as EmailValidator from "email-validator";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");
  const inputRef = useRef<any>();
  const [width, setWidth] = useState(0);
  const [msgSent, setMsgSent] = useState(false);
  const [msgSentErr, setMsgSentErr] = useState(false);
  const [err, setErr] = useState(false);

  const [size, setSize] = useState([0, 0]);

  const _submit = (e: any) => {
    setErr(false);
    setMsgSent(false);
    setMsgSentErr(false);
    e.preventDefault();
    if (
      name.trim().length > 4 &&
      email.trim().length > 7 &&
      subject.trim().length > 8 &&
      msg.trim().length > 10 &&
      EmailValidator.validate(email)
    ) {
      axios
        .post("/api/contact", {
          name: name,
          email: email,
          subject: subject,
          message: msg,
        })
        .then((res: any) => {
          if (res.data.msg) {
            setMsgSent(true);
          }
        })
        .catch((err: any) => {
          console.log(err);
        });
    } else {
      setErr(true);
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

  useEffect(() => {
    setErr(false);
    setMsgSentErr(false);
  }, [name, email, subject, msg]);

  useEffect(() => {
    if (msgSent) {
      setEmail("");
      setMsg("");
      setName("");
      setSubject("");
    }
    setTimeout(() => {
      setErr(false);
      setMsgSent(false);
      setMsgSentErr(false);
    }, 7000);
  }, [msgSent, msgSentErr, err]);
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
          className="flex items-center flex-col justify-center"
        >
          <h3 className="text-3xl font-semibold mt-7 border-black dark:border-white pb-4 border-b-4">
            Contact Me
          </h3>

          <h3 className="text-xl font-medium mt-6 opacity-60 px-12">
            Got an Idea to work on or Just say hello!
          </h3>
        </motion.div>
        <form
          onSubmit={_submit}
          className="flex mx-10 flex-col items-center justify-center py-10 px-6  mt-4 mb-6  slg:mx-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { type: "spring", duration: 0.6, delay: 0.6 },
            }}
            className="contactInpCont"
          >
            <label className="contactLabel">Name</label>
            <input
              className="contactInput"
              type="text"
              name="name"
              placeholder="Your Name.."
              ref={inputRef}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { type: "spring", duration: 0.6, delay: 0.8 },
            }}
            className="contactInpCont"
          >
            <label className="contactLabel">Email</label>
            <input
              className="contactInput"
              type="email"
              name="email"
              placeholder="Your Email.."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { type: "spring", duration: 0.6, delay: 1 },
            }}
            className="contactInpCont"
          >
            <label className="contactLabel">Subject</label>
            <input
              className="contactInput"
              type="subject"
              name="subject"
              placeholder={`Subject \tFor e.g. Topic or any Idea`}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { type: "spring", duration: 0.6, delay: 1.2 },
            }}
            className="contactInpCont"
          >
            <label className="contactLabel">Message</label>
            <textarea
              className="contactInput rounded-3xl"
              rows={5}
              name="message"
              style={{ width: width !== 0 ? width : "inherit" }}
              placeholder={`Message \tFor e.g. Short elaboration of your Subject`}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.07, backgroundColor: "#2F52EE" }}
            type="submit"
            className="bg-[#5672F0] text-white w-72 my-4 py-3 px-5 rounded-full focus:ring-4 focus:ring-[#C7D0FA] selection:cursor-not-allowed"
          >
            Submit
          </motion.button>
          <AnimatePresence>
            {msgSent && (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                className="bg-green-300 w-[300px] text-center my-2 text-green-800 py-2 px-12 rounded-lg"
              >
                <p>Message Sent!</p>
              </motion.div>
            )}
            {msgSentErr && (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                className="bg-red-300   w-[300px] text-center my-2 text-red-800 py-2 px-12 rounded-lg"
              >
                <p>Please try again later!</p>
              </motion.div>
            )}
            {err && (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                className="bg-red-300   w-[300px] text-center my-2 text-red-800 py-2 px-12 rounded-lg"
              >
                <p>Please check your inputs!</p>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </>
  );
};

export default memo(Contact);
