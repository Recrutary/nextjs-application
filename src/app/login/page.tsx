"use client";

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '../context/auth.context';

const Login = () => {
  const { loginWithGoogle, authUser } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (authUser && pathname !== '/dashboard') {
      router.push('/dashboard');
    }
  }, [authUser, router, pathname]);

  return (
    <div>
      <div className="flex min-h-screen items-center justify-center">
        <button
          onClick={loginWithGoogle}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
