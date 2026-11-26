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
    FiFile,
    FiMonitor,
    FiZap
} from 'react-icons/fi';
import { motion, useInView } from 'framer-motion';
import MyPhoto from '../assets/My_photo.jpg';
import { useLanguage } from '../context/LanguageContext';
import { getProjectsData } from '../data/projectsData';
import ProjectPreview from '../components/ProjectPreview';
import ProjectModal from '../components/ProjectModal';
import './Home.css';

// Animated numerical counter triggered once when scrolled into view
const StatCounter = ({ stat, index }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.15 });

    useEffect(() => {
        if (!isInView) return;
        let current = 0;
        const target = stat.value;
        const duration = 1600;
        const frameTime = 16;
        const step = target / (duration / frameTime);

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, frameTime);

        return () => clearInterval(timer);
    }, [isInView, stat.value]);

    return (
        <motion.div
            ref={ref}
            className="stat-card card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
        >
            <div className="stat-number">
                {stat.prefix || ''}{count}{stat.suffix || ''}
            </div>
            <div className="stat-label">{stat.label}</div>
        </motion.div>
    );
};

const serviceIcons = [FiCode, FiSmartphone, FiCpu, FiDatabase, FiZap, FiMonitor];

const Home = () => {
    const { t, language } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const [isCvDropdownOpen, setIsCvDropdownOpen] = useState(false);
    const [dropUp, setDropUp] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const cvDropdownRef = useRef(null);

    // Typing effect state
    const [typingText, setTypingText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Reset typing cycle cleanly when language changes
    useEffect(() => {
        setTypingText('');
        setRoleIndex(0);
        setIsDeleting(false);
        setIsPaused(false);
    }, [language]);

    useEffect(() => {
        const roles = t.home.roles;
        if (!roles || roles.length === 0) return;

        const currentRole = roles[roleIndex % roles.length];

        if (isPaused) {
            const pauseTimer = setTimeout(() => {
                setIsPaused(false);
                setIsDeleting(true);
            }, 1600);
            return () => clearTimeout(pauseTimer);
        }

        const speed = isDeleting ? 35 : 70;
        const timer = setTimeout(() => {
            if (!isDeleting) {
                if (typingText.length < currentRole.length) {
                    setTypingText(currentRole.slice(0, typingText.length + 1));
                } else {
                    setIsPaused(true);
                }
            } else {
                if (typingText.length > 0) {
                    setTypingText(typingText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setRoleIndex(prev => (prev + 1) % roles.length);
                }
            }
        }, speed);

        return () => clearTimeout(timer);
    }, [typingText, isDeleting, isPaused, roleIndex, t.home.roles]);

    const handleToggleDropdown = () => {
        if (!isCvDropdownOpen && cvDropdownRef.current) {
            const rect = cvDropdownRef.current.getBoundingClientRect();
            const spaceBelow = window.innerHeight - rect.bottom;
            setDropUp(spaceBelow < 170);
        }
        setIsCvDropdownOpen(prev => !prev);
    };

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

    // Featured projects in the exact requested order: Al-Zinad Pro, Mr. Mahwash, Siddham OCR
    const allProjects = getProjectsData(language);
    const featuredIds = [1, 7, 3];
    const featuredProjects = featuredIds
        .map(id => allProjects.find(p => p.id === id))
        .filter(Boolean);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <div className={`hero-text ${isVisible ? 'animate-fadeInUp' : ''}`}>
                            <div className="availability-badge">
                                <span className="pulse-dot" aria-hidden="true"></span>
                                <span>{t.home.availability}</span>
                            </div>

                            <p className="greeting">{t.home.greeting}</p>
                            <h1 className="hero-title">
                                <span className="name-highlight">{t.home.name}</span>
                            </h1>

                            <div className="typing-container" aria-live="polite">
                                <span className="typing-text">{typingText}</span>
                                <span className="typing-cursor" aria-hidden="true">|</span>
                            </div>

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

            {/* Animated Counters Section */}
            <motion.section
                className="stats-section"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container">
                    <div className="stats-grid">
                        {t.home.stats.map((stat, index) => (
                            <StatCounter key={stat.label} stat={stat} index={index} />
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Core Pillars Section */}
            <motion.section
                className="features-section"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container">
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="feature-card card"
                                style={{ '--feature-color': feature.color }}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.45, delay: index * 0.08 }}
                            >
                                <div className="feature-icon">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Services Section */}
            <motion.section
                className="services-section"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container">
                    <div className="section-title">
                        <h2>{t.home.servicesTitle}</h2>
                        <p className="subtitle">{t.home.servicesSubtitle}</p>
                    </div>
                    <div className="services-grid">
                        {t.home.services.map((service, index) => {
                            const Icon = serviceIcons[index] || FiCode;
                            return (
                                <motion.div
                                    key={index}
                                    className="service-card card"
                                    initial={{ opacity: 0, y: 28 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    transition={{ duration: 0.45, delay: index * 0.07 }}
                                >
                                    <div className="service-icon-wrap">
                                        <Icon className="service-icon" />
                                    </div>
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-description">{service.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.section>

            {/* Featured Projects Preview Section */}
            <motion.section
                className="featured-projects-section"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container">
                    <div className="section-title">
                        <h2>{t.home.featuredProjectsTitle}</h2>
                        <p className="subtitle">{t.home.featuredProjectsSubtitle}</p>
                    </div>

                    <div className="featured-grid">
                        {featuredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="featured-project-card card"
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.45, delay: index * 0.1 }}
                            >
                                <ProjectPreview
                                    image={project.image}
                                    mockup={project.mockup}
                                    title={project.title}
                                    demo={project.demo}
                                    previewLabel={t.projects.quickPreview}
                                    onPreviewClick={() => setSelectedProject(project)}
                                />
                                <div className="featured-card-body">
                                    <h3 className="featured-card-title">{project.title}</h3>
                                    <p className="featured-card-desc">{project.description}</p>
                                    <div className="project-tech">
                                        {project.technologies.map((tech, idx) => (
                                            <span key={idx} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="view-all-wrap">
                        <Link to="/projects" className="btn btn-primary view-all-btn">
                            {t.home.viewAllProjects}
                            <FiArrowRight />
                        </Link>
                    </div>
                </div>
            </motion.section>

            {/* Quick Preview Modal */}
            <ProjectModal
                project={selectedProject}
                t={t}
                onClose={() => setSelectedProject(null)}
            />
        </div>
    );
};

export default Home;
