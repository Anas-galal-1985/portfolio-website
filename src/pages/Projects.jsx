import React, { useState } from 'react';
import { FiGithub, FiExternalLink, FiFolder, FiCode } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './Projects.css';

const Projects = () => {
    const { t } = useLanguage();
    const [filter, setFilter] = useState('all');

    const projectsData = [
        {
            id: 1,
            title: 'Smart Surveillance System',
            category: 'ai',
            image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1000',
            description: 'AI-powered surveillance system with real-time face recognition and threat detection capabilities.',
            technologies: ['Python', 'YOLOv8', 'OpenCV', 'Streamlit'],
            github: 'https://github.com',
            demo: 'https://demo.com'
        },
        {
            id: 2,
            title: 'E-Commerce Platform',
            category: 'web',
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
            description: 'Full-stack e-commerce application with secure payments, admin dashboard, and inventory management.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Redux'],
            github: 'https://github.com',
            demo: 'https://demo.com'
        },
        {
            id: 3,
            title: 'Health Tracking App',
            category: 'mobile',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000',
            description: 'Mobile application for tracking daily activities, diet, and health metrics with personalized insights.',
            technologies: ['React Native', 'Firebase', 'TypeScript'],
            github: 'https://github.com',
            demo: 'https://demo.com'
        },
        {
            id: 4,
            title: 'Data Analytics Dashboard',
            category: 'web',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
            description: 'Interactive dashboard for visualizing complex datasets with real-time updates and export features.',
            technologies: ['Vue.js', 'D3.js', 'Python', 'FastAPI'],
            github: 'https://github.com',
            demo: 'https://demo.com'
        }
    ];

    const filteredProjects = filter === 'all'
        ? projectsData
        : projectsData.filter(project => project.category === filter);

    const filterButtons = [
        { key: 'all', label: t.projects.filter.all },
        { key: 'web', label: t.projects.filter.web },
        { key: 'ai', label: t.projects.filter.ai },
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
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} loading="lazy" />
                                    <div className="project-overlay">
                                        <div className="overlay-links">
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-icon" title={t.projects.viewCode}>
                                                <FiGithub />
                                            </a>
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="link-icon" title={t.projects.viewDemo}>
                                                <FiExternalLink />
                                            </a>
                                        </div>
                                    </div>
                                </div>

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
