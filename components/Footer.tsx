"use client";

import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-primary-400">
                <img 
                  src="/christopher-evans-headshot.jpg" 
                  alt="Christopher Evans" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-bold">Christopher Evans</div>
                <div className="text-sm text-neutral-400">Farmers Insurance Agent</div>
              </div>
            </div>
            <p className="text-neutral-400 mb-6">
              Serving Dallas and surrounding areas with 5 years of trusted insurance expertise.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Insurance Services</h3>
            <ul className="space-y-2">
              <li><Link href="/auto-insurance-dallas" className="text-neutral-400 hover:text-primary-400 transition-colors">Auto Insurance</Link></li>
              <li><Link href="/home-insurance-dallas" className="text-neutral-400 hover:text-primary-400 transition-colors">Home Insurance</Link></li>
              <li><Link href="/business-insurance-dallas" className="text-neutral-400 hover:text-primary-400 transition-colors">Business Insurance</Link></li>
              <li><Link href="/life-insurance-dallas" className="text-neutral-400 hover:text-primary-400 transition-colors">Life Insurance</Link></li>
              <li><Link href="/renters-insurance-dallas" className="text-neutral-400 hover:text-primary-400 transition-colors">Renters Insurance</Link></li>
            </ul>
          </div>

          {/* Areas Served */}
          <div>
            <h3 className="font-bold text-lg mb-4">Areas We Serve</h3>
            <ul className="space-y-2">
              <li><Link href="/addison-insurance" className="text-neutral-400 hover:text-primary-400 transition-colors">Addison</Link></li>
              <li><Link href="/plano-insurance" className="text-neutral-400 hover:text-primary-400 transition-colors">Plano</Link></li>
              <li><Link href="/frisco-insurance" className="text-neutral-400 hover:text-primary-400 transition-colors">Frisco</Link></li>
              <li><Link href="/richardson-insurance" className="text-neutral-400 hover:text-primary-400 transition-colors">Richardson</Link></li>
              <li><Link href="/about" className="text-neutral-400 hover:text-primary-400 transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaPhone className="text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-neutral-400 text-sm">Call Us</div>
                  <a href="tel:4694418906" className="hover:text-primary-400 transition-colors font-semibold">
                    (469) 441-8906
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-neutral-400 text-sm">Email</div>
                  <a href="mailto:cevans@farmersagent.com" className="hover:text-primary-400 transition-colors">
                    cevans@farmersagent.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-neutral-400 text-sm">Office</div>
                  <address className="not-italic">
                    17440 Dallas Pkwy Ste 107<br />
                    Dallas, TX 75287
                  </address>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-400 text-sm">
          <p>&copy; {currentYear} Christopher Evans - Farmers Insurance. All rights reserved.</p>
          <p className="mt-2">
            Licensed Insurance Agent | TX License #123456789
          </p>
        </div>
      </div>
    </footer>
  );
}
