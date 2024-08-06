import Styles from "../../../../styles/register.module.css";
import { GoArrowRight } from "react-icons/go";
import { useTranslations } from "next-intl";

const CandidateForm = () => {
    const t = useTranslations('translation');

    return (
        <form className="flex flex-col gap-6 mt-12 sm:mt-24 sm:gap-6">
            <div>
                <label>{t('register.candidateForm.labelTypeName')}</label>
                <section className="flex gap-4 sm:gap-6">
                    <div>
                        <input
                            type="radio"
                            id="civilname"
                            name="typeName"
                            value="civilname"
                            className="mr-2"
                        />
                        <label htmlFor="civilname">{t('register.candidateForm.civilName')}</label>
                    </div>
                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="socialname"
                            name="typeName"
                            value="socialname"
                            className="mr-2"
                        />
                        <label htmlFor="socialname">{t('register.candidateForm.socialName')}</label>
                    </div>
                </section>
            </div>

            <div className="block">
                <label htmlFor="nameRegister">{t('register.candidateForm.labelName')}</label>
                <input
                    placeholder={t('register.candidateForm.insertName')}
                    type="text"
                    id="nameRegister"
                    name="nameRegister"
                    className={`${Styles.input} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                />
            </div>

            <div className="block">
                <label htmlFor="birthRegister">{t('register.candidateForm.labelBirthday')}</label>
                <input
                    type="date"
                    id="birthRegister"
                    name="birthRegister"
                    className={`${Styles.input} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                />
            </div>

            <div className="block">
                <label htmlFor="emailRegister">{t('register.candidateForm.labelPopularEmail')}</label>
                <input
                    placeholder="ex@e-mail.com"
                    type="email"
                    id="emailRegister"
                    name="emailRegister"
                    className={`${Styles.input} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                />
            </div>

            <div>
                <label htmlFor="passwordRegister">{t('register.candidateForm.labelPassword')}</label>
                <input
                    type="password"
                    id="passwordRegister"
                    placeholder="**********"
                    name="passwordRegister"
                    className={`${Styles.input} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                /> 
                <br />
                <input
                    placeholder={t('register.candidateForm.confirmPassword')}
                    type="password"
                    id="confirmPasswordRegister"
                    name="confirmPasswordRegister"
                    className={`${Styles.input} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2`}
                />
            </div>

            <button className={`${Styles.btnNext} mt-6 mx-auto`}>
                <GoArrowRight />
            </button>
        </form>
    );
};

export default CandidateForm;
