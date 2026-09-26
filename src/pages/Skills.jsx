import React from 'react';
import {
    SiPython, SiJavascript, SiReact, SiNodedotjs, SiDjango,
    SiMongodb, SiPostgresql, SiTensorflow, SiDocker, SiGit,
    SiTypescript, SiCplusplus, SiFlask, SiExpress,
    SiMysql, SiRedis, SiPytorch, SiKeras,
    SiKubernetes, SiAmazonaws, SiLinux, SiVim,
    SiHtml5, SiCss3, SiCsharp, SiDart, SiPhp,
    SiVisualstudiocode, SiFlutter, SiVisualstudio,
    SiKalilinux, SiGooglecolab, SiAnaconda, SiGithub
} from 'react-icons/si';
import { useLanguage } from '../context/LanguageContext';
import './Skills.css';

const Skills = () => {
    const { t } = useLanguage();

    const skillsData = {
        programming: [
            { name: 'Python', icon: <SiPython />, color: '#3776AB' },
            { name: 'C#', icon: <SiCsharp />, color: '#239120' },
            { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
            { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
            { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
            { name: 'Dart', icon: <SiDart />, color: '#0175C2' },
            { name: 'PHP', icon: <SiPhp />, color: '#777BB4' },
            { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
            { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6' }
        ],
        frameworks: [
            { name: 'React', icon: <SiReact />, color: '#61DAFB' },
            { name: 'Flutter', icon: <SiFlutter />, color: '#02569B' },
            { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
            { name: 'Django', icon: <SiDjango />, color: '#092E20' },
            { name: 'Flask', icon: <SiFlask />, color: '#000000' },
            { name: 'Express', icon: <SiExpress />, color: '#000000' }
        ],
        databases: [
            { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
            { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
            { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
            { name: 'Redis', icon: <SiRedis />, color: '#DC382D' }
        ],
        ai: [
            { name: 'TensorFlow', icon: <SiTensorflow />, color: '#FF6F00' },
            { name: 'PyTorch', icon: <SiPytorch />, color: '#EE4C2C' },
            { name: 'Keras', icon: <SiKeras />, color: '#D00000' },
            { name: 'Google Colab', icon: <SiGooglecolab />, color: '#F9AB00' },
            { name: 'Anaconda', icon: <SiAnaconda />, color: '#44A833' }
        ],
        devops: [
            { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
            { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5' },
            { name: 'AWS', icon: <SiAmazonaws />, color: '#FF9900' }
        ],
        tools: [
            { name: 'Git', icon: <SiGit />, color: '#F05032' },
            { name: 'GitHub', icon: <SiGithub />, color: '#181717' },
            { name: 'VS Code', icon: <SiVisualstudiocode />, color: '#007ACC' },
            { name: 'Visual Studio', icon: <SiVisualstudio />, color: '#5C2D91' },
            { name: 'Kali Linux', icon: <SiKalilinux />, color: '#557C94' },
            { name: 'Linux', icon: <SiLinux />, color: '#FCC624' },
            { name: 'Vim', icon: <SiVim />, color: '#019733' }
        ]
    };

    return (
        <div className="skills-page">
            <section className="section">
                <div className="container">
                    <div className="section-title">
                        <h1>{t.skills.title}</h1>
                        <p className="subtitle">{t.skills.subtitle}</p>
                    </div>

                    <div className="skills-container">
                        {Object.entries(skillsData).map(([category, skills]) => (
                            <div key={category} className="skill-category">
                                <h2 className="category-title">{t.skills.categories[category]}</h2>
                                <div className="skills-grid">
                                    {skills.map((skill, index) => (
                                        <div
                                            key={index}
                                            className="skill-card card"
                                            style={{ '--skill-color': skill.color }}
                                        >
                                            <div className="skill-icon" style={{ color: skill.color }}>
                                                {skill.icon}
                                            </div>
                                            <h3 className="skill-name">{skill.name}</h3>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;
