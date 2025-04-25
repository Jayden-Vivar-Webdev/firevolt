import Image from "next/image";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faLightbulb, faHandsHelping, faBullseye, faEnvelope, faEye, faNetworkWired} from '@fortawesome/free-solid-svg-icons';

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const AboutPage = () => {
    
    return (
        <>
        {/* Hero Section */}
    <section className="hero-bg text-white py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Our Story, Mission, and Values</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-secondary-200">For over 5+ years, Firevolt has been helping clients achieve fire safety through innovative solutions and personalized service.</p>
            <a href="#our-team" className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-700 transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl">Meet Our Team</a>
        </div>
    </section>

        {/* About Intro */}
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
                <span className="inline-block bg-primary-50 text-primary-600 px-4 py-1 rounded-full text-sm font-medium mb-4">About Firevolt</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted Fire Partners Since 2018</h2>
                <p className="text-secondary-600 mb-6">Firevolt was founded on the principle that everyone deserves access to professional fire protection, regardless of situation. What began as a small fire protection business in Brisbane has grown into a nationally recognized fire protection company serving clients across the country.</p>
                <p className="text-secondary-600 mb-8">Our independence empowers us to deliver genuinely objective fire protection services. We’re proud to act with integrity, always prioritizing the safety, compliance, and best interests of our clients.</p>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-3xl font-bold text-primary-600 mb-2">5+</h3>
                        <p className="text-secondary-600">Years in Business</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-primary-600 mb-2">100+</h3>
                        <p className="text-secondary-600">Fire Protection Experts</p>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2">
                <Image 
                src="/images/warehouse-safety.jpg" 
                alt="Warehouse Safety" 
                className="w-full rounded-xl shadow-lg"
                width={500}
                height={300}
                />
            </div>
        </div>
    </div>
</section>

        {/* Our Mission */}
        <section className="py-20 bg-secondary-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
            <span className="inline-block bg-primary-50 text-primary-600 px-4 py-1 rounded-full text-sm font-medium mb-4">Our Purpose</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">Guiding principles that shape every decision we make</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center text-2xl mb-6">
                    <FontAwesomeIcon icon={faBullseye} />
                </div>
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-secondary-600">To use our veteran military experience to deliver professional training and maintenance services, equipping workplaces with the skills to effectively respond to emergencies and maximize safety for people and property.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center text-2xl mb-6">
                    <FontAwesomeIcon icon={faEye} />
                </div>
                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <p className="text-secondary-600">To offer comprehensive fire protection, preventative maintenance, fire training, and test tagging services to help businesses in Queensland achieve compliance with Australian standards and regulations.</p>
            </div>
        </div>
    </div>
</section>

        {/* Our Values */}
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
            <span className="inline-block bg-primary-50 text-primary-600 px-4 py-1 rounded-full text-sm font-medium mb-4">Our Culture</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">The foundation of everything we do</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="values-card bg-white p-6 rounded-xl shadow-md border border-gray-100 transition duration-300 hover:shadow-lg">
                <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center text-xl mb-4">
                    <FontAwesomeIcon icon={faUserShield} />
                </div>
                <h3 className="text-lg font-bold mb-2">Integrity</h3>
                <p className="text-secondary-600 text-sm">We adhere to the highest ethical standards, providing honest advice even when it&apos;s not the easiest path.</p>
            </div>
            
            <div className="values-card bg-white p-6 rounded-xl shadow-md border border-gray-100 transition duration-300 hover:shadow-lg">
                <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center text-xl mb-4">
                    <FontAwesomeIcon icon={faLightbulb} />
                </div>
                <h3 className="text-lg font-bold mb-2">Innovation</h3>
                <p className="text-secondary-600 text-sm">We continuously evolve our strategies to leverage the latest fire protection research and technological advancements.</p>
            </div>
            
            <div className="values-card bg-white p-6 rounded-xl shadow-md border border-gray-100 transition duration-300 hover:shadow-lg">
                <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center text-xl mb-4">
                    <FontAwesomeIcon icon={faHandsHelping} />
                </div>
                <h3 className="text-lg font-bold mb-2">Client Focus</h3>
                <p className="text-secondary-600 text-sm">Your success is our success. We listen first, then craft solutions tailored to your unique situation.</p>
            </div>
            
            <div className="values-card bg-white p-6 rounded-xl shadow-md border border-gray-100 transition duration-300 hover:shadow-lg">
                <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center text-xl mb-4">
                    <FontAwesomeIcon icon={faNetworkWired} />
                </div>
                <h3 className="text-lg font-bold mb-2">Excellence</h3>
                <p className="text-secondary-600 text-sm">We pursue mastery in our craft, combining deep expertise with meticulous attention to detail.</p>
            </div>
            </div>
        </div>
        </section>

        {/* Our History */}
        <section className="history-bg text-white py-20">
            <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <span className="inline-block bg-primary-400 text-primary-900 px-4 py-1 rounded-full text-sm font-medium mb-4">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our History</h2>
            <p className="text-secondary-200 max-w-2xl mx-auto">Milestones in our journey to becoming a trusted partner for fire protection and training</p>
        </div>
        
        <div className="max-w-4xl mx-auto relative pl-8">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 h-full w-0.5 bg-primary-400"></div>
            
            {/* Timeline Item 1 */}
            <div className="relative mb-12 timeline-item pl-8">
                <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                    <h3 className="text-xl font-bold mb-2">2018 - Founding</h3>
                    <p className="text-secondary-200 mb-2">Firevolt is founded by Hayden in Brisbane with a vision to help small businesses stay compliant.</p>
                    <span className="text-sm text-primary-300">June 15, 2018</span>
                </div>
            </div>
            
            {/* Timeline Item 2 */}
            <div className="relative mb-12 timeline-item pl-8">
                <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                    <h3 className="text-xl font-bold mb-2">2020 - First Expansion</h3>
                    <p className="text-secondary-200 mb-2">We gain our first client and start to supporting local businesses.</p>
                    <span className="text-sm text-primary-300">March 3, 2020</span>
                </div>
            </div>
            
            {/* Timeline Item 3 */}
            <div className="relative mb-12 timeline-item pl-8">
                <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                    <h3 className="text-xl font-bold mb-2">2021 - Provide a Service</h3>
                    <p className="text-secondary-200 mb-2">We provide our first full packaged service to local businesses.</p>
                    <span className="text-sm text-primary-300">October 22, 2021</span>
                </div>
            </div>
            
            {/* Timeline Item 4 */}
            <div className="relative mb-12 timeline-item pl-8">
                <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                    <h3 className="text-xl font-bold mb-2">2022 - Building a Team</h3>
                    <p className="text-secondary-200 mb-2">We start to build a team to support our clients.</p>
                    <span className="text-sm text-primary-300">January 8, 2022</span>
                </div>
            </div>
            
            {/* Timeline Item 5 */}
            <div className="relative timeline-item pl-8">
                <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                    <h3 className="text-xl font-bold mb-2">2023 - Today</h3>
                    <p className="text-secondary-200 mb-2">Serving over 100+ businesses in Brisbane and surrounding areas.</p>
                    <span className="text-sm text-primary-300">Present</span>
                </div>
            </div>
        </div>
    </div>
    </section>

            {/* Our Team */}
            <section className="py-20 bg-secondary-50" id="our-team">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                <span className="inline-block bg-primary-50 text-primary-600 px-4 py-1 rounded-full text-sm font-medium mb-4">Our People</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
                <p className="text-secondary-600 max-w-2xl mx-auto">Seasoned professionals with decades of combined experience</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Team Member 1 */}
                <div className="team-card bg-white rounded-xl overflow-hidden shadow-md transition duration-300 border border-gray-100">
                    <div className="h-64 overflow-hidden">
                        <Image 
                        src="/images/hayden-img.webp" 
                        alt="Robert Langley" 
                        className="w-full h-full object-contain"
                        width={500}
                        height={300}
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold">Hayden Heath</h3>
                        <p className="text-primary-600 mb-3">Founder & CEO</p>
                        <p className="text-secondary-600 text-sm mb-4">Over a decade of experience in the military and now helping small businesses stay compliant.</p>
                        <div className="flex space-x-3">
                            <a href="#" className="text-secondary-400 hover:text-primary-600 transition"><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a href="mailto:service@firevolt.com.au" className="text-secondary-400 hover:text-primary-600 transition"><FontAwesomeIcon icon={faEnvelope} /></a>
                        </div>
                    </div>
                </div>
                
                {/* Team Member 2
                <div className="team-card bg-white rounded-xl overflow-hidden shadow-md transition duration-300 border border-gray-100">
                    <div className="h-64 overflow-hidden">
                        <Image 
                        src="/images/hayden-img.webp" 
                        alt="Sarah Chen" 
                        className="w-full h-full object-cover"
                        width={500}
                        height={300}
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold">Carl Carlson</h3>
                        <p className="text-primary-600 mb-3">Head of Operations</p>
                        <p className="text-secondary-600 text-sm mb-4">Carl provides the day to day operations of the business and training management.</p>
                        <div className="flex space-x-3">
                            <a href="#" className="text-secondary-400 hover:text-primary-600 transition"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#" className="text-secondary-400 hover:text-primary-600 transition"><i className="fas fa-envelope"></i></a>
                        </div>
                    </div>
                </div> */}
                
                {/* Team Member 3 */}
                {/* <div className="team-card bg-white rounded-xl overflow-hidden shadow-md transition duration-300 border border-gray-100">
                    <div className="h-64 overflow-hidden">
                        <Image 
                        src="/images/hayden-img.webp" 
                        alt="Michael Rodriguez" 
                        className="w-full h-full object-cover"
                        width={500}
                        height={300}
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold">Ryan</h3>
                        <p className="text-primary-600 mb-3">Safety Officer</p>
                        <p className="text-secondary-600 text-sm mb-4">Ryan is our safety officer and helps us ensure our clients are compliant.</p>
                        <div className="flex space-x-3">
                            <a href="#" className="text-secondary-400 hover:text-primary-600 transition"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#" className="text-secondary-400 hover:text-primary-600 transition"><i className="fas fa-envelope"></i></a>
                        </div>
                    </div>
                </div> */}
                
                {/* Team Member 4 */}
                {/* <div className="team-card bg-white rounded-xl overflow-hidden shadow-md transition duration-300 border border-gray-100">
                    <div className="h-64 overflow-hidden">
                        <Image 
                        src="/images/hayden-img.webp" 
                        alt="Emily Johnson" 
                        className="w-full h-full object-cover"
                        width={500}
                        height={300}
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold">John Doe</h3>
                        <p className="text-primary-600 mb-3">Project Manager</p>
                        <p className="text-secondary-600 text-sm mb-4">John is our project manager and helps us ensure our clients meet all regulatory requirements.</p>
                        <div className="flex space-x-3">
                            <a href="#" className="text-secondary-400 hover:text-primary-600 transition"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#" className="text-secondary-400 hover:text-primary-600 transition"><i className="fas fa-envelope"></i></a>
                        </div>
                    </div>
                </div> */}
            </div> 
            
        </div>
    </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-600 text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Firevolt Difference?</h2>
                <p className="text-lg max-w-3xl mx-auto mb-10 text-secondary-200">Schedule a complimentary consultation with one of our experts today.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="/contact" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl">Contact Us</a>
                    <a href="tel:+18001234567" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-primary-600 transition transform hover:-translate-y-1">
                        <i className="fas fa-phone mr-2"></i> 1300 533 294
                    </a>
                </div>
            </div>
        </section>
        </>
    
    );
};

export default AboutPage;