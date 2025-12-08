"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaUserShield, FaClock, FaDollarSign } from "react-icons/fa";

const features = [
  {
    icon: FaCheckCircle,
    text: "A+ Rated Agency"
  },
  {
    icon: FaUserShield,
    text: "Licensed Professional"
  },
  {
    icon: FaClock,
    text: "24/7 Claims Support"
  },
  {
    icon: FaDollarSign,
    text: "Best Price Guarantee"
  }
];

export default function TrustBar() {
  return (
    <section className="py-8 bg-white/70 backdrop-blur-sm border-y border-neutral-200">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center gap-3 justify-center"
            >
              <feature.icon className="text-2xl text-primary-600 flex-shrink-0" />
              <span className="text-sm md:text-base font-semibold text-neutral-700">
                {feature.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
