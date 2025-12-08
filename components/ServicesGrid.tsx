"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaCar, FaHome, FaBriefcase, FaHeart, FaBuilding, FaMotorcycle, FaUmbrella } from "react-icons/fa";

const services = [
  {
    icon: FaCar,
    title: "Auto Insurance",
    description: "Comprehensive coverage for your vehicles with competitive rates and 24/7 claims support.",
    href: "/auto-insurance-dallas",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: FaHome,
    title: "Home Insurance",
    description: "Protect your home and belongings with customizable coverage options and fast claims.",
    href: "/home-insurance-dallas",
    color: "from-green-500 to-green-600"
  },
  {
    icon: FaBriefcase,
    title: "Business Insurance",
    description: "Safeguard your business with tailored commercial insurance solutions for every industry.",
    href: "/business-insurance-dallas",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: FaHeart,
    title: "Life Insurance",
    description: "Secure your family's financial future with flexible life insurance policies.",
    href: "/life-insurance-dallas",
    color: "from-red-500 to-red-600"
  },
  {
    icon: FaBuilding,
    title: "Renters Insurance",
    description: "Affordable protection for your personal belongings and liability coverage.",
    href: "/renters-insurance-dallas",
    color: "from-yellow-500 to-yellow-600"
  },
  {
    icon: FaMotorcycle,
    title: "Motorcycle Insurance",
    description: "Specialized coverage for your motorcycle with roadside assistance included.",
    href: "/motorcycle-insurance-dallas",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: FaUmbrella,
    title: "Umbrella Insurance",
    description: "Extra liability protection beyond your standard policy limits for complete peace of mind.",
    href: "/umbrella-insurance-dallas",
    color: "from-indigo-500 to-indigo-600"
  },
];

export default function ServicesGrid() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Complete <span className="gradient-text">Insurance Solutions</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            From auto to umbrella coverage, I provide comprehensive insurance solutions 
            tailored to protect what matters most to you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={service.href}>
                <div className="card-hover h-full group cursor-pointer">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="text-3xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-800 mb-3 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="text-primary-600 font-semibold group-hover:underline">
                    Learn More →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
