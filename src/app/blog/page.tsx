 import Image from "next/image";

 
 
const blogPosts = [
  {
    title: 'What Are The Fire Extinguisher Signage Requirements In Brisbane?',
    image: '/images/extinguisher_gal/IMG_4299.JPEG',
    link: '/blog/fire-extingusher-requirements-brisbane',
    blurb: "Fire extinguisher signs are generally mounted approximately 2 metres above floor level or next to the fire extinguisher on the wall. This placement..."
  },
  {
    title: 'Fire Safety and Compliance Brisbane: Protecting Your Property and People',
    image: '/images/broken-cord.jpg',
    link: '/blog/fire-saftey-compliance-brisbane',
    blurb: 'Fire safety and compliance in Brisbane is more than a legal requirement it is a life saving priority for every business, property owner, and facility manager...'
  },
  // {
  //   title: 'What Are The Fire Extinguisher Signage Requirements In Brisbane?',
  //   image: '',
  //   blurb: 'Fire extinguisher signs are generally mounted approximately 2 metres above floor level or next to the fire extinguisher on the wall. This placement will make sure they are highly visible for everyone and can&apos;t be missed or obscured.'
  // },
  // {
  //   title: 'What Are The Fire Extinguisher Signage Requirements In Brisbane?',
  //   image: '',
  //   blurb: 'Fire extinguisher signs are generally mounted approximately 2 metres above floor level or next to the fire extinguisher on the wall. This placement will make sure they are highly visible for everyone and can&apos;t be missed or obscured.'
  // }
]


 const BlogMain = () => {
 {/* Services Section */}
 return (
 <section className="py-20 bg-white" id="services">
 <div className="container mx-auto px-4">
   <div className="text-center mb-16">
     <span className="inline-block bg-primary-10 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">Blog Posts</span>
     <h2 className="text-3xl md:text-4xl font-bold mb-4">All Blog Posts</h2>
     <p className="text-secondary-600 max-w-2xl mx-auto">Keep up to date with the latest news and updates.</p>
   </div>
   
   <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-2 gap-8">

     {/* Service 1 */}
     {blogPosts.map((blog, index) => (
     <div key={index} className="service-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 border border-gray-100">
       <div className="service-img h-48 overflow-hidden relative">
         <div className="absolute inset-0 bg-black/20 z-10"></div>
         <Image 
           src={blog.image}
           alt={blog.title}
           width={500} 
           height={300} 
           className="w-full h-full object-cover transition duration-500" 
           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
         />
         <span className="absolute top-4 right-4 bg-primary-10 text-white text-xs font-semibold px-3 py-1 rounded-full z-20">Blog Post</span>
       </div>
       <div className="p-6">
         <div className="flex items-center mb-4">
           
           <h3 className="text-xl font-bold">{blog.title}</h3>
         </div>
         <p className="text-secondary-600 mb-4">{blog.blurb}</p>
         
         
         <a href={blog.link} className="block w-full bg-primary-10 hover:bg-primary-700 text-white text-center py-2 px-4 rounded-lg font-medium transition shadow-md hover:shadow-lg">
           Read More
         </a>
       </div>
    
     </div>
     
    ))
    }
     
     
        
     
   </div>
 </div>
</section>
)
}

export default BlogMain;