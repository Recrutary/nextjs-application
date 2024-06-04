// src/components/navbar.tsx
'use client';

import Link from 'next/link';
import { useAuth } from '../context/auth.context';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const { authUser, signOut } = useAuth();
  const pathname = usePathname();
  const noAuthPaths = ['/login'];

  return (
    <nav className="flex justify-between items-center p-4">
      <Link href="/" className="text-2xl font-bold">
        Recrutary
      </Link>
      <div>
        {authUser ? (
          <>
            <Link href="/dashboard" className="mr-4">
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
            <Link href="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </Link>
          )
        )}
      </div>
    </nav>
  );
};

export default Navbar;
