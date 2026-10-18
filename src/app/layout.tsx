import type { Metadata } from "next";
import { JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GSAPProvider } from "@/components/GSAPProvider";
import { CustomCursor } from "@/components/CustomCursor";
import { AmbientMesh } from "@/components/AmbientMesh";
import { CookieConsentBanner } from "@/components/CookieConsentBanner";
import { Analytics } from "@vercel/analytics/next"

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devfinity.dev"),
  title: {
    default: "Devfinity Studio | Custom Web Development & Enterprise Architectures",
    template: "%s | Devfinity Studio",
  },
  description: "Ultra-modern web development studio engineering interactive digital experiences, type-safe full-stack platforms, and bespoke software architectures.",
  keywords: [
    "Custom Web Development",
    "Next.js Development",
    "Enterprise ERP System",
    "T3 Stack",
    "PostgreSQL Relational Design",
    "Full-Stack Software Studio",
    "Type-Safe Architecture",
    "High-Performance Web Platforms",
  ],
  authors: [{ name: "Heena" }, { name: "Devansh" }],
  creator: "Devfinity Studio",
  publisher: "Devfinity Studio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devfinity.dev",
    siteName: "Devfinity Studio",
    title: "Devfinity Studio | Custom Web Development & Enterprise Architectures",
    description: "Ultra-modern web development studio engineering interactive digital experiences, type-safe full-stack platforms, and bespoke software architectures.",
    images: [
      {
        url: "/devfinity.png",
        width: 800,
        height: 600,
        alt: "Devfinity Studio Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devfinity Studio | Custom Web Development & Enterprise Architectures",
    description: "Ultra-modern software development studio engineering type-safe Next.js platforms, interactive creative web experiences, and low-latency database architectures.",
    images: ["/devfinity.png"],
    creator: "@devfinity",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicons/favicon.ico' },
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/favicons/apple-touch-icon.png',
  },
  manifest: '/favicons/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        {/* Google Consent Mode v2 Default Initialization */}
        <script
          id="google-consent-mode-v2"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied',
                'wait_for_update': 500
              });
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["LocalBusiness", "ProfessionalService", "Organization"],
                  "@id": "https://devfinity.dev/#agency",
                  "name": "Devfinity Studio",
                  "alternateName": "Devfinity Digital Agency",
                  "url": "https://devfinity.dev",
                  "image": "https://devfinity.dev/devfinity.png",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Vadodara",
                    "addressRegion": "Gujarat",
                    "postalCode": "390001",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "22.3072",
                    "longitude": "73.1812"
                  },
                  "founders": [
                    {
                      "@type": "Person",
                      "name": "Devansh",
                      "jobTitle": "Co-Founder & Principal Full-Stack Engineer"
                    },
                    {
                      "@type": "Person",
                      "name": "Heena",
                      "jobTitle": "Co-Founder & Lead Systems Architect"
                    }
                  ],
                  "priceRange": "$$$$",
                  "email": "info@devfinity.net",
                  "description": "Ultra-modern software development studio engineering type-safe Next.js platforms, interactive creative web experiences, and low-latency database architectures.",
                  "knowsAbout": [
                    "https://en.wikipedia.org/wiki/Web_development",
                    "https://en.wikipedia.org/wiki/TypeScript",
                    "https://en.wikipedia.org/wiki/User_interface_design",
                    "https://en.wikipedia.org/wiki/Next.js",
                    "https://en.wikipedia.org/wiki/Enterprise_resource_planning",
                    "https://en.wikipedia.org/wiki/PostgreSQL",
                    "Aerospace Telemetry",
                    "Cybersecurity Protocols"
                  ],
                  "sameAs": [
                    "https://github.com",
                    "https://twitter.com",
                    "https://linkedin.com"
                  ]
                },
                {
                  "@type": "WebPage",
                  "@id": "https://devfinity.dev/#webpage",
                  "url": "https://devfinity.dev",
                  "name": "Devfinity Studio | Creative Web Development & Digital Experiences",
                  "isPartOf": { "@id": "https://devfinity.dev/#website" },
                  "about": { "@id": "https://devfinity.dev/#agency" }
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen flex flex-col bg-[#FAFAFA] text-zinc-900 bg-radial-dots selection:bg-blue-600 selection:text-white`}
      >
        {/* WCAG Skip to Main Content Link for Screen Readers & Keyboard Users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-xl focus:shadow-xl focus:font-mono focus:text-xs focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>

        <GSAPProvider>
          <CustomCursor />
          <AmbientMesh />
          <Header />
          <main id="main-content" className="flex-1 relative z-10" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <CookieConsentBanner />
        </GSAPProvider>
        <Analytics />
      </body>
    </html>
  );
}
