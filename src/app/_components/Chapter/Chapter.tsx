import { IChapterData } from './data';

interface ChapterProps extends IChapterData {
  chapter: string;
  children: JSX.Element;
}

export function Chapter({ book, gradient = 'to-emerald-600 from-sky-400', children }: ChapterProps) {
  return (
    <article>
      <h2 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-4xl">
        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>{book}</span>
      </h2>

      <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">{children}</div>
    </article>
  );
}
