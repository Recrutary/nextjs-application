"use client";

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FcGoogle } from "react-icons/fc";
import { ImLinkedin2 } from "react-icons/im";
import { RiMicrosoftLoopFill } from "react-icons/ri";
import { GoArrowRight } from "react-icons/go";
import Styles from "../../../../styles/login.page.module.css";

import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '../../context/auth.context';

const LoginPage = () => {
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
    <main className={`${Styles.main} flex items-center justify-center min-h-screen`}>
      <div className="w-full sm:w-8/12 bg-white p-6 rounded-lg shadow-lg mx-4 sm:mx-0">
        <div className="flex justify-center sm:justify-start mb-4">
          <Image src="/images/uget-azul.png" alt='Uget' width={200} height={200} className="sm:w-300 sm:h-300" />
        </div>

        <section className='flex flex-col items-center sm:items-end'>
          <section className="w-full sm:w-96 flex flex-col gap-4">
            <div className='flex items-center justify-center sm:justify-center gap-4 mb-4'>
              <button className={Styles.btnSignUp} onClick={loginWithGoogle}><FcGoogle /></button>
              <button className={Styles.btnSignUp}><ImLinkedin2 className={Styles.linkedin} /></button>
              <button className={Styles.btnSignUp}><RiMicrosoftLoopFill className="text-red-600" /></button>
            </div>

            <form className='flex flex-col gap-4 w-full items-center sm:items-center' method='post'>
              <input
                placeholder={t('loginpage.inputEmail')}
                type="text"
                id="email"
                name="email"
                required
                className={`${Styles.input} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              />

              <input
                placeholder={t('loginpage.inputPassword')}
                type="password"
                id="senha"
                name="senha"
                required
                className={`${Styles.input} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              />

              <button className={`${Styles.btnNext}`}><GoArrowRight /></button>

              <p className="text-center sm:text-left" style={{ color: '#191b68', fontWeight: 'bold' }}>
                {t('loginpage.register1')} <a href='' className='underline'>{t('loginpage.registerLink')}</a> {t('loginpage.register2')}
              </p>
            </form>
          </section>
        </section>
      </div>
    </main>
  );
};

export default LoginPage;
