import { getProjectPostsRSSFeed } from '@/components/mdx/utils';
import { NextResponse } from 'next/server';

export async function GET() {
    const rss = getProjectPostsRSSFeed();

    return new NextResponse(rss, {
        status: 200,
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}