
import {useState} from 'react'

const FreeQuote = ({isPopupOpen, togglePopup}: {isPopupOpen: boolean; togglePopup: () => void;}) => {
    const [formStatus, setFormStatus] = useState<string | null>(null);
    async function submitForm(formData: FormData): Promise<void> {
      
      const formValues = {
        name: formData.get("name"),
        email: formData.get('email'),
        phone: formData.get('phone'),
        service: formData.get('service'),
        message: `The client has requested a free quote for ${formData.get('service')}.`
      }
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(formValues)
        });
        if(response.ok){
          setFormStatus('Success, you will be contacted within 24hrs')
          console.log('Success, Form Sent')

        } else {
          setFormStatus('Please call us, your form submission failed.')
          console.error('Failed to send message')
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
                  <h2 className="text-2xl font-semibold text-gray-900">Free Quote Now</h2>
                  <strong className="text-secondary-500 p-2 inline-block">Don&apos;t have time?</strong> 
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
                  
                  <div className="mb-4">
                      <label htmlFor="service" className="block text-secondary-700 font-medium mb-2">Service Interested In</label>
                      <select id="service" 
                      name='service'
                      className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                          <option value="">Select a service</option>
                          <option value="Free Check">Free Compliance Check</option>
                          <option value="Extinguisher Services">Extinguisher Services</option>
                          <option value="Test & Tag">Test & Tag</option>
                          <option value="Fire Training">Fire Training</option>
                          <option value="Evacuation Diagrams">Evacuation Diagrams</option>
                          <option value="Evacuation Plans">Evacuation Plans</option>
                          <option value="other">Other</option>
                      </select>
                  </div> 
                  {/* Services Section */}
                  {formStatus && (
                    <div 
                        className={`text-center mb-4 p-3 rounded-lg border-2 ${
                        formStatus.includes("Success") 
                            ? "text-green-700 bg-green-50 border-green-300" 
                            : "text-red-700 bg-red-50 border-red-300"
                        }`}
                    >
                        <p className={`font-medium ${
                        formStatus.includes("Success") 
                            ? "text-green-700" 
                            : "text-red-700"
                        }`}>
                        {formStatus}
                        </p>
                    </div>
                    )}
        
                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="flex w-full bg-primary-10 text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-700 transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl inline-block"
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
       
export default FreeQuote;