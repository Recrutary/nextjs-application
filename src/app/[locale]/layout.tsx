import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import { AuthUserProvider } from "../context/auth.context";
import { PageProvider } from "../context/page.context";
import Navbar from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  const locales = ["en", "pt"];
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <AuthUserProvider>
          <NextIntlClientProvider messages={messages}>
            <PageProvider>
              <Navbar locale={locale} />
              {children}
            </PageProvider>
          </NextIntlClientProvider>
        </AuthUserProvider>
      </body>
    </html>
  );
}
