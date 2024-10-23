import { type NextRequest } from "next/server";
import { NextResponse } from "next/server";

const BibleScraper = require("bible-scraper");

const ESV_SCRAPER = new BibleScraper(BibleScraper.TRANSLATIONS.ESV);

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("translationId");

  if (!query) {
    return NextResponse.json(
      {
        message: "Must provide query to request verse.",
      },
      {
        status: 400,
      }
    );
  }

  const cachedQuery = global.cacheUser.get(query);
  if (cachedQuery) {
    return NextResponse.json({ content: cachedQuery });
  }

  try {
    const { content } = await ESV_SCRAPER.verse(query);
    global.cacheUser.set(query, content);
    return NextResponse.json({ content });
  } catch (e) {
    return NextResponse.json(
      {
        message: `Unable to find ${query}.`,
      },
      {
        status: 404,
      }
    );
  }
}
