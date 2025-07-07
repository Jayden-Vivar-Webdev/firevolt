"use client"
import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faFire, faExclamationTriangle, faCheckCircle, faBuilding, faShieldAlt, faUsers, faTornado, faFlask, faUserInjured, faClock, faFileAlt} from '@fortawesome/free-solid-svg-icons';

export default function ComprehensivePlans(){
    //Faq Open elements
  const [isFaqOpen1, setIsFaqOpen1] = useState(false);
  const [isFaqOpen2, setIsFaqOpen2] = useState(false);
  const [isFaqOpen3, setIsFaqOpen3] = useState(false);
  const [isFaqOpen4, setIsFaqOpen4] = useState(false);

    return(<>
        {/* Emergency Plans Section */}
<section className="py-20 bg-gray-50" id="emergency-plans">
<div className="container mx-auto px-4">
  <div className="text-center mb-16">
    <span className="inline-block bg-primary-10 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
      Workplace Safety
    </span>
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Emergency Plans</h2>
    <p className="text-secondary-600 max-w-3xl mx-auto">
      Customized emergency plans that meet AS3745-2010 requirements and actually work in real emergency situations.
    </p>
  </div>


  <div className="flex flex-col xl:flex-row gap-12">
    {/* Content Column */}
    
    <div className="flex flex-col justify-between xl:w-1/3">
    <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-100 mb-12 justify-between">
    <Image
          src="/images/emergency_plan_book.png"
          alt="Professional emergency plan documentation example"
          width={800}
          height={600}
          className="w-full h-auto"
        />
    </div>
      <div className="bg-white rounded-xl shadow-lg p-8 h-auto border border-gray-100">
        <h3 className="text-2xl font-bold mb-6">Why Your Business Needs a Professional Emergency Plan</h3>
        
        <div className="space-y-6 mb-8">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faShieldAlt} className="text-sm" />
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-bold mb-1">Legal Compliance</h4>
              <p className="text-secondary-600">
                AS3745-2010 requires all Australian workplaces to have a current emergency plan that covers fire, medical emergencies, and other potential incidents.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faUsers} className="text-sm" />
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-bold mb-1">Staff Safety</h4>
              <p className="text-secondary-600">
                Clear procedures reduce panic and ensure everyone knows exactly what to do in an emergency.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faBuilding} className="text-sm" />
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-bold mb-1">Asset Protection</h4>
              <p className="text-secondary-600">
                Proper emergency response can minimize damage to your property and equipment.
              </p>
            </div>
          </div>
        </div>

        

        <div className="mt-8 pt-6 border-t border-gray-200">
          <a href="/contact" className="inline-flex items-center justify-center bg-primary-10 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-bold transition shadow-md hover:shadow-lg w-full">
            Get Your Emergency Plan
            <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
          </a>
        </div>
      </div>
    </div>

    {/* Plan Components Column */}
    <div className="flex flex-col justify-between xl:w-2/3 ">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 h-auto mb-12 lg:mb-2 ">
        <div className="bg-primary-10 p-6 text-white">
          <h3 className="text-xl font-bold flex items-center">
            <FontAwesomeIcon icon={faFileAlt} className="mr-3" />
            What&apos;s Included in Our Emergency Plans
          </h3>
        </div>
        
        <div className="p-8">

          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div>     
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">1</span>
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="font-bold mb-1">Emergency Procedures</h4>
                  <p className="text-secondary-600 text-sm">
                    Step-by-step instructions for fire, medical emergencies, chemical spills, and more
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">2</span>
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="font-bold mb-1">Warden Structure</h4>
                  <p className="text-secondary-600 text-sm">
                    Clear hierarchy of wardens and their specific responsibilities
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">3</span>
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="font-bold mb-1">Communication Plan</h4>
                  <p className="text-secondary-600 text-sm">
                    How to alert staff and emergency services during an incident
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">4</span>
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="font-bold mb-1">Evacuation Details</h4>
                  <p className="text-secondary-600 text-sm">
                    Primary and secondary evacuation routes with assembly areas
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">5</span>
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="font-bold mb-1">Emergency Contacts</h4>
                  <p className="text-secondary-600 text-sm">
                    All essential contacts including first aid officers and local emergency services
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">6</span>
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="font-bold mb-1">Training Schedule</h4>
                  <p className="text-secondary-600 text-sm">
                    Recommended frequency for emergency training and drills
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">

            <h4 className="font-bold mb-3 flex items-center">
              <FontAwesomeIcon icon={faClock} className="text-primary-500 mr-2" />
              What You&apos;ll Get.
            </h4>
            <ol className="space-y-3">
              <li className="flex items-start">
                <span className="bg-primary-100 text-primary-600 text-xs font-bold px-2 py-1 rounded mr-3">1</span>
                <span className="text-secondary-600">Professionally Designed Evacuaction Diagram & Emergency Plan</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary-100 text-primary-600 text-xs font-bold px-2 py-1 rounded mr-3">2</span>
                <span className="text-secondary-600">Site assessment to gather information for the diagrams & plan.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary-100 text-primary-600 text-xs font-bold px-2 py-1 rounded mr-3">3</span>
                <span className="text-secondary-600">Your Company logo added to the Diagrams & Plan.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary-100 text-primary-600 text-xs font-bold px-2 py-1 rounded mr-3">4</span>
                <span className="text-secondary-600">Guaranteed compliance with Australian Standards.</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
      
