import React from 'react';
import { FiAward, FiTarget, FiHeart, FiGlobe, FiUsers } from 'react-icons/fi';
import MyPhoto from '../assets/My_photo.jpg';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

const About = () => {
    const { t } = useLanguage();

    return (
        <div className="about-page">
            <section className="section">
                <div className="container">
                    <div className="section-title">
                        <h1>{t.about.title}</h1>
                        <p className="subtitle">{t.about.subtitle}</p>
                    </div>

                    <div className="about-content">
                        <div className="about-image">
                            <div className="image-wrapper">
                                <div className="image-placeholder">
                                    <img src={MyPhoto} alt="About Me" className="about-profile-img" />
                                </div>
                            </div>
                        </div>

                        <div className="about-text">
                            <h2>{t.about.title}</h2>
                            <p className="bio">{t.about.bio}</p>

                            <div className="info-cards">
                                <div className="info-card">
                                    <FiAward className="info-icon" />
                                    <h3>{t.about.education}</h3>
                                    <p>{t.about.educationDegree}</p>
                                    <p className="text-muted">{t.about.educationInstitution}</p>
                                </div>

                                <div className="info-card">
                                    <FiTarget className="info-icon" />
                                    <h3>{t.about.goals}</h3>
                                    <p>{t.about.goalsText}</p>
                                    <p className="text-muted">{t.about.goalsSubtext}</p>
                                </div>

                                <div className="info-card">
                                    <FiHeart className="info-icon" />
                                    <h3>{t.about.interests}</h3>
                                    <p>{t.about.interestsText}</p>
                                    <p className="text-muted">{t.about.interestsSubtext}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="specializations-section">
                        <h2 className="section-subtitle">{t.about.specialization}</h2>
                        <div className="specializations-grid">
                            {t.about.specializations.map((spec, index) => (
                                <div key={index} className="specialization-card card">
                                    <div className="spec-number">{String(index + 1).padStart(2, '0')}</div>
                                    <h3>{spec}</h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="specializations-section">
                        <h2 className="section-subtitle">{t.about.languagesTitle}</h2>
                        <div className="specializations-grid">
                            {t.about.languages.map((lang, index) => (
                                <div key={index} className="specialization-card card">
                                    <FiGlobe className="spec-icon" />
                                    <h3>{lang.label}</h3>
                                    <p className="text-muted">{lang.level}</p>
                                </div>
                            ))}
                            {t.about.softSkills.map((skill, index) => (
                                <div key={`skill-${index}`} className="specialization-card card">
                                    <FiUsers className="spec-icon" />
                                    <h3>{skill}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
