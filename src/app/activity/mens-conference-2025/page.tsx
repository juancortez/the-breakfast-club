import { Metadata } from 'next';
import { ATTTRIBUTES } from './_data';

export const metadata: Metadata = {
  title: 'The Breakfast Club | Mens Conference Follow Up August 2025',
};

export default function BingoPage() {
  return (
    <div className="flex flex-col">
      <header className="py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Mens Conference 2025</h1>
          <div className="text-gray-500 dark:text-gray-400 text-lg font-medium">August 28, 2025</div>
        </div>
      </header>
      <div className="mb-2">
        <p className="text-gray-500 dark:text-gray-400 font-small">Write down 5 words that resonate most with who you are or who you want to be.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 justify-center gap-4">
        {ATTTRIBUTES.map((attribute) => (
          <p className="text-gray-500 dark:text-gray-400 font-small" key={attribute}>
            {attribute}
          </p>
        ))}
      </div>
    </div>
  );
}
