"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const navLinks = [
  { to: "#about", text: "About" },
  { to: "#atuacao", text: "Atuação" },
  { to: "#equipe", text: "Equipe" },
  { to: "#contact", text: "Contact" },
];

export default function NavLinks({
  isMobile = false,
  onLinkClick = () => {},
  className = "",
}) {
  if (isMobile) {
    return (
      <div className={`space-y-8 text-center ${className}`}>
        {navLinks.map((link, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            <Link
              href={link.to}
              onClick={onLinkClick}
              className="block text-white hover:text-[#EBCB90] text-3xl font-bold transition-colors"
            >
              <motion.div whileTap={{ scale: 0.9 }}>{link.text}</motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className={`hidden md:flex space-x-8 self-end ${className}`}>
      {navLinks.map((link, index) => (
        <Link
          key={index}
          href={link.to}
          className="text-white hover:text-[#EBCB90] px-3 rounded-md text-sm font-medium transition-colors"
        >
          <motion.div whileTap={{ scale: 0.9 }}>{link.text}</motion.div>
        </Link>
      ))}
    </div>
  );
}
