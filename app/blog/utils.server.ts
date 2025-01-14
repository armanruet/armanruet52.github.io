import { compileMDX } from 'next-mdx-remote/rsc';
import type { MDXRemoteProps } from 'next-mdx-remote';
import type { Options } from 'rehype-pretty-code';
import rehypePrettyCode from 'rehype-pretty-code';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define the pretty code options
const prettyCodeOptions: Partial<Options> = {
  theme: 'github-dark',
  keepBackground: true,
};

// Define the type for frontmatter
interface Frontmatter {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  image?: string;
  [key: string]: any;
}

export interface BlogPost {
  slug: string;
  frontmatter: Frontmatter;
}

interface PostData {
  content: any;
  metadata: Frontmatter;
}

export async function getMDXContent(source: string) {
  const { content, frontmatter } = await compileMDX<Frontmatter>({
    source,
    options: {
      mdxOptions: {
        // @ts-ignore - Known issue with vfile versions
        rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
        development: process.env.NODE_ENV === 'development',
      },
      parseFrontmatter: true,
    },
  });

  return { content, frontmatter };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const postsDirectory = path.join(process.cwd(), 'app/content/blog');
  if (!fs.existsSync(postsDirectory)) {
    console.warn(`Posts directory not found: ${postsDirectory}`);
    return [];
  }

  const files = fs.readdirSync(postsDirectory).filter(file => file.endsWith('.mdx'));
  
  const posts = files.map(fileName => {
    const slug = fileName.replace('.mdx', '');
    const filePath = path.join(postsDirectory, fileName);
    const { data } = matter(fs.readFileSync(filePath, 'utf-8'));
    
    return {
      slug,
      frontmatter: data as Frontmatter
    };
  });

  return posts
    .filter(post => !post.frontmatter.draft)
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}

export async function getPostFromSlug(slug: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), 'app/content/blog', `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Post not found: ${slug}`);
  }
  
  const source = fs.readFileSync(filePath, 'utf-8');
  const { content, frontmatter } = await getMDXContent(source);

  return {
    content,
    metadata: frontmatter
  };
}
