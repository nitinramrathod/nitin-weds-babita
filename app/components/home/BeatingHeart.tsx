"use client";

import { motion } from "framer-motion";

export default function BeatingHeart() {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-orange-500 text-4xl"
      >
        ❤️
      </motion.div>
    </div>
  );
}
