import React, { useState } from 'react'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'

const EMAIL = 'khubchandaniharsh79@gmail.com'

const Footer = () => {
    const year = new Date().getFullYear()
    const [from, setFrom] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const sender = from.trim() || 'a visitor'
        const subject = `A postcard from ${sender}`
        const body = `${message.trim()}\n\n— ${sender}`
        window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    }

    const remaining = 480 - message.length

    return (
        <footer className="postcard-section section" id="contact">
            <div className="container">
                <div className="postcard-head">
                    <span className="eyebrow">§ 05 — Last page</span>
                    <h2 className="display">
                        Drop a <em>postcard.</em>
                    </h2>
                    <p className="lede">
                        Write directly below — hit <em>stamp &amp; send</em> and your
                        default mail client will hand it to me.
                    </p>
                </div>

                <form className="postcard" onSubmit={handleSubmit}>
                    <div className="postcard-left">
                        <label className="postcard-label" htmlFor="postcard-msg">
                            <span>Dear Harsh,</span>
                            <span className="postcard-count">{remaining}</span>
                        </label>
                        <textarea
                            id="postcard-msg"
                            className="postcard-textarea"
                            placeholder="…tell me what you thought, what you're hiring for, or where the next set is."
                            value={message}
                            onChange={(e) => setMessage(e.target.value.slice(0, 480))}
                            rows={9}
                            required
                        />

                        <div className="postcard-from-row">
                            <label htmlFor="postcard-from" className="postcard-from-label">
                                From:
                            </label>
                            <input
                                id="postcard-from"
                                className="postcard-from"
                                type="text"
                                placeholder="Your name (optional)"
                                value={from}
                                onChange={(e) => setFrom(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="postcard-right">
                        <button
                            type="submit"
                            className="postcard-stamp"
                            aria-label="Stamp and send"
                        >
                            <div className="postcard-stamp-inner">
                                <FontAwesomeIcon icon={faPaperPlane} />
                                <span>STAMP &amp;</span>
                                <span>SEND</span>
                                <span className="postcard-stamp-num">№ {year}</span>
                            </div>
                        </button>

                        <div className="postcard-postmark" aria-hidden>
                            <span>NEW YORK · NY</span>
                            <span className="postcard-postmark-date">JUN · MMXXVI</span>
                            <span>40°43′N · 74°00′W</span>
                        </div>

                        <ul className="postcard-address">
                            <li className="postcard-to">TO:</li>
                            <li className="postcard-to-line">Harsh Khubchandani</li>
                            <li className="postcard-to-line">Software Engineer</li>
                            <li className="postcard-to-line">Hell&apos;s Kitchen · New York, NY</li>
                            <li>
                                <a href={`mailto:${EMAIL}`}>
                                    <FontAwesomeIcon icon={faEnvelope} /> {EMAIL}
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
                </form>

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
