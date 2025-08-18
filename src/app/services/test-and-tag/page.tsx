import { faPlug, 
    faCheckCircle, 
    faCertificate, 
    faExclamationTriangle, 
    faArrowRight,
    faBuilding,
    faIndustry,
    faHardHat,
    faDesktop,
    faCogs,
    faUtensils,
    faCheck,
    faMedkit,
    faPhone,
    faLightbulb,
    faInfoCircle
 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Electrical Test & Tag Services Brisbane | Compliance Testing | Firevolt",
    description:
      "Professional electrical test and tag services in Brisbane. Ensure workplace compliance with AS/NZS 3760 standards through expert inspection, testing, and tagging of all electrical equipment.",
    openGraph: {
      title: "Electrical Test & Tag Services Brisbane | Firevolt",
      description:
        "Trusted Brisbane experts in test and tag services. Comprehensive inspection, testing, and tagging of workplace electrical equipment to keep your business safe and compliant.",
      url: "https://www.firevolt.com.au/services/test-and-tag",
      siteName: "Firevolt Fire Safety Experts",
      images: [
        {
          url: "https://www.firevolt.com.au/images/meta/twitter-card.png",
          width: 1200,
          height: 630,
          alt: "Firevolt Electrical Test & Tag Services Brisbane",
        },
      ],
      type: "website",
      locale: "en_AU",
    },
    keywords: [
      "test and tag Brisbane",
      "electrical testing QLD",
      "workplace electrical compliance",
      "AS/NZS 3760 testing",
      "electrical equipment inspection Brisbane",
      "portable appliance testing",
      "PAT testing Brisbane",
      "electrical safety compliance services",
      "workplace safety electrical testing",
      "equipment tagging Brisbane",
      "electrical inspection certificate",
      "business electrical safety testing",
      "electrical compliance audit",
      "safety testing for offices Brisbane",
      "electrical hazard prevention",
      "firevolt test and tag services",
      "electrical safety check Queensland",
      "commercial electrical testing",
      "workplace PAT testing",
      "electrical compliance solutions Brisbane",
    ],
    authors: [
      {
        name: "Firevolt Test & Tag Team",
        url: "https://www.firevolt.com.au/services/test-and-tag",
      },
    ],
    alternates: {
      canonical: "https://www.firevolt.com.au/services/test-and-tag",
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
      title: "Electrical Test & Tag Services Brisbane | Firevolt",
      description:
        "Professional test and tag services for Brisbane workplaces. Ensure compliance and safety with Firevolt’s expert electrical testing and tagging.",
      images: ["https://www.firevolt.com.au/images/meta/twitter-card.png"],
    },
    category: "Business Services",
  };
  


