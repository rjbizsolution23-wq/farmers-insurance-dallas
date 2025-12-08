"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const quoteSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone must be at least 10 digits"),
  insuranceType: z.string().min(1, "Please select insurance type"),
  zipCode: z.string().min(5, "ZIP code must be 5 digits"),
  message: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const insuranceTypes = [
  "Auto Insurance",
  "Home Insurance",
  "Business Insurance",
  "Life Insurance",
  "Renters Insurance",
  "Motorcycle Insurance",
  "Umbrella Insurance",
];

export default function QuoteForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In production, send to your webhook/API
    console.log("Quote request:", data);
    
    // Track conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'generate_lead', {
        event_category: 'Quote',
        event_label: data.insuranceType,
      });
    }
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto"
    >
      <div className="glass rounded-3xl p-8 md:p-12 shadow-2xl">
        {isSubmitted ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-12"
          >
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheckCircle className="text-white text-5xl" />
            </div>
            <h3 className="text-3xl font-bold text-neutral-800 mb-4">
              Quote Request Received!
            </h3>
            <p className="text-lg text-neutral-600 mb-6">
              Thank you! I'll contact you within 1 hour with your personalized quote.
            </p>
            <a href="tel:4694418906" className="btn-primary inline-block">
              Call Me Now: (469) 441-8906
            </a>
          </motion.div>
        ) : (
          <>
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-2">
                Get Your Free Quote
              </h3>
              <p className="text-neutral-600">
                Fill out the form below and I'll get back to you within 1 hour
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="label">
                    Full Name *
                  </label>
                  <input
                    {...register("fullName")}
                    type="text"
                    id="fullName"
                    className="input"
                    placeholder="John Doe"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="label">
                    Email Address *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    className="input"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="label">
                    Phone Number *
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    id="phone"
                    className="input"
                    placeholder="(469) 555-0123"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                {/* ZIP Code */}
                <div>
                  <label htmlFor="zipCode" className="label">
                    ZIP Code *
                  </label>
                  <input
                    {...register("zipCode")}
                    type="text"
                    id="zipCode"
                    className="input"
                    placeholder="75287"
                  />
                  {errors.zipCode && (
                    <p className="text-red-500 text-sm mt-1">{errors.zipCode.message}</p>
                  )}
                </div>
              </div>

              {/* Insurance Type */}
              <div>
                <label htmlFor="insuranceType" className="label">
                  Type of Insurance *
                </label>
                <select
                  {...register("insuranceType")}
                  id="insuranceType"
                  className="input"
                >
                  <option value="">Select Insurance Type</option>
                  {insuranceTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.insuranceType && (
                  <p className="text-red-500 text-sm mt-1">{errors.insuranceType.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="label">
                  Additional Details (Optional)
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={4}
                  className="input"
                  placeholder="Tell me about your insurance needs..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Get My Free Quote
                    <FaArrowRight className="inline ml-2" />
                  </>
                )}
              </motion.button>

              <p className="text-center text-sm text-neutral-500">
                By submitting, you agree to be contacted about insurance quotes. No spam, ever.
              </p>
            </form>
          </>
        )}
      </div>
    </motion.div>
  );
}
