"use client"
import Training from '../partials/training';
import Extinguisher from '../partials/extinguisher';
import Plans from '../partials/plans';
import Compliance from '../partials/compliance';
import Test from '../partials/test';
import { useState } from 'react';
import FreeCompliance from '../partials/free_cc';

export default function AllServices() {


    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);

    }
  return (
    <>
        {/* Hero Section */}
        <section className="relative bg-[url('/images/vehicle/PHOTO-2025-06-04-18-56-53%203.jpg')] bg-cover bg-[center_-8rem] text-white py-24 md:py-32">
    {/* Overlay */}
    <div className="absolute inset-0 bg-[rgba(16,24,40,0.9)] z-0"></div>

    {/* Content wrapper with proper z-index and positioning */}
    <div className="relative container mx-auto px-4 text-center z-10">
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
        onClick={togglePopup}
        className="bg-primary-10 text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-700 transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl inline-block"
        >
        Claim Your Free Compliance Check
        </a>
    </div>
    <FreeCompliance isPopupOpen={isPopupOpen} togglePopup={togglePopup} />
    </section>
    <Training />
    <Extinguisher />
    <Plans />
    <Compliance />
    <Test />
    </>
    
    
  )
}

