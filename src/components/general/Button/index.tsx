"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  [key: string]: any;
}

const Button = ({
  children,
  onClick,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <motion.button
      className={`${className} cursor-pointer px-6 py-2 rounded-4xl transition-colors duration-200`}
      // whileHover={{ scale: 1.1 }}
      // whileTap={{ scale: 0.9 }}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
