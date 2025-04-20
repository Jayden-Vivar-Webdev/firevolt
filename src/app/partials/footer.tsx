
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    
    <footer className="bg-secondary-900 text-white pt-16 pb-8" id="contact">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                <div>
                    <div className="flex justify-center md:justify-start items-center text-2xl font-bold mb-6">
                        <Image src="/images/Firevolt_CenteredLogo(Gradient-DBG).png" alt="Fire Volt Logo" width={180} height={100} />
                    </div>
                    <p className="text-center md:text-left mb-6 text-secondary-300">Fire compliance services for your business, that takes you to the next level.</p>
                    <div className="flex justify-around pr-5">
                        <Link href="#" className="w-10 h-10 bg-secondary-700 rounded-full flex items-center justify-center hover:bg-primary-600 transition text-secondary-300 hover:text-white">
                            <FontAwesomeIcon icon={faFacebook} />
                        </Link>
                        <Link href="#" className="w-10 h-10 bg-secondary-700 rounded-full flex items-center justify-center hover:bg-primary-600 transition text-secondary-300 hover:text-white">
                            <FontAwesomeIcon icon={faTwitter} />
                        </Link>
                        <Link href="#" className="w-10 h-10 bg-secondary-700 rounded-full flex items-center justify-center hover:bg-primary-600 transition text-secondary-300 hover:text-white">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </Link>
                        <Link href="#" className="w-10 h-10 bg-secondary-700 rounded-full flex items-center justify-center hover:bg-primary-600 transition text-secondary-300 hover:text-white">
                            <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                    </div>
                </div>
                
                <div>
                    <h3 className="text-lg font-bold mb-6 pb-2 border-b border-secondary-700">
                        Services
                    </h3>
                    <ul className="space-y-3">
                        <li><Link href="/contact" className="text-secondary-300 hover:text-primary-400 transition">Fire Safety</Link></li>
                        <li><Link href="/contact" className="text-secondary-300 hover:text-primary-400 transition">Fire Training</Link></li>
                        <li><Link href="/contact" className="text-secondary-300 hover:text-primary-400 transition">Emergency Evacuation</Link></li>
                        <li><Link href="/contact" className="text-secondary-300 hover:text-primary-400 transition">Emergency Response</Link></li>
                        <li><Link href="/contact" className="text-secondary-300 hover:text-primary-400 transition">Fire Extinguishers</Link></li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="text-lg font-bold mb-6 pb-2 border-b border-secondary-700">
                        Company
                    </h3>
                    <ul className="space-y-3">
                        <li><Link href="/about" className="text-secondary-300 hover:text-primary-400 transition">About Us</Link></li>
                        <li><Link href="/about#our-team" className="text-secondary-300 hover:text-primary-400 transition">Our Team</Link></li>
                        <li><Link href="/join" className="text-secondary-300 hover:text-primary-400 transition">Careers</Link></li>
                    </ul>
                </div>
        
                <div>
                    <h3 className="text-lg font-bold mb-6 pb-2 border-b border-secondary-700">
                        Contact
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-start text-secondary-300">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className='mr-3 text-primary-400' />
                            <span>Brisbane & Sunshine Coast</span>
                        </li>
                        <li className="flex items-center text-secondary-300">
                            <FontAwesomeIcon icon={faPhone} className='mr-3 text-primary-400' />
                            <span>1300 533 294</span>
                        </li>
                        <li className="flex items-center text-secondary-300">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-primary-400" />
                            <span>service@firevolt.com.au</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="pt-6 border-t border-secondary-800 text-secondary-400 text-sm">
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4 text-center">
                <a href="https://nexawebdev.com" className="hover:text-primary-400 transition">
                Powered By Nexa Web
                </a>
                <span className="hidden md:inline">|</span>
                <a href="/policy" className="hover:text-primary-400 transition">
                Privacy Policy
                </a>
                <span className="hidden md:inline">|</span>
                <p className="mt-2 md:mt-0">&copy; 2025 FireVolt. All rights reserved.</p>
            </div>
            </div>

        </div>
    </footer>

);
};

export default Footer;
