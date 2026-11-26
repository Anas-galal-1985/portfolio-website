import React, { useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { getProjectsData } from '../data/projectsData';
import ProjectPreview from '../components/ProjectPreview';
import ProjectModal from '../components/ProjectModal';
import './Projects.css';

const Projects = () => {
    const { t, language } = useLanguage();
    const [filter, setFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    const projectsData = getProjectsData(language);

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
                    <motion.div
                        className="section-title"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1>{t.projects.title}</h1>
                        <p className="subtitle">{t.projects.subtitle}</p>
                    </motion.div>

                    <div className="filter-container">
                        {filterButtons.map(btn => (
                            <button
                                key={btn.key}
                                type="button"
                                className={`filter-btn ${filter === btn.key ? 'active' : ''}`}
                                onClick={() => setFilter(btn.key)}
                            >
                                {btn.label}
                            </button>
                        ))}
                    </div>

                    <motion.div layout className="projects-grid">
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.25) }}
                                    className="project-card card"
                                >
                                    <ProjectPreview
                                        image={project.image}
                                        mockup={project.mockup}
                                        title={project.title}
                                        demo={project.demo}
                                        previewLabel={t.projects.quickPreview}
                                        onPreviewClick={() => setSelectedProject(project)}
                                    />

                                    <div className="project-content">
                                        <div className="project-header">
                                            <h3>{project.title}</h3>
                                        </div>

                                        <p className="project-description">{project.description}</p>

                                        <div className="project-tech">
                                            {project.technologies.map((tech, techIdx) => (
                                                <span key={techIdx} className="tech-tag">{tech}</span>
                                            ))}
                                        </div>

                                        <div className="project-links">
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="project-link"
                                                    title={t.projects.viewCode}
                                                >
                                                    <FiGithub />
                                                    <span>{t.projects.viewCode}</span>
                                                </a>
                                            )}
                                            {project.demo && (
                                                <a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="project-link"
                                                    title={t.projects.viewSite}
                                                >
                                                    <FiExternalLink />
                                                    <span>{t.projects.viewSite}</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            <ProjectModal
                project={selectedProject}
                t={t}
                onClose={() => setSelectedProject(null)}
            />
        </div>
    );
};

export default Projects;
