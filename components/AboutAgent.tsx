"use client";

import { motion } from "framer-motion";
import { FaAward, FaUsers, FaHandshake, FaCertificate, FaPhone } from "react-icons/fa";

export default function AboutAgent() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/christopher-evans-headshot.jpg"
                  alt="Christopher Evans - Farmers Insurance Agent"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-200 rounded-full blur-3xl opacity-50 -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary-200 rounded-full blur-3xl opacity-50 -z-10"></div>
              
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 -right-8 glass p-6 rounded-2xl shadow-xl"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-1">5+</div>
                  <div className="text-sm text-neutral-600">Years Experience</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
                About Your Agent
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet <span className="gradient-text">Christopher Evans</span>
            </h2>

            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              With over 5 years of experience serving the Dallas community, I'm dedicated to 
              helping families and businesses find the perfect insurance coverage at the best rates. 
              My clients save an average of <span className="font-bold text-primary-600">$760 per year</span> while 
              getting better protection.
            </p>

            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              As a licensed Farmers Insurance agent, I have access to a wide range of insurance 
              products and the expertise to guide you through every decision. Whether you need 
              auto, home, business, or life insurance, I'm here to provide personalized service 
              and peace of mind.
            </p>

            {/* Credentials Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaCertificate className="text-primary-600 text-xl" />
                </div>
                <div>
                  <div className="font-bold text-neutral-800">Licensed Agent</div>
                  <div className="text-sm text-neutral-600">Texas Insurance License</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaAward className="text-primary-600 text-xl" />
                </div>
                <div>
                  <div className="font-bold text-neutral-800">A+ Rated</div>
                  <div className="text-sm text-neutral-600">Top-Tier Service</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaUsers className="text-primary-600 text-xl" />
                </div>
                <div>
                  <div className="font-bold text-neutral-800">500+ Clients</div>
                  <div className="text-sm text-neutral-600">Satisfied Customers</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaHandshake className="text-primary-600 text-xl" />
                </div>
                <div>
                  <div className="font-bold text-neutral-800">Local Expert</div>
                  <div className="text-sm text-neutral-600">Dallas Specialist</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:4694418906"
                className="btn-primary group inline-flex items-center justify-center"
              >
                <FaPhone className="mr-2 group-hover:animate-pulse" />
                Call Christopher Today
              </a>
              <a
                href="/#quote"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Get Free Quote
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
