"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaAnchor, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Profil", href: "#profil" },
    { name: "Layanan Produksi", href: "#produksi" },
    { name: "Perawatan", href: "#perawatan" },
    { name: "Standar & ISO", href: "#standar" },
    { name: "Mitra", href: "#mitra" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaAnchor className={`text-3xl ${scrolled ? "text-maritime-blue" : "text-white"} transition-colors`} />
          <div>
            <span
              className={`text-2xl font-bold tracking-wide block leading-none ${
                scrolled ? "text-maritime-blue" : "text-white"
              } transition-colors`}
            >
              PT CIH INDONESIA
            </span>
            {/* <span
              className={`block text-xs tracking-widest ${
                scrolled ? "text-gray-500" : "text-gray-300"
              } transition-colors`}
            >
              INDONESIA
            </span> */}
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`${
                scrolled ? "text-gray-600 hover:text-ocean-blue" : "text-gray-200 hover:text-white"
              } transition-colors`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link
          href="#kontak"
          className="hidden md:block px-6 py-2 bg-maritime-blue text-white text-sm font-semibold rounded hover:bg-ocean-blue transition shadow-lg"
        >
          Hubungi Kami
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FaTimes className={scrolled ? "text-gray-800" : "text-white"} />
          ) : (
            <FaBars className={scrolled ? "text-gray-800" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-600 font-semibold hover:text-ocean-blue"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#kontak"
            className="px-6 py-2 bg-maritime-blue text-white text-sm font-semibold rounded hover:bg-ocean-blue transition text-center"
            onClick={() => setIsOpen(false)}
          >
            Hubungi Kami
          </Link>
        </div>
      )}
    </nav>
  );
}
