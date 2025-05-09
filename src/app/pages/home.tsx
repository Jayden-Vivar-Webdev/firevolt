"use client"
import '../globals.css';
import '../styles.css';
import '../output.css';
import FreeQuote from '../partials/free_quote';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireExtinguisher, faArrowRight, faFire, faHome, faExclamationTriangle, faCheckCircle, faTag, faStar, faBuilding, faCalendarCheck, faThumbsUp, faShieldAlt, faUsers, faRoute, faTornado, faFlask, faUserInjured, faClock, faFileAlt, faArrowDown, faFileDownload, faClipboardCheck, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useRef } from 'react';



const HomePage = () => {

  //Free form quote
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  //Faq Open elements
  const [isFaqOpen1, setIsFaqOpen1] = useState(false);
  const [isFaqOpen2, setIsFaqOpen2] = useState(false);
  const [isFaqOpen3, setIsFaqOpen3] = useState(false);
  const [isFaqOpen4, setIsFaqOpen4] = useState(false);

  //Open or close popup form
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  //Category for galleries
  const [selectedCategory, setSelectedCategory] = useState('extinguishers-gallery');

  //Information Evac and diagram
  const [selectedInfo, setSelectedInfo] = useState('Whats Included');


  //Function to set infoSection 
  const toggleInfo = (info: string) => {
    setSelectedInfo(info);
  }

  //Toggle category function
  const toggleCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const testimonial1Ref = useRef<HTMLDivElement | null>(null);
  const testimonial2Ref = useRef<HTMLDivElement | null>(null);
  const testimonial3Ref = useRef<HTMLDivElement | null>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest',
    });
  };  

  //Download free emergency pdf form submission
  async function submitForm(formData: FormData): Promise<void> {
    
    const formValues = {
      name: formData.get("name"),
      email: formData.get('email'),
      phone: 'Not required for this form entry',
      service: 'Potential Client: Emergency Procedures or Diagrams',
      message: 'The client has downloaded the Emergency Preparedness Fact Sheet they may need your services.'
    }

    try {
      const response = await fetch('/api/potential', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formValues)
      });
      if(response.ok){
        window.location.href= 'https://irp.cdn-website.com/94ddd8b4/files/uploaded/Firevolt%20-%20Emergency%20Plans%20fact%20Sheet.pdf';
        console.log('Success, Form Sent')
      } else {
        window.location.href= 'https://irp.cdn-website.com/94ddd8b4/files/uploaded/Firevolt%20-%20Emergency%20Plans%20fact%20Sheet.pdf';
        console.error('Failed to send message');
      }
    } catch (error) {
      window.location.href= 'https://irp.cdn-website.com/94ddd8b4/files/uploaded/Firevolt%20-%20Emergency%20Plans%20fact%20Sheet.pdf';
      console.error("Error", error)
    }

  }

  const infoSection = [
    {
      name: 'Whats Included',
      components: {
        title: 'Whats Inluded In Our Evacuation Diagrams',
        points: ['Floor plan with clear exit routes', 
        'Assembly area locations', 
        'Emergency equipment locations', 'You Are Here indicators', 
        'Standardized emergency symbols', 'Legend explaining all symbols']
      }
    },
    {
      name: 'Legal Requirements',
      components: {
        title: 'Consider the following requirements', 
        points: ['Diagrams must include the "You Are Here" location', 'The evacuation diagram must be correctly oriented', 
        'Diagrams must be displayed in conspicuous positions', 'Must use standardised symbols', 
        , 'Review and maintenance must be conducted']
      }
    },
    {
      name: 'Placement Guide',
      components: {
      title: 'Best placements includes the follow',
      points: ['Visable and easily accessible', 'Height guidelines 1200 mm and 1600 mm from the floor', 
        'Place diagrams at key decision points', 'Large or complex buildings require multiple diagrams', 
        'Key Location', 'Diagrams must be permanently affixed']
      }
    },
    {
      name: 'Update Frequency',
      components: {
        title: 'What the law says',
        points: ['Review every 5 years', 'Update after building changes', 
        'Post renovation checks', 'Ongoing Maintenance', 
        'Annual emergency review', 'Emergency Planning Committee (EPC) Responsibility']
      }
      
    }

  ]

  const categories = [
    {
      name: 'Extinguishers',
      filter: 'extinguishers-gallery',
      icon: faFireExtinguisher,
      components: [
        {
          id: 'e1',
          src: '/images/extinguisher_installation.jpg',
          alt: 'Fire extinguisher installation',
          title: 'Extinguisher Testing',
          p: 'Testing and maintenance',
          type: 'Testing'
        },
        {
          id: 'e2',
          src: '/images/extinguisher_gal/IMG_4299.JPEG',
          alt: 'Fire extinguisher installation',
          title: 'Extinguisher Installation',
          p: 'Commercial kitchen fire protection',
          type: 'Installation'
        },
        {
          id: 'e3',
          src: '/images/fire_extinguisher_services.JPEG',
          alt: 'Fire extinguisher servicing',
          title: 'Fire Extinguisher Servicing',
          p: 'Annual extinguisher servicing',
          type: 'Evacuation'
        },
        {
          id: 'e4',
          src: '/images/extinguisher_gal/IMG_7798.png',
          alt: 'fire extingusher compliance',
          title: 'Compliance Adherance',
          p: 'Detailed workplace safety',
          type: 'Compliance'
        },
        {
          id: 'e5',
          src: '/images/extinguisher_gal/IMG_6997.jpg',
          alt: 'extinguisher types',
          title: 'Sized Extinguishers',
          p: 'Fitted Extinguishers',
          type: 'Positioning'
        },
        {
          id: 'e6',
          src: '/images/extinguisher_gal/IMG_6622.jpg',
          alt: 'Fire extinguisher Truck',
          title: 'Essential Equipment',
          p: 'Annual extinguisher servicing',
          type: 'Replacement'
        },
        
      ]
    },
    {
      name: 'Training',
      filter: 'training-gallery',
      icon: faFire,
      components: [
        {
          id: 't1',
          src: '/images/fire-extinguisher-training.webp',
          alt: 'Fire safety training session',
          title: 'Live Fire Training',
          p: 'Hands-on extinguisher training for staff',
          type: 'Extinguisher'
        },
        {
          id: 't2',
          src: '/images/training_gal/fire_training_img.jpg',
          alt: 'Safety Measures Training',
          title: 'Fire Hose Training',
          p: 'Training Exposure',
          type: 'Fire Hose'
        },
        {
          id: 't3',
          src: '/images/training_gal/fire_e_training.jpg',
          alt: 'Evacuation use',
          title: 'Extinguisher Training',
          p: 'Develop skills',
          type: 'Extinguisher'
        },
        {
          id: 't4',
          src: '/images/fire_training-img.webp',
          alt: 'fire plan coordination',
          title: 'Coordination Plan',
          p: 'Detailed workplace training',
          type: 'Evacuation Training'
        },
        {
          id: 'e5',
          src: '/images/fire_training.jpg',
          alt: 'Chief warden training',
          title: 'Equipment Training',
          p: 'Emergency response skills',
          type: 'Training'
        },
        {
          id: 'e6',
          src: '/images/testing_equipment-img.webp',
          alt: 'hazard training',
          title: 'Understanding Hazards',
          p: 'Training on hazards',
          type: 'Hazards'
        },
        
      ]
    },
    {
      name: 'Compliance',
      filter: 'compliance-gallery',
      icon: faClipboardCheck,
      components: [
        {
          id: 't1',
          src: '/images/compliance_gal/IMG_2518.JPG',
          alt: 'Fire equipment labeling',
          title: 'Clear Labels',
          p: 'Compliance check on lables',
          type: 'Fire Reel'
        },
        {
          id: 't2',
          src: '/images/emergency_plan_book.png',
          alt: 'Business Management Plan',
          title: 'Business Management Plan',
          p: 'Comprehensive Fire Plan',
          type: 'Planning'
        },
        {
          id: 't3',
          src: '/images/compliance_gal/IMG_2682.JPEG',
          alt: 'Evacuation diagram installation',
          title: 'Emergency Signs',
          p: 'Emergency labeling',
          type: 'Labeling'
        },
        {
          id: 't4',
          src: '/images/compliance_gal/IMG_3755.JPEG',
          alt: 'fire test & tag',
          title: 'Compliance Audit',
          p: 'Test and tag equipment',
          type: 'Test'
        },
        {
          id: 'e5',
          src: '/images/compliance_gal/IMG_6805.JPG',
          alt: 'Fire reel compliance',
          title: 'Equipment Testing',
          p: 'Testing For Defects',
          type: 'Testing'
        },
        {
          id: 'e6',
          src: '/images/compliance_gal/IMG_6816.jpg',
          alt: 'Fire extinguisher maintenance',
          title: 'Protective Measures',
          p: 'Protect Equipment',
          type: 'Protection'
        },
        
      ]
    },
    {
      name: 'Evacuation',
      filter: 'evacuation-gallery',
      icon: faMapMarkedAlt,
      components: [
        {
          id: 't1',
          src: '/images/evac_gal/IMG_2683.JPEG',
          alt: 'Evacuation Map',
          title: 'Evacuation Diagrams',
          p: 'Compliance Designs',
          type: 'Evacuation Diagrams'
        },
        {
          id: 't2',
          src: '/images/evac_gal/IMG_7798 (1).jpg',
          alt: 'Diagram Locatoin',
          title: 'Evacuatoin Diagram',
          p: 'Positioning & location',
          type: 'Evacuation Diagrams'
        },
        {
          id: 't3',
          src: '/images/emergency_plans.jpeg',
          alt: 'Evacuation installation',
          title: 'Evacuation Diagrams Installation',
          p: 'Custom emergency exit plans',
          type: 'Evacuation'
        },
        {
          id: 't4',
          src: '/images/fire_training-img.webp',
          alt: 'Fire safety compliance check',
          title: 'Compliance Audit',
          p: 'Detailed workplace safety inspection',
          type: 'Compliance'
        },
        {
          id: 'e5',
          src: '/images/live-fireblanket-img.webp',
          alt: 'Chief warden training',
          title: 'Equipment Training',
          p: 'Emergency response skills',
          type: 'Training'
        },
        {
          id: 'e6',
          src: '/images/testing_equipment-img.webp',
          alt: 'Fire extinguisher maintenance',
          title: 'Equipment Testing',
          p: 'Annual extinguisher servicing',
          type: 'Testing'
        },
        
      ]
    },
  ]
  

  const selectedData = infoSection.find(info => info.name === selectedInfo);

  const selectedCategoryData = categories.find(
    (category) => category.filter === selectedCategory
  );


  return (
      <>
        
        {/* Hero Section */}
        <FreeQuote isPopupOpen={isPopupOpen} togglePopup={togglePopup} />
        <section className="hero-bg text-white py-24 md:py-32" id="home">
        
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
              <a href="/contact" className="bg-primary-10 text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-700 transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl">Get In Touch With Us</a>
              <a href="/about" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-primary-600 transition transform hover:-translate-y-1">Learn More About Us</a>
            </div>
          </div>
        </section>
    
        {/* Services Section */}
        <section className="py-20 bg-white" id="services">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block bg-primary-10 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">Our Services</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-secondary-600 max-w-2xl mx-auto">We offer a range of services to help you stay compliant and safe.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-2 gap-8">

              {/* Service 1 */}
              <div className="service-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 border border-gray-100">
                <div className="service-img h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 z-10"></div>
                  <Image 
                    src="/images/compliance_img.webp" 
                    alt="Fire Compliance Services by Firevolt" 
                    width={500} 
                    height={300} 
                    className="w-full h-full object-cover transition duration-500" 
                    priority
                  />
                  <span className="absolute top-4 right-4 bg-primary-10 text-white text-xs font-semibold px-3 py-1 rounded-full z-20">Highly Rated</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center mr-3">
                      <FontAwesomeIcon icon={faFireExtinguisher} />
                    </div>
                    <h3 className="text-xl font-bold">Fire Extinguisher Services</h3>
                  </div>
                  <p className="text-secondary-600 mb-4">Fire Extinguisher Services</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center text-sm text-secondary-500 mb-1">                      
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mr-2" />
                      <span>Fire Blanket Testing</span>
                    </div>
                    <div className="flex items-center text-sm text-secondary-500 mb-1">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mr-2" />
                      <span>Fire Hose Reels Testing</span>
                    </div>
                    <div className="flex items-center text-sm text-secondary-500 mb-1">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mr-2" />
                      <span>Smoke Alarm Testing</span>
                    </div>
                    <div className="flex items-center text-sm text-secondary-500">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mr-2" />
                      <span>Fire Alarm Systems</span>
                    </div>
                  </div>
                  
                  <a href="/contact" className="block w-full bg-primary-10 hover:bg-primary-700 text-white text-center py-2 px-4 rounded-lg font-medium transition shadow-md hover:shadow-lg">
                    Contact Us
                  </a>
                </div>
              </div>
              
              {/* Service 2 */}
              <div className="service-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 border border-gray-100">
                <div className="service-img h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 z-10"></div>
                  <Image 
                    src="/images/fire_training-img.webp" 
                    alt="Live Fire Training by Firevolt" 
                    className="w-full h-full object-cover transition duration-500"
                    width={500}
                    height={300}
                  />
                  <span className="absolute top-4 right-4 bg-primary-10 text-white text-xs font-semibold px-3 py-1 rounded-full z-20">Expert Training</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center mr-3">
                      <FontAwesomeIcon icon={faFire} />
                    </div>
                    <h3 className="text-xl font-bold">Fire Training & Compliance</h3>
                  </div>
                  <p className="text-secondary-600 mb-4">Workplace Health & Safety</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center text-sm text-secondary-500 mb-1">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mr-2" />
                      <span>In-Person or Online Training</span>
                    </div>
                    <div className="flex items-center text-sm text-secondary-500 mb-1">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mr-2" />
                      <span>Flexible Training Options</span>
                    </div>
                    <div className="flex items-center text-sm text-secondary-500 mb-1">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mr-2" />
                      <span>Money Back Guarantee</span>
                    </div>
                    <div className="flex items-center text-sm text-secondary-500">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mr-2" />
                      <span>High level training for your staff</span>
                    </div>
                  </div>
                  
                  <a href="/contact" className="block w-full bg-primary-10 hover:bg-primary-700 text-white text-center py-2 px-4 rounded-lg font-medium transition shadow-md hover:shadow-lg">
                    Book Consultation
                  </a>
                </div>
              </div>
              
              {/* Service 3 */}
              <div className="service-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 border border-gray-100">
                <div className="service-img h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 z-10"></div>
                  <Image 
                    src="/images/emergency_plans.jpeg" 
                    alt="Modern home with keys" 
                    className="w-full h-full object-cover transition duration-500"
                    width={500}
                    height={300}
                  />
                  <span className="absolute top-4 right-4 bg-primary-10 text-white text-xs font-semibold px-3 py-1 rounded-full z-20">Professional Service</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center mr-3">
                      <FontAwesomeIcon icon={faHome} />
                    </div>
                    <h3 className="text-xl font-bold">Emergency Plans & Diagrams</h3>
                  </div>
                  <p className="text-secondary-600 mb-4">48 Hour Turnaround</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center text-sm text-secondary-500 mb-1">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mr-2" />
                      <span>Development of procedures</span>
                    </div>
                    <div className="flex items-center text-sm text-secondary-500 mb-1">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mr-2" />
                      <span>Emergency Procedures</span>
                    </div>
                    <div className="flex items-center text-sm text-secondary-500 mb-1">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mr-2" />
                      <span>Buildings Fire Equipment</span>
                    </div>
                    <div className="flex items-center text-sm text-secondary-500 ">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mr-2" />
                      <span>Emergency Procedures</span>
                    </div>
                  </div>
                  
                  <a href="/contact" className="block w-full bg-primary-10 hover:bg-primary-700 text-white text-center py-2 px-4 rounded-lg font-medium transition shadow-md hover:shadow-lg">
                    Get Started
                  </a>
                </div>
              </div>
              {/* Service 2 */}
              <div className="service-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 border border-gray-100">
                <div className="service-img h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 z-10"></div>
                  <Image 
                    src="/images/fire_training-img.webp" 
                    alt="Live Fire Training by Firevolt" 
                    className="w-full h-full object-cover transition duration-500"
                    width={500}
                    height={300}
                  />
                  <span className="absolute top-4 right-4 bg-primary-10 text-white text-xs font-semibold px-3 py-1 rounded-full z-20">Expert Training</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center mr-3">
                      <FontAwesomeIcon icon={faFire} />
                    </div>
                    <h3 className="text-xl font-bold">Testing, Taging & Servicing</h3>
                  </div>
                  <p className="text-secondary-600 mb-4">Reduce Electrical Hazards</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center text-sm text-secondary-500 mb-1">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mr-2" />
                      <span>Competitive Prices</span>
                    </div>
                    <div className="flex items-center text-sm text-secondary-500 mb-1">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mr-2" />
                      <span>Minimal Workplace Disruptions</span>
                    </div>
                    <div className="flex items-center text-sm text-secondary-500 mb-1">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mr-2" />
                      <span>Certificate of Compliance</span>
                    </div>
                    <div className="flex items-center text-sm text-secondary-500">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mr-2" />
                      <span>Fast & Efficient Service</span>
                    </div>
                  </div>
                  
                  <a href="/contact" className="block w-full bg-primary-10 hover:bg-primary-700 text-white text-center py-2 px-4 rounded-lg font-medium transition shadow-md hover:shadow-lg">
                    Book Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
    
        {/* Features Section */}
        <section className="py-20" id="features">
          <div className="container mx-auto px-4">
            <div className="text-center mb-1">
              <span className="inline-block bg-primary-10 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Here to help business owners</h2>
              <p className="text-secondary-600 max-w-2xl mx-auto">Discover the features that make us stand out from the competition and help your business.</p>
            </div>
            <div className="flex justify-center">
              <Image 
                src="/images/hayden-img.webp" 
                alt="owner of Firevolt" 
                width={500}
                height={300}
                className="w-3/6 sm:w-4/5 md:w-2/4 lg:w-1/3 max-w-3xl h-auto object-contain mx-auto"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div data-name="car-loan" className="feature-card bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100 js-open-popup">
                <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center text-2xl mb-6 transition duration-500">
                  <FontAwesomeIcon icon={faFireExtinguisher} />
                </div>
                <h3 className="text-xl font-bold mb-3">Save Time, Make Money</h3>
                <p className="text-secondary-600">Free up time and resources to concentrate on growing your business, leaving compliance to us.</p>
              </div>
              
              {/* Feature 2 */}
              <div data-name="caravan-loan" className="feature-card bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100 js-open-popup">
                <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center text-2xl mb-6 transition duration-500">
                  <FontAwesomeIcon icon={faFire} />
                </div>
                <h3 className="text-xl font-bold mb-3">Easy Breezy Compliance</h3>
                <p className="text-secondary-600">Stay compliant with minimal effort through automated reminders and easy scheduling.</p>
              </div>
              
              {/* Feature 3 */}
              <div data-name="boat-loan" className="feature-card bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100 js-open-popup">
                <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center text-2xl mb-6 transition duration-500">
                  <FontAwesomeIcon icon={faExclamationTriangle} />
                </div>
                <h3 className="text-xl font-bold mb-3">For The Aussie Battler</h3>
                <p className="text-secondary-600">Access affordable compliance services designed to fit any budget, ensuring that safety is never out of reach.</p>
              </div>
              
              {/* Feature 4 */}
              <div data-name="jetski-loan" className="feature-card bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100 js-open-popup">
                <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center text-2xl mb-6 transition duration-500">
                  <FontAwesomeIcon icon={faTag} />
                </div>
                <h3 className="text-xl font-bold mb-3">One-Hit Wonder</h3>
                <p className="text-secondary-600">Reduce disruptions and Save Time with Firevolts ability to service multiple compliance services provided in one visit.</p>
              </div>
              <div data-name="jetski-loan" className="feature-card bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100 js-open-popup">
                <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center text-2xl mb-6 transition duration-500">
                  <FontAwesomeIcon icon={faTag} />
                </div>
                <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
                <p className="text-secondary-600">All our work is completed to the highest standards, ensuring that your business is always compliant.</p>
              </div>
              <div data-name="jetski-loan" className="feature-card bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100 js-open-popup">
                <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center text-2xl mb-6 transition duration-500">
                  <FontAwesomeIcon icon={faTag} />
                </div>
                <h3 className="text-xl font-bold mb-3">Ongoing Support</h3>
                <p className="text-secondary-600">We offer ongoing support to ensure that your business is always compliant.</p>
              </div>
            </div>
          </div>
        </section>
    
        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-[#c53030] to-[#e53e3e] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Proven Track Record </h2>
              <div className="w-20 h-1 bg-white mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {/* Stat 1 */}
              <div className="bg-white/10 backdrop-blur rounded-xl p-8 transform transition duration-300 hover:translate-y-[-8px] hover:bg-white/15 border border-white/20">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faBuilding} />
                  </div>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-2">100<span className="text-primary-300">+</span></h3>
                <p className="text-gray-200 uppercase tracking-wider text-sm font-medium">Satisfied Companies</p>
              </div>
              
              {/* Stat 2 */}
              <div className="bg-white/10 backdrop-blur rounded-xl p-8 transform transition duration-300 hover:translate-y-[-8px] hover:bg-white/15 border border-white/20">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-2">5.0<span className="text-3xl">/5.0</span></h3>
                <p className="text-gray-200 uppercase tracking-wider text-sm font-medium">Rating on Google</p>
              </div>
              
              {/* Stat 3 */}
              <div className="bg-white/10 backdrop-blur rounded-xl p-8 transform transition duration-300 hover:translate-y-[-8px] hover:bg-white/15 border border-white/20">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faCalendarCheck} />
                  </div>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-2">10<span className="text-primary-300">+</span></h3>
                <p className="text-gray-200 uppercase tracking-wider text-sm font-medium">Years Experience</p>
              </div>
              
              {/* Stat 4 */}
              <div className="bg-white/10 backdrop-blur rounded-xl p-8 transform transition duration-300 hover:translate-y-[-8px] hover:bg-white/15 border border-white/20">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faThumbsUp} />
                  </div>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-2">100<span className="text-primary-300">%</span></h3>
                <p className="text-gray-200 uppercase tracking-wider text-sm font-medium">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </section>


    
        {/* Testimonials Section */}
        <section className="py-20 bg-secondary-50" id="testimonials">
          <div className="container mx-auto px-4 ">
            <div className="text-center mb-16">
              <span className="inline-block bg-primary-10 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-secondary-600 max-w-2xl mx-auto">Hear from people who have transformed their business future with Firevolt.</p>
            </div>
            
            <div className="flex overflow-x-auto snap-x snap-mandatory h-fit gap-10 mx-auto hide-scrollbar p-4 scroll-smooth">
              {/* Testimonial 1 */}

                <div ref={testimonial1Ref}  className="testimonials snap-center min-w-full xl:min-w-[28rem] snap-center bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-lg text-secondary-700 mb-6 relative">
                  <span className="absolute -top-4 -left-4 text-primary-400 text-4xl opacity-50">&quot;</span>
                  Great training today with Fire volt. Very informative and professional whilst creating a fantastic fun and learning environment. Would highly recommend.
                  <span className="absolute -bottom-4 -right-4 text-primary-400 text-4xl opacity-50">&quot;</span>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-primary-100">
                    <Image
                      src="/images/samuel.png" 
                      alt="Sarah Johnson" 
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Samuel Ridgard</h4>
                    <p className="text-secondary-500">Staff Training</p>
                  </div>
                </div>
              </div>
              
              
              
              {/* Testimonial 2 */}
              <div ref={testimonial2Ref}  className="testimonials min-w-full xl:min-w-[28rem] snap-center bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-lg text-secondary-700 mb-6 relative">
                  <span className="absolute -top-4 -left-4 text-primary-400 text-4xl opacity-50">&quot;</span>
                  Thanks so much for our training today at Apollo Hayden and Ally. Very well done and clearly explained and good to get everyone involved to learn how to handle a fire blanket and extinguisher.
                  <span className="absolute -bottom-4 -right-4 text-primary-400 text-4xl opacity-50">&quot;</span>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-primary-100">
                    <Image
                      src="/images/apollo.png" 
                      alt="Michael Chen" 
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Apollo Patios</h4>
                    <p className="text-secondary-500">Equipment Handling</p>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 3 */}
              <div ref={testimonial3Ref}  className="testimonials snap-center min-w-full xl:min-w-[28rem] snap-center bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-lg text-secondary-700 mb-6 relative">
                  <span className="absolute -top-4 -left-4 text-primary-400 text-4xl opacity-50">&quot;</span>
                  Hayden from Firevolt supplied fire extinguishers and helped make my business compliant. He was very helpful, reliable, and provided great advice. Highly recommended for any business owners!
                  <span className="absolute -bottom-4 -right-4 text-primary-400 text-4xl opacity-50">&quot;</span>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-primary-100">
                    <Image
                      src="/images/maider.png" 
                      alt="ACEMONEY" 
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Kaleb Maider</h4>
                    <p className="text-secondary-500">Business Compliance</p>
                  </div>
                </div>
                    
              </div>
              

              
            </div>
            <div className="flex justify-center items-center gap-4 z-50">
              <button 
                onClick={() => scrollTo(testimonial1Ref)} 
                aria-label='Testimonial One'
                className="w-4 h-4 rounded-full bg-[#e53e3ed1]
                border border-[#e53e3eba] shadow-md 
                hover:scale-125
                transition-all duration-300"
              ></button>

              <button 
                onClick={() => scrollTo(testimonial2Ref)} 
                aria-label='Testimonial Two'
                className="w-4 h-4 rounded-full bg-[#e53e3ed1] 
                border border-[#e53e3eba] shadow-md 
                hover:scale-125
                transition-all duration-300"
              ></button>

              <button 
                onClick={() => scrollTo(testimonial3Ref)} 
                aria-label='Testimonial Three'
                className="w-4 h-4 rounded-full bg-[#e53e3ed1] 
                border border-[#e53e3eba] shadow-md 
                hover:scale-125
                transition-all duration-300"
              ></button>
            </div>

          </div>
              
        </section>

        {/* Veteran-Owned Business Section */}
        <section className="py-20 bg-gray-50 md:p-10" id="veteran-owned">
          <div className="container mx-auto px-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Image Column */}
              <div className="md:w-1/2">
                
                  <Image 
                    src="/images/Chevron-Double.png"  // Replace with your actual image path
                    alt="Veteran owned fire safety business"
                    width={300}
                    height={300}
                    
                  />
              </div>
              
              {/* Content Column */}
              <div className="md:w-2/3">
                <span className="inline-block bg-primary-50 text-primary-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Veteran Owned & Operated
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Proudly Serving Those Who Served
                </h2>
                <p className="text-secondary-600 mb-6">
                  As a veteran-owned business, we bring the same dedication, discipline, and attention to detail 
                  we learned in service to every fire safety project we undertake. We understand the importance 
                  of protecting what matters most.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 text-xl" />
                    </div>
                    <p className="ml-3 text-secondary-700">
                      <strong>Military Precision:</strong> Our service reflects the high standards we learned in the armed forces
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 text-xl" />
                    </div>
                    <p className="ml-3 text-secondary-700">
                      <strong>Veteran Operated:</strong> We only provide the best service and make it our mission
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 text-xl" />
                    </div>
                    <p className="ml-3 text-secondary-700">
                      <strong>Community Focused:</strong> Committed to supporting veteran causes and organisations
                    </p>
                  </div>
                </div>
                <a 
                  href="/about" 
                  className="inline-block bg-primary-10 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-bold transition shadow-md hover:shadow-lg"
                >
                  Learn About Us
                </a>
              </div>
            </div>
          </div>
        </section>

      {/* Premium Fire Training Package */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="training-package">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary-50 text-primary-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Comprehensive Training
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Elite Fire Safety Training Package
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Everything you need to ensure complete workplace preparedness
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Training Item 1 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="bg-primary-600 p-4">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <FontAwesomeIcon icon={faShieldAlt} className="mr-3" />
                  Chief Warden Training
                </h3>
              </div>
              <div className='relative h-70'>
                <Image src="/images/Cheif-warden.webp" alt="Chief Warden Training" fill className='object-cover' />
              </div>
              <div className="p-6">
                <p className="text-secondary-600 mb-4">
                  Comprehensive instruction on leadership during emergencies including:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Roles & responsibilities of leadership</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Fire panel control systems</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Liaising with emergency services</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Return to normal procedures</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Training Item 2 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="bg-primary-600 p-4">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <FontAwesomeIcon icon={faFireExtinguisher} className="mr-3" />
                  Emergency Skills Training
                </h3>
                
              </div>
              <div className='relative h-70'>
                <Image src="/images/fire-extinguisher-training.webp" alt="Chief Warden Training" fill className='object-cover' />
              </div>
              <div className="p-6">
                <p className="text-secondary-600 mb-4">
                  Hands-on practical experience for your team:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Site-specific walkthroughs</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Small fire containment techniques</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Bomb threat response protocols</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Active threat scenarios</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Training Item 3 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="bg-primary-600 p-4">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <FontAwesomeIcon icon={faUsers} className="mr-3" />
                  Emergency Planning Committee
                </h3>
              </div>
              <div className='relative h-70'>
                <Image src="/images/emergency-meeting.webp" alt="Chief Warden Training" fill className='object-cover' />
              </div>
              <div className="p-6">
                <p className="text-secondary-600 mb-4">
                  Complete support for your compliance needs:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Facilitated annual EPC meetings</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Emergency planning initiatives</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                    <span>AS3745 compliant documentation</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Meeting records and minutes</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Training Item 4 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="bg-primary-600 p-4">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <FontAwesomeIcon icon={faRoute} className="mr-3" />
                  Evacuation Exercise
                </h3>
              </div>
              <div className='relative h-70'>
                <Image src="/images/evacuation-exercise.webp" alt="Chief Warden Training" fill className='object-cover' />
              </div>
              <div className="p-6">
                <p className="text-secondary-600 mb-4">
                  Annual compliance and confidence building:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                    <span>AS3745-2010 compliant exercises</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Full building evacuation drills</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Post-exercise review and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Occupant confidence assessment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center bg-primary-10 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Get Your Custom Training Plan
              <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
            </a>
          </div>
        </div>
      </section>
      {/* Gallery Section */}

<section className="py-20 bg-gray-50" id="gallery">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <span className="inline-block bg-primary-50 text-primary-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
        Our Work
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Fire Safety In Action</h2>
      <p className="text-secondary-600 max-w-2xl mx-auto">
        See our team delivering top-quality fire compliance services for businesses across the region
      </p>
    </div>

    {/* Gallery Filters */}
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      
      {categories.map((category) => (
                <button 
                key={category.filter}
                onClick={() => toggleCategory(category.filter)}
                className={`gallery-filter px-4 py-2 rounded-full ${selectedCategory === category.filter ? 'bg-primary-10 text-white font-medium transition hover:bg-primary-700 active' : 'bg-white text-secondary-700 border border-gray-200 font-medium transition hover:bg-gray-50 hover:border-primary-300 hover:text-primary-600'}`} 
                data-filter={category.filter}
                >
                    <FontAwesomeIcon icon={category.icon} className="mr-2" />
                    {category.name}
                </button>
            ))}
    </div>


    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          selectedCategoryData && selectedCategoryData.components.map((component)=> {

            return(
              <div key={component.id} className="gallery-item group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl border border-gray-100">
              <div className="relative h-90 overflow-hidden">
                <Image
                  src={component.src}
                  alt={component.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-1">{component.title}</h3>
                    <p className="text-sm text-gray-200">{component.p}</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-primary-10 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                {component.type}
              </div>
            </div>

            )
            
          })
        }

    </div>
    

    {/* View More Button */}
    {/* <div className="text-center mt-12">
      <button className="inline-flex items-center justify-center bg-white text-primary-600 border border-primary-600 hover:bg-primary-50 px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg">
        View Full Gallery
        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
      </button>
    </div> */}
  </div>
</section>

<section className="py-20 bg-gradient-to-br from-[#c53030] to-[#e53e3e] text-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold">Industry-Leading Expertise</h2>
      <div className="w-20 h-1 bg-white mx-auto mt-4 rounded-full"></div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
      {/* Stat 1 - Highlighted */}
      <div className="bg-white/20 backdrop-blur rounded-xl p-8 transform transition duration-300 hover:translate-y-[-8px] hover:bg-white/25 border-2 border-white/30 shadow-lg">
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 bg-white/30 rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faFireExtinguisher} className="text-xl" />
          </div>
        </div>
        <h3 className="text-4xl md:text-5xl font-bold mb-2">500<span className="text-white/80">+</span></h3>
        <p className="text-gray-100 uppercase tracking-wider text-sm font-medium">Fire Systems Serviced</p>
      </div>
      
      {/* Stat 2 */}
      <div className="bg-white/10 backdrop-blur rounded-xl p-8 transform transition duration-300 hover:translate-y-[-8px] hover:bg-white/15 border border-white/20">
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faUsers} />
          </div>
        </div>
        <h3 className="text-4xl md:text-5xl font-bold mb-2">2,500<span className="text-primary-300">+</span></h3>
        <p className="text-gray-200 uppercase tracking-wider text-sm font-medium">People Trained</p>
      </div>
      
      {/* Stat 3 */}
      <div className="bg-white/10 backdrop-blur rounded-xl p-8 transform transition duration-300 hover:translate-y-[-8px] hover:bg-white/15 border border-white/20">
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faBuilding} />
          </div>
        </div>
        <h3 className="text-4xl md:text-5xl font-bold mb-2">300<span className="text-primary-300">+</span></h3>
        <p className="text-gray-200 uppercase tracking-wider text-sm font-medium">Evacuation Plans</p>
      </div>
      
      {/* Stat 4 */}
      <div className="bg-white/10 backdrop-blur rounded-xl p-8 transform transition duration-300 hover:translate-y-[-8px] hover:bg-white/15 border border-white/20">
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faClock} />
          </div>
        </div>
        <h3 className="text-4xl md:text-5xl font-bold mb-2">24<span className="text-primary-300">/7</span></h3>
        <p className="text-gray-200 uppercase tracking-wider text-sm font-medium">Emergency Support</p>
      </div>
    </div>
  </div>
