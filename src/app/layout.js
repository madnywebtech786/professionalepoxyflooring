import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import TopBar from "@/components/navigation/TopBar";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import SocialRail from "@/components/navigation/SocialRail";
import {
  COMPANY_NAME,
  COMPANY_PHONE,
  COMPANY_URL,
  COMPANY_CITY,
  COMPANY_REGION_SHORT,
  COMPANY_COUNTRY,
  SOCIAL_LINKS,
} from "@/constants/company";
import { WORKING_AREAS } from "@/constants/areas";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  metadataBase: new URL(COMPANY_URL),
  title: {
    template: "%s | Professional Epoxy Flooring",
    default: "Professional Epoxy Flooring | Calgary Residential, Commercial & Industrial",
  },
  description:
    "Licensed epoxy flooring experts serving Calgary and area with premium residential, commercial, and industrial floor coatings. Get a free quote today.",
  keywords: [
    "epoxy flooring calgary",
    "garage floor coating calgary",
    "commercial epoxy flooring alberta",
    "industrial epoxy flooring",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Professional Epoxy Flooring | Calgary Residential, Commercial & Industrial",
    description:
      "Licensed epoxy flooring experts serving Calgary and area with premium residential, commercial, and industrial floor coatings.",
    url: "/",
    siteName: COMPANY_NAME,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Epoxy Flooring | Calgary Residential, Commercial & Industrial",
    description:
      "Licensed epoxy flooring experts serving Calgary and area with premium residential, commercial, and industrial floor coatings.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: COMPANY_NAME,
  image: `${COMPANY_URL}/images/logo.png`,
  url: COMPANY_URL,
  telephone: COMPANY_PHONE,
  priceRange: "$$",
  areaServed: WORKING_AREAS.map((area) => ({
    "@type": "City",
    name: area,
  })),
  address: {
    "@type": "PostalAddress",
    addressLocality: COMPANY_CITY,
    addressRegion: COMPANY_REGION_SHORT,
    addressCountry: COMPANY_COUNTRY,
  },
  sameAs: Object.values(SOCIAL_LINKS),
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${manrope.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <TopBar />
        <Navbar />
        {children}
        <SocialRail />
        <Footer />
      </body>
    </html>
  );
}
