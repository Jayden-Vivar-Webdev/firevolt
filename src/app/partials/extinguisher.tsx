import { faFireExtinguisher, faCheckCircle, faCalendarCheck, faExclamationTriangle, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Extinguisher = () => {
    return (
        <>
{/* Extinguisher Services Section */}
<section className="py-20 bg-white" id="extinguisher-services">
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
</div>
</section>
        </>
    );
};

export default Extinguisher;