</section>

{/* Emergency Diagrams Section */}
<section className="py-20 bg-white" id="emergency-diagrams">
  <div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row gap-12 items-center">
      {/* Image Column */}
      <div className="lg:w-1/2">
        <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-100">
          <Image
            src="/images/evac_template.png"
            alt="Professional emergency evacuation diagram example"
            width={600}
            height={600}
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-4 text-center">
            <p className="text-sm font-medium text-gray-700">Sample AS3745-2010 Compliant Evacuation Diagram</p>
          </div>
        </div>
      </div>

      {/* Content Column */}
      <div className="lg:w-1/1">
        <span className="inline-block bg-primary-50 text-primary-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
          Compliance Essential
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Professional Emergency Evacuation Diagrams
        </h2>
        <p className="text-lg text-secondary-600 mb-8">
          AS3745-2010 compliant diagrams that clearly guide occupants to safety during emergencies. Our diagrams are more than just legal requirements - they&apos;re potentially life-saving tools for your workplace.
        </p>

        {/* Key Features */}
        <div className="space-y-6 mb-8">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-sm" />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold mb-1">Standards Compliant</h3>
              <p className="text-secondary-600">Designed to meet all AS3745-2010 requirements with correct symbols, legends, and formatting</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-sm" />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold mb-1">Site-Specific</h3>
              <p className="text-secondary-600">Customized to your exact floor plan with all emergency equipment locations marked</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-sm" />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold mb-1">Fast Turnaround</h3>
              <p className="text-secondary-600">Most diagrams completed within 48 hours of receiving your floor plans</p>
            </div>
          </div>
        </div>

        {/* Compliance Info */}
        <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded-r-lg mb-8">
          <h3 className="font-bold text-primary-800 mb-2 flex items-center">
            <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2" />
            Legal Requirements
          </h3>
          <p className="text-secondary-700">
            Under Australian Standard AS3745-2010, all workplaces must display current evacuation diagrams at all emergency exits and strategic locations throughout the building.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="/contact" className="bg-primary-10 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-bold text-center transition shadow-md hover:shadow-lg">
            Get Your Diagrams
          </a>
          <a href="/compliance-guide" className="border border-primary-600 text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-lg font-bold text-center transition">
            Compliance Guide
          </a>
        </div>
      </div>
    </div>

    {/* Detailed Information Tabs */}
    <div className="mt-20 p-8 bg-gray-50 rounded-xl p-1 max-w-4xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 pb-8">

        {/* {infoSection.map((info) => ()) */}
        
        {infoSection.map(info => (
          <button 
          key={info.name} 
          onClick={() => toggleInfo(info.name)}
          className={`emergency-tab-btn py-3 px-4 rounded-lg font-medium text-center transition ${selectedInfo === info.name ? 'bg-primary-10 text-white' : 'hover:bg-gray-100'}`}>
          {info.name}
        </button>
        ))
        }
      </div>

      <div className="flex flex-col justify-around">
        {/* Tab Content - What's Included */}
        <div className="emergency-tab-content active">

        {selectedData && (
          <>
          <h3 className="text-xl font-bold mb-4">{selectedData.components.title}</h3>
          <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                {selectedData.components.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                    <span key={index}>{point}</span>
                  </li>
                ))}
              </ul>
          </div>
          </>
        )}
        </div>
      </div>
    </div>
  </div>
