import Link from 'next/link';

const ServiceLocations = () => {
  const locations = [
    { name: "Brisbane", slug: "brisbane" },
    { name: "Acacia Ridge", slug: "acacia-ridge" },
    { name: "Albany Creek", slug: "albany-creek" },
    { name: "Albion", slug: "albion" },
    { name: "Archerfield", slug: "archerfield" },
    { name: "Banyo", slug: "banyo" },
    { name: "Boondall", slug: "boondall" },
    { name: "Bray Park", slug: "bray-park" },
    { name: "Brendale", slug: "brendale" },
    { name: "Bulimba", slug: "bulimba" },
    { name: "Bulwer Island", slug: "bulwer-island" },
    { name: "Burpengary", slug: "burpengary" },
    { name: "Burpengary East", slug: "burpengary-east" },
    { name: "Caboolture", slug: "caboolture" },
    { name: "Caboolture South", slug: "caboolture-south" },
    { name: "Capalaba", slug: "capalaba" },
    { name: "Carole Park", slug: "carole-park" },
    { name: "Chermside", slug: "chermside" },
    { name: "Chermside South", slug: "chermside-south" },
    { name: "Chermside West", slug: "chermside-west" },
    { name: "Coopers Plains", slug: "coopers-plains" },
    { name: "Coorparoo", slug: "coorparoo" },
    { name: "Darra", slug: "darra" },
    { name: "Deception Bay", slug: "deception-bay" },
    { name: "Doboy", slug: "doboy" },
    { name: "Doomben", slug: "doomben" },
    { name: "Eagle Farm", slug: "eagle-farm" },
    { name: "Geebung", slug: "geebung" },
    { name: "Heathwood", slug: "heathwood" },
    { name: "Hemmant", slug: "hemmant" },
    { name: "Hendra", slug: "hendra" },
    { name: "Hillcrest", slug: "hillcrest" },
    { name: "Kedron", slug: "kedron" },
    { name: "Larapinta", slug: "larapinta" },
    { name: "Lawnton", slug: "lawnton" },
    { name: "Lindum", slug: "lindum" },
    { name: "Lytton", slug: "lytton" },
    { name: "Meeandah", slug: "meeandah" },
    { name: "Morayfield", slug: "morayfield" },
    { name: "Myrtletown", slug: "myrtletown" },
    { name: "Narangba", slug: "narangba" },
    { name: "Newstead", slug: "newstead" },
    { name: "North Lakes", slug: "north-lakes" },
    { name: "Northgate", slug: "northgate" },
    { name: "Nudgee", slug: "nudgee" },
    { name: "Nudgee Beach", slug: "nudgee-beach" },
    { name: "Nundah", slug: "nundah" },
    { name: "Parkinson", slug: "parkinson" },
    { name: "Pinkenba", slug: "pinkenba" },
    { name: "Port of Brisbane", slug: "port-of-brisbane" },
    { name: "Redbank", slug: "redbank" },
    { name: "Redbank Plains", slug: "redbank-plains" },
    { name: "Richlands", slug: "richlands" },
    { name: "Rochedale", slug: "rochedale" },
    { name: "Rocklea", slug: "rocklea" },
    { name: "Salisbury", slug: "salisbury" },
    { name: "Sandstone Point", slug: "sandstone-point" },
    { name: "Springfield Central", slug: "springfield-central" },
    { name: "Springfield Lakes", slug: "springfield-lakes" },
    { name: "Stafford", slug: "stafford" },
    { name: "Strathpine", slug: "strathpine" },
    { name: "Sumner", slug: "sumner" },
    { name: "Sunnybank Hills", slug: "sunnybank-hills" },
    { name: "Toombul", slug: "toombul" },
    { name: "Virginia", slug: "virginia" },
    { name: "Wacol", slug: "wacol" },
    { name: "Warner", slug: "warner" },
    { name: "Whinstanes", slug: "whinstanes" },
    { name: "Wynnum Central", slug: "wynnum-central" },
    { name: "Wynnum North", slug: "wynnum-north" },
    { name: "Yeerongpilly", slug: "yeerongpilly" },
    { name: "Zillmere", slug: "zillmere" }
  ];
  

  // Group locations by state/region for better organization
  const groupedLocations = {
    "Queensland - Brisbane & Surrounds": [
      "Brisbane", "Acacia Ridge", "Albany Creek", "Albion", "Archerfield", "Banyo", 
      "Boondall", "Bray Park", "Brendale", "Bulimba", "Bulwer Island", "Burpengary", 
      "Burpengary East", "Caboolture", "Caboolture South", "Capalaba", "Carole Park", 
      "Chermside", "Chermside South", "Chermside West", "Coopers Plains", "Coorparoo", 
      "Darra", "Deception Bay", "Doboy", "Doomben", "Eagle Farm", "Geebung", "Heathwood", 
      "Hemmant", "Hendra", "Hillcrest", "Kedron", "Larapinta", "Lawnton", "Lindum", 
      "Lytton", "Meeandah", "Morayfield", "Myrtletown", "Narangba", "Newstead", 
      "North Lakes", "Northgate", "Nudgee", "Nudgee Beach", "Nundah", "Parkinson", 
      "Pinkenba", "Port of Brisbane", "Redbank", "Redbank Plains", "Richlands", 
      "Rochedale", "Rocklea", "Salisbury", "Sandstone Point", "Springfield Central", 
      "Springfield Lakes", "Stafford", "Strathpine", "Sumner", "Sunnybank Hills", 
      "Toombul", "Virginia", "Wacol", "Warner", "Whinstanes", "Wynnum Central", 
      "Wynnum North", "Yeerongpilly", "Zillmere"
    ]
  };
  

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background decorative elements */}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-2xl mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
             Firevolt Service Locations
            <span className="block text-red-600">Service Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Delivering premium fire services all across locations in Brisbane QLD, Australia
            <br />
            <strong>Can’t find your location? No worries, get in touch and we will see how we can help.</strong>
          </p>
          <div className="mt-8 flex justify-center">
            <div className="h-1 w-24 bg-[#ae1414] rounded-full"></div>
          </div>
        </div>
        
        {/* Main Content Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 relative overflow-hidden">
          {/* Card decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-red-600/10 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-indigo-600/10 to-transparent rounded-full blur-2xl"></div>
          
          <div className="relative">
            {/* Statistics Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 p-6 bg-[#ae1414] rounded-2xl border border-red-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">10+</div>
                <div className="text-sm font-medium text-white uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-sm font-medium text-white uppercase tracking-wider">Service Locations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-sm font-medium text-white uppercase tracking-wider">Coverage</div>
              </div>
            </div>

            {/* Locations Grid */}
            <div className="flex gap-8">
              {Object.entries(groupedLocations).map(([region, cities]) => (
                <div key={region} className="group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                    <div className="flex items-center mb-6">
                      <div className="w-3 h-3 bg-red-600 rounded-full mr-3"></div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                        {region}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cities.map(city => {
                        const location = locations.find(loc => loc.name === city);
                        return location ? (
                          <Link
                            key={location.slug}
                            href={`/all-services/${location.slug}`}
                            className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium text-gray-700 bg-gray-50 hover:bg-red-600 hover:text-white border border-gray-200 hover:border-red-600 transition-all duration-200 hover:shadow-md hover:scale-101"
                          >
                            {location.name}
                          </Link>
                        ) : null;
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="relative rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url(/images/compliance_img.webp)] bg-cover bg-center"></div>

            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
                Connect with our experts and discover how we can transform your digital presence.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 group"
              >
                Request Service in Your Area
                <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceLocations;