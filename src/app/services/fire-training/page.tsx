import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faShieldAlt, faUsers, faLaptop, faUserGroup, faStar, faCheckCircle, 
    faClipboardCheck, faRoute, faBuilding, 
    faCogs, faHospital, faGraduationCap,faCertificate, 
    faChartLine, faClock, faFileAlt} from '@fortawesome/free-solid-svg-icons';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Fire Safety Training Brisbane | Warden & Evacuation Training | Firevolt",
    description:
        "Accredited fire safety training in Brisbane including fire warden courses, evacuation drills, and emergency response training. Ensure workplace safety and compliance with Firevolt’s expert trainers.",
    openGraph: {
        title: "Fire Training & Emergency Response Courses Brisbane | Firevolt",
        description:
        "Professional fire training services in Brisbane. Fire warden training, evacuation practice, and workplace safety courses tailored to your business needs.",
        url: "https://www.firevolt.com.au/services/fire-training",
        siteName: "Firevolt Fire Safety Experts",
        images: [
        {
            url: "https://www.firevolt.com.au/images/meta/twitter-card.png",
            width: 1200,
            height: 630,
            alt: "Firevolt Fire Training Services Brisbane",
        },
        ],
        type: "website",
        locale: "en_AU",
    },
    keywords: [
        "fire training Brisbane",
        "fire safety training QLD",
        "fire warden training Brisbane",
        "emergency evacuation training",
        "workplace fire training",
        "emergency response training",
        "fire safety compliance training",
        "AS 3745 fire training",
        "workplace safety courses Brisbane",
        "fire extinguisher training",
        "evacuation drill training",
        "fire safety workshops",
        "fire awareness training Queensland",
        "workplace fire safety compliance",
        "emergency fire training Brisbane",
        "fire and evacuation procedures training",
        "safety training for businesses Brisbane",
        "fire warden certification Brisbane",
        "emergency planning training",
        "fire safety consultants Brisbane",
    ],
    authors: [
        {
        name: "Firevolt Fire Training Team",
        url: "https://www.firevolt.com.au/services/fire-training",
        },
    ],
    alternates: {
        canonical: "https://www.firevolt.com.au/services/fire-training",
    },
    metadataBase: new URL("https://www.firevolt.com.au"),
    robots: {
        index: true,
        follow: true,
        googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
        },
    },
    twitter: {
        card: "summary_large_image",
        title: "Fire Safety Training Brisbane | Firevolt",
        description:
        "Fire safety and warden training for Brisbane workplaces. Stay compliant with expert-led evacuation and emergency response training.",
        images: ["https://www.firevolt.com.au/images/meta/twitter-card.png"],
    },
    category: "Business Services",
};
      


