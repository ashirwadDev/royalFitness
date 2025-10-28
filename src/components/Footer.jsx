// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black/90 border-t border-red-600 text-center py-6 text-gray-400 text-sm">
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="text-[#ff0000] font-semibold">Royal Fitness</span> | All Rights Reserved
      </p>
    </footer>
  );
}
