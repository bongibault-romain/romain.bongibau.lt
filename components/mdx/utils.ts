import fs from "fs";
import matter from "gray-matter";
import path from "path";

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
    authors?: { name: string; url?: string }[];
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

export function getProjectPosts() {
    return getMDXData(path.join(process.cwd(), "content/projects"));
}