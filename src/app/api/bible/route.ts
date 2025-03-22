import { type NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const BibleScraper = require('bible-scraper');

const ESV_SCRAPER = new BibleScraper(BibleScraper.TRANSLATIONS.ESV);
const NIV_SCRAPER = new BibleScraper(BibleScraper.TRANSLATIONS.NIV);
const KJV_SCRAPER = new BibleScraper(BibleScraper.TRANSLATIONS.KJV);

type AvailableTranslations = 'esv' | 'niv' | 'kjv';
const getScraper = (translation: AvailableTranslations) => {
  switch (translation) {
    case 'esv':
      return ESV_SCRAPER;
    case 'niv':
      return NIV_SCRAPER;
    case 'kjv':
      return KJV_SCRAPER;
    default:
      return 'esv';
  }
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const translation: AvailableTranslations = (searchParams.get('translation') || 'esv') as AvailableTranslations;
  const query = searchParams.get('translationId');

  if (!query) {
    return NextResponse.json(
      {
        message: 'Must provide query to request verse.',
      },
      {
        status: 400,
      }
    );
  }

  const cacheKey = `${query}__${translation}`;
  const cachedQuery = global.cacheUser.get(cacheKey);
  if (cachedQuery) {
    return NextResponse.json({ content: cachedQuery });
  }

  const scraper = getScraper(translation);

  try {
    const { content } = await scraper.verse(query);
    global.cacheUser.set(cacheKey, content);
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
