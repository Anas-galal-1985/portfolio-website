import React, { useEffect } from 'react';
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectPreview from './ProjectPreview';
import './ProjectModal.css';

/**
 * Reusable quick-preview modal shared by Featured Projects (Home) and Projects page.
 */
const ProjectModal = ({ project, t, onClose }) => {
    useEffect(() => {
        if (!project) return;
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [project, onClose]);

    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    className="project-modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="project-modal-box"
                        initial={{ opacity: 0, scale: 0.92, y: 24 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: 24 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="project-modal-close"
                            onClick={onClose}
                            aria-label={t.projects.closeModal}
                        >
                            <FiX />
                        </button>

                        <ProjectPreview
                            image={project.image}
                            mockup={project.mockup}
                            title={project.title}
                            demo={project.demo}
                        />

                        <div className="project-modal-content">
                            <h2 className="project-modal-title">{project.title}</h2>
                            <p className="project-modal-description">{project.description}</p>

                            <div className="project-modal-tech-wrap">
                                <span className="project-modal-tech-label">{t.projects.technologies}:</span>
                                <div className="project-tech">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            {(project.github || project.demo) && (
                                <div className="project-modal-links">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-secondary"
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
                                            className="btn btn-primary"
                                        >
                                            <FiExternalLink />
                                            <span>{t.projects.viewSite}</span>
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
