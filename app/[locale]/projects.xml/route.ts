import { getProjectPostsRSSFeed } from "@/components/mdx/utils";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { locale: string } }
) {
  const rss = getProjectPostsRSSFeed(params.locale);

  return new NextResponse(rss, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