const Training = () => {
    return (
        <>
        <section className="pb-20 bg-gray-50" id="fire-training">
            <div className="hero-bg text-white py-24 md:py-32 mb-20" id="home">
            
                <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        Your Local Experts In Fire Safety & Compliance
                        </h1>
                        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-secondary-200">
                        Compliance Done For You!
                        Easy Way to Make Sure Your Workplace is Safe & Compliant with the Australian Standards.
                        <br />
                        <br />
                        <strong>BRISBANE - SUNSHINE COAST - GOLD COAST</strong>
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="/contact" className="bg-primary-10 text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-700 transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl">Contact Us</a>
                        <a href="/about" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-primary-600 transition transform hover:-translate-y-1">Learn More About Us</a>
                        </div>
                </div>
            </div>
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="lg:w-1/2">
                        <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-100">
                            <Image
                                src="/images/fire_training.jpg"
                                alt="Fire safety training session"
                                width={800}
                                height={600}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <span className="inline-block bg-primary-10 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                            Hands-On Training
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Fire Safety Training Programs</h2>
                        <p className="text-lg text-secondary-600 mb-8">
                            Our engaging, practical training programs ensure your staff are prepared to respond effectively in emergency situations. 
                            We offer flexible training options to suit your business needs.
                        </p>
                        
                        <div className="space-y-6 mb-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                                        <FontAwesomeIcon icon={faFire} className="text-sm" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-bold mb-1">Live Fire Training</h3>
                                    <p className="text-secondary-600">
                                        Hands-on experience with fire extinguishers and blankets in controlled scenarios
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                                        <FontAwesomeIcon icon={faShieldAlt} className="text-sm" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-bold mb-1">Chief Warden Training</h3>
                                    <p className="text-secondary-600">
                                        Comprehensive instruction for emergency control organization members
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                                        <FontAwesomeIcon icon={faUsers} className="text-sm" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-bold mb-1">Emergency Procedures</h3>
                                    <p className="text-secondary-600">
                                        Training on your specific emergency plans and evacuation procedures
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Training Options Section */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-4">Training Delivery Options</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
                                    <div className="flex items-center mb-3">
                                        <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-3">
                                            <FontAwesomeIcon icon={faUserGroup} />
                                        </div>
                                        <h4 className="font-bold">In-Person Training</h4>
                                    </div>
                                    <p className="text-secondary-600 text-sm">
                                        On-site training at your location with hands-on practice using real equipment in simulated scenarios.
                                    </p>
                                </div>
                                <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
                                    <div className="flex items-center mb-3">
                                        <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-3">
                                            <FontAwesomeIcon icon={faLaptop} />
                                        </div>
                                        <h4 className="font-bold">Online Training</h4>
                                    </div>
                                    <p className="text-secondary-600 text-sm">
                                        Interactive virtual sessions with certified instructors, perfect for remote teams or refresher courses.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="/contact" className="bg-primary-10 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-bold text-center transition shadow-md hover:shadow-lg">
                                Book Training Session
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Additional Training Details Section */}
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Course Modules */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Training Modules</h2>
                        <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
                            Our structured training programs cover all aspects of fire safety, from prevention to emergency response. 
                            Each module is designed to build practical skills and confidence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                                <FontAwesomeIcon icon={faClipboardCheck} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Risk Assessment</h3>
                            <ul className="text-secondary-600 space-y-2">
                                <li>• Identifying fire hazards</li>
                                <li>• Risk evaluation techniques</li>
                                <li>• Prevention strategies</li>
                                <li>• Documentation requirements</li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                                <FontAwesomeIcon icon={faFire} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Fire Extinguisher Use</h3>
                            <ul className="text-secondary-600 space-y-2">
                                <li>• Types of extinguishers</li>
                                <li>• PASS technique training</li>
                                <li>• Live fire practice</li>
                                <li>• Maintenance awareness</li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                                <FontAwesomeIcon icon={faRoute} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Evacuation Procedures</h3>
                            <ul className="text-secondary-600 space-y-2">
                                <li>• Emergency action plans</li>
                                <li>• Exit route identification</li>
                                <li>• Assembly point protocols</li>
                                <li>• Disabled person assistance</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Industry-Specific Training */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Industry-Specific Training</h2>
                        <p className="text-lg text-secondary-600">
                            Tailored programs designed for the unique fire safety challenges of different industries
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-100">
                            <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FontAwesomeIcon icon={faBuilding} className="text-xl" />
                            </div>
                            <h4 className="font-bold mb-2">Office Buildings</h4>
                            <p className="text-sm text-secondary-600">High-rise evacuation, floor warden training</p>
                        </div>

                        <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-100">
                            <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FontAwesomeIcon icon={faCogs} className="text-xl" />
                            </div>
                            <h4 className="font-bold mb-2">Manufacturing</h4>
                            <p className="text-sm text-secondary-600">Chemical hazards, machinery safety protocols</p>
                        </div>

                        <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-100">
                            <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FontAwesomeIcon icon={faHospital} className="text-xl" />
                            </div>
                            <h4 className="font-bold mb-2">Healthcare</h4>
                            <p className="text-sm text-secondary-600">Patient evacuation, medical equipment safety</p>
                        </div>

                        <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-100">
                            <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FontAwesomeIcon icon={faGraduationCap} className="text-xl" />
                            </div>
                            <h4 className="font-bold mb-2">Educational</h4>
                            <p className="text-sm text-secondary-600">Student safety, large group management</p>
                        </div>
                    </div>
                </div>

                {/* Training Features */}
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="lg:w-1/2">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Our Training Programs?</h2>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                                        <FontAwesomeIcon icon={faCertificate} className="text-xs" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Certified Instructors</h4>
                                        <p className="text-secondary-700 text-sm">All trainers are certified fire safety professionals with real-world experience</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                                        <FontAwesomeIcon icon={faChartLine} className="text-xs" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Measurable Results</h4>
                                        <p className="text-secondary-700 text-sm">Track progress with assessments and practical evaluations</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                                        <FontAwesomeIcon icon={faClock} className="text-xs" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Flexible Scheduling</h4>
                                        <p className="text-secondary-700 text-sm">Training sessions scheduled around your business operations</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                                        <FontAwesomeIcon icon={faFileAlt} className="text-xs" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Compliance Documentation</h4>
                                        <p className="text-secondary-700 text-sm">Complete training records and certificates for regulatory requirements</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <h3 className="text-xl font-bold mb-4">Training Statistics</h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm font-medium">Course Completion Rate</span>
                                            <span className="text-sm font-bold text-primary-600">100%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-primary-600 h-2 rounded-full" style={{width: '100%'}}></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm font-medium">Participant Satisfaction</span>
                                            <span className="text-sm font-bold text-primary-600">96%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-primary-600 h-2 rounded-full" style={{width: '96%'}}></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm font-medium">Knowledge Retention (3 months)</span>
                                            <span className="text-sm font-bold text-primary-600">89%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-primary-600 h-2 rounded-full" style={{width: '89%'}}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                                    <p className="text-sm font-medium text-center">
                                        <span className="text-2xl font-bold text-primary-600 block">1,000+</span>
                                        Employees Trained Annually
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
                    <p className="text-lg text-secondary-600">Hear from businesses who have transformed their fire safety culture</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                        <div className="flex items-center mb-4">
                            <div className="flex text-yellow-400">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                        </div>
                        <p className="text-secondary-600 mb-4 italic">
                            &ldquo;Great training today with Fire volt. 
                            Very informative and professional whilst creating a fantastic fun and learning environment. 
                            Would highly recommend.&rdquo;
                        </p>
                        <div>
                            <p className="font-bold">Samuel Ridgard</p>
                            <p className="text-sm text-secondary-500">6 months ago</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                        <div className="flex items-center mb-4">
                            <div className="flex text-yellow-400">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                        </div>
                        <p className="text-secondary-600 mb-4 italic">
                            &ldquo;We have had our Fire Equipment and Emergency plans recently maintained by Firevolt. The communication, timeliness and requirements were impeccable. Hayden provided us with our Fire training today.&rdquo;
                        </p>
                        <div>
                            <p className="font-bold">Wendy Mavrick</p>
                            <p className="text-sm text-secondary-500">3 Months</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                        <div className="flex items-center mb-4">
                            <div className="flex text-yellow-400">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                        </div>
                        <p className="text-secondary-600 mb-4 italic">
                            &ldquo;Thanks so much for our training today at Apollo Hayden and Ally. Very well done and clearly explained and good to get everyone involved to learn how to handle a fire blanket and extinguisher.&rdquo;
                        </p>
                        <div>
                            <p className="font-bold">Apollo Patios</p>
                            <p className="text-sm text-secondary-500">1 year ago</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-primary-600 text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Your Fire Safety Training?</h2>
                <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                    Don&apos;t wait for an emergency to discover gaps in your team&apos;s fire safety knowledge. 
                    Book a consultation today and let us create a customized training program for your business.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                    <a href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg hover:shadow-xl">
                        Schedule Free Consultation
                    </a>
                    <a href="tel:+1234567890" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-bold text-lg transition">
                        Call Now: (123) 456-7890
                    </a>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-sm opacity-80">
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                        <span>Free Initial Assessment</span>
                    </div>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                        <span>Customized Training Plans</span>
                    </div>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                        <span>Compliance Documentation</span>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Training;