</section>

{/* Emergency Plans Section */}
<section className="py-20 bg-gray-50" id="emergency-plans">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <span className="inline-block bg-primary-50 text-primary-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
        Workplace Safety
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Emergency Plans</h2>
      <p className="text-secondary-600 max-w-3xl mx-auto">
        Customized emergency plans that meet AS3745-2010 requirements and actually work in real emergency situations.
      </p>
    </div>
  

    <div className="flex flex-col xl:flex-row gap-12">
      {/* Content Column */}
      
      <div className="flex flex-col justify-between xl:w-1/3">
      <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-100 mb-12 justify-between">
      <Image
            src="/images/emergency_plan_book.png" // Replace with your image path
            alt="Professional emergency plan documentation example"
            width={800}
            height={600}
            className="w-full h-auto"
          />
      </div>
        <div className="bg-white rounded-xl shadow-lg p-8 h-auto border border-gray-100">
          <h3 className="text-2xl font-bold mb-6">Why Your Business Needs a Professional Emergency Plan</h3>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faShieldAlt} className="text-sm" />
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-bold mb-1">Legal Compliance</h4>
                <p className="text-secondary-600">
                  AS3745-2010 requires all Australian workplaces to have a current emergency plan that covers fire, medical emergencies, and other potential incidents.
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
                <h4 className="text-lg font-bold mb-1">Staff Safety</h4>
                <p className="text-secondary-600">
                  Clear procedures reduce panic and ensure everyone knows exactly what to do in an emergency.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faBuilding} className="text-sm" />
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-bold mb-1">Asset Protection</h4>
                <p className="text-secondary-600">
                  Proper emergency response can minimize damage to your property and equipment.
                </p>
              </div>
            </div>
          </div>

          

          <div className="mt-8 pt-6 border-t border-gray-200">
            <a href="/contact" className="inline-flex items-center justify-center bg-primary-10 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-bold transition shadow-md hover:shadow-lg w-full">
              Get Your Emergency Plan
              <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Plan Components Column */}
      <div className="flex flex-col justify-between xl:w-2/3 ">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 h-auto mb-12 lg:mb-2 ">
          <div className="bg-primary-600 p-6 text-white">
            <h3 className="text-xl font-bold flex items-center">
              <FontAwesomeIcon icon={faFileAlt} className="mr-3" />
              What&apos;s Included in Our Emergency Plans
            </h3>
          </div>
          
          <div className="p-8">

            <div className="grid md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div>     
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold">1</span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold mb-1">Emergency Procedures</h4>
                    <p className="text-secondary-600 text-sm">
                      Step-by-step instructions for fire, medical emergencies, chemical spills, and more
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold">2</span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold mb-1">Warden Structure</h4>
                    <p className="text-secondary-600 text-sm">
                      Clear hierarchy of wardens and their specific responsibilities
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold">3</span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold mb-1">Communication Plan</h4>
                    <p className="text-secondary-600 text-sm">
                      How to alert staff and emergency services during an incident
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold">4</span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold mb-1">Evacuation Details</h4>
                    <p className="text-secondary-600 text-sm">
                      Primary and secondary evacuation routes with assembly areas
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold">5</span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold mb-1">Emergency Contacts</h4>
                    <p className="text-secondary-600 text-sm">
                      All essential contacts including first aid officers and local emergency services
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold">6</span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold mb-1">Training Schedule</h4>
                    <p className="text-secondary-600 text-sm">
                      Recommended frequency for emergency training and drills
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">

              <h4 className="font-bold mb-3 flex items-center">
                <FontAwesomeIcon icon={faClock} className="text-primary-500 mr-2" />
                What You&apos;ll Get.
              </h4>
              <ol className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 text-xs font-bold px-2 py-1 rounded mr-3">1</span>
                  <span className="text-secondary-600">Professionally Designed Evacuaction Diagram & Emergency Plan</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 text-xs font-bold px-2 py-1 rounded mr-3">2</span>
                  <span className="text-secondary-600">Site assessment to gather information for the diagrams & plan.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 text-xs font-bold px-2 py-1 rounded mr-3">3</span>
                  <span className="text-secondary-600">Your Company logo added to the Diagrams & Plan.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 text-xs font-bold px-2 py-1 rounded mr-3">4</span>
                  <span className="text-secondary-600">Guaranteed compliance wtih Australian Standards.</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
        
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 h-auto lg:mt-12 ">
  <div className="bg-primary-600 p-6 text-white">
    <h3 className="text-xl font-bold flex items-center">
      <FontAwesomeIcon icon={faFileAlt} className="mr-3" />
      Our 4-Step Process
    </h3>
  </div>
  
  <div className="p-8">
    <ol className="space-y-6">
      {/* Step 1 */}
      <li className="flex">
        <div className="flex-shrink-0">
          <span className="bg-primary-600 text-white text-lg font-bold w-10 h-10 rounded-full flex items-center justify-center mr-4">01</span>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-1">Contact Us</h4>
          <p className="text-secondary-600">
            Reach out by phone, email, or through our contact form to begin the process.
          </p>
        </div>
      </li>

      {/* Step 2 */}
      <li className="flex items-start">
        <div className="flex-shrink-0">
          <span className="bg-primary-600 text-white text-lg font-bold w-10 h-10 rounded-full flex items-center justify-center mr-4">02</span>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-1">Information Gathering</h4>
          <p className="text-secondary-600">
          We gather information to create your emergency procedures and diagrams.
          </p>
        </div>
      </li>

      {/* Step 3 */}
      <li className="flex items-start">
        <div className="flex-shrink-0">
          <span className="bg-primary-600 text-white text-lg font-bold w-10 h-10 rounded-full flex items-center justify-center mr-4">03</span>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-1">Design & Approval</h4>
          <p className="text-secondary-600">
            We send your newly designed emergency plan and diagrams for your review and approval.
          </p>
        </div>
      </li>

      {/* Step 4 */}
      <li className="flex items-start">
        <div className="flex-shrink-0">
          <span className="bg-primary-600 text-white text-lg font-bold w-10 h-10 rounded-full flex items-center justify-center mr-4">04</span>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-1">Installation/Delivery</h4>
          <p className="text-secondary-600">
            We conduct a final site visit to deliver and install your new emergency plan and diagrams.
          </p>
        </div>
      </li>
    </ol>

    <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded-r-lg mb-8 mt-8">
            <h4 className="font-bold text-primary-800 mb-2 flex items-center">
              <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2" />
              Did You Know?
            </h4>
            <p className="text-secondary-700">
              Over 60% of businesses without proper emergency plans fail to reopen after a major incident. Don&apos;t take the risk with your business.
            </p>
    </div>
    
    <div className="mt-8 pt-6 border-t border-gray-200">
      <a href="/contact" className="inline-flex items-center justify-center bg-primary-10 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-bold transition shadow-md hover:shadow-lg w-full">
        Start Your Emergency Plan
        <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
      </a>
    </div>
  </div>
