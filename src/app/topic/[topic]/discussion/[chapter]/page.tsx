import { Chapter } from '@/app/_components/Chapter/Chapter';
import { ChapterTopic, getChapterDataByTopic, IChapterData, topicIdentifierToReadable, TOPICS } from '@/app/_components/Chapter/data';
import Head from 'next/head';
import Link from 'next/link';

function findChapterByShortName(data: Map<string, IChapterData>, chapter: string): IChapterData | undefined {
  let chapterData: IChapterData | undefined;

  data.forEach((e) => {
    if (e.identifier.startsWith(chapter)) {
      chapterData = e;
    }
  });

  return chapterData;
}

// Set to false to only allow pre-generated paths
export const dynamicParams = false;

export const metadata = {
  title: 'The Breakfast Club',
};

const GRADIENT_ARRAY = [
  'bg-gradient-to-r from-violet-600 to-indigo-600',
  'bg-gradient-to-r from-amber-500 to-pink-500',
  'bg-gradient-to-r from-violet-200 to-pink-200',
  'bg-gradient-to-r from-pink-500 to-rose-500',
  'bg-gradient-to-r from-slate-300 to-slate-500',
  'bg-gradient-to-r from-emerald-500 to-emerald-900',
  'bg-gradient-to-r from-blue-800 to-indigo-900',
  'bg-gradient-to-r from-purple-500 to-purple-900',
  'bg-gradient-to-r from-blue-200 to-cyan-200',
  'bg-gradient-to-r from-cyan-500 to-blue-500',
  'bg-gradient-to-r from-fuchsia-500 to-pink-500',
  'bg-gradient-to-r from-slate-900 to-slate-700',
  'bg-gradient-to-r from-stone-500 to-stone-700',
  'bg-gradient-to-r from-neutral-300 to-stone-400',
  'bg-gradient-to-r from-purple-500 to-purple-900',
  'bg-gradient-to-r from-fuchsia-500 to-cyan-500',
  'bg-gradient-to-r from-lime-400 to-lime-500',
];

// Generate all static paths at build time
export async function generateStaticParams() {
  const paths: { topic: string; chapter: string }[] = [];

  // Iterate through all topics
  TOPICS.forEach((topic) => {
    const chapterData = getChapterDataByTopic(topic);

    // For each topic, get all chapters and use their identifier
    chapterData.forEach((data) => {
      paths.push({
        topic: topic,
        chapter: data.identifier, // Use identifier instead of the Map key
      });
    });
  });

  return paths;
}

export default function ChapterPage({ params: { topic, chapter } }: { params: { topic: ChapterTopic; chapter: string } }) {
  const chapterTopic = getChapterDataByTopic(topic);
  const readableTopic = topicIdentifierToReadable(topic);
  const chapterData = chapterTopic.get(chapter) || findChapterByShortName(chapterTopic, chapter);

  const title = chapterData ? `The Breakfast Club | ${readableTopic} | ${chapterData.book}` : 'The Breakfast Club';
  if (chapterData) {
    metadata.title = title;
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
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Chapter topic={readableTopic} chapter={chapter} gradient={GRADIENT_ARRAY[Math.floor(Math.random() * GRADIENT_ARRAY.length)]} {...chapterData}>
        {chapterData.element}
      </Chapter>
    </>
  );
}
