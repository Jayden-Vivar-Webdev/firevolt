"use client"; 

import React, { useState } from 'react';
import '../globals.css'; // Make sure this is the correct path to your globals.css file
import Link from 'next/link';  // Import Link from next/link
import Image from 'next/image'; // Import Image from next/image
import "../output.css";
import "../styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-2xl font-bold">
          <Image
            src="/images/Firevolt_CenteredLogo(CMYK-LBG).jpg"
            alt="logo"
            height={100}
            width={200}
            ></Image>

            <span className="text-secondary-900"></span>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <nav>
              <ul className="flex gap-10">
                <li>
                  <Link href="/" className="nav-link relative pb-1 text-secondary-600 hover:text-primary-600 transition">
                      Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="nav-link relative pb-1 text-secondary-600 hover:text-primary-600 transition">
                   
                      Services
                    
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="nav-link relative pb-1 text-secondary-600 hover:text-primary-600 transition">
                    
                      About Us
                   
                  </Link>
                </li>
                <li>
                  <Link href="/join" className="nav-link relative pb-1 text-secondary-600 hover:text-primary-600 transition">
                    
                      Join Us
                   
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="nav-link relative pb-1 text-secondary-600 hover:text-primary-600 transition">
                    
                      Contact
                  
                  </Link>
                </li>
              </ul>
            </nav>
            <Link href="/login" className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition shadow-md hover:shadow-lg">
              
                Free Quote Now
             
            </Link>
          </div>

          <button
            className="lg:hidden text-2xl focus:outline-none text-secondary-600"
            id="mobile-menu-button"
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
              <ul className="space-y-3 justify-items-center">
                <li>
                  <Link href="/"
                    className="block hover:text-primary-600 px-3 py-2 rounded-lg transition text-secondary-600">
                      Home
                    
                  </Link>
                </li>
                <li>
                  <Link href="/about"
                    className="block hover:text-primary-600 px-3 py-2 rounded-lg transition text-secondary-600">
                      About
                    
                  </Link>
                </li>
                <li>
                  <Link href="/apply"
                  className="block hover:text-primary-600 px-3 py-2 rounded-lg transition text-secondary-600">
                      Apply
                    
                  </Link>
                </li>
                <li>
                  <Link href="/join"
                    className="block hover:text-primary-600 px-3 py-2 rounded-lg transition text-secondary-600">
                      Join Us
                    </Link>
                </li>
                <li>
                  <Link href="/contact"
                    className="block hover:text-primary-600 px-3 py-2 rounded-lg transition text-secondary-600">
                      Contact
                    
                  </Link>
                </li>
                <li>
                  <Link href="#"
                    className="block bg-primary-600 text-white px-6 py-2 rounded-lg font-medium text-center hover:bg-primary-700 transition shadow-md">
                      Free Quote Now
                    
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>

  );
};

export default Navbar;
