import fs from "fs/promises";
import { Metadata } from "next";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.log("Rendering Project page for slug:", slug);
  const { default: Post, metadata } = await import(`@/content/projects/${slug}.mdx`);
  const all = await import(`@/content/projects/${slug}.mdx`);

  console.log("Project metadata for slug:", slug, metadata);
  console.log("Project content for slug:", slug, all);

  return <Post />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  console.log("Generating metadata for Project page");

  const { slug } = await params;
  const { metadata } = await import(`@/content/projects/${slug}.mdx`);

  console.log("Project metadata for slug:", slug, metadata);

  return {
    title: metadata?.title,
    description: metadata?.description,
    keywords: metadata?.keywords || [],
    openGraph: {
      title: metadata?.title + ' - Bongibault Romain - Portfolio',
      description: metadata?.description,
      url: `/projects/${slug}`,
      images: metadata?.thumbnail ? [{ url: metadata.thumbnail }] : [],
      type: "article",
    },
    authors: metadata?.authors || [],
  };
}

// export async function generateStaticParams() {
//   console.log("Generating static params for Project pages");

//   const files = await fs.readdir("content/projects");

//   console.log("Project files found:", files);

//   const slugs = files
//     .filter((file) => file.endsWith(".mdx"))
//     .map((file) => ({ slug: file.replace(".mdx", "") }));

//   console.log("Generated slugs:", slugs);

//   return slugs;
// }

export const dynamicParams = false;
