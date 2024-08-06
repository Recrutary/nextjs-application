import Styles from "../../../../styles/register.module.css";
import { GoArrowRight } from "react-icons/go";
import { useTranslations } from "next-intl";

const companyForm = () => {
    const t = useTranslations('translation');

    return (
      <>
      <form className="flex flex-col gap-6 mt-12 sm:mt-24 sm:gap-6 pb-11">
            <h2 className="text-[1.5rem]">{t('register.companyForm.talk')}</h2>
                <input
                    placeholder={t('register.companyForm.insertName')}
                    type="text"
                    id="nameRegister"
                    name="nameRegister"
                    className={`${Styles.input} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                />
            
                <input
                    placeholder={t('register.companyForm.insertWhatsapp')}
                    type="text"
                    id="whatsappRegister"
                    name="whatsappRegister"
                    className={`${Styles.input} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                />
               
                <input
                    placeholder={t('register.companyForm.insertEmail')}
                    type="text"
                    id="emailRegister"
                    name="emailRegister"
                    className={`${Styles.input} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                />

                <input
                    type="text"
                    id="companyNameRegister"
                    placeholder={t('register.companyForm.insertCompanyName')}
                    name="companyNameRegister"
                    className={`${Styles.input} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                />

            <button className={`${Styles.btnNext} mt-6 mx-auto`}>
                <GoArrowRight />
            </button>
        </form>
      </>
    );
  };
  
  export default companyForm;