</div>
      </div>
    </div>

    {/* FAQ Section */}
    <div className="mt-20 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-8 text-center">Emergency Plan FAQs</h3>
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        {/* FAQ Item 1 */}
        <div className="border-b border-gray-200">
          <button 
          onClick={() => setIsFaqOpen1(!isFaqOpen1)}
          className="faq-question w-full text-left p-6 hover:bg-gray-50 transition flex justify-between items-center">
            <span className="font-medium text-lg">How often should our emergency plan be reviewed?</span>
            <svg className="w-5 h-5 text-primary-500 transform transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        {isFaqOpen1 && <div className="faq-answer px-6 pb-6">
            <p className="text-secondary-600">
              AS3745-2010 requires emergency plans to be reviewed at least every 12 months, or whenever there are significant changes to:
            </p>
            <ul className="mt-3 space-y-2 pl-5">
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2 text-sm" />
                <span>Your building layout or exits</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2 text-sm" />
                <span>Emergency contact personnel</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-2 text-sm" />
                <span>After any emergency incident</span>
              </li>
            </ul>
          </div>}
          
        </div>

        {/* FAQ Item 2 */}
        <div className="border-b border-gray-200">
          <button 
          onClick={() => setIsFaqOpen2(!isFaqOpen2)}
          className="faq-question w-full text-left p-6 hover:bg-gray-50 transition flex justify-between items-center">
            <span className="font-medium text-lg">What&apos;s the difference between an emergency plan and evacuation diagrams?</span>
            <svg className="w-5 h-5 text-primary-500 transform transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isFaqOpen2 && <div className="faq-answer px-6 pb-6">
            <p className="text-secondary-600">
              While both are required under AS3745-2010, they serve different purposes:
            </p>
            <div className="mt-4 grid md:grid-cols-2 gap-6">
              <div className="bg-primary-50 p-4 rounded-lg">
                <h4 className="font-bold text-primary-800 mb-2">Emergency Plan</h4>
                <p className="text-secondary-700 text-sm">
                  A comprehensive document detailing all emergency procedures, roles, and responsibilities. It&apos;s the &quot;instruction manual&quot; for emergencies.
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">Evacuation Diagrams</h4>
                <p className="text-secondary-700 text-sm">
                  Visual representations of your floor plan showing exit routes and emergency equipment. They&apos;re the &quot;quick reference guides&quot; placed throughout your premises.
                </p>
              </div>
            </div>
          </div>}
          
        </div>

        {/* FAQ Item 3 */}
        <div className="border-b border-gray-200">
          <button 
          onClick={() => setIsFaqOpen3(!isFaqOpen3)}
          className="faq-question w-full text-left p-6 hover:bg-gray-50 transition flex justify-between items-center">
            <span className="font-medium text-lg">Do we need different plans for different types of emergencies?</span>
            <svg className="w-5 h-5 text-primary-500 transform transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isFaqOpen3 && <div className="faq-answer px-6 pb-6">
            <p className="text-secondary-600">
              Your emergency plan should cover all potential emergencies relevant to your workplace. We typically include:
            </p>
            <div className="mt-3 grid sm:grid-cols-2 gap-4">
              <span className="inline-flex items-center bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                <FontAwesomeIcon icon={faFire} className="mr-2" />
                Fire emergencies
              </span>
              <span className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                <FontAwesomeIcon icon={faUserInjured} className="mr-2" />
                Medical emergencies
              </span>
              <span className="inline-flex items-center bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                <FontAwesomeIcon icon={faFlask} className="mr-2" />
                Chemical spills
              </span>
              <span className="inline-flex items-center bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                <FontAwesomeIcon icon={faTornado} className="mr-2" />
                Natural disasters
              </span>
            </div>
          </div>}
          
        </div>

        {/* FAQ Item 4 */}
        <div className="">
          <button 
          onClick={() => setIsFaqOpen4(!isFaqOpen4)}
          className="faq-question w-full text-left p-6 hover:bg-gray-50 transition flex justify-between items-center">
            <span className="font-medium text-lg">How long does it take to develop an emergency plan?</span>
            <svg className="w-5 h-5 text-primary-500 transform transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isFaqOpen4 && <div className="faq-answer px-6 pb-6">
            <p className="text-secondary-600">
              The timeline depends on the size and complexity of your workplace:
            </p>
            <div className="mt-4 space-y-4">
              <div className="flex items-start">
                <div className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-bold mr-4">1-3 Days</div>
                <div>
                  <h4 className="font-bold mb-1">Small Offices/Retail</h4>
                  <p className="text-secondary-600 text-sm">Simple layouts with under 20 staff</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-bold mr-4">3-7 Days</div>
                <div>
                  <h4 className="font-bold mb-1">Medium Businesses</h4>
                  <p className="text-secondary-600 text-sm">Multiple floors or departments</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-bold mr-4">1-2 Weeks</div>
                <div>
                  <h4 className="font-bold mb-1">Large/Complex Sites</h4>
                  <p className="text-secondary-600 text-sm">Industrial sites, hospitals, schools with special requirements</p>
                </div>
              </div>
            </div>
          </div>}
          
        </div>
      </div>
    </div>
  </div>
