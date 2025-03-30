import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { ClientProvider } from './_context/ClientContext';
import { TranslationSelector } from './_components/TranslationSelector';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Breakfast Club',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-900 h-[100dvh]`}>
        <main>
          <ClientProvider>
            <section>
              <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="flex justify-between flex-row">
                  <h1 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    <Link href="/">The Breakfast Club</Link>{' '}
                  </h1>
                  <TranslationSelector />
                </div>

                <div className="pt-2">{children}</div>
              </div>
            </section>
          </ClientProvider>
        </main>
      </body>
    </html>
  );
}
