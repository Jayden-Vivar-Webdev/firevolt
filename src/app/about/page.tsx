import { Metadata } from "next";
import AboutPage from "../pages/about"

export const metadata: Metadata = {
    title: "About Firevolt | Trusted Fire Safety Experts in Brisbane",
    description: "Firevolt is Brisbane's leading fire safety company with certified professionals providing test & tag, fire training, and compliance solutions since [YEAR]. Learn about our mission and expertise.",
    openGraph: {
      title: "About Firevolt | Brisbane's Fire Safety Compliance Specialists",
      description: "Meet the team behind Firevolt - Brisbane's trusted fire safety experts. We provide certified test & tag, fire warden training, and compliance services with a commitment to safety excellence.",
      url: "https://www.firevolt.com.au/about",
      siteName: "Firevolt Fire Safety Experts",
      images: [
        {
          url: "/images/meta/about-og-image.png",
          width: 1200,
          height: 630,
          alt: "Firevolt Team - Brisbane Fire Safety Specialists",
        },
      ],
      type: "website",
      locale: "en_AU",
    },
    keywords: [
      "Firevolt about us",
      "Brisbane fire safety experts",
      "certified fire compliance team",
      "fire safety company Brisbane",
      "trusted test and tag providers",
      "fire warden training professionals",
      "fire extinguisher servicing experts",
      "our fire safety mission",
      "Firevolt history and values",
      "meet our fire safety team",
      "qualified fire technicians Brisbane",
      "fire compliance specialists QLD",
      "about Firevolt Brisbane",
      "Fire Safety Experts Acacia Ridge",
      "Fire Compliance Team Albany Creek",
      "Certified Technicians Albion",
      "Professional Fire Trainers Archerfield",
      "Trusted Safety Advisors Banyo",
      "Local Fire Experts Boondall",
      "Brisbane Fire Specialists Brendale",
      "Experienced Safety Team Bulimba",
      "Fire Protection Professionals Burpengary",
      "Reliable Test & Tag Caboolture",
      "Fire Safety Leaders Capalaba",
      "Community-Focused Fire Services Chermside",
      "Dedicated Compliance Team Coorparoo",
      "Safety-First Approach Darra",
      "Industry-Recognized Experts Eagle Farm",
      "Brisbane's Trusted Fire Advisors",
    ],
    authors: [{ name: "Firevolt Team", url: "https://www.firevolt.com.au" }],
    alternates: {
      canonical: "https://www.firevolt.com.au/about",
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
      title: "About Firevolt | Brisbane's Fire Safety Leaders",
      description: "Discover the team and values behind Firevolt - your trusted partner for fire safety compliance and training in Brisbane.",
      images: ["/images/meta/twitter-card.png"],
    },
};


const About = () => {
    return <AboutPage/>
};

export default About;