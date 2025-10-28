// src/components/Pricing.jsx
import React from "react";
import { motion } from "framer-motion";

const plans = [
  { title: "Basic", price: "₹999/mo", features: ["Gym Access", "Locker", "1 Trainer Session"] },
  { title: "Pro", price: "₹1499/mo", features: ["Everything in Basic", "Diet Plan", "Personal Trainer"] },
  { title: "Elite", price: "₹1999/mo", features: ["All Pro Features", "Unlimited Sessions", "Priority Access"] },
];

export default function Pricing() {
  return (
    <section className="py-20 text-center bg-gradient-to-b from-black via-[#0a0a0a] to-[#150000] px-6">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-[#ff0000] mb-12"
      >
        Pricing Plans
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {plans.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-[#111] border border-red-600 rounded-2xl p-8 text-left shadow-lg hover:shadow-red-800/40"
          >
            <h3 className="text-2xl font-bold text-[#ff0000] mb-3">{p.title}</h3>
            <p className="text-3xl font-bold mb-4">{p.price}</p>
            <ul className="space-y-2 text-gray-300 text-sm">
              {p.features.map((f, idx) => (
                <li key={idx}>• {f}</li>
              ))}
            </ul>
            <button className="mt-6 w-full bg-[#ff0000] py-2 rounded-lg font-semibold hover:bg-red-700 transition">
              Join Now
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
