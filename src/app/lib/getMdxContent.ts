import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_PATH = path.join(process.cwd(), 'src/app/content/blog');

interface FeaturedImage {
  url: string;
  alt: string;
  caption?: string;
}

interface Frontmatter {
  title: string;
  slug: string;
  author: string;
  date: string;
  categories: string[];
  metaDescription: string;
  featuredImage?: FeaturedImage;
}

export async function getPostBySlug(slug: string): Promise<{
  frontmatter: Frontmatter;
  content: string; // correct type
}> {
  const filePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(source);

  return {
    frontmatter: data as Frontmatter,
    content: content, // return the whole object, not just compiledSource
  };
}



