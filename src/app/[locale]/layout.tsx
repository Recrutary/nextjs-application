import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { AuthUserProvider } from '../context/auth.context';
import './globals.css';
import Navbar from '../components/navbar';

const inter = Inter({ subsets: ['latin'] });

export async function generateStaticParams() {
  const locales = ['en', 'pt'];
  return locales.map(locale => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <AuthUserProvider>
          <Navbar />
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </AuthUserProvider>
      </body>
    </html>
  );
}
