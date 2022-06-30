import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';

const Navbar = () => {

    const { t, i18n } = useTranslation();

    return (
        <nav className="navbar">
            <Link to="/"><h1>{t('navbar_title')}</h1></Link>
            <div className="links">
                <Link to="/">{t('navbar_home')}</Link>
                <Link to="/contact">{t('navbar_contact')}</Link>
                <Link to="/about">{t('navbar_about')}</Link>
            </div>
            <ul className='langSelector'>
                <li></li>
            </ul>
        </nav>
    );
}

export default function App() {
    return (
        <Suspense fallback="Loading...">
            <Navbar />
        </Suspense>
    )
}