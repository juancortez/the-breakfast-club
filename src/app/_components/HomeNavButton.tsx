'use client';
import { useRouter } from 'next/navigation';

type HomeButtonProps = {
  variant?: 'home' | 'series-home';
};
export const HomeButton = ({ variant = 'home' }: HomeButtonProps) => {
  const router = useRouter();
  return (
    <button
      className={`inline-flex items-center font-bold py-2 px-4 rounded ${
        variant === 'home' ? 'text-white dark:text-white bg-sky-800 hover:bg-sky-700' : 'text-white dark:text-white bg-amber-900 hover:bg-amber-800'
      }`}
      onClick={() => (variant === 'home' ? router.push('/') : router.push('../'))}
    >
      {variant === 'home' && (
        <>
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
          </svg>
          Go Home
        </>
      )}
      {variant === 'series-home' && (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-4 w-4 text-white dark:text-dark mr-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
            />
          </svg>
          Go to Series
        </>
      )}
    </button>
  );
};
