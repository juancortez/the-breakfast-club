'use client';

import { ATTTRIBUTES } from './_data';
import { MouseEvent, useCallback, useState } from 'react';

const Attribute = ({ attribute, isSelected }: { attribute: string; isSelected: boolean }) => {
  const isSelectedClass = isSelected ? 'text-blue-500 dark:text-indigo-900' : 'text-gray-500 dark:text-gray-400';

  return (
    <p className={`font-small cursor-pointer hover:underline ${isSelectedClass}`} data-identifier={attribute}>
      {attribute}
    </p>
  );
};

export default function BingoPage() {
  const [selectedAttributes, setSelectedAttributes] = useState<string[]>([]);

  const onClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const target = event.target as HTMLDivElement;

      if (!target) {
        return;
      }

      const attribute = target.closest('[data-identifier]');
      if (!attribute) {
        return;
      }
      const word = attribute.getAttribute('data-identifier');
      if (!word) {
        return;
      }

      setSelectedAttributes((state) => {
        const exists = state.some((s) => s === word);

        if (exists) {
          state = state.filter((s) => s !== word);
          return state;
        }

        return [...state, word];
      });
    },
    [setSelectedAttributes]
  );

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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 justify-center gap-4" onClick={onClick}>
        {ATTTRIBUTES.map((attribute) => (
          <Attribute key={attribute} attribute={attribute} isSelected={selectedAttributes.some((attr) => attr === attribute)} />
        ))}
      </div>
    </div>
  );
}
