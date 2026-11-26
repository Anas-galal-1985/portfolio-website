import React, { useState, useId } from 'react';
import { FiEye, FiExternalLink } from 'react-icons/fi';
import './ProjectPreview.css';

/**
 * Displays a real project screenshot when available, falling back smoothly
 * to a stylized code-generated visual mockup when `image` is empty or fails to load.
 */
const ProjectPreview = ({ image, mockup, title, demo, previewLabel, onPreviewClick }) => {
    const [imgFailed, setImgFailed] = useState(false);
    const uid = useId().replace(/:/g, '');
    const showMockup = !image || imgFailed;

    const renderPattern = (pattern) => {
        if (pattern === 'grid') {
            const patternId = `grid-${uid}`;
            return (
                <svg className="mockup-pattern" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                        <pattern id={patternId} width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill={`url(#${patternId})`} />
                </svg>
            );
        }
        if (pattern === 'dots') {
            const patternId = `dots-${uid}`;
            return (
                <svg className="mockup-pattern" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                        <pattern id={patternId} width="8" height="8" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="0.9" fill="rgba(255,255,255,0.14)" />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill={`url(#${patternId})`} />
                </svg>
            );
        }
        if (pattern === 'radar') {
            return (
                <svg className="mockup-pattern" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                    <circle cx="100" cy="60" r="48" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="0.7" />
                    <circle cx="100" cy="60" r="34" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7" />
                    <circle cx="100" cy="60" r="20" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.7" />
                    <line x1="40" y1="60" x2="160" y2="60" stroke="rgba(255,255,255,0.08)" strokeWidth="0.6" />
                    <line x1="100" y1="5" x2="100" y2="115" stroke="rgba(255,255,255,0.08)" strokeWidth="0.6" />
                    {/* Detection target corners */}
                    <path d="M 74 38 L 74 32 L 80 32 M 120 32 L 126 32 L 126 38 M 74 82 L 74 88 L 80 88 M 120 88 L 126 88 L 126 82" fill="none" stroke="rgba(56, 189, 248, 0.45)" strokeWidth="1.2" />
                </svg>
            );
        }
        if (pattern === 'phone') {
            return (
                <svg className="mockup-pattern" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                    <rect x="74" y="10" width="52" height="100" rx="8" fill="rgba(0,0,0,0.22)" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" />
                    <rect x="79" y="18" width="42" height="76" rx="4" fill="rgba(255,255,255,0.06)" />
                    <line x1="92" y1="14" x2="108" y2="14" stroke="rgba(255,255,255,0.3)" strokeWidth="1.4" strokeLinecap="round" />
                    <circle cx="100" cy="102" r="3" fill="rgba(255,255,255,0.2)" />
                </svg>
            );
        }
        if (pattern === 'browser') {
            return (
                <svg className="mockup-pattern" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                    <rect x="14" y="12" width="172" height="96" rx="6" fill="rgba(0,0,0,0.18)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                    <rect x="14" y="12" width="172" height="16" rx="6" fill="rgba(255,255,255,0.07)" />
                    <circle cx="25" cy="20" r="2.5" fill="rgba(248, 113, 113, 0.7)" />
                    <circle cx="34" cy="20" r="2.5" fill="rgba(250, 204, 21, 0.7)" />
                    <circle cx="43" cy="20" r="2.5" fill="rgba(74, 222, 128, 0.7)" />
                    <rect x="54" y="16" width="90" height="8" rx="4" fill="rgba(255,255,255,0.09)" />
                    <rect x="24" y="38" width="152" height="10" rx="2" fill="rgba(255,255,255,0.08)" />
                    <rect x="24" y="54" width="100" height="6" rx="2" fill="rgba(255,255,255,0.05)" />
                    <rect x="24" y="66" width="128" height="6" rx="2" fill="rgba(255,255,255,0.05)" />
                </svg>
            );
        }
        return null;
    };

    const IconComponent = mockup?.icon;

    return (
        <div
            className="project-preview"
            onClick={onPreviewClick}
            role={onPreviewClick ? 'button' : undefined}
            tabIndex={onPreviewClick ? 0 : undefined}
            onKeyDown={(e) => {
                if (onPreviewClick && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    onPreviewClick();
                }
            }}
            aria-label={onPreviewClick ? `${previewLabel || 'Preview'}: ${title}` : title}
        >
            {showMockup && mockup ? (
                <div
                    className="mockup-container"
                    style={{ background: `linear-gradient(${mockup.gradient})` }}
                >
                    {renderPattern(mockup.pattern)}
                    <div className="mockup-center">
                        <div className="mockup-icon-wrap">
                            {IconComponent && <IconComponent className="mockup-icon" />}
                        </div>
                    </div>
                    {mockup.badge && (
                        <span className="mockup-badge">
                            {demo && <FiExternalLink className="mockup-badge-icon" />}
                            <span>{mockup.badge}</span>
                        </span>
                    )}
                </div>
            ) : (
                <>
                    <img
                        src={image}
                        alt={title}
                        className="preview-img"
                        onError={() => setImgFailed(true)}
                    />
                    {mockup?.badge && (
                        <span className="mockup-badge">
                            {demo && <FiExternalLink className="mockup-badge-icon" />}
                            <span>{mockup.badge}</span>
                        </span>
                    )}
                </>
            )}

            {onPreviewClick && (
                <div className="preview-overlay">
                    <span className="preview-overlay-pill">
                        <FiEye />
                        <span>{previewLabel || 'Quick Preview'}</span>
                    </span>
                </div>
            )}
        </div>
    );
};

export default ProjectPreview;
