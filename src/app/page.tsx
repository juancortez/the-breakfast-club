import Link from 'next/link';
import { ChapterData } from './_components/Chapter/data';
import { Chapter } from './_components/Chapter/Chapter';

interface NavSectionBlockProps {
  name: string;
  children: JSX.Element;
}
const NavSectionBlock = ({ name, children }: NavSectionBlockProps) => (
  <>
    <li>
      <a className="block py-1 font-medium font-medium text-sky-500 dark:text-sky-400">{name}</a>
    </li>
    {children}
  </>
);

interface LinkProps {
  chapter?: string;
  topic: string;
}

const NavLink = ({ chapter, topic }: LinkProps) => {
  return (
    <li className="ml-4">
      <Link href={`/chapter/${chapter}`} className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
        <svg
          width="3"
          height="24"
          viewBox="0 -9 3 24"
          className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
        >
          <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
        </svg>
        {topic}
      </Link>
    </li>
  );
};

export default function Home() {
  return (
    <article>
      <div className="p-12 pt-6 dark:bg-gray-900">
        <ul className="text-slate-700 text-sm leading-6">
          <NavSectionBlock name="The Book of Daniel">
            <>
              {Array.from(ChapterData).map(([key, value]) => (
                <NavLink key={value.identifier} chapter={value.identifier} topic={`${value.title} - ${value.book}`} />
              ))}
            </>
          </NavSectionBlock>
        </ul>
      </div>
    </article>
  );
}
