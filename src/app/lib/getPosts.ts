// lib/posts.ts (or utils/posts.ts)
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_PATH = path.join(process.cwd(), 'src/app/content/blog');

export function getAllPosts() {
  const filenames = fs.readdirSync(POSTS_PATH);

  return filenames.map(filename => {
    const filePath = path.join(POSTS_PATH, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);

    return {
      slug: filename.replace(/\.mdx?$/, ''),
      frontmatter: data,
    };
  });
}
