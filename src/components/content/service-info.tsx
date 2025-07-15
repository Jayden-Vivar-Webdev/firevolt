import React from 'react';
import { Shield, AlertTriangle, CheckCircle, Users, Building, FileText } from 'lucide-react';
import Link from 'next/link';
type LocationProps = {
    location: string;
  };
  
const FireServicesSection = ({ location }: LocationProps) => {
  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Fire Safety Inspections",
      description: "Comprehensive assessments to identify potential fire hazards and ensure compliance with Australian fire safety standards."
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Emergency Planning",
      description: "Customized evacuation plans and emergency response procedures tailored to your specific business environment."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Compliance Management",
      description: "Ongoing support to maintain compliance with local fire safety regulations and building codes."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Staff Training",
      description: "Professional fire safety training programs to ensure your team knows how to respond in emergency situations."
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "System Installation",
      description: "Installation and maintenance of fire detection systems, extinguishers, and emergency lighting."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Documentation Support",
      description: "Complete fire safety documentation and certification to meet legal requirements and insurance needs."
    }
  ];

  const whyBusinessesNeed = [
    {
      title: "Legal Compliance",
      description: "Australian businesses are legally required to maintain fire safety standards under the Building Code of Australia and workplace safety regulations."
    },
    {
      title: "Insurance Protection",
      description: "Proper fire safety measures can significantly reduce insurance premiums and ensure coverage in case of incidents."
    },
    {
      title: "Employee Safety",
      description: "Protect your most valuable asset - your employees - with comprehensive fire safety measures and emergency preparedness."
    },
    {
      title: "Business Continuity",
      description: "Minimize downtime and financial losses by preventing fires and ensuring rapid, safe evacuation procedures."
    },
    {
      title: "Reputation Management",
      description: "Demonstrate your commitment to safety and responsibility, protecting your brand and customer trust."
    },
    {
      title: "Risk Mitigation",
      description: "Proactively identify and address fire risks before they become costly emergencies or legal liabilities."
    }
  ];

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Professional Fire Safety Services in {location.charAt(0).toUpperCase() + location.slice(1).toLowerCase()}
          </h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
            Our comprehensive fire safety services are designed to protect your business in {location.charAt(0).toUpperCase() + location.slice(1).toLowerCase()}, employees, and assets. 
            From compliance audits to emergency planning, we provide the expertise and support you need to maintain 
            a safe working environment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">
            Our Core Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="text-primary-600 mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold mb-4 text-gray-900 text-center">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Businesses Need Fire Safety */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">
            Why Your Business Needs Professional Fire Safety Services - {location.charAt(0).toUpperCase() + location.slice(1).toLowerCase()}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyBusinessesNeed.map((reason, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">
                    {reason.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-primary-600 text-white rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Secure Your Business?
            </h3>
            <p className="text-lg mb-8 text-primary-100 max-w-2xl mx-auto">
              Don&apos;t wait for an emergency. Our expert team is ready to assess your fire safety needs 
              and provide tailored solutions for your {location.charAt(0).toUpperCase() + location.slice(1).toLowerCase()} business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href='/contact' className="bg-white text-primary-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition transform hover:-translate-y-[0.1rem] shadow-lg hover:shadow-xl">
                Schedule Your Assessment
              </Link>
              <Link href='/contact' className="bg-primary-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-800 transition transform hover:-translate-y-[0.1rem] shadow-lg hover:shadow-xl border-2 border-primary-400">
                Get Emergency Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FireServicesSection;