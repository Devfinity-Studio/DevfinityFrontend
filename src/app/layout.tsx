import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import {Header} from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GSAPProvider } from "@/components/GSAPProvider";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Devfinity | Professional Engineering",
  description: "Bespoke software solutions.",
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
    <html lang="en" className="dark">
      <head>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T45FD5MQ');</script>
<!-- End Google Tag Manager -->
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "ProfessionalService",
                  "@id": "https://devfinity.dev/#agency",
                  "name": "Devfinity",
                  "url": "https://devfinity.dev",
                  "image": "https://devfinity.dev/assets/og-brand-anchor.jpg",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Vadodara",
                    "addressRegion": "Gujarat",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "22.3072",
                    "longitude": "73.1812"
                  },
                  "priceRange": "$$$$",
                  "description": "Bespoke full-stack software development agency engineering type-safe Next.js applications, custom role-based ERP systems, and low-latency database infrastructures.",
                  "knowsAbout": [
                    "https://en.wikipedia.org/wiki/Web_development",
                    "https://en.wikipedia.org/wiki/Enterprise_resource_planning",
                    "https://en.wikipedia.org/wiki/TypeScript",
                    "https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping",
                    "https://en.wikipedia.org/wiki/User_interface_design"
                  ]
                },
                {
                  "@type": "WebPage",
                  "@id": "https://devfinity.dev/#webpage",
                  "url": "https://devfinity.dev",
                  "name": "Devfinity | Custom Web Development & Enterprise Infrastructure",
                  "isPartOf": { "@id": "https://devfinity.dev/#website" },
                  "about": { "@id": "https://devfinity.dev/#agency" }
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${jetbrainsMono.variable} ${jetbrainsMono.className} antialiased min-h-screen flex flex-col`}
      >
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T45FD5MQ"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
        <GSAPProvider>
          <Header/>
          <main className="flex-1">
            {children}
          </main>
          <Footer/>
        </GSAPProvider>
      </body>
    </html>
  );
}
