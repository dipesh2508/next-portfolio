"use client";

import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 h-1 bg-cta origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgress; 