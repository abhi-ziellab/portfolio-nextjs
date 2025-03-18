'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Get in Touch</h2>
        <p className="text-lg text-gray-400 mb-12">
          I'm always open to new opportunities and interesting projects.
          Feel free to reach out!
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:your.email@example.com"
            className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}