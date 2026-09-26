import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiDownload, FiCode, FiCpu, FiDatabase } from 'react-icons/fi';
import MyPhoto from '../assets/My_photo.jpg';
import { useLanguage } from '../context/LanguageContext';
import './Home.css';

const Home = () => {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const features = [
        { icon: <FiCode />, title: 'Web Development', color: '#3b82f6' },
        { icon: <FiCpu />, title: 'AI & ML', color: '#8b5cf6' },
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
                                <span className="name-highlight">ANAS GALAL</span>
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
                                <button className="btn btn-secondary">
                                    <FiDownload />
                                    {t.home.downloadCV}
                                </button>
                            </div>
                        </div>

                        <div className={`hero-visual ${isVisible ? 'animate-fadeIn' : ''}`}>
                            <div className="visual-container">
                                <div className="floating-card card-1">
                                    <FiCode className="card-icon" />
                                    <span>React</span>
                                </div>
                                <div className="floating-card card-2">
                                    <FiCpu className="card-icon" />
                                    <span>AI/ML</span>
                                </div>
                                <div className="floating-card card-3">
                                    <FiDatabase className="card-icon" />
                                    <span>Database</span>
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
