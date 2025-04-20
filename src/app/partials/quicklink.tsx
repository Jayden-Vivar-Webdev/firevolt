"use client"; 
import '../globals.css'; // Make sure this is the correct path to your globals.css file // Import Image from next/image
import "../output.css";
import "../styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone } from '@fortawesome/free-solid-svg-icons';


const QuickLink = () => {
  
    const phoneNumber = "1300533294"; // Replace with your phone number

    return (
      <div className="flex justify-end fixed bottom-4 right-2 w-full z-50">
        <a href={`tel:${phoneNumber}`} className="block">
          <div className='bg-primary-600 h-10 w-10 rounded-full flex items-center justify-center'>
            <FontAwesomeIcon icon={faPhone} className='text-white'/>
          </div>
        </a>
      </div>
    );
};

export default QuickLink;
