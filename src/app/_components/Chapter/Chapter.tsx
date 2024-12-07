import { IChapterData } from './data';

interface ChapterProps extends IChapterData {
  chapter: string;
  children: JSX.Element;
  topic: string;
}

export function Chapter({ book, topic, overview, gradient = 'bg-gradient-to-r to-emerald-600 from-sky-400', children }: ChapterProps) {
  return (
    <article>
      <h2 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-4xl">
        <span className={`text-transparent bg-clip-text ${gradient}`}>
          {topic} - <span>{book}</span>
        </span>
      </h2>

      <hr className="border-t border-gray-200 dark:border-gray-700"></hr>

      {overview && <blockquote className="mt-4 text-gray-900 dark:text-white">{overview}</blockquote>}

      <div className="grid pt-8 text-left md:gap-16  md:grid-cols-2">{children}</div>
    </article>
  );
}
