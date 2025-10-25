import createMDX from "@next/mdx";
import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  // Allow .mdx extensions for files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.(md|mdx)$/,
});

const withNextIntl = createNextIntlPlugin();

// Combine MDX and Next.js config
export default withMDX(withNextIntl(nextConfig));
