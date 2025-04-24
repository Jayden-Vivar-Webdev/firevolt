"use client";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFireExtinguisher, 
  faArrowRight, 
  faFire, 
  faHome, 
  faExclamationTriangle, 
  faCheckCircle, 
  faTag, 
  faStar, 
  faBuilding, 
  faCalendarCheck, 
  faThumbsUp, 
  faShieldAlt, 
  faUsers, 
  faRoute, 
  faTornado, 
  faFlask, 
  faUserInjured, 
  faClock, 
  faFileAlt, 
  faArrowDown, 
  faFileDownload,
  faPhone,
  faCalendarAlt,
  faClipboardCheck,
  faMapMarkedAlt
} from '@fortawesome/free-solid-svg-icons';

import Training from '../partials/training';
import Extinguisher from '../partials/extinguisher';
import Plans from '../partials/plans';
import Compliance from '../partials/compliance';
import Test from '../partials/test';

import { useState } from 'react';

const ServicesPage = () => {

const [selectedCategory, setSelectedCategory] = useState('training');


const toggleCategory = (category: string) => {
  setSelectedCategory(category);
};

const categories = [
  {
    name: 'Free Compliance Check',
    icon: faClipboardCheck,
    filter: 'compliance-check',
    component: <Compliance />
  },
  {
    name: 'Fire Training',
    icon: faFire,
    filter: 'training',
    component: <Training />
  },
  {
    name: 'Extinguishers Services',
    icon: faFireExtinguisher,
    filter: 'extinguishers',
    component: <Extinguisher />
  },
  { 
    name: 'Test & Tag',
    icon: faClipboardCheck,
    filter: 'test-and-tag',
    component: <Test />
  },
  {
    name: 'Emergency Plans & Diagrams',
    icon: faMapMarkedAlt,
    filter: 'plans',
    component: <Plans />
  },
  
]
    
  
return (
    <>
      {/* Hero Section */}
      <section className="hero-bg text-white py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Comprehensive Fire Safety Services
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-secondary-200">
            Protecting your business with expert fire safety solutions tailored to your needs.
            <br />
            <br />
            <strong>BRISBANE - SUNSHINE COAST - GOLD COAST</strong>
          </p>
          <a 
            href="#free-compliance-check" 
            className="bg-primary-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-700 transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl inline-block"
          >
            Claim Your Free Compliance Check
          </a>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary-50 text-primary-600 px-4 py-1 rounded-full text-sm font-medium mb-4">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Fire Safety Solutions</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              We provide comprehensive fire safety services to keep your business compliant and protected.
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
                <button 
                key={category.filter}
                onClick={() => toggleCategory(category.filter)}
                className={`gallery-filter px-4 py-2 rounded-full ${selectedCategory === category.filter ? 'bg-primary-600 text-white font-medium transition hover:bg-primary-700 active' : 'bg-white text-secondary-700 border border-gray-200 font-medium transition hover:bg-gray-50 hover:border-primary-300 hover:text-primary-600'}`} 
                data-filter={category.filter}
                >
                    <FontAwesomeIcon icon={category.icon} className="mr-2" />
                    {category.name}
                </button>
            ))}
            {categories.find(category => category.filter === selectedCategory)?.component}
         
        </div>
      </section>
      
      </>

  )
}   


export default ServicesPage;