<div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 h-auto lg:mt-12 ">
<div className="bg-primary-10 p-6 text-white">
  <h3 className="text-xl font-bold flex items-center">
    <FontAwesomeIcon icon={faFileAlt} className="mr-3" />
    Our 4-Step Process
  </h3>
</div>

<div className="p-8">
  <ol className="space-y-6">
    {/* Step 1 */}
    <li className="flex">
      <div className="flex-shrink-0">
        <span className="bg-primary-10 text-white text-lg font-bold w-10 h-10 rounded-full flex items-center justify-center mr-4">01</span>
      </div>
      <div>
        <h4 className="font-bold text-lg mb-1">Contact Us</h4>
        <p className="text-secondary-600">
          Reach out by phone, email, or through our contact form to begin the process.
        </p>
      </div>
    </li>

    {/* Step 2 */}
    <li className="flex items-start">
      <div className="flex-shrink-0">
        <span className="bg-primary-10 text-white text-lg font-bold w-10 h-10 rounded-full flex items-center justify-center mr-4">02</span>
      </div>
      <div>
        <h4 className="font-bold text-lg mb-1">Information Gathering</h4>
        <p className="text-secondary-600">
        We gather information to create your emergency procedures and diagrams.
        </p>
      </div>
    </li>

    {/* Step 3 */}
    <li className="flex items-start">
      <div className="flex-shrink-0">
        <span className="bg-primary-10 text-white text-lg font-bold w-10 h-10 rounded-full flex items-center justify-center mr-4">03</span>
      </div>
      <div>
        <h4 className="font-bold text-lg mb-1">Design & Approval</h4>
        <p className="text-secondary-600">
          We send your newly designed emergency plan and diagrams for your review and approval.
        </p>
      </div>
    </li>

    {/* Step 4 */}
    <li className="flex items-start">
      <div className="flex-shrink-0">
        <span className="bg-primary-10 text-white text-lg font-bold w-10 h-10 rounded-full flex items-center justify-center mr-4">04</span>
      </div>
      <div>
        <h4 className="font-bold text-lg mb-1">Installation/Delivery</h4>
        <p className="text-secondary-600">
          We conduct a final site visit to deliver and install your new emergency plan and diagrams.
        </p>
      </div>
    </li>
  </ol>

  <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded-r-lg mb-8 mt-8">
          <h4 className="font-bold text-primary-800 mb-2 flex items-center">
            <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2" />
            Did You Know?
          </h4>
          <p className="text-secondary-700">
            Over 60% of businesses without proper emergency plans fail to reopen after a major incident. Don&apos;t take the risk with your business.
          </p>
  </div>
  
  <div className="mt-8 pt-6 border-t border-gray-200">
    <a href="/contact" className="inline-flex items-center justify-center bg-primary-10 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-bold transition shadow-md hover:shadow-lg w-full">
      Start Your Emergency Plan
      <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
    </a>
  </div>
