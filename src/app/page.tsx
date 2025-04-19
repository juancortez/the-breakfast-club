import { HomeTopicNavSection } from './_components/Chapter/HomeTopicNavSection';

export default function Home() {
  return (
    <article>
      <div className="p-12 pt-6 dark:bg-gray-900">
        <ul className="text-slate-700 text-sm leading-6">
          <HomeTopicNavSection />
        </ul>
      </div>
    </article>
  );
}
