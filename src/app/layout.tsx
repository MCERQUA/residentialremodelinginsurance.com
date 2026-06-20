import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Contractors Choice Agency`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "residential remodeling insurance",
    "remodeling contractor insurance",
    "remodeling contractor general liability",
    "completed operations insurance remodeling",
    "CPL lead asbestos remodeling contractor",
    "workers comp remodeling contractor",
    "tools and equipment coverage remodeler",
    "commercial umbrella remodeling contractor",
    "commercial auto remodeling contractor",
    "remodeling contractor property insurance",
    "residential contractor insurance",
    "home renovation contractor insurance",
  ],
  authors: [{ name: "Contractors Choice Agency" }],
  creator: "Contractors Choice Agency",
  publisher: "Contractors Choice Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Contractors Choice Agency`,
    description:
      "Specialized insurance for residential remodeling contractors — GL with completed operations, workers' comp for remodeling crews, commercial auto, tools and equipment, CPL for lead and asbestos, and commercial umbrella. Licensed all 50 states. 15-minute quotes.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: `${SITE.name} — residential remodeling contractor coverage` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Contractors Choice Agency`,
    description:
      "Specialized insurance for residential remodeling contractors. GL with completed ops, workers' comp, commercial auto, tools and equipment, CPL for lead and asbestos, and umbrella. 15-minute quotes.",
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: SITE.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: "+18449675247",
    email: SITE.email,
    image: `${SITE.url}/images/og-image.jpg`,
    logo: `${SITE.url}/images/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: 33.2622, longitude: -111.7826 },
    employee: { "@type": "Person", name: "Josh Cotner", jobTitle: "Founder & Insurance Agent" },
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: [
      "General Liability Insurance for Residential Remodeling Contractors",
      "Workers' Compensation for Remodeling Crews",
      "Commercial Auto Insurance for Remodeling Contractors",
      "Tools & Equipment Coverage for Remodelers",
      "Completed-Operations Coverage for Remodeling Projects",
      "Commercial Umbrella Insurance for Remodeling Contractors",
      "Commercial Property Insurance for Remodeling Businesses",
      "Contractors Pollution Liability for Lead, Asbestos, and Mold",
    ],
  };

  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
