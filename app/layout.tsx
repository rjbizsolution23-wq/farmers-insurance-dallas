import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@/components/Analytics";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'),
  title: {
    default: "Christopher Evans - Farmers Insurance Agent Dallas TX | Save $760/Year",
    template: "%s | Christopher Evans - Farmers Insurance Dallas"
  },
  description: "Expert Farmers Insurance agent in Dallas, TX with 5 years experience. Save an average of $760/year on auto, home, business & life insurance. Get instant quote!",
  keywords: [
    "Farmers Insurance Dallas",
    "insurance agent Dallas TX",
    "car insurance Dallas",
    "home insurance Dallas",
    "business insurance Dallas",
    "Christopher Evans insurance",
    "Dallas insurance quotes",
    "cheap insurance Dallas"
  ],
  authors: [{ name: "Christopher Evans" }],
  creator: "Christopher Evans - Farmers Insurance",
  publisher: "Farmers Insurance",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Christopher Evans - Farmers Insurance Dallas",
    title: "Christopher Evans - Farmers Insurance Agent Dallas TX",
    description: "Save $760/year on insurance with 5 years of trusted service. Auto, Home, Business & Life Insurance in Dallas.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Christopher Evans - Farmers Insurance Dallas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christopher Evans - Farmers Insurance Dallas",
    description: "Save $760/year on insurance. Expert service for 5 years.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <Analytics />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
