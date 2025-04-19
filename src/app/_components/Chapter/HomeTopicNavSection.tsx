import Link from 'next/link';
import { ChapterTopic, getChapterDataByTopic, topicIdentifierToReadable, TOPICS } from './data';
import React, { useMemo } from 'react';

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
          <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
        </svg>
        {content}
      </Link>
    </li>
  );
};

export const HomeTopicNavSection = () => {
  const topics = useMemo(
    () =>
      TOPICS.map((t) => {
        const readableTopic = topicIdentifierToReadable(t);
        return (
          <NavSectionBlock key={t} name={readableTopic}>
            <>
              {Array.from(getChapterDataByTopic(t)).map(([, value]) => (
                <NavLink topic={t} key={value.identifier} chapter={value.identifier} content={value.book} />
              ))}
            </>
          </NavSectionBlock>
        );
      }),
    []
  );

  return <div>{topics}</div>;
};
