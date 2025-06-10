import { faCalendarAlt, faUser, faTags, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export interface FeaturedImage {
    url: string;
    alt: string;
    caption?: string; // caption can be optional
  }
  
  export interface BlogPostTemplateProps {
    title: string;
    content: React.ReactNode; // Accept React elements or strings
    author: string;
    date: string;
    categories: string[];
    featuredImage?: FeaturedImage;
    metaDescription: string;
  }
  

export const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({ 
    title,
    content,
    author,
    date,
    categories,
    featuredImage,
    metaDescription,
}) => {
  return (
    <>
      <Head>
        <title>{title} | Firevolt Blog</title>
        <meta name="description" content={metaDescription} />
      </Head>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back to Blog Link */}
          <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center text-primary-600 hover:text-primary-800 transition">
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Back to All Articles
            </Link>
          </div>

          {/* Article Header */}
          <article>
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
                    className="w-full h-auto object-cover"
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
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Example Related Post 1 */}
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
              
              {/* Example Related Post 2 */}
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
          </section>
        </div>
      </section>
    </>
  );
};

export default BlogPostTemplate;