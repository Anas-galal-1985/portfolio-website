import React from 'react';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './Experience.css';

const Experience = () => {
    const { t } = useLanguage();

    const experiences = [
        {
            id: 1,
            role: 'Senior Software Engineer',
            company: 'Tech Solutions Inc.',
            date: '2022 - Present',
            type: 'fulltime',
            description: [
                'Led a team of 5 developers in building scalable microservices.',
                'Improved system performance by 40% through code optimization.',
                'Implemented CI/CD pipelines to streamline deployment processes.'
            ]
        },
        {
            id: 2,
            role: 'Full Stack Developer',
            company: 'Digital Innovations',
            date: '2020 - 2022',
            type: 'fulltime',
            description: [
                'Developed complex web applications using React and Node.js.',
                'Collaborated with UX designers to implement responsive designs.',
                'Managed database architecture and API integrations.'
            ]
        },
        {
            id: 3,
            role: 'Information Technology Intern',
            company: 'Global Systems',
            date: '2019 - 2020',
            type: 'internship',
            description: [
                'Assisted in network troubleshooting and maintenance.',
                'Developed internal tools for automating routine tasks.',
                'Gained hands-on experience with enterprise server management.'
            ]
        }
    ];

    return (
        <div className="experience-page">
            <section className="section">
                <div className="container">
                    <div className="section-title">
                        <h1>{t.experience.title}</h1>
                        <p className="subtitle">{t.experience.subtitle}</p>
                    </div>

                    <div className="timeline">
                        {experiences.map((exp, index) => (
                            <div key={exp.id} className="timeline-item">
                                <div className="timeline-marker"></div>
                                <div className="timeline-content card">
                                    <div className="timeline-header">
                                        <h3>{exp.role}</h3>
                                        <span className="company-name">@ {exp.company}</span>
                                    </div>

                                    <div className="timeline-date">
                                        <FiCalendar />
                                        <span>{exp.date}</span>
                                        <span className="job-type">{exp.type === 'fulltime' ? t.experience.workExperience : t.experience.internships}</span>
                                    </div>

                                    <ul className="timeline-details">
                                        {exp.description.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Experience;
