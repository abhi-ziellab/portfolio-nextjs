'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">About Me</h2>
        <p className="text-lg text-gray-400 mb-6">
          I'm a passionate developer with expertise in building modern web applications.
          My focus is on creating beautiful, performant, and user-friendly experiences.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12">
          <div className="p-4 bg-secondary rounded-lg">
            <h3 className="font-bold mb-2">Frontend</h3>
            <p className="text-gray-400">React, Next.js, TailwindCSS</p>
          </div>
          <div className="p-4 bg-secondary rounded-lg">
            <h3 className="font-bold mb-2">Backend</h3>
            <p className="text-gray-400">Node.js, Python, PostgreSQL</p>
          </div>
          <div className="p-4 bg-secondary rounded-lg">
            <h3 className="font-bold mb-2">Design</h3>
            <p className="text-gray-400">Figma, Adobe XD</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}