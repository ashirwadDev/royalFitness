// src/components/Trainers.jsx
import React from "react";
import { motion } from "framer-motion";

const trainers = [
  {
    name: "Amit Sharma",
    img: "https://images.stockcake.com/public/f/0/f/f0ff521f-a8de-466e-83ef-52667757ce9d_large/focused-gym-trainer-stockcake.jpg",
    role: "Strength Coach",
  },
  {
    name: "Riya Mehta",
    img: "https://images.stockcake.com/public/5/6/9/569da7b3-d6b9-49f8-af90-f8810c1f2096_large/focused-fitness-trainer-stockcake.jpg",
    role: "Yoga & Flexibility Trainer",
  },
  {
    name: "Rohit Verma",
    img: "https://images.stockcake.com/public/f/0/2/f023c50d-b19e-4d6f-8e7a-a476ee943209_large/focused-gym-training-stockcake.jpg",
    role: "Cardio Specialist",
  },
];

export default function Trainers() {
  return (
    <section className="py-20 text-center bg-gradient-to-b from-[#150000] via-[#0a0a0a] to-black px-6">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-[#ff0000] mb-12"
      >
        Meet Our Trainers
      </motion.h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {trainers.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#111] border border-red-600 rounded-2xl overflow-hidden shadow-lg"
          >
            <img src={t.img} alt={t.name} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#ff0000]">{t.name}</h3>
              <p className="text-gray-300 text-sm mt-1">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
