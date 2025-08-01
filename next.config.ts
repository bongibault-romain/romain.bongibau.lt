import createMDX from '@next/mdx'
import { NextConfig } from 'next'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'

const nextConfig: NextConfig = {

  // Allow .mdx extensions for files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  images: {
    // allow all remote images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ]
  },

  experimental: {
    mdxRs: true, // Enable MDX support
  }
  
}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkRehype],
    rehypePlugins: [rehypeStringify],
  },
})
 
// Combine MDX and Next.js config
export default withMDX(nextConfig)