</section>

{/* Free Fact Sheet Download Section */}
<section className="py-16 bg-gradient-to-br from-primary-50 to-white">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      <div className="md:flex">
        {/* Left Column - Visual */}
        <div className="md:w-2/5 bg-primary-600 p-8 flex items-center justify-center">
          <div className="text-center">
            <FontAwesomeIcon 
              icon={faFileDownload} 
              className="text-white text-5xl mb-4 mx-auto"
            />
            <h3 className="text-white text-xl font-bold mb-2">Free Download</h3>
            <p className="text-primary-100">Instant Access</p>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="md:w-3/5 p-8">
          <span className="inline-block bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-xs font-medium mb-4">
            FREE RESOURCE
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Emergency Preparedness Fact Sheet</h2>
          <p className="text-secondary-600 mb-6">
            Download our free guide to essential emergency procedures and compliance requirements for Australian workplaces.
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-3" />
              <span>AS3745-2010 compliance checklist</span>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-3" />
              <span>Emergency contact templates</span>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-3" />
              <span>Evacuation diagram requirements</span>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 mr-3" />
              <span>Warden responsibilities summary</span>
            </li>
          </ul>

          {/* Download Form */}
          <form action={submitForm} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
              <input 
                name='name'
                type="text" 
                id="name" 
                required 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
              <input 
                name='email'
                type="email" 
                id="email" 
                required 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-primary-10 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              Download Now <FontAwesomeIcon icon={faArrowDown} className="ml-2" />
            </button>
            <p className="text-xs text-gray-500">
              We respect your privacy. By downloading, you agree to receive occasional emails from FireSafe Compliance.
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Clients/Portfolio Section */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <span className="inline-block bg-primary-10 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
        Trusted By
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Businesses We&apos;ve Served</h2>
      <p className="text-secondary-600 max-w-3xl mx-auto">
        We&apos;ve helped organizations across industries achieve full fire safety compliance
      </p>  
    </div>

    {/* Client Logos Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
      {[
        { name: "Anytime Fitness", logo: "/images/Anytime-Fitness-logo.png" },
        { name: "Downer Group", logo: "/images/Downer_Group_logo.png" },
        { name: "Queensland Bank", logo: "/images/Queensland_bank-logo.jpg" },
        { name: "Snap Fitness", logo: "/images/snapFitness_logo.png" },
        { name: "The Good Feet Store", logo: "/images/The_Good-Feet-Store_LOGO.jpg" },
        { name: "Ultra Tune", logo: "/images/Ultra_Tune_logo.png" }
      ].map((client, index) => (
        <div 
          key={index}
          className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-center border border-gray-100 hover:shadow-md transition-all duration-300 h-32"
        >
          <Image
            src={client.logo}
            alt={client.name}
            width={160}
            height={80}
            className="max-h-16 w-auto object-contain"
          />
        </div>
      ))}
    </div>


  </div>
</section>

        {/* CTA Section */}
        <section className="cta-bg text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make Your Business Compliant?</h2>
            <p className="text-lg max-w-3xl mx-auto mb-10 text-secondary-200">We&apos;re here to help you stay compliant and safe.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contact" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition transform hover:-translate-y-0.2 shadow-lg hover:shadow-xl">Contact Us</a>
              <button onClick={togglePopup} className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-primary-600 transition transform hover:-translate-y-0.1">Free Quote</button>
            </div>
          </div>
        </section>
      </>
    );
};

export default HomePage;
