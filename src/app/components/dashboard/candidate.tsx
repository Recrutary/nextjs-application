"use client";

import { GoArrowRight } from "react-icons/go";
import { FaQuestionCircle } from "react-icons/fa";
import ProtectedRoute from "@/app/components/protected.route";
import { useAuth } from "@/app/context/auth.context";
import Styles from "../../../../styles/candidate.module.css";
import { Switch } from '@headlessui/react';
import { useState, useRef } from 'react';
import { useTranslations } from "next-intl";

const DashboardCandidate = () => {
  const [enabled, setEnabled] = useState(false);
  const [isTooltipVisible, setTooltipVisible] = useState(false); // Novo estado para visibilidade do tooltip
  const { authUser } = useAuth();
  const t = useTranslations('translation');
  const tr = useTranslations('tooltips');
  const tooltipRef = useRef<HTMLDivElement>(null);

  return (
    <ProtectedRoute>
      <main className="bg-[#f9f9f9] flex items-center justify-center min-h-screen">
        <section className="relative w-full sm:w-8/12 bg-white p-6 rounded-lg shadow-lg mx-4 sm:mx-0">
          <h1 className="text-[#191b68] mb-4 font-bold text-[2.5rem]">
            {t('welcomeMessage', { name: authUser?.name || 'User' })}
          </h1>
          <p className='text-[#191b68]'>{t('dashboardCandidate.here')}</p>

          <div className={`${Styles.input} flex w-[50%] p-[0.1rem] overflow-hidden mt-16 mb-4`}>
            <input
              placeholder={t('engineer')} type="search" id="search" name="search" required
              className="appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button className={`${Styles.btnNext}`}><GoArrowRight /></button>
          </div>

          <div className="relative inline-block ml-6">
            <p className="text-[#191b68] font-bold flex items-center gap-2">
              {t('dashboardCandidate.candidatura')}
              <span className="relative"
                onMouseEnter={() => setTooltipVisible(true)}
                onMouseLeave={() => setTooltipVisible(false)}
              >
                <FaQuestionCircle className="text-[#191b68]" />
                <div ref={tooltipRef}
                  className="absolute w-72 top-[-10] bg-[#424242] text-[#9E9E9E] text-sm rounded-lg shadow-lg p-2 z-10 transition-opacity duration-200"
                  style={{ visibility: isTooltipVisible ? 'visible' : 'hidden', opacity: isTooltipVisible ? 1 : 0 }}
                >
                  {tr('autoApplication')}
                </div>
              </span>
            </p>
          </div>

          <span className="flex gap-2 ml-10">
            {t('yes')}
            <Switch checked={enabled} onChange={setEnabled}
              className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-[#191b68] p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-[#191b68] data-[checked]:[#191b68]"
            >
              <span aria-hidden="true"
                className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
              />
            </Switch>
            {t('no')}
          </span>
        </section>
      </main>
    </ProtectedRoute>
  );
};

export default DashboardCandidate;
