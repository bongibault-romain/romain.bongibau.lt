import fs from 'fs/promises';
import { Metadata } from 'next';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { default: Post } = await import(`@/content/projects/${slug}.mdx`)
 
  return <Post />
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  const { metadata } = await import(`@/content/projects/${slug}.mdx`);
  
  return {
    title: metadata?.title,
    description: metadata?.description,
    keywords: metadata?.keywords || [],
    openGraph: {
      title: metadata?.title,
      description: metadata?.description,
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/projects/${slug}`,
      images: metadata?.thumbnail ? [{ url: metadata.thumbnail }] : [],
      type: 'article',
    },
    authors: metadata?.authors || [],
  };
}
 
export async function generateStaticParams() {
  const files = await fs.readdir('content/projects');
  const slugs = files
    .filter(file => file.endsWith('.mdx'))
    .map(file => ({ slug: file.replace('.mdx', '') }));

  return slugs;
}
 
export const dynamicParams = false