
import { useState } from "react";

const FreeCompliance = ({isPopupOpen, togglePopup}: {isPopupOpen: boolean; togglePopup: () => void;}) => {
    const [formStatus, setFormStatus] = useState<string | null>(null);
    
    async function submitForm(formData: FormData): Promise<void> {
      
      const formValues = {
        name: formData.get("name"),
        email: formData.get('email'),
        phone: formData.get('phone'),
        service: 'Free Compliance Check',
        message: 'The customer is requesting a free compliance check for their business!'
      }
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(formValues)
        });
        if(response.ok){
          setFormStatus('Success, you will be contacted within 24hrs.')
          console.log('Success, Form Sent')
        } else {
          console.error('Failed to send message')
          setFormStatus('Please call us, your form submission failed.')
        }
      } catch (error) {
        console.error("Error", error)
      }
    }
    
    return (
      <>
      
        {isPopupOpen ? (
            <section>
              <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center" id="popup">
              <div className="bg-white p-8 m-6 rounded-lg shadow-lg max-w-md w-full overflow-y-auto max-h-[90%] relative">
                <button id="close-popup" onClick={togglePopup} className="absolute top-3 right-3 text-secondary-500 hover:text-secondary-700 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="mb-6 text-center">
                  <h2 className="text-2xl font-semibold text-gray-900">Free Compliance Check</h2>
                  <strong className="text-secondary-500 p-2 inline-block">Allow Us To Assist You</strong> 
                  <p className="text-secondary-500 mt-1">Please fill out the form below and we will get back to you within 24 hours.</p>
                </div>
                
                <form id="contactForm" className="space-y-4" action={submitForm}>
  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      
                      placeholder="Enter your name"
                      className="w-full px-4 py-2 border border-primary-300 text-black rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-white-500 transition duration-200 bg-white-800 placeholder-secondary-400"
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
                      
                      placeholder="Enter your Email"
                      
                      className="w-full px-4 py-2 border border-primary-300 text-black rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-white-500 transition duration-200 bg-white-800 placeholder-secondary-400"
                    />
                  </div>
        
                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      
                      placeholder="Phone Number"
                      
                       className="w-full px-4 py-2 border border-primary-300 text-black rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-white-500 transition duration-200 bg-white-800 placeholder-secondary-400"
                    />
                  </div>
        
                  {/* Services Section */}
                  {formStatus && (
                    <div 
                    className={formStatus.includes("Success") ? "text-green-500 font-bold text-center mb-4 bg-green-100 border border-green-500 border-2 rounded-lg p-3" : "text-red-500 font-bold text-center mb-4 bg-red-100 border border-red-500 border-2 rounded-lg p-3"}
                    >
                      <p className={formStatus.includes("Success") ? "text-green-500 font-bold" : "text-red-500 font-bold"}>
                        {formStatus}
                      </p>
                    </div>
                  )}
                  
        
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
            
            ) : 
              null} 
          </>
        )
      }   
       
export default FreeCompliance;