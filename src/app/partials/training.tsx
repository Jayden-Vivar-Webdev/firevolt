import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faShieldAlt, faUsers, faLaptop, faUserGroup } from '@fortawesome/free-solid-svg-icons';

const Training = () => {
    return (
        <section className="py-20 bg-gray-50" id="fire-training">
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
    );
};

export default Training;