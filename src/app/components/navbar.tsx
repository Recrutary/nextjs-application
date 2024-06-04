'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '../context/auth.context';

const Navbar = () => {
  const { authUser, signOut } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  // Extract the locale from the pathname
  const segments = pathname?.split('/') || [];
  const locale = segments.length > 1 ? segments[1] : 'en';
  const noAuthPaths = [`/${locale}/login`];

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    const newPathname = pathname ? `/${newLocale}${pathname.slice(3)}` : '';
    router.push(newPathname);
  };

  return (
    <nav className="flex justify-between items-center p-4">
      <Link href={`/${locale}`} className="text-2xl font-bold">
        Recrutary
      </Link>
      <div>
        <select value={locale} onChange={changeLanguage} className="mr-4 p-2 border rounded">
          <option value="en">English</option>
          <option value="pt">Português</option>
        </select>
        {authUser ? (
          <>
            <Link href={`/${locale}/dashboard`} className="mr-4">
              Dashboard
            </Link>
            <button
              onClick={signOut}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          !noAuthPaths.includes(pathname || '') && (
            <Link href={`/${locale}/login`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </Link>
          )
        )}
      </div>
    </nav>
  );
};

export default Navbar;
