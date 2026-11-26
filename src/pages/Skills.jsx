import React from 'react';
import {
    SiPython, SiJavascript, SiReact, SiNodedotjs, SiDjango,
    SiMongodb, SiPostgresql, SiTensorflow, SiDocker, SiGit,
    SiTypescript, SiCplusplus, SiExpress,
    SiMysql, SiPytorch, SiKeras,
    SiLinux,
    SiHtml5, SiCss3, SiCsharp, SiDart, SiPhp,
    SiVisualstudiocode, SiFlutter, SiVisualstudio,
    SiKalilinux, SiGooglecolab, SiAnaconda, SiGithub,
    SiFastapi, SiStreamlit, SiOpencv, SiFirebase,
    SiAndroidstudio, SiC
} from 'react-icons/si';
import { FiTerminal, FiTarget, FiCpu, FiDatabase } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './Skills.css';

const Skills = () => {
    const { t } = useLanguage();

    const skillsData = {
        programming: [
            { name: 'Python', icon: <SiPython />, color: '#3776AB' },
            { name: 'C#', icon: <SiCsharp />, color: '#239120' },
            { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
            { name: 'C', icon: <SiC />, color: '#A8B9CC' },
            { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
            { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
            { name: 'PHP', icon: <SiPhp />, color: '#777BB4' },
            { name: 'Dart', icon: <SiDart />, color: '#0175C2' },
            { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
            { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6' }
        ],
        frameworks: [
            { name: 'React', icon: <SiReact />, color: '#61DAFB' },
            { name: 'Flutter', icon: <SiFlutter />, color: '#02569B' },
            { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
            { name: 'Express', icon: <SiExpress />, color: '#000000' },
            { name: 'Django', icon: <SiDjango />, color: '#092E20' },
            { name: 'FastAPI', icon: <SiFastapi />, color: '#009688' },
            { name: 'Streamlit', icon: <SiStreamlit />, color: '#FF4B4B' }
        ],
        databases: [
            { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
            { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
            { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
            { name: 'SQL', icon: <FiDatabase />, color: '#336791' }
        ],
        ai: [
            { name: 'PyTorch', icon: <SiPytorch />, color: '#EE4C2C' },
            { name: 'TensorFlow', icon: <SiTensorflow />, color: '#FF6F00' },
            { name: 'Keras', icon: <SiKeras />, color: '#D00000' },
            { name: 'YOLOv8', icon: <FiTarget />, color: '#00DCFF' },
            { name: 'OpenCV', icon: <SiOpencv />, color: '#5C3EE8' },
            { name: 'ArcFace', icon: <FiCpu />, color: '#FF6B6B' },
            { name: 'Google Colab', icon: <SiGooglecolab />, color: '#F9AB00' },
            { name: 'Anaconda', icon: <SiAnaconda />, color: '#44A833' }
        ],
        devops: [
            { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
            { name: 'CI/CD', icon: <FiTerminal />, color: '#4CAF50' },
            { name: 'Git', icon: <SiGit />, color: '#F05032' },
            { name: 'GitHub', icon: <SiGithub />, color: '#181717' },
            { name: 'VS Code', icon: <SiVisualstudiocode />, color: '#007ACC' },
            { name: 'Visual Studio', icon: <SiVisualstudio />, color: '#5C2D91' },
            { name: 'Android Studio', icon: <SiAndroidstudio />, color: '#3DDC84' },
            { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
            { name: 'Linux', icon: <SiLinux />, color: '#FCC624' },
            { name: 'Kali Linux', icon: <SiKalilinux />, color: '#557C94' }
        ]
    };

    return (
        <div className="skills-page">
            <section className="section">
                <div className="container">
                    <motion.div
                        className="section-title"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1>{t.skills.title}</h1>
                        <p className="subtitle">{t.skills.subtitle}</p>
                    </motion.div>

                    <div className="skills-container">
                        {Object.entries(skillsData).map(([category, skills]) => (
                            <motion.div
                                key={category}
                                className="skill-category"
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.45 }}
                            >
                                <h2 className="category-title">{t.skills.categories[category]}</h2>
                                <div className="skills-grid">
                                    {skills.map((skill, index) => (
                                        <motion.div
                                            key={index}
                                            className="skill-card card"
                                            style={{ '--skill-color': skill.color }}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, amount: 0.15 }}
                                            transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.25) }}
                                        >
                                            <div className="skill-icon" style={{ color: skill.color }}>
                                                {skill.icon}
                                            </div>
                                            <h3 className="skill-name">{skill.name}</h3>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;
