import { Chapter } from '@/app/_components/Chapter/Chapter';
import { ChapterData, IChapterData } from '@/app/_components/Chapter/data';
import Head from 'next/head';
import Link from 'next/link';

function findChapterByShortName(chapter: string): IChapterData | undefined {
  let chapterData: IChapterData | undefined;

  ChapterData.forEach((e) => {
    if (e.identifier === chapter) {
      chapterData = e;
    }
  });

  return chapterData;
}

export const revalidate = 60;

export const dynamicParams = true;

export const metadata = {
  title: 'The Breakfast Club',
};

const getChapterIdentifiers = () => {
  const identifiers: { chapter: string }[] = [];
  ChapterData.forEach((e) => identifiers.push({ chapter: e.identifier }));
  return identifiers;
};

export default function ChapterPage({ params: { chapter } }: { params: { chapter: string } }) {
  const chapterData = ChapterData.get(chapter) || findChapterByShortName(chapter);

  if (chapterData) {
    metadata.title = `The Breakfast Club - ${chapterData.book}`;
  }

  if (!chapterData) {
    return (
      <article className="h-screen">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-white">404</h1>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can&apos;t find that page.</p>

            <button className="inline-flex text-black dark:text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">
              <Link href="/">Back to Homepage</Link>
            </button>
          </div>
        </div>
      </article>
    );
  }

  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Chapter chapter={chapter} {...chapterData}>
        {chapterData.element}
      </Chapter>
    </>
  );
}

export const generateStaticParams = () => {
  return getChapterIdentifiers();
};
