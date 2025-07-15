import React, { ReactNode, useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, Search } from 'lucide-react';

// Brisbane and surrounding locations data
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
type Region = "Queensland - Brisbane & Surrounds";

export default function MobileLocationService() {
  // Use Partial<Record<Region, boolean>> so keys are optional
  const [expandedRegions, setExpandedRegions] = useState<Partial<Record<Region, boolean>>>({});
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'accordion' | 'grid'>('accordion');

  const toggleRegion = (region: Region) => {
    setExpandedRegions(prev => ({
      ...prev,
      [region]: !prev[region],
    }));
  };

  const filteredLocations = locations.filter(location =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    "Queensland - Brisbane & Surrounds".toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredGroupedLocations = searchTerm
    ? { "Queensland - Brisbane & Surrounds": filteredLocations.map(loc => loc.name) }
    : groupedLocations;

  type LinkProps = {
    href: string;
    children: ReactNode;
    className?: string;
  };

  const Link = ({ href, children, className }: LinkProps) => (
    <a href={href} className={className}>
      {children}
    </a>
  );

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* Header with search and view toggle */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search locations or regions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setViewMode('accordion')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              viewMode === 'accordion'
                ? 'bg-red-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Accordion View
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              viewMode === 'grid'
                ? 'bg-red-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Grid View
          </button>
        </div>
      </div>

      {/* Accordion View */}
      {viewMode === 'accordion' && (
        <div className="space-y-3">
          {Object.entries(filteredGroupedLocations).map(([region, cities]) => (
            <div key={region} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleRegion(region as Region)}
                className="w-full px-4 py-4 bg-white hover:bg-gray-50 flex items-center justify-between transition-colors"
              >
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-600 rounded-full mr-3"></div>
                  <h3 className="text-lg font-semibold text-gray-900">{region}</h3>
                  <span className="ml-2 text-sm text-gray-500">({cities.length})</span>
                </div>
                {expandedRegions[region as Region] ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>

              {expandedRegions[region as Region] && (
                <div className="px-4 pb-4 bg-gray-50 border-t border-gray-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                    {cities.map(city => {
                      const location = locations.find(loc => loc.name === city);
                      return location ? (
                        <Link
                          key={location.slug}
                          href={`/all-services/${location.slug}`}
                          className="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-red-600 hover:text-white border border-gray-200 hover:border-red-600 transition-all duration-200 hover:shadow-sm"
                        >
                          <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                          {location.name}
                        </Link>
                      ) : null;
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Grid View */}
      {viewMode === 'grid' && (
        <div className="space-y-6">
          {Object.entries(filteredGroupedLocations).map(([region, cities]) => (
            <div key={region}>
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-red-600 rounded-full mr-3"></div>
                <h3 className="text-lg font-semibold text-gray-900">{region}</h3>
                <span className="ml-2 text-sm text-gray-500">({cities.length})</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {cities.map(city => {
                  const location = locations.find(loc => loc.name === city);
                  return location ? (
                    <Link
                      key={location.slug}
                      href={`/all-services/${location.slug}`}
                      className="flex items-center px-4 py-3 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-red-600 hover:text-white border border-gray-200 hover:border-red-600 transition-all duration-200 hover:shadow-sm"
                    >
                      <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                      {location.name}
                    </Link>
                  ) : null;
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No results message */}
      {Object.keys(filteredGroupedLocations).length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-2">
            <Search className="w-12 h-12 mx-auto" />
          </div>
          <p className="text-gray-500">No locations found matching &rdquo;{searchTerm}&ldquo;</p>
        </div>
      )}
    </div>
  );
}