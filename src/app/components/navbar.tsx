"use client";

import Link from "next/link";
import { useRouter, usePathname, notFound } from "next/navigation";
import { useAuth } from "../context/auth.context";
import { usePage } from "../context/page.context";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import LanguageSelector from "./language.selector";
import { locales } from "@/i18n";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = ({ locale }: { locale: string }) => {
  const { authUser, signOut, loginWithGoogle } = useAuth();
  const { page } = usePage();
  const router = useRouter();
  const pathname = usePathname();

  const links = authUser
    ? [{ name: "Dashboard", href: `/${locale}/dashboard`, id: "dashboard" }]
    : [];

  if (!locales.includes(locale)) {
    notFound();
  }

  const changeLanguage = (locale: string) => {
    const newPathname = pathname ? `/${locale}${pathname.slice(3)}` : "";
    router.push(newPathname);
  };

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <Link href={`/${locale}`}>
                    <span className="text-xl font-bold">Recrutary</span>
                  </Link>
                </div>
                {authUser && (
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    {links.map((link) => (
                      <Link
                        key={link.id}
                        href={link.href}
                        className={classNames(
                          page === link.id
                            ? "border-indigo-500 text-gray-900"
                            : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                          "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
                        )}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center gap-3 align-middle items-center">
                <LanguageSelector
                  locale={locale}
                  changeLanguage={changeLanguage}
                />
                {authUser ? (
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={authUser.imageUrl || "/default-avatar.png"}
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={signOut}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Logout
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <button
                    onClick={loginWithGoogle}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10 flex items-center"
                  >
                    Login
                  </button>
                )}
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {authUser &&
                links.map((link) => (
                  <Disclosure.Button
                    key={link.id}
                    as="a"
                    href={link.href}
                    className={classNames(
                      page === link.id
                        ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                        : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700",
                      "block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
                    )}
                  >
                    {link.name}
                  </Disclosure.Button>
                ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
