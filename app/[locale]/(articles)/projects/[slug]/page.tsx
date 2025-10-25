import { CustomMDX } from "@/components/mdx/mdx";
import { getProjectPosts } from "@/components/mdx/utils";
import PostDate from "@/components/PostDate";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const project = getProjectPosts(locale).find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  return (
    <>
      {/* Section header */}
      <header className="pb-8">
        {project.metadata.image && (
          <Image
            alt={project.metadata.title}
            src={project.metadata.image.path}
            className="rounded-xl w-full mb-5"
            width={project.metadata.image.width}
            height={project.metadata.image.height}
          />
        )}

        <h1 className="mb-5 text-4xl font-bold">{project.metadata.title}</h1>
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {project.metadata.authors?.map((author, index) => (
              <img
                key={index}
                className="rounded-full border-2 border-white aspect-square object-cover w-8 h-8"
                src={author.avatar || "/images/me.png"}
                width={32}
                height={32}
                alt={author.name}
              />
            ))}
          </div>
          <div className="text-sm text-gray-500">
            {project.metadata.authors?.map((author) => author.name).join(", ")}{" "}
            ·{" "}
            <span className="text-gray-700">
              <PostDate dateString={project.metadata.publishedAt} />
            </span>
          </div>
        </div>
      </header>

      <div
        className="prose max-w-none 
        text-gray-600 dark:text-gray-400 text-justify
        prose-headings:scroll-mt-24 prose-headings:font-bold prose-headings:text-gray-800 prose-headings:dark:text-gray-100 
        prose-a:hover:underline prose-a:decoration-2 prose-a:decoration-gray-300 prose-a:dark:decoration-gray-600 underline-offset-2 prose-a:text-gray-600 prose-a:dark:text-gray-400
        prose-blockquote:border-l-2 prose-blockquote:border-gray-300 prose-blockquote:dark:border-gray-700 prose-blockquote:pl-4 prose-blockquote:xl:-ml-4 prose-blockquote:font-medium prose-blockquote:italic prose-blockquote:text-gray-600 prose-blockquote:dark:text-gray-400 
        prose-strong:font-medium prose-strong:text-gray-700 prose-strong:dark:text-gray-300
        prose-code:rounded prose-code:bg-transparent prose-code:px-1 prose-code:py-0.5 prose-code:font-mono prose-code:text-gray-400 prose-code:before:content-[''] prose-code:after:content-[''] 
        prose-pre:border prose-pre:border-gray-700 prose-pre:bg-gray-800"
      >
        <CustomMDX source={project.content} />
      </div>
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  console.log("locale in project page", locale);
  const project = getProjectPosts(locale).find((p) => p.slug === slug);

  return {
    title: project?.metadata?.title,
    description: project?.metadata?.description,
    keywords: project?.metadata?.keywords || [],
    openGraph: {
      title: project?.metadata?.title + " - Bongibault Romain - Portfolio",
      description: project?.metadata?.description,
      url: `/projects/${slug}`,
      images: project?.metadata?.image
        ? [{ url: project.metadata.image.path }]
        : [],
      type: "article",
    },
    authors: project?.metadata?.authors || [],
  };
}

export async function generateStaticParams({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return getProjectPosts(locale).map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;
