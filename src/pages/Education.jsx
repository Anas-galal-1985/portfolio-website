import React from 'react';
import { FiBook, FiAward, FiCheckCircle } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './Education.css';

const Education = () => {
    const { t } = useLanguage();

    const educationData = [
        {
            type: 'degree',
            title: 'Bachelor of Science in Computer Science',
            institution: 'City University of Technology',
            year: '2020 - 2024',
            description: 'Graduated with Honors. Specialized in Artificial Intelligence and Software Engineering.'
        },
        {
            type: 'certification',
            title: 'AWS Certified Solutions Architect',
            institution: 'Amazon Web Services',
            year: '2023',
            description: 'Professional certification for designing distributed systems on AWS.'
        },
        {
            type: 'course',
            title: 'Machine Learning Specialization',
            institution: 'Coursera (Stanford Online)',
            year: '2022',
            description: 'Deep dive into supervised learning, neural networks, and ML algorithms.'
        }
    ];

    return (
        <div className="education-page">
            <section className="section">
                <div className="container">
                    <div className="section-title">
                        <h1>{t.education.title}</h1>
                        <p className="subtitle">{t.education.subtitle}</p>
                    </div>

                    <div className="education-grid">
                        {educationData.map((item, index) => (
                            <div key={index} className="education-card card">
                                <div className="card-icon-wrapper">
                                    {item.type === 'degree' && <FiBook />}
                                    {item.type === 'certification' && <FiAward />}
                                    {item.type === 'course' && <FiCheckCircle />}
                                </div>

                                <div className="card-content">
                                    <span className="card-year">{item.year}</span>
                                    <h3>{item.title}</h3>
                                    <h4 className="institution">{item.institution}</h4>
                                    <p className="description">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Education;
