// src/components/Contact.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500); // hide toast after 2.5s
  };

  return (
    <section className="py-20 px-6 text-center bg-gradient-to-b from-[#150000] via-[#0a0a0a] to-black text-white relative overflow-hidden">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-[#ff0000] mb-12"
      >
        Contact Us
      </motion.h2>

      {/* Form Section */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-lg mx-auto bg-[#111] border border-red-600 p-8 rounded-2xl space-y-5 mb-12 shadow-lg shadow-red-900/30"
      >
        <input
          type="text"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded bg-black text-white border border-gray-700 focus:border-red-600 outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded bg-black text-white border border-gray-700 focus:border-red-600 outline-none"
        />
        <textarea
          rows="4"
          placeholder="Your Message"
          required
          className="w-full p-3 rounded bg-black text-white border border-gray-700 focus:border-red-600 outline-none"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-[#ff0000] py-3 rounded font-bold hover:bg-red-700 transition"
        >
          Send Message
        </button>
      </motion.form>

      {/* Google Map */}
      <div className="max-w-5xl mx-auto border-2 border-red-700 rounded-2xl overflow-hidden shadow-lg">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114031.70389770198!2d83.28084344335936!3d26.728711399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39915dc5570d35e3%3A0x5ae8db528fd29c15!2sRoyal%20Fitness%20Gym!5e0!3m2!1sen!2sin!4v1761637558476!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          className="w-full"
        ></iframe>
      </div>

      {/* ✅ Toast Message */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.8 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-[#ff0000] text-white font-semibold py-3 px-6 rounded-full shadow-lg shadow-red-800/40"
          >
            ✅ Message Sent Successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
