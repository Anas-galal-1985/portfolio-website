import React from 'react';
import { FiAward, FiTarget, FiHeart, FiGlobe, FiUsers } from 'react-icons/fi';
import { motion } from 'framer-motion';
import MyPhoto from '../assets/My_photo.jpg';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

const About = () => {
    const { t } = useLanguage();

    return (
        <div className="about-page">
            <section className="section">
                <div className="container">
                    <motion.div
                        className="section-title"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1>{t.about.title}</h1>
                        <p className="subtitle">{t.about.subtitle}</p>
                    </motion.div>

                    <div className="about-content">
                        <motion.div
                            className="about-image"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="image-wrapper">
                                <div className="image-placeholder">
                                    <img src={MyPhoto} alt="About Me" className="about-profile-img" />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="about-text"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <h2>{t.about.title}</h2>
                            <p className="bio">{t.about.bio}</p>

                            <div className="info-cards">
                                <div className="info-card availability-card">
                                    <div className="availability-card-header">
                                        <span className="pulse-dot-about" aria-hidden="true"></span>
                                        <h3>{t.about.freelanceLabel}</h3>
                                    </div>
                                    <p className="available-status">{t.about.freelanceStatus}</p>
                                </div>

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
                        </motion.div>
                    </div>

                    <motion.div
                        className="specializations-section"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="section-subtitle">{t.about.specialization}</h2>
                        <div className="specializations-grid">
                            {t.about.specializations.map((spec, index) => (
                                <motion.div
                                    key={index}
                                    className="specialization-card card"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                >
                                    <div className="spec-number">{String(index + 1).padStart(2, '0')}</div>
                                    <h3>{spec}</h3>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="specializations-section"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="section-subtitle">{t.about.languagesTitle}</h2>
                        <div className="specializations-grid">
                            {t.about.languages.map((lang, index) => (
                                <motion.div
                                    key={index}
                                    className="specialization-card card"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                >
                                    <FiGlobe className="spec-icon" />
                                    <h3>{lang.label}</h3>
                                    <p className="text-muted">{lang.level}</p>
                                </motion.div>
                            ))}
                            {t.about.softSkills.map((skill, index) => (
                                <motion.div
                                    key={`skill-${index}`}
                                    className="specialization-card card"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    transition={{ duration: 0.4, delay: (index + 2) * 0.05 }}
                                >
                                    <FiUsers className="spec-icon" />
                                    <h3>{skill}</h3>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
