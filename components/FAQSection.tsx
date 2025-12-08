"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How much can I save on insurance?",
    answer: "My clients save an average of $760 per year. Actual savings depend on your current coverage, driving history, and specific needs. I'll compare multiple options to find you the best rate."
  },
  {
    question: "What types of insurance do you offer?",
    answer: "I offer comprehensive insurance solutions including Auto, Home, Business, Life, Renters, Motorcycle, and Umbrella insurance. As a Farmers Insurance agent, I can bundle policies for additional savings."
  },
  {
    question: "How quickly can I get coverage?",
    answer: "Many policies can start within 24 hours. For immediate coverage needs, call me at (469) 441-8906 and we'll get you protected right away."
  },
  {
    question: "Do you offer free quotes?",
    answer: "Absolutely! All quotes are 100% free with no obligation. Fill out the form above or call me directly to get your personalized quote within minutes."
  },
  {
    question: "What areas do you serve?",
    answer: "I serve Dallas and all surrounding communities including Plano, Frisco, Richardson, Addison, Allen, McKinney, and Carrollton. If you're in North Texas, I can help!"
  },
  {
    question: "Can you help with claims?",
    answer: "Yes! I provide 24/7 claims support. I'll guide you through the entire claims process and work directly with Farmers Insurance to ensure quick resolution."
  },
  {
    question: "What makes you different from online insurance companies?",
    answer: "You get personalized service from a local expert who knows your community. I review your policies annually, help with claims, and I'm available whenever you need me - not just a 1-800 number."
  },
  {
    question: "Do you offer discounts?",
    answer: "Yes! I offer multiple discounts including multi-policy bundling, safe driver, good student, home security, and more. I'll identify every discount you qualify for to maximize your savings."
  }
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="card mb-4"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left"
      >
        <h3 className="text-lg font-bold text-neutral-800 pr-4">
          {faq.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <FaChevronDown className="text-primary-600" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-neutral-600 pt-4 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Frequently Asked</span> Questions
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Get answers to common questions about insurance coverage, pricing, and my services.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-neutral-600 mb-4">
            Don't see your question answered?
          </p>
          <a href="tel:4694418906" className="btn-primary">
            Call Me: (469) 441-8906
          </a>
        </motion.div>
      </div>
    </section>
  );
}
