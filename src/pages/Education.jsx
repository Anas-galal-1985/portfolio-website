import React from 'react';
import { FiBook, FiAward, FiCheckCircle } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './Education.css';

const Education = () => {
    const { t, language } = useLanguage();

    const educationData = language === 'ar' ? [
        {
            type: 'degree',
            title: 'بكالوريوس علوم الحاسوب / تقنية المعلومات',
            institution: 'جامعة إب',
            year: '2022 – 2026',
            description: 'التركيز على هندسة البرمجيات، الذكاء الاصطناعي، الرؤية الحاسوبية، وتصميم النظم وقواعد البيانات.'
        },
        {
            type: 'certification',
            title: 'دبلوم المحاسبة والأنظمة المحاسبية',
            institution: 'معهد وي كان',
            year: '2026',
            description: 'يشمل المحاسبة المالية (1 و ب)، المحاسبة الإدارية، محاسبة شركات الأشخاص والأموال، محاسبة التكاليف، الإكسل المحاسبي، والتطبيق العملي على الأنظمة المحاسبية (المتكامل بلس – الأونكس برو).'
        },
        {
            type: 'certification',
            title: 'الرخصة الدولية لقيادة الحاسوب (ICDL)',
            institution: 'معهد توب',
            year: '2022 – 2023',
            description: ''
        }
    ] : [
        {
            type: 'degree',
            title: 'B.Sc. in Computer Science / Information Technology',
            institution: 'Ibb University',
            year: '2022 – 2026',
            description: 'Focus on Software Engineering, Artificial Intelligence, Computer Vision, and Systems & Database Design.'
        },
        {
            type: 'certification',
            title: 'Diploma in Accounting & Accounting Systems',
            institution: 'We Can Institute',
            year: '2026',
            description: 'Covers Financial Accounting (1 & 2), Managerial Accounting, Partnership & Corporate Accounting, Cost Accounting, Accounting Excel, and hands-on practice with accounting systems (Al-Mutakamel Plus – Onyx Pro).'
        },
        {
            type: 'certification',
            title: 'International Computer Driving License (ICDL)',
            institution: 'Top Institute',
            year: '2022 – 2023',
            description: ''
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
                                    {item.description && <p className="description">{item.description}</p>}
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
