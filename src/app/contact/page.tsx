
import { Metadata } from 'next';
import ContactPage from '../pages/contact';

export const metadata: Metadata = {
  title: "Contact Firevolt | Brisbane Fire Safety Experts | Quick Response",
  description: "Need fire safety services in Brisbane? Contact Firevolt today for test & tag, fire training, extinguisher servicing & compliance solutions. Call ☎️ [Your Number] or message us!",
  openGraph: {
    title: "Contact Firevolt – Fast Fire Safety Support in Brisbane",
    description: "Get in touch with Firevolt's fire safety specialists for emergency compliance, test & tag, and training services across Brisbane. We respond promptly!",
    url: "https://www.firevolt.com.au/contact",
    siteName: "Firevolt Fire Safety Experts",
    images: [
      {
        url: "/images/meta/contact-og-image.png", // (Ideal: Team helping a client or a service van with contact details)
        width: 1200,
        height: 630,
        alt: "Contact Firevolt for Brisbane Fire Safety Services",
      },
    ],
    type: "website",
    locale: "en_AU",
  },
  keywords: [
    "contact Firevolt",
    "fire safety services Brisbane",
    "emergency test and tag",
    "fire warden training booking",
    "fire extinguisher servicing contact",
    "urgent compliance help",
    "Firevolt phone number",
    "Firevolt email",
    "Brisbane fire safety experts near me",
    "quick response fire safety",
    "same-day fire inspection",
    "business fire safety consultation",
    "fire compliance quote",
    "Fire Safety Contact Acacia Ridge",
    "Test & Tag Booking Albany Creek",
    "Fire Training Enquiry Albion",
    "Extinguisher Servicing Contact Archerfield",
    "Emergency Compliance Help Banyo",
    "Urgent Fire Safety Boondall",
    "Fire Equipment Check Brendale",
    "Commercial Fire Advice Bulimba",
    "Industrial Safety Support Burpengary",
    "Same-Day Inspection Caboolture",
    "Fire Compliance Query Capalaba",
    "Fire Risk Assessment Contact Chermside",
    "Warden Training Booking Coorparoo",
    "Fire System Check Darra",
    "24/7 Fire Support Eagle Farm",
  ],
  authors: [{ name: "Firevolt Team", url: "https://www.firevolt.com.au" }],
  alternates: {
    canonical: "https://www.firevolt.com.au/contact",
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
    title: "Contact Firevolt | Brisbane Fire Safety Emergency Support",
    description: "Need urgent fire safety help? Message Firevolt for fast response test & tag, training, and compliance services across Brisbane. ☎️ [Your Number]",
    images: ["/images/meta/twitter-card.png"],
  },
};



const Contact = () => {
    return <ContactPage/>
};

export default Contact;