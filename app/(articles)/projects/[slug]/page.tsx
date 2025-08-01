import { CustomMDX } from "@/components/mdx/mdx";
import { getProjectPosts } from "@/components/mdx/utils";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = getProjectPosts().find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }
  
  return (
    <>
      {project.metadata.image && (
        <Image
          alt={project.metadata.title}
          src={project.metadata.image.path}
          width={project.metadata.image.width}
          height={project.metadata.image.height}
        />
      )}

      <CustomMDX source={project.content} />
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectPosts().find((p) => p.slug === slug);

  return {
    title: project?.metadata?.title,
    description: project?.metadata?.description,
    keywords: project?.metadata?.keywords || [],
    openGraph: {
      title: project?.metadata?.title + " - Bongibault Romain - Portfolio",
      description: project?.metadata?.description,
      url: `/projects/${slug}`,
      images: project?.metadata?.image ? [{ url: project.metadata.image.path }] : [],
      type: "article",
    },
    authors: project?.metadata?.authors || [],
  };
}

export async function generateStaticParams() {
  return getProjectPosts().map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;
