import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiSun, FiMoon, FiGlobe } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { language, toggleLanguage, t } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { path: '/', label: t.nav.home },
        { path: '/about', label: t.nav.about },
        { path: '/skills', label: t.nav.skills },
        { path: '/projects', label: t.nav.projects },
        { path: '/experience', label: t.nav.experience },
        { path: '/education', label: t.nav.education },
        { path: '/contact', label: t.nav.contact }
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-content">
                    <Link to="/" className="logo">
                        <span className="logo-text">&lt;</span>
                        <span className="logo-name">IT Engineer</span>
                        <span className="logo-text">/&gt;</span>
                    </Link>

                    <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="navbar-actions">
                        <button
                            className="icon-btn"
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                        >
                            {theme === 'dark' ? <FiSun /> : <FiMoon />}
                        </button>

                        <button
                            className="icon-btn language-btn"
                            onClick={toggleLanguage}
                            aria-label="Toggle language"
                            title={language === 'en' ? 'العربية' : 'English'}
                        >
                            <FiGlobe />
                            <span className="language-text">{language === 'en' ? 'AR' : 'EN'}</span>
                        </button>

                        <button
                            className="mobile-menu-btn"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