</div>
</div>
    </div>
  </div>

  {/* FAQ Section */}
  <div className="mt-20 max-w-4xl mx-auto">
    <h3 className="text-2xl font-bold mb-8 text-center">Emergency Plan FAQs</h3>
    
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      {/* FAQ Item 1 */}
      <div className="border-b border-gray-200">
        <button 
        onClick={() => setIsFaqOpen1(!isFaqOpen1)}
        className="faq-question w-full text-left p-6 hover:bg-gray-50 transition flex justify-between items-center">
          <span className="font-medium text-lg">How often should our emergency plan be reviewed?</span>
          <svg className="w-5 h-5 text-primary-500 transform transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      {isFaqOpen1 && <div className="faq-answer px-6 pb-6">
          <p className="text-secondary-600">
            AS3745-2010 requires emergency plans to be reviewed at least every 12 months, or whenever there are significant changes to:
          </p>
          <ul className="mt-3 space-y-2 pl-5">
            <li className="flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2 text-sm" />
              <span>Your building layout or exits</span>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2 text-sm" />
              <span>Emergency contact personnel</span>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2 text-sm" />
              <span>After any emergency incident</span>
            </li>
          </ul>
        </div>}
        
      </div>

      {/* FAQ Item 2 */}
      <div className="border-b border-gray-200">
        <button 
        onClick={() => setIsFaqOpen2(!isFaqOpen2)}
        className="faq-question w-full text-left p-6 hover:bg-gray-50 transition flex justify-between items-center">
          <span className="font-medium text-lg">What&apos;s the difference between an emergency plan and evacuation diagrams?</span>
          <svg className="w-5 h-5 text-primary-500 transform transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isFaqOpen2 && <div className="faq-answer px-6 pb-6">
          <p className="text-secondary-600">
            While both are required under AS3745-2010, they serve different purposes:
          </p>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="bg-primary-50 p-4 rounded-lg">
              <h4 className="font-bold text-primary-800 mb-2">Emergency Plan</h4>
              <p className="text-secondary-700 text-sm">
                A comprehensive document detailing all emergency procedures, roles, and responsibilities. It&apos;s the &quot;instruction manual&quot; for emergencies.
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">Evacuation Diagrams</h4>
              <p className="text-secondary-700 text-sm">
                Visual representations of your floor plan showing exit routes and emergency equipment. They&apos;re the &quot;quick reference guides&quot; placed throughout your premises.
              </p>
            </div>
          </div>
        </div>}
        
      </div>

      {/* FAQ Item 3 */}
      <div className="border-b border-gray-200">
        <button 
        onClick={() => setIsFaqOpen3(!isFaqOpen3)}
        className="faq-question w-full text-left p-6 hover:bg-gray-50 transition flex justify-between items-center">
          <span className="font-medium text-lg">Do we need different plans for different types of emergencies?</span>
          <svg className="w-5 h-5 text-primary-500 transform transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isFaqOpen3 && <div className="faq-answer px-6 pb-6">
          <p className="text-secondary-600">
            Your emergency plan should cover all potential emergencies relevant to your workplace. We typically include:
          </p>
          <div className="mt-3 grid sm:grid-cols-2 gap-4">
            <span className="inline-flex items-center bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
              <FontAwesomeIcon icon={faFire} className="mr-2" />
              Fire emergencies
            </span>
            <span className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              <FontAwesomeIcon icon={faUserInjured} className="mr-2" />
              Medical emergencies
            </span>
            <span className="inline-flex items-center bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
              <FontAwesomeIcon icon={faFlask} className="mr-2" />
              Chemical spills
            </span>
            <span className="inline-flex items-center bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
              <FontAwesomeIcon icon={faTornado} className="mr-2" />
              Natural disasters
            </span>
          </div>
        </div>}
        
      </div>

      {/* FAQ Item 4 */}
      <div className="">
        <button 
        onClick={() => setIsFaqOpen4(!isFaqOpen4)}
        className="faq-question w-full text-left p-6 hover:bg-gray-50 transition flex justify-between items-center">
          <span className="font-medium text-lg">How long does it take to develop an emergency plan?</span>
          <svg className="w-5 h-5 text-primary-500 transform transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isFaqOpen4 && <div className="faq-answer px-6 pb-6">
          <p className="text-secondary-600">
            The timeline depends on the size and complexity of your workplace:
          </p>
          <div className="mt-4 space-y-4">
            <div className="flex items-start">
              <div className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-bold mr-4">1-3 Days</div>
              <div>
                <h4 className="font-bold mb-1">Small Offices/Retail</h4>
                <p className="text-secondary-600 text-sm">Simple layouts with under 20 staff</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-bold mr-4">3-7 Days</div>
              <div>
                <h4 className="font-bold mb-1">Medium Businesses</h4>
                <p className="text-secondary-600 text-sm">Multiple floors or departments</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-bold mr-4">1-2 Weeks</div>
              <div>
                <h4 className="font-bold mb-1">Large/Complex Sites</h4>
                <p className="text-secondary-600 text-sm">Industrial sites, hospitals, schools with special requirements</p>
              </div>
            </div>
          </div>
        </div>}
        
      </div>
    </div>
  </div>
</div>
</section>
        </>)
}