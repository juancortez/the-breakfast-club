import { Metadata } from 'next';

const BINGO_IDENTIFIERS = [
  ['Invite someone to the group', 'Attend group social', 'Attend Friday (4) times', 'Volunteer at church', 'Set phone to "Do Not Disturb" during workday'],
  [
    'Unplug bedroom TV for a whole week',
    'Have coffee with someone in group',
    'Read a whole book (i.e. James) in a public place',
    'Journal for a week',
    'Work out with someone in the group',
  ],
  [
    'Increase max number of pushups by 5',
    'Invite someone new to church',
    'FREE',
    'Ask a pastor: “recommend me a book that you haven’t recommended to anyone in the last month”',
    'Go on 2 date nights',
  ],
  [
    'Start a new positive habit',
    'Setup a budget and get an accountability partner to look it over',
    'Go in person to church every weekend for a month. ',
    'Start each morning with prayer for a week. ',
    'Pray with the Prayer team after church service',
  ],
  [
    'Write down 10 things you like about yourself',
    'Move your cell phone permanently out of your bedroom at night for a week',
    'Find a mentor and an accountability buddy. ',
    'Reconnect with someone you love.',
    'Invite a member of group to your house and cook them a meal.',
  ],
];

export const metadata: Metadata = {
  title: 'The Breakfast Club | Bingo',
};

export default function BingoPage() {
  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Bingo!</h1>
          <div className="text-gray-500 dark:text-gray-400 text-lg font-medium">March 1, 2025 - April 30, 2025</div>
        </div>
      </header>
      <div className="flex-1 grid grid-cols-12 gap-6 py-6">
        <div className="col-span-12 flex flex-col gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-2">
            <div className="grid grid-cols-5 gap-4 text-center max-sm:min-h-screen max-md:min-h-screen">
              {Array.from({ length: 25 }, (_, i) => {
                const column = i % 5;
                const row = Math.floor(i / 5);
                return (
                  <div
                    key={i}
                    className="md:aspect-square sm:aspect-auto bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center text-xs font-bold text-gray-900 dark:text-gray-100 "
                  >
                    {BINGO_IDENTIFIERS[row][column]}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
