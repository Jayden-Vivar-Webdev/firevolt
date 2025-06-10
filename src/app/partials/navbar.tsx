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






const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    setMobileMenuOpen(false);
  };
  

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

          <div className="hidden lg:flex items-center space-x-8">
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
                <Link 
                    href="/services"
                    className={`nav-link relative pb-1 transition ${
                      pathname === '/services' ? 'text-primary-10 border-b-2 border-primary-10' : 'text-secondary-600 hover:text-primary-10'
                    }`}
                  >
                   
                      Services
                    
                  </Link>
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
            className="lg:hidden text-2xl focus:outline-none text-secondary-600 absolute right-6"
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
          <div className="lg:hidden py-4" id="mobile-menu">
            <nav>
              <ul className="space-y-3" style={{justifyItems: 'center'}}>
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
                <li>
                  <Link href="/services"
                    onClick={() => {toggleMobileMenu()}}
                    className="block hover:text-primary-600 px-3 py-2 rounded-lg transition text-secondary-600">
                      Services
                    
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
