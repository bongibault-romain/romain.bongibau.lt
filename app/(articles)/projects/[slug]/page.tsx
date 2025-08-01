import { CustomMDX } from "@/components/mdx/mdx";
import { getProjectPosts } from "@/components/mdx/utils";
import { Metadata } from "next";
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
      title: project?.metadata?.title + ' - Bongibault Romain - Portfolio',
      description: project?.metadata?.description,
      url: `/projects/${slug}`,
      images: project?.metadata?.image ? [{ url: project.metadata.image }] : [],
      type: "article",
    },
    authors: project?.metadata?.authors || [],
  };
}

export async function generateStaticParams() {
  return getProjectPosts().map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;
