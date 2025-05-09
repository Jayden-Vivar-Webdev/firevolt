import { faPlug, faCheckCircle, faCertificate, faExclamationTriangle, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const TestAndTag = () => {
    return (
        <>
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
</div>
</section>
        </>
    );
};

export default TestAndTag;