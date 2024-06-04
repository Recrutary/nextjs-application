"use client";

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '../../context/auth.context';
import {useTranslations} from 'next-intl';

const Login = () => {
  const { loginWithGoogle, authUser } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('translation');

  useEffect(() => {
    if (authUser) {
      const segments = pathname?.split('/') || [];
      const locale = segments.length > 1 ? segments[1] : 'en';
      router.push(`/${locale}/dashboard`);
    }
  }, [authUser, router, pathname]);

  return (
    <div>
      <div className="flex min-h-screen items-center justify-center">
        <button
          onClick={loginWithGoogle}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {t('signInWithGoogle')}
        </button>
      </div>
    </div>
  );
};

export default Login;
