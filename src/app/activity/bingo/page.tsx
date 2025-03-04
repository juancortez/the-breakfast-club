import { Metadata } from 'next';

const BINGO_IDENTIFIERS = [
  [
    'Invite someone new to the group',
    'Attend a group social',
    'Attend Friday Group four times',
    'Volunteer at church',
    'Set your phone to "Do Not Disturb" during the workday',
  ],
  [
    'Unplug the bedroom TV for a whole week',
    'Have coffee with someone in the group',
    'Read a whole book (e.g., James) in a public place',
    'Journal every day for a week',
    'Work out with someone in the group',
  ],
  [
    'Increase your max number of push-ups by five',
    'Invite someone new to church',
    'FREE',
    'Ask a pastor: “Recommend a book you haven’t recommended to anyone in the last month”',
    'Go on two date nights',
  ],
  [
    'Start a new positive habit',
    'Set up a budget and get an accountability partner to review it',
    'Attend church in person every weekend for a month',
    'Start each morning with prayer for a week',
    'Pray with the prayer team after a church service',
  ],
  [
    'Write down ten things you like about yourself',
    'Move your cell phone out of your bedroom at night for a week',
    'Find a mentor and an accountability buddy',
    'Reconnect with someone you love',
    'Invite a group member to your house and cook them a meal',
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
