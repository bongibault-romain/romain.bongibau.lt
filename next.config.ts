import createMDX from '@next/mdx'
import { NextConfig } from 'next'

const nextConfig: NextConfig = {

  // Allow .mdx extensions for files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.(md|mdx)$/,
})
 
// Combine MDX and Next.js config
export default withMDX(nextConfig)