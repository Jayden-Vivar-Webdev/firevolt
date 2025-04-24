import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faCheckCircle, faArrowRight, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

const Plans = () => {
    return (
        <>
 
 {/* Emergency Plans Section */}
 <section className="py-20 bg-gray-50" id="emergency-plans">
 <div className="container mx-auto px-4">
   <div className="text-center mb-16">
     <span className="inline-block bg-primary-50 text-primary-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
       Compliance Documentation
     </span>
     <h2 className="text-3xl md:text-4xl font-bold mb-4">Emergency Plans & Evacuation Diagrams</h2>
     <p className="text-secondary-600 max-w-3xl mx-auto">
       AS3745-2010 compliant documentation tailored to your specific workplace requirements
     </p>
   </div>
   
   <div className="grid md:grid-cols-2 gap-8 mb-12">
     <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
       <div className="flex items-center mb-6">
         <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mr-4">
           <FontAwesomeIcon icon={faFileAlt} className="text-xl" />
         </div>
         <h3 className="text-xl font-bold">Emergency Plans</h3>
       </div>
       <p className="text-secondary-600 mb-6">
         Comprehensive documents detailing your emergency procedures, warden structure, and response protocols.
       </p>
       <ul className="space-y-3 mb-6">
         <li className="flex items-start">
           <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-3" />
           <span>Site-specific emergency procedures</span>
         </li>
         <li className="flex items-start">
           <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-3" />
           <span>Warden roles and responsibilities</span>
         </li>
         <li className="flex items-start">
           <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-3" />
           <span>Emergency contact details</span>
         </li>
         <li className="flex items-start">
           <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-3" />
           <span>Training requirements</span>
         </li>
       </ul>
       <a href="/emergency-plans" className="inline-flex items-center text-primary-600 font-medium">
         Learn More About Emergency Plans
         <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
       </a>
     </div>
     
     <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
       <div className="flex items-center mb-6">
         <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mr-4">
           <FontAwesomeIcon icon={faMapMarkedAlt} className="text-xl" />
         </div>
         <h3 className="text-xl font-bold">Evacuation Diagrams</h3>
       </div>
       <p className="text-secondary-600 mb-6">
         Clear, compliant diagrams showing exit routes, assembly areas, and emergency equipment locations.
       </p>
       <ul className="space-y-3 mb-6">
         <li className="flex items-start">
           <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-3" />
           <span>AS3745-2010 compliant</span>
         </li>
         <li className="flex items-start">
           <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-3" />
           <span>Customized to your floor plan</span>
         </li>
         <li className="flex items-start">
           <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-3" />
           <span>Standard emergency symbols</span>
         </li>
         <li className="flex items-start">
           <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-3" />
           <span>48-hour turnaround available</span>
         </li>
       </ul>
       <a href="/evacuation-diagrams" className="inline-flex items-center text-primary-600 font-medium">
         Learn More About Evacuation Diagrams
         <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
       </a>
     </div>
   </div>
   
   <div className="text-center">
     <a href="/contact" className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
       Get Your Custom Emergency Documentation
       <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
     </a>
   </div>
 </div>
</section>
</>
    );
};

export default Plans;
