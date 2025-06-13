"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "./components/Logo";
import NavLinks from "./components/NavLinks";
import SocialLinks from "../../components/general/SocialLinks";
import Button from "@/components/general/Button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Make sure these match your NavLinks component
  const navLinks = [
    { to: "#about", text: "About" },
    { to: "#atuacao", text: "Atuação" },
    { to: "#equipe", text: "Equipe" },
    { to: "#contact", text: "Contact" },
  ];

  return (
    <nav className="bg-gradient-to-r to-[#013849] from-[#011223] backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <NavLinks />
          <div className="hidden md:flex">
            <SocialLinks className="text-white" />
          </div>
          <div className="hidden md:flex self-end">
            <Button className="text-[#94754E] hover:bg-black hover:text-white font-bold bg-white">
              Agendar Consulta
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-white hover:text-[#EBCB90] focus:outline-none focus:text-[#EBCB90] transition-colors relative z-[60]"
              aria-label="Toggle menu"
            >
              <motion.svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </motion.svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="bg-[#022a3d]/90 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                {/* Mobile Navigation Links */}
                <div className="space-y-4 mb-6">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.to}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-white hover:text-[#EBCB90] py-2 px-3 rounded-md text-lg font-medium transition-colors border-b border-white/10 last:border-b-0"
                      >
                        <motion.div whileTap={{ scale: 0.9 }}>
                          {link.text}
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mb-6"
                >
                  <Button
                    className="w-full text-[#94754E] hover:bg-black hover:text-white font-bold bg-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Agendar Consulta
                  </Button>
                </motion.div>

                {/* Mobile Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-4 border-t border-white/10"
                >
                  <p className="text-white/70 text-sm mb-3 text-center">
                    Siga-nos:
                  </p>
                  <div className="flex justify-center">
                    <SocialLinks className="text-white hover:text-[#EBCB90]" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
