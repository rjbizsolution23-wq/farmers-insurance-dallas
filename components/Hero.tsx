"use client";

import { motion } from "framer-motion";
import { FaStar, FaAward, FaShieldAlt, FaPhone, FaArrowRight } from "react-icons/fa";

export default function Hero() {
  const scrollToQuote = () => {
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-3 mb-6"
            >
              <div className="trust-badge">
                <FaStar className="text-yellow-500" />
                <span>A+ Rated Agency</span>
              </div>
              <div className="trust-badge">
                <FaAward className="text-primary-600" />
                <span>5 Years Experience</span>
              </div>
              <div className="trust-badge">
                <FaShieldAlt className="text-green-600" />
                <span>Licensed Agent</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Dallas Insurance{" "}
              <span className="gradient-text">Made Simple</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-neutral-600 mb-8 leading-relaxed"
            >
              Save an average of <span className="font-bold text-primary-600">$760/year</span> with 
              personalized insurance solutions. Expert service you can trust.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={scrollToQuote}
                className="btn-primary group"
              >
                Get Free Quote
                <FaArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="tel:4694418906"
                className="btn-secondary group"
              >
                <FaPhone className="inline mr-2 group-hover:animate-pulse" />
                Call (469) 441-8906
              </a>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex items-center gap-8 flex-wrap"
            >
              <div>
                <div className="text-3xl font-bold text-primary-600">500+</div>
                <div className="text-sm text-neutral-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">$760</div>
                <div className="text-sm text-neutral-600">Avg. Savings/Year</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">5.0</div>
                <div className="text-sm text-neutral-600 flex items-center gap-1">
                  <FaStar className="text-yellow-500" />
                  Rating
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Hero Image/Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="glass p-8 rounded-3xl shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl">
                      <FaShieldAlt className="text-6xl text-primary-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-800 mb-2">
                      Protected & Trusted
                    </h3>
                    <p className="text-neutral-600">
                      Comprehensive coverage for your peace of mind
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">✓</span>
                  </div>
                  <div>
                    <div className="font-bold text-neutral-800">Fast Approval</div>
                    <div className="text-sm text-neutral-600">Coverage in 24hrs</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
