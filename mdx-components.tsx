import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

const components: MDXComponents = {
  // Allows customizing built-in components, e.g. to add styling.
  h1: ({ children }) => (
    <h1 className="font-inter-tight font-bold text-gray-800 dark:text-gray-100 text-4xl mt-0 mb-4">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-inter-tight font-semibold text-gray-800 dark:text-gray-100 text-3xl mt-0 mb-4">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-inter-tight font-medium text-gray-800 dark:text-gray-100 text-2xl mt-0 mb-4">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="font-inter-tight font-medium text-gray-800 dark:text-gray-100 text-xl mt-0 mb-4">
      {children}
    </h4>
  ),
  h5: ({ children }) => (
    <h5 className="font-inter-tight font-medium text-gray-800 dark:text-gray-100 text-lg mt-0 mb-4">
      {children}
    </h5>
  ),
  h6: ({ children }) => (
    <h6 className="font-inter-tight font-medium text-gray-800 dark:text-gray-100 text-base mt-0 mb-4">
      {children}
    </h6>
  ),
  p: ({ children }) => (
    <p className="text-gray-600 dark:text-gray-400 mb-4 text-justify mt-0">
      {children}
    </p>
  ),
  a: ({ children, href }) => (
    <a
      className="hover:underline decoration-2 decoration-gray-300 dark:decoration-gray-600 underline-offset-2"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  ),
  input: (props) => {
    if (props.type === "checkbox") {
      return (
        <input
          type="checkbox"
          checked={props.checked}
          readOnly
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600"
          {...props}
        />
      );
    }
    return <input {...props} />;
  },
  li: ({ children, ...props }) => (
    <li
      {...props}
      className="text-gray-600 dark:text-gray-400 mb-2 list-inside"
    >
      {props?.className?.includes("task-list-item") ? (
        <span className="inline-flex items-center gap-2">{children}</span>
      ) : (
        children
      )}
    </li>
  ),
  ul: ({ children, ...props }) => (
    <ul
      {...props}
      className="text-gray-600 dark:text-gray-400 mb-4 list-disc list-inside py-0 mt-0 mx-0 marker:text-gray-400 dark:marker:text-white"
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol
      {...props}
      className="text-gray-600 dark:text-gray-400 mb-4 list-decimal list-inside py-0 mt-0 mx-0 marker:text-gray-400 dark:marker:text-white"
    >
      {children}
    </ol>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto mb-4">
      <table className="border-collapse w-full max-w-full overflow-hidden text-left text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 rounded-xl mb-0 mt-0">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-gray-100 dark:bg-gray-700">{children}</thead>
  ),
  tr: ({ children }) => (
    <tr className="border-b rounded-xl last:border-0 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
      {children}
    </tr>
  ),
  th: ({ children }) => (
    <th className="border-0 px-4 py-3 text-gray-800 dark:text-gray-100 font-semibold">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-0 px-4 py-3 text-gray-600 dark:text-gray-400">
      {children}
    </td>
  ),
  hr: () => (
    <hr className="border-gray-200 dark:border-gray-700 mt-4 mb-4 block" />
  ),
  img: ({ ...props }) => (
    <img {...props} className="h-auto rounded-xl object-cover m-0!" />
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
