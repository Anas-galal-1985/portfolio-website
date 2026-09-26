import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const Footer = () => {
    const { t } = useLanguage();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { icon: <FiGithub />, url: 'https://github.com', label: 'GitHub' },
        { icon: <FiLinkedin />, url: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: <FiMail />, url: 'mailto:anasxanoos@gmail.com', label: 'Email' }
    ];

    const quickLinks = [
        { path: '/', label: t.nav.home },
        { path: '/about', label: t.nav.about },
        { path: '/skills', label: t.nav.skills },
        { path: '/projects', label: t.nav.projects },
        { path: '/contact', label: t.nav.contact }
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="footer-logo">
                            <span className="logo-text">&lt;</span>
                            <span className="logo-name">IT Engineer</span>
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
                        <h4 className="footer-title">{t.nav.home}</h4>
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
                            <p>Email: anasxanoos@gmail.com</p>
                            <p>Phone: +967776455364</p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">
                        © {new Date().getFullYear()} IT Engineer. All rights reserved.
                    </p>
                    <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
                        <FiArrowUp />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
