// src/app/blog/[slug]/page.tsx
import { faArrowLeft, faUser, faCalendarAlt, faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface FeaturedImage {
  url: string;
  alt: string;
  caption?: string;
}

interface BlogPost {
  slug: string;
  title: string;
  content: React.ReactNode;
  author: string;
  date: string;
  categories: string[];
  featuredImage?: FeaturedImage;
  metaDescription: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'fire-extingusher-requirements-brisbane',
    title: 'What Are The Fire Extinguisher Signage Requirements in Brisbane?',
    content: <article className='space-y-5'>
    <h1 className='text-3xl md:text-4xl font-bold mb-4'>What Are The Fire Extinguisher Signage Requirements in Brisbane?</h1>
    <p>Fire safety regulations in Australia vary by state, and in Queensland including Brisbane; there are strict compliance rules that building owners and managers must follow. Whether you own a commercial property, lease a space, or manage a building, you are legally responsible for ensuring the safety of occupants during a fire or emergency situation.</p>

    <p>A key part of this responsibility involves meeting fire extinguisher signage requirements. These visual indicators are not just a formality they play a crucial role in helping people quickly locate and understand how to use firefighting equipment during an emergency.</p>
    
    <p>In this article, we’ll walk you through what’s required when it comes to fire extinguisher signage in Brisbane, where signs should be placed, and how to stay compliant with Queensland fire safety laws.</p>
    
    <h2 className='text-2xl md:text-3xl font-bold mb-4'>Why Fire Extinguisher Signage Is Important</h2>
    <p>Fire extinguisher signs are a legal and safety requirement in commercial and industrial buildings. They help people quickly identify the type and location of each extinguisher, ensuring the right action can be taken in the event of a fire. Every second counts during an emergency, and clear, visible signage eliminates confusion and delays.</p>

    <p>These signs usually feature <strong>white text and symbols on a red background</strong> and must indicate both the extinguisher’s location and its class (e.g., ABE, CO₂, Water, Foam). This allows users to identify which type of fire the extinguisher is suitable for, reducing the risk of improper use.</p>

    <h2>Fire Extinguisher Sign Placement in Brisbane</h2>
    <p>Correct placement of fire extinguisher signage is just as important as having the right extinguisher installed. In Brisbane, and more broadly under <strong>Australian Standard AS 2444:2001</strong>, signs must be:</p>

    <ul>
      <li>Mounted at least <strong>2 metres above floor level</strong>, or positioned so they are easily visible from a distance.</li>
      <li>Installed directly above or near the extinguisher.</li>
      <li>Placed in <strong>clear, unobstructed locations</strong> they must not be hidden behind furniture or placed too high or too low.</li>
      <li>Located along <strong>emergency exit paths</strong>, where they are easy to find and access.</li>
    </ul>

    <p>The goal is to ensure that anyone staff, visitors, or first responders can quickly spot the signage and reach the extinguisher without barriers.</p>

    <h2 className='text-2xl md:text-3xl font-bold mb-4'>Brisbane Fire Extinguisher Testing Requirements</h2>
    <p>In addition to correct signage, fire extinguishers and other fire protection equipment in Brisbane must be regularly tested and serviced.</p>

    <p>Under <strong>Australian Standard 1851-2012</strong>, businesses must:</p>
    <ul>
      <li>Have all fire extinguishers, fire blankets, and fire hose reels <strong>serviced every six (6) months</strong>.</li>
      <li>Ensure extinguishers undergo <strong>hydrostatic pressure testing every 5 years</strong>.</li>
      <li>Keep accurate records of all inspections and maintenance.</li>
    </ul>

    <p>Failing to meet these servicing requirements can result in penalties and increased liability in the event of an incident.</p>

    <h2 className='text-2xl md:text-3xl font-bold mb-4'>Fire Safety Training and Site Assessments</h2>
    <p>Knowing how to use a fire extinguisher is just as important as having one installed. That’s why we fire safety training for Brisbane businesses, including:</p>

    <ul>
      <li>First Response (First Attack) Fire Training</li>
      <li>General Occupant Training</li>
      <li>Site Evacuation Drills</li>
      <li>Emergency Procedure Development</li>
      <li>Fire Safety Adviser (FSA) Representation</li>
    </ul>

    <p>We also provide <strong>on-site fire safety assessments</strong> and compliance audits in accordance with <strong>Queensland Development Code (QDC) MP6.1</strong> and <strong>AS 1851:2012</strong>. These evaluations help identify gaps in compliance, missing signage, or additional fire equipment required to meet current Brisbane fire safety standards.</p>

    <h2 className='text-2xl md:text-3xl font-bold mb-4'>Ensure Your Fire Extinguisher Signage Is Compliant in Brisbane</h2>
    <p>If you&apos;re unsure whether your workplace meets Brisbane&apos;s fire extinguisher signage requirements, it&apos;s best to consult with professionals. Our team at <strong>Firevolt</strong> provides end-to-end fire safety services, including signage installation, extinguisher servicing, and compliance assessments to ensure your business meets all Queensland fire safety regulations.</p>

    <p><strong>Contact us today</strong> to book an inspection or speak with a fire safety expert.</p>
  </article>,
    author: 'Owner',
    date: '10 June 2025',
    categories: ['Fire Extinguishers'],
    featuredImage: {
      url: '/images/extinguisher_gal/IMG_4299.JPEG',
      alt: 'What Are The Fire Extinguisher Signage Requirements in Brisbane?',
      caption: 'Fire Extingusher Requirements Brisbane'
    },
    metaDescription: 'This article explains the fire extingusiher requirements for businesses located in Brisbane, QLD Australia.',
  },
  {
    slug: 'fire-saftey-compliance-brisbane',
    title: 'Fire Safety and Compliance Brisbane: Protecting Your Property and People',
    content: <article className="space-y-5">
    <h1 className="text-3xl md:text-4xl font-bold mb-4">What Are The Fire Extinguisher Signage Requirements in Brisbane</h1>
  
    <p>Fire safety regulations in Australia vary by state and in Queensland including Brisbane there are strict compliance rules that building owners and managers must follow. Whether you own a commercial property, lease a space, or manage a building, you are legally responsible for ensuring the safety of occupants during a fire or emergency situation.</p>
  
    <p>A key part of this responsibility involves meeting fire extinguisher signage requirements. These visual indicators are not just a formality they play a crucial role in helping people quickly locate and understand how to use firefighting equipment during an emergency.</p>
  
    <p>In this article, we’ll walk you through what’s required when it comes to fire extinguisher signage in Brisbane, where signs should be placed, and how to stay compliant with Queensland fire safety laws.</p>
  
    <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Fire Extinguisher Signage Is Important</h2>
  
    <p>Fire extinguisher signs are a legal and safety requirement in commercial and industrial buildings. They help people quickly identify the type and location of each extinguisher, ensuring the right action can be taken in the event of a fire. Every second counts during an emergency, and clear, visible signage eliminates confusion and delays.</p>
  
    <p>These signs usually feature <strong>white text and symbols on a red background</strong> and must indicate both the extinguisher’s location and its class (e.g. ABE, CO₂, Water, Foam). This allows users to identify which type of fire the extinguisher is suitable for, reducing the risk of improper use.</p>
  
    <h2 className="text-2xl md:text-3xl font-bold mb-4">Fire Extinguisher Sign Placement in Brisbane</h2>
  
    <p>Correct placement of fire extinguisher signage is just as important as having the right extinguisher installed. In Brisbane and more broadly under <strong>Australian Standard AS 2444:2001</strong>, signs must be:</p>
  
    <ul className="list-disc list-outside ml-6">
      <li>Mounted at least <strong>2 metres above floor level</strong>, or positioned so they are easily visible from a distance.</li>
      <li>Installed directly above or near the extinguisher.</li>
      <li>Placed in <strong>clear unobstructed locations</strong> they must not be hidden behind furniture or placed too high or too low.</li>
      <li>Located along <strong>emergency exit paths</strong>, where they are easy to find and access.</li>
    </ul>
  
    <p>The goal is to ensure that anyone staff, visitors, or first responders can quickly spot the signage and reach the extinguisher without barriers.</p>
  
    <h2 className="text-2xl md:text-3xl font-bold mb-4">Brisbane Fire Extinguisher Testing Requirements</h2>
  
    <p>In addition to correct signage, fire extinguishers and other fire protection equipment in Brisbane must be regularly tested and serviced.</p>
  
    <p>Under <strong>Australian Standard 1851 2012</strong>, businesses must:</p>
  
    <ul className="list-disc list-inside">
      <li>Have all fire extinguishers, fire blankets, and fire hose reels <strong>serviced every six months</strong>.</li>
      <li>Ensure extinguishers undergo <strong>hydrostatic pressure testing every 5 years</strong>.</li>
      <li>Keep accurate records of all inspections and maintenance.</li>
    </ul>
  
    <p>Failing to meet these servicing requirements can result in penalties and increased liability in the event of an incident.</p>
  
    <h2 className="text-2xl md:text-3xl font-bold mb-4">Fire Safety Training and Site Assessments</h2>
  
    <p>Knowing how to use a fire extinguisher is just as important as having one installed. That’s why we offer fire safety training for Brisbane businesses including:</p>
  
    <ul className="list-disc list-inside">
      <li>First Response (First Attack) Fire Training</li>
      <li>General Occupant Training</li>
      <li>Site Evacuation Drills</li>
      <li>Emergency Procedure Development</li>
      <li>Fire Safety Adviser (FSA) Representation</li>
    </ul>
  
    <p>We also provide <strong>on site fire safety assessments</strong> and compliance audits in accordance with <strong>Queensland Development Code (QDC) MP6.1</strong> and <strong>AS 1851 2012</strong>. These evaluations help identify gaps in compliance, missing signage, or additional fire equipment required to meet current Brisbane fire safety standards.</p>
  
    <h2 className="text-2xl md:text-3xl font-bold mb-4">Ensure Your Fire Extinguisher Signage Is Compliant in Brisbane</h2>
  
    <p>If you are unsure whether your workplace meets Brisbane fire extinguisher signage requirements, it is best to consult with professionals. Our team at <strong>Firevolt</strong> provides end to end fire safety services including signage installation, extinguisher servicing, and compliance assessments to ensure your business meets all Queensland fire safety regulations.</p>
  
    <p><strong>Contact us today</strong> to book an inspection or speak with a fire safety expert.</p>
  </article>
  ,
    author: 'Owner',
    date: '10 June 2025',
    categories: ['Fire Extinguishers'],
    featuredImage: {
      url: '/images/broken-cord.jpg',
      alt: 'What Are The Fire Extinguisher Signage Requirements in Brisbane?',
      caption: 'Fire Extingusher Requirements Brisbane'
    },
    metaDescription: 'This article explains the fire extingusiher requirements for businesses located in Brisbane, QLD Australia.',


  },
  {
    slug: 'fire-extinguisher-servicing-brisbane',
    title: 'Fire Extinguisher Servicing Brisbane: Common Issues and Why Maintenance Matters',
    content: <article className="space-y-5">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Top Fire Extinguisher Problems and Why Regular Servicing Matters</h1>
  
      <p>When it comes to fire safety, fire extinguishers are critical in stopping small fires before they become serious emergencies. But your extinguisher is only reliable if it’s regularly maintained. Without scheduled servicing, even the best extinguishers can fail right when they’re needed most.</p>
  
      <p>This article highlights the most common fire extinguisher issues like leakage, low pressure, expiry, and physical damage and how professional servicing ensures your fire safety equipment remains compliant and ready to perform.</p>
  
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Regular Fire Extinguisher Servicing Is Essential</h2>
  
      <p>Under <strong>Australian Standard AS1851-2012</strong>, all fire extinguishers must be inspected every six months. These checks are designed to:</p>
      <ul className="list-disc list-inside">
        <li>Identify early signs of faults or wear</li>
        <li>Ensure extinguishers are pressurised and functional</li>
        <li>Maintain compliance with Queensland fire safety laws</li>
        <li>Prevent failure during emergency use</li>
      </ul>
  
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Common Fire Extinguisher Problems in Brisbane</h2>
  
      <h3 className="text-xl font-semibold">1. Leakage</h3>
      <p>Leaks often go unnoticed and reduce internal pressure, rendering the extinguisher ineffective. They usually occur due to:</p>
      <ul className="list-disc list-inside">
        <li>Worn or faulty valves</li>
        <li>Cracked or damaged seals</li>
      </ul>
      <p><strong>Solution:</strong> During servicing, technicians inspect and replace compromised components or the full unit if needed.</p>
  
      <h3 className="text-xl font-semibold">2. Low Pressure</h3>
      <p>Pressure loss can occur through partial discharge or incorrect storage, and extinguishers without enough pressure won’t work in an emergency.</p>
      <p><strong>Solution:</strong> Pressure gauges are checked, and units are recharged if pressure is outside the safe zone.</p>
  
      <h3 className="text-xl font-semibold">3. Expired Units</h3>
      <p>All extinguishers have a shelf life. Expired models may contain degraded agents or faulty mechanisms.</p>
      <p><strong>Solution:</strong> Servicing professionals track expiry dates and replace units before they become unsafe or non-compliant.</p>
  
      <h3 className="text-xl font-semibold">4. Corrosion and Physical Damage</h3>
      <p>Fire extinguishers in high-humidity or industrial environments may suffer from rust or damage, compromising their integrity.</p>
      <p><strong>Solution:</strong> Units are visually inspected for signs of corrosion or structural compromise and replaced as required.</p>
  
      <h3 className="text-xl font-semibold">5. Tampering or Accidental Discharge</h3>
      <p>Safety pins can be removed accidentally or extinguishers discharged unintentionally. This affects their readiness.</p>
      <p><strong>Solution:</strong> Servicing includes checking for tampering and restoring discharged units to full working order.</p>
  
      <h2 className="text-2xl md:text-3xl font-bold mb-4">What’s Included in a Professional Fire Extinguisher Service</h2>
  
      <p>Servicing by qualified fire safety professionals ensures your extinguishers are always compliant and functional. A typical service includes:</p>
      <ul className="list-disc list-inside">
        <li>Inspection of all external and internal parts</li>
        <li>Pressure level testing</li>
        <li>Seal and nozzle checks</li>
        <li>Recharge or replacement</li>
        <li>Compliance tagging and recordkeeping</li>
      </ul>
  
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Fire Safety Services Available in Brisbane</h2>
  
      <p>Beyond extinguisher maintenance, Firevolt services offered:</p>
      <ul className="list-disc list-inside">
        <li>Emergency and exit light inspections</li>
        <li>Fire hose reel and hydrant testing</li>
        <li>Site audits for fire safety compliance</li>
        <li>Fire safety training and evacuation drills</li>
      </ul>
  
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Protect Your People and Property By Booking Your Fire Extinguisher Service Today</h2>
  
      <p>Don’t leave your fire safety to chance. Whether you’re running a warehouse, office, retail store or any other commercial property in Brisbane, regular fire extinguisher servicing is a legal and safety must. </p>
  
      <p><strong><a href='/contact'>Contact Firevolt today</a> </strong> to schedule your fire extinguisher maintenance and keep your business protected and compliant with Queensland standards.</p>
    </article>,
    author: 'Owner',
    date: '19 June 2025',
    categories: ['Fire Extinguishers'],
    featuredImage: {
      url: '/images/extinguisher_gal/IMG_6997.jpg',
      alt: 'Fire extinguisher being serviced by a technician',
      caption: 'Fire Extinguisher Servicing in Brisbane'
    },
    metaDescription: 'Learn about the most common fire extinguisher problems and why regular servicing in Brisbane is essential for compliance and safety.'
  }
  
  // Add more posts if you want
]

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Destructure post properties
  const {
    title,
    content,
    author,
    date,
    categories,
    featuredImage,
    metaDescription
  } = post;

  return (
    <>
    <section className='px-6 lg:px-[15rem]'>
      <head>
        <title>{`${title} | Firevolt Blog`}</title>
        <meta name="description" content={metaDescription} />
      </head>

      <section className="py-12  bg-white">
        <div className="container mx-auto px-4 max-w-1xl">
          {/* Back to Blog Link */}
          <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center text-primary-600 hover:text-primary-800 transition">
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Back to All Articles
            </Link>
          </div>

          {/* Article Header */}
          <article className="pb-20">
            <header className="mb-10">
              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-4">
                {categories.map((category, index) => (
                  <span 
                    key={index} 
                    className="bg-primary-10 text-white px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {category}
                  </span>
                ))}
              </div>
              
              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{title}</h1>
              
              {/* Meta Info */}
              <div className="flex items-center text-sm text-secondary-500 mb-6">
                <span className="flex items-center mr-4">
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  By {author}
                </span>
                <span className="flex items-center">
                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                  {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
              </div>
              
              {/* Featured Image */}
              {featuredImage && (
                <div className="rounded-xl overflow-hidden mb-8 shadow-md">
                  <Image
                    src={featuredImage.url}
                    alt={featuredImage.alt}
                    width={800}
                    height={450}
                    className="w-full h-auto object-cover max-h-[30rem] sm:max-h-[24rem] md:max-h-[28rem] lg:max-h-[30rem]"
                    priority
                  />
                  {featuredImage.caption && (
                    <p className="text-sm text-center text-secondary-500 mt-2">
                      {featuredImage.caption}
                    </p>
                  )}
                </div>
              )}
            </header>

            {/* Article Content */}
            <div className="prose max-w-none prose-lg text-gray-700">
              {content}
            </div>

            {/* Tags */}
            {categories.length > 0 && (
              <footer className="mt-12 pt-6 border-t border-gray-200">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faTags} className="text-primary-600 mr-2" />
                  <span className="font-medium mr-2">Tags:</span>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category, index) => (
                      <span 
                        key={index} 
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </footer>
            )}
          </article>

          {/* Related Posts Section */}
          {/* <section className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 border border-gray-100">
                <div className="h-48 overflow-hidden">
                  <Image 
                    src="/images/blog-related-1.jpg" 
                    alt="Related post about fire safety" 
                    width={400} 
                    height={225} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-primary-10 text-white px-3 py-1 rounded-full text-xs font-medium mb-2">
                    Fire Safety
                  </span>
                  <h3 className="text-xl font-bold mb-2">Essential Fire Safety Tips for Businesses</h3>
                  <p className="text-secondary-600 text-sm mb-4">Learn the key strategies to protect your workplace from fire hazards.</p>
                  <Link href="/blog/fire-safety-tips" className="text-primary-600 hover:text-primary-800 font-medium text-sm">
                    Read More →
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 border border-gray-100">
                <div className="h-48 overflow-hidden">
                  <Image 
                    src="/images/blog-related-2.jpg" 
                    alt="Related post about compliance" 
                    width={400} 
                    height={225} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-primary-10 text-white px-3 py-1 rounded-full text-xs font-medium mb-2">
                    Compliance
                  </span>
                  <h3 className="text-xl font-bold mb-2">Understanding Fire Compliance Regulations in 2023</h3>
                  <p className="text-secondary-600 text-sm mb-4">Stay up-to-date with the latest fire safety compliance requirements.</p>
                  <Link href="/blog/compliance-regulations" className="text-primary-600 hover:text-primary-800 font-medium text-sm">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </section> */}
        </div>
      </section>
      </section>
    </>
  );
}