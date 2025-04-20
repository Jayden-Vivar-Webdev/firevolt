"use client";
import { useState } from "react";  

const FreeQuote = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const closePopup = () => {
        setIsPopupOpen(true);
    };

    return (
        <>
        {/* Popup Modal */}
        {isPopupOpen && (
            <section>
              <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center" id="popup">
              <div className="bg-white p-8 m-6 rounded-lg shadow-lg max-w-md w-full overflow-y-auto max-h-[90%] relative">
                <button id="close-popup" onClick={closePopup} className="absolute top-3 right-3 text-secondary-500 hover:text-secondary-700 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="mb-6 text-center">
                  <h2 className="text-2xl font-semibold text-gray-900">Free Quote Now</h2>
                  <strong className="text-secondary-500 p-2 inline-block">Don&apos;t have time?</strong> 
                  <p className="text-secondary-500 mt-1">Please fill out the form below and we will get back to you within 24 hours.</p>
                </div>
                
                <form id="contactForm" className="space-y-4" onSubmit={() => {}}>
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      onChange={() => {}}
                      placeholder="Enter your name"
                      className="w-full px-4 py-2 border border-primary-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-white-500 transition duration-200 bg-white-800 text-secondary-100 placeholder-secondary-400"
                    />
                  </div>
        
                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={''}
                      placeholder="Enter your Email"
                      onChange={() => {}}
                      className="w-full px-4 py-2 border border-primary-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-white-500 transition duration-200 bg-white-800 text-secondary-100 placeholder-secondary-400"
                    />
                  </div>
        
                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={''}
                      placeholder="Phone Number"
                      onChange={() => {}}
                       className="w-full px-4 py-2 border border-primary-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-white-500 transition duration-200 bg-white-800 text-secondary-100 placeholder-secondary-400"
                    />
                  </div>
        
                  {/* Services Section */}
                  <div>
                    <p className="block text-sm font-medium text-secondary-700 mb-2">Services Required</p>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <input
                          id="service1"
                          name="services"
                          type="checkbox"
                          value="fire-extinguisher"
                          
                          onChange={() => {}}
                          className="h-4 w-4 text-primary-600 rounded border-secondary-300 focus:ring-primary-500"
                        />
                        <label htmlFor="service1" className="ml-2 block text-sm text-secondary-700">Fire Extinguisher Inspection</label>
                      </div>
                      <div className="flex items-start">
                        <input
                          id="service2"
                          name="services"
                          type="checkbox"
                          value="alarm-systems"
                          
                          onChange={() => {}}
                          className="h-4 w-4 text-primary-600 rounded border-secondary-300 focus:ring-primary-500"
                        />
                        <label htmlFor="service2" className="ml-2 block text-sm text-secondary-700">Fire Alarm Systems</label>
                      </div>
                      <div className="flex items-start">
                        <input
                          id="service3"
                          name="services"
                          type="checkbox"
                          value="risk-assessment"
                          
                          onChange={() => {}}
                          className="h-4 w-4 text-primary-600 rounded border-secondary-300 focus:ring-primary-500"
                        />
                        <label htmlFor="service3" className="ml-2 block text-sm text-secondary-700">Fire Risk Assessment</label>
                      </div>
                      <div className="flex items-start">
                        <input
                          id="service4"
                          name="services"
                          type="checkbox"
                          value="compliance-training"
                          
                          onChange={() => {}}
                          className="h-4 w-4 text-primary-600 rounded border-secondary-300 focus:ring-primary-500"
                        />
                        <label htmlFor="service4" className="ml-2 block text-sm text-secondary-700">Fire Safety Compliance Training</label>
                      </div>
                    </div>
                  </div>
        
                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
            </section>
            
            )}
            </>
    )
}
export default FreeQuote;