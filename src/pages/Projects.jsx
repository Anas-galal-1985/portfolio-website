import React, { useState } from 'react';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './Projects.css';

const Projects = () => {
    const { t, language } = useLanguage();
    const [filter, setFilter] = useState('all');

    const projectsData = language === 'ar' ? [
        {
            id: 1,
            title: 'نظام الزناد برو – مشروع التخرج',
            category: 'ai',
            description: 'نظام مراقبة وأمان ذكي يعتمد على الرؤية الحاسوبية والذكاء الاصطناعي لكشف الهويات والتحليل المباشر في الوقت الحقيقي (تم استعراضه في اليوم التقني الثاني 2026).',
            technologies: ['Python', 'YOLO', 'ArcFace', 'OpenCV'],
            github: null,
            demo: null
        },
        {
            id: 2,
            title: 'نظام تحليل العمر والجنس',
            category: 'ai',
            description: 'نموذج ذكاء اصطناعي يتنبأ بالعمر والجنس عبر تحليل صور الوجوه بدقة عالية.',
            technologies: ['Python', 'Deep Learning', 'Google Colab', 'Gradio'],
            github: null,
            demo: null
        },
        {
            id: 3,
            title: 'نموذج فك تشفير اللغات القديمة',
            category: 'ai',
            description: 'تطوير نموذج أولي للتعرف على رموز اللغات القديمة وفك تشفيرها باستخدام الرؤية الحاسوبية.',
            technologies: ['Python', 'YOLOv8', 'OpenCV'],
            github: null,
            demo: null
        },
        {
            id: 4,
            title: 'تحليل المشاعر وتصنيف النصوص',
            category: 'ai',
            description: 'نموذج لمعالجة اللغات الطبيعية (NLP) لتصنيف النصوص والتعليقات إلى إيجابية أو سلبية.',
            technologies: ['Python', 'NLP', 'Machine Learning'],
            github: null,
            demo: null
        },
        {
            id: 5,
            title: 'معالجة البيانات الضخمة (100K YouTube DataSet)',
            category: 'ai',
            description: 'جمع وتنظيف ومعالجة مجموعة بيانات ضخمة تضم 100,000 تعليق من القنوات الإخبارية لتدريب نماذج الذكاء الاصطناعي.',
            technologies: ['Python', 'Data Processing', 'AI'],
            github: null,
            demo: null
        },
        {
            id: 6,
            title: 'استوديو معالجة الصور الرقمية',
            category: 'ai',
            description: 'أداة برمجية متكاملة لتطبيق الفلاتر والمعالجات الرقمية المختلفة للصور.',
            technologies: ['Python', 'OpenCV'],
            github: null,
            demo: null
        },
        {
            id: 7,
            title: 'تطبيق السيد محواش',
            category: 'mobile',
            description: 'تطبيق مالي مخصص للتجار لإدارة الديون والمبيعات، يعمل أوفلاين بالكامل مع خيارات أمان متقدمة وإصدار كشوفات PDF.',
            technologies: ['Flutter', 'Dart', 'Offline Storage', 'PDF Generation'],
            github: null,
            demo: null
        },
        {
            id: 8,
            title: 'منصة ربوع اليمن',
            category: 'web',
            description: 'دليل ومنصة خدمات زراعية متكاملة على مستوى اليمن.',
            technologies: ['Web Development'],
            github: null,
            demo: 'https://throughout-yemen.com'
        },
        {
            id: 9,
            title: 'موقع شركة آسيا للاستيراد الزراعي',
            category: 'web',
            description: 'موقع تعريفي وتجاري متكامل لشركة استيراد مستلزمات زراعية.',
            technologies: ['Web Development'],
            github: null,
            demo: 'https://asia-agr.com'
        },
        {
            id: 10,
            title: 'موقع مصنع آرت بلاست',
            category: 'web',
            description: 'موقع تعريفي وتجاري متكامل وكتالوج منتجات لمصنع للصناعات البلاستيكية.',
            technologies: ['Web Development'],
            github: null,
            demo: 'https://artplast-yemen.com'
        }
    ] : [
        {
            id: 1,
            title: 'Al-Zinad Pro – Graduation Project',
            category: 'ai',
            description: 'An intelligent surveillance and security system powered by computer vision and AI for real-time identity detection and analysis (showcased at the 2nd Tech Day 2026).',
            technologies: ['Python', 'YOLO', 'ArcFace', 'OpenCV'],
            github: null,
            demo: null
        },
        {
            id: 2,
            title: 'Age & Gender Detection',
            category: 'ai',
            description: 'An AI model that predicts age and gender through high-accuracy facial image analysis.',
            technologies: ['Python', 'Deep Learning', 'Google Colab', 'Gradio'],
            github: null,
            demo: null
        },
        {
            id: 3,
            title: 'Ancient Script Recognition',
            category: 'ai',
            description: 'A prototype model for recognizing and deciphering ancient language symbols using computer vision.',
            technologies: ['Python', 'YOLOv8', 'OpenCV'],
            github: null,
            demo: null
        },
        {
            id: 4,
            title: 'Sentiment Analysis & Text Classification',
            category: 'ai',
            description: 'An NLP model for classifying texts and comments as positive or negative.',
            technologies: ['Python', 'NLP', 'Machine Learning'],
            github: null,
            demo: null
        },
        {
            id: 5,
            title: '100K YouTube DataSet Processing',
            category: 'ai',
            description: 'Collecting, cleaning, and processing a large dataset of 100,000 comments from news channels for training AI models.',
            technologies: ['Python', 'Data Processing', 'AI'],
            github: null,
            demo: null
        },
        {
            id: 6,
            title: 'Image Processing Studio',
            category: 'ai',
            description: 'A comprehensive software tool for applying various digital filters and image processing operations.',
            technologies: ['Python', 'OpenCV'],
            github: null,
            demo: null
        },
        {
            id: 7,
            title: 'Mr. Mahwash App',
            category: 'mobile',
            description: 'A financial app designed for merchants to manage debts and sales, fully offline with advanced security options and PDF statement generation.',
            technologies: ['Flutter', 'Dart', 'Offline Storage', 'PDF Generation'],
            github: null,
            demo: null
        },
        {
            id: 8,
            title: 'Throughout Yemen Platform',
            category: 'web',
            description: 'A comprehensive agricultural services directory and platform across Yemen.',
            technologies: ['Web Development'],
            github: null,
            demo: 'https://throughout-yemen.com'
        },
        {
            id: 9,
            title: 'Asia Agricultural Imports',
            category: 'web',
            description: 'A full-featured promotional and commercial website for an agricultural supplies import company.',
            technologies: ['Web Development'],
            github: null,
            demo: 'https://asia-agr.com'
        },
        {
            id: 10,
            title: 'Art Plast Factory',
            category: 'web',
            description: 'A full-featured promotional and commercial website with a product catalog for a plastics manufacturing factory.',
            technologies: ['Web Development'],
            github: null,
            demo: 'https://artplast-yemen.com'
        }
    ];

    const filteredProjects = filter === 'all'
        ? projectsData
        : projectsData.filter(project => project.category === filter);

    const filterButtons = [
        { key: 'all', label: t.projects.filter.all },
        { key: 'ai', label: t.projects.filter.ai },
        { key: 'web', label: t.projects.filter.web },
        { key: 'mobile', label: t.projects.filter.mobile }
    ];

    return (
        <div className="projects-page">
            <section className="section">
                <div className="container">
                    <div className="section-title">
                        <h1>{t.projects.title}</h1>
                        <p className="subtitle">{t.projects.subtitle}</p>
                    </div>

                    <div className="filter-container">
                        {filterButtons.map(btn => (
                            <button
                                key={btn.key}
                                className={`filter-btn ${filter === btn.key ? 'active' : ''}`}
                                onClick={() => setFilter(btn.key)}
                            >
                                {btn.label}
                            </button>
                        ))}
                    </div>

                    <div className="projects-grid">
                        {filteredProjects.map((project) => (
                            <div key={project.id} className="project-card card">
                                <div className="project-content">
                                    <div className="project-header">
                                        <FiFolder className="folder-icon" />
                                        <h3>{project.title}</h3>
                                    </div>

                                    <p className="project-description">{project.description}</p>

                                    <div className="project-tech">
                                        {project.technologies.map((tech, index) => (
                                            <span key={index} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>

                                    <div className="project-links">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" title={t.projects.viewCode}>
                                                <FiGithub />
                                                <span>{t.projects.viewCode}</span>
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link" title={t.projects.viewSite}>
                                                <FiExternalLink />
                                                <span>{t.projects.viewSite}</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
