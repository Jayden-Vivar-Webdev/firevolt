import ServicesPage from '../pages/service';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Professional Fire Safety Services Brisbane | Firevolt Solutions",
  description: "Firevolt offers expert fire safety services in Brisbane including test & tag, fire warden training, extinguisher servicing & compliance solutions. Protect your business today.",
  openGraph: {
    title: "Fire Safety Services Brisbane | Test & Tag, Training & Compliance",
    description: "Comprehensive fire safety services for Brisbane businesses - test & tag, emergency planning, warden training, extinguisher maintenance & compliance certification.",
    url: "https://www.firevolt.com.au/services",
    siteName: "Firevolt Fire Safety Experts",
    images: [
      {
        url: "/images/meta/services-og-image.png",
        width: 1200,
        height: 630,
        alt: "Firevolt Fire Safety Services - Brisbane",
      },
    ],
    type: "website",
    locale: "en_AU",
  },
  keywords: [
    "fire safety services Brisbane",
    "test and tag Brisbane",
    "fire warden training course",
    "fire extinguisher servicing QLD",
    "compliance certification Brisbane",
    "emergency evacuation planning",
    "fire equipment testing",
    "commercial fire safety",
    "fire protection services",
    "Brisbane fire compliance",
    "electrical test and tag",
    "fire safety training programs",
    "fire equipment inspection",
    "workplace fire safety",
    "fire service professionals",
    "Fire Safety Services Acacia Ridge",
    "Test and Tag Albany Creek",
    "Fire Warden Training Albion",
    "Extinguisher Servicing Archerfield",
    "Fire Compliance Banyo",
    "Emergency Planning Boondall",
    "Safety Training Bray Park",
    "Fire Equipment Brendale",
    "Workplace Safety Bulimba",
    "Commercial Fire Protection Burpengary",
    "Industrial Fire Safety Caboolture",
    "Office Fire Compliance Capalaba",
    "Retail Fire Safety Chermside",
    "Hospital Fire Training Coorparoo",
    "School Fire Safety Darra",
    "Factory Fire Protection Eagle Farm",
    "Warehouse Safety Geebung",
    "Construction Site Fire Safety Kedron",
    "Healthcare Facility Compliance Nundah",
    "Hospitality Fire Training Stafford",
    "Strata Fire Safety Virginia",
    "Government Building Compliance Wynnum",
  ],
  authors: [{ name: "Firevolt Team", url: "https://www.firevolt.com.au" }],
  alternates: {
    canonical: "https://www.firevolt.com.au/services",
  },
  metadataBase: new URL("https://www.firevolt.com.au"),
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
  twitter: {
    card: "summary_large_image",
    title: "Professional Fire Safety Services Brisbane | Firevolt",
    description: "Complete fire protection solutions for Brisbane businesses - from testing to training and compliance certification.",
    images: ["/images/meta/twitter-card.png"],
  },
};


const Services = () => {
  return <ServicesPage hero={true}/>
}


export default Services;