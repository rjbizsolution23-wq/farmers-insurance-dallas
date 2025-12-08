"use client";

import { motion } from "framer-motion";
import { FaUserTie, FaDollarSign, FaClock, FaShieldAlt, FaHandshake, FaChartLine } from "react-icons/fa";

const benefits = [
  {
    icon: FaUserTie,
    title: "5 Years Experience",
    description: "Licensed professional with proven track record of helping Dallas families and businesses find the right coverage."
  },
  {
    icon: FaDollarSign,
    title: "$760 Average Savings",
    description: "My clients save an average of $760 per year while getting better coverage through smart policy optimization."
  },
  {
    icon: FaClock,
    title: "24/7 Claims Support",
    description: "Accidents don't wait for business hours. Get round-the-clock support when you need it most."
  },
  {
    icon: FaShieldAlt,
    title: "Comprehensive Coverage",
    description: "From auto to umbrella insurance, I provide complete protection for all aspects of your life."
  },
  {
    icon: FaHandshake,
    title: "Personalized Service",
    description: "Work directly with me, not a call center. Get personalized advice tailored to your unique needs."
  },
  {
    icon: FaChartLine,
    title: "Annual Reviews",
    description: "Free annual policy reviews to ensure you're always getting the best rates and coverage as your needs change."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="section bg-white/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">Christopher Evans</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Experience the difference of working with a dedicated local agent who puts your needs first.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-hover"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <benefit.icon className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-3">
                {benefit.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
