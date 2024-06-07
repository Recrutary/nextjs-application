
import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';



export const locales = ['en', 'pt'];

export default getRequestConfig(async ({ locale }) => {
  return {
    messages: (await import(`../src/app/locales/${locale}.json`)).default
  };
});
