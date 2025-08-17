"use client"; 
import { usePathname } from 'next/navigation';

import React, { useState } from 'react';
import '../globals.css'; // Make sure this is the correct path to your globals.css file
import Link from 'next/link';  // Import Link from next/link
import Image from 'next/image'; // Import Image from next/image
import "../output.css";
import "../styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import FreeQuote from './free_quote';

const DownArrow = () => {
  return(
    <svg className="h-4 w-4 transition-transform duration-200 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" 
          strokeLinejoin="round" stroke-width="2" d="M19 9l-7 7-7-7">
        </path>
    </svg>
  )
}
const UpArrow = () => {
  return(
    <svg className="h-4 w-4 transition-transform duration-200 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" 
          strokeLinejoin="round" stroke-width="2" d="M5 15l7-7 7 7">
        </path>
    </svg>
  )
}



const Navbar = () => {

  const [servicesSelected, setServicesSeleted] = useState(false)
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    setMobileMenuOpen(false);
  };
  

  const toggleDropDown = () => {
    setServicesSeleted(!servicesSelected);
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };



  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-center lg:justify-between items-center">
          <div className="flex items-center text-2xl font-bold">
          
          <Link href={'/'}>
          <Image
            src="/images/Firevolt_CenteredLogo(CMYK-LBG).jpg"
            alt="logo"
            height={100}
            width={200}
            ></Image>
          </Link>
          

            <span className="text-secondary-900"></span>
          </div>

          <div className="hidden xl:flex items-center space-x-8">
            <nav>
              <ul className="flex gap-10">
                <li>
                <Link 
                    href="/"
                    className={`nav-link relative pb-1 transition ${
                      pathname === '/' ? 'text-primary-10 border-b-2 border-primary-10' : 'text-secondary-600 hover:text-primary-10'
                    }`}
                  >
                      Home
                  </Link>
                </li>
                <li>
                
                  <div
                    onClick={() => toggleDropDown()}
                    className={`nav-link relative pb-1 transition ${
                      pathname === '/services' ? 'text-primary-10 border-b-2 border-primary-10' : 'text-secondary-600 hover:text-primary-10'
                    }`}
                  >
                   
                      Services
                  </div>
                  {!servicesSelected && 
                  <div className='absolute bg-gray-50 w-1/3 left-1/2 top-17 transform translate-x-8 rounded-lg mx-auto px-4 py-4 mx-4 border border-gray-200'>
                    <div className='w-full bg-white rounded-lg shadow-sm border border-gray-100 space-y-3 py-3'>
                    
                    <li className='flex pl-4'>
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-4"></div>
                      <Link href="/all-services"
                        onClick={() => {toggleMobileMenu()}}
                        className="block hover:text-primary-600 px-3 py-2 rounded-lg transition text-secondary-600">
                          All Services
                      </Link>
                    </li>
                    <li className='flex pl-4'>
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-4"></div>
                    <Link href="/all-services"
                      onClick={() => {toggleMobileMenu()}}
                      className="block hover:text-primary-600 px-3 py-2 rounded-lg transition text-secondary-600">
                        Compliance Checks
                    </Link>
                    </li>
                    <li className='flex pl-4'>
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-4"></div>
                    <Link href="/all-services"
                      onClick={() => {toggleMobileMenu()}}
                      className="block hover:text-primary-600 px-3 py-2 rounded-lg transition text-secondary-600">
                        Fire Training
                    </Link>
                    </li>
                    <li className='flex pl-4'>
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-4"></div>
                    <Link href="/all-services"
                      onClick={() => {toggleMobileMenu()}}
                      className="block hover:text-primary-600 px-3 py-2 rounded-lg transition text-secondary-600">
                        Extinguisher Serivces
                    </Link>
                    </li>
                    <li className='flex pl-4'>
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-4"></div>
                    <Link href="/all-services"
                      onClick={() => {toggleMobileMenu()}}
                      className="block hover:text-primary-600 px-3 py-2 rounded-lg transition text-secondary-600">
                        Test & Tag
                    </Link>
                    </li>
                    <li className='flex pl-4'>
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-4"></div>
                    <Link href="/all-services"
                      onClick={() => {toggleMobileMenu()}}
                      className="block hover:text-primary-600 px-3 py-2 rounded-lg transition text-secondary-600">
                        Emergency Plans & Diagrams
                    </Link>
                  </li>
                  </div>
                </div>}
                    
                
                  
                </li>
                
                <li>
                <Link 
                    href="/about"
                    className={`nav-link relative pb-1 transition ${
                      pathname === '/about' ? 'text-primary-10 border-b-2 border-primary-10' : 'text-secondary-600 hover:text-primary-10'
                    }`}
                  >
                    
                      About Us
                   
                  </Link>
                </li>
                <li>
                <Link 
                    href="/blog"
                    className={`nav-link relative pb-1 transition ${
                      pathname === '/blog' ? 'text-primary-10 border-b-2 border-primary-10' : 'text-secondary-600 hover:text-primary-10'
                    }`}
                  >
                    
                      Blog
                   
                  </Link>
                </li>
                
                <li>
                <Link 
                    href="/contact"
                    className={`nav-link relative pb-1 transition ${
                      pathname === '/contact' ? 'text-primary-10 border-b-2 border-primary-10' : 'text-secondary-600 hover:text-primary-10'
                    }`}
                  >
                    
                      Contact
                  
                  </Link>
                </li>
              </ul>
            </nav>
            <button onClick={togglePopup} className="bg-primary-10 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition shadow-md hover:shadow-lg">
                Free Quote Now
            </button>
          </div>

          <button
            className="xl:hidden text-2xl focus:outline-none text-secondary-600 absolute right-6"
            id="mobile-menu-button"
            aria-label='Mobile Menu Button'
            onClick={toggleMobileMenu}
          >
            <FontAwesomeIcon icon={faBars} />
            {/* Ensure FontAwesome is properly installed */}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden py-4" id="mobile-menu">
            <nav>
              <ul className="space-y-3 px-5">
                <li>
                  <Link href="/"
                    onClick={() => {toggleMobileMenu()}}
                    className="block hover:text-primary-600 px-3 py-2 rounded-lg transition text-secondary-600">
                      Home
                    
                  </Link>
                </li>
                <li>
                  <Link href="/about"
                    onClick={() => {toggleMobileMenu()}}
                    className="block hover:text-primary-600 px-3 py-2 rounded-lg transition text-secondary-600">
                      About
                    
                  </Link>
                </li>
                <div className='relative' >
                  <Link href="/services"
                    onClick={() => {toggleDropDown()}}
                    className="flex justify-between hover:text-primary-600 px-3 py-2 rounded-lg transition text-secondary-600">
                      Services  {servicesSelected ? <span><UpArrow/></span> : <span><DownArrow/></span>}
                  </Link>
                  {servicesSelected && 
                  <div className='absolute bg-gray-50 w-full right-1/2 transform translate-x-1/2 rounded-lg mx-auto px-4 py-4 mx-4 border border-gray-200'>
                    <div className='w-full bg-white rounded-lg shadow-sm border border-gray-100 space-y-3 py-3'>
                    
                    <li className='flex pl-4'>
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-4"></div>
                      <Link href="/all-services"
                        onClick={() => {toggleMobileMenu()}}
                        className="block hover:text-primary-600 px-3 py-2 rounded-lg transition text-secondary-600">
                          All Services
                      </Link>
                    </li>
                    <li className='flex pl-4'>
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-4"></div>
                    <Link href="/all-services"
                      onClick={() => {toggleMobileMenu()}}
                      className="block hover:text-primary-600 px-3 py-2 rounded-lg transition text-secondary-600">
                        Compliance Checks
                    </Link>
                    </li>
                    <li className='flex pl-4'>
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-4"></div>
                    <Link href="/all-services"
                      onClick={() => {toggleMobileMenu()}}
                      className="block hover:text-primary-600 px-3 py-2 rounded-lg transition text-secondary-600">
                        Fire Training
                    </Link>
                    </li>
                    <li className='flex pl-4'>
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-4"></div>
                    <Link href="/all-services"
                      onClick={() => {toggleMobileMenu()}}
                      className="block hover:text-primary-600 px-3 py-2 rounded-lg transition text-secondary-600">
                        Extinguisher Serivces
                    </Link>
                    </li>
                    <li className='flex pl-4'>
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-4"></div>
                    <Link href="/all-services"
                      onClick={() => {toggleMobileMenu()}}
                      className="block hover:text-primary-600 px-3 py-2 rounded-lg transition text-secondary-600">
                        Test & Tag
                    </Link>
                    </li>
                    <li className='flex pl-4'>
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-4"></div>
                    <Link href="/all-services"
                      onClick={() => {toggleMobileMenu()}}
                      className="block hover:text-primary-600 px-3 py-2 rounded-lg transition text-secondary-600">
                        Emergency Plans & Diagrams
                    </Link>
                  </li>
                  </div>
                  </div>}
                </div>
                
                
               
                <li>
                  <Link href="/blog"
                    onClick={() => {toggleMobileMenu()}}
                    className="block hover:text-primary-600 px-3 py-2 rounded-lg transition text-secondary-600">
                      Blog
                    
                  </Link>
                </li>
                
               
                <li>
                  <Link href="/contact"
                    onClick={() => {toggleMobileMenu()}}
                    className="block hover:text-primary-600 px-3 py-2 rounded-lg transition text-secondary-600">
                      Contact
                    
                  </Link>
                </li>
                <li>
                  <button onClick={togglePopup}
                    className="block bg-primary-600 text-white px-6 py-2 rounded-lg font-medium text-center hover:bg-primary-700 transition shadow-md">
                      Free Quote Now
                    
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
      <FreeQuote isPopupOpen={isPopupOpen} togglePopup={togglePopup} />
    </header>
    
  );
};

export default Navbar;
