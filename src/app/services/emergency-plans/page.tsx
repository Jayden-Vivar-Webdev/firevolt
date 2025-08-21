
import { Metadata } from "next";
import Plans from "./plans";
export const metadata: Metadata = {
    title: "Emergency Evacuation Diagrams Brisbane | Fire Safety Plans | Firevolt",
    description:
      "Brisbane’s trusted experts in emergency evacuation diagrams and fire safety plans. AS 3745 compliant evacuation maps, workplace safety signage, and emergency procedures tailored to your business.",
    openGraph: {
      title: "Emergency Evacuation Diagrams & Fire Safety Plans Brisbane",
      description:
        "Professional emergency diagrams and evacuation plans for businesses across Brisbane. Ensure AS 3745 compliance with clear, customised evacuation maps and safety signage.",
      url: "https://www.firevolt.com.au/services/emergency-evacuation-diagrams",
      siteName: "Firevolt Fire Safety Experts",
      images: [
        {
          url: "https://www.firevolt.com.au/images/meta/twitter-card.png",
          width: 1200,
          height: 630,
          alt: "Firevolt Emergency Evacuation Diagrams Brisbane",
        },
      ],
      type: "website",
      locale: "en_AU",
    },
    keywords: [
      "emergency evacuation diagrams Brisbane",
      "AS 3745 evacuation diagrams",
      "fire evacuation maps QLD",
      "emergency diagrams for workplaces",
      "evacuation plan compliance Brisbane",
      "workplace emergency plans",
      "fire evacuation plans Queensland",
      "custom evacuation maps",
      "workplace safety signage Brisbane",
      "emergency procedures diagrams",
      "fire safety compliance diagrams",
      "evacuation diagram services QLD",
      "safety evacuation maps Brisbane",
      "emergency floor plans",
      "workplace safety emergency plans",
      "building evacuation diagrams",
      "emergency planning services",
      "workplace safety diagrams",
      "fire safety plans Brisbane",
      "AS 3745 compliance services",
    ],
    authors: [
      {
        name: "Firevolt Emergency Planning Team",
        url: "https://www.firevolt.com.au/services/emergency-evacuation-diagrams",
      },
    ],
    alternates: {
      canonical:
        "https://www.firevolt.com.au/services/emergency-evacuation-diagrams",
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
      title: "Emergency Evacuation Diagrams Brisbane | Firevolt",
      description:
        "Ensure AS 3745 compliance with Firevolt’s emergency evacuation diagrams and fire safety plans across Brisbane.",
      images: ["https://www.firevolt.com.au/images/meta/twitter-card.png"],
    },
    category: "Business Services",
  };
  





export default function EmergencyPlans(){
  return(
    <Plans />
  )
}

