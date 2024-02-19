'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

const REGEX_LOCALE = /^\/{0,1}([A-Za-z]{2}-[A-Za-z]{2})\//;

export const getLocaleFromPath = (pathname: string): string | undefined =>
  pathname.match(REGEX_LOCALE)?.at(1) || undefined;

export function NotFoundClientSide({
  defaultElement,
  localeElements,
}: {
  defaultElement: JSX.Element;
  localeElements: { element: JSX.Element; locale: string }[];
}) {
  const pathname = usePathname();
  const locale = useMemo(() => getLocaleFromPath(pathname) || 'en', [pathname]);
  const element = useMemo(
    () =>
      localeElements.find((e) => e.locale === locale)?.element ??
      defaultElement,
    [defaultElement, localeElements, locale]
  );

  return <>{element}</>;
}
