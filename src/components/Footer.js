import React from 'react'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="footer section" id="contact">
            <div className="container">
                <div className="footer-cta">
                    <span className="section-label">Get in touch</span>
                    <h2 className="footer-title">
                        Let's build something <span className="gradient-text">together.</span>
                    </h2>
                    <p className="footer-sub">
                        Open to chatting about smart glasses, mobile platform work, or anything
                        novel at the intersection of devices and identity.
                    </p>
                    <div className="footer-cta-buttons">
                        <a
                            className="button"
                            href="mailto:khubchandaniharsh79@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Say hi <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                        <a
                            className="button secondary"
                            href="https://www.linkedin.com/in/harsh-khubchandani-19207b238/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Connect on LinkedIn
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span className="footer-copy">© {year} Harsh Khubchandani</span>
                    <div className="footer-links">
                        <a
                            href="https://github.com/harshkhub"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/harsh-khubchandani-19207b238/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a
                            href="mailto:khubchandaniharsh79@gmail.com"
                            aria-label="Email"
                        >
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
