import Image from 'next/image';

const Training = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Gallery Item 1 - Training */}
<div className="gallery-item group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl border border-gray-100" data-category="training">
  <div className="relative h-90 overflow-hidden">
    <Image
      src="/images/fire-extinguisher-training.webp"
      alt="Fire safety training session"
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
      <div className="text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-xl font-bold mb-1">Live Fire Training</h3>
        <p className="text-sm text-gray-200">Hands-on extinguisher training for staff</p>
      </div>
    </div>
  </div>
  <div className="absolute top-4 right-4 bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
    Training
  </div>
</div>

{/* Gallery Item 2 - Extinguishers */}
<div className="gallery-item group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl border border-gray-100" data-category="extinguishers">
  <div className="relative h-90 overflow-hidden">
    <Image
      src="/images/extinguisher_installation.jpg"
      alt="Fire extinguisher installation"
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
      <div className="text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-xl font-bold mb-1">Extinguisher Installation</h3>
        <p className="text-sm text-gray-200">Commercial kitchen fire protection</p>
      </div>
    </div>
  </div>
  <div className="absolute top-4 right-4 bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
    Extinguishers
  </div>
</div>

{/* Gallery Item 3 - Evacuation */}
<div className="gallery-item group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl border border-gray-100" data-category="evacuation">
  <div className="relative h-90 overflow-hidden">
    <Image
      src="/images/emergency_plans.jpeg"
      alt="Evacuation diagram installation"
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
      <div className="text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-xl font-bold mb-1">Evacuation Diagrams</h3>
        <p className="text-sm text-gray-200">Custom emergency exit plans</p>
      </div>
    </div>
  </div>
  <div className="absolute top-4 right-4 bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
    Evacuation
  </div>
</div>

{/* Gallery Item 4 - Compliance */}
<div className="gallery-item group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl border border-gray-100" data-category="compliance">
  <div className="relative h-90 overflow-hidden">
    <Image
      src="/images/fire_training-img.webp"
      alt="Fire safety compliance check"
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
      <div className="text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-xl font-bold mb-1">Compliance Audit</h3>
        <p className="text-sm text-gray-200">Detailed workplace safety inspection</p>
      </div>
    </div>
  </div>
  <div className="absolute top-4 right-4 bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
    Compliance
  </div>
</div>

{/* Gallery Item 5 - Training */}
<div className="gallery-item group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl border border-gray-100" data-category="training">
  <div className="relative h-90 overflow-hidden">
    <Image
      src="/images/live-fireblanket-img.webp"
      alt="Chief warden training"
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
      <div className="text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-xl font-bold mb-1">Equipment Training</h3>
        <p className="text-sm text-gray-200">Emergency response skills</p>
      </div>
    </div>
  </div>
  <div className="absolute top-4 right-4 bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
    Training
  </div>
</div>

{/* Gallery Item 6 - Extinguishers */}
<div className="gallery-item group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl border border-gray-100" data-category="extinguishers">
  <div className="relative h-90 overflow-hidden">
    <Image
      src="/images/testing_equipment-img.webp"
      alt="Fire extinguisher maintenance"
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
      <div className="text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-xl font-bold mb-1">Equipment Testing</h3>
        <p className="text-sm text-gray-200">Annual extinguisher servicing</p>
      </div>
    </div>
  </div>
  <div className="absolute top-4 right-4 bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
    Testing
  </div>
</div>
</div>
);
};

export default Training;