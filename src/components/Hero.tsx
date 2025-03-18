'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">Hello, I'm [Your Name]</h1>
        <p className="text-xl sm:text-2xl text-gray-400 mb-8">Full Stack Developer & Designer</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-accent text-white px-8 py-3 rounded-full text-lg font-medium"
        >
          Get in touch
        </motion.button>
      </motion.div>
    </section>
  );
}