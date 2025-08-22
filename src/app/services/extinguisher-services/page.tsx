import { faFireExtinguisher, 
    faCheckCircle, 
    faCalendarCheck, 
    faExclamationTriangle,
    faCertificate, 
    faClipboardList,
    faClock,
    faShieldAlt,
    faTint,
    faPhone,
    faBell,
    faCheck,
    faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Fire Extinguisher Services Brisbane | Testing & Maintenance | Firevolt",
    description:
      "Certified fire extinguisher testing, inspection, and maintenance in Brisbane. Ensure compliance with Australian Standards (AS 1851) and keep your workplace safe with Firevolt’s expert technicians.",
    openGraph: {
      title: "Fire Extinguisher Testing & Maintenance Brisbane | Firevolt",
      description:
        "Brisbane’s trusted experts in fire extinguisher services. Routine inspections, pressure testing, refilling, and compliance tagging to keep your workplace safe and compliant.",
      url: "https://www.firevolt.com.au/services/fire-extinguishers",
      siteName: "Firevolt Fire Safety Experts",
      images: [
        {
          url: "https://www.firevolt.com.au/images/meta/twitter-card.png",
          width: 1200,
          height: 630,
          alt: "Firevolt Fire Extinguisher Services Brisbane",
        },
      ],
      type: "website",
      locale: "en_AU",
    },
    keywords: [
      "fire extinguisher services Brisbane",
      "extinguisher testing QLD",
      "fire extinguisher inspection",
      "fire extinguisher maintenance Brisbane",
      "fire extinguisher compliance tagging",
      "fire safety equipment servicing",
      "fire extinguisher refill Brisbane",
      "fire extinguisher replacement",
      "portable fire extinguisher testing",
      "fire safety compliance services",
      "AS 1851 extinguisher servicing",
      "fire protection services Brisbane",
      "workplace fire extinguisher testing",
      "fire extinguisher inspection certificate",
      "fire equipment servicing Queensland",
      "fire extinguisher compliance Brisbane",
      "business fire extinguisher testing",
      "fire extinguisher check Brisbane",
      "fire safety inspection services",
      "workplace fire protection Brisbane",
    ],
    authors: [
      {
        name: "Firevolt Fire Extinguisher Service Team",
        url: "https://www.firevolt.com.au/services/fire-extinguishers",
      },
    ],
    alternates: {
      canonical: "https://www.firevolt.com.au/services/fire-extinguishers",
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
      title: "Fire Extinguisher Services Brisbane | Firevolt",
      description:
        "Fire extinguisher testing, inspection, and maintenance across Brisbane. Stay compliant and safe with Firevolt’s certified technicians.",
      images: ["https://www.firevolt.com.au/images/meta/twitter-card.png"],
    },
    category: "Business Services",
  };
  



