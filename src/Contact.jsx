import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';

const Contact = () => {

    const { t, i18n } = useTranslation();

    return (
        <div className="contact">
            <h2>{t('contact_title')}</h2>
            <p>{t('contact_details')}</p>
        </div>
    );
}
 
export default Contact;