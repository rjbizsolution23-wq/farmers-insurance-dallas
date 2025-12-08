"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";

const areas = [
  { name: "Addison", href: "/addison-insurance" },
  { name: "Plano", href: "/plano-insurance" },
  { name: "Frisco", href: "/frisco-insurance" },
  { name: "Richardson", href: "/richardson-insurance" },
  { name: "Dallas", href: "/" },
  { name: "Allen", href: "/allen-insurance" },
  { name: "McKinney", href: "/mckinney-insurance" },
  { name: "Carrollton", href: "/carrollton-insurance" },
];

export default function AreasServed() {
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
            <span className="gradient-text">Proudly Serving</span> Dallas & Surrounding Areas
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Local expertise for your neighborhood. I understand the unique insurance needs of North Texas communities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {areas.map((area, index) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link href={area.href}>
                  <div className="card-hover text-center">
                    <FaMapMarkerAlt className="text-3xl text-primary-600 mx-auto mb-2" />
                    <div className="font-semibold text-neutral-800">
                      {area.name}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
