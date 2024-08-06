"use client";
import { useState } from 'react';
import CandidateForm from '@/app/components/register/candidateForm';
import CompanyForm from '@/app/components/register/companyForm';
import { GoArrowRight } from "react-icons/go";
import Styles from "../../../../styles/register.module.css";
import Image from 'next/image';
import { useTranslations } from "next-intl";

const Register = () => {
    const [typeUser, setTypeUser] = useState<'candidate' | 'company' | null>(null);
    const [selectedType, setSelectedType] = useState<'candidate' | 'company' | null>(null);
    const t = useTranslations('translation');

    const handleNextClick = () => {
        if (selectedType) {
            setTypeUser(selectedType);
        }
    };

    return (
        <main className="bg-[#f9f9f9] flex items-center justify-center min-h-screen">
            <section className="relative w-full sm:w-8/12 bg-white p-6 rounded-lg shadow-lg mx-4 sm:mx-0 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className='text-[#191b68] pr-10'>
                    {typeUser == 'candidate' || typeUser == null ? (
                        <>
                            <h1 className="mb-4 text-[2.5rem]">{t('register.title1')} <br/>{t('register.title2')}</h1>
                            <p>{t('register.text1')} <br />{t('register.text2')}</p>
                        </>
                    ) : (
                        <>
                        <Image src="/images/uget-azul.png" alt='Uget' width={200} height={200} className="sm:w-300 sm:h-300" />
                        <h1 className="mb-4 sm:text-[2.5rem] text-[2.2rem] text-nowrap">
                        {t('register.companyForm.companytitle1')}  <br />
                        {t('register.companyForm.companytitle2')}</h1>
                        <p>{t('register.companyForm.companytext1')}</p>
                        </>
                    )}
                </div>
                <div className='text-[#191b68]'>
                    {typeUser == null ? (
                        <div className="flex flex-col items-center mt-24 sm:mt-64">
                            <p>{t('register.label_typeUser')}</p>
                            <section className='flex gap-6'>
                                <div>
                                    <input
                                        type="radio"
                                        id="candidate"
                                        name="typeUser"
                                        value="candidate"
                                        className="mr-2"
                                        onChange={() => setSelectedType('candidate')}
                                    />
                                    <label htmlFor="candidate">{t('register.radiobutton1')}</label>
                                </div>
                                <div className="flex items-center mb-2">
                                    <input
                                        type="radio"
                                        id="company"
                                        name="typeUser"
                                        value="company"
                                        className="mr-2"
                                        onChange={() => setSelectedType('company')}
                                    />
                                    <label htmlFor="company">{t('register.radiobutton2')}</label>
                                </div>
                            </section>

                            <button onClick={handleNextClick} className={`${Styles.btnNext} mt-6`}><GoArrowRight /></button>
                        </div>
                    ) : (
                        typeUser === 'candidate' ? <CandidateForm /> : <CompanyForm />
                    )
                }
                </div>
            </section>
        </main>
    );
};

export default Register;
