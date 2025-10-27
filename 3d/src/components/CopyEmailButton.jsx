import React, { useState } from "react";
import copyImg from "../assets/copy.svg";
import copyDone from "../assets/copy-done.svg";
import { AnimatePresence, motion } from "framer-motion";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "afaqalikhanp@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <motion.button
      onClick={copyToClipboard}
      className="bg-primary px-1 py-4 text-sm font-extralight w-48 cursor-pointer rounded-full overflow-hidden text-center"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.p
            key="copied"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="flex gap-2 justify-center items-center"
          >
            <img src={copyDone} className="w-5" />
            Email has Copied
          </motion.p>
        ) : (
          <motion.p
            key="copy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="flex gap-2 justify-center items-center"
          >
            <img src={copyImg} className="w-5" />
            Copy Email Address
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailButton;
