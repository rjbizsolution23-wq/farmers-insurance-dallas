"use client";

import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Plano, TX",
    rating: 5,
    text: "Christopher saved me over $800 on my auto and home insurance! His personalized service and attention to detail made the whole process easy. Highly recommend!",
    insurance: "Auto & Home"
  },
  {
    name: "Michael Rodriguez",
    location: "Frisco, TX",
    rating: 5,
    text: "Best insurance agent I've worked with. Fast quotes, great prices, and always available when I have questions. Switched all my policies to Christopher.",
    insurance: "Business & Auto"
  },
  {
    name: "Jennifer Smith",
    location: "Dallas, TX",
    rating: 5,
    text: "After my accident, Christopher handled everything. The claims process was smooth and stress-free. So glad I chose him as my agent!",
    insurance: "Auto Insurance"
  },
  {
    name: "David Chen",
    location: "Richardson, TX",
    rating: 5,
    text: "Great experience from start to finish. Christopher took time to explain all my options and found me the perfect coverage at a price that fits my budget.",
    insurance: "Home Insurance"
  },
  {
    name: "Lisa Martinez",
    location: "Addison, TX",
    rating: 5,
    text: "Professional, knowledgeable, and truly cares about his clients. Christopher helped me understand my policies better and saved me money too!",
    insurance: "Renters Insurance"
  },
  {
    name: "Robert Wilson",
    location: "Dallas, TX",
    rating: 5,
    text: "I own a small business and Christopher set up all our commercial insurance. His expertise and responsiveness are unmatched. Couldn't be happier!",
    insurance: "Business Insurance"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="section bg-white/70">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what real clients have to say about their experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
                <FaQuoteLeft className="text-3xl text-primary-200" />
              </div>
              
              <p className="text-neutral-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-neutral-200 pt-4">
                <div className="font-bold text-neutral-800">{testimonial.name}</div>
                <div className="text-sm text-neutral-600">{testimonial.location}</div>
                <div className="text-xs text-primary-600 font-semibold mt-1">
                  {testimonial.insurance}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="inline-block glass px-6 py-3 rounded-full">
            <span className="font-bold text-2xl text-primary-600">5.0</span>
            <span className="text-neutral-600 mx-2">•</span>
            <span className="text-neutral-700">Average Rating</span>
            <span className="text-neutral-600 mx-2">•</span>
            <span className="text-neutral-700">500+ Reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
