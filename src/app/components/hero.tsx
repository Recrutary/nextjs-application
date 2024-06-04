"use client";  // This line indicates that this file is a client component
import {useTranslations} from 'next-intl';

const Hero = () => {
  const t = useTranslations('translation');
  
  return (
    <div className="bg-blue-500 text-white p-24 text-center">
      <h1 className="text-5xl font-bold mb-4">{t('welcome')}</h1>
      <p className="text-xl">{t('description')}</p>
    </div>
  );
};

export default Hero;
