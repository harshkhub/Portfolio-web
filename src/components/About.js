import React from 'react'
import john from './images/Profile.JPG'
import Resume from './images/Resume.pdf'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './About.css'

const About = () => {
    return (
        <section className="hero section" id="about">
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="status-pill">
                        <span className="status-dot" />
                        <span>Currently building at Meta — Reality Labs Wearables</span>
                    </div>

                    <h1 className="hero-title">
                        Hi, I'm <span className="gradient-text">Harsh Khubchandani</span>.
                    </h1>

                    <p className="hero-tagline">
                        Software Engineer crafting privacy &amp; identity systems for
                        smart glasses at Meta. Previously interned at Meta, ASML, and Practo.
                    </p>

                    <div className="hero-meta">
                        <span className="meta-item">
                            <FontAwesomeIcon icon={faLocationDot} /> New York, NY
                        </span>
                        <span className="meta-item">
                            <FontAwesomeIcon icon={faEnvelope} /> Open to chat
                        </span>
                    </div>

                    <div className="hero-cta">
                        <a href={Resume} className="button" target="_blank" rel="noreferrer">
                            View Resume <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                        <a href="#experience" className="button secondary">
                            Explore my work
                        </a>
                    </div>

                    <ul className="socialLinks">
                        <li>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.linkedin.com/in/harsh-khubchandani-19207b238/"
                                aria-label="LinkedIn"
                            >
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/harshkhub"
                                aria-label="GitHub"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="hero-image-wrap">
                    <div className="hero-image-frame">
                        <img src={john} alt="Harsh Khubchandani" />
                    </div>
                    <div className="hero-image-glow" />
                </div>
            </div>
        </section>
    )
}

export default About
