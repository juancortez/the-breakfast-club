import Link from 'next/link';

export const AppLink = ({ href, content }: { href: string; content: string }) => {
  return (
    <Link
      href={href}
      className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
    >
      {content}
    </Link>
  );
};
