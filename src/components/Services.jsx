// src/components/Services.jsx
import React from "react";
import { motion } from "framer-motion";
import { Dumbbell, HeartPulse, Flame, Shield } from "lucide-react";

const services = [
  {
    icon: <Dumbbell size={40} className="text-[#ff0000]" />,
    title: "Strength Training",
    desc: "Build muscle and power with world-class gym equipment and guidance.",
  },
  {
    icon: <HeartPulse size={40} className="text-[#ff0000]" />,
    title: "Cardio Workouts",
    desc: "Boost stamina and heart health with our modern cardio machines.",
  },
  {
    icon: <Flame size={40} className="text-[#ff0000]" />,
    title: "Fat Burn Sessions",
    desc: "High-intensity workouts designed to torch calories and boost endurance.",
  },
  {
    icon: <Shield size={40} className="text-[#ff0000]" />,
    title: "Personal Training",
    desc: "Get one-on-one guidance from certified trainers for faster results.",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-[#0a0a0a] to-[#150000] text-center px-6 ">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-[#ff0000] mb-12"
      >
        Our Services
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#111] border border-red-600 p-8 rounded-2xl shadow-lg hover:shadow-red-800/40 transition"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-bold text-[#ff0000] mb-3">{service.title}</h3>
            <p className="text-gray-300 text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
