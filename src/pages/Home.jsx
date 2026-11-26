import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    FiArrowRight,
    FiDownload,
    FiCode,
    FiCpu,
    FiDatabase,
    FiSmartphone,
    FiChevronDown,
    FiFileText,
    FiFile
} from 'react-icons/fi';
import MyPhoto from '../assets/My_photo.jpg';
import { useLanguage } from '../context/LanguageContext';
import './Home.css';

const Home = () => {
    const { t, language } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const [isCvDropdownOpen, setIsCvDropdownOpen] = useState(false);
    const [dropUp, setDropUp] = useState(false);
    const cvDropdownRef = useRef(null);

    const handleToggleDropdown = () => {
        if (!isCvDropdownOpen && cvDropdownRef.current) {
            const rect = cvDropdownRef.current.getBoundingClientRect();
            const spaceBelow = window.innerHeight - rect.bottom;
            // If space below is less than 170px, open upwards so it never overlaps other content
            if (spaceBelow < 170) {
                setDropUp(true);
            } else {
                setDropUp(false);
            }
        }
        setIsCvDropdownOpen(prev => !prev);
    };

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cvDropdownRef.current && !cvDropdownRef.current.contains(event.target)) {
                setIsCvDropdownOpen(false);
            }
        };
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsCvDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const features = language === 'ar' ? [
        { icon: <FiCode />, title: 'هندسة البرمجيات', color: '#3b82f6' },
        { icon: <FiCpu />, title: 'الذكاء الاصطناعي والرؤية الحاسوبية', color: '#8b5cf6' },
        { icon: <FiSmartphone />, title: 'تطوير الويب والموبايل', color: '#10b981' },
        { icon: <FiDatabase />, title: 'تصميم قواعد البيانات', color: '#0ea5e9' }
    ] : [
        { icon: <FiCode />, title: 'Software Engineering', color: '#3b82f6' },
        { icon: <FiCpu />, title: 'AI & Computer Vision', color: '#8b5cf6' },
        { icon: <FiSmartphone />, title: 'Web & Mobile Dev', color: '#10b981' },
        { icon: <FiDatabase />, title: 'Database Design', color: '#0ea5e9' }
    ];

    return (
        <div className="home-page">
            <section className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <div className={`hero-text ${isVisible ? 'animate-fadeInUp' : ''}`}>
                            <p className="greeting">{t.home.greeting}</p>
                            <h1 className="hero-title">
                                <span className="name-highlight">{t.home.name}</span>
                            </h1>
                            <h2 className="hero-subtitle">{t.home.title}</h2>
                            <p className="hero-description">{t.home.description}</p>

                            <div className="hero-buttons">
                                <Link to="/projects" className="btn btn-primary">
                                    {t.home.viewProjects}
                                    <FiArrowRight />
                                </Link>
                                <Link to="/contact" className="btn btn-secondary">
                                    {t.home.contactMe}
                                </Link>
                                <div className="cv-dropdown" ref={cvDropdownRef}>
                                    <button
                                        type="button"
                                        className={`btn btn-secondary cv-dropdown-btn ${isCvDropdownOpen ? 'active' : ''}`}
                                        onClick={handleToggleDropdown}
                                        aria-expanded={isCvDropdownOpen}
                                        aria-haspopup="true"
                                    >
                                        <FiDownload />
                                        <span>{t.home.downloadCV}</span>
                                        <FiChevronDown className={`cv-dropdown-arrow ${isCvDropdownOpen ? 'open' : ''}`} />
                                    </button>
                                    {isCvDropdownOpen && (
                                        <div className={`cv-dropdown-menu ${dropUp ? 'drop-up' : ''}`}>
                                            <a
                                                href="/Anas_Galal_ATS_CV.pdf"
                                                download="Anas_Galal_ATS_CV.pdf"
                                                className="cv-dropdown-item"
                                                onClick={() => setIsCvDropdownOpen(false)}
                                            >
                                                <div className="cv-item-icon-wrapper">
                                                    <FiFileText className="cv-item-icon" />
                                                </div>
                                                <div className="cv-item-content">
                                                    <span className="cv-item-title">{t.home.downloadCvAts}</span>
                                                    <span className="cv-item-badge">ATS</span>
                                                </div>
                                            </a>
                                            <a
                                                href="/Anas_Galal_CV.pdf"
                                                download="Anas_Galal_CV.pdf"
                                                className="cv-dropdown-item"
                                                onClick={() => setIsCvDropdownOpen(false)}
                                            >
                                                <div className="cv-item-icon-wrapper">
                                                    <FiFile className="cv-item-icon" />
                                                </div>
                                                <div className="cv-item-content">
                                                    <span className="cv-item-title">{t.home.downloadCvVisual}</span>
                                                    <span className="cv-item-badge">PDF</span>
                                                </div>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className={`hero-visual ${isVisible ? 'animate-fadeIn' : ''}`}>
                            <div className="visual-container">
                                <div className="floating-card card-1">
                                    <FiCode className="card-icon" />
                                    <span>{language === 'ar' ? 'برمجيات' : 'Software'}</span>
                                </div>
                                <div className="floating-card card-2">
                                    <FiCpu className="card-icon" />
                                    <span>{language === 'ar' ? 'ذكاء اصطناعي' : 'AI/ML'}</span>
                                </div>
                                <div className="floating-card card-3">
                                    <FiDatabase className="card-icon" />
                                    <span>{language === 'ar' ? 'قواعد بيانات' : 'Database'}</span>
                                </div>
                                <div className="profile-circle">
                                    <div className="circle-gradient"></div>
                                    <div className="circle-content">
                                        <img src={MyPhoto} alt="Profile" className="profile-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="scroll-indicator">
                    <div className="mouse">
                        <div className="wheel"></div>
                    </div>
                </div>
            </section>

            <section className="features-section">
                <div className="container">
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="feature-card card"
                                style={{ '--feature-color': feature.color }}
                            >
                                <div className="feature-icon">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
