import React from 'react';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './Experience.css';

const Experience = () => {
    const { t, language } = useLanguage();

    const experiences = language === 'ar' ? [
        {
            id: 1,
            role: 'مهندس برمجيات ومطور حر',
            company: 'عمل حر',
            date: '2024 – الحالي',
            type: 'fulltime',
            description: [
                'قيادة فريق مكون من 5 مطورين في بناء خدمات مصغرة (Microservices) قابلة للتوسع.',
                'تحسين أداء الأنظمة بنسبة 40% من خلال تحسين الكود وهيكلة البيانات.',
                'تطبيق خطوط أنابيب التكامل والتسليم المستمر (CI/CD) لتبسيط عمليات النشر.',
                'تطوير تطبيقات ويب معقدة ومتكاملة باستخدام React و Node.js و Django و PHP وربطها بقواعد بيانات PostgreSQL و MySQL.',
                'التعاون مع مصممي تجربة المستخدم (UX) لتنفيذ واجهات وتصميمات متجاوبة.',
                'إدارة بنية قواعد البيانات وتكامل واجهات برمجة التطبيقات (APIs).',
                'تنفيذ مشاريع الذكاء الاصطناعي وتعلم الآلة، وبناء برامج سطح المكتب باستخدام Python و C# و C++.'
            ]
        },
        {
            id: 2,
            role: 'أمين صندوق وخدمة عملاء',
            company: 'شركة نبأ الهدهد للصرافة',
            date: 'يناير 2022 – يناير 2023',
            type: 'fulltime',
            description: [
                'إدارة عمليات الدفع والاستلام وبيع العملات واستلام وإرسال الحوالات المالية.',
                'تقديم خدمة العملاء ومعالجة الاستفسارات والشكاوى وسحب الحوالات بدقة.',
                'التعامل مع المعاملات المالية اليومية وضمان دقتها وسلامتها وتحديث سجلات العملاء.'
            ]
        }
    ] : [
        {
            id: 1,
            role: 'Freelance Software Engineer & Full-Stack Developer',
            company: 'Freelance',
            date: '2024 – Present',
            type: 'fulltime',
            description: [
                'Led a team of 5 developers in building scalable microservices.',
                'Improved system performance by 40% through code optimization and data structuring.',
                'Implemented CI/CD pipelines to streamline deployment processes.',
                'Developed complex, full-stack web applications using React, Node.js, Django, and PHP, integrated with PostgreSQL and MySQL databases.',
                'Collaborated with UX designers to implement responsive interfaces and designs.',
                'Managed database architecture and API integrations.',
                'Executed AI and machine learning projects, and built desktop applications using Python, C#, and C++.'
            ]
        },
        {
            id: 2,
            role: 'Cashier & Customer Service',
            company: 'Naba Al-Hudhud Exchange Company',
            date: 'January 2022 – January 2023',
            type: 'fulltime',
            description: [
                'Managed payment and collection operations, currency exchange, and sending/receiving money transfers.',
                'Provided customer service, handled inquiries and complaints, and processed transfers accurately.',
                'Handled daily financial transactions, ensuring accuracy and integrity, and updated customer records.'
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
                        {experiences.map((exp) => (
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
                                        <span className="job-type">{t.experience.workExperience}</span>
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
