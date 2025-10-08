import { ChapterTopic, topicIdentifierToReadable } from '@/app/_components/Chapter/data';
import { HomeTopicNavSection } from '@/app/_components/Chapter/HomeTopicNavSection';
import { HomeButton } from '@/app/_components/HomeNavButton';
import Head from 'next/head';
import Link from 'next/link';

export const metadata = {
  title: 'The Breakfast Club',
};

export default function TopicPage({ params: { topic } }: { params: { topic: ChapterTopic } }) {
  const readableTopic = topicIdentifierToReadable(topic);

  const title = readableTopic ? `The Breakfast Club | ${readableTopic}` : 'The Breakfast Club';
  if (title) {
    metadata.title = title;
  }

  if (!title) {
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

      <article>
        <div className="p-12 pt-6 dark:bg-gray-900">
          <ul className="text-slate-700 text-sm leading-6">
            <HomeTopicNavSection filteredTopics={[topic]} />
          </ul>
        </div>

        <section className="flex justify-center items-center mt-4 sticky top-[90vh]">
          <HomeButton />
        </section>
      </article>
    </>
  );
}
