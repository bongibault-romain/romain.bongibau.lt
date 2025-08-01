import React from "react";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import PostLink from "./link";
import PostImage from "./image";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

const transformToSlug = (input: string) => {
  return input
    .toLowerCase()
    .trim()
    .split(" ")
    .join("-")
    .split("&")
    .join("-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
};

const generateHeading = (headingLevel: number) => {
  return ({ children }: { children: React.ReactNode }) => {
    const textContent = React.Children.toArray(children).join("");
    const slug = transformToSlug(textContent);
    return React.createElement(`h${headingLevel}`, { id: slug }, [
      React.createElement("a", {
        href: `#${slug}`,
        key: `link-${slug}`,
        className: "anchor-link",
      }),
      textContent,
    ]);
  };
};

const mdxComponents = {
  h1: generateHeading(1),
  h2: generateHeading(2),
  h3: generateHeading(3),
  h4: generateHeading(4),
  Link: PostLink,
  Image: PostImage,

  table: ({ children }: { children: React.ReactNode }) => (
    <div className="overflow-x-auto mb-4 rounded-xl">
      <table className="border-collapse w-full max-w-full overflow-hidden text-left text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 mb-0 mt-0">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }: { children: React.ReactNode }) => (
    <thead className="bg-gray-100 dark:bg-gray-700">{children}</thead>
  ),
  tr: ({ children }: { children: React.ReactNode }) => (
    <tr className="border-b rounded-xl last:border-0 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
      {children}
    </tr>
  ),
  th: ({ children }: { children: React.ReactNode }) => (
    <th className="border-0 px-4 py-3 text-gray-800 dark:text-gray-100 font-semibold">
      {children}
    </th>
  ),
  td: ({ children }: { children: React.ReactNode }) => (
    <td className="border-0 px-4 py-3 text-gray-600 dark:text-gray-400">
      {children}
    </td>
  ),
  hr: () => (
    <hr className="border-gray-200 dark:border-gray-700 mt-4 mb-4 block" />
  ),
};

export function CustomMDX(props: any) {
  const rehypePrettyCodeOptions = {
    theme: "github-dark-dimmed",
    keepBackground: false,
    onVisitLine(node: any) {
      // Prevent lines from collapsing in `display: grid` mode, and
      // allow empty lines to be copy/pasted
      if (node.children.length === 0) {
        node.children = [{ type: "text", value: " " }];
      }
    },
    onVisitHighlightedLine(node: any) {
      // Each line node by default has `class="line"`.
      node.properties.className.push("line--highlighted");
    },
    onVisitHighlightedWord(node: any) {
      // Each word node has no className by default.
      node.properties.className = ["word--highlighted"];
    },
  };

  return (
    <MDXRemote
      {...props}
      components={{ ...mdxComponents, ...(props.componentsn || {}) }}
      options={{
        mdxOptions: {
          rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
          remarkPlugins: [remarkGfm]
        },
      }}
    />
  );
}
