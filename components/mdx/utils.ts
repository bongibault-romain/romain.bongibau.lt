import fs from "fs";
import matter from "gray-matter";
import { MetadataRoute } from "next";
import { getTranslations } from "next-intl/server";
import path from "path";
import rss from 'rss';

type Metadata = {
    title: string;
    image?: {
        path: string;
        width: number;
        height: number;
    };
    description: string;
    publishedAt: string;
    keywords: string[];
    authors?: { name: string; url?: string; avatar?: string }[];
};

function parseFrontmatter(fileContent: string) {
    const result = matter(fileContent)

    return { metadata: result.data as Metadata, content: result.content };
}

function getMDXFiles(dir: string) {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
    const rawContent = fs.readFileSync(filePath, "utf-8");
    return parseFrontmatter(rawContent);
}

function getMDXData(dir: string) {
    const mdxFiles = getMDXFiles(dir);
    return mdxFiles.map((file) => {
        const { metadata, content } = readMDXFile(path.join(dir, file));
        const slug = path.basename(file, path.extname(file));
        return {
            metadata,
            slug,
            content,
        };
    });
}

export function getProjectPosts(locale: string) {
    return getMDXData(path.join(process.cwd(), "content/projects/" + locale));
}

export function generateSitemap(locale: string): MetadataRoute.Sitemap {
    const posts = getProjectPosts(locale);
    const siteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL!;

    return posts.map((post) => {
        return {
            url: `${siteUrl}/${locale}/projects/${post.slug}`,
            lastModified: post.metadata.publishedAt,
            changeFrequency: "weekly",
            priority: 0.5,
            images: post.metadata.image ? [`${siteUrl}${post.metadata.image.path}`] : []
        };
    })
}

export async function getProjectPostsRSSFeed(locale: string) {
    const t = await getTranslations({ locale, namespace: "rss" });

    const feed = new rss({
        title: t("title"),
        description: t("description"),
        language: locale,
        generator: t("generator"),
        pubDate: new Date().toUTCString(),
        ttl: 24 * 60,
        copyright: t("copyright", { year: new Date().getFullYear() }),
        feed_url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/projects.xml`,
        site_url: process.env.NEXT_PUBLIC_WEBSITE_URL!,
    });

    const posts = getProjectPosts(locale);

    posts.forEach((post) => {
        feed.item({
            title: post.metadata.title,
            description: post.metadata.description,
            url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/projects/${post.slug}`,
            date: post.metadata.publishedAt,
            author: post.metadata.authors?.map(author => author.name).join(", ") || "Romain Bongibault",
            enclosure: post.metadata.image ? {
                url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}${post.metadata.image.path}`,
                type: "image/jpeg",
            } : undefined
        });
    });

    return feed.xml({ indent: true });
}