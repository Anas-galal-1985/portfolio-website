import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

const Contact = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: '60b6fefe-9045-46a6-82ba-848ae5cc2efa',
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: 'رسالة جديدة من موقعك الشخصي',
                    from_name: 'Anas Galal Portfolio'
                })
            });

            const result = await response.json();

            if (result.success === true) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus(''), 6000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus(''), 6000);
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
            setTimeout(() => setStatus(''), 6000);
        }
    };

    return (
        <div className="contact-page">
            <section className="section">
                <div className="container">
                    <div className="section-title">
                        <h1>{t.contact.title}</h1>
                        <p className="subtitle">{t.contact.subtitle}</p>
                    </div>

                    <div className="contact-content">
                        <div className="contact-info card">
                            <h3>{t.contact.info}</h3>

                            <div className="info-item">
                                <div className="info-icon">
                                    <FiMail />
                                </div>
                                <div className="info-details">
                                    <h4>{t.contact.emailLabel}</h4>
                                    <a href="mailto:anasxanoos@gmail.com">anasxanoos@gmail.com</a>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">
                                    <FiPhone />
                                </div>
                                <div className="info-details">
                                    <h4>{t.contact.phoneLabel}</h4>
                                    <a href="tel:+967776455364">+(967) 776-455-364</a>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">
                                    <FiMapPin />
                                </div>
                                <div className="info-details">
                                    <h4>{t.contact.locationLabel}</h4>
                                    <p>{t.contact.locationValue}</p>
                                </div>
                            </div>

                            <div className="contact-social">
                                <h4>{t.contact.social}</h4>
                                <div className="social-links">
                                    <a
                                        href="https://github.com/Anas-galal-1985"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link"
                                        aria-label="GitHub"
                                    >
                                        <FiGithub />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/anas-galal-7b7937439"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link"
                                        aria-label="LinkedIn"
                                    >
                                        <FiLinkedin />
                                    </a>
                                    <a
                                        href="https://mail.google.com/mail/?view=cm&fs=1&to=anasxanoos@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link"
                                        aria-label="Email"
                                    >
                                        <FiMail />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <form className="contact-form card" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">{t.contact.name}</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder={t.contact.name}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">{t.contact.email}</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder={t.contact.email}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">{t.contact.message}</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder={t.contact.message}
                                    rows="5"
                                ></textarea>
                            </div>

                            {status === 'success' && (
                                <div className="status-alert success">
                                    {t.contact.success}
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="status-alert error">
                                    {t.contact.error}
                                </div>
                            )}

                            <button
                                type="submit"
                                className="btn btn-primary submit-btn"
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? (
                                    <>
                                        <span className="spinner"></span>
                                        <span>{t.contact.sending}</span>
                                    </>
                                ) : (
                                    <>
                                        {t.contact.send}
                                        <FiSend />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
