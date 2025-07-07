import { redirect } from 'next/navigation';
import AllServices from "../../pages/all-services-partial"
import { Metadata } from "next";

type Params = Promise <{
  location: string,
}>

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

export default async function Services({params}: {params: Params}){
    
    const param = await params
    const allowedLocations = [
      "acacia-ridge",
      "albany-creek",
      "albion",
      "archerfield",
      "banyo",
      "brisbane",
      "boondall",
      "bray-park",
      "brendale",
      "bulimba",
      "bulwer-island",
      "burpengary",
      "burpengary-east",
      "caboolture",
      "caboolture-south",
      "capalaba",
      "carole park",
      "chermside",
      "chermside-south",
      "chermside-west",
      "coopers-plains",
      "coorparoo",
      "darra",
      "deception-bay",
      "doboy",
      "doomben",
      "eagle farm",
      "geebung",
      "heathwood",
      "hemmant",
      "hendra",
      "hillcrest",
      "kedron",
      "larapinta",
      "lawnton",
      "lindum",
      "lytton",
      "meeandah",
      "morayfield",
      "myrtletown",
      "narangba",
      "newstead",
      "north-lakes",
      "northgate",
      "nudgee",
      "nudgee-beach",
      "nundah",
      "parkinson",
      "pinkenba",
      "port-of-brisbane",
      "redbank",
      "redbank-plains",
      "richlands",
      "rochedale",
      "rocklea",
      "salisbury",
      "sandstone-point",
      "springfield-central",
      "springfield-lakes",
      "stafford",
      "strathpine",
      "sumner",
      "sunnybank-hills",
      "toombul",
      "virginia",
      "wacol",
      "warner",
      "whinstanes",
      "wynnum-central",
      "wynnum-north",
      "yeerongpilly",
      "zillmere"
    ];
    
  
    if (!allowedLocations.includes(param.location.toLowerCase())) {
      redirect('/404') // Shows Next.js 404 page
    }

    return (
      <>
        {/* Hero Section */}
        <section className="relative bg-[url('/images/vehicle/PHOTO-2025-06-04-18-56-53%203.jpg')] bg-cover bg-[center_-8rem] text-white py-24 md:py-32">
          {/* Overlay */}
          <div className="absolute inset-0 bg-[rgba(16,24,40,0.9)] z-0"></div>
  
          {/* Content wrapper with proper z-index and positioning */}
          <div className="relative container mx-auto px-4 text-center z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Comprehensive Fire Safety Services
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-secondary-200">
              Protecting your business with expert fire safety solutions tailored to your needs.
              We server in mutiple locations.
              <br />
              <br />
              <strong>{param.location.toUpperCase()}</strong>

            </p>
            <a
              href="/contact"
              className="bg-primary-10 text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-700 transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl inline-block"
            >
              Claim Your Free Compliance Check
            </a>
          </div>
        </section>
  
        <AllServices />
      </>
    );
  }