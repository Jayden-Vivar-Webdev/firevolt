
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faUserTie, faLock, faHandshake } from '@fortawesome/free-solid-svg-icons';

const ContactPage = () => {

    {/* Use state for FAQ */}

  return (
    <>
        
 <section className="contact-hero text-white py-24 md:py-32">
    <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Contact Our Fire Volt Specialists</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-secondary-200">Have questions about our services or need fire safety advice? Reach out to our team of certified professionals.</p>
    </div>
</section>


<section className="py-16">
    <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Card 1 */}
            <div className="contact-card bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
                <div className="contact-icon w-16 h-16 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center text-2xl mb-6 mx-auto">
                    <FontAwesomeIcon icon={faPhone} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Phone Support</h3>
                <p className="text-secondary-600 text-center mb-4">Speak directly with a Fire Volt specialist.</p>
                <div className="text-center">
                    <a href="tel:+18001234567" className="text-primary-600 font-semibold hover:text-primary-800 transition">1300 533 294</a>
                    <p className="text-sm text-secondary-500 mt-1">Mon-Fri, 6am-5.30pm AEST | Sat, 8am-12pm AEST</p>
                </div>
            </div>
            
            {/* Contact Card 2 */}
            <div className="contact-card bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
                <div className="contact-icon w-16 h-16 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center text-2xl mb-6 mx-auto">
                    <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Email Us</h3>
                <p className="text-secondary-600 text-center mb-4">Send us your questions and we&apos;ll respond within 24 hours.</p>
                <div className="text-center">
                    <a href="mailto:service@firevolt.com.au" className="text-primary-600 font-semibold hover:text-primary-800 transition">service@firevolt.com.au</a>
                    <p className="text-sm text-secondary-500 mt-1">General inquiries</p>
                </div>
            </div>
            
            {/* Contact Card 3 */}
            <div className="contact-card bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
                <div className="contact-icon w-16 h-16 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center text-2xl mb-6 mx-auto">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">View Our Location</h3>
                <p className="text-secondary-600 text-center mb-4">Schedule an in-person consultation.</p>
                <div className="text-center">
                    <p className="text-secondary-700">Brisbane, Sunshine Coast</p>
                    <p className="text-secondary-700">QLD, Australia</p>
                    <a href="https://maps.app.goo.gl/eEBVwbkR3a7HnEfP7" className="text-primary-600 text-sm font-semibold hover:text-primary-800 transition mt-2 inline-block">Google Maps →</a>
                </div>
            </div>
        </div>
    </div>
</section>

{/* Contact Form */}
<section id="contact-us" className="py-16 bg-white">
    <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="md:flex">
                <div className="md:w-1/2 bg-primary-600 text-white p-8 md:p-12">
                    <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
                    <p className="mb-6 text-primary-100">Fill out the form and one of our Fire Volt specialists will contact you within 24 hours to discuss your needs.</p>
                    
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <FontAwesomeIcon icon={faUserTie} className="mt-1 mr-4 text-primary-300" />
                            <div>
                                <h4 className="font-bold">Fire Volt Specialists</h4>
                                <p className="text-primary-200 text-sm">All our consultants are certified specialists.</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <FontAwesomeIcon icon={faLock} className="mt-1 mr-4 text-primary-300" />
                            <div>
                                <h4 className="font-bold">Secure Communication</h4>
                                <p className="text-primary-200 text-sm">Your information is protected with encryption.</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <FontAwesomeIcon icon={faHandshake} className="mt-1 mr-4 text-primary-300" />
                            <div>
                                <h4 className="font-bold">No Obligation</h4>
                                <p className="text-primary-200 text-sm">Initial consultations are completely free with no commitment.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="md:w-1/2 p-8 md:p-12">
                    <h3 className="text-xl font-bold mb-6 text-secondary-900">Send Us a Message</h3>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-secondary-700 font-medium mb-2">Full Name</label>
                            <input 
                            type="text" 
                            id="name" 
                            className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" 
                            placeholder="John Smith" 
                            required
                            />
                        </div>
                        
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-secondary-700 font-medium mb-2">Email Address</label>
                            <input 
                            type="email" 
                            id="email" 
                            className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" 
                            placeholder="john@example.com" 
                            required
                            />
                        </div>
                        
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-secondary-700 font-medium mb-2">Phone Number</label>
                            <input 
                            type="tel" 
                            id="phone" 
                            className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" 
                            placeholder="(+61) 423 320 712"
                            />
                        </div>
                        
                        <div className="mb-4">
                            <label htmlFor="service" className="block text-secondary-700 font-medium mb-2">Service Interested In</label>
                            <select id="service" className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                                <option value="">Select a service</option>
                                <option value="investment">Fire Safety</option>
                                <option value="retirement">Fire Risk Assessment</option>
                                <option value="wealth">Fire Compliance</option>
                                <option value="tax">Fire Training</option>
                                <option value="estate">Fire Management</option>
                                <option value="other">Other</option>
                            </select>
                        </div> 
                        
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-secondary-700 font-medium mb-2">Your Message</label>
                            <textarea 
                            id="message" 
                            rows={4} 
                            className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" 
                            placeholder="Tell us about your goals..."
                            />
                        </div>
                        
                        <button type="submit" className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-primary-700 transition shadow-md hover:shadow-lg">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

{/* FAQ Section */}
<section className="py-16 bg-secondary-50">
    <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <span className="inline-block bg-primary-50 text-primary-600 px-4 py-1 rounded-full text-sm font-medium mb-4">FAQs</span>
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">Find answers to common questions about our fire safety services.</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
            {/* FAQ Item 1 */}
            <div className="mb-4 border-b border-gray-200 pb-4">
                <button className="faq-toggle flex justify-between items-center w-full text-left font-medium text-secondary-800 hover:text-primary-600 focus:outline-none">
                    <span>In what areas do you provide services?</span>
                    <i className="fas fa-chevron-down text-primary-600 transition-transform duration-300"></i>
                </button>
                <div className="faq-content mt-2 text-secondary-600">
                    <p>We provide fire safety services to all areas of Queensland. Our basic fire safety services start with no minimum investment requirement, while our premium fire safety services typically require a minimum portfolio of $100,000. We believe in accessible fire safety advice for everyone.</p>
                </div>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="mb-4 border-b border-gray-200 pb-4">
                <button className="faq-toggle flex justify-between items-center w-full text-left font-medium text-secondary-800 hover:text-primary-600 focus:outline-none">
                    <span>Do you offer contracts for customers?</span>
                    <i className="fas fa-chevron-down text-primary-600 transition-transform duration-300"></i>
                </button>
                <div className="faq-content mt-2 text-secondary-600">
                    <p>We offer contracts for customers. Please contact us to discuss your needs.</p>
                </div>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="mb-4 border-b border-gray-200 pb-4">
                <button className="faq-toggle flex justify-between items-center w-full text-left font-medium text-secondary-800 hover:text-primary-600 focus:outline-none">
                    <span>What makes Fire Volt different from other fire safety firms?</span>
                    <i className="fas fa-chevron-down text-primary-600 transition-transform duration-300"></i>
                </button>
                <div className="faq-content mt-2 text-secondary-600">
                    <p>Our approach combines cutting-edge technology with personalized service. We use advanced experience to optimize your fire safety and compliance measures.</p>
                </div>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="mb-4 border-b border-gray-200 pb-4">
                <button className="faq-toggle flex justify-between items-center w-full text-left font-medium text-secondary-800 hover:text-primary-600 focus:outline-none">
                    <span>How often will I meet with my fire safety advisor?</span>
                    <i className="fas fa-chevron-down text-primary-600 transition-transform duration-300"></i>
                </button>
                <div className="faq-content mt-2 text-secondary-600">
                    <p>We typically schedule quarterly check-ins, but the frequency can be adjusted based on your needs. Between meetings you&apos;ll have access to our fire safety experts. We&apos;re always available when important fire safety decisions arise.</p>
                </div>
            </div>
            
            {/* FAQ Item 5 */}
            <div className="mb-4 border-b border-gray-200 pb-4">
                <button className="faq-toggle flex justify-between items-center w-full text-left font-medium text-secondary-800 hover:text-primary-600 focus:outline-none">
                    <span>Is my business and fire safety procedures secure with Fire Volt?</span>
                    <i className="fas fa-chevron-down text-primary-600 transition-transform duration-300"></i>
                </button>
                <div className="faq-content mt-2 text-secondary-600">
                    <p>Absolutely. We use encryption for all data transmissions and storage. Our systems undergo regular security audits, and we adhere to strict privacy policies. Your information is never shared with third parties without your explicit consent, except as required by law.</p>
                </div>
            </div>
        </div>
    </div>
</section>

{/* CTA Section */}
<section className="py-16 bg-primary-600 text-white">
    <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Start Your Fire Safety Journey?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8 text-primary-100">Schedule a free consultation with one of our Fire Volt specialists today.</p>
        <a href="#contact-us" className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl">Book a Consultation</a>
    </div>
</section>


    
    
    </>
  );
};

export default ContactPage;