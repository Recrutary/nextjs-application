"use client";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Custom404() {
  const { push } = useRouter();
  const t = useTranslations("404");

  return (
    <main className="min-h-screen flex items-center justify-center flex-col bg-white text-black">
      <header className="flex flex-col items-center justify-center flex-1">
        <h1 className="font-bold text-6xl uppercase">404</h1>
        <p className="mt-2 mb-6">{t("alert")}</p>

        <button
          className="border w-28 h-12 rounded-md hover:border-blue-500 shadow-md"
          onClick={() => push("/")}
        >
          {t("button")}
        </button>
      </header>

      <footer className="border-t w-full h-14 flex gap-1 items-center justify-center bg-blue-500 text-white">
        <span>{t("footer")}</span>
        <Link
          target="_blank"
          href="https://github.com/Recrutary/nextjs-application/tree/main/src/app/locales"
          className="font-bold underline"
        >
          {t("footer_link").concat(".")}
        </Link>
      </footer>
    </main>
  );
}
