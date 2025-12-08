"use client";

import { motion } from "framer-motion";
import { FaPhone, FaArrowRight } from "react-icons/fa";

export default function CTASection() {
  const scrollToQuote = () => {
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section bg-gradient-to-br from-primary-600 to-secondary-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-float animation-delay-2000"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Save $760/Year on Insurance?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            Get your free, no-obligation quote today. Join hundreds of satisfied Dallas clients 
            who trust me with their insurance needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              onClick={scrollToQuote}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-primary-600 font-bold text-lg rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Get Free Quote
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.a
              href="tel:4694418906"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaPhone className="animate-pulse" />
              Call (469) 441-8906
            </motion.a>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-white/80"
          >
            ✓ Free quotes in minutes  ✓ No obligation  ✓ Expert local service
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
