import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Trainers", path: "/trainers" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-black/90 border-b border-red-600 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 text-white">
        <Link to="/" className="text-2xl font-bold text-[#ff0000]">
          Royal<span className="text-white">Fitness</span>
        </Link>

        <div className="hidden md:flex gap-8">
          {links.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="hover:text-[#ff0000] transition font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-red-600 px-4 pb-4 space-y-3">
          {links.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              onClick={() => setOpen(false)}
              className="block text-gray-300 hover:text-[#ff0000] transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
