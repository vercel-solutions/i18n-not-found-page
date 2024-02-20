'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import type { Locale } from 'lib/i18n-config';

const translations = {
  'en-us': {
    'not-found': 'This is the root not-found page',
  },
  'es-es': {
    'not-found': 'Esta página no existe',
  },
  'fr-fr': {
    'not-found': "Cette page n'existe pas",
  },
};

const REGEX_LOCALE = /^\/{0,1}([A-Za-z]{2}-[A-Za-z]{2})\//;

export const getLocaleFromPath = (pathname: string): Locale | undefined =>
  (pathname.match(REGEX_LOCALE)?.at(1) as Locale) || undefined;

export default function NotFound() {
  const pathname = usePathname();
  const locale = useMemo(() => getLocaleFromPath(pathname), [pathname]);

  return (
    <html className="h-full" lang={locale}>
      <body>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              Get started by editing&nbsp;
              <code className="font-mono font-bold">app/not-found.tsx</code>
            </p>
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
              <a
                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                By{' '}
                <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  className="dark:invert"
                  width={100}
                  height={24}
                  priority
                />
              </a>
            </div>
          </div>

          {locale && (
            <h2 className="text-2xl">{translations[locale]['not-found']}</h2>
          )}

          <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
        </main>
      </body>
    </html>
  );
}
