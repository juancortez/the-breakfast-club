'use client';
import { useRouter } from 'next/navigation';

export const HomeButton = () => {
  const router = useRouter();
  return (
    <button
      className="inline-flex items-center text-black dark:text-white bg-sky-800 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => router.push('/')}
    >
      <svg
        className="h-4 w-4 text-white dark:text-dark mr-1"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /> <polyline points="9 22 9 12 15 12 15 22" />
      </svg>{' '}
      Go Home
    </button>
  );
};
