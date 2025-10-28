import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-[#150000]">
      {/* 👆 pt-28 fixes overlap with navbar and gives spacing */}
      
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold text-[#ff0000] drop-shadow-lg"
      >
        Transform Your Body <br /> Elevate Your Strength
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-6 text-gray-300 max-w-xl mx-auto text-sm md:text-base"
      >
        Join Royal Fitness and take your fitness journey to the next level. 
        Expert trainers, world-class equipment, and pure motivation.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 200 }}
        className="mt-8 bg-[#ff0000] text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition"
      >
        Join Now
      </motion.button>

      <motion.img
        src="https://img.freepik.com/free-photo/bodybuilder-training-arm-with-resistance-band_7502-4758.jpg"
        alt="gym"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-12 w-[90%] sm:w-[80%] md:w-[65%] lg:w-[50%] xl:w-[45%] rounded-2xl shadow-2xl object-cover"
        // 👆 fixes oversize issue, responsive scaling smooth now
      />
    </section>
  );
}
