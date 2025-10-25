import { getProjectPostsRSSFeed } from "@/components/mdx/utils";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ locale: string }> }
) {
  const { locale } = await params;

  const rss = await getProjectPostsRSSFeed(locale);

  return new NextResponse(rss, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
