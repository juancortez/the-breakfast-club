import { AppLink } from '@/app/_components/AppLink';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Breakfast Club | Self Reflection April 2025',
};

export default function BingoPage() {
  return (
    <div className="flex flex-col">
      <header className="py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Self Reflection</h1>
          <div className="text-gray-500 dark:text-gray-400 text-lg font-medium">April 11, 2025</div>
        </div>
      </header>
      <div>
        <p className="text-gray-500 dark:text-gray-400 font-small">
          Reflection on questions from Act Like Men -{' '}
          <AppLink href="/topic/act-like-men/discussion/truly-as-good-as-it-gets" content="Truly - As good as it gets" /> chapter.
        </p>
      </div>

      <div className="grid grid-cols-3 mt-4 justify-center">
        <div className="h-dvh border-r-2 border-gray-100">
          <p className="p-4 font-medium min-h-64 md:min-h-1 dark:text-white">Imagine if a light were shone on your character—what leaks would be revealed?</p>
          <hr />
        </div>
        <div className="border-r-2 border-gray-100">
          <p className="p-4 font-medium min-h-64 md:min-h-1 dark:text-white">List those areas most needing attention as you pursue quality manhood.</p>
          <hr />
        </div>
        <div>
          <p className="p-4 font-medium min-h-64 md:min-h-1 dark:text-white">
            Name a specific action you can take today to advance your pursuit of quality manhood.
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
}