const TestAndTag = () => {
    return (
        <>
        <div className="hero-bg text-white py-24 md:py-32 mb-20" id="home">
        
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Your Local Experts In Test & Tag Compliance
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
        {/* Test & Tag Services Section */}
        <section className="py-20 bg-white" id="test-and-tag">
        <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
            <span className="inline-block bg-primary-10 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                Electrical Safety
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Test & Tag Services</h2>
            <p className="text-lg text-secondary-600 mb-8">
                Regular electrical equipment testing is essential for workplace safety and compliance. Our professional test and tag services ensure all your electrical equipment meets Australian safety standards and reduces the risk of electrical hazards.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                <h3 className="font-bold mb-3 flex items-center">
                    <FontAwesomeIcon icon={faPlug} className="text-primary-500 mr-2" />
                    Our Testing Services:
                </h3>
                <ul className="space-y-2">
                    <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2 text-sm" />
                    <span>Portable appliance testing (PAT)</span>
                    </li>
                    <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2 text-sm" />
                    <span>Residual Current Device (RCD) testing</span>
                    </li>
                    <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2 text-sm" />
                    <span>Extension lead and power board testing</span>
                    </li>
                    <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2 text-sm" />
                    <span>Equipment risk assessment</span>
                    </li>
                </ul>
                </div>
                <div>
                <h3 className="font-bold mb-3 flex items-center">
                    <FontAwesomeIcon icon={faCertificate} className="text-primary-500 mr-2" />
                    Compliance Standards:
                </h3>
                <ul className="space-y-2">
                    <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2 text-sm" />
                    <span>AS/NZS 3760 compliance testing</span>
                    </li>
                    <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2 text-sm" />
                    <span>Workplace testing frequency requirements</span>
                    </li>
                    <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2 text-sm" />
                    <span>Detailed test records and reporting</span>
                    </li>
                    <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2 text-sm" />
                    <span>Color-coded tagging system</span>
                    </li>
                </ul>
                </div>
            </div>
            
            <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded-r-lg mb-8">
                <h4 className="font-bold text-primary-800 mb-2 flex items-center">
                <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2" />
                Safety Notice
                </h4>
                <p className="text-secondary-700">
                Under AS/NZS 3760, workplaces must regularly test all portable electrical equipment. Failure to comply may void insurance and can result in fines up to $30,000 for non-compliance with WHS regulations.
                </p>
            </div>
            <div className="flex gap-2">
            <a href="/contact" className="inline-flex items-center justify-center bg-primary-10 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-bold transition shadow-md hover:shadow-lg">
                Book Test & Tag Service
                <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
            </a>
            <a href="https://irp.cdn-website.com/94ddd8b4/files/uploaded/Electrical%20Test%20%26%20Tag%20Interval%20Guide%20.pdf" className="border border-primary-10 text-primary-10 hover:bg-primary-50 px-6 py-3 rounded-lg font-bold text-center transition">
                Download Free Test & Tag Guide
                <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
            </a>
            </div>
            
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-100">
                <Image
                src="/images/Test_and_tag_colours_RGBY.webp"
                alt="Professional test and tag service"
                width={800}
                height={600}
                className="w-full h-auto"
                />
            </div>
            </div>
        </div>

        {/* Testing Frequency & Requirements */}
        <div className="mt-20">
            <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Testing Frequency Requirements</h3>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
                Different work environments require different testing frequencies. We&apos;ll assess your workplace and equipment 
                to determine the appropriate testing schedule for compliance and safety.
            </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faBuilding} className="text-white text-xl" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-green-800">Office Environments</h4>
                <p className="text-green-700 mb-4">Low-risk environments with standard office equipment.</p>
                <div className="space-y-2">
                <div className="flex justify-between">
                    <span className="font-medium">Testing Frequency:</span>
                    <span className="text-green-600 font-bold">5 Years</span>
                </div>
                <div className="text-sm text-green-600">
                    Computers, printers, desk lamps, phone chargers
                </div>
                </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faIndustry} className="text-white text-xl" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-yellow-800">Industrial Environments</h4>
                <p className="text-yellow-700 mb-4">Higher-risk environments with heavy-duty equipment.</p>
                <div className="space-y-2">
                <div className="flex justify-between">
                    <span className="font-medium">Testing Frequency:</span>
                    <span className="text-yellow-600 font-bold">3 Months</span>
                </div>
                <div className="text-sm text-yellow-600">
                    Power tools, machinery, industrial equipment
                </div>
                </div>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faHardHat} className="text-white text-xl" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-red-800">Construction Sites</h4>
                <p className="text-red-700 mb-4">Harsh conditions requiring frequent testing.</p>
                <div className="space-y-2">
                <div className="flex justify-between">
                    <span className="font-medium">Testing Frequency:</span>
                    <span className="text-red-600 font-bold">3 Months</span>
                </div>
                <div className="text-sm text-red-600">
                    Portable tools, temporary installations, site equipment
                </div>
                </div>
            </div>
            </div>
        </div>

        {/* Color Coding System */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Understanding Our Color-Coded Tagging System</h3>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
                Our standardized color-coding system makes it easy to identify when equipment was last tested 
                and when the next test is due.
            </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center border-t-4 border-red-500">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                2024
                </div>
                <h4 className="font-bold mb-2 text-red-700">Red Tags</h4>
                <p className="text-sm text-secondary-600">Equipment tested in 2024. Easy identification for compliance tracking.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center border-t-4 border-green-500">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                2025
                </div>
                <h4 className="font-bold mb-2 text-green-700">Green Tags</h4>
                <p className="text-sm text-secondary-600">Equipment tested in 2025. Current year identification system.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center border-t-4 border-blue-500">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                2026
                </div>
                <h4 className="font-bold mb-2 text-blue-700">Blue Tags</h4>
                <p className="text-sm text-secondary-600">Equipment tested in 2026. Future year planning and scheduling.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center border-t-4 border-yellow-500">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                2027
                </div>
                <h4 className="font-bold mb-2 text-yellow-700">Yellow Tags</h4>
                <p className="text-sm text-secondary-600">Equipment tested in 2027. Long-term compliance management.</p>
            </div>
            </div>
            
            <div className="mt-8 p-6 bg-primary-50 rounded-xl">
            <h4 className="font-bold mb-2 flex items-center">
                <FontAwesomeIcon icon={faInfoCircle} className="text-primary-600 mr-2" />
                Tag Information Includes:
            </h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>• Test date and next due date</div>
                <div>• Technician identification</div>
                <div>• Test results and equipment status</div>
            </div>
            </div>
        </div>

        {/* Equipment We Test */}
        <div className="mt-20">
            <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Equipment We Test & Tag</h3>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
                We test all types of portable electrical equipment across various industries, ensuring comprehensive 
                workplace electrical safety compliance.
            </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faDesktop} className="text-blue-600 text-2xl" />
                </div>
                <h4 className="text-xl font-bold mb-3">Office Equipment</h4>
                <p className="text-secondary-600 text-sm">
                Computers, monitors, printers, scanners, shredders, desk lamps, phone chargers, and office appliances.
                </p>
            </div>
            
            <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faCogs} className="text-green-600 text-2xl" />
                </div>
                <h4 className="text-xl font-bold mb-3">Power Tools</h4>
                <p className="text-secondary-600 text-sm">
                Drills, grinders, saws, sanders, compressors, welding equipment, and all portable power tools.
                </p>
            </div>
            
            <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faUtensils} className="text-purple-600 text-2xl" />
                </div>
                <h4 className="text-xl font-bold mb-3">Kitchen Appliances</h4>
                <p className="text-secondary-600 text-sm">
                Microwaves, kettles, coffee machines, toasters, fridges, dishwashers, and commercial kitchen equipment.
                </p>
            </div>
            
            <div className="text-center p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faPlug} className="text-red-600 text-2xl" />
                </div>
                <h4 className="text-xl font-bold mb-3">Extension Equipment</h4>
                <p className="text-secondary-600 text-sm">
                Extension leads, power boards, portable outlet devices, temporary installations, and RCD units.
                </p>
            </div>
            
            <div className="text-center p-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faMedkit} className="text-yellow-600 text-2xl" />
                </div>
                <h4 className="text-xl font-bold mb-3">Medical Equipment</h4>
                <p className="text-secondary-600 text-sm">
                Portable medical devices, testing equipment, patient care appliances, and healthcare facility equipment.
                </p>
            </div>
            
            <div className="text-center p-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faLightbulb} className="text-indigo-600 text-2xl" />
                </div>
                <h4 className="text-xl font-bold mb-3">Lighting & Heating</h4>
                <p className="text-secondary-600 text-sm">
                Portable heaters, fans, air conditioners, work lights, portable lighting systems, and climate control.
                </p>
            </div>
            </div>
        </div>

        {/* Service Process */}
        <div className="mt-20 bg-primary-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Professional Testing Process</h3>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
                Our systematic approach ensures thorough testing and accurate documentation for complete compliance.
            </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
                <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
                </div>
                <h4 className="font-bold mb-2">Visual Inspection</h4>
                <p className="text-secondary-600 text-sm">
                Thorough visual examination of equipment condition, plugs, cords, and overall safety.
                </p>
            </div>
            
            <div className="text-center">
                <div className="w-16 h-16 bg-red-500 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
                </div>
                <h4 className="font-bold mb-2">Electrical Testing</h4>
                <p className="text-secondary-600 text-sm">
                Insulation resistance, earth continuity, and polarity testing using calibrated equipment.
                </p>
            </div>
            
            <div className="text-center">
                <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
                </div>
                <h4 className="font-bold mb-2">Documentation</h4>
                <p className="text-secondary-600 text-sm">
                Complete test records with results, recommendations, and compliance certificates.
                </p>
            </div>
            
            <div className="text-center">
                <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
                </div>
                <h4 className="font-bold mb-2">Tagging & Scheduling</h4>
                <p className="text-secondary-600 text-sm">
                Color-coded tags applied and next testing date scheduled for ongoing compliance.
                </p>
            </div>
            </div>
        </div>

        {/* Benefits & Why Choose Us */}
        <div className="mt-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Why Choose Our Test & Tag Service</h3>
                <div className="space-y-6">
                <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1 p-2">
                    <FontAwesomeIcon icon={faCheck} className="text-white text-sm" />
                    </div>
                    <div>
                    <h4 className="font-bold mb-2">Qualified Technicians</h4>
                    <p className="text-secondary-600">Our technicians are fully qualified and experienced in AS/NZS 3760 testing procedures.</p>
                    </div>
                </div>
                
                <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-2 mt-1 p-2">
                    <FontAwesomeIcon icon={faCheck} className="text-white text-sm" />
                    </div>
                    <div>
                    <h4 className="font-bold mb-2">Minimal Disruption</h4>
                    <p className="text-secondary-600">We work efficiently around your schedule to minimize workplace disruption.</p>
                    </div>
                </div>
                
                <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1 p-2">
                    <FontAwesomeIcon icon={faCheck} className="text-white text-sm" />
                    </div>
                    <div>
                    <h4 className="font-bold mb-2">Digital Record Keeping</h4>
                    <p className="text-secondary-600">Comprehensive digital records for easy access and audit compliance.</p>
                    </div>
                </div>
                
                <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1 p-2">
                    <FontAwesomeIcon icon={faCheck} className="text-white text-sm" />
                    </div>
                    <div>
                    <h4 className="font-bold mb-2">Automatic Reminders</h4>
                    <p className="text-secondary-600">We track testing schedules and remind you when retesting is due.</p>
                    </div>
                </div>
                </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h4 className="text-xl font-bold mb-6 text-center">Test & Tag Pricing Guide</h4>
                <div className="py-5">
                    <strong className="">Note:</strong> This is only a guide
                </div>
                
                <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium">Standard Office Equipment</span>
                    <span className="text-primary-600 font-bold">From $8 per item</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium">Power Tools & Industrial</span>
                    <span className="text-primary-600 font-bold">From $12 per item</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium">Extension Leads & Boards</span>
                    <span className="text-primary-600 font-bold">From $10 per item</span>
                </div>
                <div className="flex justify-between items-center py-3">
                    <span className="font-medium">RCD Testing</span>
                    <span className="text-primary-600 font-bold">From $25 per unit</span>
                </div>
                </div>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-secondary-600 mb-3">
                    <strong>Volume Discounts Available:</strong> Significant savings for large quantities of equipment.
                </p>
                <a href="/contact" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
                    Get Custom Quote
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
                Contact Us Now For Complete Test & Tag Services?
                </h2>
                <p className="text-xl text-primary-100 mb-8">
                Don&apos;t leave your business open to risk, get your complete test and tag services sorted by professionals in the industry.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="/contact" className="inline-flex items-center justify-center bg-white text-primary-10 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl">
                    Get Your Free Quote Today
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

export default TestAndTag;