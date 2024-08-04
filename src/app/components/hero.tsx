//página feita inicialmente para teste e criação da base da plataforma

"use client";  // This line indicates that this file is a client component
import {useTranslations} from 'next-intl';

const Hero = () => {
  const t = useTranslations('translation');
  
  return (
    <div className="bg-blue-500 text-white p-24 text-center">
      <h1 className="text-5xl font-bold mb-4">{t('welcome')}</h1>
      <p className="text-xl">{t('description')}</p>

      <button className='bg-blue-950 p-4 mt-11'><a href="/login">login</a></button>
    </div>
  );
};

export default Hero;
