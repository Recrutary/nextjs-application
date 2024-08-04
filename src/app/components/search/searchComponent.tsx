"use client";

import { useTranslations } from "next-intl";
import Image from 'next/image';
import { GoArrowRight } from "react-icons/go";
import Styles from "../../../../styles/search.module.css";

const SearchComponent = () => {
  const t = useTranslations('translation');

  return (
      <>
      <Image src="/images/uget-azul.png" alt='Uget' width={200} height={200} className="sm:w-300 sm:h-300" />

      <div className="my-32 text-center flex flex-col items-center">
      <h1 className="text-[#191b68] text-[2rem]">{t('search.search_oportunity')}</h1>
      
      <div className={`${Styles.input} flex w-full max-w-[50rem] overflow-hidden mt-4 px-4 sm:px-0`}>
            <input
              placeholder={t('engineer')} type="search"
              className="appearance-none w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button className={`${Styles.btnNext}`}><GoArrowRight /></button>
          </div>
       </div>
      </>
  );
};

export default SearchComponent;
