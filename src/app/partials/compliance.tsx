import { 
    faClipboardCheck, 
    faCheckCircle, 
    faShieldAlt, 
    faExclamationTriangle, 
    faArrowRight,
    faFileAlt,
    faUsers,
    faChartLine,
    faHandshake
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import Image from "next/image";
  
  const Compliance = () => {
      return (
          <>
  {/* Enhanced Compliance Services Section */}
  <section className="py-20 bg-white" id="compliance-services">
  <div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row gap-12 items-center">
      <div className="lg:w-1/2 order-2 lg:order-1">
        <span className="inline-block bg-primary-50 text-primary-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
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
                <span className="font-medium text-secondary-600">Comprehensive WHS audits & gap analysis</span>
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
                <span className="font-medium text-secondary-600">Environmental protection regulations</span>
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
          <a href="/contact" className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-bold transition shadow-md hover:shadow-lg flex-1 text-center">
            Request Compliance Audit
            <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
          </a>
          <a href="/compliance-guide" className="inline-flex items-center justify-center bg-white border border-primary-600 text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-lg font-bold transition shadow-sm hover:shadow-md flex-1 text-center">
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
                &quot;Their compliance audit identified several issues we weren&apos;t aware of. Their team helped us implement solutions that not only made us compliant but improved our overall safety culture.&quot;
              </blockquote>
              <p className="font-semibold">- Sarah K., Manufacturing Client</p>
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
          </>
      );
  };
  
  export default Compliance;