const Extinguisher = () => {
    return (
        <>
{/* Extinguisher Services Section */}
    <section className="pb-20 bg-white" id="extinguisher-services">
    <div className="hero-bg text-white py-24 md:py-32 mb-20" id="home">
        
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Fire Extingusher Services For Your Business
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-secondary-200">
            Compliance Done For You!
            Easy Way to Make Sure Your Workplace is Safe & Compliant with the Australian Standards.
            <br />
            <br />
            <strong>BRISBANE - SUNSHINE COAST - GOLD COAST</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-primary-10 text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-700 transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl">Contact Us</a>
            <a href="/about" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-primary-600 transition transform hover:-translate-y-1">Learn More About Us</a>
            </div>
        </div>
    </div>
    <div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-1/2 order-2 lg:order-1">
        <span className="inline-block bg-primary-50 text-primary-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Fire Equipment
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Extinguisher & Fire Equipment Services</h2>
        <p className="text-lg text-secondary-600 mb-8">
            Regular maintenance and testing of your fire equipment is not just a legal requirement - it&apos;s critical 
            for ensuring the safety of your workplace. We provide comprehensive servicing for all types of fire safety equipment.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
            <h3 className="font-bold mb-3 flex items-center">
                <FontAwesomeIcon icon={faFireExtinguisher} className="text-primary-500 mr-2" />
                Our Services Include:
            </h3>
            <ul className="space-y-2">
                <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2 text-sm" />
                <span>Fire extinguisher testing & replacement</span>
                </li>
                <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2 text-sm" />
                <span>Fire blanket inspections</span>
                </li>
                <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2 text-sm" />
                <span>Fire hose reel servicing</span>
                </li>
                <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2 text-sm" />
                <span>Smoke alarm testing</span>
                </li>
            </ul>
            </div>
            <div>
            <h3 className="font-bold mb-3 flex items-center">
                <FontAwesomeIcon icon={faCalendarCheck} className="text-primary-500 mr-2" />
                Compliance Requirements:
            </h3>
            <ul className="space-y-2">
                <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2 text-sm" />
                <span>6 monthly extinguisher checks</span>
                </li>
                <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2 text-sm" />
                <span>Fire Signage Checks</span>
                </li>
                <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2 text-sm" />
                <span>Site Safety Inspections</span>
                </li>
                <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2 text-sm" />
                <span>Detailed service records</span>
                </li>
            </ul>
            </div>
        </div>
        
        <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded-r-lg mb-8">
            <h4 className="font-bold text-primary-800 mb-2 flex items-center">
            <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2" />
            Important Note
            </h4>
            <p className="text-secondary-700">
            Under Australian Standard AS1851, all fire protection equipment must be regularly tested and maintained. 
            Failure to comply can result in fines and void insurance coverage.
            </p>
        </div>
        
        <a href="/contact" className="inline-flex items-center justify-center bg-primary-10 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-bold transition shadow-md hover:shadow-lg">
            Schedule Equipment Service
            <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
        </a>
        </div>
        <div className="lg:w-1/2 order-1 lg:order-2">
        <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-100">
            <Image
            src="/images/fire_extinguisher_services.JPEG"
            alt="Fire extinguisher maintenance"
            width={800}
            height={600}
            className="w-full h-auto"
            />
        </div>
        </div>
    </div>

    {/* Professional Service Standards */}
    <div className="mt-20 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">Professional Service Standards</h3>
        <p className="text-lg text-secondary-600 mb-12 max-w-3xl mx-auto">
        Our certified technicians follow strict Australian Standards and provide comprehensive documentation 
        to ensure your business remains compliant and protected.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FontAwesomeIcon icon={faCertificate} className="text-primary-600 text-2xl" />
            </div>
            <h4 className="text-xl font-bold mb-3">Certified Technicians</h4>
            <p className="text-secondary-600">
            All our technicians are fully qualified and licensed to service fire equipment according to Australian Standards.
            </p>
        </div>
        
        <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FontAwesomeIcon icon={faClipboardList} className="text-primary-600 text-2xl" />
            </div>
            <h4 className="text-xl font-bold mb-3">Complete Documentation</h4>
            <p className="text-secondary-600">
            Detailed service records and compliance certificates provided for all equipment maintenance and testing.
            </p>
        </div>
        
        <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FontAwesomeIcon icon={faClock} className="text-primary-600 text-2xl" />
            </div>
            <h4 className="text-xl font-bold mb-3">Reliable Service</h4>
            <p className="text-secondary-600">
            Scheduled maintenance reminders and emergency response to ensure your fire safety equipment is always operational.
            </p>
        </div>
        </div>
    </div>

    {/* Equipment Types We Service */}
    <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12">
        <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Equipment We Service</h3>
        <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            We service all types of fire safety equipment to Australian Standards, ensuring complete protection for your workplace.
        </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <FontAwesomeIcon icon={faFireExtinguisher} className="text-red-600 text-xl" />
            </div>
            <h4 className="font-bold mb-2">Fire Extinguishers</h4>
            <p className="text-sm text-secondary-600">All types including water, foam, CO2, dry powder, and wet chemical extinguishers.</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <FontAwesomeIcon icon={faShieldAlt} className="text-blue-600 text-xl" />
            </div>
            <h4 className="font-bold mb-2">Fire Blankets</h4>
            <p className="text-sm text-secondary-600">Regular inspection and replacement of fire blankets in kitchens and workshops.</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <FontAwesomeIcon icon={faTint} className="text-green-600 text-xl" />
            </div>
            <h4 className="font-bold mb-2">Fire Hose Reels</h4>
            <p className="text-sm text-secondary-600">Comprehensive testing and maintenance of fire hose reel systems.</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <FontAwesomeIcon icon={faBell} className="text-yellow-600 text-xl" />
            </div>
            <h4 className="font-bold mb-2">Smoke Alarms</h4>
            <p className="text-sm text-secondary-600">Testing and maintenance of smoke detection systems and emergency lighting.</p>
        </div>
        </div>
    </div>

    {/* Why Choose Our Service */}
    <div className="mt-20">
        <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Our Fire Equipment Service</h3>
        <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            With years of experience and a commitment to safety, we provide reliable fire equipment servicing 
            that keeps your business compliant and your people protected.
        </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
            <div className="space-y-6">
            <div className="flex items-start">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mr-4 mt-1">
                <FontAwesomeIcon icon={faCheck} className="text-white text-sm" />
                </div>
                <div>
                <h4 className="font-bold mb-2">AS1851 Compliant Service</h4>
                <p className="text-secondary-600">All our work meets Australian Standards for fire equipment maintenance and testing.</p>
                </div>
            </div>
            
            <div className="flex items-start">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mr-4 mt-1">
                <FontAwesomeIcon icon={faCheck} className="text-white text-sm" />
                </div>
                <div>
                <h4 className="font-bold mb-2">Comprehensive Record Keeping</h4>
                <p className="text-secondary-600">Digital service records and compliance certificates for insurance and audit requirements.</p>
                </div>
            </div>
            
            <div className="flex items-start">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mr-4 mt-1">
                <FontAwesomeIcon icon={faCheck} className="text-white text-sm" />
                </div>
                <div>
                <h4 className="font-bold mb-2">Emergency Response Available</h4>
                <p className="text-secondary-600">24/7 emergency service for critical fire safety equipment failures.</p>
                </div>
            </div>
            
            <div className="flex items-start">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mr-4 mt-1">
                <FontAwesomeIcon icon={faCheck} className="text-white text-sm" />
                </div>
                <div>
                <h4 className="font-bold mb-2">Automated Service Reminders</h4>
                <p className="text-secondary-600">We track service dates and remind you when maintenance is due to maintain compliance.</p>
                </div>
            </div>
            </div>
        </div>
        
        <div className="bg-primary-50 p-8 rounded-2xl">
            <h4 className="text-xl font-bold mb-4">Service Schedule</h4>
            <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-primary-200 pb-2">
                <span className="font-medium">Fire Extinguishers</span>
                <span className="text-primary-600 font-bold">Every 6 Months</span>
            </div>
            <div className="flex justify-between items-center border-b border-primary-200 pb-2">
                <span className="font-medium">Fire Blankets</span>
                <span className="text-primary-600 font-bold">Every 6 Months</span>
            </div>
            <div className="flex justify-between items-center border-b border-primary-200 pb-2">
                <span className="font-medium">Fire Hose Reels</span>
                <span className="text-primary-600 font-bold">Every 6 Months</span>
            </div>
            <div className="flex justify-between items-center border-b border-primary-200 pb-2">
                <span className="font-medium">Smoke Alarms</span>
                <span className="text-primary-600 font-bold">Annually</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="font-medium">Fire Hydrants</span>
                <span className="text-primary-600 font-bold">Every 6 Months</span>
            </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-primary-200">
            <p className="text-sm text-secondary-600 mb-4">
                We&apos;ll create a customized maintenance schedule for your specific equipment and send reminders before each service is due.
            </p>
            <a href="/contact" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
                Get Your Service Schedule
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-sm" />
            </a>
            </div>
        </div>
        </div>
    </div> 
    </div>

    </section>
    {/* Final CTA Section */}
  <section className="py-16 bg-primary-10">
    <div className="container mx-auto px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Book In Your Fire Extingusher Service?
        </h2>
        <p className="text-xl text-primary-100 mb-8">
          Don&apos;t leave your business exposed to risks. Partner with Australia&apos;s leading 
          workplace safety compliance experts and protect your organisation, employees, and reputation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a href="/contact" className="inline-flex items-center justify-center bg-white text-primary-10 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl">
            Get Your Free Assessment Today
            <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
          </a>
          <a href="tel:1300533294" className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-10 transition">
            <FontAwesomeIcon icon={faPhone} className="mr-3" />
            Call 1300 533 294
          </a>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-primary-100">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
            <span>Free Initial Consultation</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
            <span>Australia-Wide Service</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
            <span>Expert Compliance Team</span>
          </div>
        </div>
      </div>
    </div>
  </section>
        </>
    );
};

export default Extinguisher;