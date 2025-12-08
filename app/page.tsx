"use client";

import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import QuoteForm from "@/components/QuoteForm";
import ServicesGrid from "@/components/ServicesGrid";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServed from "@/components/AreasServed";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="gradient-bg">
      {/* Hero Section */}
      <Hero />

      {/* Trust Bar */}
      <TrustBar />

      {/* Instant Quote Section */}
      <section id="quote" className="section bg-white/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get Your <span className="gradient-text">Free Quote</span> Today
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Save an average of $760/year. Get personalized quotes in minutes.
            </p>
          </motion.div>
          <QuoteForm />
        </div>
      </section>

      {/* Services Grid */}
      <ServicesGrid />

      {/* Stats Section */}
      <StatsSection />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Areas Served */}
      <AreasServed />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
