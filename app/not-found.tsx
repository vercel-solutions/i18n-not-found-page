import { i18n, type Locale } from 'lib/i18n-config';
import NotFound from 'components/not-found';
import { NotFoundClientSide } from '@/components/not-found-client-side';

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

function generateNotFoundElement(locale: Locale) {
  return {
    locale,
    element: <NotFound locale={locale} translations={translations[locale]} />,
  };
}

export default function NotFoundPage() {
  const defaultLocaleElement = generateNotFoundElement(i18n.defaultLocale);
  const localeElements = i18n.locales.map(generateNotFoundElement);

  return (
    <NotFoundClientSide
      defaultElement={defaultLocaleElement.element}
      localeElements={localeElements}
    />
  );
}
