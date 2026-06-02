import React from 'react'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="postcard-section section" id="contact">
            <div className="container">
                <div className="postcard-head">
                    <span className="eyebrow">§ 05 — Last page</span>
                    <h2 className="display">
                        Drop a <em>postcard.</em>
                    </h2>
                </div>

                <div className="postcard">
                    <div className="postcard-left">
                        <p className="postcard-greeting">Dear visitor,</p>
                        <p className="postcard-body">
                            Thanks for paging through. If anything in here resonated —
                            smart-glasses identity, mobile platform work, a long run,
                            or where to find a good house set in Brooklyn — I&rsquo;d
                            love to hear from you.
                        </p>
                        <p className="postcard-body">
                            Write back any time.
                        </p>
                        <p className="postcard-sign">
                            <span className="postcard-sign-mark">— Harsh</span>
                        </p>
                    </div>

                    <div className="postcard-right">
                        <div className="postcard-stamp" aria-hidden>
                            <div className="postcard-stamp-inner">
                                <span>NYC</span>
                                <span className="postcard-stamp-num">{year}</span>
                            </div>
                        </div>

                        <div className="postcard-postmark" aria-hidden>
                            <span>NEW YORK · NY</span>
                            <span className="postcard-postmark-date">JUN · MMXXVI</span>
                            <span>40°43′N · 74°00′W</span>
                        </div>

                        <ul className="postcard-address">
                            <li className="postcard-to">TO:</li>
                            <li>
                                <a href="mailto:khubchandaniharsh79@gmail.com">
                                    <FontAwesomeIcon icon={faEnvelope} />{' '}
                                    khubchandaniharsh79@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/harsh-khubchandani-19207b238/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} /> linkedin/harsh-khubchandani
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/harshkhub"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FontAwesomeIcon icon={faGithub} /> github/harshkhub
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="colophon">
                    <span>© {year} HARSH KHUBCHANDANI</span>
                    <span className="colophon-sep">·</span>
                    <span>SET IN FRAUNCES &amp; INTER</span>
                    <span className="colophon-sep">·</span>
                    <span>HAND-DRAWN IN REACT</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
