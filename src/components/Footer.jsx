import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const Footer = () => {
    const { t, language } = useLanguage();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { icon: <FiGithub />, url: 'https://github.com/Anas-galal-1985', label: 'GitHub' },
        { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/anas-galal-7b7937439', label: 'LinkedIn' },
        { icon: <FiMail />, url: 'https://mail.google.com/mail/?view=cm&fs=1&to=anasxanoos@gmail.com', label: 'Email' }
    ];

    const quickLinks = [
        { path: '/', label: t.nav.home },
        { path: '/about', label: t.nav.about },
        { path: '/skills', label: t.nav.skills },
        { path: '/projects', label: t.nav.projects },
        { path: '/experience', label: t.nav.experience },
        { path: '/education', label: t.nav.education },
        { path: '/contact', label: t.nav.contact }
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="footer-logo">
                            <span className="logo-text">&lt;</span>
                            <span className="logo-name">{language === 'ar' ? 'أنس جلال' : 'Anas Galal'}</span>
                            <span className="logo-text">/&gt;</span>
                        </div>
                        <p className="footer-description">
                            {t.home.subtitle}
                        </p>
                        <div className="social-links">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label={link.label}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-title">{t.footer.quickLinks}</h4>
                        <div className="footer-links">
                            {quickLinks.map((link, index) => (
                                <Link key={index} to={link.path} className="footer-link">
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-title">{t.contact.info}</h4>
                        <div className="footer-info">
                            <p>{t.contact.emailLabel}: anasxanoos@gmail.com</p>
                            <p>{t.contact.phoneLabel}: +967776455364</p>
                            <p>{t.contact.locationLabel}: {t.footer.location}</p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">
                        © {new Date().getFullYear()} {t.footer.copyright}
                    </p>
                    <button className="back-to-top" onClick={scrollToTop} aria-label={t.common.backToTop}>
                        <FiArrowUp />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
