import Link from 'next/link';
import { ChapterTopic, getChapterDataByTopic } from './_components/Chapter/data';

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
  topic: ChapterTopic;
  content: string;
}

const NavLink = ({ chapter, content, topic }: LinkProps) => {
  return (
    <li className="ml-4">
      <Link
        href={`/topic/${topic}/discussion/${chapter}`}
        className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
      >
        <svg
          width="3"
          height="24"
          viewBox="0 -9 3 24"
          className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
        >
          <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
        </svg>
        {content}
      </Link>
    </li>
  );
};

export default function Home() {
  return (
    <article>
      <div className="p-12 pt-6 dark:bg-gray-900">
        <ul className="text-slate-700 text-sm leading-6">
          <NavSectionBlock name="The Book of James">
            <>
              {Array.from(getChapterDataByTopic('james')).map(([, value]) => (
                <NavLink topic="james" key={value.identifier} chapter={value.identifier} content={`${value.book}`} />
              ))}
            </>
          </NavSectionBlock>

          <NavSectionBlock name="Act Like Men">
            <>
              {Array.from(getChapterDataByTopic('act-like-men')).map(([, value]) => (
                <NavLink topic="act-like-men" key={value.identifier} chapter={value.identifier} content={`${value.book}`} />
              ))}
            </>
          </NavSectionBlock>
          <NavSectionBlock name="Red Rocks Sermons">
            <>
              {Array.from(getChapterDataByTopic('red-rocks-sermons')).map(([, value]) => (
                <NavLink topic="red-rocks-sermons" key={value.identifier} chapter={value.identifier} content={`${value.title} - ${value.book}`} />
              ))}
            </>
          </NavSectionBlock>
          <NavSectionBlock name="The Book of Daniel">
            <>
              {Array.from(getChapterDataByTopic('the-book-of-daniel')).map(([, value]) => (
                <NavLink topic="the-book-of-daniel" key={value.identifier} chapter={value.identifier} content={`${value.title} - ${value.book}`} />
              ))}
            </>
          </NavSectionBlock>
          <NavSectionBlock name="Man in the Mirror">
            <>
              {Array.from(getChapterDataByTopic('man-in-the-mirror')).map(([, value]) => (
                <NavLink topic="man-in-the-mirror" key={value.identifier} chapter={value.identifier} content={`${value.title}`} />
              ))}
            </>
          </NavSectionBlock>
        </ul>
      </div>
    </article>
  );
}
