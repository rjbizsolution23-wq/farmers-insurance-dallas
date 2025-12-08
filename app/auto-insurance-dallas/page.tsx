import { Metadata } from "next";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Auto Insurance Dallas TX | Save $760/Year | Christopher Evans",
  description: "Get affordable auto insurance in Dallas, TX. Save an average of $760/year with comprehensive coverage. Free quotes, 5 years experience, A+ rated. Call (469) 441-8906.",
  keywords: ["auto insurance Dallas", "car insurance Dallas TX", "cheap auto insurance", "Dallas car insurance quotes"],
};

export default function AutoInsurancePage() {
  return (
    <div className="gradient-bg">
      {/* Hero Section */}
      <section className="section pt-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Dallas <span className="gradient-text">Auto Insurance</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 mb-8">
              Save an average of $760/year with comprehensive auto insurance coverage. 
              Protect your vehicle and your family with trusted local service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:4694418906" className="btn-primary">
                Call (469) 441-8906
              </a>
              <a href="#quote" className="btn-secondary">
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Options */}
      <section className="section bg-white/50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">
            Comprehensive <span className="gradient-text">Coverage Options</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Liability Coverage",
                description: "Required by Texas law. Covers damages to others if you're at fault."
              },
              {
                title: "Collision Coverage",
                description: "Pays for damage to your vehicle from accidents, regardless of fault."
              },
              {
                title: "Comprehensive Coverage",
                description: "Protects against theft, vandalism, weather, and non-collision incidents."
              },
              {
                title: "Uninsured Motorist",
                description: "Covers you if you're hit by a driver without insurance."
              },
              {
                title: "Medical Payments",
                description: "Pays for medical expenses for you and your passengers."
              },
              {
                title: "Roadside Assistance",
                description: "24/7 help with towing, flat tires, lockouts, and more."
              }
            ].map((coverage, index) => (
              <div key={index} className="card-hover">
                <h3 className="text-xl font-bold text-neutral-800 mb-2">
                  {coverage.title}
                </h3>
                <p className="text-neutral-600">
                  {coverage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Why Choose Christopher Evans for Your <span className="gradient-text">Auto Insurance</span>?
              </h2>
              <ul className="space-y-4">
                {[
                  "Save an average of $760 per year",
                  "5 years of trusted Dallas service",
                  "A+ rated agency with excellent reviews",
                  "24/7 claims support when you need it",
                  "Free annual policy reviews",
                  "Multiple discount opportunities",
                  "Fast, friendly, local service",
                  "No obligation free quotes"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                    <span className="text-lg text-neutral-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4">Available Discounts</h3>
              <ul className="space-y-3">
                {[
                  "Multi-vehicle discount",
                  "Multi-policy bundling",
                  "Good driver discount",
                  "Safety features discount",
                  "Good student discount",
                  "Defensive driving course",
                  "Low mileage discount",
                  "Loyalty discount"
                ].map((discount, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-primary-600">•</span>
                    <span className="text-neutral-700">{discount}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="section bg-white/50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-4">
            Get Your <span className="gradient-text">Free Auto Insurance Quote</span>
          </h2>
          <p className="text-xl text-center text-neutral-600 mb-12 max-w-2xl mx-auto">
            Takes less than 2 minutes. No obligation. Compare rates and save up to $760/year.
          </p>
          <QuoteForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            Auto Insurance <span className="gradient-text">FAQs</span>
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What auto insurance coverage do I need in Texas?",
                a: "Texas requires minimum liability coverage of 30/60/25 ($30k bodily injury per person, $60k per accident, $25k property damage). However, I recommend higher limits plus collision and comprehensive for better protection."
              },
              {
                q: "How much does auto insurance cost in Dallas?",
                a: "Average costs vary based on your vehicle, driving history, and coverage. Most of my Dallas clients pay $80-150/month, and save an average of $760/year by switching to Farmers Insurance."
              },
              {
                q: "What factors affect my auto insurance rate?",
                a: "Rates depend on your age, driving record, vehicle type, credit score, coverage limits, deductibles, and location. I'll help you find all available discounts to lower your premium."
              },
              {
                q: "Can I get insurance with a DUI or accidents?",
                a: "Yes! While incidents increase rates, I work with drivers of all backgrounds. Call me at (469) 441-8906 to discuss your situation and find affordable coverage."
              }
            ].map((faq, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-bold text-neutral-800 mb-3">
                  {faq.q}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
