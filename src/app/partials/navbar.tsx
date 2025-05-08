"use client"; 
import { usePathname } from 'next/navigation';

import React, { useState } from 'react';
import '../globals.css'; // Make sure this is the correct path to your globals.css file
import Link from 'next/link';  // Import Link from next/link
import Image from 'next/image'; // Import Image from next/image
import "../output.css";
import "../styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
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
    <header className="bg-white shadow-sm sticky top-0 z-50" role="banner">
  <div className="container mx-auto px-4 py-4">
    <div className="flex justify-center lg:justify-between items-center">
      <div className="flex items-center">
        <Link href="/" passHref legacyBehavior>
          <a className="text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded">
            <Image
              src="/images/Firevolt_CenteredLogo(CMYK-LBG).jpg"
              alt="Firevolt Logo - Return to Homepage"
              height={100}
              width={200}
              priority
            />
          </a>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-8" aria-label="Main navigation">
        <ul className="flex gap-10">
          <li>
            <Link 
              href="/"
              className={`nav-link relative pb-1 transition ${
                pathname === '/' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-secondary-600 hover:text-primary-600'
              }`}
              aria-current={pathname === '/' ? 'page' : undefined}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/services"
              className={`nav-link relative pb-1 transition ${
                pathname === '/services' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-secondary-600 hover:text-primary-600'
              }`}
              aria-current={pathname === '/services' ? 'page' : undefined}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              href="/about"
              className={`nav-link relative pb-1 transition ${
                pathname === '/about' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-secondary-600 hover:text-primary-600'
              }`}
              aria-current={pathname === '/about' ? 'page' : undefined}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              href="/contact"
              className={`nav-link relative pb-1 transition ${
                pathname === '/contact' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-secondary-600 hover:text-primary-600'
              }`}
              aria-current={pathname === '/contact' ? 'page' : undefined}
            >
              Contact
            </Link>
          </li>
        </ul>
        <button 
          onClick={togglePopup} 
          className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
          aria-label="Get a Free Quote"
        >
          Free Quote Now
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-2xl focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 text-secondary-600 absolute right-6"
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-menu"
        onClick={toggleMobileMenu}
      >
        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
      </button>
    </div>

    {/* Mobile Menu */}
    {isMobileMenuOpen && (
      <nav id="mobile-menu" className="lg:hidden py-4" aria-label="Mobile navigation">
        <ul className="space-y-3" style={{justifyItems: 'center'}}>
          <li>
            <Link 
              href="/"
              onClick={toggleMobileMenu}
              className="block hover:text-primary-600 px-3 py-2 rounded-lg transition text-secondary-600 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
              aria-current={pathname === '/' ? 'page' : undefined}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/about"
              onClick={toggleMobileMenu}
              className="block hover:text-primary-600 px-3 py-2 rounded-lg transition text-secondary-600 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
              aria-current={pathname === '/about' ? 'page' : undefined}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="/services"
              onClick={toggleMobileMenu}
              className="block hover:text-primary-600 px-3 py-2 rounded-lg transition text-secondary-600 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
              aria-current={pathname === '/services' ? 'page' : undefined}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              href="/contact"
              onClick={toggleMobileMenu}
              className="block hover:text-primary-600 px-3 py-2 rounded-lg transition text-secondary-600 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
              aria-current={pathname === '/contact' ? 'page' : undefined}
            >
              Contact
            </Link>
          </li>
          <li>
            <button 
              onClick={() => {
                toggleMobileMenu();
                togglePopup();
              }}
              className="block w-full bg-primary-600 text-white px-6 py-2 rounded-lg font-medium text-center hover:bg-primary-700 transition shadow-md focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
              aria-label="Get a Free Quote"
            >
              Free Quote Now
            </button>
          </li>
        </ul>
      </nav>
    )}
  </div>
  <FreeQuote isPopupOpen={isPopupOpen} togglePopup={togglePopup} />
</header>
    
  );
};

export default Navbar;
