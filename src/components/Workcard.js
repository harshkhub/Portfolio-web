import React from 'react'
import { faArrowUpRightFromSquare, faCode, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Workcard.css'

const Workcard = (props) => {
    return (
        <article className="project-card">
            <div className="project-image">
                <img src={props.imgsrc} alt={props.title} />
                <div className="project-image-overlay" />
            </div>

            <div className="project-body">
                <h3 className="project-title">{props.title}</h3>
                <p className="project-text">{props.text}</p>

                {props.tags && (
                    <div className="project-tags">
                        {props.tags.map((t) => (
                            <span key={t} className="tag">{t}</span>
                        ))}
                    </div>
                )}

                <div className="project-actions">
                    {props.privateCode ? (
                        <span className="project-link disabled">
                            <FontAwesomeIcon icon={faLock} /> Private code
                        </span>
                    ) : (
                        <>
                            <a
                                className="project-link"
                                target="_blank"
                                rel="noreferrer"
                                href={props.view}
                            >
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Live
                            </a>
                            <a
                                className="project-link"
                                target="_blank"
                                rel="noreferrer"
                                href={props.source}
                            >
                                <FontAwesomeIcon icon={faCode} /> Source
                            </a>
                        </>
                    )}
                </div>
            </div>
        </article>
    )
}

export default Workcard
