import React from 'react'
import Resume from './images/Resume.pdf'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NYCMap from './NYCMap'
import './About.css'

const About = () => {
    return (
        <section className="cover section" id="about">
            <div className="container cover-container">
                <div className="cover-meta">
                    <div className="masthead">
                        <span className="masthead-issue">VOL. 01 · ISSUE 06</span>
                        <span className="masthead-date">JUNE · MMXXVI</span>
                    </div>
                    <div className="rule-thick" />
                </div>

                <div className="cover-grid">
                    <div className="cover-text">
                        <p className="cover-pretitle">A FIELD GUIDE TO</p>
                        <h1 className="cover-title">
                            Harsh<br />
                            <em>Khubchandani</em>
                        </h1>
                        <p className="cover-sub">
                            Software engineer in New York. Currently shipping privacy &amp; identity
                            for smart glasses at{' '}
                            <a className="ul" href="#stop-meta-rl">Meta — Reality Labs</a>.
                            Previously at{' '}
                            <a className="ul" href="#stop-meta-intern">Meta</a>,{' '}
                            <a className="ul" href="#stop-asml-contract">ASML</a>, and{' '}
                            <a className="ul" href="#stop-practo">Practo</a>.
                        </p>

                        <dl className="coords">
                            <div>
                                <dt>LATITUDE</dt>
                                <dd>40°43′ N</dd>
                            </div>
                            <div>
                                <dt>LONGITUDE</dt>
                                <dd>74°00′ W</dd>
                            </div>
                            <div>
                                <dt>ELEVATION</dt>
                                <dd>33 FT</dd>
                            </div>
                            <div>
                                <dt>STATUS</dt>
                                <dd>HIRED · OPEN TO CHAT</dd>
                            </div>
                        </dl>

                        <div className="cover-actions">
                            <a href={Resume} className="btn" target="_blank" rel="noreferrer">
                                Read the resume <FontAwesomeIcon icon={faArrowRight} />
                            </a>
                            <a href="#experience" className="btn ghost">
                                Begin the tour
                            </a>
                        </div>

                        <ul className="cover-social">
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/harsh-khubchandani-19207b238/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} /> <span>LinkedIn</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/harshkhub"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="GitHub"
                                >
                                    <FontAwesomeIcon icon={faGithub} /> <span>GitHub</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="cover-map">
                        <NYCMap />
                        <p className="map-caption">
                            <em>Plate I.</em> An incomplete index of where the work,
                            the runs, the games and the music happen — within the five boroughs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
