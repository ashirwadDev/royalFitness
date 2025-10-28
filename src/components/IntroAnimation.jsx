// src/components/IntroAnimation.jsx
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroAnimation({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // 🔥 ye important hai
    }, 4000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="fixed inset-0 bg-black flex flex-col items-center justify-center text-center z-[9999]"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-4xl md:text-6xl font-bold mb-4"
        >
          Welcome to
        </motion.h1>

        <motion.h2
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 1,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          className="text-[#ff0000] text-5xl md:text-7xl font-extrabold tracking-widest"
        >
          ROYAL <span className="text-white">FITNESS</span>
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "60%" }}
          transition={{ duration: 1.2, delay: 2 }}
          className="h-[3px] bg-[#ff0000] mt-6"
        ></motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
