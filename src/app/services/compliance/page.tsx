
import { 
    faClipboardCheck, 
    faCheckCircle, 
    faShieldAlt, 
    faExclamationTriangle, 
    faArrowRight,
    faFileAlt,
    faUsers,
    faChartLine,
    faHandshake,
    faSearch,
    faCog,
    faHardHat,
    faUserMd,
    faIndustry,
    faGraduationCap,
    faStore,
    faBuilding,
    faFileContract,
    faExclamationCircle,
    faMoneyBillWave,
    faCertificate,
    faClipboardList,
    faInfoCircle,
    faUserCheck,
    faArrowTrendUp,
    faPhone,
    faAward,
    faTimesCircle,
    faLifeRing,
    faQuestionCircle,
    faChalkboardTeacher

  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import Image from "next/image";
  


  import { Metadata } from "next";
  

  export const metadata: Metadata = {
    title: "Workplace Safety Compliance Services Brisbane | WHS Experts | Firevolt",
    description: "Expert WHS compliance services in Brisbane. Safety audits, risk assessments, emergency planning & documentation. Protect your business from fines up to $3M. Free consultation.",
    openGraph: {
      title: "WHS Compliance Services Brisbane | Workplace Safety Experts",
      description: "Professional workplace safety compliance services. WHS audits, risk assessments, safety documentation & emergency planning across Brisbane, Gold Coast & Sunshine Coast.",
      url: "https://www.firevolt.com.au/services/compliance",
      siteName: "Firevolt Fire Safety Experts",
      images: [
        {
          url: "https://www.firevolt.com.au/images/meta/twitter-card.png",
          width: 1200,
          height: 630,
          alt: "Firevolt WHS Compliance Services Brisbane",
        },
      ],
      type: "website",
      locale: "en_AU",
    },
    keywords: [
      "WHS compliance Brisbane",
      "workplace safety compliance QLD", 
      "safety audit services",
      "risk assessment Brisbane",
      "emergency planning services",
      "workplace safety documentation",
      "WHS legislation compliance",
      "safety management systems",
      "workplace health safety Queensland",
      "compliance training Brisbane",
      "safety consultant Brisbane",
      "WHS risk assessment",
      "workplace safety audit",
      "emergency evacuation planning",
      "safety policy development",
      "incident investigation services",
      "workplace hazard assessment",
      "safety compliance documentation",
      "WHS due diligence",
      "workplace safety culture",
      "Brisbane safety consultants",
      "Queensland WHS compliance",
      "workplace safety training",
      "safety management consulting",
      "compliance audit services"
    ],
    authors: [{ name: "Firevolt Safety Compliance Team", url: "https://www.firevolt.com.au/services/compliance" }],
    alternates: {
      canonical: "https://www.firevolt.com.au/services/compliance",
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
      title: "WHS Compliance Services Brisbane | Workplace Safety Experts",
      description: "Professional workplace safety compliance services across Brisbane. WHS audits, risk assessments & safety documentation. Free consultation available.",
      images: ["https://www.firevolt.com.au/images/meta/twitter-card.png"],
    },
    category: "Business Services",
  };
  

  const Compliance = () => {
      return (
          <>
  {/* Enhanced Compliance Services Section */}
    


  <section className="pb-20 bg-white" id="compliance-services">
  <div className="hero-bg text-white py-24 md:py-32 mb-20" id="home">
        
    <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        Your Local Experts In Fire Safety & Compliance
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
        <span className="inline-block bg-primary-10 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
          Safety Compliance
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Workplace Safety Compliance Solutions</h2>
        <p className="text-lg text-secondary-600 mb-8">
          Protect your business, employees, and reputation with our end-to-end compliance services. We go beyond 
          basic requirements to create safety cultures that drive operational excellence while meeting all 
          Australian WHS legislation and industry standards.
        </p>
        
        {/* Expanded Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8 pt-4 sm:pt-0">
          <div>
            <h3 className="font-bold mb-3 text-lg flex items-center">
              <FontAwesomeIcon icon={faClipboardCheck} className="text-primary-500 text-lg mr-2" />
              Our Compliance Services:
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2 text-sm" />
                <span className="font-medium text-secondary-600">Comprehensive WHS audits</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2 text-sm" />
                <span className="font-medium text-secondary-600">Risk assessments & hazard identification</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2 text-sm" />
                <span className="font-medium text-secondary-600">Safety management system development</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2 text-sm" />
                <span className="font-medium text-secondary-600">Emergency planning & evacuation procedures</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2 text-sm" />
                <span className="font-medium text-secondary-600">Safety documentation & registers</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2 text-sm" />
                <span className="font-medium text-secondary-600">Incident investigation & reporting</span>
              </li>
            </ul>
          </div>
          <div className="pt-4 sm:pt-0">
            <h3 className="font-bold mb-3 flex text-lg items-center">
              <FontAwesomeIcon icon={faShieldAlt} className="text-primary-500 mr-2" />
              Key Regulations We Cover:
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2 text-sm" />
                <span className="font-medium text-secondary-600">Work Health & Safety Act 2011</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2 text-sm" />
                <span className="font-medium text-secondary-600">AS3745:2010 Emergency Planning</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2 text-sm" />
                <span className="font-medium text-secondary-600">Dangerous Goods Storage & Handling</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2 text-sm" />
                <span className="font-medium text-secondary-600">Industry-specific regulations (construction, healthcare, etc.)</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2 text-sm" />
                <span className="font-medium text-secondary-600">Chain of Responsibility (CoR) compliance</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2 text-sm" />
                <span className="font-medium text-secondary-600">Building Fire Safety Regulations (BFSR)</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="mb-8 pt-4 sm:pt-0">
          <h3 className="font-bold text-xl mb-4 flex items-center">
            <FontAwesomeIcon icon={faChartLine} className="text-primary-500 mr-2" />
            Benefits of Our Compliance Services
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center">
                <FontAwesomeIcon icon={faFileAlt} className="text-primary-500 mr-2 text-sm" />
                Documentation Support
              </h4>
              <p className="text-sm text-secondary-600">
                We provide complete safety documentation including policies, registers, and compliance certificates.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center">
                <FontAwesomeIcon icon={faUsers} className="text-primary-500 mr-2 text-sm" />
                Staff Training
              </h4>
              <p className="text-sm text-secondary-600">
                Includes compliance training for staff and management to ensure ongoing adherence.
              </p>
            </div>
          </div>
        </div>
        
        {/* Compliance Notice with Enhanced Content */}
        <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded-r-lg mb-8">
          <h4 className="font-bold text-primary-800 mb-2 flex items-center">
            <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2" />
            Why Compliance Matters
          </h4>
          <p className="text-secondary-700 mb-3">
            Non-compliance with WHS regulations can result in:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-secondary-700">
            <li>Fines up to $3 million for corporations and $600,000 for individuals</li>
            <li>Personal liability for directors and officers</li>
            <li>WorkCover premium increases</li>
            <li>Void insurance coverage</li>
            <li>Damage to business reputation</li>
          </ul>
        </div>
        
        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="/contact" className="inline-flex items-center justify-center bg-primary-10 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-bold transition shadow-md hover:shadow-lg flex-1 text-center">
            Request Compliance Audit
            <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
          </a>
          <a href="https://irp.cdn-website.com/94ddd8b4/files/uploaded/Firevolt%20-%20Emergency%20Plans%20fact%20Sheet.pdf" className="inline-flex items-center justify-center bg-white border border-primary-10 text-primary-10 hover:bg-primary-50 px-6 py-3 rounded-lg font-bold transition shadow-sm hover:shadow-md flex-1 text-center">
            Download Compliance Guide
            <FontAwesomeIcon icon={faFileAlt} className="ml-3" />
          </a>
        </div>
      </div>
      
      {/* Image/Content Side */}
      <div className="lg:w-1/2 order-1 lg:order-2">
        <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-100 mb-6">
          <Image
            src="/images/evac_diagram_compliance.jpg"
            alt="Workplace safety compliance audit"
            width={800}
            height={600}
            className="w-full h-auto"
            priority
          />
        </div>
        
        {/* Testimonial */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <div className="flex items-start">
            <FontAwesomeIcon icon={faHandshake} className="text-primary-500 mt-1 mr-3 text-xl" />
            <div>
              <blockquote className="text-secondary-700 italic mb-3">
                We have had our Fire Equipment and Emergency plans 
                recently maintained by Firevolt. 
                The communication, timeliness and 
                requirements were impeccable. 
                Hayden provided us with our Fire 
                training today. It was professional, 
                informative and engaging, no one nodded off. 
                Nice to find a Company that covered most of 
                our requirements. Highly recommend them.
              </blockquote>
              <p className="font-semibold">- Wendy M., Manfuturing WHS Officer</p>
            </div>
          </div>
        </div>
        
        {/* Compliance Checklist */}
        <div className="mt-6 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h4 className="font-bold mb-3 flex items-center">
            <FontAwesomeIcon icon={faClipboardCheck} className="text-primary-500 mr-2" />
            Quick Compliance Checklist
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-0.5 mr-2 text-xs" />
              <span>Current safety policies documented</span>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-0.5 mr-2 text-xs" />
              <span>Regular risk assessments conducted</span>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-0.5 mr-2 text-xs" />
              <span>Emergency procedures in place</span>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-0.5 mr-2 text-xs" />
              <span>Staff training up-to-date</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </section>

  {/* Additional Compliance Content Section */}
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      
      {/* Our Comprehensive Compliance Process */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Proven Compliance Process</h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            We follow a systematic approach to ensure your workplace meets all safety compliance requirements 
            and maintains ongoing adherence to Australian WHS legislation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="bg-primary-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faSearch} className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-bold mb-3">1. Assessment & Audit</h3>
            <p className="text-secondary-600">
              We conduct a thorough assessment of your current workplace safety practices, identifying 
              compliance gaps and areas for improvement against WHS regulations and industry standards.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="bg-primary-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faCog} className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-bold mb-3">2. Implementation</h3>
            <p className="text-secondary-600">
              Our experts develop and implement customised safety management systems, documentation, 
              and procedures tailored to your specific industry and workplace requirements.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="bg-primary-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faChartLine} className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-bold mb-3">3. Ongoing Support</h3>
            <p className="text-secondary-600">
              We provide continuous monitoring, regular reviews, and updates to ensure your compliance 
              program remains effective and adapts to changing regulations and business needs.
            </p>
          </div>
        </div>
      </div>

      {/* Industry-Specific Compliance */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry-Specific Compliance Expertise</h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Different industries face unique safety challenges and regulatory requirements. Our team has 
            extensive experience across multiple sectors to provide specialised compliance solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <FontAwesomeIcon icon={faHardHat} className="text-primary-500 text-2xl mb-3" />
            <h3 className="font-bold text-lg mb-2">Construction & Building</h3>
            <p className="text-secondary-600 text-sm">
              SafeWork Australia regulations, high-risk construction work permits, scaffolding compliance, 
              asbestos management, and confined space safety protocols.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <FontAwesomeIcon icon={faUserMd} className="text-primary-500 text-2xl mb-3" />
            <h3 className="font-bold text-lg mb-2">Healthcare & Aged Care</h3>
            <p className="text-secondary-600 text-sm">
              Infection control protocols, manual handling procedures, dangerous goods storage for 
              medical facilities, and patient safety management systems.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <FontAwesomeIcon icon={faIndustry} className="text-primary-500 text-2xl mb-3" />
            <h3 className="font-bold text-lg mb-2">Manufacturing</h3>
            <p className="text-secondary-600 text-sm">
              Machine guarding compliance, hazardous chemical management, noise control programs, 
              and lockout/tagout procedures for industrial equipment.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <FontAwesomeIcon icon={faGraduationCap} className="text-primary-500 text-2xl mb-3" />
            <h3 className="font-bold text-lg mb-2">Education</h3>
            <p className="text-secondary-600 text-sm">
              School safety management plans, playground safety assessments, laboratory safety 
              protocols, and emergency evacuation procedures for educational facilities.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <FontAwesomeIcon icon={faStore} className="text-primary-500 text-2xl mb-3" />
            <h3 className="font-bold text-lg mb-2">Retail & Hospitality</h3>
            <p className="text-secondary-600 text-sm">
              Customer safety protocols, food safety compliance, crowd management procedures, 
              and workplace violence prevention programs.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <FontAwesomeIcon icon={faBuilding} className="text-primary-500 text-2xl mb-3" />
            <h3 className="font-bold text-lg mb-2">Commercial Offices</h3>
            <p className="text-secondary-600 text-sm">
              Ergonomic assessments, indoor air quality management, emergency procedures, 
              and workplace mental health and wellbeing programs.
            </p>
          </div>
        </div>
      </div>

      {/* Compliance Documentation Services */}
      <div className="mb-16">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Complete Documentation Suite</h2>
            <p className="text-lg text-secondary-600 mb-6">
              Proper documentation is the foundation of effective workplace safety compliance. We provide 
              comprehensive documentation services that meet all regulatory requirements and create a 
              clear audit trail for your organisation.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <FontAwesomeIcon icon={faFileContract} className="text-primary-500 mt-1 mr-3" />
                <div>
                  <h4 className="font-bold mb-2">Safety Management System Documentation</h4>
                  <p className="text-secondary-600 text-sm">
                    Complete safety policies, procedures, and work instructions tailored to your specific 
                    workplace hazards and operational requirements.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FontAwesomeIcon icon={faClipboardList} className="text-primary-500 mt-1 mr-3" />
                <div>
                  <h4 className="font-bold mb-2">Risk Assessment Registers</h4>
                  <p className="text-secondary-600 text-sm">
                    Comprehensive hazard identification and risk assessment documentation with control 
                    measures and regular review schedules.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FontAwesomeIcon icon={faCertificate} className="text-primary-500 mt-1 mr-3" />
                <div>
                  <h4 className="font-bold mb-2">Training Records & Competency Management</h4>
                  <p className="text-secondary-600 text-sm">
                    Detailed training matrices, competency assessments, and certification tracking 
                    systems to demonstrate compliance with training requirements.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FontAwesomeIcon icon={faExclamationCircle} className="text-primary-500 mt-1 mr-3" />
                <div>
                  <h4 className="font-bold mb-2">Incident Management Systems</h4>
                  <p className="text-secondary-600 text-sm">
                    Complete incident reporting, investigation, and corrective action tracking systems 
                    to meet regulatory notification requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="font-bold text-xl mb-6 text-center">Documentation Compliance Checklist</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium">WHS Policy Statement</span>
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                </div>
                
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium">Emergency Response Procedures</span>
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                </div>
                
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium">Hazard Identification Register</span>
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                </div>
                
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium">Safety Training Matrix</span>
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                </div>
                
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium">Contractor Safety Requirements</span>
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                </div>
                
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium">Consultation & Communication Procedures</span>
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800 text-center">
                  <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                  All documentation is customized to your specific workplace and regularly updated 
                  to reflect changing regulations and business operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Training & Support */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Training & Ongoing Support</h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Compliance isn&apos;t just about having the right paperwork, it&apos;s about creating a culture of safety 
            where everyone understands their roles and responsibilities.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <FontAwesomeIcon icon={faChalkboardTeacher} className="text-primary-500 mr-3" />
              Comprehensive Training Programs
            </h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold mb-2">Cheif Warden Training</h4>
                <p className="text-secondary-600 text-sm">
                Comprehensive leadership instructions for the emergency control organisation members.
                Develop Training confidence for the cheif warden to handle emergencies.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold mb-2">Live Fire Extingusiher & Fire Blanket Training</h4>
                <p className="text-secondary-600 text-sm">
                 Hands-on experience with fire extinguishers and blankets in controlled scenarios
                  to prepare your business for emergencies.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold mb-2">Evacuation Training</h4>
                <p className="text-secondary-600 text-sm">
                  Training on your specific emergency plans and evacuation procedures to help
                  boost your staff confidence in handling emergencies in the workplace enviroment.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold mb-2">Emergency Response Team Training</h4>
                <p className="text-secondary-600 text-sm">
                  Specialised training for fire wardens, first aid officers, and emergency response teams 
                  including regular drills and competency assessments.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <FontAwesomeIcon icon={faLifeRing} className="text-primary-500 mr-3" />
              Ongoing Support Services
            </h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold mb-2">Regular Compliance Reviews</h4>
                <p className="text-secondary-600 text-sm">
                  Scheduled audits and reviews to ensure your safety management system remains effective 
                  and compliant with current regulations.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold mb-2">Legislative Update Notifications</h4>
                <p className="text-secondary-600 text-sm">
                  Stay informed about changes to WHS legislation and industry standards that may impact 
                  your compliance obligations.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold mb-2">24/7 Emergency Support</h4>
                <p className="text-secondary-600 text-sm">
                  Access to expert advice and support during workplace incidents, including guidance on 
                  regulatory notification requirements.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold mb-2">Compliance Helpdesk</h4>
                <p className="text-secondary-600 text-sm">
                  Direct access to our compliance experts for questions about safety procedures, 
                  regulatory requirements, and best practice implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ROI and Business Benefits */}
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">The Business Case for Compliance</h2>
          <p className="text-lg text-secondary-600">
            Investing in comprehensive safety compliance delivers measurable returns through reduced costs, 
            improved productivity, and enhanced business reputation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faMoneyBillWave} className="text-green-600 text-xl" />
            </div>
            <h3 className="font-bold text-lg mb-2">Cost Reduction</h3>
            <p className="text-secondary-600 text-sm">
              Lower insurance premiums, reduced workers compensation claims, and elimination of regulatory fines.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faUserCheck} className="text-blue-600 text-xl" />
            </div>
            <h3 className="font-bold text-lg mb-2">Employee Retention</h3>
            <p className="text-secondary-600 text-sm">
              Improved workplace safety leads to higher employee satisfaction and reduced staff turnover.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faArrowTrendUp} className="text-purple-600 text-xl" />
            </div>
            <h3 className="font-bold text-lg mb-2">Productivity Gains</h3>
            <p className="text-secondary-600 text-sm">
              Fewer workplace incidents means less downtime and improved operational efficiency across your organization.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faAward} className="text-red-600 text-xl" />
            </div>
            <h3 className="font-bold text-lg mb-2">Reputation Enhancement</h3>
            <p className="text-secondary-600 text-sm">
              Demonstrate commitment to safety, attract better talent, and strengthen relationships with clients and partners.
            </p>
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="font-bold text-xl mb-4 text-center">Compliance Investment vs. Non-Compliance Costs</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-green-600 mb-3 flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                With Professional Compliance Services
              </h4>

              <ul className="space-y-2 text-sm">
                <li>• Proactive risk management</li>
                <li>• Predictable compliance costs</li>
                <li>• Insurance premium discounts</li>
                <li>• Reduced incident frequency</li>
                <li>• Enhanced business credibility</li>
                <li>• Peace of mind for leadership</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-red-600 mb-3 flex items-center">
                <FontAwesomeIcon icon={faTimesCircle} className="mr-2" />
                Without Proper Compliance
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Regulatory fines and penalties</li>
                <li>• Increased insurance costs</li>
                <li>• Work stoppages and investigations</li>
                <li>• Legal fees and court costs</li>
                <li>• Damage to business reputation</li>
                <li>• Personal liability for directors</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Compliance FAQ Section */}
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-secondary-600">
          Common questions about workplace safety compliance and our services
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-lg mb-3 flex items-center">
              <FontAwesomeIcon icon={faQuestionCircle} className="text-primary-500 mr-2" />
              How often should we conduct compliance audits?
            </h3>
            <p className="text-secondary-600">
              We recommend annual comprehensive audits for most businesses, with quarterly reviews for high-risk industries. 
              However, the frequency depends on your industry, workplace hazards, incident history, and regulatory requirements. 
              Our team will develop a customized audit schedule that ensures continuous compliance while being cost-effective 
              for your organization.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-lg mb-3 flex items-center">
              <FontAwesomeIcon icon={faQuestionCircle} className="text-primary-500 mr-2" />
              What happens if we&apos;re found to be non-compliant during an inspection?
            </h3>
            <p className="text-secondary-600">
              If a regulator identifies compliance issues, we provide immediate support to address any improvement notices 
              or prohibition notices. Our team will work with you to develop and implement corrective actions, liaise with 
              regulators on your behalf, and ensure all issues are resolved promptly to minimize business disruption and 
              avoid escalating penalties.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-lg mb-3 flex items-center">
              <FontAwesomeIcon icon={faQuestionCircle} className="text-primary-500 mr-2" />
              Can you help with compliance for multiple sites or locations?
            </h3>
            <p className="text-secondary-600">
              Absolutely. We specialize in multi-site compliance management, developing consistent safety standards across 
              all your locations while accounting for site-specific hazards and local regulatory variations. Our centralized 
              documentation system ensures consistency while allowing for local customization where necessary.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-lg mb-3 flex items-center">
              <FontAwesomeIcon icon={faQuestionCircle} className="text-primary-500 mr-2" />
              How do you stay current with changing WHS regulations?
            </h3>
            <p className="text-secondary-600">
              Our team actively monitors regulatory updates through SafeWork Australia, state regulators, and industry 
              associations. We participate in industry forums, maintain professional development certifications, and have 
              established relationships with regulatory bodies. When changes occur, we proactively notify our clients and 
              assist with implementation.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-lg mb-3 flex items-center">
              <FontAwesomeIcon icon={faQuestionCircle} className="text-primary-500 mr-2" />
              What&apos;s included in your compliance documentation package?
            </h3>
            <p className="text-secondary-600">
              Our comprehensive documentation package includes safety policies and procedures, risk assessment registers, 
              emergency response plans, training matrices, incident reporting forms, contractor management procedures, 
              consultation records, and all required safety registers. All documents are customized to your specific 
              workplace and industry requirements.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-lg mb-3 flex items-center">
              <FontAwesomeIcon icon={faQuestionCircle} className="text-primary-500 mr-2" />
              Do you provide training for our emergency planning committee?
            </h3>
            <p className="text-secondary-600">
              Yes, we provide comprehensive training for safety committees, including their legal responsibilities, 
              meeting procedures, hazard identification techniques, and consultation requirements. We can also assist 
              with establishing safety committees where they don&apos;t currently exist and provide ongoing support to 
              ensure they remain effective.
            </p>
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
          Ready to Ensure Complete Workplace Safety Compliance?
        </h2>
        <p className="text-xl text-primary-100 mb-8">
          Don&apos;t leave your business exposed to regulatory risks. Partner with Australia&apos;s leading 
          workplace safety compliance experts and protect your organization, employees, and reputation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a href="/contact" className="inline-flex items-center justify-center bg-white text-primary-10 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl">
            Get Your Free Compliance Assessment
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
  
export default Compliance